import { chapters } from "./chapters"
import { remark } from "remark"
import html from "remark-html"
import remarkGfm from "remark-gfm"

export interface ChapterContent {
  id: string
  title: string
  content: string
  html: string
  metadata: {
    number: number
    description: string
  }
}

// Mock chapter content - in production, this would come from a database or API
const chapterContentMap: Record<string, string> = {
  introduction: `# Introduction to Graphs

## What is a Graph?

A graph is a fundamental data structure consisting of a set of vertices (or nodes) connected by edges. Graphs are everywhere in the real world - from social networks to transportation systems to the internet itself.

### Key Concepts

- **Vertices (Nodes)**: The fundamental units in a graph
- **Edges**: Connections between vertices
- **Directed vs Undirected**: Whether edges have direction
- **Weighted vs Unweighted**: Whether edges have associated values

## Graph Terminology

- **Degree**: Number of edges connected to a vertex
- **Path**: A sequence of vertices connected by edges
- **Cycle**: A path that starts and ends at the same vertex
- **Connected Component**: A subgraph where every vertex is reachable from every other vertex

## Why Graphs Matter

Graphs are incredibly powerful because they can model relationships and connections in almost any domain. They help us understand complex systems and solve real-world problems efficiently.

## Real-World Applications

- Social networks (Facebook, Twitter)
- GPS and navigation systems
- Recommendation algorithms
- Web crawling and search engines
- Biological networks
- Transportation networks`,

  "graph-representations": `# Graph Representations

## Adjacency List

An adjacency list represents a graph as a collection of lists. For each vertex, we maintain a list of all vertices it connects to.

\`\`\`python
# Adjacency List representation
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D'],
    'C': ['A', 'D'],
    'D': ['B', 'C']
}
\`\`\`

**Pros**: Space efficient for sparse graphs, easy to iterate over neighbors
**Cons**: Slower edge lookup

## Adjacency Matrix

An adjacency matrix is a 2D array where entry (i,j) represents the edge between vertices i and j.

\`\`\`python
# Adjacency Matrix representation
graph = [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [0, 1, 1, 0]
]
\`\`\`

**Pros**: Fast edge lookup, good for dense graphs
**Cons**: Uses more space for sparse graphs

## Edge List

An edge list is simply a list of all edges in the graph.

\`\`\`python
# Edge List representation
edges = [
    ('A', 'B'),
    ('A', 'C'),
    ('B', 'D'),
    ('C', 'D')
]
\`\`\`

## Choosing the Right Representation

- Use adjacency lists for sparse graphs
- Use adjacency matrices for dense graphs
- Use edge lists for algorithms that process edges`,

  "bfs-dfs": `# Breadth-First & Depth-First Search

## BFS Explained

Breadth-First Search explores vertices level by level, visiting all neighbors before moving deeper.

\`\`\`python
from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    visited.add(start)
    
    while queue:
        vertex = queue.popleft()
        print(vertex)
        
        for neighbor in graph[vertex]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
\`\`\`

**Time Complexity**: O(V + E)
**Space Complexity**: O(V)

## DFS Explained

Depth-First Search explores as far as possible along each branch before backtracking.

\`\`\`python
def dfs(graph, vertex, visited=None):
    if visited is None:
        visited = set()
    
    visited.add(vertex)
    print(vertex)
    
    for neighbor in graph[vertex]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)
\`\`\`

**Time Complexity**: O(V + E)
**Space Complexity**: O(V)

## Implementation

Both BFS and DFS can be implemented iteratively or recursively. Choose based on your needs.

## Time & Space Complexity

Both algorithms have the same time complexity but different space characteristics. BFS uses a queue while DFS uses a stack (or recursion).`,
}

// Get all chapter IDs
export function getChapterIds(): string[] {
  return chapters.map((c) => c.id)
}

// Get chapter content by ID
export async function getChapterContent(id: string): Promise<ChapterContent> {
  const chapter = chapters.find((c) => c.id === id)

  if (!chapter) {
    throw new Error(`Chapter not found: ${id}`)
  }

  const markdown = chapterContentMap[id] || `# ${chapter.title}\n\n${chapter.description}`

  // Convert markdown to HTML
  const processedContent = await remark().use(remarkGfm).use(html, { sanitize: false }).process(markdown)

  const htmlContent = String(processedContent)

  return {
    id,
    title: chapter.title,
    content: markdown,
    html: htmlContent,
    metadata: {
      number: chapter.number,
      description: chapter.description,
    },
  }
}

// Get all chapters content
export async function getAllChaptersContent(): Promise<ChapterContent[]> {
  const ids = getChapterIds()
  const chapterContents = await Promise.all(ids.map((id) => getChapterContent(id)))
  return chapterContents.sort((a, b) => a.metadata.number - b.metadata.number)
}
