import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/team", label: "Team" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Mobile nav — simple, solid, no animations */}
      <header className="lg:hidden fixed top-0 inset-x-0 z-50 bg-background border-b border-border">
        <nav className="flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
            <img src={logo} alt="Empirical Media" className="h-9 w-auto" />
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              className="p-2 text-foreground"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
        {open && (
          <div className="border-t border-border bg-background px-2 py-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-md text-base font-bold uppercase tracking-widest text-foreground hover:bg-muted"
                activeProps={{ className: "block px-4 py-3 rounded-md text-base font-bold uppercase tracking-widest text-primary bg-muted" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Desktop nav — original transparent-to-solid on scroll */}
      <header
        className={`hidden lg:block fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent border-b border-white/10 dark:border-white/10"
        }`}
      >
        <div className={`mx-auto max-w-7xl px-6 transition-all duration-300 ${scrolled ? "pt-2" : "pt-6"}`}>
          <nav className="grid grid-cols-[auto_1fr_auto] items-center px-6 py-3 gap-3">
            <Link to="/" className="flex items-center shrink-0 py-2">
              <img src={logo} alt="Empirical Media" className={`w-auto transition-all duration-300 ${scrolled ? "h-14" : "h-20"}`} />
            </Link>
            <ul className="flex items-center justify-center gap-6 text-xl font-bold uppercase tracking-widest">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className={`px-4 py-2 hover:text-primary transition-colors ${scrolled ? "text-foreground" : "text-white"}`}
                    activeProps={{ className: "px-4 py-2 text-primary" }}
                    activeOptions={{ exact: l.to === "/" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 shrink-0">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </header>

    </>
  );
}
