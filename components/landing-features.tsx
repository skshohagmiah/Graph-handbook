import { BookOpen, Zap, Target, Code2, Brain, Rocket } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Comprehensive Curriculum",
    description: "15 carefully structured chapters covering everything from basics to advanced algorithms",
    color: "bg-primary",
  },
  {
    icon: Code2,
    title: "Practical Code Examples",
    description: "Runnable code in Python and C++ with detailed explanations and best practices",
    color: "bg-primary",
  },
  {
    icon: Brain,
    title: "Deep Understanding",
    description: "Learn not just how algorithms work, but why they matter and when to use them",
    color: "bg-primary",
  },
  {
    icon: Zap,
    title: "Interactive Visualizations",
    description: "See algorithms in action with step-by-step visualizations and diagrams",
    color: "bg-primary",
  },
  {
    icon: Target,
    title: "Real-World Applications",
    description: "Discover how graph algorithms apply to career, relationships, and life decisions",
    color: "bg-primary",
  },
  {
    icon: Rocket,
    title: "Career Advancement",
    description: "Master the skills that top tech companies look for in interviews and projects",
    color: "bg-primary",
  },
]

export function LandingFeatures() {
  return (
    <section className="py-24 border-t border-border/50">
      <div className="container-main">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-5xl font-bold text-foreground">Why Choose This Handbook?</h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Everything you need to master graph algorithms and become a better problem solver
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative p-8 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300"
              >
                <div className="relative space-y-4">
                  <div className={`w-12 h-12 rounded-lg ${feature.color} p-2.5`}>
                    <Icon className="w-full h-full text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
