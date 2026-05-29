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
    tagline: "End-to-end funnel — Capture to Lead, Capture to Sales.",
    description:
      "We engineer the full digital funnel — from first impression to qualified lead to closed sale. Two integrated playbooks: Capture to Lead (intent capture, qualification, nurture, CRM hand-off) and Capture to Sales (performance media, marketplace pull-through, conversion ops). Every rupee mapped to a measurable outcome across Google, Meta, YouTube, programmatic and commerce platforms.",
    capabilities: [
      "Capture-to-Lead funnels",
      "Capture-to-Sales funnels",
      "Paid social & search",
      "Programmatic & YouTube",
      "SEO & content",
      "Lifecycle, CRM & retargeting",
      "Attribution & MMM",
    ],
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
    slug: "full-stack-marketing",
    number: "06",
    title: "Full-Stack Marketing",
    tagline: "Branding, content, campaigns and growth — under one roof.",
    description:
      "Your end-to-end marketing function on retainer. Brand identity and guidelines, design ops, content engines, campaign craft, performance media and analytics — operating as one integrated team so every brand decision and every growth lever pull in the same direction.",
    capabilities: [
      "Brand identity & guidelines",
      "Design ops & creative retainer",
      "Content & campaign engines",
      "Performance + brand media",
      "Social & community",
      "Reporting & insights",
    ],
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
