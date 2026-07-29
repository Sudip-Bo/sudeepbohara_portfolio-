import { Navigation } from "@/components/Navigation";
import { ProjectsHero } from "@/components/projects/ProjectsHero";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Sudip Bohara",
  description: "Portfolio projects demonstrating my approach to premium digital experiences including healthcare, lifestyle, and wellness websites.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ProjectsHero />
      <ProjectGrid />
      <Footer />
    </main>
  );
}
