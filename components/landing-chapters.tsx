import Link from "next/link"
import { ChevronRight } from "lucide-react"

const chapters = [
  { title: "Introduction to Graphs", difficulty: "Beginner", chapters: "1-2" },
  { title: "Graph Representations", difficulty: "Beginner", chapters: "3-4" },
  { title: "Traversal Algorithms", difficulty: "Intermediate", chapters: "5-6" },
  { title: "Shortest Path Algorithms", difficulty: "Intermediate", chapters: "7-8" },
  { title: "Advanced Topics", difficulty: "Advanced", chapters: "9-15" },
]

export function LandingChapters() {
  return (
    <section className="py-24 border-t border-border/50">
      <div className="container-main">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-5xl font-bold">Structured Learning Path</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Progress from fundamentals to advanced concepts at your own pace
          </p>
        </div>

        <div className="space-y-4">
          {chapters.map((chapter, index) => (
            <Link
              key={index}
              href="/chapters"
              className="group flex items-center justify-between p-6 rounded-lg border border-border/50 bg-card hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{chapter.title}</h3>
                  <p className="text-sm text-muted-foreground">Chapters {chapter.chapters}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    chapter.difficulty === "Beginner"
                      ? "bg-green-500/20 text-green-700 dark:text-green-400"
                      : chapter.difficulty === "Intermediate"
                        ? "bg-yellow-500/20 text-yellow-700 dark:text-yellow-400"
                        : "bg-red-500/20 text-red-700 dark:text-red-400"
                  }`}
                >
                  {chapter.difficulty}
                </span>
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
