import { LandingHero } from "@/components/landing-hero"
import Link from "next/link"
import { BookOpen } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Simple Navigation */}
      <nav className="fixed top-0 w-full border-b border-border/20 bg-background/90 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <BookOpen className="w-6 h-6 text-primary" />
              <span className="text-lg font-semibold text-foreground">
                Graph Algorithms Handbook
              </span>
            </Link>
            
            {/* Navigation Links */}
            <div className="flex items-center gap-6">
              <Link 
                href="/chapters/what-are-graphs" 
                className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Start Reading
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="pt-16">
        <LandingHero />
      </div>
    </main>
  )
}
