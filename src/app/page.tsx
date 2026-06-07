import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Projects from "@/components/sections/Projects";
import AITutor from "@/components/sections/AITutor";
import CareerSimulator from "@/components/sections/CareerSimulator";
import Analytics from "@/components/sections/Analytics";
import Competitive from "@/components/sections/Competitive";
import Marketplace from "@/components/sections/Marketplace";
import FutureTech from "@/components/sections/FutureTech";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Projects />
        <AITutor />
        <CareerSimulator />
        <Analytics />
        <Competitive />
        <Marketplace />
        <FutureTech />
        <Testimonials />
        <Pricing />
      </main>
      <FooterSection />
    </>
  );
}
