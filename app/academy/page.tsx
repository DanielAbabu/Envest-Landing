import { RegistrationProvider } from "@/components/registration-provider"
import { SiteHeader } from "@/components/site-header"
import { AcademyHero } from "@/components/academy-hero"
import { AcademyOverview } from "@/components/academy-overview"
import { FeaturedProduct } from "@/components/featured-product"
import { UpcomingPrograms } from "@/components/upcoming-programs"
import { WhyJoinAcademy } from "@/components/why-join-academy"
import { AcademyCTA } from "@/components/academy-cta"
import { SiteFooter } from "@/components/site-footer"
import { MobileStickyCTA } from "@/components/mobile-sticky-cta"

export default function AcademyPage() {
  return (
    <RegistrationProvider>
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">
          <AcademyHero />
          <AcademyOverview />
          <FeaturedProduct />
          <UpcomingPrograms />
          <WhyJoinAcademy />
          <AcademyCTA />
        </main>
        <SiteFooter />
      </div>
    </RegistrationProvider>
  )
}
