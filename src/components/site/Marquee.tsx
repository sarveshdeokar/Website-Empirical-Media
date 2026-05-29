import aachi from "@/assets/clients/aachi.jpg";
import amrithNoni from "@/assets/clients/amrith-noni.webp";
import ava from "@/assets/clients/ava.png";
import british from "@/assets/clients/british-biologocals.jpg";
import cothas from "@/assets/clients/cothas.jpg";
import idp from "@/assets/clients/idp.png";
import indus from "@/assets/clients/indus.png";
import jewelOne from "@/assets/clients/jewel-one-logo.png";
import minister from "@/assets/clients/minister-white.png";
import naga from "@/assets/clients/naga.png";
import otto from "@/assets/clients/otto.webp";
import pothys from "@/assets/clients/pothys.png";
import rkg from "@/assets/clients/rkg.webp";
import sathya from "@/assets/clients/sathya.png";
import savorit from "@/assets/clients/savorit.webp";
import sharechat from "@/assets/clients/sharechat.png";
import specsmakers from "@/assets/clients/specsmakers.png";
import sunpure from "@/assets/clients/sunpure.webp";
import thangamayil from "@/assets/clients/thangamayil.png";
import ullas from "@/assets/clients/ullas.jpg";
import walkmate from "@/assets/clients/walkmate.png";

type Client = { name: string; src: string; url: string };

const clients: Client[] = [
  { name: "Aachi Masala", src: aachi, url: "https://aachigroup.com/" },
  { name: "Amrit Noni", src: amrithNoni, url: "https://amrithnoni.com/" },
  { name: "Ava Cholayil", src: ava, url: "https://www.cholayil.com/" },
  { name: "British Biologicals", src: british, url: "https://www.britishbiologicals.com/" },
  { name: "Cothas Coffee", src: cothas, url: "https://cothas.com/" },
  { name: "IDP", src: idp, url: "https://www.idp.com/india/" },
  { name: "Indus TMT", src: indus, url: "https://industmt.com/" },
  { name: "Jewel One", src: jewelOne, url: "https://jewelone.in/" },
  { name: "Minister White", src: minister, url: "https://ministerwhite.com/" },
  { name: "Naga", src: naga, url: "https://nagastore.in/" },
  { name: "Otto", src: otto, url: "https://www.ottostore.com/" },
  { name: "Pothys", src: pothys, url: "https://www.pothys.com/" },
  { name: "RKG Ghee", src: rkg, url: "https://rkgghee.com/public/index.php" },
  { name: "Sathya", src: sathya, url: "https://www.sathya.store/" },
  { name: "Savorit", src: savorit, url: "https://savorit.com/" },
  { name: "ShareChat", src: sharechat, url: "https://sharechat.com/" },
  { name: "Specs Makers", src: specsmakers, url: "https://www.specsmakers.in/" },
  { name: "Sunpure", src: sunpure, url: "https://sunpure.co.in/" },
  { name: "Thangamayil", src: thangamayil, url: "https://www.thangamayil.com/" },
  { name: "Ullas Agarbathi", src: ullas, url: "https://ullasagarbathi.co.in/" },
  { name: "Walkmate", src: walkmate, url: "https://walkmate.co.in/" },
];

export default function Marquee() {
  const loop = [...clients, ...clients];
  return (
    <section className="relative py-20 overflow-hidden border-y border-border">
      <div className="mx-auto max-w-7xl px-6 mb-10 flex items-baseline justify-between">
        <h2 className="font-display text-2xl md:text-3xl">
          Trusted across <span className="text-gradient">FMCG, Retail & Wellness</span>
        </h2>
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground hidden md:block">
          // {clients.length}+ partners
        </span>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex gap-8 animate-marquee w-max items-center">
          {loop.map((c, i) => (
            <a
              key={c.name + i}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              title={c.name}
              aria-label={`Visit ${c.name}`}
              className="group h-24 w-44 flex items-center justify-center shrink-0 rounded-2xl bg-white border border-black/5 px-5 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 transition-all"
            >
              <img
                src={c.src}
                alt={c.name}
                loading="lazy"
                className="max-h-14 max-w-full object-contain opacity-90 group-hover:opacity-100 transition"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
