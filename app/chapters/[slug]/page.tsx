import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { chapters, getChapterBySlug, getPreviousChapter, getNextChapter } from "@/lib/content"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return chapters.map((chapter) => ({
    slug: chapter.slug,
  }))
}

export default async function ChapterPage({ params }: PageProps) {
  const { slug } = await params
  const chapter = getChapterBySlug(slug)
  const prevChapter = getPreviousChapter(slug)
  const nextChapter = getNextChapter(slug)

  if (!chapter) {
    return (
      <>
        <Header />
        <div className="container-main py-12">
          <h1 className="text-2xl font-bold">Chapter not found</h1>
        </div>
      </>
    )
  }

  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar chapters={chapters} />
        <main className="flex-1 min-h-screen">
          <article className="max-w-4xl mx-auto px-6 py-12">
            {/* Chapter Header */}
            <div className="mb-12">
              <p className="text-sm text-muted mb-2">{chapter.part}</p>
              <h1 className="text-5xl font-bold mb-4">
                Chapter {chapter.chapter}: {chapter.title}
              </h1>
              <p className="text-lg text-muted mb-6">{chapter.description}</p>
              <div className="flex gap-6 text-sm text-muted">
                <span>{chapter.pages} pages</span>
                <span>{chapter.readingTime} min read</span>
                <span>{chapter.exercises} exercises</span>
                <span className="capitalize">{chapter.difficulty}</span>
              </div>
            </div>

            {/* Life Insight Box */}
            <div className="insight-box mb-8">
              <p className="font-semibold text-primary mb-2">Life Insight</p>
              <p>{chapter.lifeInsight}</p>
            </div>

            {/* Learning Objectives */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Learning Objectives</h2>
              <ul className="space-y-2">
                {chapter.objectives.map((obj, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Placeholder Content */}
            <section className="prose-content mb-12 bg-input/50 p-8 rounded-lg border border-border">
              <p className="text-muted italic">
                Chapter content will be loaded from markdown files. This is a placeholder showing the chapter structure.
              </p>
              <p className="text-muted italic mt-4">
                The actual content includes detailed explanations, code examples, diagrams, and exercises.
              </p>
            </section>

            {/* Prerequisites */}
            {chapter.prerequisites.length > 0 && (
              <section className="mb-12">
                <h3 className="text-lg font-semibold mb-3">Prerequisites</h3>
                <ul className="space-y-2">
                  {chapter.prerequisites.map((prereq, i) => (
                    <li key={i} className="text-muted">
                      • {prereq}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Navigation */}
            <div className="flex justify-between items-center pt-12 border-t border-border mt-12">
              {prevChapter ? (
                <Link
                  href={`/chapters/${prevChapter.slug}`}
                  className="flex items-center gap-2 text-primary hover:gap-3 transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span>Previous: {prevChapter.title}</span>
                </Link>
              ) : (
                <div />
              )}
              {nextChapter ? (
                <Link
                  href={`/chapters/${nextChapter.slug}`}
                  className="flex items-center gap-2 text-primary hover:gap-3 transition-all"
                >
                  <span>Next: {nextChapter.title}</span>
                  <ChevronRight className="w-5 h-5" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </article>
        </main>
      </div>
    </>
  )
}
