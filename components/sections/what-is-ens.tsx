import { PiggyBank, LineChart, Landmark, Banknote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { whatIsEns } from "@/lib/content/site";

const flowIcons = [PiggyBank, LineChart, Landmark, Banknote];

export function WhatIsEnsSection() {
  return (
    <section
      id="what-is-ens"
      className="scroll-mt-24 border-b border-stone-200/80 bg-white py-16 sm:py-24"
      aria-labelledby="what-is-ens-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="what-is-ens-heading"
          eyebrow="Plain English"
          title={whatIsEns.title}
        />
        <div className="mx-auto mt-12 max-w-3xl space-y-6 text-center text-lg leading-relaxed text-emerald-900/85">
          <p>{whatIsEns.lede}</p>
          <p>{whatIsEns.modern}</p>
        </div>

        <div className="mt-14">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-amber-800">
            Your journey with ENS
          </p>
          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whatIsEns.flow.map((step, index) => {
              const Icon = flowIcons[index] ?? PiggyBank;
              return (
                <li key={step.step}>
                  <Card className="relative h-full pt-8 text-center">
                    <span className="absolute left-1/2 top-0 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-emerald-800 text-sm font-bold text-white ring-4 ring-white">
                      {index + 1}
                    </span>
                    <Icon
                      className="mx-auto mb-3 h-9 w-9 text-amber-800"
                      aria-hidden
                    />
                    <h3 className="font-serif text-xl font-semibold text-emerald-950">
                      {step.step}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-emerald-900/80">
                      {step.text}
                    </p>
                  </Card>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
