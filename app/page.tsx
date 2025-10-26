import { LandingHero } from "@/components/landing-hero"
import { LandingFeatures } from "@/components/landing-features"
import { LandingChapters } from "@/components/landing-chapters"
import { LandingTestimonials } from "@/components/landing-testimonials"
import { LandingCTA } from "@/components/landing-cta"
import { LandingFooter } from "@/components/landing-footer"
import { SearchDialog } from "@/components/search-dialog"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/50 sticky top-0 bg-background/80 backdrop-blur-md z-50">
        <div className="container-main flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-primary">
            Graphs Handbook
          </Link>
          <div className="flex gap-6 items-center">
            <Link href="/chapters" className="text-sm text-foreground hover:text-primary transition-colors">
              Chapters
            </Link>
            <Link href="/about" className="text-sm text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/download" className="text-sm text-foreground hover:text-primary transition-colors">
              Download
            </Link>
            <SearchDialog />
          </div>
        </div>
      </nav>

      <LandingHero />
      <LandingFeatures />
      <LandingChapters />
      <LandingTestimonials />
      <LandingCTA />
      <LandingFooter />
    </main>
  )
}
