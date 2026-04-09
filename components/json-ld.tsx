import { siteConfig } from "@/lib/constants";
import { faqs } from "@/lib/content/site";

const sameAs = [
  "https://www.facebook.com/",
  "https://www.linkedin.com/",
];

export function JsonLd() {
  const org = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description:
      "Ghanaian susu and savings platform: member web portal for logging contributions, viewing balance, and managing savings goals with transparent on-site records.",
    url: siteConfig.url,
    areaServed: { "@type": "Country", name: "Ghana" },
    address: {
      "@type": "PostalAddress",
      addressCountry: "GH",
      addressLocality: siteConfig.contact.addressLine,
    },
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phoneTel,
    sameAs,
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
