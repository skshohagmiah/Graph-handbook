import Link from "next/link"
import { chapters } from "@/lib/content"
import { ArrowRight, BookOpen, Clock, Target, Zap } from "lucide-react"

export default function ChaptersPage() {
  // Group chapters by parts
  const partI = chapters.filter(ch => ch.chapter <= 5)
  const partII = chapters.filter(ch => ch.chapter >= 6 && ch.chapter <= 9)
  const partIII = chapters.filter(ch => ch.chapter >= 10 && ch.chapter <= 12)
  const partIV = chapters.filter(ch => ch.chapter >= 13 && ch.chapter <= 17)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
        <div className="relative container mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Graph Algorithms Handbook
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent mb-6">
              Master Graph Theory
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              A comprehensive journey through graph algorithms, data structures, and real-world problem solving. From foundations to advanced algorithms.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-primary" />
                <span>17 Comprehensive Chapters</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Progressive Learning Path</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                <span>Real-World Applications</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Part I - Foundations */}
      <div className="container mx-auto px-6 py-16">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              I
            </div>
            <h2 className="text-3xl font-bold">Foundations</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Build your understanding of graphs, trees, and fundamental data structures that power modern algorithms.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {partI.map((chapter) => (
            <Link key={chapter.id} href={`/chapters/${chapter.id}`} className="group">
              <div className="relative bg-card border border-border rounded-xl p-6 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-3xl" />
                
                {/* Chapter Number Badge */}
                <div className="relative z-10 mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-bold text-lg mb-3">
                    {chapter.chapter}
                  </div>
                  <div className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-2">
                    Chapter {chapter.chapter}
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                    {chapter.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {chapter.description}
                  </p>
                  
                  {/* Objectives Preview */}
                  <div className="space-y-1 mb-4">
                    {chapter.objectives.slice(0, 2).map((objective) => (
                      <div key={objective} className="text-xs text-muted-foreground flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        <span className="truncate">{objective}</span>
                      </div>
                    ))}
                    {chapter.objectives.length > 2 && (
                      <div className="text-xs text-muted-foreground flex items-center gap-2">
                        <div className="w-1 h-1 bg-muted rounded-full" />
                        <span>+{chapter.objectives.length - 2} more objectives</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Action */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-primary">Start Learning</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Part II - Core Algorithms */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              II
            </div>
            <h2 className="text-3xl font-bold">Core Algorithms</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Master the fundamental algorithms that form the backbone of graph computing: traversal, shortest paths, spanning trees, and dependency resolution.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-20">
          {partII.map((chapter) => (
            <Link key={chapter.id} href={`/chapters/${chapter.id}`} className="group">
              <div className="relative bg-card border border-border rounded-xl p-8 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-3xl" />
                
                {/* Chapter Number Badge */}
                <div className="relative z-10 mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-bold text-xl mb-3">
                    {chapter.chapter}
                  </div>
                  <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2">
                    Chapter {chapter.chapter}
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                    {chapter.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {chapter.description}
                  </p>
                  
                  {/* Objectives Grid */}
                  <div className="grid grid-cols-1 gap-2 mb-6">
                    {chapter.objectives.map((objective) => (
                      <div key={objective} className="text-sm text-muted-foreground flex items-center gap-3 py-1">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                        <span>{objective}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Action */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-sm font-medium text-primary">Explore Algorithm</span>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Part III - Advanced Topics */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              III
            </div>
            <h2 className="text-3xl font-bold">Advanced Topics</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Dive into sophisticated algorithms for optimization, flow networks, and advanced graph analysis techniques.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {partIII.map((chapter) => (
            <Link key={chapter.id} href={`/chapters/${chapter.id}`} className="group">
              <div className="relative bg-card border border-border rounded-xl p-6 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-bl-3xl" />
                
                {/* Chapter Number Badge */}
                <div className="relative z-10 mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-bold text-lg mb-3">
                    {chapter.chapter}
                  </div>
                  <div className="text-xs font-semibold text-purple-600 uppercase tracking-wide mb-2">
                    Chapter {chapter.chapter}
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                    {chapter.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {chapter.description}
                  </p>
                  
                  {/* Objectives Preview */}
                  <div className="space-y-1 mb-4">
                    {chapter.objectives.slice(0, 2).map((objective) => (
                      <div key={objective} className="text-xs text-muted-foreground flex items-center gap-2">
                        <div className="w-1 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                        <span className="truncate">{objective}</span>
                      </div>
                    ))}
                    {chapter.objectives.length > 2 && (
                      <div className="text-xs text-muted-foreground flex items-center gap-2">
                        <div className="w-1 h-1 bg-muted rounded-full" />
                        <span>+{chapter.objectives.length - 2} more objectives</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Action */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-primary">Explore Topic</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Part IV - Applied Graph Thinking */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              IV
            </div>
            <h2 className="text-3xl font-bold">Applied Graph Thinking</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Apply graph concepts to real-world systems, human decisions, and coding interviews. Develop the graph mindset for life and career success.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partIV.map((chapter) => (
            <Link key={chapter.id} href={`/chapters/${chapter.id}`} className="group">
              <div className="relative bg-card border border-border rounded-xl p-6 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-bl-3xl" />
                
                {/* Chapter Number Badge */}
                <div className="relative z-10 mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-bold text-lg mb-3">
                    {chapter.chapter}
                  </div>
                  <div className="text-xs font-semibold text-orange-600 uppercase tracking-wide mb-2">
                    Chapter {chapter.chapter}
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                    {chapter.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {chapter.description}
                  </p>
                  
                  {/* Objectives Preview */}
                  <div className="space-y-1 mb-4">
                    {chapter.objectives.slice(0, 2).map((objective) => (
                      <div key={objective} className="text-xs text-muted-foreground flex items-center gap-2">
                        <div className="w-1 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
                        <span className="truncate">{objective}</span>
                      </div>
                    ))}
                    {chapter.objectives.length > 2 && (
                      <div className="text-xs text-muted-foreground flex items-center gap-2">
                        <div className="w-1 h-1 bg-muted rounded-full" />
                        <span>+{chapter.objectives.length - 2} more objectives</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Action */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-primary">Apply Knowledge</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
