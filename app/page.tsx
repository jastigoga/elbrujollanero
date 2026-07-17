"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloating } from "@/components/layout/WhatsAppFloating";
import { ConstellationBackground } from "@/components/layout/ConstellationBackground";
import { Hero } from "@/components/sections/Hero";
import { TrustSection } from "@/components/sections/TrustSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Testimonios } from "@/components/sections/Testimonios";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { SectionDivider } from "@/components/sections/SectionDivider";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-base">
      <ConstellationBackground />
      <Navbar />
      <main id="contenido-principal" className="relative" style={{ zIndex: 2 }}>
        <Hero />
        <SectionDivider />
        <TrustSection />
        <SectionDivider />
        <ServicesGrid />
        <SectionDivider />
        <Testimonios />
        <SectionDivider />
        <FAQSection />
        <SectionDivider />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloating message="Hola, quiero una consulta gratuita" />
    </div>
  );
}
