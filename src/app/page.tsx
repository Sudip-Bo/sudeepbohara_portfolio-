import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { FeaturedWork } from "@/components/FeaturedWork";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Technologies } from "@/components/Technologies";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedWork />
      <Services />
      <Process />
      <WhyChooseUs />
      <Technologies />
      <Contact />
      <Footer />
    </main>
  );
}
