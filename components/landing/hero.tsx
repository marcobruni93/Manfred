"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useLang } from "@/contexts/language-context";
import { SafeMammothScene } from "@/components/three/safe-mammoth-scene";

export function Hero() {
  const { t } = useLang();

  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden scanlines py-24 sm:py-28">
      <div className="absolute inset-0 z-0">
        <SafeMammothScene />
      </div>

      {/* Aurora orbs */}
      <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden opacity-80 sm:opacity-100">
        <div
          className="aurora-orb-a absolute h-[320px] w-[320px] rounded-full blur-[90px] opacity-20 sm:h-[600px] sm:w-[600px] sm:blur-[120px]"
          style={{
            background: "radial-gradient(circle, rgba(124,58,237,0.9) 0%, rgba(99,102,241,0.4) 50%, transparent 70%)",
            top: "5%",
            left: "10%",
          }}
        />
        <div
          className="aurora-orb-b absolute h-[280px] w-[280px] rounded-full blur-[80px] opacity-15 sm:h-[500px] sm:w-[500px] sm:blur-[100px]"
          style={{
            background: "radial-gradient(circle, rgba(6,182,212,0.9) 0%, rgba(0,217,255,0.3) 50%, transparent 70%)",
            top: "20%",
            right: "5%",
          }}
        />
        <div
          className="aurora-orb-c absolute h-[240px] w-[240px] rounded-full blur-[70px] opacity-10 sm:h-[400px] sm:w-[400px] sm:blur-[90px]"
          style={{
            background: "radial-gradient(circle, rgba(167,139,250,0.9) 0%, rgba(139,92,246,0.3) 50%, transparent 70%)",
            bottom: "20%",
            left: "30%",
          }}
        />
      </div>

      {/* Radial gradient overlays for depth */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(124,58,237,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_70%,rgba(6,182,212,0.07),transparent)]" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#050507] to-transparent" />
      </div>

      {/* Hero content */}
      <div className="relative z-20 mx-auto max-w-5xl px-4 pt-10 text-center sm:px-6 sm:pt-20 md:pt-24">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55 }}
          className="mb-6 inline-flex max-w-full items-center gap-2.5 rounded-full border border-violet-500/70 bg-violet-900/70 px-4 py-2 text-xs font-semibold text-violet-200 shadow-[0_0_30px_rgba(124,58,237,0.35),0_0_0_1px_rgba(167,139,250,0.1)] ring-1 ring-violet-500/20 backdrop-blur-md sm:mb-8 sm:px-5 sm:py-2.5 sm:text-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-400" />
          </span>
          {t.hero.badge}
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-balance text-[2.75rem] font-extrabold leading-[1.03] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.08)]">{t.hero.h1[0]}</span>
          <br />
          <span className="gradient-text">{t.hero.h1[1]}</span>
          <br />
          <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.08)]">{t.hero.h1[2]}</span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:mt-7 sm:text-lg md:text-xl"
        >
          {t.hero.sub}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.38 }}
          className="mt-8 flex flex-col justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4"
        >
          <Link
            href="/contact#contact-form"
            className="shimmer-btn ring-pulse glow-btn group inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-violet-500 sm:px-8 sm:py-4 sm:text-base"
          >
            {t.hero.ctaPrimary}
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#come-funziona"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-violet-700/50 px-6 py-3.5 text-sm font-semibold text-slate-300 backdrop-blur-sm transition-all duration-200 hover:border-violet-400/60 hover:bg-violet-950/30 hover:text-white sm:px-8 sm:py-4 sm:text-base"
          >
            {t.hero.ctaSecondary}
          </Link>
        </motion.div>

        {/* Social proof strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:mt-14 sm:gap-x-8"
        >
          {t.hero.stats.map((stat, i) => (
            <div key={stat.val} className="flex items-center gap-2">
              {i > 0 && <span className="h-px w-4 bg-slate-700 hidden sm:block" />}
              <span className="text-sm text-slate-500">
                <span className="text-violet-400 font-bold tabular-nums">{stat.val}</span>{" "}
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-slate-600 hover:text-slate-400 transition-colors cursor-pointer"
      >
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </motion.div>
    </section>
  );
}
