import { createFileRoute } from "@tanstack/react-router";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";

import sandhya from "@/assets/team/sandhya.png";
import gopala from "@/assets/team/gopala.png";
import abhiram from "@/assets/team/abhiram.png";
import arvind from "@/assets/team/arvind.jpg";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Empirical Media" },
      { name: "description", content: "Meet the strategists, technologists and operators behind Empirical Media." },
      { property: "og:title", content: "Team — Empirical Media" },
      { property: "og:description", content: "The minds engineering media for outcomes." },
    ],
  }),
  component: TeamPage,
});

type Member = {
  name: string;
  role: string;
  bio: string;
  image?: string;
};

const team: Member[] = [
  {
    name: "Sandhya Rai",
    role: "Strategy & Planning",
    image: sandhya,
    bio: "A strategic leader with vast industry experience in design, development and execution of planning & strategy roadmaps for the Digital & Media Solution vertical. MBA in Advertising & Marketing, with deep expertise across broadcast networks and large corporate & retail brands.",
  },
  {
    name: "Rajeev Balaji Rao",
    role: "Analytics & Technology",
    image: gopala,
    bio: "Experienced IT professional with a proven track record of leveraging cutting-edge technology to drive business growth. Specialises in data-driven marketing strategy to enhance engagement, improve ROI and meet business objectives — at the intersection of marketing and technology.",
  },
  {
    name: "Abhiram M B",
    role: "Operations & Finance",
    image: abhiram,
    bio: "Over 17 years of industry and entrepreneurial experience. Builds operational excellence and manages the finance function, bringing expertise in operations, vendor and stakeholder management, and process design to optimise efficiency and cost.",
  },
  {
    name: "Arvind Kumar",
    role: "Partnerships & Business Relations",
    image: arvind,
    bio: "Three decades of experience in media distribution, client relationships and business management. Has spearheaded major business initiatives and collaborations, driving growth and unlocking high-impact opportunities at Empirical.",
  },
];

function TeamPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <section className="relative pt-40 pb-16 noise">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="relative mx-auto max-w-7xl px-6">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">// Our Team</span>
            <h1 className="mt-4 font-display text-5xl md:text-8xl font-bold tracking-tighter leading-[0.95]">
              Driven by Data.
              <br />
              <span className="text-gradient">Defined by Expertise.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Empirical Media is powered by a multidisciplinary team of strategists, media analysts, digital experts, and commerce planners. Our leadership brings over 20 years of experience in media planning, audit, and brand consulting across India's fastest-growing consumer categories. We believe in collaboration, innovation, and integrity — blending analytical precision with creative strategy to help brands grow smarter.
            </p>

          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-5xl px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-35">
            {team.map((m) => (
              <article
                key={m.name}
                className="group glass rounded-3xl overflow-hidden border border-border hover:border-primary/40 transition"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  {m.image ? (
                    <img
                      src={m.image}
                      alt={m.name}
                      className="absolute inset-0 h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-700"
                    />
                  ) : (
                    <div className="absolute inset-0 grid place-items-center font-display text-6xl text-muted-foreground">
                      {m.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-primary">{m.role}</span>
                    <h3 className="mt-1 font-display text-2xl font-bold tracking-tight">{m.name}</h3>
                  </div>
                </div>
                <p className="p-6 text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
              </article>
            ))}
          </div>
        </section>

        
      </main>
      <Footer />
    </div>
  );
}
