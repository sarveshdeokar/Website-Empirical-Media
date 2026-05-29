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
      "Linear TV, CTV, print, OOH and digital buying with continuous BARC-led audit loops to surface waste and reinvest in performance.",
    capabilities: ["TV & CTV planning", "OOH & print", "Programmatic", "Cross-media audit"],
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
    slug: "full-stack-marketing",
    number: "04",
    title: "Full-Stack Marketing",
    tagline: "One partner. The entire funnel.",
    description:
      "An integrated marketing engine across strategy, brand, media, content and commerce — operated as a single, accountable stack.",
    capabilities: ["Integrated planning", "Brand & content", "Performance media", "Commerce ops"],
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
    slug: "creative-services",
    number: "06",
    title: "Creative Services",
    tagline: "Stories built for the medium.",
    description:
      "TVCs, films, social content and campaign craft made for the channels they will actually live on.",
    capabilities: ["TVCs & films", "Social content", "Campaign craft", "Motion & design"],
  },
];
