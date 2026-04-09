import type { Metadata } from "next";
import { RegisterForm } from "@/components/auth/register-form";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Create your savings account",
  description: `Open an ${siteConfig.shortName} account and track susu savings on the Earl Noble Savings platform.`,
};

export default async function RegisterPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string }>;
}) {
  const sp = await searchParams;
  const plan = typeof sp.plan === "string" ? sp.plan : undefined;
  return (
    <div className="min-h-screen bg-white">
      <RegisterForm defaultPlanId={plan} />
    </div>
  );
}
