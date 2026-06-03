import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Calendar } from "lucide-react";
import { BOOKING_URL } from "@/lib/booking";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden noise">
      <div className="absolute inset-0 grid-bg animate-grid opacity-60 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-radial)" }}
      />
      <div
        className="absolute top-1/4 -right-40 h-[500px] w-[500px] rounded-full blur-3xl opacity-30 animate-float"
        style={{ background: "radial-gradient(circle, var(--secondary), transparent 70%)" }}
      />
      <div
        className="absolute bottom-1/4 -left-40 h-[600px] w-[600px] rounded-full blur-3xl opacity-25"
        style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 w-full">

        <h1 className="font-sans sm:text-5xl lg:text-[6.5rem] font-bold leading-[0.95] tracking-tighter text-2xl">
          <span className="text-gradient">From TV Advertising</span>
          <br />
          to Total Marketing<br />Intelligence
        </h1>

        <div className="mt-10 grid md:grid-cols-2 gap-10 items-end">
          <div className="max-w-xl space-y-4">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Empirical Media has spent over a decade building trust, transparency, and measurable impact in India's television advertising ecosystem. Today, we are redefining what a media agency can be — evolving into a Full-Funnel Marketing Intelligence Partner that unites Linear TV, Connected TV (CTV), Digital, and Commerce into one seamless performance framework.
            </p>
            <p className="italic text-foreground/80 whitespace-nowrap text-xl">Empirical Media makes every impression count.</p>
          </div>


          <div className="flex flex-wrap gap-3 md:justify-end">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#EA5A59] px-6 py-4 font-semibold text-white transition hover:bg-[#d44b4a]"
            >
              <Calendar size={18} />
              Book a meeting
            </a>
          </div>
        </div>

        <div className="mt-20">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {[
                ["2018", "Founded"],
                ["21+", "Brand partners"],
                ["10000+", "Projects Delivered"],
              ].map(([k, v]) => (
                <CarouselItem
                  key={k}
                  className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/3"
                >
                  <div className="glass rounded-2xl p-8 text-center h-full flex flex-col justify-center gap-2">
                    <div className="font-display text-4xl md:text-5xl font-bold text-gradient">
                      {k}
                    </div>
                    <div className="text-sm uppercase tracking-widest text-muted-foreground">
                      {v}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
