export type Service = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  number: string;
};

export const services: Service[] = [
  {
    slug: "strategic-consulting",
    number: "01",
    title: "Strategic Consulting",
    tagline: "Where brand ambition meets market reality.",
    description:
      "Brand audits, GTM frameworks and category positioning informed by audience truth and category whitespace.",
    capabilities: ["Brand strategy", "Category positioning", "GTM frameworks", "Audience research"],
  },
  {
    slug: "media-planning",
    number: "02",
    title: "Media Planning & Audit",
    tagline: "Every rupee accountable. Every reach measurable.",
    description:
      "TV, OTT, print, OOH and digital buying with continuous audit loops to surface waste and reinvest in performance.",
    capabilities: ["TV & OTT planning", "OOH & print", "Programmatic", "Cross-media audit"],
  },
  {
    slug: "digital-marketing",
    number: "03",
    title: "Digital Marketing",
    tagline: "Performance with a point of view.",
    description:
      "Full-funnel digital — paid social, search, programmatic and SEO — engineered around your acquisition economics.",
    capabilities: ["Paid social", "Search & SEO", "Programmatic", "Lifecycle & CRM"],
  },
  {
    slug: "marketplace-management",
    number: "04",
    title: "Marketplace Management",
    tagline: "Win the shelf — wherever your customer scrolls.",
    description:
      "End-to-end management across Amazon, Flipkart, Myntra and quick-commerce, from listing craft to ads and growth.",
    capabilities: ["Listing & A+ content", "Marketplace ads", "Catalog ops", "Quick-commerce"],
  },
  {
    slug: "product-design",
    number: "05",
    title: "Product Design & Development",
    tagline: "Digital products that compound brand equity.",
    description:
      "Websites, web apps and storefronts designed and engineered with the same rigour we bring to brand.",
    capabilities: ["UX & UI design", "Headless web", "Shopify & D2C", "Web apps"],
  },
  {
    slug: "branding-as-a-service",
    number: "06",
    title: "Branding as a Service",
    tagline: "Your brand team — on retainer.",
    description:
      "Identity systems, design ops and ongoing creative direction subscribed monthly. No more frozen brand books.",
    capabilities: ["Identity systems", "Design ops", "Brand guidelines", "Retainer creative"],
  },
  {
    slug: "data-insights",
    number: "07",
    title: "Data Visualization & Insights",
    tagline: "Decisions, not dashboards.",
    description:
      "We model your media, sales and audience signals into decision-grade insight, packaged for the boardroom.",
    capabilities: ["MMM & attribution", "Custom dashboards", "Audience modeling", "Brand tracking"],
  },
  {
    slug: "creative-services",
    number: "08",
    title: "Creative Services",
    tagline: "Stories built for the medium.",
    description:
      "TVCs, films, social content and campaign craft made for the channels they will actually live on.",
    capabilities: ["TVCs & films", "Social content", "Campaign craft", "Motion & design"],
  },
];
