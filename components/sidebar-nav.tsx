"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { chapters } from "@/lib/chapters"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export function SidebarNav() {
  const pathname = usePathname()
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null)

  return (
    <aside className="w-64 border-r border-border bg-card sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
      <nav className="p-4 space-y-2">
        <Link
          href="/chapters"
          className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            pathname === "/chapters" ? "bg-primary text-white" : "hover:bg-input text-foreground"
          }`}
        >
          All Chapters
        </Link>

        <div className="pt-4 border-t border-border">
          {chapters.map((chapter) => {
            const isActive = pathname.includes(chapter.id)
            const isExpanded = expandedChapter === chapter.id

            return (
              <div key={chapter.id}>
                <button
                  onClick={() => setExpandedChapter(isExpanded ? null : chapter.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive ? "bg-primary text-white" : "hover:bg-input text-foreground"
                  }`}
                >
                  <span>
                    {chapter.number}. {chapter.title}
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                </button>

                {isExpanded && (
                  <div className="ml-4 mt-1 space-y-1 border-l border-border pl-3">
                    {chapter.sections.map((section) => (
                      <Link
                        key={section}
                        href={`/chapters/${chapter.id}#${section.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block px-3 py-1 rounded text-xs text-muted hover:text-foreground hover:bg-input transition-colors"
                      >
                        {section}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </nav>
    </aside>
  )
}
