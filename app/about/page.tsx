import Link from "next/link"

export default function AboutPage() {
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

      {/* Content */}
      <div className="container-main py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-8">About This Handbook</h1>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Purpose</h2>
            <p className="text-muted mb-4">
              The Graphs, Trees & Algorithms Handbook is designed to bridge the gap between theoretical computer science
              and practical problem-solving. Whether you're preparing for technical interviews, learning computer
              science fundamentals, or applying graph thinking to real-world challenges, this handbook provides
              comprehensive coverage of essential concepts.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
            <ul className="space-y-3 text-muted">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Fundamental graph concepts and terminology</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Different graph representations and when to use each</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Core algorithms: BFS, DFS, Dijkstra's, and more</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Advanced topics: network flow, graph coloring, and dynamic programming</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Real-world applications in social networks, navigation, and recommendations</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>How to apply graph thinking to career and life decisions</span>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Structure</h2>
            <p className="text-muted mb-4">
              The handbook is organized into 15 comprehensive chapters, each building on previous concepts. You can read
              sequentially or jump to topics that interest you most.
            </p>
            <div className="bg-input rounded-lg p-6">
              <p className="text-sm text-muted">
                <strong>Chapters 1-3:</strong> Foundations - graphs, representations, and traversal
              </p>
              <p className="text-sm text-muted mt-2">
                <strong>Chapters 4-7:</strong> Core Algorithms - shortest paths, spanning trees, sorting, and components
              </p>
              <p className="text-sm text-muted mt-2">
                <strong>Chapters 8-12:</strong> Advanced Topics - matching, flow, coloring, trees, and dynamic
                programming
              </p>
              <p className="text-sm text-muted mt-2">
                <strong>Chapters 13-15:</strong> Applications - real-world uses, life applications, and future
                directions
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">About the Author</h2>
            <p className="text-muted mb-4">
              This handbook was created by Shohag Miah, a software engineer passionate about making complex concepts
              accessible and practical. The goal is to help developers, students, and professionals understand not just
              how algorithms work, but why they matter and how to apply them effectively.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">How to Use This Handbook</h2>
            <div className="space-y-4 text-muted">
              <div>
                <h3 className="font-semibold text-foreground mb-2">For Learning</h3>
                <p>Start from Chapter 1 and progress sequentially. Each chapter builds on previous concepts.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">For Reference</h3>
                <p>Use the search feature (Cmd+K) to quickly find specific algorithms or concepts.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">For Interview Prep</h3>
                <p>Focus on Chapters 1-7 for core concepts, then review specific algorithms as needed.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">For Offline Reading</h3>
                <p>Download the complete handbook as an HTML file from the Download page.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Get Started</h2>
            <p className="text-muted mb-6">Ready to dive in? Start exploring the chapters or download the handbook.</p>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/chapters"
                className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:opacity-80 transition-colors"
              >
                Read Chapters
              </Link>
              <Link
                href="/download"
                className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-input transition-colors"
              >
                Download PDF
              </Link>
            </div>
          </section>
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
