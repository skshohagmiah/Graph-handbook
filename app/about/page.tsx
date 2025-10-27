"use client"

import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border sticky top-0 bg-background/95 backdrop-blur">
        <div className="container-main flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-primary">
            Graph Algorithms Handbook
          </Link>
          <div className="flex gap-6">
            <Link href="/chapters/what-are-graphs" className="text-sm hover:text-primary transition-colors">
              Chapters
            </Link>
            <Link href="/about" className="text-sm hover:text-primary transition-colors">
              About
            </Link>
            <button
              onClick={() => {
                const link = document.createElement('a')
                link.href = '/graphs-handbook.pdf'
                link.download = 'Graph-Algorithms-Handbook.pdf'
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
              }}
              className="text-sm hover:text-primary transition-colors"
            >
              Download
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="container-main py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About the Author</h1>

          <section className="mb-12">
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-8 mb-8">
              <p className="text-lg text-foreground leading-relaxed">
                Passionate Full Stack Software Engineer at Techforing Ltd., specializing in modern web technologies and SaaS development. As a self-taught technologist, I've transformed curiosity into professional expertise, building scalable, high-performance applications that solve real-world problems.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              🚀 Current Role & Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card/50 rounded-lg p-6 border border-border">
                <h3 className="font-semibold text-primary mb-3">Current Position</h3>
                <p className="text-foreground">Software Engineer at Techforing Ltd.</p>
              </div>
              <div className="bg-card/50 rounded-lg p-6 border border-border">
                <h3 className="font-semibold text-primary mb-3">Specialization</h3>
                <p className="text-foreground">Full Stack Development | SaaS Architecture | E-commerce Solutions</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">💻 Technical Stack</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card/30 rounded-lg p-4 border border-border">
                <h3 className="font-semibold text-blue-600 mb-3">Frontend</h3>
                <ul className="text-sm space-y-1 text-foreground">
                  <li>• React.js</li>
                  <li>• Next.js</li>
                  <li>• TypeScript</li>
                  <li>• JavaScript</li>
                  <li>• Tailwind CSS</li>
                </ul>
              </div>
              <div className="bg-card/30 rounded-lg p-4 border border-border">
                <h3 className="font-semibold text-green-600 mb-3">Backend</h3>
                <ul className="text-sm space-y-1 text-foreground">
                  <li>• Node.js</li>
                  <li>• Express.js</li>
                  <li>• Go</li>
                  <li>• RESTful APIs</li>
                </ul>
              </div>
              <div className="bg-card/30 rounded-lg p-4 border border-border">
                <h3 className="font-semibold text-purple-600 mb-3">Database</h3>
                <ul className="text-sm space-y-1 text-foreground">
                  <li>• PostgreSQL</li>
                  <li>• MongoDB</li>
                  <li>• Prisma ORM</li>
                  <li>• Redis</li>
                </ul>
              </div>
              <div className="bg-card/30 rounded-lg p-4 border border-border">
                <h3 className="font-semibold text-orange-600 mb-3">DevOps & Auth</h3>
                <ul className="text-sm space-y-1 text-foreground">
                  <li>• Docker</li>
                  <li>• Kubernetes</li>
                  <li>• CI/CD</li>
                  <li>• GitHub Actions</li>
                  <li>• Stripe Integration</li>
                  <li>• Auth.js</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">🏆 Notable Projects & Achievements</h2>
            <div className="space-y-4">
              <div className="bg-card/30 rounded-lg p-6 border border-border">
                <h3 className="font-semibold text-primary mb-2">✅ Seentics</h3>
                <p className="text-foreground">Open-source Analytics & Workflow Automation SaaS Platform</p>
              </div>
              <div className="bg-card/30 rounded-lg p-6 border border-border">
                <h3 className="font-semibold text-primary mb-2">✅ TechBazer</h3>
                <p className="text-foreground">Full-stack e-commerce platform with payment integration</p>
              </div>
              <div className="bg-card/30 rounded-lg p-6 border border-border">
                <h3 className="font-semibold text-primary mb-2">✅ Enterprise Applications</h3>
                <p className="text-foreground">Enhanced HRMS, CMS, and Customer Portal systems</p>
              </div>
              <div className="bg-card/30 rounded-lg p-6 border border-border">
                <h3 className="font-semibold text-primary mb-2">✅ Architecture & Integrations</h3>
                <p className="text-foreground">Built scalable microservices architecture for high-traffic applications and implemented complex payment systems</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">🎯 Current Focus</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-lg">🏗️</span>
                  <p className="text-foreground">Building Seentics - Next-generation analytics and workflow automation platform</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-lg">⚡</span>
                  <p className="text-foreground">Mastering system design and scalable architecture patterns</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-lg">🧠</span>
                  <p className="text-foreground">Advancing Data Structures & Algorithms expertise</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-lg">🌐</span>
                  <p className="text-foreground">Contributing to open-source SaaS ecosystem</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">🚀 2025 Goals</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                <p className="text-foreground">🚀 Launch Seentics v1.0 with 1000+ active users</p>
              </div>
              <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                <p className="text-foreground">💻 Complete advanced system design and microservices projects</p>
              </div>
              <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                <p className="text-foreground">📚 Contribute to 5 major open-source projects</p>
              </div>
              <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                <p className="text-foreground">🤝 Mentor junior developers in full-stack development</p>
              </div>
              <div className="bg-primary/5 rounded-lg p-4 border border-primary/20 md:col-span-2">
                <p className="text-foreground">📝 Share knowledge through technical blog posts</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">💡 What Drives Me</h2>
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-8 border border-border">
              <p className="text-lg text-foreground leading-relaxed mb-4">
                I believe great software engineering is where innovation meets practical problem-solving. From architecting scalable backend systems to crafting intuitive user experiences, I'm passionate about the entire software development lifecycle.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Whether it's building SaaS platforms, implementing complex integrations, or optimizing system performance, I thrive on turning ambitious ideas into production-ready solutions.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">🤝 Open to Collaboration</h2>
            <div className="bg-card/30 rounded-lg p-6 border border-border">
              <p className="text-foreground text-lg">
                <strong>Open to:</strong> Full-stack development opportunities, SaaS collaborations, system architecture projects, and connecting with fellow software engineers and tech entrepreneurs!
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">📚 About This Handbook</h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Graph Algorithms Handbook represents my passion for making complex computer science concepts accessible and practical. This comprehensive guide bridges the gap between theoretical knowledge and real-world application, helping developers, students, and professionals master graph algorithms and data structures.
            </p>
            <p className="text-foreground leading-relaxed">
              Through 9 detailed chapters, this handbook covers everything from basic graph concepts to advanced algorithms, with practical examples and real-world applications that demonstrate how graph thinking applies to both software engineering and life decisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">🚀 Get Started</h2>
            <p className="text-foreground mb-6">Ready to dive into graph algorithms? Start exploring the chapters or download the handbook for offline reading.</p>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/chapters/what-are-graphs"
                className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Start Reading
              </Link>
              <button
                onClick={() => {
                  const link = document.createElement('a')
                  link.href = '/graphs-handbook.pdf'
                  link.download = 'Graph-Algorithms-Handbook.pdf'
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                }}
                className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-input transition-colors"
              >
                Download PDF
              </button>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border mt-16 py-8">
        <div className="container-main text-center text-sm text-muted">
          <p>Graph Algorithms Handbook by Shohag Miah</p>
          <p className="mt-2">Software Engineer at Techforing Ltd. | Building scalable solutions & sharing knowledge</p>
        </div>
      </footer>
    </div>
  )
}
