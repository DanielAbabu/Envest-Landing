import { RegistrationProvider } from "@/components/registration-provider";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { IntroSnapshot } from "@/components/intro-snapshot";
import { FlagshipProject } from "@/components/flagship-project";
import { FeaturedInsight } from "@/components/featured-insight";
import { OfferingsGrid } from "@/components/offerings-grid";
import { SDGMapping } from "@/components/sdg-mapping";
import { SocialProof } from "@/components/social-proof";
import { SiteFooter } from "@/components/site-footer";

export default function Page() {
  return (
    <RegistrationProvider>
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Hero />
          <IntroSnapshot />
          <FlagshipProject />
          <FeaturedInsight />
          <OfferingsGrid />
          <SDGMapping />
          <SocialProof />
        </main>
        <SiteFooter />
      </div>
    </RegistrationProvider>
  );
}
