"use client"

import { useState } from "react"
import Link from "next/link"
import { Download, FileText, BookOpen } from "lucide-react"

export default function DownloadPage() {
  const [isGenerating, setIsGenerating] = useState(false)

  const handleDownloadPDF = async () => {
    setIsGenerating(true)
    try {
      const response = await fetch("/api/pdf")
      const html = await response.text()

      // Create a blob and download
      const blob = new Blob([html], { type: "text/html" })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = "graphs-handbook.html"
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (error) {
      console.error("Download failed:", error)
      alert("Failed to download PDF. Please try again.")
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border sticky top-0 bg-background/95 backdrop-blur">
        <div className="container-main flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-primary">
            Graphs Handbook
          </Link>
          <div className="flex gap-6">
            <Link href="/chapters" className="text-sm hover:text-primary transition-colors">
              Chapters
            </Link>
            <Link href="/about" className="text-sm hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/download" className="text-sm hover:text-primary transition-colors">
              Download
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="border-b border-border">
        <div className="container-main py-12">
          <h1 className="text-4xl font-bold mb-4">Download the Handbook</h1>
          <p className="text-muted text-lg">Get the complete Graphs, Trees & Algorithms Handbook in multiple formats</p>
        </div>
      </div>

      {/* Download Options */}
      <div className="container-main py-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl">
          {/* HTML/PDF Option */}
          <div className="border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold">Complete Handbook</h2>
            </div>
            <p className="text-muted mb-6">
              Download the entire handbook as a single HTML file. Perfect for printing or reading offline.
            </p>
            <button
              onClick={handleDownloadPDF}
              disabled={isGenerating}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:opacity-80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Download className="w-5 h-5" />
              {isGenerating ? "Generating..." : "Download HTML"}
            </button>
            <p className="text-xs text-muted mt-3">File size: ~2.5 MB</p>
          </div>

          {/* Read Online Option */}
          <div className="border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-accent" />
              <h2 className="text-2xl font-bold">Read Online</h2>
            </div>
            <p className="text-muted mb-6">
              Read the handbook directly on our website with interactive navigation and search functionality.
            </p>
            <Link
              href="/chapters"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-input transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              Start Reading
            </Link>
            <p className="text-xs text-muted mt-3">No download required</p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 max-w-2xl">
          <h3 className="text-xl font-bold mb-4">About the Handbook</h3>
          <div className="space-y-4 text-muted">
            <p>
              The Graphs, Trees & Algorithms Handbook is a comprehensive guide covering 15 chapters of graph theory,
              data structures, and algorithms.
            </p>
            <p>
              Each chapter includes detailed explanations, code examples in Python and C++, visual diagrams, and
              real-world applications.
            </p>
            <p>
              Whether you're preparing for technical interviews, learning computer science fundamentals, or applying
              graph thinking to real-world problems, this handbook has you covered.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border mt-16 py-8">
        <div className="container-main text-center text-sm text-muted">
          <p>Graphs, Trees & Algorithms Handbook by Shohag Miah</p>
          <p className="mt-2">A comprehensive guide to understanding systems through graph thinking</p>
        </div>
      </footer>
    </div>
  )
}
