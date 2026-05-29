import { useMemo } from "react";

/**
 * Neon geometric background.
 * Drifting glowing triangles, squares, circles and rings against a dark/light wash.
 * Light & dark theme aware.
 */
type Shape = "triangle" | "square" | "circle" | "ring" | "hex" | "plus";

const NEON_COLORS = [
  "#22d3ee", // cyan
  "#a855f7", // violet
  "#f472b6", // pink
  "#34d399", // emerald
  "#facc15", // yellow
  "#fb7185", // rose
];

export default function AnimatedBackground() {
  const shapes = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => {
        const types: Shape[] = ["triangle", "square", "circle", "ring", "hex", "plus"];
        return {
          id: i,
          type: types[i % types.length],
          left: Math.random() * 100,
          top: Math.random() * 100,
          size: 60 + Math.random() * 140,
          delay: -Math.random() * 16,
          duration: 14 + Math.random() * 18,
          drift: (Math.random() - 0.5) * 24,
          rotate: Math.random() * 360,
          color: NEON_COLORS[i % NEON_COLORS.length],
          opacity: 0.35 + Math.random() * 0.35,
        };
      }),
    []
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base */}
      <div className="absolute inset-0 bg-background" />

      {/* neon ambient wash */}
      <div
        className="absolute inset-0 opacity-70 dark:opacity-90"
        style={{
          background:
            "radial-gradient(900px 600px at 12% 10%, rgba(34,211,238,0.18) 0%, transparent 60%), radial-gradient(900px 600px at 95% 20%, rgba(168,85,247,0.18) 0%, transparent 65%), radial-gradient(1000px 700px at 50% 110%, rgba(244,114,182,0.18) 0%, transparent 65%)",
        }}
      />

      {/* subtle tech grid */}
      <div
        className="absolute inset-0 opacity-[0.07] dark:opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          color: "var(--foreground)",
        }}
      />

      {/* floating neon shapes */}
      {shapes.map((s) => (
        <NeonShape key={s.id} {...s} />
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

function NeonShape({
  type,
  left,
  top,
  size,
  delay,
  duration,
  drift,
  rotate,
  color,
  opacity,
}: {
  type: Shape;
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
  drift: number;
  rotate: number;
  color: string;
  opacity: number;
}) {
  const stroke = 2;
  const glow = `drop-shadow(0 0 8px ${color}) drop-shadow(0 0 24px ${color})`;
  const common = {
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeLinejoin: "round" as const,
    strokeLinecap: "round" as const,
  };

  return (
    <div
      className="absolute animate-neon-float"
      style={{
        left: `${left}%`,
        top: `${top}%`,
        width: size,
        height: size,
        opacity,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        ["--drift-x" as string]: `${drift}vw`,
        ["--rot" as string]: `${rotate}deg`,
        filter: glow,
      }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full animate-neon-spin">
        {type === "triangle" && <polygon points="50,8 92,88 8,88" {...common} />}
        {type === "square" && <rect x="14" y="14" width="72" height="72" rx="6" {...common} />}
        {type === "circle" && <circle cx="50" cy="50" r="40" {...common} />}
        {type === "ring" && (
          <>
            <circle cx="50" cy="50" r="42" {...common} />
            <circle cx="50" cy="50" r="26" {...common} />
          </>
        )}
        {type === "hex" && (
          <polygon points="50,6 90,28 90,72 50,94 10,72 10,28" {...common} />
        )}
        {type === "plus" && (
          <path d="M50 12 V88 M12 50 H88" {...common} />
        )}
      </svg>
    </div>
  );
}
