import { RegistrationProvider } from "@/components/registration-provider";
import { SiteHeader } from "@/components/site-header";
import { AboutHero } from "@/components/about-hero";
import { WhoWeAre } from "@/components/who-we-are";
import { VisionMission } from "@/components/vision-mission";
import { CoreValues } from "@/components/core-values";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCTA } from "@/components/mobile-sticky-cta";

export default function AboutPage() {
  return (
    <RegistrationProvider>
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">
          <AboutHero />
          <WhoWeAre />
          <VisionMission />
          <CoreValues />
        </main>
        <SiteFooter />
      </div>
    </RegistrationProvider>
  );
}
