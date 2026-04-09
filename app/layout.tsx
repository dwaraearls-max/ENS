import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/constants";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const siteUrl = siteConfig.url.replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} | Trusted susu & savings in Ghana`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description:
    "Earl Noble Savings (ENS) — premium Ghanaian susu online: create an account, log contributions, and track balance on the member portal. Daily, monthly, group, SME, and goal-based plans.",
  keywords: [
    "susu savings Ghana",
    "daily savings Ghana",
    "trusted susu company",
    "Ghana susu",
    "group savings Ghana",
    "monthly contribution Ghana",
    "SME savings Ghana",
    "Earl Noble Savings",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteUrl,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description:
      "Save with discipline. Grow with trust. Modern susu for traders, workers, groups, SMEs, and diaspora families.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Susu & savings Ghana`,
    description:
      "Traditional trust. Modern savings. Noble growth — Earl Noble Savings, Ghana.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable} h-full scroll-pt-20 antialiased`}
    >
      <body className="min-h-full font-sans text-foreground">
        <JsonLd />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
