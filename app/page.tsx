import { Hero } from "@/components/hero"
import { FeaturedSchools } from "@/components/featured-schools"
import { ConsultationForm } from "@/components/consultation-form"
import { Testimonials } from "@/components/testimonials"
import { CTASection } from "@/components/cta-section"
import { AboutLinguatrip } from "@/components/about-linguatrip"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutLinguatrip />
      <FeaturedSchools />
      <Testimonials />
      <ConsultationForm />
      <CTASection />
    </main>
  )
}
