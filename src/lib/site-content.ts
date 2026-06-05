import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Brain,
  BriefcaseBusiness,
  Building2,
  ClipboardCheck,
  Crosshair,
  FileSearch,
  Globe2,
  Handshake,
  HeartPulse,
  House,
  Landmark,
  LineChart,
  Map,
  Network,
  Target,
  University,
  Users,
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
    title: "Neurorehabilitation",
    description:
      "Technologies supporting neurological recovery, mobility, motor function, and functional independence.",
    icon: Brain,
  },
  {
    title: "Musculoskeletal & Pain",
    description:
      "Devices and care technologies focused on movement, strength, musculoskeletal function, and pain management.",
    icon: Activity,
  },
  {
    title: "Post-operative Recovery",
    description:
      "Solutions supporting early mobilization, therapy adherence, recovery progression, and return to function.",
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
    title: "Market Entry",
    description:
      "Market structure, user pathway, payment logic, competitor pressure, and practical entry route assessment.",
    icon: Globe2,
  },
  {
    title: "Partner Mapping",
    description:
      "Target partner mapping across clinical, commercial, industrial, capital, and advisory ecosystems.",
    icon: Network,
  },
  {
    title: "BD Execution",
    description:
      "We support target partner mapping, outreach preparation, opportunity qualification, meeting support, negotiation coordination, and structured follow-up until a clear commercial next step is reached.",
    icon: Handshake,
  },
  {
    title: "Regulatory Pathway",
    description:
      "Preliminary pathway framing, evidence gap mapping, registration considerations, and expert coordination.",
    icon: ClipboardCheck,
  },
  {
    title: "Clinical Access",
    description:
      "Clinical stakeholder mapping, pilot pathway design, evidence discussion support, and access planning.",
    icon: HeartPulse,
  },
  {
    title: "Commercial Strategy",
    description:
      "Positioning, channel logic, pricing considerations, market prioritization, and launch sequencing.",
    icon: Crosshair,
  },
  {
    title: "Transaction Support",
    description:
      "Support for cooperation structures, qualification materials, commercial terms, and cross-border coordination.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Overseas Expansion",
    description:
      "Support for Chinese healthcare companies evaluating overseas markets, partners, and commercialization pathways.",
    icon: ArrowRight,
  },
];

export const partnerGroups = [
  {
    title: "European medical device companies",
    description:
      "Companies assessing China entry, partner strategy, localization pathways, or broader Asia opportunities.",
    icon: Globe2,
  },
  {
    title: "Chinese medical device companies",
    description:
      "Companies preparing for overseas expansion, commercial partnership, market validation, or strategic positioning.",
    icon: Building2,
  },
  {
    title: "Hospitals and clinical experts",
    description:
      "Clinical stakeholders and expert networks relevant to evidence, workflow, adoption, and access discussions.",
    icon: HeartPulse,
  },
  {
    title: "Distributors",
    description:
      "Commercial channel partners, regional distributors, and specialist operators in healthcare markets.",
    icon: Users,
  },
  {
    title: "Industrial parks",
    description:
      "Healthcare and medical technology platforms supporting landing, localization, and industry development.",
    icon: Landmark,
  },
  {
    title: "Investors",
    description:
      "Strategic and financial investors evaluating medical device and healthcare commercialization opportunities.",
    icon: LineChart,
  },
  {
    title: "Universities and innovation offices",
    description:
      "Research, translation, and innovation offices linked to healthcare technology development.",
    icon: University,
  },
  {
    title: "Legal, regulatory, and IP advisors",
    description:
      "Professional advisors supporting compliant, evidence-based, and defensible cross-border execution.",
    icon: FileSearch,
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
    sourceLabel: string;
    sourceUrl: string;
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
      src: "/images/governments/boao-lecheng.jpg",
      alt: "Boao Lecheng International Medical Tourism Pilot Zone building sign",
      sourceLabel: "Boao Lecheng International Medicines and Medical Devices",
      sourceUrl: "https://www.lczxyf.com/",
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
      src: "/images/governments/wuhan-east-lake-medical-device-park.jpg",
      alt: "Wuhan Gaoke Medical Device Park building",
      sourceLabel: "Wuhan Gaoke Medical Device Park",
      sourceUrl: "https://www.whgk.com/index_map/84.html",
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
      src: "/images/governments/taizhou-china-medical-city.jpg",
      alt: "China Medical City planning and investment discussion scene",
      sourceLabel: "China Medical City official website",
      sourceUrl: "https://www.cmc.gov.cn/",
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
      src: "/images/governments/shenzhen-luohu.jpg",
      alt: "Luohu District city view in Shenzhen",
      sourceLabel: "Luohu District Government English portal",
      sourceUrl: "https://www.szlh.gov.cn/English/about/overview/content/mpost_9380767.html",
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
      src: "/images/governments/changchun-economic-zone.jpeg",
      alt: "Changchun Economic and Technological Development Zone industrial landscape",
      sourceLabel: "China Daily / Invest in China",
      sourceUrl:
        "https://investinchina.chinadaily.com.cn/s/201810/24/WS5c8766af498e27e33803a206/changchun-economic-technological-development-zone.html",
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

export const contactCategories = [
  "European company entering China",
  "Chinese company expanding overseas",
  "Distributor or commercial partner",
  "Investor or strategic partner",
  "Government or industrial platform",
  "General enquiry",
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
  "Primary contact email and phone: To be confirmed",
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
