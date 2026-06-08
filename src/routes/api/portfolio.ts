import { createFileRoute } from "@tanstack/react-router";
// Importing as a URL so the asset is bundled by Vite with a hashed filename
// and never appears as a guessable path in /public.
import pdfUrl from "@/assets/empirical-media-portfolio.pdf?url";

function timingSafeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

export const Route = createFileRoute("/api/portfolio")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const expected = process.env.PORTFOLIO_PASSWORD;
        if (!expected) {
          return new Response(
            JSON.stringify({ error: "Server is not configured." }),
            { status: 500, headers: { "Content-Type": "application/json" } },
          );
        }

        let password = "";
        try {
          const body = (await request.json()) as { password?: unknown };
          password = typeof body.password === "string" ? body.password : "";
        } catch {
          return new Response(
            JSON.stringify({ error: "Invalid request body." }),
            { status: 400, headers: { "Content-Type": "application/json" } },
          );
        }

        if (!password || password.length > 128) {
          return new Response(
            JSON.stringify({ error: "Invalid password." }),
            { status: 400, headers: { "Content-Type": "application/json" } },
          );
        }

        if (!timingSafeEqual(password, expected)) {
          return new Response(
            JSON.stringify({ error: "Incorrect password." }),
            { status: 401, headers: { "Content-Type": "application/json" } },
          );
        }

        // Fetch the bundled asset from the same origin and stream it back.
        const assetUrl = new URL(pdfUrl, request.url);
        const upstream = await fetch(assetUrl);
        if (!upstream.ok || !upstream.body) {
          return new Response(
            JSON.stringify({ error: "File unavailable." }),
            { status: 502, headers: { "Content-Type": "application/json" } },
          );
        }

        return new Response(upstream.body, {
          status: 200,
          headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition":
              'attachment; filename="Empirical-Media-Portfolio.pdf"',
            "Cache-Control": "private, no-store",
          },
        });
      },
    },
  },
});
