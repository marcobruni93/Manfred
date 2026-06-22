import type { Metadata } from "next";
import { ContactPageContent } from "@/components/contact/contact-page-content";
import { Footer } from "@/components/landing/footer";
import { Navbar } from "@/components/landing/navbar";

export const metadata: Metadata = {
  title: "Contatti",
  description: "Parla con Manfred e scopri come trasformare LinkedIn in un canale B2B prevedibile.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#050507]">
      <Navbar />
      <ContactPageContent />
      <Footer />
    </div>
  );
}
