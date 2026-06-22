-- Profiles table (extends auth.users)
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  email text not null,
  full_name text,
  avatar_url text,
  company text,
  plan text check (plan in ('starter', 'pro', 'enterprise')) default null,
  stripe_customer_id text unique,
  stripe_subscription_id text unique,
  subscription_status text check (subscription_status in ('active', 'canceled', 'past_due', 'trialing')) default null,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

-- Campaigns table
create table public.campaigns (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  name text not null,
  description text,
  status text check (status in ('draft', 'active', 'paused', 'completed')) default 'draft' not null,
  target_industry text,
  target_company_size text,
  target_location text,
  target_role text,
  leads_count integer default 0 not null,
  messages_sent integer default 0 not null,
  replies_count integer default 0 not null,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

-- Leads table
create table public.leads (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  campaign_id uuid references public.campaigns(id) on delete set null,
  first_name text not null,
  last_name text not null,
  email text,
  phone text,
  company text,
  role text,
  linkedin_url text,
  website text,
  industry text,
  company_size text,
  location text,
  status text check (status in ('new', 'contacted', 'replied', 'qualified', 'disqualified')) default 'new' not null,
  notes text,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

-- Messages table
create table public.messages (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  lead_id uuid references public.leads(id) on delete cascade not null,
  campaign_id uuid references public.campaigns(id) on delete set null,
  channel text check (channel in ('email', 'linkedin', 'whatsapp')) not null,
  direction text check (direction in ('outbound', 'inbound')) default 'outbound' not null,
  subject text,
  body text not null,
  status text check (status in ('pending', 'sent', 'delivered', 'opened', 'replied', 'failed')) default 'pending' not null,
  sent_at timestamptz,
  created_at timestamptz default now() not null
);

-- Unipile connections table
create table public.unipile_connections (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  provider text check (provider in ('linkedin', 'email', 'whatsapp')) not null,
  account_id text not null,
  account_name text,
  status text check (status in ('active', 'disconnected', 'error')) default 'active' not null,
  created_at timestamptz default now() not null,
  unique(user_id, provider)
);

-- RLS (Row Level Security)
alter table public.profiles enable row level security;
alter table public.campaigns enable row level security;
alter table public.leads enable row level security;
alter table public.messages enable row level security;
alter table public.unipile_connections enable row level security;

-- Profiles RLS policies
create policy "Users can view own profile" on public.profiles
  for select using (auth.uid() = id);

create policy "Users can update own profile" on public.profiles
  for update using (auth.uid() = id);

-- Campaigns RLS policies
create policy "Users can CRUD own campaigns" on public.campaigns
  for all using (auth.uid() = user_id);

-- Leads RLS policies
create policy "Users can CRUD own leads" on public.leads
  for all using (auth.uid() = user_id);

-- Messages RLS policies
create policy "Users can CRUD own messages" on public.messages
  for all using (auth.uid() = user_id);

-- Unipile connections RLS policies
create policy "Users can CRUD own connections" on public.unipile_connections
  for all using (auth.uid() = user_id);

-- Function: auto-create profile on user signup
create or replace function public.handle_new_user()
returns trigger
language plpgsql security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, avatar_url)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'avatar_url'
  );
  return new;
end;
$$;

-- Trigger: create profile on auth.users insert
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Function: auto-update updated_at
create or replace function public.handle_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger set_updated_at_profiles before update on public.profiles
  for each row execute procedure public.handle_updated_at();

create trigger set_updated_at_campaigns before update on public.campaigns
  for each row execute procedure public.handle_updated_at();

create trigger set_updated_at_leads before update on public.leads
  for each row execute procedure public.handle_updated_at();

-- Indexes for performance
create index campaigns_user_id_idx on public.campaigns(user_id);
create index leads_user_id_idx on public.leads(user_id);
create index leads_campaign_id_idx on public.leads(campaign_id);
create index messages_user_id_idx on public.messages(user_id);
create index messages_lead_id_idx on public.messages(lead_id);
