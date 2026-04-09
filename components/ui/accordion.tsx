"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

export function Accordion({
  items,
}: {
  items: { id: string; question: string; answer: string }[];
}) {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <ul className="mx-auto max-w-3xl divide-y divide-stone-200 rounded-2xl border border-stone-200 bg-white">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `${baseId}-${item.id}-panel`;
        const buttonId = `${baseId}-${item.id}-button`;
        return (
          <li key={item.id}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-emerald-950 transition-colors hover:bg-stone-50/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-emerald-700 sm:px-6 sm:py-5 sm:text-lg"
                onClick={() => setOpenId(isOpen ? null : item.id)}
              >
                <span className="pr-2">{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-amber-800 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className={`${isOpen ? "block" : "hidden"} border-t border-stone-100`}
            >
              <p className="px-5 py-4 text-base leading-relaxed text-emerald-900/85 sm:px-6 sm:py-5">
                {item.answer}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
