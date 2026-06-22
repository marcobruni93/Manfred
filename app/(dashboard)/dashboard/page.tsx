import { Header } from "@/components/dashboard/header";
import { StatsCard } from "@/components/dashboard/stats-card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Users,
  Megaphone,
  MessageSquare,
  TrendingUp,
  ArrowRight,
  Plus,
} from "lucide-react";
import Link from "next/link";

const recentCampaigns = [
  { name: "SaaS Founders Italia", status: "active", leads: 124, replies: 23 },
  { name: "CFO Mid-Market", status: "active", leads: 89, replies: 14 },
  { name: "HR Directors Q4", status: "paused", leads: 256, replies: 41 },
];

const recentLeads = [
  { name: "Luca Moretti", company: "TechFlow SRL", role: "CEO", status: "replied" },
  { name: "Anna Conti", company: "GrowthCo", role: "CMO", status: "contacted" },
  { name: "Marco Esposito", company: "ScaleUp SpA", role: "CTO", status: "new" },
  { name: "Sofia Romano", company: "DigitalFirst", role: "Head of Sales", status: "qualified" },
];

const statusColors: Record<string, string> = {
  active: "success",
  paused: "warning",
  draft: "secondary",
  new: "secondary",
  contacted: "default",
  replied: "success",
  qualified: "default",
};

export default async function DashboardPage() {
  const user = { email: "marco@azienda.it" };

  return (
    <div className="flex flex-col flex-1 overflow-auto">
      <Header
        title="Dashboard"
        description="Benvenuto su LeadFlow"
        userEmail={user?.email}
      />

      <main className="flex-1 p-6 space-y-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Lead totali"
            value="2.847"
            change="+12% questo mese"
            changeType="positive"
            icon={Users}
          />
          <StatsCard
            title="Campagne attive"
            value="8"
            change="3 in pausa"
            changeType="neutral"
            icon={Megaphone}
          />
          <StatsCard
            title="Messaggi inviati"
            value="1.234"
            change="+28% questa settimana"
            changeType="positive"
            icon={MessageSquare}
          />
          <StatsCard
            title="Tasso di risposta"
            value="18.4%"
            change="+4.2% vs mese scorso"
            changeType="positive"
            icon={TrendingUp}
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-base">Campagne recenti</CardTitle>
                <CardDescription>Le tue ultime campagne attive</CardDescription>
              </div>
              <Button size="sm" asChild>
                <Link href="/campaigns/new">
                  <Plus className="h-4 w-4 mr-1" />
                  Nuova
                </Link>
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentCampaigns.map((campaign) => (
                <div
                  key={campaign.name}
                  className="flex items-center justify-between py-2 border-b border-border last:border-0"
                >
                  <div>
                    <p className="font-medium text-sm">{campaign.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {campaign.leads} lead · {campaign.replies} risposte
                    </p>
                  </div>
                  <Badge variant={statusColors[campaign.status] as "success" | "warning" | "secondary"}>
                    {campaign.status === "active" ? "Attiva" : "In pausa"}
                  </Badge>
                </div>
              ))}
              <Button variant="ghost" size="sm" className="w-full mt-2" asChild>
                <Link href="/campaigns">
                  Vedi tutte le campagne
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-base">Ultimi lead</CardTitle>
                <CardDescription>I contatti aggiunti di recente</CardDescription>
              </div>
              <Button size="sm" variant="outline" asChild>
                <Link href="/leads">Vedi tutti</Link>
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentLeads.map((lead) => (
                <div
                  key={lead.name}
                  className="flex items-center justify-between py-2 border-b border-border last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                      {lead.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{lead.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {lead.role} · {lead.company}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant={
                      lead.status === "replied" || lead.status === "qualified"
                        ? "success"
                        : lead.status === "contacted"
                        ? "default"
                        : "secondary"
                    }
                    className="text-xs"
                  >
                    {lead.status === "new" ? "Nuovo"
                      : lead.status === "contacted" ? "Contattato"
                      : lead.status === "replied" ? "Risposto"
                      : "Qualificato"}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Utilizzo del piano</CardTitle>
            <CardDescription>Piano Starter · Rinnovo il 21 luglio 2026</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Lead questo mese</span>
                  <span className="font-medium">347 / 500</span>
                </div>
                <Progress value={69} className="h-2" />
                <p className="text-xs text-muted-foreground">153 lead rimanenti</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Campagne attive</span>
                  <span className="font-medium">2 / 3</span>
                </div>
                <Progress value={67} className="h-2" />
                <p className="text-xs text-muted-foreground">1 campagna rimanente</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="mt-4" asChild>
              <Link href="/billing">
                Upgradia il piano
                <ArrowRight className="ml-2 h-3 w-3" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
