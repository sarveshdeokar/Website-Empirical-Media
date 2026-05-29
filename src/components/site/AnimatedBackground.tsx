/**
 * Quiet editorial background: paper wash + faint architectural grid + grain.
 * No decorative shapes. Light/dark aware via tokens.
 */
export default function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 paper-grid opacity-40" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, color-mix(in oklab, var(--ink) 4%, transparent), transparent 70%)",
        }}
      />
      <div className="absolute inset-0 grain" />
    </div>
  );
}
