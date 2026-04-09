import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { products } from "@/lib/content/site";

export function ProductsSection() {
  return (
    <section
      id="products"
      className="scroll-mt-24 border-b border-stone-200/80 bg-white py-16 sm:py-24"
      aria-labelledby="products-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="products-heading"
          eyebrow="Savings products"
          title="Plans that fit real Ghanaian lives"
          subtitle="Each product starts with an online account — you manage savings and history on ENS."
        />
        <ul className="mt-14 grid gap-8 lg:grid-cols-2">
          {products.map((p) => (
            <li key={p.id}>
              <Card className="flex h-full flex-col">
                <h3 className="font-serif text-2xl font-semibold text-emerald-950">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-amber-800">
                  Who it&apos;s for
                </p>
                <p className="mt-1 text-base text-emerald-900/85">{p.forWhom}</p>
                <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-amber-800">
                  Contribution style
                </p>
                <p className="mt-1 text-base text-emerald-900/85">
                  {p.contribution}
                </p>
                <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-amber-800">
                  Benefits
                </p>
                <ul className="mt-2 space-y-2">
                  {p.benefits.map((b) => (
                    <li key={b} className="flex gap-2 text-base text-emerald-900/85">
                      <Check
                        className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700"
                        aria-hidden
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink
                    href={`/register?plan=${encodeURIComponent(p.id)}`}
                    variant="secondary"
                    className="text-sm"
                  >
                    {p.cta}
                  </ButtonLink>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
