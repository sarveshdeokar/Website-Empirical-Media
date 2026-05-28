import { createFileRoute } from "@tanstack/react-router";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import Hero from "@/components/site/Hero";
import ServicesGrid from "@/components/site/ServicesGrid";
import Marquee from "@/components/site/Marquee";
import Process from "@/components/site/Process";
import CTA from "@/components/site/CTA";
import LogoIntro from "@/components/site/LogoIntro";

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
        <Marquee />
        <ServicesGrid />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
