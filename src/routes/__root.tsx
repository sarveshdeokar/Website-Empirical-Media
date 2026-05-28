import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Signal lost</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This page isn't on the grid. Let's get you back.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-xl bg-primary text-primary-foreground px-5 py-3 text-sm font-medium"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl font-semibold">Something glitched</h1>
        <p className="mt-2 text-sm text-muted-foreground">Try refreshing or head home.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-xl bg-primary text-primary-foreground px-5 py-3 text-sm font-medium"
          >
            Try again
          </button>
          <a href="/" className="rounded-xl border border-border px-5 py-3 text-sm font-medium">Home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Empirical Media — Media, engineered for outcomes" },
      { name: "description", content: "Full-stack agency for TV, digital, brand and commerce. Strategy, media, creative, marketplaces and product — engineered for outcomes." },
      { property: "og:title", content: "Empirical Media — Media, engineered for outcomes" },
      { property: "og:description", content: "Full-stack agency for TV, digital, brand and commerce. Strategy, media, creative, marketplaces and product — engineered for outcomes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Empirical Media — Media, engineered for outcomes" },
      { name: "twitter:description", content: "Full-stack agency for TV, digital, brand and commerce. Strategy, media, creative, marketplaces and product — engineered for outcomes." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a2b294cb-6c13-424d-a7e8-72597ac768e3/id-preview-2db0e8b9--3ca858b9-b6c0-4ca6-8622-4cf6a010b1d9.lovable.app-1779265262672.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a2b294cb-6c13-424d-a7e8-72597ac768e3/id-preview-2db0e8b9--3ca858b9-b6c0-4ca6-8622-4cf6a010b1d9.lovable.app-1779265262672.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();`;

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

import AnimatedBackground from "@/components/site/AnimatedBackground";

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <AnimatedBackground />
      <Outlet />
    </QueryClientProvider>
  );
}
