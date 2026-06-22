"use client";

import { useState } from "react";
import { Header } from "@/components/dashboard/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User,
  Mail,
  LinkedinIcon,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Loader2,
} from "lucide-react";

const integrations = [
  {
    id: "linkedin",
    name: "LinkedIn",
    description: "Connetti il tuo account LinkedIn per inviare messaggi e richieste di connessione.",
    icon: LinkedinIcon,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
    connected: false,
  },
  {
    id: "email",
    name: "Email (Gmail / Outlook)",
    description: "Collega la tua casella email per inviare campagne personalizzate.",
    icon: Mail,
    iconColor: "text-red-500",
    bgColor: "bg-red-50",
    connected: true,
    accountName: "marco@azienda.it",
  },
  {
    id: "whatsapp",
    name: "WhatsApp Business",
    description: "Integra WhatsApp Business per contattare i tuoi lead via messaggio.",
    icon: MessageSquare,
    iconColor: "text-green-600",
    bgColor: "bg-green-50",
    connected: false,
    comingSoon: true,
  },
];

export default function SettingsPage() {
  const [saving, setSaving] = useState(false);
  const [notifications, setNotifications] = useState({
    email_replies: true,
    new_leads: true,
    campaign_status: false,
    weekly_report: true,
  });

  const handleSave = async () => {
    setSaving(true);
    await new Promise((r) => setTimeout(r, 800));
    setSaving(false);
  };

  const handleConnectUnipile = (provider: string) => {
    // In produzione: apre il flusso OAuth di Unipile
    console.log(`Connecting ${provider} via Unipile...`);
  };

  return (
    <div className="flex flex-col flex-1 overflow-auto">
      <Header title="Impostazioni" />

      <main className="flex-1 p-6 max-w-3xl">
        <Tabs defaultValue="profile">
          <TabsList className="mb-6">
            <TabsTrigger value="profile">Profilo</TabsTrigger>
            <TabsTrigger value="integrations">Integrazioni</TabsTrigger>
            <TabsTrigger value="notifications">Notifiche</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Informazioni personali</CardTitle>
                <CardDescription>Aggiorna i tuoi dati profilo</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold">
                    MB
                  </div>
                  <Button variant="outline" size="sm">Cambia foto</Button>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nome</Label>
                    <Input id="firstName" defaultValue="Marco" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Cognome</Label>
                    <Input id="lastName" defaultValue="Bruni" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="marco@azienda.it" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Azienda</Label>
                  <Input id="company" placeholder="Nome della tua azienda" />
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Password attuale</Label>
                  <Input id="currentPassword" type="password" placeholder="••••••••" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">Nuova password</Label>
                    <Input id="newPassword" type="password" placeholder="••••••••" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Conferma password</Label>
                    <Input id="confirmPassword" type="password" placeholder="••••••••" />
                  </div>
                </div>

                <Button onClick={handleSave} disabled={saving}>
                  {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Salva modifiche
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="integrations" className="space-y-4">
            <div className="rounded-lg border border-border bg-muted/30 p-4 flex items-start gap-3">
              <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <ExternalLink className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="font-medium text-sm">Powered by Unipile</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Le integrazioni sono gestite tramite Unipile, garantendo connessioni sicure e
                  conformi alle policy delle piattaforme.
                </p>
              </div>
            </div>

            {integrations.map((integration) => (
              <Card key={integration.id}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div
                        className={`h-10 w-10 rounded-lg ${integration.bgColor} flex items-center justify-center shrink-0`}
                      >
                        <integration.icon className={`h-5 w-5 ${integration.iconColor}`} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium text-sm">{integration.name}</p>
                          {integration.comingSoon && (
                            <Badge variant="secondary" className="text-xs">Prossimamente</Badge>
                          )}
                          {integration.connected && (
                            <div className="flex items-center gap-1 text-green-600">
                              <CheckCircle2 className="h-3.5 w-3.5" />
                              <span className="text-xs font-medium">Connesso</span>
                            </div>
                          )}
                          {!integration.connected && !integration.comingSoon && (
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <AlertCircle className="h-3.5 w-3.5" />
                              <span className="text-xs">Non connesso</span>
                            </div>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {integration.description}
                        </p>
                        {integration.connected && integration.accountName && (
                          <p className="text-xs text-primary mt-1 font-medium">
                            {integration.accountName}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="shrink-0">
                      {integration.comingSoon ? (
                        <Button size="sm" variant="outline" disabled>
                          Prossimamente
                        </Button>
                      ) : integration.connected ? (
                        <Button size="sm" variant="outline" className="text-destructive hover:text-destructive">
                          Disconnetti
                        </Button>
                      ) : (
                        <Button size="sm" onClick={() => handleConnectUnipile(integration.id)}>
                          Connetti
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="notifications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Preferenze di notifica</CardTitle>
                <CardDescription>Scegli quando e come ricevere le notifiche</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    key: "email_replies",
                    label: "Risposte ai messaggi",
                    description: "Notifica quando un lead risponde a un tuo messaggio",
                  },
                  {
                    key: "new_leads",
                    label: "Nuovi lead trovati",
                    description: "Avviso quando una campagna trova nuovi lead qualificati",
                  },
                  {
                    key: "campaign_status",
                    label: "Aggiornamenti campagne",
                    description: "Notifiche sui cambi di stato delle tue campagne",
                  },
                  {
                    key: "weekly_report",
                    label: "Report settimanale",
                    description: "Riepilogo delle performance ogni lunedì mattina",
                  },
                ].map((notif) => (
                  <div
                    key={notif.key}
                    className="flex items-center justify-between py-3 border-b border-border last:border-0"
                  >
                    <div>
                      <p className="font-medium text-sm">{notif.label}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{notif.description}</p>
                    </div>
                    <Switch
                      checked={notifications[notif.key as keyof typeof notifications]}
                      onCheckedChange={(checked) =>
                        setNotifications((prev) => ({ ...prev, [notif.key]: checked }))
                      }
                    />
                  </div>
                ))}

                <Button onClick={handleSave} disabled={saving} className="mt-2">
                  {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Salva preferenze
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
