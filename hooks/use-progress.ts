"use client"

import { useEffect, useState } from "react"

export interface Progress {
  completedChapters: string[]
  currentChapter: string | null
  lastUpdated: number
}

const STORAGE_KEY = "handbook-progress"

export function useProgress() {
  const [progress, setProgress] = useState<Progress>({
    completedChapters: [],
    currentChapter: null,
    lastUpdated: Date.now(),
  })
  const [isLoaded, setIsLoaded] = useState(false)

  // Load progress from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        setProgress(JSON.parse(stored))
      } catch (error) {
        console.error("Failed to load progress:", error)
      }
    }
    setIsLoaded(true)
  }, [])

  // Save progress to localStorage
  const updateProgress = (updates: Partial<Progress>) => {
    const newProgress = {
      ...progress,
      ...updates,
      lastUpdated: Date.now(),
    }
    setProgress(newProgress)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress))
  }

  const markChapterComplete = (chapterId: string) => {
    setProgress((prev) => {
      const updated = {
        ...prev,
        completedChapters: [...new Set([...prev.completedChapters, chapterId])],
        lastUpdated: Date.now(),
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
      return updated
    })
  }

  const setCurrentChapter = (chapterId: string) => {
    updateProgress({ currentChapter: chapterId })
  }

  const getProgressPercentage = (totalChapters: number) => {
    return Math.round((progress.completedChapters.length / totalChapters) * 100)
  }

  const resetProgress = () => {
    const newProgress: Progress = {
      completedChapters: [],
      currentChapter: null,
      lastUpdated: Date.now(),
    }
    setProgress(newProgress)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress))
  }

  return {
    progress,
    isLoaded,
    markChapterComplete,
    setCurrentChapter,
    getProgressPercentage,
    resetProgress,
  }
}
