import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

/**
 * Full-screen animated logo intro, plays once per session.
 */
export default function LogoIntro() {
  const [show, setShow] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("intro_played")) return;
    setShow(true);
    sessionStorage.setItem("intro_played", "1");
    const t1 = window.setTimeout(() => setExiting(true), 1800);
    const t2 = window.setTimeout(() => setShow(false), 2500);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  if (!show) return null;
  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-700 ${
        exiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-radial)" }}
      />
      <div className="relative flex flex-col items-center gap-6">
        <img
          src={logo}
          alt="Empirical Media"
          className="h-32 md:h-48 w-auto animate-logo-reveal drop-shadow-2xl"
        />
        <div
          className="font-mono text-base md:text-lg uppercase tracking-[0.4em] text-muted-foreground opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          <span className="text-orange-300">360 Digital</span> Media to Sales
        </div>
      </div>
    </div>
  );
}
