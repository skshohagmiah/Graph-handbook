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
  
  // PART III — ADVANCED TOPICS
  {
    id: "flow-networks",
    number: 10,
    title: "Flow Networks and Optimization",
    description: "Flow networks model how resources move through systems - from water in pipes to data in networks to goods in supply chains.",
    sections: ["Max Flow Problem and Min-Cut Theorem", "Ford-Fulkerson Method", "Edmonds-Karp Algorithm", "Applications in Logistics and Supply Chain"],
  },
  {
    id: "graph-coloring",
    number: 11,
    title: "Graph Coloring & Matching",
    description: "Graph coloring solves scheduling conflicts, while matching pairs resources optimally - two fundamental problems in optimization.",
    sections: ["Greedy Coloring Algorithms", "Bipartite Matching and Maximum Matching", "Applications in Scheduling and Resource Allocation"],
  },
  {
    id: "advanced-concepts",
    number: 12,
    title: "Advanced Graph Concepts",
    description: "Understanding critical connections, strongly connected components, and special paths reveals the deep structure and vulnerabilities of networks.",
    sections: ["Articulation Points and Bridges", "Tarjan's Algorithm for SCCs", "Eulerian and Hamiltonian Paths", "Network Reliability Analysis"],
  },
  
  // PART IV — APPLIED GRAPH THINKING
  {
    id: "graphs-in-cs",
    number: 13,
    title: "Graphs in Computer Science",
    description: "Graphs are the invisible backbone of computer science - from compilers to operating systems to AI.",
    sections: ["Compilers and Abstract Syntax Trees", "Operating Systems: Scheduling and Deadlock Detection", "Databases and Graph Databases", "AI Search and Machine Learning Computation Graphs", "Web: PageRank and Social Media Algorithms"],
  },
  {
    id: "pattern-recognition",
    number: 14,
    title: "Pattern Recognition in Graphs",
    description: "Finding patterns in graphs reveals hidden structures - from tight-knit communities to influential clusters.",
    sections: ["Cliques and Complete Subgraphs", "Community Detection Algorithms", "Graph Clustering Techniques", "Applications in Social Network Analysis"],
  },
  {
    id: "real-life-decisions",
    number: 15,
    title: "Graphs in Real Life & Human Decisions",
    description: "The algorithms you've learned aren't just for computers - they're mental models for navigating life's complex decisions.",
    sections: ["Case Study: Career Pathfinding as Dijkstra's Algorithm", "Case Study: Social Network Pruning as MST", "Case Study: Goal Dependencies as Topological Sorting", "Case Study: Time Management as Graph Coloring", "Mind Mapping and Decision Making"],
  },
  {
    id: "graph-mindset",
    number: 16,
    title: "Building the Graph Mindset",
    description: "Once you see the world as graphs, you can't unsee it. Transform how you think about systems, patterns, and problems.",
    sections: ["Systems Thinking: Seeing Interconnected Graphs", "Recognizing Patterns: Cycles, Dependencies, Bottlenecks", "Framework for Analyzing Any System as a Graph", "Final Takeaway: Life is a Graph. Learn to Navigate It."],
  },
  
  // APPENDICES
  {
    id: "terminology-reference",
    number: 17,
    title: "Appendix A: Graph Terminology Reference",
    description: "Complete glossary of graph theory terms - your quick reference guide.",
    sections: ["Complete Glossary of Graph Theory Terms"],
  },
  {
    id: "complexity-table",
    number: 18,
    title: "Appendix B: Algorithm Complexity Table",
    description: "Time and space complexity for all algorithms with decision matrix.",
    sections: ["Time and Space Complexity for All Algorithms", "Algorithm Decision Matrix"],
  },
  {
    id: "practice-problems",
    number: 19,
    title: "Appendix C: Practice Problems & Solutions",
    description: "30 curated problems from easy to hard with solutions and platform links.",
    sections: ["30 Curated Problems (Easy to Hard)", "Step-by-Step Solutions", "Online Judge Platform Links"],
  },
  {
    id: "visual-cheatsheet",
    number: 20,
    title: "Appendix D: Visual Cheatsheet",
    description: "One-page summaries of graph types, algorithms, and common patterns.",
    sections: ["One-Page Summary of Graph Types", "Algorithm Decision Tree Flowchart", "Common Patterns and Solutions"],
  },
  {
    id: "further-reading",
    number: 21,
    title: "Appendix E: Further Reading & Resources",
    description: "Books, online tools, and research topics to continue your journey.",
    sections: ["Recommended Books and Papers", "Online Resources and Visualization Tools", "Research Topics for Deep Dives"],
  },
]
