import Link from "next/link"
import { chapters } from "@/lib/chapters"
import { ArrowRight } from "lucide-react"

export default function ChaptersPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card sticky top-16 z-10">
        <div className="container-main py-8">
          <h1 className="text-4xl font-bold mb-2">All Chapters</h1>
          <p className="text-muted">
            A comprehensive journey through graph algorithms, data structures, and real-world thinking
          </p>
        </div>
      </div>

      {/* Chapters Grid */}
      <div className="container-main py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {chapters.map((chapter) => (
            <Link key={chapter.id} href={`/chapters/${chapter.id}`} className="group chapter-card">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="text-sm font-semibold text-primary">Chapter {chapter.number}</div>
                  <h2 className="text-xl font-bold group-hover:text-primary transition-colors">{chapter.title}</h2>
                </div>
                <ArrowRight className="w-5 h-5 text-muted group-hover:text-primary transition-colors transform group-hover:translate-x-1" />
              </div>
              <p className="text-muted text-sm mb-4">{chapter.description}</p>
              <div className="flex flex-wrap gap-2">
                {chapter.sections.slice(0, 3).map((section) => (
                  <span key={section} className="text-xs bg-input text-foreground px-2 py-1 rounded">
                    {section}
                  </span>
                ))}
                {chapter.sections.length > 3 && (
                  <span className="text-xs text-muted">+{chapter.sections.length - 3} more</span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
