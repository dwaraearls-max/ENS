import { ButtonLink } from "@/components/ui/button";
import { finalCta } from "@/lib/content/site";
import { siteConfig } from "@/lib/constants";

export function FinalCtaSection() {
  return (
    <section
      id="start"
      className="scroll-mt-24 bg-gradient-to-b from-emerald-900 to-emerald-950 py-16 text-white sm:py-24"
      aria-labelledby="start-heading"
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2
          id="start-heading"
          className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          {finalCta.title}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-emerald-100/90">
          {finalCta.sub}
        </p>
        <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:flex-wrap">
          <ButtonLink
            href="/register"
            variant="secondary"
            className="border-white/40 bg-white text-emerald-950 hover:bg-stone-100 sm:min-w-[220px]"
          >
            {finalCta.primary}
          </ButtonLink>
          <ButtonLink
            href="/login"
            variant="primary"
            className="bg-amber-600 hover:bg-amber-500 sm:min-w-[220px]"
          >
            {finalCta.secondary}
          </ButtonLink>
        </div>
        <p className="mt-8 text-sm text-emerald-200/80">
          Need help using the portal? Call{" "}
          <a
            href={`tel:${siteConfig.contact.phoneTel}`}
            className="font-semibold underline decoration-amber-400/80 underline-offset-2 hover:text-white"
          >
            {siteConfig.contact.phoneDisplay}
          </a>{" "}
          during published support hours — your savings still live on the website.
        </p>
      </div>
    </section>
  );
}
