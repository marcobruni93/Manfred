"use client";

import { ArrowRight, BadgeCheck, Sparkles, Target, Zap } from "lucide-react";
import { useLang } from "@/contexts/language-context";
import { ContactForm } from "@/components/contact/contact-form";

const copy = {
  en: {
    badge: "Ready to make outbound work for you?",
    h1: "Stop chasing customers. Get in front of the right people.",
    sub: "If your team is still spending hours searching for leads, copying profiles and sending cold messages, you are leaving opportunities on the table. Manfred builds a smarter B2B flow: it finds the best prospects, warms them up on LinkedIn and opens conversations when they are actually ready to listen.",
    reasons: [
      "Qualified prospects instead of cold, useless lists",
      "LinkedIn sequences that warm up contacts before the message",
      "A more predictable pipeline without hiring a sales team immediately",
    ],
    stats: [
      ["Leads", "more on target"],
      ["Hours", "saved every week"],
      ["Demos", "with people who can buy"],
    ],
    kicker: "Let's talk",
    formTitle: "Fill out the form",
    formSub: "Tell us who you are and where you want to go. If there is a fit, we will show you how to turn LinkedIn into a more consistent acquisition machine.",
  },
  it: {
    badge: "Pronto a far lavorare l'outbound per te?",
    h1: "Smetti di inseguire clienti. Fatti trovare dalle persone giuste.",
    sub: "Se il tuo team sta ancora passando ore a cercare lead, copiare profili e mandare messaggi a freddo, stai lasciando opportunita sul tavolo. Manfred costruisce un flusso B2B piu intelligente: trova i prospect migliori, li scalda su LinkedIn e apre conversazioni quando sono davvero pronti ad ascoltare.",
    reasons: [
      "Prospect qualificati invece di liste fredde e inutili",
      "Sequenze LinkedIn che scaldano il contatto prima del messaggio",
      "Pipeline piu prevedibile senza assumere subito un team sales",
    ],
    stats: [
      ["Lead", "piu in target"],
      ["Ore", "risparmiate ogni settimana"],
      ["Demo", "con chi puo comprare"],
    ],
    kicker: "Parliamone",
    formTitle: "Compila il modulo",
    formSub: "Dicci chi sei e dove vuoi arrivare. Se c'e fit, ti mostriamo come trasformare LinkedIn in una macchina di acquisizione piu costante.",
  },
  es: {
    badge: "¿Listo para que el outbound trabaje por ti?",
    h1: "Deja de perseguir clientes. Ponte delante de las personas correctas.",
    sub: "Si tu equipo todavía pasa horas buscando leads, copiando perfiles y enviando mensajes fríos, estás dejando oportunidades sobre la mesa. Manfred construye un flujo B2B más inteligente: encuentra los mejores prospectos, los calienta en LinkedIn y abre conversaciones cuando realmente están listos para escuchar.",
    reasons: [
      "Prospectos cualificados en lugar de listas frías e inútiles",
      "Secuencias de LinkedIn que calientan el contacto antes del mensaje",
      "Un pipeline más predecible sin contratar un equipo comercial de inmediato",
    ],
    stats: [
      ["Leads", "más alineados"],
      ["Horas", "ahorradas cada semana"],
      ["Demos", "con quienes pueden comprar"],
    ],
    kicker: "Hablemos",
    formTitle: "Completa el formulario",
    formSub: "Cuéntanos quién eres y adónde quieres llegar. Si hay encaje, te mostraremos cómo convertir LinkedIn en una máquina de adquisición más constante.",
  },
};

const statIcons = [Target, Zap, ArrowRight];

export function ContactPageContent() {
  const { lang } = useLang();
  const c = copy[lang];

  return (
    <main className="relative overflow-hidden pt-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[130px]" />
      <div className="pointer-events-none absolute -right-32 top-80 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[90px]" />

      <section className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-200">
            <Sparkles className="h-4 w-4" /> {c.badge}
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {c.h1}
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            {c.sub}
          </p>

          <div className="mt-9 grid gap-4">
            {c.reasons.map((reason) => (
              <div key={reason} className="flex items-start gap-3 rounded-2xl border border-violet-500/15 bg-white/[0.03] p-4 text-slate-200">
                <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-violet-300" />
                <span className="text-sm font-medium sm:text-base">{reason}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {c.stats.map(([title, subtitle], index) => {
              const Icon = statIcons[index];
              return (
                <div key={title} className="rounded-2xl border border-violet-500/15 bg-violet-950/20 p-5">
                  <Icon className="mb-4 h-5 w-5 text-violet-300" />
                  <p className="text-2xl font-black text-white">{title}</p>
                  <p className="mt-1 text-sm text-slate-400">{subtitle}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-violet-600/30 via-fuchsia-500/10 to-transparent blur-2xl" />
          <div className="relative">
            <div className="mb-5 rounded-3xl border border-violet-500/20 bg-violet-950/20 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-300">{c.kicker}</p>
              <h2 className="mt-3 text-3xl font-black text-white">{c.formTitle}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">{c.formSub}</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
