export interface Chapter {
  id: string
  number: number
  title: string
  description: string
  sections: string[]
}

export const chapters: Chapter[] = [
  {
    id: "introduction",
    number: 1,
    title: "Introduction to Graphs",
    description: "Understand what graphs are, why they matter, and how they model real-world systems.",
    sections: ["What is a Graph?", "Graph Terminology", "Why Graphs Matter", "Real-World Applications"],
  },
  {
    id: "graph-representations",
    number: 2,
    title: "Graph Representations",
    description: "Learn different ways to represent graphs in code: adjacency lists, matrices, and edge lists.",
    sections: ["Adjacency List", "Adjacency Matrix", "Edge List", "Choosing the Right Representation"],
  },
  {
    id: "bfs-dfs",
    number: 3,
    title: "Breadth-First & Depth-First Search",
    description: "Master the two fundamental graph traversal algorithms.",
    sections: ["BFS Explained", "DFS Explained", "Implementation", "Time & Space Complexity"],
  },
  {
    id: "shortest-paths",
    number: 4,
    title: "Shortest Path Algorithms",
    description: "Find the shortest path between nodes using Dijkstra's and Bellman-Ford algorithms.",
    sections: ["Dijkstra's Algorithm", "Bellman-Ford Algorithm", "A* Search", "Applications"],
  },
  {
    id: "minimum-spanning-tree",
    number: 5,
    title: "Minimum Spanning Trees",
    description: "Connect all nodes with minimum total weight using Kruskal's and Prim's algorithms.",
    sections: ["MST Concepts", "Kruskal's Algorithm", "Prim's Algorithm", "Real-World Uses"],
  },
  {
    id: "topological-sort",
    number: 6,
    title: "Topological Sorting",
    description: "Order nodes in a directed acyclic graph respecting dependencies.",
    sections: ["DAG Concepts", "Topological Sort Algorithm", "Kahn's Algorithm", "Task Scheduling"],
  },
  {
    id: "strongly-connected",
    number: 7,
    title: "Strongly Connected Components",
    description: "Identify groups of nodes that can reach each other.",
    sections: ["SCC Concepts", "Tarjan's Algorithm", "Kosaraju's Algorithm", "Applications"],
  },
  {
    id: "bipartite-graphs",
    number: 8,
    title: "Bipartite Graphs & Matching",
    description: "Work with two-colored graphs and find maximum matchings.",
    sections: ["Bipartite Graph Detection", "Maximum Matching", "Hungarian Algorithm", "Use Cases"],
  },
  {
    id: "network-flow",
    number: 9,
    title: "Network Flow",
    description: "Model and solve flow problems using Ford-Fulkerson and other algorithms.",
    sections: ["Flow Concepts", "Ford-Fulkerson Algorithm", "Max Flow Min Cut", "Applications"],
  },
  {
    id: "graph-coloring",
    number: 10,
    title: "Graph Coloring",
    description: "Assign colors to nodes such that no adjacent nodes share the same color.",
    sections: ["Coloring Problem", "Greedy Coloring", "Chromatic Number", "Practical Applications"],
  },
  {
    id: "trees-advanced",
    number: 11,
    title: "Advanced Tree Algorithms",
    description: "Explore binary search trees, AVL trees, and other advanced tree structures.",
    sections: ["Binary Search Trees", "AVL Trees", "Red-Black Trees", "Tree Balancing"],
  },
  {
    id: "dynamic-programming-graphs",
    number: 12,
    title: "Dynamic Programming on Graphs",
    description: "Combine DP with graph algorithms for optimal solutions.",
    sections: ["DP Concepts", "Longest Path", "Traveling Salesman Problem", "Optimization"],
  },
  {
    id: "graph-applications",
    number: 13,
    title: "Real-World Graph Applications",
    description: "See how graphs solve problems in social networks, maps, and more.",
    sections: ["Social Networks", "GPS & Navigation", "Recommendation Systems", "Web Crawling"],
  },
  {
    id: "life-graphs",
    number: 14,
    title: "Graphs in Life & Career",
    description: "Apply graph thinking to relationships, career decisions, and personal growth.",
    sections: ["Relationship Networks", "Career Paths", "Decision Making", "System Thinking"],
  },
  {
    id: "advanced-topics",
    number: 15,
    title: "Advanced Topics & Future Directions",
    description: "Explore cutting-edge graph algorithms and emerging applications.",
    sections: ["Graph Neural Networks", "Quantum Graph Algorithms", "Distributed Graphs", "Research Frontiers"],
  },
]
