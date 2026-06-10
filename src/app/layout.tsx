import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://haoyiadvisory.co",
  ),
  title: {
    default: "Haoyi Advisory | Europe-China Healthcare Commercialization",
    template: "%s | Haoyi Advisory",
  },
  description:
    "Haoyi Advisory is a cross-border medical device and healthcare commercialization platform connecting Europe and China.",
  keywords: [
    "Haoyi Advisory",
    "medical device commercialization",
    "Europe China healthcare",
    "China market entry",
    "healthcare partner mapping",
    "medical technology strategy",
  ],
  openGraph: {
    title: "Haoyi Advisory",
    description:
      "Cross-border medical device and healthcare commercialization between Europe and China.",
    type: "website",
    images: [
      {
        url: "/images/haoyi-europe-china-map.png",
        width: 1536,
        height: 1024,
        alt: "Haoyi Advisory Europe-China commercialization map",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
