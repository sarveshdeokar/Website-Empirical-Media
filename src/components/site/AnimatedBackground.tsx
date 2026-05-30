import { useMemo } from "react";

/**
 * Ambient illuminating background.
 * Soft blurred circles gently drift for subtle depth and light.
 * Light & dark theme aware.
 */

const AMBIENT_COLORS = [
  "oklch(0.65 0.18 25 / 0.10)",   /* warm coral */
  "oklch(0.75 0.16 85 / 0.08)",   /* warm gold */
  "oklch(0.55 0.08 220 / 0.07)",  /* soft steel blue */
  "oklch(0.7 0.14 45 / 0.08)",    /* amber */
  "oklch(0.6 0.1 300 / 0.06)",    /* soft violet */
  "oklch(0.68 0.12 150 / 0.07)",  /* muted sage */
];

export default function AnimatedBackground() {
  const circles = useMemo(
    () =>
      Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 180 + Math.random() * 320,
        delay: -Math.random() * 20,
        duration: 18 + Math.random() * 22,
        driftX: (Math.random() - 0.5) * 60,
        driftY: (Math.random() - 0.5) * 50,
        color: AMBIENT_COLORS[i % AMBIENT_COLORS.length],
        opacity: 0.5 + Math.random() * 0.3,
      })),
    []
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base */}
      <div className="absolute inset-0 bg-background" />

      {/* ambient radial washes */}
      <div
        className="absolute inset-0 opacity-60 dark:opacity-80"
        style={{
          background:
            "radial-gradient(900px 700px at 15% 15%, oklch(0.65 0.18 25 / 0.10) 0%, transparent 60%), radial-gradient(1000px 800px at 90% 10%, oklch(0.75 0.16 85 / 0.08) 0%, transparent 60%), radial-gradient(1100px 900px at 50% 100%, oklch(0.55 0.08 220 / 0.07) 0%, transparent 65%), radial-gradient(800px 600px at 85% 85%, oklch(0.68 0.12 150 / 0.06) 0%, transparent 60%)",
        }}
      />

      {/* subtle tech grid */}
      <div
        className="absolute inset-0 opacity-[0.06] dark:opacity-[0.10]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          color: "var(--foreground)",
        }}
      />

      {/* soft illuminating circles */}
      {circles.map((c) => (
        <div
          key={c.id}
          className="absolute animate-ambient-float rounded-full"
          style={{
            left: `${c.left}%`,
            top: `${c.top}%`,
            width: c.size,
            height: c.size,
            opacity: c.opacity,
            animationDelay: `${c.delay}s`,
            animationDuration: `${c.duration}s`,
            ["--drift-x" as string]: `${c.driftX}px`,
            ["--drift-y" as string]: `${c.driftY}px`,
            background: `radial-gradient(circle, ${c.color} 0%, transparent 70%)`,
            filter: "blur(40px)",
            transform: "translate3d(0,0,0)",
          }}
        />
      ))}

      {/* vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 55%, color-mix(in oklab, var(--background) 60%, transparent) 100%)",
        }}
      />
    </div>
  );
}
