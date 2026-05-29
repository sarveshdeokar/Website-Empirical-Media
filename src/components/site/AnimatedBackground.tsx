import { useMemo } from "react";

/**
 * Sakura-themed animated background.
 * Soft blush wash + drifting cherry blossom petals.
 * Light & dark theme aware.
 */
export default function AnimatedBackground() {
  // pre-compute petal config so it's stable across renders
  const petals = useMemo(
    () =>
      Array.from({ length: 22 }).map((_, i) => {
        const size = 14 + Math.random() * 22;
        return {
          id: i,
          left: Math.random() * 100,
          size,
          delay: -Math.random() * 18,
          duration: 14 + Math.random() * 14,
          sway: 6 + Math.random() * 8,
          rotate: Math.random() * 360,
          hue: ["#fbcfe8", "#f9a8d4", "#fecdd3", "#fda4af", "#fce7f3"][i % 5],
          opacity: 0.55 + Math.random() * 0.35,
        };
      }),
    []
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base wash */}
      <div className="absolute inset-0 bg-background" />

      {/* soft sakura gradient overlays */}
      <div
        className="absolute inset-0 opacity-80 dark:opacity-40"
        style={{
          background:
            "radial-gradient(1100px 700px at 12% -10%, #ffe4ef 0%, transparent 60%), radial-gradient(900px 600px at 95% 10%, #fff1f6 0%, transparent 65%), radial-gradient(1000px 800px at 50% 110%, #fde2ec 0%, transparent 65%)",
        }}
      />

      {/* drifting petals — concentrated near the top / header */}
      {petals.map((p) => (
        <Petal key={p.id} {...p} />
      ))}

      {/* gentle vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 55%, color-mix(in oklab, var(--background) 50%, transparent) 100%)",
        }}
      />
    </div>
  );
}

function Petal({
  left,
  size,
  delay,
  duration,
  sway,
  rotate,
  hue,
  opacity,
}: {
  left: number;
  size: number;
  delay: number;
  duration: number;
  sway: number;
  rotate: number;
  hue: string;
  opacity: number;
}) {
  return (
    <div
      className="absolute top-[-40px] animate-petal-fall"
      style={{
        left: `${left}%`,
        width: size,
        height: size,
        opacity,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        // expose sway/rotate via CSS vars for the keyframes
        ["--sway" as string]: `${sway}vw`,
        ["--rot" as string]: `${rotate}deg`,
      }}
    >
      <svg
        viewBox="0 0 32 32"
        className="w-full h-full animate-petal-spin"
        style={{ filter: "drop-shadow(0 2px 4px rgba(244, 114, 182, 0.25))" }}
      >
        {/* cherry blossom petal */}
        <path
          d="M16 2 C 22 8, 26 16, 16 30 C 6 16, 10 8, 16 2 Z"
          fill={hue}
        />
        <path
          d="M16 6 C 18 12, 18 20, 16 26 C 14 20, 14 12, 16 6 Z"
          fill="rgba(255,255,255,0.35)"
        />
      </svg>
    </div>
  );
}
