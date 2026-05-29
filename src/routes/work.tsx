import { createFileRoute } from "@tanstack/react-router";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import CTA from "@/components/site/CTA";
import Marquee from "@/components/site/Marquee";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Empirical Media" },
      { name: "description", content: "A selection of campaigns, brands and products we've helped scale across India and beyond." },
      { property: "og:title", content: "Work — Empirical Media" },
      { property: "og:description", content: "Selected work across TV, digital, commerce and brand." },
    ],
  }),
  component: WorkPage,
});

const cases = [
  { tag: "CTV · Linear TV", title: "A South Indian personal care brand achieved 22% incremental reach by integrating CTV audiences beyond linear TV viewers.", metric: "+22% incremental reach" },
  { tag: "Meta · Google · Marketplace", title: "A wellness company improved ROAS by 4x through full-funnel tracking between Meta, Google, and marketplace data.", metric: "4× ROAS improvement" },
  { tag: "Regional TV · GRPs", title: "A retail group optimized regional TV GRPs by 18%, reducing media cost per reach while expanding brand recall.", metric: "18% GRP optimization" },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <section className="relative pt-40 pb-20 noise">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="relative mx-auto max-w-7xl px-6">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">// Selected work</span>
            <h1 className="mt-4 font-display text-5xl md:text-8xl font-bold tracking-tighter leading-[0.95]">
              Outcomes,
              <br />
              <span className="text-gradient">on the record.</span>
            </h1>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-px bg-border rounded-3xl overflow-hidden">
            {cases.map((c, i) => (
              <article
                key={i}
                className="group relative bg-card p-10 md:p-14 min-h-[340px] flex flex-col justify-between overflow-hidden hover:bg-surface-elevated transition"
              >
                <div
                  className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition"
                  style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
                />
                <span className="font-mono text-xs uppercase tracking-widest text-primary">{c.tag}</span>
                <div className="relative">
                  <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">{c.title}</h2>
                  <div className="mt-6 font-mono text-sm text-muted-foreground">↗ {c.metric}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <Marquee />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
