import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "中欧医疗健康商业化",
    template: "%s | Haoyi Advisory",
  },
  description:
    "Haoyi Advisory 是连接中国与欧洲的跨境医疗器械和医疗健康商业化平台。",
};

export default function ChineseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
