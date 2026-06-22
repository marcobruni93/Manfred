"use client";

import { motion } from "framer-motion";
import { Search, Send, BarChart3, Sparkles, Shield, Zap, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { useLang } from "@/contexts/language-context";

const CARD_META = [
  {
    icon: Search,
    color: "from-violet-500 to-purple-600",
    glow: "rgba(124,58,237,0.35)",
  },
  {
    icon: Send,
    color: "from-cyan-500 to-blue-600",
    glow: "rgba(6,182,212,0.35)",
  },
  {
    icon: BarChart3,
    color: "from-emerald-500 to-teal-600",
    glow: "rgba(16,185,129,0.35)",
  },
  {
    icon: Sparkles,
    color: "from-orange-500 to-amber-600",
    glow: "rgba(245,158,11,0.35)",
  },
  {
    icon: Shield,
    color: "from-rose-500 to-pink-600",
    glow: "rgba(244,63,94,0.35)",
  },
  {
    icon: Zap,
    color: "from-violet-500 to-indigo-600",
    glow: "rgba(99,102,241,0.35)",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}

function TiltCard({ children, className = "", innerClassName = "" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({
    transition: "transform 0.45s cubic-bezier(0.23, 1, 0.32, 1)",
    willChange: "transform",
  });
  const [spotVars, setSpotVars] = useState<React.CSSProperties>({
    "--spotlight-x": "50%",
    "--spotlight-y": "50%",
  } as React.CSSProperties);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const cx = (x / r.width - 0.5) * 14;
    const cy = (y / r.height - 0.5) * 14;
    setTiltStyle({
      transform: `perspective(1200px) rotateY(${cx}deg) rotateX(${-cy}deg) translateZ(14px) scale(1.018)`,
      transition: "transform 0.08s linear",
      willChange: "transform",
    });
    setSpotVars({
      "--spotlight-x": `${x}px`,
      "--spotlight-y": `${y}px`,
    } as React.CSSProperties);
  };

  const onLeave = () => {
    setTiltStyle({
      transform: "perspective(1200px) rotateY(0deg) rotateX(0deg) translateZ(0px) scale(1)",
      transition: "transform 0.45s cubic-bezier(0.23, 1, 0.32, 1)",
      willChange: "transform",
    });
  };

  return (
    <div
      ref={ref}
      className={`beam-border rounded-2xl h-full ${className}`}
      style={tiltStyle}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div
        className={`spotlight-card glass rounded-2xl h-full relative overflow-hidden group cursor-default ${innerClassName}`}
        style={spotVars}
      >
        {children}
      </div>
    </div>
  );
}

export function Features() {
  const { t } = useLang();

  return (
    <section id="features" className="relative py-32 bg-[#050507] grid-bg">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#050507] to-transparent pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-violet-400 font-semibold text-sm tracking-widest uppercase mb-4"
          >
            {t.features.label}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight"
          >
            {t.features.h2[0]}
            <br />
            <span className="gradient-text">{t.features.h2[1]}</span>
          </motion.h2>
        </div>

        {/* Magazine grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {t.features.cards.map((card, i) => {
            const meta = CARD_META[i];
            const isHero = i === 0;
            const isBanner = i === 5;

            return (
              <motion.div
                key={card.title}
                variants={item}
                className={
                  isHero
                    ? "md:col-span-2 lg:col-span-2"
                    : isBanner
                    ? "md:col-span-2 lg:col-span-3"
                    : ""
                }
              >
                <TiltCard>
                  {/* Ambient corner glow */}
                  <div
                    className="absolute -top-12 -right-12 h-40 w-40 rounded-full opacity-0 group-hover:opacity-25 blur-3xl transition-opacity duration-700 pointer-events-none"
                    style={{ background: meta.glow.replace("0.35", "1") }}
                  />

                  {isHero ? (
                    <div className="relative z-10 p-8 flex flex-col h-full">
                      <div
                        className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${meta.color} mb-6 flex-shrink-0`}
                        style={{ boxShadow: `0 8px 32px ${meta.glow}` }}
                      >
                        <meta.icon className="h-7 w-7 text-white" />
                      </div>

                      <h3 className="text-white font-bold text-2xl mb-3 tracking-tight leading-snug">
                        {card.title}
                      </h3>
                      <p className="text-slate-400 text-base leading-relaxed flex-1">
                        {card.description}
                      </p>

                      {"stats" in card && card.stats && (
                        <div className="mt-8 pt-6 border-t border-violet-900/30 grid grid-cols-3 gap-6">
                          {card.stats.map((s) => (
                            <div key={s.label}>
                              <p className="text-2xl font-black text-white leading-none mb-1 tabular-nums">
                                {s.val}
                              </p>
                              <p className="text-xs text-slate-500 uppercase tracking-wider">
                                {s.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : isBanner ? (
                    <div className="relative z-10 p-7 flex flex-col sm:flex-row items-start sm:items-center gap-6 h-full">
                      <div
                        className={`flex-shrink-0 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${meta.color}`}
                        style={{ boxShadow: `0 8px 32px ${meta.glow}` }}
                      >
                        <meta.icon className="h-7 w-7 text-white" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-bold text-xl mb-1.5">{card.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{card.description}</p>
                      </div>

                      <div className="flex-shrink-0 hidden sm:flex items-center gap-2">
                        {t.features.bannerChips.map((step, k) => (
                          <div key={step} className="flex items-center gap-2">
                            <div
                              className="px-3 py-1.5 rounded-lg border text-xs font-medium whitespace-nowrap"
                              style={{
                                color: meta.glow.replace("0.35", "1"),
                                borderColor: meta.glow.replace("0.35", "0.3"),
                                background: meta.glow.replace("0.35", "0.08"),
                              }}
                            >
                              {step}
                            </div>
                            {k < 3 && (
                              <ChevronRight className="h-3 w-3 text-violet-700" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="relative z-10 p-6 flex flex-col h-full">
                      <div
                        className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${meta.color} mb-5 flex-shrink-0`}
                        style={{ boxShadow: `0 4px 20px ${meta.glow}` }}
                      >
                        <meta.icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-white font-bold text-base mb-2">{card.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{card.description}</p>
                    </div>
                  )}
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
