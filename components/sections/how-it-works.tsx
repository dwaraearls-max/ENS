import {
  UserPlus,
  ListChecks,
  Coins,
  Eye,
  HandCoins,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { howItWorks } from "@/lib/content/site";

const icons = [UserPlus, ListChecks, Coins, Eye, HandCoins];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 border-b border-stone-200/80 bg-stone-50 py-16 sm:py-24"
      aria-labelledby="how-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="how-heading"
          eyebrow="Step by step"
          title={howItWorks.title}
          subtitle={howItWorks.subtitle}
        />
        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {howItWorks.steps.map((step, i) => {
            const Icon = icons[i] ?? UserPlus;
            return (
              <li key={step.title}>
                <Card className="h-full">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-800 text-lg font-bold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <Icon className="h-5 w-5 text-amber-800" aria-hidden />
                        <h3 className="font-serif text-lg font-semibold text-emerald-950">
                          {step.title}
                        </h3>
                      </div>
                      <p className="mt-2 text-base leading-relaxed text-emerald-900/85">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </Card>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
