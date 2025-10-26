import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Alex Chen",
    role: "Software Engineer at Google",
    content:
      "This handbook transformed how I think about algorithms. The real-world applications section was eye-opening.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "CS Student",
    content: "Finally, a resource that explains the 'why' behind algorithms, not just the 'how'. Highly recommended!",
    rating: 5,
  },
  {
    name: "Marcus Williams",
    role: "Tech Lead at Meta",
    content: "I recommend this to every junior engineer on my team. It's become our go-to reference guide.",
    rating: 5,
  },
]

export function LandingTestimonials() {
  return (
    <section className="py-24 border-t border-border/50">
      <div className="container-main">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-5xl font-bold">Loved by Learners</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of developers who've mastered graph algorithms
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-xl border border-border/50 bg-card hover:border-primary/50 transition-all duration-300 card-hover space-y-4"
            >
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed">{testimonial.content}</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
