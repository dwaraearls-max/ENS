import { SectionHeading } from "@/components/ui/section-heading";
import { Accordion } from "@/components/ui/accordion";
import { faqs } from "@/lib/content/site";

export function FaqSection() {
  const items = faqs.items.map((item, i) => ({
    id: `faq-${i}`,
    question: item.q,
    answer: item.a,
  }));

  return (
    <section
      id="faq"
      className="scroll-mt-24 border-b border-stone-200/80 bg-stone-50 py-16 sm:py-24"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="faq-heading"
          eyebrow="Straight answers"
          title={faqs.title}
        />
        <div className="mt-12">
          <Accordion items={items} />
        </div>
      </div>
    </section>
  );
}
