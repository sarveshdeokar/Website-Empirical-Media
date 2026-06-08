import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="relative border-t border-border mt-20 sm:mt-32">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          <div className="sm:col-span-2 md:col-span-2">
            <img src={logo} alt="Empirical Media" className="h-12 sm:h-14 w-auto" />
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-sm">
              India's marketing intelligence consultancy — uniting Linear TV, Connected TV,
              Digital and Commerce into one measurable performance framework.
            </p>
          </div>
          <div>
            <h4 className="font-mono uppercase text-sm sm:text-lg tracking-widest text-muted-foreground">Studio</h4>
            <ul className="mt-3 sm:mt-4 space-y-2 text-base sm:text-lg">
              <li><Link to="/services" className="hover:text-primary">Services</Link></li>
              <li><Link to="/team" className="hover:text-primary">Team</Link></li>
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono uppercase text-sm sm:text-lg tracking-widest text-muted-foreground">Reach us</h4>
            <ul className="mt-3 sm:mt-4 space-y-2 text-sm sm:text-lg break-words">
              <li><a href="mailto:sales@empiricalmedia.in" className="hover:text-primary">sales@empiricalmedia.in</a></li>
              <li><a href="tel:+916366799955" className="hover:text-primary">+91 63667 99955</a></li>
              <li><a href="https://www.linkedin.com/company/empiricalmediabangalore/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">LinkedIn ↗</a></li>
              <li className="text-muted-foreground">#367, 2nd Floor, 8th Main Road,<br/>11th Cross, 2nd Block, Jayanagar,<br/>Bengaluru, Karnataka 560011</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 sm:mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-3 text-xs sm:text-base font-mono text-muted-foreground">
          <span>© {new Date().getFullYear()} Empirical Media Pvt. Ltd.</span>
          <span>Bengaluru · India · Worldwide</span>
        </div>
      </div>
    </footer>
  );
}
