import {
  Activity,
  BadgeCheck,
  Building2,
  HeartPulse,
  House,
  Landmark,
  Map,
  Network,
  Stethoscope,
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
    title: "Assessment & Diagnostics",
    description:
      "Functional, biomechanical, and neuromuscular assessment technologies that establish needs and guide rehabilitation decisions.",
    icon: Stethoscope,
  },
  {
    title: "Therapeutic Rehabilitation",
    description:
      "Neurorehabilitation and musculoskeletal technologies supporting movement, strength, motor function, and independence.",
    icon: Activity,
  },
  {
    title: "Recovery & Pain Management",
    description:
      "Post-operative recovery, pain management, early mobilization, and return-to-function technologies.",
    icon: HeartPulse,
  },
  {
    title: "Home & Continuing Care",
    description:
      "Home-use and connected technologies that extend rehabilitation and recovery beyond hospitals and clinics.",
    icon: House,
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
  fitPoints: string[];
  uncertainties: string[];
  image: {
    src: string;
    alt: string;
  };
  sources: Array<{
    label: string;
    url: string;
  }>;
};

export const governmentProfiles: GovernmentProfile[] = [
  {
    title: "Boao Lecheng",
    officialName: "Hainan Boao Lecheng International Medical Tourism Pilot Zone",
    location: "Qionghai, Hainan",
    role: "Special medical access and real-world evidence pathway",
    summary:
      "A China landing option for eligible overseas medical devices where public sources describe policy mechanisms around clinically urgent imported drugs and devices, controlled clinical use, and real-world data application.",
    fitPoints: [
      "Potential first-use and evidence-generation route for eligible imported technologies.",
      "Relevant to rehabilitation, recovery, orthopaedic, pain-management, and advanced care devices when clinical demand and eligibility are confirmed.",
      "Useful for early China market feedback before broader national registration planning.",
    ],
    uncertainties: [
      "Product-by-product eligibility must be confirmed with the competent authorities and medical institutions.",
      "Public information does not mean Haoyi has a confirmed government cooperation relationship.",
      "Clinical use, pricing, data collection, and national registration value require case-specific legal and regulatory review.",
    ],
    image: {
      src: "/images/governments/boao-lecheng-park.jpg",
      alt: "Aerial view of Boao Lecheng International Medical Tourism Pilot Zone",
    },
    sources: [
      {
        label: "Boao Lecheng international medicines and devices platform",
        url: "https://www.lczxyf.com/",
      },
      {
        label: "Hainan Free Trade Port Lecheng profile",
        url: "https://www.hnftp.gov.cn/yshj/yqzt/hnzymygbalcgjyllyxxq/index.html",
      },
      {
        label: "Hainan government article on Lecheng development",
        url: "https://www.hainan.gov.cn/hainan/zmgtpxwe/202503/6d7ca40cab72443cad480571ece6b4cb.shtml",
      },
    ],
  },
  {
    title: "Wuhan East Lake",
    officialName: "Wuhan East Lake High-tech Development Zone / Optics Valley",
    location: "Wuhan, Hubei",
    role: "Medical device R&D, incubation, manufacturing, and clinical-adjacent ecosystem",
    summary:
      "A medical-device industrial ecosystem around Optics Valley and Biolake, with a dedicated medical device park, technical service platforms, incubator resources, and supporting clinical and regulatory-adjacent infrastructure.",
    fitPoints: [
      "Relevant for European rehabilitation hardware, imaging, sensing, smart-health, and device manufacturing discussions.",
      "Potential base for product localization, partner mapping, pilot manufacturing, and technical service coordination.",
      "Useful where a company needs both device-sector infrastructure and broader life-science innovation resources.",
    ],
    uncertainties: [
      "Specific incentives, site availability, and eligibility conditions need current confirmation.",
      "Public park information does not imply a confirmed Haoyi partnership.",
      "Any clinical collaboration must be separately validated with hospitals or clinical institutions.",
    ],
    image: {
      src: "/images/governments/wuhan-gaoke-medical-device-park-campus.jpg",
      alt: "Wuhan Gaoke Medical Device Park campus",
    },
    sources: [
      {
        label: "Wuhan Gaoke Medical Device Park profile",
        url: "https://www.whgk.com/index_map/84.html",
      },
      {
        label: "Optics Valley official profile",
        url: "https://www.wehdz.gov.cn/2022/sjgg_68763/",
      },
      {
        label: "Biolake park profile",
        url: "https://www.ibiolake.com/Into-park.html",
      },
    ],
  },
  {
    title: "Taizhou CMC",
    officialName: "China Medical City / Taizhou Medical High-tech Zone",
    location: "Taizhou, Jiangsu",
    role: "Biopharma and medical-device industrialization platform",
    summary:
      "A Yangtze River Delta life-science platform with public materials describing China Medical City as a national medical high-tech zone with biopharma, diagnostics, high-end medical device, and industrial service capacity.",
    fitPoints: [
      "Relevant for device industrialization, diagnostics, high-end medical device commercialization, and service-platform matching.",
      "Potential fit for companies needing inspection, testing, regulatory service, public platform, and manufacturing resources.",
      "Useful where a European device company wants a Yangtze River Delta landing option with life-science specialization.",
    ],
    uncertainties: [
      "The practical relevance of each public platform depends on product type and project stage.",
      "Named companies and institutions from public materials are not presented as Haoyi partners.",
      "Incentives and regulatory service access require direct current confirmation.",
    ],
    image: {
      src: "/images/governments/taizhou-china-medical-city-aerial.jpg",
      alt: "Aerial view of China Medical City in Taizhou",
    },
    sources: [
      {
        label: "China Medical City park profile",
        url: "https://www.cmc.gov.cn/qj/yq/art/2023/art_00829813cef14bc6b06dbb94ad74fafd.html",
      },
      {
        label: "China Medical City official website",
        url: "https://www.cmc.gov.cn/",
      },
      {
        label: "Taizhou UDI and medical device service context",
        url: "https://scjgj.taizhou.gov.cn/xwzx/sjdt/art/2023/art_2e40046fcbfb475ba2d23cf3dfcfe65b.html",
      },
    ],
  },
  {
    title: "Shenzhen Luohu",
    officialName: "Luohu District, Shenzhen",
    location: "Shenzhen, Guangdong",
    role: "Greater Bay Area health services, smart healthcare, and clinical scenario access",
    summary:
      "A Shenzhen urban district with public investment materials positioning Luohu around life-health, high-end medical devices, smart healthcare, clinical scenarios, and health-service innovation.",
    fitPoints: [
      "Relevant for digital rehabilitation, home-care, smart-health, monitoring, and health-service models.",
      "Potential fit for companies that need Greater Bay Area access, healthcare service scenarios, and Shenzhen-Hong Kong proximity.",
      "Useful for partner mapping across clinical services, innovation centers, and health-technology operators.",
    ],
    uncertainties: [
      "Product landing feasibility depends on regulatory status, clinical partner interest, and local commercial pathway.",
      "Public district profile does not mean a confirmed Haoyi government relationship.",
      "Healthcare scenario access needs separate stakeholder validation.",
    ],
    image: {
      src: "/images/governments/shenzhen-luohu-software-industrial-park.jpg",
      alt: "Luohu Investment Holding Software Industrial Park in Shenzhen",
    },
    sources: [
      {
        label: "Shenzhen government Luohu health industry profile",
        url: "https://www.sz.gov.cn/szzt2010/sarczdnl/hyys/content/post_12180280.html",
      },
      {
        label: "Luohu government overview",
        url: "https://www.szlh.gov.cn/English/about/overview/content/mpost_9380767.html",
      },
      {
        label: "Luohu government research center update",
        url: "https://www.sz.gov.cn/cn/xxgk/zfxxgj/gqdt/content/post_11452932.html",
      },
    ],
  },
  {
    title: "Changchun Economic Zone",
    officialName: "Changchun Economic and Technological Development Zone",
    location: "Changchun, Jilin",
    role: "Medical-device manufacturing, bonded-zone, and Northeast Asia access option",
    summary:
      "A state-level economic and technological development zone where public sources describe medical devices as part of the strategic emerging industry structure, supported by Changchun Xinglong Comprehensive Bonded Zone.",
    fitPoints: [
      "Relevant for rehabilitation medical, diagnostics, medical materials, high-end instruments, and import-localization discussion.",
      "Potential fit for companies evaluating bonded-zone logistics, manufacturing localization, and Northeast China market access.",
      "Useful where cost, manufacturing, import equipment, and open-platform policies are central to the China entry pathway.",
    ],
    uncertainties: [
      "Specific subsidy eligibility, customs treatment, and investment requirements require current authority confirmation.",
      "Public industrial positioning does not imply a confirmed Haoyi partnership.",
      "Rehabilitation-device fit should be verified against the product's technical category and local platform capacity.",
    ],
    image: {
      src: "/images/governments/changchun-xinglong-bonded-zone.jpg",
      alt: "Aerial view of Changchun Xinglong Comprehensive Bonded Zone",
    },
    sources: [
      {
        label: "Jilin Department of Commerce development-zone profile",
        url: "https://swt.jl.gov.cn/fzhzgj/syzc/202306/t20230627_8729955.html",
      },
      {
        label: "Jilin investment project profile",
        url: "https://www.jl.gov.cn/szfzt/tzcj/zdxm/xyyxm/202604/t20260430_3628074.html",
      },
      {
        label: "China Daily / Invest in China zone profile",
        url: "https://investinchina.chinadaily.com.cn/s/201810/24/WS5c8766af498e27e33803a206/changchun-economic-technological-development-zone.html",
      },
    ],
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
      "AI-assisted research and human review organize public sources, company materials, policy documents, and visible evidence gaps.",
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
