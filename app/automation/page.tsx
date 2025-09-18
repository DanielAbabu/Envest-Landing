import { RegistrationProvider } from "@/components/registration-provider";
import { SiteHeader } from "@/components/site-header";
import { AutomationHero } from "@/components/automation-hero";
import { AutomationApproach } from "@/components/automation-approach";
import { AutomationImpactStories } from "@/components/automation-impact-stories";
import { AutomationCTA } from "@/components/automation-cta";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCTA } from "@/components/mobile-sticky-cta";

export default function AutomationPage() {
  return (
    <RegistrationProvider>
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">
          <AutomationHero />
          <AutomationApproach />
          <AutomationImpactStories />
          <AutomationCTA />
        </main>
        <SiteFooter />
      </div>
    </RegistrationProvider>
  );
}
