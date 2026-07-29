import { Navigation } from "@/components/Navigation";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Sudip Bohara",
  description: "Get in touch to discuss your project. I help businesses build trust and grow through premium digital experiences.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ContactHero />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 py-24">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      <Footer />
    </main>
  );
}
