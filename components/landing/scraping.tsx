"use client";

import { motion } from "framer-motion";
import { Globe, Linkedin, MapPin, Database, Zap, ChevronRight } from "lucide-react";
import { useLang } from "@/contexts/language-context";

const SOURCE_META = [
  { icon: Linkedin, color: "#0077b5", glow: "rgba(0,119,181,0.25)", border: "rgba(0,119,181,0.35)" },
  { icon: Globe, color: "#7c3aed", glow: "rgba(124,58,237,0.25)", border: "rgba(124,58,237,0.35)" },
  { icon: MapPin, color: "#06b6d4", glow: "rgba(6,182,212,0.25)", border: "rgba(6,182,212,0.35)" },
  { icon: Database, color: "#10b981", glow: "rgba(16,185,129,0.25)", border: "rgba(16,185,129,0.35)" },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export function Scraping() {
  const { t } = useLang();

  return (
    <section className="relative py-32 overflow-hidden bg-[#050507]">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-600/30 to-transparent" />

      <div className="container max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-700/40 bg-cyan-950/30 text-cyan-400 text-sm font-medium mb-5">
            <Zap className="h-3.5 w-3.5" />
            {t.scraping.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            {t.scraping.h2[0]}{" "}
            <span className="gradient-text">{t.scraping.h2[1]}</span>
            {t.scraping.h2[2]}
          </h2>
          <p className="mt-5 text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            {t.scraping.sub}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Source cards */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {t.scraping.sources.map((src, i) => {
              const meta = SOURCE_META[i];
              return (
                <motion.div
                  key={src.label}
                  variants={item}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="relative rounded-2xl p-5 border bg-[#0a0915] overflow-hidden group cursor-pointer"
                  style={{ borderColor: meta.border }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{ background: `radial-gradient(circle at 30% 30%, ${meta.glow}, transparent 70%)` }}
                  />
                  <div className="relative z-10">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                      style={{ background: meta.glow, border: `1px solid ${meta.border}` }}
                    >
                      <meta.icon className="h-5 w-5" style={{ color: meta.color }} />
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-semibold text-base">{src.label}</h3>
                      <span
                        className="text-xs font-medium px-2 py-0.5 rounded-full"
                        style={{ color: meta.color, background: meta.glow, border: `1px solid ${meta.border}` }}
                      >
                        {src.stat}
                      </span>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">{src.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Live feed mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl border border-violet-900/40 bg-[#070612] overflow-hidden neon-border">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-violet-900/30 bg-[#0a0820]">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                <span className="ml-3 text-xs text-slate-500 font-mono">{t.scraping.terminalTitle}</span>
                <span className="ml-auto flex items-center gap-1 text-xs text-green-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                  {t.scraping.terminalRunning}
                </span>
              </div>

              {/* Lead rows */}
              <div className="p-4 space-y-2">
                {t.scraping.liveLeads.map((lead, i) => (
                  <motion.div
                    key={lead.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.12 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#0d0a22] border border-violet-900/20 hover:border-violet-700/40 transition-colors"
                  >
                    <div className="h-8 w-8 rounded-full bg-violet-900/50 border border-violet-700/50 flex items-center justify-center text-xs font-bold text-violet-300 flex-shrink-0">
                      {lead.name.charAt(0)}{lead.name.split(" ")[1]?.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-sm font-medium">{lead.name}</div>
                      <div className="text-slate-500 text-xs truncate">{lead.role}</div>
                    </div>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full border flex-shrink-0 ${
                        lead.tag === "LinkedIn"
                          ? "text-blue-400 border-blue-700/40 bg-blue-950/30"
                          : lead.tag === "Web Scrape"
                          ? "text-violet-400 border-violet-700/40 bg-violet-950/30"
                          : lead.tag === "Database"
                          ? "text-emerald-400 border-emerald-700/40 bg-emerald-950/30"
                          : "text-cyan-400 border-cyan-700/40 bg-cyan-950/30"
                      }`}
                    >
                      {lead.tag}
                    </span>
                  </motion.div>
                ))}

                {/* Loading row */}
                <div className="flex items-center gap-3 p-3 rounded-xl border border-violet-900/10 bg-[#0a0820]/50">
                  <div className="h-8 w-8 rounded-full bg-violet-900/20 border border-violet-900/20 flex-shrink-0 animate-pulse" />
                  <div className="flex-1 space-y-1.5">
                    <div className="h-2 rounded bg-violet-900/30 w-28 animate-pulse" />
                    <div className="h-2 rounded bg-slate-800 w-40 animate-pulse" />
                  </div>
                  <div className="h-5 w-16 rounded-full bg-violet-900/20 animate-pulse" />
                </div>
              </div>

              {/* Footer stat */}
              <div className="px-5 py-3.5 border-t border-violet-900/20 bg-[#0a0820] flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono">{t.scraping.terminalFooter}</span>
                <button className="flex items-center gap-1 text-xs text-violet-400 hover:text-violet-300 transition-colors">
                  {t.scraping.terminalViewAll} <ChevronRight className="h-3 w-3" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
