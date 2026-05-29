import { createFileRoute } from "@tanstack/react-router";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import Hero from "@/components/site/Hero";
import ServicesGrid from "@/components/site/ServicesGrid";
import Marquee from "@/components/site/Marquee";
import Process from "@/components/site/Process";
import CTA from "@/components/site/CTA";
import LogoIntro from "@/components/site/LogoIntro";
import Stats from "@/components/site/Stats";
import Differentiator from "@/components/site/Differentiator";
import DataEngine from "@/components/site/DataEngine";
import Impact from "@/components/site/Impact";
import CaseStudies from "@/components/site/CaseStudies";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <LogoIntro />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Marquee />
        <ServicesGrid />
        <Process />
        <Differentiator />
        <DataEngine />
        <Impact />
        <CaseStudies />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
