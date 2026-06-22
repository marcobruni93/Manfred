"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/dashboard/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Loader2, Target, MessageSquare, Settings2 } from "lucide-react";

const steps = [
  { id: 1, label: "Targeting", icon: Target },
  { id: 2, label: "Messaggi", icon: MessageSquare },
  { id: 3, label: "Impostazioni", icon: Settings2 },
];

export default function NewCampaignPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    description: "",
    target_industry: "",
    target_role: "",
    target_company_size: "",
    target_location: "",
    subject: "",
    message_body: "",
    followup_days: "3",
    channel: "email",
  });

  const updateForm = (key: string, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    router.push("/campaigns");
  };

  return (
    <div className="flex flex-col flex-1 overflow-auto">
      <Header title="Nuova campagna" />

      <main className="flex-1 p-6 max-w-2xl mx-auto w-full">
        <div className="mb-6">
          <Link
            href="/campaigns"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Torna alle campagne
          </Link>
        </div>

        <div className="flex items-center gap-2 mb-8">
          {steps.map((s, i) => (
            <div key={s.id} className="flex items-center gap-2">
              <button
                onClick={() => step > s.id && setStep(s.id)}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  step === s.id
                    ? "bg-primary text-primary-foreground"
                    : step > s.id
                    ? "text-primary cursor-pointer hover:bg-primary/10"
                    : "text-muted-foreground cursor-not-allowed"
                }`}
              >
                <s.icon className="h-4 w-4" />
                {s.label}
              </button>
              {i < steps.length - 1 && (
                <div className={`h-px w-8 ${step > s.id ? "bg-primary" : "bg-border"}`} />
              )}
            </div>
          ))}
        </div>

        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>Definisci il tuo target</CardTitle>
              <CardDescription>
                Specifica le caratteristiche dei tuoi prospect ideali. Più sei preciso, migliori
                saranno i risultati.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome campagna *</Label>
                <Input
                  id="name"
                  placeholder="Es: CEO SaaS Q3 2026"
                  value={form.name}
                  onChange={(e) => updateForm("name", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descrizione</Label>
                <Textarea
                  id="description"
                  placeholder="Breve descrizione degli obiettivi della campagna..."
                  value={form.description}
                  onChange={(e) => updateForm("description", e.target.value)}
                  rows={3}
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="industry">Industria target</Label>
                  <Select onValueChange={(v) => updateForm("target_industry", v)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleziona industria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="saas">SaaS / Software</SelectItem>
                      <SelectItem value="ecommerce">E-commerce</SelectItem>
                      <SelectItem value="finance">Finance / FinTech</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="manufacturing">Manifatturiero</SelectItem>
                      <SelectItem value="consulting">Consulenza</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="real_estate">Immobiliare</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role">Ruolo target</Label>
                  <Select onValueChange={(v) => updateForm("target_role", v)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleziona ruolo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ceo">CEO / Founder</SelectItem>
                      <SelectItem value="cto">CTO / CIO</SelectItem>
                      <SelectItem value="cmo">CMO / Marketing Director</SelectItem>
                      <SelectItem value="cfo">CFO / Finance Director</SelectItem>
                      <SelectItem value="head_sales">Head of Sales</SelectItem>
                      <SelectItem value="head_hr">Head of HR / CHRO</SelectItem>
                      <SelectItem value="operations">Operations Manager</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company_size">Dimensione azienda</Label>
                  <Select onValueChange={(v) => updateForm("target_company_size", v)}>
                    <SelectTrigger>
                      <SelectValue placeholder="N. dipendenti" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1-10 dipendenti</SelectItem>
                      <SelectItem value="11-50">11-50 dipendenti</SelectItem>
                      <SelectItem value="51-200">51-200 dipendenti</SelectItem>
                      <SelectItem value="201-500">201-500 dipendenti</SelectItem>
                      <SelectItem value="500+">500+ dipendenti</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    placeholder="Es: Milano, Italia"
                    value={form.target_location}
                    onChange={(e) => updateForm("target_location", e.target.value)}
                  />
                </div>
              </div>

              <Button
                className="w-full mt-4"
                onClick={() => setStep(2)}
                disabled={!form.name}
              >
                Continua — Crea messaggi
              </Button>
            </CardContent>
          </Card>
        )}

        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>Crea i tuoi messaggi</CardTitle>
              <CardDescription>
                Scrivi il messaggio iniziale e i follow-up. Usa variabili come{" "}
                <Badge variant="secondary" className="text-xs">{"{{nome}}"}</Badge>{" "}
                <Badge variant="secondary" className="text-xs">{"{{azienda}}"}</Badge> per personalizzare.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Canale di invio</Label>
                <div className="flex gap-3">
                  {["email", "linkedin"].map((channel) => (
                    <button
                      key={channel}
                      onClick={() => updateForm("channel", channel)}
                      className={`flex-1 rounded-lg border p-3 text-sm font-medium capitalize transition-colors ${
                        form.channel === channel
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-border hover:bg-muted"
                      }`}
                    >
                      {channel === "email" ? "Email" : "LinkedIn"}
                    </button>
                  ))}
                </div>
              </div>

              {form.channel === "email" && (
                <div className="space-y-2">
                  <Label htmlFor="subject">Oggetto email</Label>
                  <Input
                    id="subject"
                    placeholder="Es: Idea per aumentare le vendite di {{azienda}}"
                    value={form.subject}
                    onChange={(e) => updateForm("subject", e.target.value)}
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="message">Messaggio iniziale</Label>
                <Textarea
                  id="message"
                  placeholder={`Ciao {{nome}},\n\nHo visto che lavori in {{azienda}} come {{ruolo}}...\n\nSaluti,\n{{mittente}}`}
                  value={form.message_body}
                  onChange={(e) => updateForm("message_body", e.target.value)}
                  rows={8}
                />
                <p className="text-xs text-muted-foreground">
                  Variabili disponibili:{" "}
                  {["nome", "cognome", "azienda", "ruolo", "mittente"].map((v) => (
                    <Badge key={v} variant="secondary" className="text-xs mr-1">
                      {`{{${v}}}`}
                    </Badge>
                  ))}
                </p>
              </div>

              <div className="flex gap-3 mt-4">
                <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                  Indietro
                </Button>
                <Button
                  onClick={() => setStep(3)}
                  className="flex-1"
                  disabled={!form.message_body}
                >
                  Continua — Impostazioni
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {step === 3 && (
          <Card>
            <CardHeader>
              <CardTitle>Impostazioni campagna</CardTitle>
              <CardDescription>
                Configura le ultime impostazioni prima di lanciare la campagna.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="followup">Follow-up automatico (giorni)</Label>
                <Select
                  defaultValue={form.followup_days}
                  onValueChange={(v) => updateForm("followup_days", v)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2">2 giorni</SelectItem>
                    <SelectItem value="3">3 giorni</SelectItem>
                    <SelectItem value="5">5 giorni</SelectItem>
                    <SelectItem value="7">7 giorni</SelectItem>
                    <SelectItem value="0">Nessun follow-up</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="rounded-lg border border-border bg-muted/30 p-4 space-y-3">
                <h4 className="text-sm font-semibold">Riepilogo campagna</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span className="text-muted-foreground">Nome:</span>
                  <span className="font-medium">{form.name}</span>
                  <span className="text-muted-foreground">Industria:</span>
                  <span className="font-medium">{form.target_industry || "—"}</span>
                  <span className="text-muted-foreground">Ruolo:</span>
                  <span className="font-medium">{form.target_role || "—"}</span>
                  <span className="text-muted-foreground">Canale:</span>
                  <span className="font-medium capitalize">{form.channel}</span>
                  <span className="text-muted-foreground">Follow-up:</span>
                  <span className="font-medium">
                    {form.followup_days === "0" ? "Disabilitato" : `Dopo ${form.followup_days} giorni`}
                  </span>
                </div>
              </div>

              <div className="flex gap-3 mt-4">
                <Button variant="outline" onClick={() => setStep(2)} className="flex-1">
                  Indietro
                </Button>
                <Button onClick={handleSubmit} className="flex-1" disabled={loading}>
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Lancia campagna
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}
