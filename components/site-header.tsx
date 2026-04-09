"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { nav } from "@/lib/content/site";
import { siteConfig } from "@/lib/constants";
import { useSessionLoggedIn } from "@/hooks/use-session-logged-in";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const loggedIn = useSessionLoggedIn();

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="group flex flex-col rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
        >
          <span className="font-serif text-lg font-bold leading-tight text-emerald-900 sm:text-xl">
            {siteConfig.shortName}
          </span>
          <span className="text-xs font-medium text-amber-800/90 sm:text-sm">
            {siteConfig.name}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex flex-wrap items-center justify-end gap-1 xl:gap-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-emerald-900/90 transition-colors hover:bg-emerald-50 hover:text-emerald-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-700"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                href="/login"
                className="rounded-lg px-3 py-2 text-sm font-medium text-emerald-900/90 transition-colors hover:bg-emerald-50 hover:text-emerald-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-700"
              >
                Log in
              </Link>
            </li>
            <li>
              <Link
                href="/register"
                className="rounded-lg px-3 py-2 text-sm font-medium text-emerald-900/90 transition-colors hover:bg-emerald-50 hover:text-emerald-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-700"
              >
                Sign up
              </Link>
            </li>
            {loggedIn ? (
              <li>
                <Link
                  href="/dashboard"
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-amber-900 transition-colors hover:bg-amber-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-700"
                >
                  Dashboard
                </Link>
              </li>
            ) : null}
            <li>
              <ButtonLink
                href="/register"
                variant="primary"
                className="ml-2 px-5 py-2.5 text-sm"
              >
                Open account
              </ButtonLink>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <ButtonLink href="/register" variant="secondary" className="px-4 py-2.5 text-sm">
            Sign up
          </ButtonLink>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-stone-200 bg-white text-emerald-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-700"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`lg:hidden ${open ? "border-t border-stone-200 bg-white" : "hidden"}`}
      >
        <nav aria-label="Mobile primary" className="mx-auto max-w-6xl px-4 pb-4 pt-2 sm:px-6">
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-emerald-950 hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-700"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                href="/login"
                className="block rounded-xl px-4 py-3 text-base font-medium text-emerald-950 hover:bg-emerald-50"
                onClick={() => setOpen(false)}
              >
                Log in
              </Link>
            </li>
            {loggedIn ? (
              <li>
                <Link
                  href="/dashboard"
                  className="block rounded-xl px-4 py-3 text-base font-semibold text-amber-900 hover:bg-amber-50"
                  onClick={() => setOpen(false)}
                >
                  My dashboard
                </Link>
              </li>
            ) : null}
            <li className="pt-2">
              <ButtonLink
                href="/register"
                variant="primary"
                className="w-full text-center"
                onClick={() => setOpen(false)}
              >
                Open account
              </ButtonLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
