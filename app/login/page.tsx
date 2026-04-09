import type { Metadata } from "next";
import { LoginForm } from "@/components/auth/login-form";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Log in",
  description: `Access your ${siteConfig.shortName} savings dashboard.`,
  robots: { index: false, follow: true },
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white">
      <LoginForm />
    </div>
  );
}
