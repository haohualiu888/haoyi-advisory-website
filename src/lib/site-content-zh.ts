import {
  BadgeCheck,
  Building2,
  HeartPulse,
  Landmark,
  Map,
  Network,
  Target,
} from "lucide-react";
import {
  governmentProfiles,
  type GovernmentProfile,
} from "@/lib/site-content";
import { getNavItems } from "@/lib/site-navigation";

export const navItemsZh = getNavItems("zh");

export const focusAreasZh = [
  {
    title: "诊断、医学影像及体外诊断",
    description: "覆盖医学影像、实验室诊断、即时检测、筛查及临床评估技术。",
  },
  {
    title: "外科、介入及植入",
    description: "覆盖手术器械、机器人、植入物、微创系统及手术支持技术。",
  },
  {
    title: "治疗及生命支持",
    description: "覆盖呼吸、肾脏、输注、伤口护理、疼痛管理及治疗系统。",
  },
  {
    title: "监护与数字医疗",
    description: "覆盖患者监护、可穿戴设备、互联设备、SaMD 及人工智能临床工具。",
  },
  {
    title: "康复与辅助技术",
    description: "覆盖神经康复、肌骨恢复、行动辅助、假肢矫形及功能支持。",
  },
  {
    title: "医院、居家护理及医用耗材",
    description: "覆盖医院设备、重症系统、家用医疗器械及医用耗材。",
  },
];

export const servicesZh = [
  {
    title: "市场与进入策略",
    description:
      "评估需求、临床相关性、竞争格局、监管可行性、本地化要求及适合的市场进入模式。",
    outcome: "形成明确的市场及进入决策。",
  },
  {
    title: "合作伙伴拓展",
    description:
      "筛选并排序临床、经销、战略、产业园及投资合作伙伴，准备外联材料并评估合作机会。",
    outcome: "建立聚焦且相关的合作伙伴管线。",
  },
  {
    title: "商业化执行",
    description:
      "支持会议、协调谈判和合作架构，并持续进行结构化跟进，直至形成明确的下一步行动。",
    outcome: "推动可执行的商业化下一步。",
  },
];

export const partnerGroupsZh = [
  {
    title: "医疗器械企业",
    description: "支持评估中国市场的欧洲企业，以及准备海外拓展的中国企业。",
    icon: Building2,
  },
  {
    title: "临床与商业合作伙伴",
    description: "连接与证据、采用及市场准入相关的医院、临床专家、经销商和专业运营方。",
    icon: HeartPulse,
  },
  {
    title: "产业园区",
    description: "连接支持本地化、运营、生产制造及产业生态进入的医疗科技落地平台。",
    icon: Landmark,
  },
  {
    title: "资本与专业服务网络",
    description: "连接投资机构、高校、创新办公室以及法律、监管和知识产权顾问。",
    icon: Network,
  },
];

type GovernmentProfileTranslation = Omit<
  GovernmentProfile,
  "verifiedFacts" | "image"
> & {
  verifiedFacts: Array<{ label: string; period: string }>;
  imageAlt: string;
};

const governmentProfileTranslations: GovernmentProfileTranslation[] = [
  {
    title: "博鳌乐城",
    officialName: "海南博鳌乐城国际医疗旅游先行区",
    location: "海南琼海",
    role: "临床使用与真实世界证据",
    summary:
      "面向符合条件的境外已获批产品，提供特许临床使用及面向中国注册的真实世界证据规划场景。",
    verifiedFacts: [
      { label: "已引进的国际创新药品和医疗器械", period: "2025 年官方材料" },
      { label: "上述引进产品中的医疗器械数量", period: "2025 年官方材料" },
      { label: "使用乐城真实世界数据获批的产品", period: "截至 2025 年 3 月" },
    ],
    relevance: [
      "适合寻求中国初步临床路径的境外已获批医疗器械。",
      "与后续 NMPA 注册计划相衔接的真实世界证据策略。",
      "专科医院、临床专家及患者可及性评估。",
    ],
    asOf: "基于 2025 年官方材料及 2025 年 3 月政府更新",
    imageAlt: "海南博鳌乐城国际医疗旅游先行区航拍图",
  },
  {
    title: "武汉光谷",
    officialName: "武汉高科医疗器械园",
    location: "湖北武汉",
    role: "器械研发与产业化",
    summary:
      "光谷内的专业医疗器械园区，结合孵化、研发、生产、技术服务及先进制造能力。",
    verifiedFacts: [
      { label: "医疗器械园规划总建筑面积", period: "园区官方资料" },
      { label: "园区注册企业", period: "园区官方资料" },
      { label: "二类及以上医疗器械注册证", period: "园区官方资料" },
    ],
    relevance: [
      "医疗器械研发、孵化、测试及产品产业化。",
      "医学影像、智慧医疗、医用材料及先进设备项目。",
      "华中地区制造与技术服务合作伙伴拓展。",
    ],
    asOf: "截至 2026 年 6 月查阅的园区官方资料",
    imageAlt: "武汉高科医疗器械园园区",
  },
  {
    title: "泰州医药城",
    officialName: "中国医药城 / 泰州医药高新区",
    location: "江苏泰州",
    role: "监管服务与生产制造",
    summary:
      "长三角医疗产业平台，具备监管服务、医疗器械检测、产业空间及投资支持能力。",
    verifiedFacts: [
      { label: "入驻医药及医疗企业", period: "2026 年 3 月推介材料" },
      { label: "已建标准厂房及医疗器械园区空间", period: "2026 年 3 月推介材料" },
      { label: "24 支产业基金的注册总规模约为", period: "2026 年 3 月推介材料" },
    ],
    relevance: [
      "中国实体设立、注册服务、检测及生产本地化。",
      "诊断、高端医疗器械及硬件型项目。",
      "产业基金及长三角长期落地合作。",
    ],
    asOf: "基于 2026 年 3 月中国医药城推介材料",
    imageAlt: "泰州中国医药城航拍图",
  },
  {
    title: "桐乡 / 乌镇",
    officialName: "桐乡市 / 乌镇高新技术产业园",
    location: "浙江桐乡",
    role: "智能感知、数字医疗与装备",
    summary:
      "位于长三角，结合数字基础设施、智能感知、高端装备，并明确发展生命健康和医疗装备产业。",
    verifiedFacts: [
      { label: "桐乡数字经济企业", period: "2024 年" },
      { label: "数字制造业核心产值", period: "2024 年" },
      { label: "明确将生命健康或医疗装备列为重点的本地平台", period: "2025 年投资报告" },
    ],
    relevance: [
      "数字医疗、互联设备、智能感知及数据驱动的照护模式。",
      "高端装备和精密制造合作。",
      "希望进入沪杭创新走廊的项目。",
    ],
    asOf: "基于 2025 年投资报告公布的 2024 年经济数据",
    imageAlt: "浙江桐乡城市航拍图",
  },
  {
    title: "上海大零号湾",
    officialName: "上海养老科技产业园（大零号湾）",
    location: "上海闵行",
    role: "银发经济与养老科技",
    summary:
      "位于上海交通大学附近的大零号湾创新区，聚焦银发经济、辅助器具、康复、照护和健康监测，并配套市级补贴、医院场景及专项投资。",
    verifiedFacts: [
      { label: "园区注册企业，其中 27 家实体入驻", period: "2026 年园区推介材料" },
      { label: "每个受支持养老科技项目最高市级补贴", period: "上海科技行动计划" },
      { label: "首期养老创投基金，计划扩大至 2 亿元以上", period: "2026 年计划" },
    ],
    relevance: [
      "面向中国老龄人口的康复、辅助、居家照护及健康监测设备。",
      "医院、养老机构和社区场景的验证及采用。",
      "市级补贴、专项投资基金及银发经济生态支持。",
    ],
    asOf: "基于 2026 年上海养老科技产业园推介材料",
    imageAlt: "上海闵行大零号湾养老科技园区",
  },
  {
    title: "深圳罗湖",
    officialName: "罗湖深港生命健康产业园",
    location: "广东深圳",
    role: "粤港澳大湾区健康创新",
    summary:
      "连接深圳与香港商业资源，并结合生命健康、数字技术和医疗服务生态的城市型大湾区落地选择。",
    verifiedFacts: [
      { label: "罗湖生命健康产业产值", period: "2024 年" },
      { label: "规模以上生命健康企业", period: "2024 年" },
      { label: "产业园 B1 地块规划面积", period: "2025 年招商材料" },
    ],
    relevance: [
      "数字医疗、监护、居家护理、人工智能器械及服务模式。",
      "大湾区商业拓展及深港连接。",
      "中国商务拓展、投资者沟通、示范及总部功能。",
    ],
    asOf: "基于 2024 年产业数据及 2025 年招商材料",
    imageAlt: "深圳罗湖产业园区",
  },
  {
    title: "长春经开区",
    officialName: "长春经济技术开发区",
    location: "吉林长春",
    role: "生产制造与保税物流",
    summary:
      "国家级开发区，结合规划中的医疗健康产业体系、制造能力及兴隆综合保税区。",
    verifiedFacts: [
      { label: "医疗健康产业体系规划占地", period: "官方规划材料" },
      { label: "医疗器械园规划总建筑面积", period: "官方规划材料" },
      { label: "医疗器械园规划投资额", period: "官方规划材料" },
    ],
    relevance: [
      "医疗器械制造、装配及进口设备规划。",
      "保税物流、跨境贸易及东北地区市场进入。",
      "成本敏感型硬件、耗材、诊断及医用材料。",
    ],
    asOf: "基于 2026 年 5 月提供的官方规划材料",
    imageAlt: "长春兴隆综合保税区航拍图",
  },
];

export const governmentProfilesZh: GovernmentProfile[] = governmentProfiles.map(
  (profile, index) => {
    const translation = governmentProfileTranslations[index];

    return {
      ...profile,
      title: translation.title,
      officialName: translation.officialName,
      location: translation.location,
      role: translation.role,
      summary: translation.summary,
      verifiedFacts: profile.verifiedFacts.map((fact, factIndex) => ({
        ...fact,
        label: translation.verifiedFacts[factIndex]?.label ?? fact.label,
        period: translation.verifiedFacts[factIndex]?.period ?? fact.period,
      })),
      relevance: translation.relevance,
      asOf: translation.asOf,
      image: {
        ...profile.image,
        alt: translation.imageAlt,
      },
    };
  },
);

export const generalEnquiryTopicsZh = [
  "服务与能力",
  "中国市场进入与策略",
  "合作机会",
  "一般咨询",
];

export const workflowPrinciplesZh = [
  {
    title: "证据",
    description:
      "通过人工智能辅助研究与人工审核，整理企业材料、政策文件、监管证据及仍需补充的信息。",
  },
  {
    title: "路径",
    description:
      "在开展商业外联前，综合评估市场匹配、监管逻辑、临床相关性及合作伙伴准备度。",
  },
  {
    title: "执行",
    description:
      "围绕明确的下一步，推进目标筛选、外联准备、机会评估、会议支持及结构化跟进。",
  },
];

export const differentiatorsZh = [
  {
    title: "聚焦中国与欧洲",
    description: "围绕欧洲医疗创新企业进入中国，以及中国企业拓展海外市场。",
    icon: Map,
  },
  {
    title: "医疗行业专业视角",
    description: "商业分析同时考虑临床路径、监管路径、合作准备度及市场准入逻辑。",
    icon: BadgeCheck,
  },
  {
    title: "结构化合作伙伴工作",
    description: "按照角色、相关性、准备度和下一步价值梳理合作生态，而非提供泛化名单。",
    icon: Target,
  },
];
