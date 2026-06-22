export type Profile = {
  id: string;
  email: string;
  full_name: string | null;
  avatar_url: string | null;
  company: string | null;
  plan: "starter" | "pro" | "enterprise" | null;
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  subscription_status: "active" | "canceled" | "past_due" | "trialing" | null;
  created_at: string;
  updated_at: string;
};

export type Campaign = {
  id: string;
  user_id: string;
  name: string;
  description: string | null;
  status: "draft" | "active" | "paused" | "completed";
  target_industry: string | null;
  target_company_size: string | null;
  target_location: string | null;
  target_role: string | null;
  leads_count: number;
  messages_sent: number;
  replies_count: number;
  created_at: string;
  updated_at: string;
};

export type Lead = {
  id: string;
  user_id: string;
  campaign_id: string | null;
  first_name: string;
  last_name: string;
  email: string | null;
  phone: string | null;
  company: string | null;
  role: string | null;
  linkedin_url: string | null;
  website: string | null;
  industry: string | null;
  company_size: string | null;
  location: string | null;
  status: "new" | "contacted" | "replied" | "qualified" | "disqualified";
  notes: string | null;
  created_at: string;
  updated_at: string;
};

export type Message = {
  id: string;
  user_id: string;
  lead_id: string;
  campaign_id: string | null;
  channel: "email" | "linkedin" | "whatsapp";
  direction: "outbound" | "inbound";
  subject: string | null;
  body: string;
  status: "pending" | "sent" | "delivered" | "opened" | "replied" | "failed";
  sent_at: string | null;
  created_at: string;
};

export type UnipileConnection = {
  id: string;
  user_id: string;
  provider: "linkedin" | "email" | "whatsapp";
  account_id: string;
  account_name: string | null;
  status: "active" | "disconnected" | "error";
  created_at: string;
};
