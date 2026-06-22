import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Manfred — B2B Lead Generation & LinkedIn Automation",
    template: "%s | Manfred",
  },
  description:
    "Find qualified B2B leads and automate your outreach on LinkedIn. Manfred identifies your ideal prospects and contacts them automatically.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-[#050507] text-white antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
