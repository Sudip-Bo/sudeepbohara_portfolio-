import { Navigation } from "@/components/Navigation";
import { AboutHero } from "@/components/about/AboutHero";
import { Mission } from "@/components/about/Mission";
import { Philosophy } from "@/components/about/Philosophy";
import { Process } from "@/components/about/Process";
import { Industries } from "@/components/about/Industries";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Sudip Bohara",
  description: "Learn about my mission, design philosophy, process, and the industries I serve. I help businesses build trust through premium digital experiences.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AboutHero />
      <Mission />
      <Philosophy />
      <Process />
      <Industries />
      <Footer />
    </main>
  );
}
