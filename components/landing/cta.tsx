"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/contexts/language-context";

export function CTA() {
  const { t } = useLang();

  return (
    <section className="relative py-32 bg-[#050507] overflow-hidden">
      {/* Aurora background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="aurora-orb-a absolute h-[500px] w-[500px] rounded-full blur-[130px] opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(124,58,237,1) 0%, rgba(99,102,241,0.4) 50%, transparent 70%)",
            top: "50%",
            left: "5%",
            transform: "translateY(-50%)",
          }}
        />
        <div
          className="aurora-orb-b absolute h-[400px] w-[400px] rounded-full blur-[110px] opacity-12"
          style={{
            background: "radial-gradient(circle, rgba(6,182,212,1) 0%, rgba(0,217,255,0.3) 50%, transparent 70%)",
            top: "50%",
            right: "5%",
            transform: "translateY(-50%)",
          }}
        />
        <div
          className="aurora-orb-c absolute h-[300px] w-[300px] rounded-full blur-[80px] opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(167,139,250,1) 0%, transparent 70%)",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
        <div className="absolute inset-0 dot-grid opacity-30" />
      </div>

      <div className="container max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="glass-intense neon-border rounded-3xl p-12 md:p-16 relative overflow-hidden"
        >
          {/* Inner glow lines */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
          <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-violet-600/20 to-transparent" />
          <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />

          <div className="absolute -top-20 -left-20 h-48 w-48 rounded-full bg-violet-600/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-900/25 px-5 py-2 text-xs text-violet-300 font-semibold mb-8 tracking-wide uppercase">
            <Sparkles className="h-3.5 w-3.5" />
            {t.cta.badge}
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-[3.5rem] font-black text-white tracking-tight leading-[1.1] mb-6">
            {t.cta.h2[0]}
            <br />
            <span className="gradient-text">{t.cta.h2[1]}</span>
          </h2>

          {/* Subtext */}
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            {t.cta.sub}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="shimmer-btn ring-pulse glow-btn bg-violet-600 hover:bg-violet-500 text-white px-10 h-14 text-base font-bold border-0 relative min-w-[220px] rounded-xl group"
              asChild
            >
              <Link href="/contact#contact-form">
                <span className="relative z-10 flex items-center gap-2.5">
                  {t.cta.ctaPrimary}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Button>

            <Button
              size="lg"
              variant="ghost"
              className="text-slate-400 hover:text-white hover:bg-violet-950/40 px-8 h-14 rounded-xl transition-all"
              asChild
            >
              <Link href="/pricing">
                {t.cta.ctaSecondary}
              </Link>
            </Button>
          </div>

          {/* Trust markers */}
          <div className="mt-10 pt-8 border-t border-violet-900/25 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600">
            {t.cta.trust.map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-violet-600" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
