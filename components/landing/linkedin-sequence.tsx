"use client";

import { motion } from "framer-motion";
import {
  Eye,
  MessageSquare,
  UserPlus,
  Send,
  Linkedin,
  TrendingUp,
} from "lucide-react";
import { useLang } from "@/contexts/language-context";

const STEP_STYLES = [
  { icon: Eye, color: "#a78bfa", glow: "rgba(167,139,250,0.2)", border: "rgba(167,139,250,0.3)" },
  { icon: MessageSquare, color: "#06b6d4", glow: "rgba(6,182,212,0.2)", border: "rgba(6,182,212,0.3)" },
  { icon: UserPlus, color: "#8b5cf6", glow: "rgba(139,92,246,0.2)", border: "rgba(139,92,246,0.3)" },
  { icon: Send, color: "#10b981", glow: "rgba(16,185,129,0.2)", border: "rgba(16,185,129,0.3)" },
];

export function LinkedInSequence() {
  const { t } = useLang();

  return (
    <section className="relative py-32 overflow-hidden bg-[#050507]" id="come-funziona">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(124,58,237,0.06),transparent)]" />
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-700/40 bg-blue-950/20 text-blue-400 text-sm font-medium mb-5">
            <Linkedin className="h-3.5 w-3.5" />
            {t.sequence.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            {t.sequence.h2[0]}{" "}
            <span className="gradient-text">{t.sequence.h2[1]}</span>.
          </h2>
          <p className="mt-5 text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            {t.sequence.sub}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          <div className="absolute left-[calc(2rem+1px)] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-700/0 via-violet-700/40 to-violet-700/0 hidden sm:block" style={{ transform: "translateX(-50%)" }} />

          <div className="space-y-8 md:space-y-0">
            {t.sequence.steps.map((step, i) => {
              const style = STEP_STYLES[i];
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Step content */}
                  <div className={`w-full md:w-[calc(50%-3rem)] ${isEven ? "md:pr-10 md:text-right" : "md:pl-10"}`}>
                    <motion.div
                      whileHover={{ y: -3 }}
                      className="rounded-2xl border bg-[#080614] p-6 relative overflow-hidden group"
                      style={{ borderColor: style.border }}
                    >
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ background: `radial-gradient(circle at 50% 50%, ${style.glow}, transparent 70%)` }}
                      />
                      <div className={`relative z-10 ${isEven ? "md:text-right" : ""}`}>
                        <div className={`flex items-center gap-2 mb-3 ${isEven ? "md:justify-end" : ""}`}>
                          <span
                            className="text-xs font-mono px-2 py-0.5 rounded-full border"
                            style={{ color: style.color, borderColor: style.border, background: style.glow }}
                          >
                            {step.day}
                          </span>
                        </div>
                        <h3 className="text-white font-bold text-xl mb-2">{step.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-4">
                          {step.desc}
                        </p>
                        <div
                          className="inline-flex items-center gap-1.5 text-xs font-medium"
                          style={{ color: style.color }}
                        >
                          <TrendingUp className="h-3.5 w-3.5" />
                          {step.metric}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Center icon dot */}
                  <div
                    className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 w-14 h-14 rounded-full border-2 items-center justify-center flex-shrink-0"
                    style={{ borderColor: style.border, background: style.glow, backdropFilter: "blur(12px)" }}
                  >
                    <style.icon className="h-5 w-5" style={{ color: style.color }} />
                  </div>

                  {/* Mockup preview */}
                  <div className={`w-full md:w-[calc(50%-3rem)] ${isEven ? "md:pl-10" : "md:pr-10 md:text-right"}`}>
                    <div
                      className="rounded-xl border p-4 bg-[#0a0820]/80 backdrop-blur"
                      style={{ borderColor: style.border }}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <div className="h-7 w-7 rounded-full flex items-center justify-center" style={{ background: style.glow }}>
                          <style.icon className="h-3.5 w-3.5" style={{ color: style.color }} />
                        </div>
                        <span className="text-xs text-slate-400">{step.mockupLabel}</span>
                        <span className="ml-auto h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: style.color }} />
                      </div>
                      <p className="text-sm text-white/80 font-mono leading-relaxed">&quot;{step.mockupText}&quot;</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-slate-400 text-base mb-6">
            {t.sequence.bottomText}
          </p>
          <a
            href="/contact#contact-form"
            className="glow-btn inline-flex items-center gap-2 rounded-xl bg-violet-600 px-8 py-4 text-base font-semibold text-white hover:bg-violet-500 transition-all duration-200"
          >
            <Linkedin className="h-4 w-4" />
            {t.sequence.bottomCta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
