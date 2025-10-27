import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { chapters, getChapterBySlug, getPreviousChapter, getNextChapter } from "@/lib/content"
import { getChapterHtmlContent } from "@/lib/load-chapter-content"
import { MermaidWrapper } from "@/components/mermaid-wrapper"
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
  const htmlContent = getChapterHtmlContent(slug)

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
      <MermaidWrapper />
      <Header />
      <div className="container mx-auto max-w-7xl">
        <div className="flex">
          <Sidebar />
          <main className="flex-1 min-h-screen">
            <article className="max-w-4xl mx-auto px-6 py-12">
            {/* Chapter Header */}
            <div className="mb-12">
              <p className="text-sm text-muted-foreground font-medium mb-2">{chapter.part}</p>
              <h1 className="text-5xl font-bold mb-4 text-foreground">
                Chapter {chapter.chapter}: {chapter.title}
              </h1>
              <p className="text-lg text-foreground/80 mb-6">{chapter.description}</p>
              <div className="flex gap-6 text-sm text-foreground/70">
                <span className="font-medium">{chapter.pages} pages</span>
                <span className="font-medium">{chapter.readingTime} min read</span>
                <span className="font-medium">{chapter.exercises} exercises</span>
                <span className="capitalize font-medium px-2 py-1 bg-primary/10 text-primary rounded">{chapter.difficulty}</span>
              </div>
            </div>

            {/* Life Insight Box */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <p className="font-semibold text-primary mb-2">💡 Life Insight</p>
              <p className="text-foreground/90">{chapter.lifeInsight}</p>
            </div>

            {/* Learning Objectives */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Learning Objectives</h2>
              <ul className="space-y-3">
                {chapter.objectives.map((obj, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-primary font-bold text-lg">•</span>
                    <span className="text-foreground/90 font-medium">{obj}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Chapter Content */}
            <section className="prose-content mb-12">
              {htmlContent ? (
                <div 
                  className="chapter-html-content"
                  dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
              ) : (
                <div className="bg-input/50 p-8 rounded-lg border border-border">
                  <p className="text-muted italic">
                    Chapter content not found. Please check if the HTML file exists.
                  </p>
                </div>
              )}
            </section>

            {/* Prerequisites */}
            {chapter.prerequisites.length > 0 && (
              <section className="mb-12">
                <h3 className="text-lg font-semibold mb-3 text-foreground">Prerequisites</h3>
                <ul className="space-y-2">
                  {chapter.prerequisites.map((prereq, i) => (
                    <li key={i} className="text-foreground/80 font-medium">
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
      </div>
    </>
  )
}
