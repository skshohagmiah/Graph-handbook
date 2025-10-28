import fs from 'fs'
import path from 'path'

// Map chapter slugs to HTML files
const chapterFileMap: Record<string, string> = {
  'what-are-graphs': 'chapter-01.html',
  'graph-properties': 'chapter-02.html', 
  'trees': 'chapter-03.html',
  'tries': 'chapter-04.html',
  'heaps': 'chapter-05.html',
  'traversal-algorithms': 'chapter-06.html',
  'shortest-path-algorithms': 'chapter-07.html',
  'minimum-spanning-trees': 'chapter-08.html',
  'topological-sorting': 'chapter-09.html',
  'flow-networks': 'chapter-10.html',
  'graph-coloring': 'chapter-11.html',
  'advanced-concepts': 'chapter-12.html',
  'graphs-in-cs': 'chapter-13.html',
  'pattern-recognition': 'chapter-14.html',
  'real-life-decisions': 'chapter-15.html',
  'graph-mindset': 'chapter-16.html',
  'coding-interviews': 'chapter-17.html',
  'terminology-reference': 'appendix-a.html',
  'complexity-table': 'appendix-b.html',
  'practice-problems': 'appendix-c.html',
  'visual-cheatsheet': 'appendix-d.html',
  'further-reading': 'appendix-e.html'
}

export function getChapterHtmlContent(slug: string): string | null {
  try {
    const filename = chapterFileMap[slug]
    if (!filename) {
      return null
    }

    const bookDir = path.join(process.cwd(), 'book')
    const filePath = path.join(bookDir, filename)
    
    if (!fs.existsSync(filePath)) {
      return null
    }

    const htmlContent = fs.readFileSync(filePath, 'utf-8')
    
    // Extract content from body tag (remove head, html tags)
    const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*?)<\/body>/i)
    if (bodyMatch) {
      let bodyContent = bodyMatch[1]
      
      // Remove the chapter number and title divs since we'll show them separately
      bodyContent = bodyContent.replace(/<div class="chapter-number">.*?<\/div>/i, '')
      bodyContent = bodyContent.replace(/<h1 class="chapter-title">.*?<\/h1>/i, '')
      
      // Add Mermaid script if not present
      if (bodyContent.includes('class="mermaid"') && !bodyContent.includes('mermaid.min.js')) {
        bodyContent = `<script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
        <script>
          if (typeof window !== 'undefined') {
            mermaid.initialize({ startOnLoad: true, theme: 'default' });
          }
        </script>` + bodyContent
      }
      
      return bodyContent
    }
    
    return htmlContent
  } catch (error) {
    console.error(`Error loading chapter content for ${slug}:`, error)
    return null
  }
}

export function getAllChapterSlugs(): string[] {
  return Object.keys(chapterFileMap)
}
