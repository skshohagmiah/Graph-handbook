"use client"

export function InteractiveGraph() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full rounded-2xl border border-border bg-card"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background */}
        <rect width="400" height="400" fill="transparent" />

        {/* Edges */}
        <line x1="100" y1="100" x2="200" y2="80" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="2" />
        <line x1="100" y1="100" x2="150" y2="180" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="2" />
        <line x1="200" y1="80" x2="250" y2="150" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="2" />
        <line x1="150" y1="180" x2="250" y2="150" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="2" />
        <line x1="150" y1="180" x2="200" y2="250" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="2" />
        <line x1="250" y1="150" x2="200" y2="250" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="2" />
        <line x1="200" y1="80" x2="100" y2="250" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="2" />
        <line x1="200" y1="250" x2="100" y2="250" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="2" />

        {/* Nodes */}
        <circle cx="100" cy="100" r="10" fill="rgb(99, 102, 241)" />
        <text x="100" y="105" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
          A
        </text>

        <circle cx="200" cy="80" r="10" fill="rgb(99, 102, 241)" />
        <text x="200" y="85" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
          B
        </text>

        <circle cx="150" cy="180" r="10" fill="rgb(99, 102, 241)" />
        <text x="150" y="185" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
          C
        </text>

        <circle cx="250" cy="150" r="10" fill="rgb(99, 102, 241)" />
        <text x="250" y="155" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
          D
        </text>

        <circle cx="200" cy="250" r="10" fill="rgb(99, 102, 241)" />
        <text x="200" y="255" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
          E
        </text>

        <circle cx="100" cy="250" r="10" fill="rgb(99, 102, 241)" />
        <text x="100" y="255" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
          F
        </text>
      </svg>
    </div>
  )
}
