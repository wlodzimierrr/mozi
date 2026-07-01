import { About } from "@/components/About";
import { ChartSection } from "@/components/ChartSection";
import { Community } from "@/components/Community";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowToBuy } from "@/components/HowToBuy";
import { Manifesto } from "@/components/Manifesto";
import { MemeGallery } from "@/components/MemeGallery";
import { Navbar } from "@/components/Navbar";
import { Tokenomics } from "@/components/Tokenomics";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-paper text-ink">
      <Navbar />
      <Hero />
      <About />
      <HowToBuy />
      <Tokenomics />
      <Manifesto />
      <MemeGallery />
      <ChartSection />
      <Community />
      <Footer />
    </main>
  );
}
