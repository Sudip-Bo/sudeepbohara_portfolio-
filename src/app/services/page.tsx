import { Navigation } from "@/components/Navigation";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServiceList } from "@/components/services/ServiceList";
import { CTA } from "@/components/services/CTA";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Sudip Bohara",
  description: "Digital solutions designed to help your business build trust and grow. Website design, development, landing pages, booking systems, and more.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ServicesHero />
      <ServiceList />
      <CTA />
      <Footer />
    </main>
  );
}
