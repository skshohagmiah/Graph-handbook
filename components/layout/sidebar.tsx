"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { chapters } from "@/lib/content"
import { BookOpen, ChevronRight } from "lucide-react"

export function Sidebar() {
  const pathname = usePathname()

  // Group chapters by parts
  const partI = chapters.filter(ch => ch.chapter <= 5)
  const partII = chapters.filter(ch => ch.chapter >= 6 && ch.chapter <= 9)
  const partIII = chapters.filter(ch => ch.chapter >= 10 && ch.chapter <= 12)
  const partIV = chapters.filter(ch => ch.chapter >= 13 && ch.chapter <= 17)
  return (
    <aside className="w-80 border-r border-border  backdrop-blur-sm sticky top-0 h-screen overflow-y-auto">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <BookOpen className="w-4 h-4 text-white" />
          </div>
          <div>
            <h2 className="font-semibold text-foreground">All Chapters</h2>
            <p className="text-xs text-muted-foreground">Graph Algorithms Handbook</p>
          </div>
        </div>
      </div>

      <nav className="p-6 space-y-8">
        {/* Part I - Foundations */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 bg-green-500 rounded text-white text-xs font-bold flex items-center justify-center">
              I
            </div>
            <h3 className="text-sm font-semibold text-foreground">Foundations</h3>
          </div>
          <ul className="space-y-1">
            {partI.map((chapter) => {
              const isActive = pathname === `/chapters/${chapter.slug}`
              return (
                <li key={chapter.id}>
                  <Link
                    href={`/chapters/${chapter.slug}`}
                    className={`group flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
                      isActive 
                        ? "bg-primary/10 text-primary border-l-2 border-primary" 
                        : "hover:bg-input/50 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-medium ${
                      isActive 
                        ? "bg-primary text-white" 
                        : "bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary"
                    }`}>
                      {chapter.chapter}
                    </div>
                    <span className="flex-1 text-sm font-medium truncate">{chapter.title}</span>
                    {isActive && <ChevronRight className="w-4 h-4 text-primary" />}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Part II - Core Algorithms */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 bg-blue-500 rounded text-white text-xs font-bold flex items-center justify-center">
              II
            </div>
            <h3 className="text-sm font-semibold text-foreground">Core Algorithms</h3>
          </div>
          <ul className="space-y-1">
            {partII.map((chapter) => {
              const isActive = pathname === `/chapters/${chapter.slug}`
              return (
                <li key={chapter.id}>
                  <Link
                    href={`/chapters/${chapter.slug}`}
                    className={`group flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
                      isActive 
                        ? "bg-primary/10 text-primary border-l-2 border-primary" 
                        : "hover:bg-input/50 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-medium ${
                      isActive 
                        ? "bg-primary text-white" 
                        : "bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary"
                    }`}>
                      {chapter.chapter}
                    </div>
                    <span className="flex-1 text-sm font-medium truncate">{chapter.title}</span>
                    {isActive && <ChevronRight className="w-4 h-4 text-primary" />}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Part III - Advanced Topics */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 bg-purple-500 rounded text-white text-xs font-bold flex items-center justify-center">
              III
            </div>
            <h3 className="text-sm font-semibold text-foreground">Advanced Topics</h3>
          </div>
          <ul className="space-y-1">
            {partIII.map((chapter) => {
              const isActive = pathname === `/chapters/${chapter.slug}`
              return (
                <li key={chapter.id}>
                  <Link
                    href={`/chapters/${chapter.slug}`}
                    className={`group flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
                      isActive 
                        ? "bg-primary/10 text-primary border-l-2 border-primary" 
                        : "hover:bg-input/50 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-medium ${
                      isActive 
                        ? "bg-primary text-white" 
                        : "bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary"
                    }`}>
                      {chapter.chapter}
                    </div>
                    <span className="flex-1 text-sm font-medium truncate">{chapter.title}</span>
                    {isActive && <ChevronRight className="w-4 h-4 text-primary" />}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Part IV - Applied Graph Thinking */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 bg-orange-500 rounded text-white text-xs font-bold flex items-center justify-center">
              IV
            </div>
            <h3 className="text-sm font-semibold text-foreground">Applied Graph Thinking</h3>
          </div>
          <ul className="space-y-1">
            {partIV.map((chapter) => {
              const isActive = pathname === `/chapters/${chapter.slug}`
              return (
                <li key={chapter.id}>
                  <Link
                    href={`/chapters/${chapter.slug}`}
                    className={`group flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
                      isActive 
                        ? "bg-primary/10 text-primary border-l-2 border-primary" 
                        : "hover:bg-input/50 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-medium ${
                      isActive 
                        ? "bg-primary text-white" 
                        : "bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary"
                    }`}>
                      {chapter.chapter}
                    </div>
                    <span className="flex-1 text-sm font-medium truncate">{chapter.title}</span>
                    {isActive && <ChevronRight className="w-4 h-4 text-primary" />}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </aside>
  )
}
