"use client"

import { useEffect, useState } from "react"

interface ChapterContentProps {
  html: string
  title: string
}

export function ChapterContent({ html, title }: ChapterContentProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="animate-pulse">Loading...</div>
  }

  return (
    <article className="prose-content">
      <style>{`
        .prose-content {
          --tw-prose-body: var(--foreground);
          --tw-prose-headings: var(--foreground);
          --tw-prose-lead: var(--muted-foreground);
          --tw-prose-links: var(--primary);
          --tw-prose-bold: var(--foreground);
          --tw-prose-counters: var(--muted-foreground);
          --tw-prose-bullets: var(--border);
          --tw-prose-hr: var(--border);
          --tw-prose-quotes: var(--muted-foreground);
          --tw-prose-quote-borders: var(--border);
          --tw-prose-captions: var(--muted-foreground);
          --tw-prose-code: var(--foreground);
          --tw-prose-pre-code: var(--foreground);
          --tw-prose-pre-bg: var(--input);
          --tw-prose-th-borders: var(--border);
          --tw-prose-td-borders: var(--border);
          --tw-prose-th-bg: var(--input);
        }

        .prose-content h1 {
          font-size: 2.25rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .prose-content h2 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }

        .prose-content h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 1rem;
          margin-bottom: 0.5rem;
          line-height: 1.4;
        }

        .prose-content p {
          margin-top: 1rem;
          margin-bottom: 1rem;
          line-height: 1.625;
        }

        .prose-content ul,
        .prose-content ol {
          margin-top: 1rem;
          margin-bottom: 1rem;
          margin-left: 1.5rem;
        }

        .prose-content li {
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .prose-content code {
          background-color: var(--input);
          color: var(--foreground);
          padding: 0.375rem 0.5rem;
          border-radius: 0.25rem;
          font-size: 0.875rem;
          font-family: monospace;
        }

        .prose-content pre {
          background-color: var(--input);
          border: 1px solid var(--border);
          border-radius: 0.5rem;
          padding: 1rem;
          overflow-x: auto;
          margin-top: 1rem;
          margin-bottom: 1rem;
        }

        .prose-content pre code {
          background-color: transparent;
          padding: 0;
          border-radius: 0;
        }

        .prose-content table {
          border-collapse: collapse;
          width: 100%;
          margin-top: 1rem;
          margin-bottom: 1rem;
        }

        .prose-content th,
        .prose-content td {
          border: 1px solid var(--border);
          padding: 1rem;
          text-align: left;
        }

        .prose-content th {
          background-color: var(--input);
          font-weight: 600;
        }

        .prose-content blockquote {
          border-left: 4px solid var(--primary);
          padding-left: 1rem;
          font-style: italic;
          margin-top: 1rem;
          margin-bottom: 1rem;
          color: var(--muted-foreground);
        }

        .prose-content a {
          color: var(--primary);
          text-decoration: underline;
        }

        .prose-content a:hover {
          color: var(--primary-dark);
        }

        .prose-content strong {
          font-weight: 700;
          color: var(--foreground);
        }

        .prose-content em {
          font-style: italic;
        }

        .prose-content hr {
          border-top: 1px solid var(--border);
          margin-top: 2rem;
          margin-bottom: 2rem;
        }
      `}</style>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  )
}
