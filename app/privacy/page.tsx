import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "Privacy policy for Earl Noble Savings (ENS).",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto min-h-screen max-w-3xl px-4 py-16 sm:px-6">
      <Link
        href="/"
        className="text-sm font-semibold text-emerald-800 underline underline-offset-2 hover:text-emerald-950"
      >
        ← Back to home
      </Link>
      <h1 className="mt-8 font-serif text-3xl font-semibold text-emerald-950">
        Privacy policy
      </h1>
      <p className="mt-4 text-emerald-900/85">
        This page is a stub. Replace with your legal privacy policy before launch, covering how{" "}
        {siteConfig.name} collects, uses, stores, and shares personal data under applicable Ghanaian
        and international standards.
      </p>
      <p className="mt-4 text-sm text-emerald-800/75">
        Contact:{" "}
        <a href={`mailto:${siteConfig.contact.email}`} className="underline">
          {siteConfig.contact.email}
        </a>
      </p>
    </div>
  );
}
