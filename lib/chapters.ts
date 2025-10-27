export interface Chapter {
  id: string
  number: number
  title: string
  description: string
  sections: string[]
}

export const chapters: Chapter[] = [
  // PART I — FOUNDATIONS
  {
    id: "what-are-graphs",
    number: 1,
    title: "What Are Graphs, Really?",
    description: "Think of graphs as a way to show how things are connected - like a map of relationships in the world around us.",
    sections: ["Formal Definition and Mathematical Foundations", "Vertex Degree and Graph Metrics", "Graph Classifications and Structural Properties"],
  },
  {
    id: "graph-properties",
    number: 2,
    title: "Graph Properties & Special Types",
    description: "Not all graphs are created equal - understanding their special properties unlocks the right algorithms and solutions.",
    sections: ["Connectivity: The Foundation of Graph Analysis", "Cycles and Acyclic Graphs", "Bipartite Graphs", "Graph Density and Sparsity"],
  },
  {
    id: "trees",
    number: 3,
    title: "Trees — The Simplest Graphs",
    description: "Trees are everywhere - from your family tree to your computer's file system. They're the most useful special case of graphs.",
    sections: ["Tree Properties and Terminology", "Binary Trees and Search Trees", "Tree Traversal Algorithms", "Applications in Computer Science"],
  },
  {
    id: "tries",
    number: 4,
    title: "Tries and Prefix Structures",
    description: "Tries are the secret behind autocomplete, spell checkers, and fast string searches. They're trees specialized for text!",
    sections: ["Trie Data Structure and Operations", "Implementation Techniques", "String Matching Applications", "Advanced Trie Variants"],
  },
  {
    id: "heaps",
    number: 5,
    title: "Heaps and Priority Structures",
    description: "Heaps are the secret sauce behind priority queues, efficient sorting, and many graph algorithms like Dijkstra's shortest path!",
    sections: ["Heap Properties: Min-Heap and Max-Heap", "Heap Operations and Implementation", "Priority Queues and Applications", "Heap Sort and Graph Algorithm Preparation"],
  },
  
  // PART II — CORE ALGORITHMS
  {
    id: "traversal-algorithms",
    number: 6,
    title: "Traversal Algorithms",
    description: "Graph traversal is like exploring a maze - you need systematic strategies to visit every room without getting lost.",
    sections: ["Breadth-First Search (BFS)", "Depth-First Search (DFS)", "Cycle Detection Using DFS", "Applications in Social Networks and Web Crawling"],
  },
  {
    id: "shortest-path-algorithms",
    number: 7,
    title: "Shortest Path Algorithms",
    description: "Finding the shortest path is one of the most fundamental problems in computer science - from GPS navigation to network routing to game AI.",
    sections: ["Dijkstra's Algorithm", "Bellman-Ford Algorithm", "A* Algorithm with Heuristics", "Floyd-Warshall All-Pairs Shortest Path"],
  },
  {
    id: "minimum-spanning-trees",
    number: 8,
    title: "Minimum Spanning Trees",
    description: "Minimum spanning trees find the cheapest way to connect all nodes in a network - essential for designing efficient infrastructure.",
    sections: ["Kruskal's Algorithm", "Prim's Algorithm", "Union-Find Data Structure", "Applications in Network Design"],
  },
  {
    id: "topological-sorting",
    number: 9,
    title: "Topological Sorting & Dynamic Programming on DAGs",
    description: "Topological sorting solves dependency problems - from course prerequisites to build systems to project scheduling.",
    sections: ["Topological Ordering and Kahn's Algorithm", "DFS-Based Topological Sort", "Dynamic Programming on DAGs", "Longest and Shortest Paths in DAGs"],
  },
]
