import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { InteractiveGraph } from "./interactive-graph"

export function LandingHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-background -z-10" />

      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Master Graph Algorithms</span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight text-foreground">
                Learn Graph Algorithms
                <br />
                <span className="text-primary">That Actually Matter</span>
              </h1>
              <p className="text-lg text-foreground max-w-xl leading-relaxed">
                Master the fundamental data structures and algorithms that power real-world systems. From social
                networks to GPS navigation, learn how graphs solve the problems that matter.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/chapters"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300 group"
              >
                Start Learning
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/download"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-foreground rounded-lg font-semibold hover:bg-primary/5 transition-colors duration-300"
              >
                Download PDF
              </Link>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-foreground">Comprehensive Chapters</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-foreground">Code Examples</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">∞</div>
                <div className="text-sm text-foreground">Real Applications</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square">
              <InteractiveGraph />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
