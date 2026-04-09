import { FileText, Shield, Scale, Users2, HeartHandshake, Building2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { trustSection } from "@/lib/content/site";

const icons = [FileText, Shield, Scale, Users2, HeartHandshake, Building2];

export function TrustSection() {
  return (
    <section
      id="trust"
      className="scroll-mt-24 border-b border-stone-200/80 bg-emerald-950 py-16 text-white sm:py-24"
      aria-labelledby="trust-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="trust-heading"
          variant="dark"
          eyebrow="No hype — clear expectations"
          title={trustSection.title}
          subtitle={trustSection.subtitle}
        />
        <div className="mt-6 text-center">
          <p className="mx-auto max-w-2xl text-sm text-emerald-100/85">
            Friendly for first-time savers: if anything below is unclear, ask an agent to walk through it
            before you sign.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {trustSection.pillars.map((pillar, i) => {
            const Icon = icons[i] ?? FileText;
            return (
              <li key={pillar.title}>
                <Card className="h-full !border-emerald-900/15 !bg-white !text-emerald-950 shadow-md shadow-emerald-950/10">
                  <div className="flex gap-4">
                    <Icon
                      className="mt-1 h-8 w-8 shrink-0 text-amber-700"
                      aria-hidden
                    />
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-emerald-950">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-base leading-relaxed text-emerald-900/90">
                        {pillar.body}
                      </p>
                    </div>
                  </div>
                </Card>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
