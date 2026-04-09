import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-emerald-800 text-white shadow-md shadow-emerald-900/15 hover:bg-emerald-900 focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50",
  secondary:
    "border-2 border-amber-700/50 bg-white text-emerald-900 hover:border-amber-600 hover:bg-amber-50/50 focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50",
  ghost:
    "text-emerald-800 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 rounded-sm",
};

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ComponentProps<"button"> & { variant?: Variant }) {
  const base =
    "inline-flex min-h-12 min-w-[44px] items-center justify-center gap-2 rounded-xl px-6 py-3 text-base font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50";
  return (
    <button
      type="button"
      className={`${base} ${variants[variant]} ${className}`.trim()}
      {...props}
    />
  );
}

export function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: ComponentProps<"a"> & { variant?: Variant }) {
  const base =
    "inline-flex min-h-12 min-w-[44px] items-center justify-center gap-2 rounded-xl px-6 py-3 text-base font-semibold transition-colors";
  return (
    <a className={`${base} ${variants[variant]} ${className}`.trim()} {...props} />
  );
}
