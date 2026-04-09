import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/sections/hero";
import { WhatIsEnsSection } from "@/components/sections/what-is-ens";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { ProductsSection } from "@/components/sections/products";
import { TrustSection } from "@/components/sections/trust";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ToolsSection } from "@/components/sections/tools";
import { FaqSection } from "@/components/sections/faq";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { SiteFooter } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <WhatIsEnsSection />
        <HowItWorksSection />
        <ProductsSection />
        <TrustSection />
        <TestimonialsSection />
        <ToolsSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
