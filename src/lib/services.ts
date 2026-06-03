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
    slug: "media-planning",
    number: "01",
    title: "Media Planning & Audit",
    tagline: "Every rupee accountable. Every reach measurable.",
    description:
      "Linear TV, CTV, print, OOH and digital buying with continuous BARC-led audit loops to surface waste and reinvest in performance.",
    capabilities: ["TV & CTV planning", "OOH & print", "Programmatic", "Cross-media audit"],
  },
  {
    slug: "digital-marketing",
    number: "02",
    title: "Digital Marketing",
    tagline: "Performance with a point of view.",
    description:
      "Full-funnel digital — paid social, search, programmatic and SEO — engineered around your acquisition economics.",
    capabilities: ["Paid social", "Search & SEO", "Programmatic", "Lifecycle & CRM"],
  },
  {
    slug: "marketing-as-a-service",
    number: "03",
    title: "Marketing as a Service",
    tagline: "One partner. The entire funnel.",
    description:
      "An integrated marketing engine across strategy, brand, media, content and commerce — operated as a single, accountable stack.",
    capabilities: ["Integrated planning", "Brand & content", "Performance media", "Commerce ops"],
  },
  {
    slug: "data-visualisation",
    number: "04",
    title: "Data Visualisation",
    tagline: "Make faster decisions backed by visuals.",
    description:
      "Make faster decisions backed by visuals and custom dashboards with projections — not just raw numbers.",
    capabilities: ["Real-time Dashboard", "Category Insights", "Campaign Delivery", "Competitor Studies"],
  },
  {
    slug: "creative-services",
    number: "05",
    title: "Creative Services",
    tagline: "Stories built for the medium.",
    description:
      "TVCs, films, social content and campaign craft made for the channels they will actually live on.",
    capabilities: ["TVCs & films", "Social content", "Campaign craft", "Motion & design"],
  },
  {
    slug: "strategic-consulting",
    number: "06",
    title: "Strategic Consulting",
    tagline: "Where brand ambition meets market reality.",
    description:
      "Brand audits, GTM frameworks and category positioning informed by audience truth and category whitespace.",
    capabilities: ["Brand strategy", "Category positioning", "GTM frameworks", "Audience research"],
  },
];
