import Image from "next/image";
import { ShieldCheck, Users, BookOpenCheck, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { hero } from "@/lib/content/site";

const icons = [ShieldCheck, Users, BookOpenCheck];

export function HeroSection() {
  return (
    <section
      className="relative isolate scroll-mt-0 overflow-hidden rounded-b-[2rem] shadow-[0_32px_80px_-20px_rgba(2,44,34,0.55)] sm:rounded-b-[3rem] md:rounded-b-[3.5rem]"
      aria-labelledby="hero-heading"
    >
      {/* —— Full-bleed scene (one canvas, not two columns) —— */}
      <div className="relative min-h-[min(92vh,920px)] w-full">
        {/* Photography */}
        <Image
          src="/hero-savings.png"
          alt="Symbolic growth: coin stacks with thriving trees and an upward trend, representing disciplined savings and long-term wealth."
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center] [transform:scale(1.06)]"
        />

        {/* Depth & colour grading layers */}
        <div
          className="hero-glow-radial pointer-events-none absolute inset-0 z-[1]"
          aria-hidden
        />
        <div
          className="hero-glow-gold pointer-events-none absolute inset-0 z-[1] mix-blend-screen hero-aurora"
          aria-hidden
        />
        <div
          className="hero-vignette pointer-events-none absolute inset-0 z-[1]"
          aria-hidden
        />
        <div
          className="hero-mesh pointer-events-none absolute inset-0 z-[1] opacity-[0.55]"
          aria-hidden
        />

        {/* Bottom blend into page */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-48 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent"
          aria-hidden
        />

        {/* Floating glass story */}
        <div className="relative z-10 mx-auto flex min-h-[min(92vh,920px)] max-w-7xl flex-col justify-end px-4 pb-28 pt-28 sm:px-6 sm:pb-32 sm:pt-32 lg:justify-center lg:pb-40 lg:pt-24 xl:px-8">
          {/* Soft gold bloom behind card */}
          <div
            className="pointer-events-none absolute left-[-12%] top-[28%] h-72 w-72 rounded-full bg-amber-400/25 blur-3xl sm:left-0 sm:top-1/3 lg:left-[6%]"
            aria-hidden
          />

          <div className="relative max-w-xl lg:max-w-[34rem]">
            {/* Ornamental frame corners */}
            <div
              className="pointer-events-none absolute -left-3 -top-3 h-16 w-16 border-l-2 border-t-2 border-amber-400/70 sm:-left-4 sm:-top-4"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-3 -right-3 h-16 w-16 border-b-2 border-r-2 border-amber-400/50 sm:-bottom-4 sm:-right-4"
              aria-hidden
            />

            <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-emerald-950/45 px-7 py-9 shadow-[0_24px_64px_-12px_rgba(0,0,0,0.55)] backdrop-blur-2xl ring-1 ring-white/10 sm:px-10 sm:py-11">
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.09] via-transparent to-amber-500/[0.07]"
                aria-hidden
              />

              <div className="relative flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-400/35 bg-amber-500/15 text-amber-200 shadow-inner shadow-amber-900/20">
                  <Sparkles className="h-5 w-5" aria-hidden />
                </span>
                <div className="h-px min-w-[2rem] flex-1 max-w-[4.5rem] bg-gradient-to-r from-amber-400 to-amber-600/30" />
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-amber-200/95 sm:text-sm sm:tracking-[0.14em]">
                  Ghana • Online susu &amp; savings ledger
                </p>
              </div>

              <h1
                id="hero-heading"
                className="relative mt-6 font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-white [text-shadow:0_4px_36px_rgba(0,0,0,0.35)] sm:text-5xl lg:text-6xl xl:text-[3.5rem]"
              >
                {hero.headline}
              </h1>

              <p className="relative mt-6 text-lg leading-relaxed text-emerald-50/95 sm:text-xl">
                {hero.subhead}
              </p>

              <div className="relative mt-10 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:items-center">
                <ButtonLink
                  href="/register"
                  className="!border !border-white/25 !bg-white !text-emerald-950 !shadow-[0_8px_28px_-4px_rgba(0,0,0,0.35)] hover:!bg-emerald-50 focus-visible:!ring-amber-400/80 focus-visible:!ring-offset-2 focus-visible:!ring-offset-emerald-950/80 sm:min-w-[200px]"
                >
                  {hero.primaryCta}
                </ButtonLink>
                <ButtonLink
                  href="#how-it-works"
                  className="!border-2 !border-white/50 !bg-white/10 !text-white !shadow-lg !shadow-black/15 hover:!border-white hover:!bg-white/18 focus-visible:!ring-amber-400/60 focus-visible:!ring-offset-2 focus-visible:!ring-offset-emerald-950/90 sm:min-w-[200px]"
                >
                  {hero.secondaryCta}
                </ButtonLink>
              </div>

              <p className="relative mt-4 flex items-center gap-2 text-sm text-emerald-100/75">
                <span className="inline-block h-1 w-1 shrink-0 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                {hero.primaryCtaHelper}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust strip — floats into the hero */}
      <div className="relative z-20 -mt-16 px-4 sm:-mt-20 sm:px-6">
        <div className="mx-auto max-w-6xl rounded-2xl border border-emerald-900/10 bg-white/90 p-4 shadow-[0_20px_50px_-18px_rgba(2,44,34,0.35)] backdrop-blur-xl sm:p-6">
          <ul className="grid gap-3 sm:grid-cols-3 sm:gap-4">
            {hero.trustStats.map((stat, i) => {
              const Icon = icons[i] ?? ShieldCheck;
              return (
                <li key={stat.label}>
                  <div className="group flex h-full flex-col items-center gap-3 rounded-xl border border-emerald-900/[0.06] bg-gradient-to-br from-white to-emerald-50/50 px-5 py-5 transition-colors hover:border-amber-700/25 hover:shadow-md hover:shadow-emerald-900/10 sm:flex-row sm:items-center sm:py-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-900 text-amber-300 shadow-inner transition-transform duration-300 group-hover:scale-[1.03]">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="text-center sm:text-left">
                      <span className="font-serif text-xl font-bold tracking-tight text-emerald-950 sm:text-[1.35rem]">
                        {stat.value}
                      </span>
                      <span className="mt-0.5 block text-sm font-medium text-emerald-800/88">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Spacing after overlapping cards */}
      <div className="h-10 sm:h-14" aria-hidden />
    </section>
  );
}
