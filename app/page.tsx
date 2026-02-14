"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { BrandMarquee } from "@/components/sections/brand-marquee";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { FAQSection } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-foreground relative selection:bg-primary/20 selection:text-primary">
      <Header />
      <Hero />
      <BrandMarquee />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <FAQSection />
      <Contact />
      <Footer />
    </main>
  );
}