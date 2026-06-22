"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/contexts/language-context";
import type { Lang } from "@/lib/i18n";

const FLAGS: { code: Lang; flag: string; label: string }[] = [
  { code: "en", flag: "🇬🇧", label: "EN" },
  { code: "it", flag: "🇮🇹", label: "IT" },
  { code: "es", flag: "🇪🇸", label: "ES" },
];

export function Navbar() {
  const { t, lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navLinks = [
    { label: t.nav.features, href: "/#features" },
    { label: t.nav.howItWorks, href: "/#come-funziona" },
    { label: t.nav.pricing, href: "/pricing" },
    { label: t.nav.contact ?? "Contatti", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050507]/80 backdrop-blur-xl border-b border-violet-900/30 shadow-lg shadow-violet-950/20"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between max-w-7xl mx-auto px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative h-9 w-9 rounded-xl border border-violet-400/35 bg-transparent flex items-center justify-center transition-all group-hover:scale-105 group-hover:border-violet-400/60 shadow-[0_0_14px_rgba(124,58,237,0.25),inset_0_0_0_1px_rgba(167,139,250,0.08)]">
            <img src="/logo-transparent.png" alt="Manfred" className="h-7 w-7 object-contain" />
          </div>
          <span className="font-bold text-lg text-white tracking-tight">Manfred</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-base text-slate-400 hover:text-violet-300 transition-colors font-semibold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Lang switcher */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language switcher */}
          <div className="flex items-center gap-0.5 rounded-lg border border-violet-900/40 bg-violet-950/20 p-0.5">
            {FLAGS.map(({ code, flag }) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                title={code.toUpperCase()}
                className={`px-2 py-1 rounded-md text-sm transition-all duration-200 ${
                  lang === code
                    ? "bg-violet-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {flag}
              </button>
            ))}
          </div>

          <Button
            className="glow-btn bg-violet-600 hover:bg-violet-500 text-white border-0 px-5"
            asChild
          >
            <Link href="/contact#contact-form">{t.nav.startFree}</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-violet-900/30 bg-[#050507]/95 backdrop-blur-xl"
          >
            <div className="container px-6 py-6 flex flex-col gap-4">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-slate-300 hover:text-violet-300 font-medium text-sm"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile lang switcher */}
              <div className="flex items-center gap-2 pt-2">
                {FLAGS.map(({ code, flag, label }) => (
                  <button
                    key={code}
                    onClick={() => setLang(code)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all duration-200 ${
                      lang === code
                        ? "border-violet-500 bg-violet-600 text-white"
                        : "border-violet-900/40 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {flag} {label}
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-2 pt-4 border-t border-violet-900/30">
                <Button className="bg-violet-600 hover:bg-violet-500 text-white" asChild>
                  <Link href="/contact#contact-form">{t.nav.startFree}</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
