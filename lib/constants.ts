/**
 * Public site configuration.
 *
 * If NEXT_PUBLIC_SITE_URL is missing, empty, or invalid, we fall back so `metadataBase` never throws.
 */
function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return "https://earlnoblesavings.com";
  try {
    const withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
    const u = new URL(withProtocol);
    if (!u.hostname) return "https://earlnoblesavings.com";
    const origin = u.origin.replace(/\/$/, "");
    return origin || "https://earlnoblesavings.com";
  } catch {
    return "https://earlnoblesavings.com";
  }
}

export const siteConfig = {
  name: "Earl Noble Savings",
  shortName: "ENS",
  tagline: "Traditional trust. Modern savings. Noble growth.",
  url: getSiteUrl(),
  locale: "en-GH",
  contact: {
    email: process.env.NEXT_PUBLIC_ENS_EMAIL ?? "hello@earlnoblesavings.com",
    phoneDisplay: process.env.NEXT_PUBLIC_ENS_PHONE_DISPLAY ?? "+233 XX XXX XXXX",
    phoneTel: process.env.NEXT_PUBLIC_ENS_PHONE_TEL ?? "+233000000000",
    addressLine: "Accra, Ghana",
  },
} as const;
