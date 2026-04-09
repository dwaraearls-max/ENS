import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm shadow-stone-900/5 ${className}`.trim()}
    >
      {children}
    </div>
  );
}
