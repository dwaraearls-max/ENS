import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { testimonials } from "@/lib/content/site";

export function TestimonialsSection() {
  return (
    <section
      id="stories"
      className="scroll-mt-24 border-b border-stone-200/80 bg-stone-50 py-16 sm:py-24"
      aria-labelledby="stories-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="stories-heading"
          eyebrow="Community proof"
          title={testimonials.title}
        />
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-emerald-900/75">
          {testimonials.disclaimer}
        </p>
        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.items.map((t) => (
            <li key={t.name}>
              <Card className="relative h-full pt-6">
                <Quote
                  className="absolute right-5 top-5 h-8 w-8 text-amber-800/20"
                  aria-hidden
                />
                <blockquote className="text-base leading-relaxed text-emerald-900/88">
                  “{t.quote}”
                </blockquote>
                <footer className="mt-4 border-t border-stone-100 pt-4">
                  <p className="font-semibold text-emerald-950">{t.name}</p>
                  <p className="text-sm text-emerald-800/75">{t.role}</p>
                </footer>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
