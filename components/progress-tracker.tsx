"use client"

import { useProgress } from "@/hooks/use-progress"
import { chapters } from "@/lib/chapters"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ProgressTracker() {
  const pathname = usePathname()
  const { progress, isLoaded, markChapterComplete, setCurrentChapter, getProgressPercentage } = useProgress()

  useEffect(() => {
    // Extract chapter ID from pathname
    const match = pathname.match(/\/chapters\/([^/]+)/)
    if (match) {
      const chapterId = match[1]
      setCurrentChapter(chapterId)
    }
  }, [pathname, setCurrentChapter])

  if (!isLoaded) return null

  const progressPercentage = getProgressPercentage(chapters.length)

  return (
    <div className="fixed bottom-4 right-4 bg-card border border-border rounded-lg p-4 shadow-lg max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold text-foreground">Progress</span>
        <span className="text-sm text-muted">{progressPercentage}%</span>
      </div>
      <div className="w-full bg-input rounded-full h-2 overflow-hidden">
        <div className="bg-primary h-full transition-all duration-300" style={{ width: `${progressPercentage}%` }} />
      </div>
      <p className="text-xs text-muted mt-2">
        {progress.completedChapters.length} of {chapters.length} chapters completed
      </p>
    </div>
  )
}
