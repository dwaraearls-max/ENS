import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of use",
  description: "Terms of use for Earl Noble Savings (ENS).",
};

export default function TermsPage() {
  return (
    <div className="mx-auto min-h-screen max-w-3xl px-4 py-16 sm:px-6">
      <Link
        href="/"
        className="text-sm font-semibold text-emerald-800 underline underline-offset-2 hover:text-emerald-950"
      >
        ← Back to home
      </Link>
      <h1 className="mt-8 font-serif text-3xl font-semibold text-emerald-950">
        Terms of use
      </h1>
      <p className="mt-4 text-emerald-900/85">
        This page is a stub. Replace with your lawyer-approved terms covering savings agreements,
        fees, withdrawals, dispute resolution, and liability for {siteConfig.name} before inviting
        the public to save.
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
