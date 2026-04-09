import Link from "next/link";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { footer } from "@/lib/content/site";
import { siteConfig } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="pattern-bg mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-serif text-xl font-bold text-emerald-950">
              {siteConfig.name}
            </p>
            <p className="mt-1 text-sm font-medium text-amber-800">{siteConfig.tagline}</p>
            <p className="mt-4 text-sm leading-relaxed text-emerald-900/80">
              {footer.blurb}
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-emerald-950">
              Contact
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-emerald-900/85">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="rounded underline decoration-amber-800/40 underline-offset-2 hover:text-emerald-950"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phoneTel}`}
                  className="rounded hover:text-emerald-950"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li>{siteConfig.contact.addressLine}</li>
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-emerald-950">
              Policies
            </h2>
            <ul className="mt-3 flex flex-wrap gap-4 text-sm">
              {footer.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="rounded font-medium text-emerald-800 underline decoration-amber-800/40 underline-offset-2 hover:text-emerald-950"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={footer.socialLabels.facebook}
                className="rounded-lg p-2 text-emerald-900 hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-700"
              >
                <Facebook className="h-5 w-5" aria-hidden />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={footer.socialLabels.linkedin}
                className="rounded-lg p-2 text-emerald-900 hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-700"
              >
                <Linkedin className="h-5 w-5" aria-hidden />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={footer.socialLabels.x}
                className="rounded-lg p-2 text-emerald-900 hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-700"
              >
                <Twitter className="h-5 w-5" aria-hidden />
              </a>
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-stone-200 pt-8 text-center text-sm text-emerald-800/75">
          {footer.trustLine}
        </p>
        <p className="mt-3 text-center text-xs text-emerald-900/60">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
