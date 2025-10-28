"use client"

import Link from "next/link"
import { ArrowRight, BookOpen, Code, Zap, Users, Award, Play } from "lucide-react"

export function LandingHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Brain Graph Background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Animated Graph Network */}
      <div className="absolute inset-0 opacity-30">
        {/* Nodes */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
        <div className="absolute top-32 left-40 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-100" />
        <div className="absolute top-16 left-64 w-4 h-4 bg-blue-600 rounded-full animate-pulse delay-200" />
        <div className="absolute top-28 left-80 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300" />
        <div className="absolute top-24 right-40 w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-400" />
        <div className="absolute top-36 right-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-500" />
        
        <div className="absolute top-40 left-16 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-600" />
        <div className="absolute top-52 left-32 w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-700" />
        <div className="absolute top-44 left-56 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-800" />
        <div className="absolute top-48 left-72 w-4 h-4 bg-purple-600 rounded-full animate-pulse delay-900" />
        <div className="absolute top-56 right-32 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-1000" />
        <div className="absolute top-40 right-16 w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-1100" />
        
        <div className="absolute top-64 left-24 w-3 h-3 bg-green-500 rounded-full animate-pulse delay-1200" />
        <div className="absolute top-72 left-48 w-2 h-2 bg-green-400 rounded-full animate-pulse delay-1300" />
        <div className="absolute top-68 left-68 w-4 h-4 bg-green-600 rounded-full animate-pulse delay-1400" />
        <div className="absolute top-76 right-48 w-2 h-2 bg-green-400 rounded-full animate-pulse delay-1500" />
        <div className="absolute top-64 right-24 w-3 h-3 bg-green-500 rounded-full animate-pulse delay-1600" />
        
        <div className="absolute bottom-32 left-20 w-2 h-2 bg-blue-300 rounded-full animate-pulse delay-1700" />
        <div className="absolute bottom-24 left-44 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-1800" />
        <div className="absolute bottom-28 left-64 w-2 h-2 bg-blue-300 rounded-full animate-pulse delay-1900" />
        <div className="absolute bottom-20 right-44 w-4 h-4 bg-blue-500 rounded-full animate-pulse delay-2000" />
        <div className="absolute bottom-32 right-20 w-2 h-2 bg-blue-300 rounded-full animate-pulse delay-2100" />
        
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <linearGradient id="line1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(59 130 246)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="rgb(147 51 234)" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="line2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(147 51 234)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="rgb(34 197 94)" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          
          <path d="M 80 80 Q 200 120 320 100" stroke="url(#line1)" strokeWidth="1" fill="none" />
          <path d="M 160 100 Q 280 140 400 120" stroke="url(#line1)" strokeWidth="1" fill="none" />
          <path d="M 256 96 Q 360 136 480 116" stroke="url(#line1)" strokeWidth="1" fill="none" />
          
          <path d="M 80 80 Q 60 200 64 320" stroke="url(#line2)" strokeWidth="1" fill="none" />
          <path d="M 160 100 Q 140 220 128 340" stroke="url(#line2)" strokeWidth="1" fill="none" />
          <path d="M 256 96 Q 236 216 224 336" stroke="url(#line2)" strokeWidth="1" fill="none" />
          
          <path d="M 64 320 Q 180 380 300 360" stroke="url(#line1)" strokeWidth="1" fill="none" />
          <path d="M 128 340 Q 244 400 360 380" stroke="url(#line1)" strokeWidth="1" fill="none" />
          
          <path d="M 80 80 Q 300 200 480 116" stroke="url(#line2)" strokeWidth="0.5" fill="none" />
          <path d="M 128 340 Q 300 300 480 380" stroke="url(#line1)" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto space-y-12">
          {/* Main Heading */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-foreground">
              Graph Algorithms Handbook
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A practical guide to graph data structures, algorithms, and real-world applications.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/chapters/what-are-graphs"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Play className="w-5 h-5" />
              Start Learning Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button
              onClick={() => {
                // Create a link to download the PDF
                const link = document.createElement('a')
                link.href = '/Graph Algorithms Handbook.pdf'
                link.download = 'Graph Algorithms Handbook.pdf'
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
              }}
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-primary/30 text-foreground rounded-xl font-semibold text-lg hover:bg-primary/5 hover:border-primary/50 transition-all duration-300 backdrop-blur-sm"
            >
              <BookOpen className="w-5 h-5" />
              Download PDF
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8">
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary">
                9
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">
                Chapters
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary">
                50+
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">
                Code Examples
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary">
                25+
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">
                Diagrams
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
