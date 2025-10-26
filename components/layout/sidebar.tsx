"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface Chapter {
  id: string
  title: string
  slug: string
  part: string
}

interface SidebarProps {
  chapters: Chapter[]
}

export function Sidebar({ chapters }: SidebarProps) {
  const pathname = usePathname()

  // Group chapters by part
  const groupedChapters = chapters.reduce(
    (acc, chapter) => {
      if (!acc[chapter.part]) {
        acc[chapter.part] = []
      }
      acc[chapter.part].push(chapter)
      return acc
    },
    {} as Record<string, Chapter[]>,
  )

  return (
    <aside className="w-64 border-r border-border bg-input/50 p-6 max-h-screen overflow-y-auto">
      <nav className="space-y-8">
        {Object.entries(groupedChapters).map(([part, chapterList]) => (
          <div key={part}>
            <h3 className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">{part}</h3>
            <ul className="space-y-1">
              {chapterList.map((chapter) => {
                const isActive = pathname === `/chapters/${chapter.slug}`
                return (
                  <li key={chapter.slug}>
                    <Link
                      href={`/chapters/${chapter.slug}`}
                      className={`sidebar-nav-item block ${isActive ? "active" : ""}`}
                    >
                      {chapter.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}
