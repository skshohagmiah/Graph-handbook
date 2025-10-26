import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function LandingCTA() {
  return (
    <section className="py-24 border-t border-border/50">
      <div className="container-main">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-primary/10" />

          <div className="relative px-8 py-20 md:px-16 md:py-24 text-center space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground">Ready to Master Graphs?</h2>
            <p className="text-lg text-foreground max-w-2xl mx-auto">
              Start your journey today and unlock the power of graph thinking. Join thousands of developers who've
              transformed their problem-solving skills.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/chapters"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300 group"
              >
                Start Learning Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/download"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-foreground rounded-lg font-semibold hover:bg-primary/5 transition-colors duration-300"
              >
                Download Handbook
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm text-foreground">
              <div>✓ 15+ Chapters</div>
              <div>✓ 100+ Examples</div>
              <div>✓ Lifetime Access</div>
              <div>✓ Free Updates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
