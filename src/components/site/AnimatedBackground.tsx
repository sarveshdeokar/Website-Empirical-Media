/**
 * Continuous, refined, digital/techy moving background.
 * Renders fixed behind all content. Light & dark theme aware via tokens.
 */
export default function AnimatedBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* base wash */}
      <div className="absolute inset-0 bg-background" />

      {/* moving grid */}
      <div
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in oklab, var(--foreground) 7%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--foreground) 7%, transparent) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          animation: "grid-pan 24s linear infinite",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      {/* drifting orbs */}
      <div className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full blur-3xl opacity-40 dark:opacity-30 animate-orb-a"
           style={{ background: "radial-gradient(circle, var(--primary) 0%, transparent 65%)" }} />
      <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full blur-3xl opacity-30 dark:opacity-25 animate-orb-b"
           style={{ background: "radial-gradient(circle, var(--secondary) 0%, transparent 65%)" }} />
      <div className="absolute bottom-0 left-1/3 h-[460px] w-[460px] rounded-full blur-3xl opacity-25 dark:opacity-20 animate-orb-c"
           style={{ background: "radial-gradient(circle, var(--primary) 0%, transparent 65%)" }} />

      {/* horizontal scanlines */}
      <div className="absolute left-0 right-0 h-px top-[22%] animate-scan-a"
           style={{ background: "linear-gradient(90deg, transparent, color-mix(in oklab, var(--primary) 60%, transparent), transparent)" }} />
      <div className="absolute left-0 right-0 h-px top-[68%] animate-scan-b"
           style={{ background: "linear-gradient(90deg, transparent, color-mix(in oklab, var(--secondary) 60%, transparent), transparent)" }} />

      {/* subtle vignette */}
      <div className="absolute inset-0"
           style={{ background: "radial-gradient(ellipse at center, transparent 55%, color-mix(in oklab, var(--background) 60%, transparent) 100%)" }} />
    </div>
  );
}
