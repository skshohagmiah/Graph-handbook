// Content management utilities
export interface Chapter {
  id: string
  chapter: number
  title: string
  slug: string
  part: string
  partNumber: number
  pages: number
  description: string
  keywords: string[]
  lifeInsight: string
  objectives: string[]
  prerequisites: string[]
  diagrams: string[]
  codeExamples: string[]
  exercises: number
  difficulty: "beginner" | "intermediate" | "advanced"
  readingTime: number
  content?: string
}

export interface BookMetadata {
  title: string
  subtitle: string
  author: string
  version: string
  totalPages: number
  description: string
}

// Mock data - will be replaced with actual markdown files
export const bookMetadata: BookMetadata = {
  title: "Graphs, Trees & Algorithms Handbook",
  subtitle: "A Practical Guide to Data Structures, Problem Solving, and Real-World Thinking",
  author: "Shohag Miah",
  version: "1.0.0",
  totalPages: 108,
  description: "Bridge the gap between graph algorithms and real-world thinking",
}

export const chapters: Chapter[] = [
  {
    id: "1",
    chapter: 1,
    title: "What Are Graphs, Really?",
    slug: "what-are-graphs",
    part: "Part I - The Foundations of Graph Thinking",
    partNumber: 1,
    pages: 6,
    description: "Definition: nodes, edges, degrees, graph types, representations",
    keywords: ["graphs", "nodes", "edges", "adjacency"],
    lifeInsight: "Your relationships and goals form an invisible graph",
    objectives: [
      "Understand graph fundamentals",
      "Learn different graph representations",
      "Identify graph types in real-world scenarios",
    ],
    prerequisites: [],
    diagrams: ["graph-types.svg", "adjacency-list-vs-matrix.svg"],
    codeExamples: ["graph-class.py", "graph-class.cpp"],
    exercises: 3,
    difficulty: "beginner",
    readingTime: 15,
  },
  {
    id: "2",
    chapter: 2,
    title: "Trees — The Simplest Graphs",
    slug: "trees",
    part: "Part I - The Foundations of Graph Thinking",
    partNumber: 1,
    pages: 6,
    description: "Tree properties, binary trees, traversals",
    keywords: ["trees", "traversal", "binary trees"],
    lifeInsight: "Trees represent hierarchies of decisions and priorities",
    objectives: [
      "Understand tree structure and properties",
      "Implement tree traversals",
      "Apply trees to real-world problems",
    ],
    prerequisites: ["what-are-graphs"],
    diagrams: ["tree-anatomy.svg", "traversal-animations.svg"],
    codeExamples: ["tree-traversal.py", "tree-traversal.cpp"],
    exercises: 3,
    difficulty: "beginner",
    readingTime: 18,
  },
  {
    id: "5",
    chapter: 5,
    title: "Traversal Algorithms",
    slug: "traversal-algorithms",
    part: "Part II - Core Algorithms",
    partNumber: 2,
    pages: 8,
    description: "BFS, DFS, and cycle detection",
    keywords: ["BFS", "DFS", "traversal", "cycle detection"],
    lifeInsight: "BFS = explore broadly; DFS = commit deeply; Cycles = stuck loops",
    objectives: ["Implement BFS and DFS", "Detect cycles in graphs", "Apply traversals to real problems"],
    prerequisites: ["what-are-graphs"],
    diagrams: ["bfs-animation.svg", "dfs-animation.svg", "cycle-detection-states.svg"],
    codeExamples: ["bfs.py", "dfs.py", "cycle-detection.cpp"],
    exercises: 5,
    difficulty: "intermediate",
    readingTime: 20,
  },
]

export function getChapterBySlug(slug: string): Chapter | undefined {
  return chapters.find((ch) => ch.slug === slug)
}

export function getChapterIndex(slug: string): number {
  return chapters.findIndex((ch) => ch.slug === slug)
}

export function getPreviousChapter(slug: string): Chapter | undefined {
  const index = getChapterIndex(slug)
  return index > 0 ? chapters[index - 1] : undefined
}

export function getNextChapter(slug: string): Chapter | undefined {
  const index = getChapterIndex(slug)
  return index < chapters.length - 1 ? chapters[index + 1] : undefined
}
