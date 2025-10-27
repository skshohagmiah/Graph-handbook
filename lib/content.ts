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
    description: "Think of graphs as a way to show how things are connected - like a map of relationships in the world around us.",
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
    title: "Graph Properties & Special Types",
    slug: "graph-properties",
    part: "Part I - The Foundations of Graph Thinking",
    partNumber: 1,
    pages: 6,
    description: "Not all graphs are created equal - understanding their special properties unlocks the right algorithms and solutions.",
    keywords: ["connectivity", "cycles", "bipartite", "density"],
    lifeInsight: "Understanding relationships helps you navigate complex systems",
    objectives: [
      "Identify connected and disconnected graphs",
      "Understand cycles and their implications",
      "Recognize bipartite graph structures",
    ],
    prerequisites: ["what-are-graphs"],
    diagrams: ["connectivity-examples.svg", "bipartite-graph.svg"],
    codeExamples: ["connectivity-check.py", "bipartite-detection.cpp"],
    exercises: 4,
    difficulty: "beginner",
    readingTime: 18,
  },
  {
    id: "3",
    chapter: 3,
    title: "Trees — The Simplest Graphs",
    slug: "trees",
    part: "Part I - The Foundations of Graph Thinking",
    partNumber: 1,
    pages: 6,
    description: "Trees are everywhere - from your family tree to your computer's file system. They're the most useful special case of graphs.",
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
    id: "4",
    chapter: 4,
    title: "Tries and Prefix Structures",
    slug: "tries",
    part: "Part I - The Foundations of Graph Thinking",
    partNumber: 1,
    pages: 7,
    description: "Tries are the secret behind autocomplete, spell checkers, and fast string searches. They're trees specialized for text!",
    keywords: ["tries", "prefix", "autocomplete", "strings"],
    lifeInsight: "Efficient organization leads to faster discovery",
    objectives: [
      "Build and traverse trie data structures",
      "Implement autocomplete functionality",
      "Optimize string search operations",
    ],
    prerequisites: ["trees"],
    diagrams: ["trie-structure.svg", "autocomplete-demo.svg"],
    codeExamples: ["trie-implementation.py", "autocomplete.cpp"],
    exercises: 4,
    difficulty: "intermediate",
    readingTime: 20,
  },
  {
    id: "5",
    chapter: 5,
    title: "Heaps and Priority Structures",
    slug: "heaps",
    part: "Part I - The Foundations of Graph Thinking",
    partNumber: 1,
    pages: 7,
    description: "Heaps are the secret sauce behind priority queues, efficient sorting, and many graph algorithms like Dijkstra's shortest path!",
    keywords: ["heaps", "priority queue", "sorting"],
    lifeInsight: "Prioritizing effectively helps you focus on what matters most",
    objectives: [
      "Understand heap properties and operations",
      "Implement priority queues",
      "Apply heaps to sorting and graph algorithms",
    ],
    prerequisites: ["trees"],
    diagrams: ["heap-structure.svg", "heap-operations.svg"],
    codeExamples: ["heap-implementation.py", "priority-queue.cpp"],
    exercises: 4,
    difficulty: "intermediate",
    readingTime: 22,
  },
  {
    id: "6",
    chapter: 6,
    title: "Traversal Algorithms",
    slug: "traversal-algorithms",
    part: "Part II - Core Algorithms",
    partNumber: 2,
    pages: 8,
    description: "Graph traversal is like exploring a maze - you need systematic strategies to visit every room without getting lost.",
    keywords: ["BFS", "DFS", "traversal", "cycle detection"],
    lifeInsight: "BFS = explore broadly; DFS = commit deeply; Cycles = stuck loops",
    objectives: ["Implement BFS and DFS", "Detect cycles in graphs", "Apply traversals to real problems"],
    prerequisites: ["what-are-graphs"],
    diagrams: ["bfs-animation.svg", "dfs-animation.svg", "cycle-detection-states.svg"],
    codeExamples: ["bfs.py", "dfs.py", "cycle-detection.cpp"],
    exercises: 5,
    difficulty: "intermediate",
    readingTime: 25,
  },
  {
    id: "7",
    chapter: 7,
    title: "Shortest Path Algorithms",
    slug: "shortest-path-algorithms",
    part: "Part II - Core Algorithms",
    partNumber: 2,
    pages: 10,
    description: "Finding the shortest path is one of the most fundamental problems in computer science - from GPS navigation to network routing to game AI.",
    keywords: ["dijkstra", "bellman-ford", "a-star", "floyd-warshall"],
    lifeInsight: "The shortest path isn't always the fastest - consider all costs",
    objectives: ["Master Dijkstra's algorithm", "Handle negative weights with Bellman-Ford", "Apply A* for heuristic search"],
    prerequisites: ["traversal-algorithms", "heaps"],
    diagrams: ["dijkstra-demo.svg", "bellman-ford-example.svg", "a-star-heuristic.svg"],
    codeExamples: ["dijkstra.py", "bellman-ford.cpp", "a-star.py"],
    exercises: 6,
    difficulty: "intermediate",
    readingTime: 30,
  },
  {
    id: "8",
    chapter: 8,
    title: "Minimum Spanning Trees",
    slug: "minimum-spanning-trees",
    part: "Part II - Core Algorithms",
    partNumber: 2,
    pages: 8,
    description: "Minimum spanning trees find the cheapest way to connect all nodes in a network - essential for designing efficient infrastructure.",
    keywords: ["kruskal", "prim", "union-find", "mst"],
    lifeInsight: "Efficient connections create strong networks with minimal cost",
    objectives: ["Implement Kruskal's and Prim's algorithms", "Master Union-Find data structure", "Design efficient network infrastructures"],
    prerequisites: ["traversal-algorithms"],
    diagrams: ["kruskal-demo.svg", "prim-demo.svg", "union-find-operations.svg"],
    codeExamples: ["kruskal.py", "prim.cpp", "union-find.py"],
    exercises: 5,
    difficulty: "intermediate",
    readingTime: 28,
  },
  {
    id: "9",
    chapter: 9,
    title: "Topological Sorting & Dynamic Programming on DAGs",
    slug: "topological-sorting",
    part: "Part II - Core Algorithms",
    partNumber: 2,
    pages: 9,
    description: "Topological sorting solves dependency problems - from course prerequisites to build systems to project scheduling.",
    keywords: ["topological sort", "DAG", "dynamic programming", "dependencies"],
    lifeInsight: "Understanding dependencies helps you plan and execute complex projects",
    objectives: ["Master topological sorting algorithms", "Apply DP to DAG problems", "Solve scheduling and dependency problems"],
    prerequisites: ["traversal-algorithms"],
    diagrams: ["topological-sort-demo.svg", "dag-dp-example.svg", "project-scheduling.svg"],
    codeExamples: ["topological-sort.py", "dag-dp.cpp", "project-scheduler.py"],
    exercises: 5,
    difficulty: "advanced",
    readingTime: 32,
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
