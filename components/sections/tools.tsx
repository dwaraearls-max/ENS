import { Smartphone, MessageCircle, BellRing, Headphones, UserRoundCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { toolsSection } from "@/lib/content/site";

const icons = [Smartphone, MessageCircle, BellRing, Headphones, UserRoundCheck];

export function ToolsSection() {
  return (
    <section
      id="tools"
      className="scroll-mt-24 border-b border-stone-200/80 bg-white py-16 sm:py-24"
      aria-labelledby="tools-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="tools-heading"
          eyebrow="How we support you"
          title={toolsSection.title}
          subtitle={toolsSection.subtitle}
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {toolsSection.items.map((item, i) => {
            const Icon = icons[i] ?? Smartphone;
            return (
              <li key={item.title}>
                <Card className="h-full">
                  <Icon className="h-8 w-8 text-amber-800" aria-hidden />
                  <h3 className="mt-3 font-serif text-lg font-semibold text-emerald-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-emerald-900/85">
                    {item.body}
                  </p>
                </Card>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
