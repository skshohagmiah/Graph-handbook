"use client"

import { useState, useEffect } from "react"
import { Search, Loader2 } from "lucide-react"
import Link from "next/link"
import { searchChapters, type SearchResult } from "@/lib/search"

export function SearchDialog() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setOpen(!open)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [open])

  useEffect(() => {
    const performSearch = async () => {
      if (!query.trim()) {
        setResults([])
        return
      }

      setIsSearching(true)
      try {
        const searchResults = await searchChapters(query)
        setResults(searchResults)
      } catch (error) {
        console.error("Search error:", error)
      } finally {
        setIsSearching(false)
      }
    }

    const timer = setTimeout(performSearch, 300)
    return () => clearTimeout(timer)
  }, [query])

  return (
    <>
      {/* Search Button */}
      <button
        onClick={() => setOpen(true)}
        className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg border border-border hover:bg-input transition-colors text-sm text-muted"
      >
        <Search className="w-4 h-4" />
        <span>Search...</span>
        <kbd className="ml-auto text-xs bg-input px-2 py-1 rounded">⌘K</kbd>
      </button>

      {/* Search Dialog */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center pt-20">
          <div className="w-full max-w-2xl mx-4 bg-background rounded-lg shadow-lg border border-border">
            {/* Search Input */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
              <Search className="w-5 h-5 text-muted" />
              <input
                autoFocus
                type="text"
                placeholder="Search chapters..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent outline-none text-foreground placeholder-muted"
              />
              {isSearching && <Loader2 className="w-5 h-5 text-primary animate-spin" />}
              <button onClick={() => setOpen(false)} className="text-sm text-muted hover:text-foreground">
                ESC
              </button>
            </div>

            {/* Results */}
            <div className="max-h-96 overflow-y-auto">
              {results.length > 0 ? (
                <div className="divide-y divide-border">
                  {results.map((result) => (
                    <Link
                      key={result.id}
                      href={result.url}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-3 hover:bg-input transition-colors"
                    >
                      <div className="flex items-start justify-between mb-1">
                        <div className="font-semibold text-foreground">{result.heading}</div>
                        <span className="text-xs text-muted bg-input px-2 py-1 rounded">
                          Ch. {result.chapterNumber}
                        </span>
                      </div>
                      <p className="text-sm text-muted line-clamp-2">{result.excerpt}</p>
                    </Link>
                  ))}
                </div>
              ) : query.trim() ? (
                <div className="px-4 py-8 text-center text-muted">
                  {isSearching ? "Searching..." : "No results found"}
                </div>
              ) : (
                <div className="px-4 py-8 text-center text-muted">Start typing to search chapters...</div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
