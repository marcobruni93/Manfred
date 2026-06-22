import Link from "next/link";
import { Header } from "@/components/dashboard/header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Megaphone, Play, Pause, MoreHorizontal, Users, MessageSquare, TrendingUp } from "lucide-react";

const mockCampaigns = [
  {
    id: "1",
    name: "SaaS Founders Italia",
    description: "Targeting CEO/Founder di startup SaaS italiane con 10-50 dipendenti",
    status: "active",
    leads_count: 124,
    messages_sent: 89,
    replies_count: 23,
    created_at: "2026-06-01",
  },
  {
    id: "2",
    name: "CFO Mid-Market",
    description: "CFO e Director Finance in aziende 50-500 dipendenti",
    status: "active",
    leads_count: 89,
    messages_sent: 67,
    replies_count: 14,
    created_at: "2026-06-10",
  },
  {
    id: "3",
    name: "HR Directors Q4",
    description: "Head of HR e CHRO in aziende enterprise italiane",
    status: "paused",
    leads_count: 256,
    messages_sent: 198,
    replies_count: 41,
    created_at: "2026-05-15",
  },
  {
    id: "4",
    name: "E-commerce Manager",
    description: "Responsabili e-commerce in retail con fatturato >5M",
    status: "draft",
    leads_count: 0,
    messages_sent: 0,
    replies_count: 0,
    created_at: "2026-06-18",
  },
];

const statusConfig = {
  active: { label: "Attiva", variant: "success" as const, icon: Play },
  paused: { label: "In pausa", variant: "warning" as const, icon: Pause },
  draft: { label: "Bozza", variant: "secondary" as const, icon: MoreHorizontal },
  completed: { label: "Completata", variant: "secondary" as const, icon: MoreHorizontal },
};

export default async function CampaignsPage() {
  const user = { email: "marco@azienda.it" };

  return (
    <div className="flex flex-col flex-1 overflow-auto">
      <Header
        title="Campagne"
        description="Gestisci le tue campagne di outreach"
        userEmail={user?.email}
      />

      <main className="flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-4 text-sm text-muted-foreground">
            <span>
              <strong className="text-foreground">8</strong> totali
            </span>
            <span>
              <strong className="text-foreground">2</strong> attive
            </span>
            <span>
              <strong className="text-foreground">1</strong> in pausa
            </span>
          </div>
          <Button asChild>
            <Link href="/campaigns/new">
              <Plus className="h-4 w-4 mr-2" />
              Nuova campagna
            </Link>
          </Button>
        </div>

        {mockCampaigns.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <Megaphone className="h-12 w-12 text-muted-foreground/50 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Nessuna campagna ancora</h3>
            <p className="text-muted-foreground mb-4 max-w-sm">
              Crea la tua prima campagna e inizia a trovare lead qualificati per il tuo business.
            </p>
            <Button asChild>
              <Link href="/campaigns/new">
                <Plus className="h-4 w-4 mr-2" />
                Crea prima campagna
              </Link>
            </Button>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {mockCampaigns.map((campaign) => {
              const config = statusConfig[campaign.status as keyof typeof statusConfig];
              const StatusIcon = config.icon;
              const replyRate = campaign.messages_sent > 0
                ? ((campaign.replies_count / campaign.messages_sent) * 100).toFixed(1)
                : "0";

              return (
                <Card key={campaign.id} className="hover:border-primary/50 transition-colors cursor-pointer">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-base">{campaign.name}</CardTitle>
                        <CardDescription className="mt-1 line-clamp-2">
                          {campaign.description}
                        </CardDescription>
                      </div>
                      <Badge variant={config.variant} className="ml-3 shrink-0">
                        <StatusIcon className="h-3 w-3 mr-1" />
                        {config.label}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-2 rounded-lg bg-muted/50">
                        <Users className="h-4 w-4 mx-auto mb-1 text-muted-foreground" />
                        <p className="text-lg font-bold">{campaign.leads_count}</p>
                        <p className="text-xs text-muted-foreground">Lead</p>
                      </div>
                      <div className="text-center p-2 rounded-lg bg-muted/50">
                        <MessageSquare className="h-4 w-4 mx-auto mb-1 text-muted-foreground" />
                        <p className="text-lg font-bold">{campaign.messages_sent}</p>
                        <p className="text-xs text-muted-foreground">Inviati</p>
                      </div>
                      <div className="text-center p-2 rounded-lg bg-muted/50">
                        <TrendingUp className="h-4 w-4 mx-auto mb-1 text-muted-foreground" />
                        <p className="text-lg font-bold">{replyRate}%</p>
                        <p className="text-xs text-muted-foreground">Risposta</p>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                      <Button size="sm" variant="outline" className="flex-1">
                        Dettagli
                      </Button>
                      <Button
                        size="sm"
                        variant={campaign.status === "active" ? "secondary" : "default"}
                        className="flex-1"
                      >
                        {campaign.status === "active" ? "Pausa" : "Avvia"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
