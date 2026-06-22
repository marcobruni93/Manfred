"use client";

import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Definisci il tuo ICP",
    body: "Imposta industria, ruolo, dimensione aziendale e location. LeadFlow cerca i tuoi prospect ideali nel database da 50M+ contatti.",
    color: "#7c3aed",
  },
  {
    n: "02",
    title: "Lancia la campagna",
    body: "Crea sequenze personalizzate per email e LinkedIn con variabili dinamiche. Definisci i follow-up automatici e i timing ottimali.",
    color: "#06b6d4",
  },
  {
    n: "03",
    title: "Gestisci le risposte",
    body: "Tutte le risposte in un'unica inbox. Qualifica i lead, prendi note, muovili nel funnel di vendita con un click.",
    color: "#8b5cf6",
  },
  {
    n: "04",
    title: "Ottimizza e scala",
    body: "Analizza le performance. Duplica le sequenze vincenti. Scala il tuo outbound senza scalare il team.",
    color: "#0ea5e9",
  },
];

export function HowItWorks() {
  return (
    <section id="come-funziona" className="relative py-32 bg-[#050507]">
      <div className="container max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-violet-400 font-semibold text-sm tracking-widest uppercase mb-4"
          >
            Come funziona
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white tracking-tight"
          >
            Dall&apos;ICP al contratto firmato
            <br />
            <span className="gradient-text">in 4 passi</span>
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* connector line */}
          <div className="absolute left-[29px] top-8 bottom-8 w-px bg-gradient-to-b from-violet-600 via-cyan-500 to-violet-600 opacity-30 hidden md:block" />

          <div className="flex flex-col gap-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="flex items-start gap-6 md:gap-10"
              >
                {/* number circle */}
                <div
                  className="relative flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full border text-sm font-black"
                  style={{
                    borderColor: step.color + "55",
                    color: step.color,
                    background: step.color + "12",
                    boxShadow: `0 0 20px ${step.color}30`,
                  }}
                >
                  {step.n}
                  <div
                    className="absolute inset-0 rounded-full blur-md opacity-40"
                    style={{ background: step.color }}
                  />
                </div>

                {/* content card */}
                <div className="glass neon-border rounded-2xl p-6 flex-1 group hover:border-violet-500/40 transition-colors">
                  <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
