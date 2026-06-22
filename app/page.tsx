import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Scraping } from "@/components/landing/scraping";
import { LinkedInSequence } from "@/components/landing/linkedin-sequence";
import { Features } from "@/components/landing/features";
import { Testimonials } from "@/components/landing/testimonials";
import { CTA } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#050507]">
      <Navbar />
      <main>
        <Hero />
        <Scraping />
        <LinkedInSequence />
        <Features />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
