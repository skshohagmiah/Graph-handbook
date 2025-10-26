import { getAllChaptersContent } from "./markdown"

export interface SearchResult {
  id: string
  chapterTitle: string
  chapterNumber: number
  heading: string
  excerpt: string
  url: string
}

export async function searchChapters(query: string): Promise<SearchResult[]> {
  if (!query.trim()) return []

  const chapters = await getAllChaptersContent()
  const results: SearchResult[] = []
  const lowerQuery = query.toLowerCase()

  chapters.forEach((chapter) => {
    // Search in chapter title
    if (chapter.title.toLowerCase().includes(lowerQuery)) {
      results.push({
        id: chapter.id,
        chapterTitle: chapter.title,
        chapterNumber: chapter.metadata.number,
        heading: chapter.title,
        excerpt: chapter.metadata.description,
        url: `/chapters/${chapter.id}`,
      })
    }

    // Search in chapter content
    const contentText = chapter.content.toLowerCase()
    if (contentText.includes(lowerQuery)) {
      // Find context around the match
      const index = contentText.indexOf(lowerQuery)
      const start = Math.max(0, index - 100)
      const end = Math.min(contentText.length, index + 100)
      const excerpt = chapter.content.substring(start, end).trim()

      results.push({
        id: `${chapter.id}-content`,
        chapterTitle: chapter.title,
        chapterNumber: chapter.metadata.number,
        heading: `Found in ${chapter.title}`,
        excerpt: `...${excerpt}...`,
        url: `/chapters/${chapter.id}`,
      })
    }
  })

  return results.slice(0, 10) // Limit to 10 results
}
