import type { Metadata } from "next";
import { MemberDashboard } from "@/components/dashboard/member-dashboard";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "My savings dashboard",
  description: `Track contributions and balance on ${siteConfig.name}.`,
  robots: { index: false, follow: false },
};

export default function DashboardPage() {
  return <MemberDashboard />;
}
