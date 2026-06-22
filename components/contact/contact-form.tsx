"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLang } from "@/contexts/language-context";

const copy = {
  en: {
    firstName: "First name",
    firstNamePlaceholder: "John",
    lastName: "Last name",
    lastNamePlaceholder: "Smith",
    email: "Email",
    emailPlaceholder: "john@company.com",
    phone: "Phone",
    phonePlaceholder: "+44 7700 900123",
    company: "Company",
    companyPlaceholder: "Company name",
    purpose: "Goal",
    purposePlaceholder: "Tell us what you want to achieve: more demos, more B2B clients, a more predictable pipeline...",
    optional: "optional",
    submit: "I want to grow outbound",
    loading: "Sending...",
    success: "Request sent. We will contact you shortly.",
    error: "Something went wrong. Try again shortly.",
  },
  it: {
    firstName: "Nome",
    firstNamePlaceholder: "Mario",
    lastName: "Cognome",
    lastNamePlaceholder: "Rossi",
    email: "Email",
    emailPlaceholder: "mario@azienda.it",
    phone: "Numero",
    phonePlaceholder: "+39 333 123 4567",
    company: "Azienda",
    companyPlaceholder: "Nome azienda",
    purpose: "Scopo",
    purposePlaceholder: "Raccontaci cosa vuoi ottenere: più demo, più clienti B2B, una pipeline più prevedibile...",
    optional: "facoltativo",
    submit: "Voglio far crescere l'outbound",
    loading: "Invio in corso...",
    success: "Richiesta inviata. Ti ricontattiamo a breve.",
    error: "Qualcosa non ha funzionato. Riprova tra poco.",
  },
  es: {
    firstName: "Nombre",
    firstNamePlaceholder: "Juan",
    lastName: "Apellido",
    lastNamePlaceholder: "Garcia",
    email: "Email",
    emailPlaceholder: "juan@empresa.com",
    phone: "Telefono",
    phonePlaceholder: "+34 600 123 456",
    company: "Empresa",
    companyPlaceholder: "Nombre de la empresa",
    purpose: "Objetivo",
    purposePlaceholder: "Cuéntanos qué quieres conseguir: más demos, más clientes B2B, un pipeline más predecible...",
    optional: "opcional",
    submit: "Quiero hacer crecer mi outbound",
    loading: "Enviando...",
    success: "Solicitud enviada. Te contactaremos pronto.",
    error: "Algo salió mal. Inténtalo de nuevo en breve.",
  },
};

export function ContactForm() {
  const { lang } = useLang();
  const c = copy[lang];
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("loading");

    const formData = new FormData(form);
    const payload = {
      nome: String(formData.get("nome") || ""),
      cognome: String(formData.get("cognome") || ""),
      email: String(formData.get("email") || ""),
      numero: String(formData.get("numero") || ""),
      azienda: String(formData.get("azienda") || ""),
      scopo: String(formData.get("scopo") || ""),
      source: "manfred-contact-page",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Webhook request failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form id="contact-form" onSubmit={handleSubmit} className="rounded-2xl border border-violet-500/20 bg-white/[0.03] p-4 shadow-2xl shadow-violet-950/30 backdrop-blur-xl sm:rounded-[2rem] sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
        <label className="space-y-2 text-sm font-semibold text-slate-200">
          {c.firstName}
          <Input name="nome" required placeholder={c.firstNamePlaceholder} className="h-12 border-violet-500/20 bg-[#09090d] text-white placeholder:text-slate-600 focus-visible:ring-violet-500" />
        </label>
        <label className="space-y-2 text-sm font-semibold text-slate-200">
          {c.lastName}
          <Input name="cognome" required placeholder={c.lastNamePlaceholder} className="h-12 border-violet-500/20 bg-[#09090d] text-white placeholder:text-slate-600 focus-visible:ring-violet-500" />
        </label>
        <label className="space-y-2 text-sm font-semibold text-slate-200">
          {c.email}
          <Input name="email" type="email" required placeholder={c.emailPlaceholder} className="h-12 border-violet-500/20 bg-[#09090d] text-white placeholder:text-slate-600 focus-visible:ring-violet-500" />
        </label>
        <label className="space-y-2 text-sm font-semibold text-slate-200">
          {c.phone} <span className="font-normal text-slate-500">{c.optional}</span>
          <Input name="numero" type="tel" placeholder={c.phonePlaceholder} className="h-12 border-violet-500/20 bg-[#09090d] text-white placeholder:text-slate-600 focus-visible:ring-violet-500" />
        </label>
        <label className="space-y-2 text-sm font-semibold text-slate-200 sm:col-span-2">
          {c.company} <span className="font-normal text-slate-500">{c.optional}</span>
          <Input name="azienda" placeholder={c.companyPlaceholder} className="h-12 border-violet-500/20 bg-[#09090d] text-white placeholder:text-slate-600 focus-visible:ring-violet-500" />
        </label>
        <label className="space-y-2 text-sm font-semibold text-slate-200 sm:col-span-2">
          {c.purpose} <span className="font-normal text-slate-500">{c.optional}</span>
          <Textarea name="scopo" placeholder={c.purposePlaceholder} className="min-h-32 border-violet-500/20 bg-[#09090d] text-white placeholder:text-slate-600 focus-visible:ring-violet-500" />
        </label>
      </div>

      <Button type="submit" disabled={status === "loading"} className="mt-6 h-12 w-full rounded-xl bg-violet-600 px-3 text-sm font-bold text-white hover:bg-violet-500 sm:mt-7 sm:text-base">
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> {c.loading}
          </>
        ) : (
          <>
            {c.submit} <ArrowRight className="h-4 w-4" />
          </>
        )}
      </Button>

      {status === "success" && (
        <p className="mt-4 flex items-center gap-2 text-sm font-medium text-emerald-300">
          <CheckCircle2 className="h-4 w-4" /> {c.success}
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 text-sm font-medium text-red-300">
          {c.error}
        </p>
      )}
    </form>
  );
}
