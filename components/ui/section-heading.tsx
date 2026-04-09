export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  id,
  variant = "light",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  id?: string;
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  return (
    <header className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-[0.12em] ${isDark ? "text-amber-400" : "text-amber-800"}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={`font-serif text-3xl font-semibold tracking-tight sm:text-4xl ${isDark ? "text-white" : "text-emerald-950"}`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-4 text-lg leading-relaxed ${isDark ? "text-emerald-100/85" : "text-emerald-900/80"}`}
        >
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
