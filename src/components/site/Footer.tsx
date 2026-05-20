import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="relative border-t border-border mt-32">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <img src={logo} alt="" className="h-9 w-auto" />
              <span className="font-display text-lg font-semibold">Empirical<span className="text-primary">.</span></span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              An ideal companion for your advertising, digital marketing and brand growth needs — built across every media platform that matters.
            </p>
          </div>
          <div>
            <h4 className="font-mono uppercase text-xs tracking-widest text-muted-foreground">Studio</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-primary">Services</Link></li>
              <li><Link to="/work" className="hover:text-primary">Work</Link></li>
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono uppercase text-xs tracking-widest text-muted-foreground">Reach us</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="mailto:sales@empiricalmedia.in" className="hover:text-primary">sales@empiricalmedia.in</a></li>
              <li><a href="tel:+916366799955" className="hover:text-primary">+91 63667 99955</a></li>
              <li className="text-muted-foreground">Jayanagar 2nd Block, Bengaluru</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-3 text-xs font-mono text-muted-foreground">
          <span>© {new Date().getFullYear()} Empirical Media Pvt. Ltd.</span>
          <span>Bengaluru · India · Worldwide</span>
        </div>
      </div>
    </footer>
  );
}
