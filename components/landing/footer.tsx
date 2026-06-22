"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Youtube } from "lucide-react";

const PRODUCT_LINKS = [
  { label: "Features", href: "/#features" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Changelog", href: "/changelog" },
  { label: "API docs", href: "/docs" },
];

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
  { label: "Affiliates", href: "/affiliates" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "GDPR", href: "/gdpr" },
];

const SOCIALS = [
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-violet-900/20 bg-[#050507]">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-600/50 to-transparent" />

      {/* Subtle background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 group mb-5">
              <img
                src="/logo-transparent.png"
                alt="Manfred"
                className="h-10 w-10 object-contain drop-shadow-[0_0_8px_rgba(124,58,237,0.5)] group-hover:scale-105 transition-transform"
              />
              <span className="font-bold text-xl text-white tracking-tight">Manfred</span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
              Automate your B2B outreach on LinkedIn. Find leads, send personalized messages, and close more deals — on autopilot.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-violet-900/40 bg-violet-950/30 text-slate-500 hover:text-violet-300 hover:border-violet-600/60 hover:bg-violet-900/30 transition-all duration-200"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Product</h4>
            <ul className="flex flex-col gap-3">
              {PRODUCT_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-slate-500 hover:text-violet-300 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Company</h4>
            <ul className="flex flex-col gap-3">
              {COMPANY_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-slate-500 hover:text-violet-300 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Legal</h4>
            <ul className="flex flex-col gap-3">
              {LEGAL_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-slate-500 hover:text-violet-300 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-violet-900/20">
          <p className="text-xs text-slate-600">
            © {currentYear} Manfred. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-slate-600">
            <span>Made with</span>
            <span className="text-violet-500">♥</span>
            <span>for B2B sales teams worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
