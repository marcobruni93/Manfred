"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useLang } from "@/contexts/language-context";

const AVATAR_COLORS = [
  { color: "#7c3aed", glow: "rgba(124,58,237,0.3)" },
  { color: "#06b6d4", glow: "rgba(6,182,212,0.3)" },
  { color: "#8b5cf6", glow: "rgba(139,92,246,0.3)" },
];

interface TiltProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

function TiltCard({ children, className = "", style }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({
    transition: "transform 0.45s cubic-bezier(0.23, 1, 0.32, 1)",
    willChange: "transform",
  });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const cx = ((e.clientX - r.left) / r.width - 0.5) * 16;
    const cy = ((e.clientY - r.top) / r.height - 0.5) * 16;
    setTiltStyle({
      transform: `perspective(1100px) rotateY(${cx}deg) rotateX(${-cy}deg) translateZ(12px) scale(1.02)`,
      transition: "transform 0.08s linear",
      willChange: "transform",
    });
  };

  const onLeave = () => {
    setTiltStyle({
      transform: "perspective(1100px) rotateY(0deg) rotateX(0deg) translateZ(0) scale(1)",
      transition: "transform 0.45s cubic-bezier(0.23, 1, 0.32, 1)",
      willChange: "transform",
    });
  };

  return (
    <div
      ref={ref}
      className={`beam-border rounded-2xl h-full ${className}`}
      style={{ ...style, ...tiltStyle }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  );
}

export function Testimonials() {
  const { t } = useLang();

  return (
    <section className="relative py-32 bg-[#050507]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(124,58,237,0.07),transparent)] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-600/25 to-transparent" />

      <div className="container max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-violet-400 font-semibold text-sm tracking-widest uppercase mb-4"
          >
            {t.testimonials.label}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white tracking-tight"
          >
            {t.testimonials.h2[0]}
            <br />
            <span className="gradient-text">{t.testimonials.h2[1]}</span>
          </motion.h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {t.testimonials.items.map((item, i) => {
            const ac = AVATAR_COLORS[i];
            return (
              <motion.div
                key={item.author}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.15 }}
              >
                <TiltCard>
                  <div
                    className="glass rounded-2xl p-7 flex flex-col gap-5 h-full relative overflow-hidden group"
                  >
                    {/* Large decorative quote mark */}
                    <div
                      className="absolute top-3 right-5 text-[7rem] leading-none font-serif font-black opacity-[0.06] select-none pointer-events-none"
                      aria-hidden="true"
                      style={{ color: ac.color }}
                    >
                      &ldquo;
                    </div>

                    {/* Corner glow on hover */}
                    <div
                      className="absolute -top-8 -right-8 h-28 w-28 rounded-full opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-700 pointer-events-none"
                      style={{ background: ac.color }}
                    />

                    {/* Stars */}
                    <div className="flex gap-1 relative z-10">
                      {Array.from({ length: 5 }).map((_, k) => (
                        <svg
                          key={k}
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          style={{ fill: "#f59e0b", filter: "drop-shadow(0 0 3px rgba(245,158,11,0.5))" }}
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Quote text */}
                    <p className="text-slate-300 text-sm leading-relaxed flex-1 relative z-10">
                      &ldquo;{item.quote}&rdquo;
                    </p>

                    {/* Divider */}
                    <div
                      className="h-px w-full opacity-30"
                      style={{ background: `linear-gradient(to right, ${ac.color}, transparent)` }}
                    />

                    {/* Author */}
                    <div className="flex items-center gap-3 relative z-10">
                      <div
                        className="h-9 w-9 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0 shadow-lg"
                        style={{
                          background: `linear-gradient(135deg, ${ac.color} 0%, ${ac.glow.replace("0.3", "0.5")} 100%)`,
                          boxShadow: `0 0 12px ${ac.glow}`,
                        }}
                      >
                        {item.avatar}
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">{item.author}</p>
                        <p className="text-slate-500 text-xs">{item.role}</p>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
