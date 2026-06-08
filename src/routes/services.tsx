import { createFileRoute } from "@tanstack/react-router";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";

import { services } from "@/lib/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Empirical Media" },
      { name: "description", content: "Strategy, media planning, digital marketing, marketplaces, product design, branding-as-a-service and more." },
      { property: "og:title", content: "Services — Empirical Media" },
      { property: "og:description", content: "Eight specialist verticals. One operating system for modern brand growth." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <section className="relative pt-28 md:pt-40 pb-12 md:pb-20 noise">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
            <span className="font-mono text-sm md:text-lg uppercase tracking-[0.2em] text-primary">// Services</span>
            <h1 className="mt-4 font-display text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter leading-[1] sm:leading-[0.95]">
              Eight verticals.
              <br />
              <span className="text-gradient">One studio.</span>
            </h1>
            <p className="mt-6 md:mt-8 max-w-2xl text-base md:text-lg text-muted-foreground">
              From a single brand sprint to a full-funnel retainer — pick the verticals you need today, plug in more as you scale.
            </p>
          </div>
        </section>

        <section className="py-10 md:py-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 space-y-px bg-border rounded-3xl overflow-hidden">
            {services.map((s, i) => (
              <article
                id={s.slug}
                key={s.slug}
                className="bg-card p-6 sm:p-8 md:p-12 grid lg:grid-cols-[120px_1fr_1.2fr] gap-4 sm:gap-6 lg:gap-8 items-start hover:bg-surface-elevated transition scroll-mt-32"
              >
                <span className="font-mono text-sm text-primary">{s.number}</span>
                <div>
                  <h2 className="font-display text-3xl sm:text-4xl md:text-4xl font-bold tracking-tight">{s.title}</h2>
                  <p className="mt-2 sm:mt-3 text-primary/90 font-medium text-base sm:text-lg">{s.tagline}</p>
                </div>
                <div>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{s.description}</p>
                  <ul className="mt-4 sm:mt-5 flex flex-wrap gap-2">
                    {s.capabilities.map((c) => (
                      <li key={c} className="font-mono text-sm sm:text-base md:text-base uppercase tracking-wider px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-border text-muted-foreground">
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                {i < services.length - 1 && null}
              </article>
            ))}
          </div>
        </section>

        
      </main>
      <Footer />
    </div>
  );
}
