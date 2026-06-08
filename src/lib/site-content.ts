import {
  BadgeCheck,
  Building2,
  HeartPulse,
  Landmark,
  Map,
  Network,
  Target,
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Focus", href: "/focus" },
  { label: "Services", href: "/services" },
  { label: "Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
];

export const focusAreas = [
  {
    title: "Diagnostics, Imaging & IVD",
    description:
      "Imaging, laboratory, point-of-care, screening, and clinical assessment technologies.",
  },
  {
    title: "Surgical, Interventional & Implantable",
    description:
      "Instruments, robotics, implants, minimally invasive systems, and procedure-support technologies.",
  },
  {
    title: "Therapeutic & Life Support",
    description:
      "Respiratory, renal, infusion, wound care, pain management, and treatment systems.",
  },
  {
    title: "Monitoring & Digital Health",
    description:
      "Patient monitoring, wearables, connected devices, SaMD, and AI-enabled clinical tools.",
  },
  {
    title: "Rehabilitation & Assistive Technologies",
    description:
      "Neurorehabilitation, musculoskeletal recovery, mobility, prosthetics, and functional support.",
  },
  {
    title: "Hospital, Home Care & Consumables",
    description:
      "Hospital equipment, critical-care systems, home-use devices, and medical consumables.",
  },
];

export const services = [
  {
    title: "Market & Entry Strategy",
    description:
      "Assess demand, clinical relevance, competition, regulatory feasibility, localization needs, and the right market-entry model.",
    outcome: "A clear market and entry decision.",
  },
  {
    title: "Partner Development",
    description:
      "Map and prioritize clinical, distribution, strategic, industrial park, and investment partners; prepare outreach and qualify opportunities.",
    outcome: "A focused pipeline of relevant partners.",
  },
  {
    title: "Commercial Execution",
    description:
      "Support meetings, coordinate negotiations and partnership structures, and maintain structured follow-up until a defined next step is reached.",
    outcome: "An actionable commercial next step.",
  },
];

export const partnerGroups = [
  {
    title: "Medical device companies",
    description:
      "European companies evaluating China and Chinese companies preparing for overseas growth.",
    icon: Building2,
  },
  {
    title: "Clinical & commercial partners",
    description:
      "Hospitals, clinical experts, distributors, and specialist operators relevant to evidence, adoption, and market access.",
    icon: HeartPulse,
  },
  {
    title: "Industrial parks",
    description:
      "Medical technology landing platforms supporting localization, operations, manufacturing, and ecosystem access.",
    icon: Landmark,
  },
  {
    title: "Capital & specialist network",
    description:
      "Investors, universities, innovation offices, and legal, regulatory, and IP advisors supporting execution.",
    icon: Network,
  },
];

export type GovernmentProfile = {
  title: string;
  officialName: string;
  location: string;
  role: string;
  summary: string;
  verifiedFacts: Array<{
    value: string;
    label: string;
    period: string;
  }>;
  relevance: string[];
  asOf: string;
  image: {
    src: string;
    alt: string;
  };
};

export const governmentProfiles: GovernmentProfile[] = [
  {
    title: "Boao Lecheng",
    officialName: "Hainan Boao Lecheng International Medical Tourism Pilot Zone",
    location: "Qionghai, Hainan",
    role: "Clinical access & real-world evidence",
    summary:
      "A specialist medical pilot zone for eligible overseas-approved products, controlled clinical use, and China-focused real-world evidence planning.",
    verifiedFacts: [
      {
        value: "476",
        label: "International innovative medicines and devices introduced",
        period: "2025 official materials",
      },
      {
        value: "301",
        label: "Medical devices within the introduced product total",
        period: "2025 official materials",
      },
      {
        value: "21",
        label: "Products approved using Lecheng real-world data",
        period: "By March 2025",
      },
    ],
    relevance: [
      "Eligible overseas-approved medical devices seeking an initial China clinical pathway.",
      "Real-world evidence strategy linked to a wider NMPA registration plan.",
      "Specialist hospital, clinician, and patient-access assessment.",
    ],
    asOf: "2025 official materials and March 2025 government updates",
    image: {
      src: "/images/governments/boao-lecheng.webp",
      alt: "Aerial view of Boao Lecheng International Medical Tourism Pilot Zone",
    },
  },
  {
    title: "Wuhan Optics Valley",
    officialName: "Wuhan Hi-tech Medical Devices Park",
    location: "Wuhan, Hubei",
    role: "Device R&D & industrialization",
    summary:
      "A dedicated medical-device park in Optics Valley combining incubation, R&D, production, technical services, and advanced manufacturing capacity.",
    verifiedFacts: [
      {
        value: "2.0m sqm",
        label: "Planned gross floor area across the medical-device park",
        period: "Official park profile",
      },
      {
        value: "400+",
        label: "Registered enterprises in the park",
        period: "Official park profile",
      },
      {
        value: "300+",
        label: "Class II and above medical-device certificates",
        period: "Official park profile",
      },
    ],
    relevance: [
      "Medical-device R&D, incubation, testing, and product industrialization.",
      "Imaging, smart healthcare, medical materials, and advanced equipment projects.",
      "Central China manufacturing and technical-service partner development.",
    ],
    asOf: "Official park profile accessed June 2026",
    image: {
      src: "/images/governments/wuhan-medical-device-park.webp",
      alt: "Wuhan Hi-tech Medical Devices Incubator building",
    },
  },
  {
    title: "Taizhou CMC",
    officialName: "China Medical City / Taizhou Medical High-tech Zone",
    location: "Taizhou, Jiangsu",
    role: "Regulatory services & manufacturing",
    summary:
      "A Yangtze River Delta medical-industry platform with regulatory service infrastructure, medical-device testing, industrial space, and investment capacity.",
    verifiedFacts: [
      {
        value: "1,300+",
        label: "Medical and pharmaceutical companies located in CMC",
        period: "March 2026 presentation",
      },
      {
        value: "2.2m sqm",
        label: "Completed standard factories and medical-device zone space",
        period: "March 2026 presentation",
      },
      {
        value: "RMB 20bn",
        label: "Approximate registered scale across 24 industry funds",
        period: "March 2026 presentation",
      },
    ],
    relevance: [
      "China entity setup, registration services, testing, and manufacturing localization.",
      "Diagnostics, high-end medical devices, and hardware-led projects.",
      "Industrial fund and long-term Yangtze River Delta landing discussions.",
    ],
    asOf: "March 2026 China Medical City presentation",
    image: {
      src: "/images/governments/taizhou-cmc.webp",
      alt: "Aerial view of China Medical City in Taizhou",
    },
  },
  {
    title: "Tongxiang / Wuzhen",
    officialName: "Tongxiang City / Wuzhen High-tech Industrial Park",
    location: "Tongxiang, Zhejiang",
    role: "Smart sensing, digital health & equipment",
    summary:
      "A Yangtze River Delta location combining digital infrastructure, smart sensing, high-end equipment, and explicitly identified life-health and medical-equipment development directions.",
    verifiedFacts: [
      {
        value: "4,326",
        label: "Digital-economy enterprises operating in Tongxiang",
        period: "2024",
      },
      {
        value: "RMB 29.6bn",
        label: "Core digital manufacturing output",
        period: "2024",
      },
      {
        value: "2",
        label: "Local platforms naming life-health or medical equipment as a focus",
        period: "2025 investment report",
      },
    ],
    relevance: [
      "Digital health, connected devices, smart sensing, and data-enabled care models.",
      "High-end equipment and precision manufacturing discussions.",
      "Projects seeking access to the Shanghai-Hangzhou innovation corridor.",
    ],
    asOf: "2024 economic data published in the 2025 investment report",
    image: {
      src: "/images/governments/tongxiang.webp",
      alt: "Aerial view of Tongxiang in Zhejiang Province",
    },
  },
  {
    title: "Shenzhen Luohu",
    officialName: "Luohu Shenzhen-Hong Kong Life & Health Industrial Park",
    location: "Shenzhen, Guangdong",
    role: "Greater Bay Area health innovation",
    summary:
      "An urban Greater Bay Area landing option connecting Shenzhen-Hong Kong commercial access with life-health, digital technology, and healthcare service ecosystems.",
    verifiedFacts: [
      {
        value: "RMB 120bn+",
        label: "Life-health industry output in Luohu",
        period: "2024",
      },
      {
        value: "106",
        label: "Life-health companies above designated size",
        period: "2024",
      },
      {
        value: "300,000 sqm",
        label: "Planned area of the industrial park's Plot B1",
        period: "2025 investment materials",
      },
    ],
    relevance: [
      "Digital health, monitoring, home care, AI-enabled devices, and service models.",
      "Greater Bay Area commercial development and Shenzhen-Hong Kong connectivity.",
      "China BD, investor engagement, demonstration, and headquarters functions.",
    ],
    asOf: "2024 industry data and 2025 investment materials",
    image: {
      src: "/images/governments/shenzhen-luohu.webp",
      alt: "Industrial park campus in Shenzhen Luohu District",
    },
  },
  {
    title: "Changchun Economic Zone",
    officialName: "Changchun Economic and Technological Development Zone",
    location: "Changchun, Jilin",
    role: "Manufacturing & bonded logistics",
    summary:
      "A state-level development zone combining a planned medical-health industrial system with manufacturing capacity and the Xinglong Comprehensive Bonded Zone.",
    verifiedFacts: [
      {
        value: "3.91 km²",
        label: "Planned footprint for the medical-health industrial system",
        period: "Official planning materials",
      },
      {
        value: "1.0m sqm",
        label: "Planned gross floor area of the medical-device park",
        period: "Official planning materials",
      },
      {
        value: "RMB 5bn",
        label: "Planned investment in the medical-device park",
        period: "Official planning materials",
      },
    ],
    relevance: [
      "Medical-device manufacturing, assembly, and import-equipment planning.",
      "Bonded logistics, cross-border trade, and Northeast China market access.",
      "Cost-sensitive hardware, consumables, diagnostics, and medical materials.",
    ],
    asOf: "Official planning materials provided May 2026",
    image: {
      src: "/images/governments/changchun-economic-zone.webp",
      alt: "Aerial view of Changchun Xinglong Comprehensive Bonded Zone",
    },
  },
];

export const generalEnquiryTopics = [
  "Services and capabilities",
  "China market entry and strategy",
  "Partnership opportunities",
  "General enquiries",
];

export const workflowPrinciples = [
  {
    title: "Evidence",
    description:
      "AI-assisted research and human review organize company materials, policy documents, regulatory evidence, and remaining information gaps.",
  },
  {
    title: "Pathway",
    description:
      "Market fit, regulatory logic, clinical relevance, and partner readiness are assessed together before commercial outreach.",
  },
  {
    title: "Execution",
    description:
      "Target mapping, outreach preparation, opportunity qualification, meeting support, and structured follow-up are kept tied to clear next steps.",
  },
];

export const factsToConfirm = [
  "Legal entity details: To be confirmed",
  "Registered office address: To be confirmed",
  "Approved public partner names: To be confirmed",
  "Representative project examples: To be confirmed",
  "Primary phone number: To be confirmed",
];

export const differentiators = [
  {
    title: "Europe-China focus",
    description:
      "Built around cross-border commercialization between European healthcare innovators and China market stakeholders.",
    icon: Map,
  },
  {
    title: "Healthcare-specific lens",
    description:
      "Commercial analysis considers clinical pathway, regulatory pathway, partner readiness, and market access logic.",
    icon: BadgeCheck,
  },
  {
    title: "Structured partner work",
    description:
      "Partner ecosystems are mapped by role, relevance, readiness, and next-step value instead of generic lists.",
    icon: Target,
  },
];
