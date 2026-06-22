import { Header } from "@/components/dashboard/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Mail, LinkedinIcon, Reply, Clock, CheckCheck } from "lucide-react";

const mockMessages = [
  {
    id: "1",
    lead: "Luca Moretti",
    company: "TechFlow SRL",
    channel: "email",
    subject: "Idea per aumentare le vendite di TechFlow",
    preview: "Ciao Luca, ho visto che TechFlow sta crescendo molto nel settore SaaS...",
    status: "replied",
    date: "2026-06-20",
    time: "14:32",
  },
  {
    id: "2",
    lead: "Anna Conti",
    company: "GrowthCo",
    channel: "linkedin",
    subject: "Connessione su LinkedIn",
    preview: "Ciao Anna, ho visto il tuo profilo e il lavoro che stai facendo in GrowthCo...",
    status: "opened",
    date: "2026-06-20",
    time: "11:15",
  },
  {
    id: "3",
    lead: "Marco Esposito",
    company: "ScaleUp SpA",
    channel: "email",
    subject: "Come ScaleUp può ridurre i costi IT",
    preview: "Buongiorno Marco, sono Marco di LeadFlow. Ho analizzato la vostra infrastruttura...",
    status: "sent",
    date: "2026-06-19",
    time: "09:00",
  },
  {
    id: "4",
    lead: "Sofia Romano",
    company: "DigitalFirst",
    channel: "email",
    subject: "Re: Lead generation per il team commerciale",
    preview: "Grazie per il tuo messaggio! Sarei molto interessata ad una call per...",
    status: "replied",
    date: "2026-06-19",
    time: "16:45",
    isInbound: true,
  },
  {
    id: "5",
    lead: "Elena Bianchi",
    company: "StartupXYZ",
    channel: "linkedin",
    subject: "Messaggio iniziale",
    preview: "Ciao Elena, complimenti per la crescita di StartupXYZ...",
    status: "delivered",
    date: "2026-06-18",
    time: "10:20",
  },
];

const statusConfig = {
  sent: { label: "Inviato", icon: Clock, color: "text-muted-foreground" },
  delivered: { label: "Consegnato", icon: CheckCheck, color: "text-blue-500" },
  opened: { label: "Aperto", icon: CheckCheck, color: "text-indigo-500" },
  replied: { label: "Risposto", icon: Reply, color: "text-green-600" },
  failed: { label: "Fallito", icon: Clock, color: "text-red-500" },
};

export default async function MessagesPage() {
  const user = { email: "marco@azienda.it" };

  const replies = mockMessages.filter((m) => m.status === "replied");
  const sent = mockMessages.filter((m) => m.status !== "replied");

  return (
    <div className="flex flex-col flex-1 overflow-auto">
      <Header
        title="Messaggi"
        description="Outreach e conversazioni con i tuoi lead"
        userEmail={user?.email}
      />

      <main className="flex-1 p-6">
        <div className="flex gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Cerca conversazioni..." className="pl-9" />
          </div>
        </div>

        <Tabs defaultValue="all">
          <TabsList className="mb-4">
            <TabsTrigger value="all">
              Tutti
              <Badge variant="secondary" className="ml-2 text-xs">{mockMessages.length}</Badge>
            </TabsTrigger>
            <TabsTrigger value="replies">
              Risposte
              <Badge variant="success" className="ml-2 text-xs">{replies.length}</Badge>
            </TabsTrigger>
            <TabsTrigger value="sent">Inviati</TabsTrigger>
          </TabsList>

          {["all", "replies", "sent"].map((tab) => {
            const messages = tab === "all" ? mockMessages : tab === "replies" ? replies : sent;
            return (
              <TabsContent key={tab} value={tab} className="space-y-2">
                {messages.map((msg) => {
                  const config = statusConfig[msg.status as keyof typeof statusConfig];
                  const StatusIcon = config.icon;

                  return (
                    <div
                      key={msg.id}
                      className="flex items-start gap-4 rounded-lg border border-border p-4 hover:bg-muted/30 transition-colors cursor-pointer"
                    >
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary shrink-0">
                        {msg.lead.split(" ").map((n) => n[0]).join("")}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="font-medium text-sm truncate">{msg.lead}</span>
                            <span className="text-xs text-muted-foreground shrink-0">· {msg.company}</span>
                            {msg.channel === "email" ? (
                              <Mail className="h-3 w-3 text-muted-foreground shrink-0" />
                            ) : (
                              <LinkedinIcon className="h-3 w-3 text-blue-500 shrink-0" />
                            )}
                            {msg.isInbound && (
                              <Badge variant="success" className="text-xs shrink-0">Risposta</Badge>
                            )}
                          </div>
                          <span className="text-xs text-muted-foreground shrink-0">
                            {msg.date} {msg.time}
                          </span>
                        </div>

                        <p className="text-sm font-medium mt-0.5 truncate">{msg.subject}</p>
                        <p className="text-xs text-muted-foreground mt-0.5 truncate">{msg.preview}</p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <StatusIcon className={`h-4 w-4 ${config.color}`} />
                        <span className={`text-xs ${config.color} hidden sm:inline`}>{config.label}</span>
                      </div>
                    </div>
                  );
                })}

                {messages.length === 0 && (
                  <div className="text-center py-12 text-muted-foreground">
                    <p>Nessun messaggio in questa categoria</p>
                  </div>
                )}
              </TabsContent>
            );
          })}
        </Tabs>
      </main>
    </div>
  );
}
