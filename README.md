📘 GRAPH ALGORITHMS HANDBOOK - PROJECT DOCUMENTATION
═══════════════════════════════════════════════════════════════════════════════

PROJECT OVERVIEW

A dual-purpose project that maintains the book content in Markdown and serves it
through a Next.js web application. Users can read online or download as PDF.

Technology Stack:
• Next.js 14+ (App Router) + TypeScript
• Tailwind CSS for styling
• Markdown for content authoring
• Puppeteer for PDF generation
• React Markdown for rendering

═══════════════════════════════════════════════════════════════════════════════

📁 PROJECT STRUCTURE

graph-algorithms-handbook/
│
├── app/                                    # Next.js application
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx                   # Homepage
│   │   │   ├── layout.tsx                 # Root layout
│   │   │   ├── globals.css                # Global styles
│   │   │   │
│   │   │   ├── chapters/
│   │   │   │   ├── page.tsx               # All chapters list
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx           # Dynamic chapter page
│   │   │   │
│   │   │   ├── download/
│   │   │   │   └── page.tsx               # Download page
│   │   │   │
│   │   │   ├── about/
│   │   │   │   └── page.tsx               # About the book
│   │   │   │
│   │   │   └── print/
│   │   │       └── page.tsx               # Print-optimized full book
│   │   │
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Sidebar.tsx            # Navigation sidebar
│   │   │   │   ├── Header.tsx             # Top navigation
│   │   │   │   └── Footer.tsx             # Footer
│   │   │   │
│   │   │   ├── book/
│   │   │   │   ├── ChapterContent.tsx     # Markdown renderer
│   │   │   │   ├── TableOfContents.tsx    # TOC component
│   │   │   │   ├── ChapterNavigation.tsx  # Prev/Next buttons
│   │   │   │   └── ProgressBar.tsx        # Reading progress
│   │   │   │
│   │   │   ├── markdown/
│   │   │   │   ├── CodeBlock.tsx          # Syntax highlighted code
│   │   │   │   ├── InsightBox.tsx         # 💡⚙️🔍 boxes
│   │   │   │   ├── Diagram.tsx            # SVG/Mermaid diagrams
│   │   │   │   └── MDXComponents.tsx      # Custom MD components
│   │   │   │
│   │   │   └── ui/
│   │   │       ├── Button.tsx
│   │   │       ├── Card.tsx
│   │   │       └── ThemeToggle.tsx        # Dark/Light mode
│   │   │
│   │   ├── lib/
│   │   │   ├── markdown.ts                # MD parsing utilities
│   │   │   ├── content.ts                 # Content fetching
│   │   │   ├── pdf-generator.ts           # PDF generation logic
│   │   │   └── utils.ts                   # Helper functions
│   │   │
│   │   └── styles/
│   │       ├── markdown.css               # Markdown styling
│   │       └── print.css                  # Print-specific styles
│   │
│   ├── public/
│   │   ├── book.pdf                       # Generated PDF
│   │   ├── images/
│   │   │   ├── cover.png                  # Book cover
│   │   │   └── og-image.png               # Social sharing image
│   │   └── fonts/                         # Custom fonts if needed
│   │
│   ├── scripts/
│   │   └── generate-pdf.js                # PDF build script
│   │
│   ├── package.json
│   ├── next.config.js
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   └── .env.local
│
├── book/                                   # Book content (Markdown)
│   ├── metadata.json                      # Book info, chapter order
│   │
│   ├── chapters/
│   │   ├── part-1-foundations/
│   │   │   ├── 01-what-are-graphs.md
│   │   │   ├── 02-trees.md
│   │   │   ├── 03-tries.md
│   │   │   └── 04-graph-properties.md
│   │   │
│   │   ├── part-2-core-algorithms/
│   │   │   ├── 05-traversal-algorithms.md
│   │   │   ├── 06-shortest-path.md
│   │   │   ├── 07-minimum-spanning-trees.md
│   │   │   └── 08-topological-sorting-dp.md
│   │   │
│   │   ├── part-3-advanced-topics/
│   │   │   ├── 09-flow-networks.md
│   │   │   ├── 10-graph-coloring.md
│   │   │   └── 11-advanced-concepts.md
│   │   │
│   │   └── part-4-applied-thinking/
│   │       ├── 12-graphs-in-cs.md
│   │       ├── 13-pattern-recognition.md
│   │       ├── 14-real-life-decisions.md
│   │       └── 15-graph-mindset.md
│   │
│   ├── appendices/
│   │   ├── a-terminology.md
│   │   ├── b-complexity-table.md
│   │   ├── c-practice-problems.md
│   │   ├── d-visual-cheatsheet.md
│   │   └── e-further-reading.md
│   │
│   ├── diagrams/                          # All diagrams/images
│   │   ├── chapter-01/
│   │   │   ├── graph-types.svg
│   │   │   ├── adjacency-list.svg
│   │   │   └── adjacency-matrix.svg
│   │   ├── chapter-02/
│   │   │   ├── tree-structure.svg
│   │   │   └── traversals.svg
│   │   └── ...
│   │
│   └── code-examples/                     # Standalone code files
│       ├── python/
│       │   ├── bfs.py
│       │   ├── dfs.py
│       │   └── dijkstra.py
│       └── cpp/
│           ├── bfs.cpp
│           ├── dfs.cpp
│           └── dijkstra.cpp
│
├── .gitignore
├── README.md
└── LICENSE

═══════════════════════════════════════════════════════════════════════════════

📖 COMPLETE BOOK STRUCTURE (book/metadata.json)

{
  "book": {
    "title": "Graphs, Trees & Algorithms Handbook",
    "subtitle": "A Practical Guide to Data Structures, Problem Solving, and Real-World Thinking",
    "author": "Shohag Miah",
    "version": "1.0.0",
    "totalPages": 108,
    "description": "Bridge the gap between graph algorithms and real-world thinking"
  },
  "parts": [
    {
      "id": "part-1",
      "title": "Part I - The Foundations of Graph Thinking",
      "pages": 24,
      "chapters": [...]
    },
    ...
  ]
}

═══════════════════════════════════════════════════════════════════════════════

📚 DETAILED CHAPTER MENU

PART I — THE FOUNDATIONS OF GRAPH THINKING (24 pages)

Chapter 1: What Are Graphs, Really? (6 pages)
  Slug: what-are-graphs
  File: book/chapters/part-1-foundations/01-what-are-graphs.md
  
  Topics:
  • Definition: nodes (vertices), edges, degrees
  • Graph types: Directed, Undirected, Weighted, Unweighted
  • Cyclic vs Acyclic structures
  • Representations: Adjacency List, Matrix, Edge List
  • Space/time tradeoffs for different representations
  
  Real-World Examples:
  • Social networks (Facebook, Twitter)
  • City road systems
  • Knowledge graphs
  • Goal hierarchies
  
  Diagrams:
  • graph-types.svg - Visual comparison of graph types
  • adjacency-list-vs-matrix.svg - Memory layout comparison
  • social-network-example.svg - Real-world graph
  
  Code Examples:
  • Graph class implementation (Python & C++)
  • Adjacency list vs matrix benchmarks
  
  💡 Life Insight: "Your relationships and goals form an invisible graph"
  
  Exercises:
  1. Draw your social circle as a graph
  2. Compare space complexity for sparse vs dense graphs
  3. Identify directed/undirected scenarios

───────────────────────────────────────────────────────────────────────────────

Chapter 2: Trees — The Simplest Graphs (6 pages)
  Slug: trees
  File: book/chapters/part-1-foundations/02-trees.md
  
  Topics:
  • Tree definition: connected, acyclic, N−1 edges
  • Tree properties: height, depth, leaf/internal nodes
  • Binary Trees, N-ary Trees, Binary Search Trees
  • Traversals: Preorder, Inorder, Postorder, Level-order
  • Recursive vs iterative implementations
  
  Applications:
  • File systems and directories
  • Family trees
  • Organizational hierarchies
  • Decision trees (ML)
  • HTML DOM
  
  Diagrams:
  • tree-anatomy.svg - Root, parent, child, siblings
  • traversal-animations.svg - Step-by-step traversals
  • filesystem-tree.svg - Real directory structure
  
  Code Examples:
  • TreeNode class
  • All four traversal implementations
  • Height/depth calculation
  
  💡 Life Insight: "Trees represent hierarchies of decisions and priorities"
  
  Exercises:
  1. Draw career progression as a tree
  2. Implement three traversals
  3. Calculate height and depth

───────────────────────────────────────────────────────────────────────────────

Chapter 3: Tries and Prefix Structures (6 pages)
  Slug: tries
  File: book/chapters/part-1-foundations/03-tries.md
  
  Topics:
  • Trie definition and structure
  • Insert, search, prefix matching operations
  • Space optimization techniques
  • Comparison with hash tables
  
  Applications:
  • Autocomplete systems (Google, IDEs)
  • Spell checkers
  • IP routing tables
  • T9 keyboard input
  • DNA sequence analysis
  
  Diagrams:
  • trie-construction.svg - Building ["cat", "car", "card"]
  • memory-comparison.svg - Trie vs array of strings
  • autocomplete-flow.svg - Search process
  
  Code Examples:
  • TrieNode structure
  • Insert/search/prefix operations
  • Autocomplete with top-k suggestions
  
  💡 Life Insight: "Structured memory enables faster decision-making"
  
  Exercises:
  1. Build trie for 10 words
  2. Implement autocomplete
  3. Calculate space savings

───────────────────────────────────────────────────────────────────────────────

Chapter 4: Graph Properties & Special Types (6 pages)
  Slug: graph-properties
  File: book/chapters/part-1-foundations/04-graph-properties.md
  
  Topics:
  • Connected vs Disconnected graphs
  • Strongly Connected Components (SCCs)
  • Directed Acyclic Graphs (DAGs) - why they matter
  • Bipartite graphs and 2-coloring
  • Complete graphs, Sparse vs Dense
  • Planar graphs
  
  Key Concepts:
  • DAGs enable topological sorting (no infinite loops)
  • Bipartite graphs for matching problems
  • Graph density affects algorithm choice
  
  Applications:
  • DAGs: Build systems, course prerequisites, scheduling
  • Bipartite: Job matching, resource allocation
  • SCCs: Web ranking, social analysis
  
  Diagrams:
  • graph-properties-chart.svg - Comparison table
  • scc-detection.svg - Finding strongly connected components
  • bipartite-coloring.svg - 2-coloring demonstration
  
  Code Examples:
  • Bipartite checking algorithm
  • SCC detection (Kosaraju's algorithm)
  • DAG validation
  
  💡 Life Insight: "Understanding structure reveals solutions"
  
  Exercises:
  1. Check if graph is bipartite
  2. Find all SCCs
  3. Convert cyclic system to DAG

═══════════════════════════════════════════════════════════════════════════════

PART II — CORE ALGORITHMS (32 pages)

Chapter 5: Traversal Algorithms (8 pages)
  Slug: traversal-algorithms
  File: book/chapters/part-2-core-algorithms/05-traversal-algorithms.md
  
  Topics:
  • Breadth-First Search (BFS): Queue-based, level exploration
  • Depth-First Search (DFS): Stack/recursion, deep exploration
  • BFS applications: Shortest path (unweighted), level-order
  • DFS applications: Topological sort, pathfinding, backtracking
  • Cycle Detection: Using DFS with color states (white/gray/black)
  
  Comparison:
  ┌──────────────┬──────────────┬──────────────────┐
  │ Aspect       │ BFS          │ DFS              │
  ├──────────────┼──────────────┼──────────────────┤
  │ Structure    │ Queue        │ Stack/Recursion  │
  │ Memory       │ O(width)     │ O(height)        │
  │ Use Case     │ Shortest     │ Exploration      │
  └──────────────┴──────────────┴──────────────────┘
  
  Applications:
  • Social networks: Friend suggestions (BFS), communities (DFS)
  • Web crawlers: Breadth-first discovery
  • Maze solving: DFS with backtracking
  • Dependency resolution: Cycle detection
  
  Diagrams:
  • bfs-animation.svg - Level-by-level expansion
  • dfs-animation.svg - Deep exploration path
  • cycle-detection-states.svg - White/gray/black visualization
  • comparison-example.svg - Same graph, both algorithms
  
  Code Examples:
  • BFS implementation (iterative)
  • DFS implementation (recursive & iterative)
  • Cycle detection with color states
  • Shortest path in unweighted graph (BFS)
  
  💡 Life Insight: "BFS = explore broadly; DFS = commit deeply; Cycles = stuck loops"
  
  ⚙️ Algorithm Insights:
  • BFS guarantees shortest path in unweighted graphs
  • DFS uses less memory for narrow, deep graphs
  • Cycle detection prevents infinite loops in dependencies
  
  🔍 Common Pitfalls:
  • Forgetting visited set → infinite loops
  • Using DFS for shortest path → wrong results
  • Not handling disconnected components
  
  Exercises:
  1. Implement BFS and DFS from scratch
  2. Find shortest path in maze using BFS
  3. Detect cycle in directed graph
  4. Compare memory usage: wide vs deep graphs
  5. Find all connected components

───────────────────────────────────────────────────────────────────────────────

Chapter 6: Shortest Path Algorithms (8 pages)
  Slug: shortest-path
  File: book/chapters/part-2-core-algorithms/06-shortest-path.md
  
  Topics:
  • Dijkstra's Algorithm: Greedy, non-negative weights
  • Bellman-Ford: Handles negative weights, detects cycles
  • A* Algorithm: Heuristic-guided search
  • Floyd-Warshall: All-pairs shortest paths
  • When to use which algorithm
  
  Algorithm Comparison:
  ┌──────────────┬──────────────┬──────────┬────────────────┐
  │ Algorithm    │ Complexity   │ Negative │ Use Case       │
  ├──────────────┼──────────────┼──────────┼────────────────┤
  │ Dijkstra     │ O(E log V)   │ No       │ GPS, networks  │
  │ Bellman-Ford │ O(VE)        │ Yes      │ Arbitrage      │
  │ A*           │ O(E log V)   │ No       │ Game AI        │
  │ Floyd-W      │ O(V³)        │ Yes      │ Dense graphs   │
  └──────────────┴──────────────┴──────────┴────────────────┘
  
  Applications:
  • GPS navigation and route planning
  • Network packet routing
  • Game AI pathfinding
  • Currency arbitrage detection
  • Social network distance ("6 degrees")
  
  Diagrams:
  • dijkstra-steps.svg - Priority queue visualization
  • bellman-ford-relaxation.svg - Edge relaxation process
  • astar-heuristic.svg - Heuristic guiding search
  • negative-cycle.svg - Detecting negative weight cycles
  
  Code Examples:
  • Dijkstra with priority queue
  • Bellman-Ford with negative cycle detection
  • A* with Manhattan distance heuristic
  • Floyd-Warshall for all-pairs
  
  💡 Life Insight: "Finding efficient routes in career/life = Dijkstra's algorithm"
  
  ⚙️ Algorithm Insights:
  • Dijkstra fails with negative edges (greedy assumption breaks)
  • A* = Dijkstra + heuristic function h(n)
  • Bellman-Ford relaxes all edges V-1 times
  
  🔍 Common Pitfalls:
  • Using Dijkstra with negative edges
  • Not checking if better path exists
  • Inadmissible heuristic in A* (h(n) > actual cost)
  
  Exercises:
  1. Implement Dijkstra for road network
  2. Detect negative cycle with Bellman-Ford
  3. Compare A* vs Dijkstra on grid
  4. Calculate "6 degrees of separation"
  5. Optimize A* heuristic for specific problem

───────────────────────────────────────────────────────────────────────────────

Chapter 7: Minimum Spanning Trees (8 pages)
  Slug: minimum-spanning-trees
  File: book/chapters/part-2-core-algorithms/07-minimum-spanning-trees.md
  
  Topics:
  • MST definition: Connect all nodes, minimum total weight
  • Kruskal's Algorithm: Sort edges, union-find
  • Prim's Algorithm: Grow tree from start node
  • Union-Find (Disjoint Set Union) data structure
  • Comparison and when to use each
  
  Algorithm Comparison:
  ┌───────────┬──────────────┬──────────────┬─────────────┐
  │ Algorithm │ Approach     │ Complexity   │ Best For    │
  ├───────────┼──────────────┼──────────────┼─────────────┤
  │ Kruskal   │ Edge-based   │ O(E log E)   │ Sparse      │
  │ Prim      │ Node-based   │ O(E log V)   │ Dense       │
  └───────────┴──────────────┴──────────────┴─────────────┘
  
  Applications:
  • Network design (minimize cable length)
  • Transportation planning (roads, railways)
  • Circuit design
  • Cluster analysis
  • TSP approximation
  
  Diagrams:
  • kruskal-steps.svg - Edges added in weight order
  • prim-growth.svg - Tree growing from root
  • union-find-structure.svg - Tree representation
  • mst-example.svg - Complete MST construction
  
  Code Examples:
  • Union-Find with path compression & union by rank
  • Kruskal's algorithm
  • Prim's algorithm with priority queue
  • MST weight calculation
  
  💡 Life Insight: "Connect everything important with minimal waste"
  
  ⚙️ Algorithm Insights:
  • Kruskal better for sparse graphs (few edges)
  • Prim better for dense graphs (many edges)
  • Both produce same MST weight (structure may vary)
  
  🔍 Common Pitfalls:
  • Forgetting cycle check in Kruskal
  • Not using path compression (slow Union-Find)
  • Assuming MST is unique
  
  Exercises:
  1. Implement both algorithms
  2. Design minimum-cost network for 10 cities
  3. Prove MST edge removal disconnects graph
  4. Find second-best MST
  5. Solve cluster analysis with MST

───────────────────────────────────────────────────────────────────────────────

Chapter 8: Topological Sorting & DP on DAGs (8 pages)
  Slug: topological-sorting-dp
  File: book/chapters/part-2-core-algorithms/08-topological-sorting-dp.md
  
  Topics:
  
  PART A: Topological Sorting
  • Definition: Linear ordering of DAG vertices
  • Kahn's Algorithm (BFS-based, in-degree)
  • DFS-based approach (postorder reversal)
  • Detecting if topological sort exists
  
  PART B: Dynamic Programming on DAGs
  • Why DAGs are perfect for DP (no cycles)
  • Longest path in DAG
  • Shortest path in DAG (without negative weights constraint)
  • Counting paths
  • Memoization on DAG structure
  
  Applications:
  • Build systems (make, gradle)
  • Course prerequisite scheduling
  • Project planning (PERT/CPM)
  • Compiler dependency resolution
  • Task scheduling with dependencies
  
  Diagrams:
  • topological-order.svg - Valid ordering example
  • kahns-algorithm.svg - In-degree reduction steps
  • dfs-topological.svg - Postorder traversal
  • dag-dp.svg - DP state transitions
  • critical-path.svg - Longest path (project scheduling)
  
  Code Examples:
  • Kahn's algorithm implementation
  • DFS-based topological sort
  • Longest path in DAG (DP)
  • Count all paths from source to target
  • Critical path method (CPM)
  
  💡 Life Insight: "Some goals must come before others - respect dependencies"
  
  ⚙️ Algorithm Insights:
  • Topological sort exists iff graph is DAG
  • DP on DAG avoids memoization of visited states
  • Longest path NP-hard in general, polynomial in DAGs
  
  🔍 Common Pitfalls:
  • Trying to topologically sort cyclic graph
  • Not checking for cycles before DP
  • Wrong DP state transition order
  
  Exercises:
  1. Implement both topological sort methods
  2. Schedule courses with prerequisites
  3. Find critical path in project network
  4. Count all paths in DAG
  5. Solve "Longest Increasing Subsequence" as DAG problem

═══════════════════════════════════════════════════════════════════════════════

PART III — ADVANCED TOPICS (20 pages)

Chapter 9: Flow Networks and Optimization (7 pages)
  Slug: flow-networks
  File: book/chapters/part-3-advanced-topics/09-flow-networks.md
  
  Topics:
  • Flow networks: source, sink, capacity
  • Max flow problem definition
  • Min-cut max-flow theorem
  • Ford-Fulkerson method
  • Edmonds-Karp algorithm (BFS-based)
  • Bottleneck analysis
  
  Applications:
  • Logistics and supply chain
  • Network bandwidth allocation
  • Data streaming optimization
  • Bipartite matching (as max flow)
  • Image segmentation
  
  Diagrams:
  • flow-network.svg - Basic network structure
  • residual-graph.svg - Residual capacity concept
  • augmenting-path.svg - Finding augmenting paths
  • min-cut.svg - Min-cut visualization
  
  Code Examples:
  • Ford-Fulkerson implementation
  • Edmonds-Karp with BFS
  • Max flow calculation
  • Min-cut finding
  
  💡 Life Insight: "Manage capacity and energy like flow networks"
  
  Exercises:
  1. Implement Edmonds-Karp
  2. Solve bipartite matching with max flow
  3. Find bottleneck in supply chain
  4. Calculate network reliability

───────────────────────────────────────────────────────────────────────────────

Chapter 10: Graph Coloring & Matching (7 pages)
  Slug: graph-coloring
  File: book/chapters/part-3-advanced-topics/10-graph-coloring.md
  
  Topics:
  • Graph coloring problem
  • Greedy coloring algorithm
  • Chromatic number
  • Bipartite matching revisited
  • Maximum matching algorithms
  • Hungarian algorithm
  
  Applications:
  • Exam scheduling
  • Resource allocation
  • Register allocation in compilers
  • Frequency assignment
  • Map coloring
  
  Diagrams:
  • graph-coloring.svg - Coloring example
  • bipartite-matching.svg - Maximum matching
  • scheduling-conflict.svg - Real-world application
  
  Code Examples:
  • Greedy coloring
  • Bipartite matching
  • Conflict detection
  
  💡 Life Insight: "Balance commitments without conflicts"
  
  Exercises:
  1. Implement greedy coloring
  2. Schedule exams with conflict resolution
  3. Solve maximum bipartite matching
  4. Find chromatic number

───────────────────────────────────────────────────────────────────────────────

Chapter 11: Advanced Graph Concepts (6 pages)
  Slug: advanced-concepts
  File: book/chapters/part-3-advanced-topics/11-advanced-concepts.md
  
  Topics:
  • Articulation points (cut vertices)
  • Bridges (cut edges)
  • Tarjan's algorithm for SCCs
  • Eulerian paths and circuits
  • Hamiltonian paths
  • Network reliability
  
  Applications:
  • Network vulnerability analysis
  • Critical infrastructure identification
  • Circuit verification
  • Chinese Postman Problem
  • Traveling Salesman Problem
  
  Diagrams:
  • articulation-points.svg
  • bridges.svg
  • eulerian-path.svg
  
  Code Examples:
  • Finding articulation points
  • Tarjan's SCC algorithm
  • Eulerian path detection
  
  Exercises:
  1. Find all bridges in network
  2. Implement Tarjan's algorithm
  3. Check if Eulerian path exists

═══════════════════════════════════════════════════════════════════════════════

PART IV — APPLIED GRAPH THINKING (22 pages)

Chapter 12: Graphs in Computer Science (6 pages)
  Slug: graphs-in-cs
  File: book/chapters/part-4-applied-thinking/12-graphs-in-cs.md
  
  Topics:
  • Compilers: Abstract Syntax Trees, control flow graphs
  • Operating Systems: process scheduling, deadlock detection
  • Databases: query optimization, graph databases (Neo4j)
  • AI: state space search, game trees, alpha-beta pruning
  • Machine Learning: computation graphs (TensorFlow, PyTorch)
  • Web: PageRank algorithm, social media algorithms, crawlers
  
  Real Systems:
  • Google's PageRank
  • Facebook's social graph
  • Git version control (DAG of commits)
  • Package managers (dependency graphs)
  
  Diagrams:
  • compiler-cfg.svg - Control flow graph
  • pagerank-example.svg - Web page ranking
  • ml-computation-graph.svg - Neural network as graph
  
  Code Examples:
  • Simple PageRank implementation
  • Deadlock detection
  • Dependency resolution
  
  Exercises:
  1. Implement simplified PageRank
  2. Detect deadlock in process graph
  3. Build dependency resolver

───────────────────────────────────────────────────────────────────────────────

Chapter 13: Pattern Recognition in Graphs (6 pages)
  Slug: pattern-recognition
  File: book/chapters/part-4-applied-thinking/13-pattern-recognition.md
  
  Topics:
  • Cliques and complete subgraphs
  • Community detection algorithms
  • Modularity optimization
  • Label propagation
  • Connected components
  • Graph clustering techniques
  
  Applications:
  • Social network analysis
  • Recommendation systems
  • Fraud detection
  • Protein interaction networks
  • Knowledge graph analysis
  
  Diagrams:
  • clique-detection.svg
  • community-structure.svg
  • clustering-example.svg
  
  Code Examples:
  • Finding maximum clique
  • Community detection
  • Graph clustering
  
  💡 Life Insight: "Identify communities that reinforce each other"
  
  Exercises:
  1. Find all cliques in social network
  2. Detect communities in graph
  3. Build recommendation system

───────────────────────────────────────────────────────────────────────────────

Chapter 14: Graphs in Real Life & Human Decisions (6 pages)
  Slug: real-life-decisions
  File: book/chapters/part-4-applied-thinking/14-real-life-decisions.md
  
  Content:
  
  CASE STUDY 1: Career Pathfinding as Dijkstra's Algorithm
  • Skills as nodes, learning paths as edges
  • Each edge has "cost" (time, effort, money)
  • Goal: Find minimum cost path to dream career
  • Example: Software Engineer → AI Researcher
  
  CASE STUDY 2: Social Network Pruning as MST
  • Relationships as weighted graph
  • Edge weight = relationship value/strength
  • MST = maintain most valuable connections
  • Minimize emotional energy, maximize value
  
  CASE STUDY 3: Goal Dependencies as Topological Sorting
  • Goals as nodes, prerequisites as edges
  • Some goals must come before others
  • Topological sort = optimal goal ordering
  • Example: Learning path for becoming full-stack dev
  
  CASE STUDY 4: Time Management as Graph Coloring
  • Tasks as nodes, conflicts as edges
  • Colors = time slots
  • No two conflicting tasks in same slot
  • Minimize number of time slots needed
  
  Additional Topics:
  • Mind mapping as graph visualization
  • Decision trees for uncertain choices
  • Network effects in business
  • Feedback loops in habits
  
  Diagrams:
  • career-path-graph.svg
  • relationship-mst.svg
  • goal-dependency-dag.svg
  • time-management-coloring.svg
  
  Practical Exercises:
  1. Map your career path as weighted graph
  2. Identify your relationship MST
  3. Create goal dependency DAG
  4. Color-code your weekly schedule
  5. Build personal decision framework
  
  💡 Life Insight: "Apply algorithmic thinking to life's complex decisions"

───────────────────────────────────────────────────────────────────────────────

Chapter 15: Building the Graph Mindset (4 pages)
  Slug: graph-mindset
  File: book/chapters/part-4-applied-thinking/15-graph-mindset.md
  
  Topics:
  
  SYSTEMS THINKING:
  • See the world as interconnected graphs
  • Everything is nodes and edges
  • Understand relationships, not just objects
  
  RECOGNIZING PATTERNS:
  • Cycles = feedback loops (good or bad)
  • Dependencies = edges with direction
  • Priorities = edge weights
  • Bottlenecks = articulation points
  • Communities = strongly connected subgraphs
  
  FRAMEWORK FOR ANALYSIS:
  Step 1: Identify the nodes (entities, people, goals, tasks)
  Step 2: Identify the edges (relationships, dependencies, flows)
  Step 3: Classify the graph (directed? weighted? cyclic?)
  Step 4: Choose the right algorithm (traversal? shortest path? MST?)
  Step 5: Apply and iterate
  
  REAL-WORLD APPLICATIONS:
  • Business: Supply chain as flow network
  • Personal: Habit formation as cycle detection
  • Learning: Knowledge graph for skill building
  • Teams: Communication network analysis
  • Projects: Task dependencies as DAG
  
  Diagrams:
  • systems-thinking.svg - World as graph
  • pattern-recognition.svg - Common patterns
  • analysis-framework.svg - Decision flowchart
  
  Final Wisdom:
  • Every complex system is a graph
  • Understanding graphs = understanding systems
  • Graph algorithms = mental models for problem-solving
  
  💡 Ultimate Takeaway: "Life is a graph. Learn to navigate it."
  
  Reflection Questions:
  1. What graph patterns do you see in your daily life?
  2. Which algorithms apply to your current challenges?
  3. How can you optimize your personal "graph"?

═══════════════════════════════════════════════════════════════════════════════

APPENDICES (10 pages)

Appendix A: Graph Terminology Reference (2 pages)
  File: book/appendices/a-terminology.md
  
  Complete glossary:
  • Node/Vertex - Basic unit
  • Edge/Arc - Connection between nodes
  • Degree - Number of edges connected to node
  • Path - Sequence of edges
  • Cycle - Path that starts and ends at same node
  • Connected - Path exists between any two nodes
  • Component - Maximal connected subgraph
  • Tree - Connected acyclic graph
  • DAG - Directed Acyclic Graph
  • Bipartite - Two-colorable graph
  • Complete - All possible edges present
  • Sparse - Few edges relative to nodes
  • Dense - Many edges relative to nodes
  • Weight - Value associated with edge
  • Directed - Edges have direction
  • Undirected - Edges have no direction
  • (50+ more terms with clear definitions)

───────────────────────────────────────────────────────────────────────────────

Appendix B: Algorithm Complexity Table (2 pages)
  File: book/appendices/b-complexity-table.md
  
  Complete complexity reference:
  
  ┌────────────────────────┬──────────────┬──────────────┬─────────────┐
  │ Algorithm              │ Time         │ Space        │ Notes       │
  ├────────────────────────┼──────────────┼──────────────┼─────────────┤
  │ BFS                    │ O(V + E)     │ O(V)         │ Queue       │
  │ DFS                    │ O(V + E)     │ O(V)         │ Stack/Rec   │
  │ Dijkstra               │ O(E log V)   │ O(V)         │ Min heap    │
  │ Bellman-Ford           │ O(VE)        │ O(V)         │ All edges   │
  │ Floyd-Warshall         │ O(V³)        │ O(V²)        │ All pairs   │
  │ Kruskal MST            │ O(E log E)   │ O(V)         │ Sort edges  │
  │ Prim MST               │ O(E log V)   │ O(V)         │ Min heap    │
  │ Topological Sort       │ O(V + E)     │ O(V)         │ DAG only    │
  │ Tarjan SCC             │ O(V + E)     │ O(V)         │ One pass    │
  │ Ford-Fulkerson         │ O(E·f)       │ O(V + E)     │ f = max flow│
  │ Edmonds-Karp           │ O(VE²)       │ O(V + E)     │ BFS-based   │
  │ A*                     │ O(E log V)   │ O(V)         │ With heur.  │
  └────────────────────────┴──────────────┴──────────────┴─────────────┘
  
  Decision Matrix:
  • Need shortest path? → Dijkstra (non-neg) or Bellman-Ford (neg)
  • Need MST? → Kruskal (sparse) or Prim (dense)
  • Need ordering? → Topological sort (DAG only)
  • Need max flow? → Edmonds-Karp
  • Need exploration? → BFS (level) or DFS (deep)

───────────────────────────────────────────────────────────────────────────────

Appendix C: Practice Problems & Solutions (3 pages)
  File: book/appendices/c-practice-problems.md
  
  30 Curated Problems (Easy → Hard):
  
  EASY (1-5):
  1. Implement graph using adjacency list
  2. Count connected components
  3. Detect cycle in undirected graph
  4. Find path between two nodes (BFS)
  5. Calculate degree of all nodes
  
  MEDIUM (6-20):
  6. Clone a graph
  7. Course Schedule (topological sort)
  8. Network Delay Time (Dijkstra)
  9. Minimum Height Trees
  10. Cheapest Flights (Bellman-Ford)
  11. Word Ladder (BFS)
  12. Find Critical Connections (bridges)
  13. Redundant Connection (union-find)
  14. Is Graph Bipartite?
  15. Shortest Path in Binary Matrix
  16. All Paths From Source to Target (DAG)
  17. Reconstruct Itinerary (Eulerian path)
  18. Evaluate Division (weighted graph)
  19. Minimum Spanning Tree
  20. Snakes and Ladders (BFS)
  
  HARD (21-30):
  21. Alien Dictionary (topological sort)
  22. Bus Routes (BFS on graph)
  23. Shortest Path Visiting All Nodes
  24. Swim in Rising Water (Dijkstra variant)
  25. Critical Connections in Network
  26. Minimum Cost to Connect All Points (MST)
  27. Reconstruct Flight Path (Hierholzer)
  28. Optimize Water Distribution (MST + Prim)
  29. Maximum Flow Problem
  30. Traveling Salesman (approximation)
  
  Each problem includes:
  • Problem statement
  • Difficulty rating
  • Related concepts
  • Hints
  • Full solution with explanation
  • Time/space complexity analysis
  • Alternative approaches
  
  Online Judge Links:
  • LeetCode problems mapped to chapters
  • Codeforces graph problem set
  • HackerRank graph challenges

───────────────────────────────────────────────────────────────────────────────

Appendix D: Visual Cheatsheet (2 pages)
  File: book/appendices/d-visual-cheatsheet.md
  
  ONE-PAGE VISUAL SUMMARY:
  • All graph types with icons
  • Algorithm decision tree flowchart
  • Common patterns and solutions
  • Complexity comparison chart
  • When to use what
  
  ALGORITHM DECISION TREE:
  
  Start Here
    ↓
  What do you need?
    ├─ Find path? ──────────→ Weighted? ─┬─ No  → BFS
    │                                     └─ Yes ─┬─ Non-neg → Dijkstra
    │                                             └─ Negative → Bellman-Ford
    │
    ├─ Connect all? ────────→ MST ───────┬─ Sparse → Kruskal
    │                                     └─ Dense  → Prim
    │
    ├─ Order tasks? ────────→ Topological Sort (DAG required)
    │
    ├─ Explore graph? ──────→ BFS (level) or DFS (deep)
    │
    ├─ Max throughput? ─────→ Max Flow (Edmonds-Karp)
    │
    └─ Group items? ────────→ Connected Components / Clustering
  
  PATTERN RECOGNITION GUIDE:
  • See dependencies? → Think DAG, topological sort
  • See cycles? → Think DFS, cycle detection
  • See weights? → Think Dijkstra, MST
  • See flow/capacity? → Think max flow
  • See matching? → Think bipartite matching

───────────────────────────────────────────────────────────────────────────────

Appendix E: Further Reading & Resources (1 page)
  File: book/appendices/e-further-reading.md
  
  BOOKS:
  • Introduction to Algorithms (CLRS)
  • Algorithm Design Manual (Skiena)
  • Competitive Programming 4 (Halim)
  • Graph Theory (Diestel)
  
  ONLINE RESOURCES:
  • Visualgo.net - Algorithm visualizations
  • Graph Online - Interactive graph tool
  • D3 Graph Theory - Interactive learning
  • Neo4j Sandbox - Graph database playground
  
  RESEARCH TOPICS:
  • Graph Neural Networks (GNNs)
  • Spectral graph theory
  • Random graphs and network science
  • Quantum algorithms for graphs
  • Approximation algorithms
  • Parameterized complexity
  
  COMMUNITIES:
  • Codeforces - Competitive programming
  • Stack Overflow - Graph tag
  • r/algorithms - Reddit community
  • Math StackExchange - Graph theory
  
  TOOLS:
  • NetworkX (Python) - Graph analysis
  • Graphviz - Graph visualization
  • Gephi - Network visualization
  • Cytoscape - Biological networks

═══════════════════════════════════════════════════════════════════════════════

📝 MARKDOWN FRONTMATTER FORMAT

Every chapter file should use this frontmatter:

---
chapter: 5
title: "Traversal Algorithms"
slug: "traversal-algorithms"
part: "Part II - Core Algorithms"
partNumber: 2
pages: 8
description: "BFS, DFS, and cycle detection with real-world applications"
keywords: ["BFS", "DFS", "traversal", "cycle detection", "graph exploration"]
lifeInsight: "BFS = explore broadly; DFS = commit deeply"
objectives:
  - Understand BFS and DFS algorithms
  - Implement both traversal methods
  - Detect cycles using DFS
  - Apply to real-world problems
prerequisites:
  - "Chapter 1: Graph basics"
  - "Chapter 4: Graph properties"
diagrams:
  - "bfs-animation.svg"
  - "dfs-animation.svg"
  - "cycle-detection-states.svg"
codeExamples:
  - "bfs.py"
  - "dfs.py"
  - "cycle-detection.cpp"
exercises: 5
difficulty: "intermediate"
readingTime: 20
---

═══════════════════════════════════════════════════════════════════════════════

🔧 TECHNICAL IMPLEMENTATION DETAILS

FILE NAMING CONVENTION:
book/chapters/part-{N}-{slug}/{NN}-{chapter-slug}.md

Examples:
• book/chapters/part-1-foundations/01-what-are-graphs.md
• book/chapters/part-2-core-algorithms/05-traversal-algorithms.md
• book/chapters/part-4-applied-thinking/14-real-life-decisions.md

DIAGRAM ORGANIZATION:
book/diagrams/chapter-{NN}/{diagram-name}.svg

Examples:
• book/diagrams/chapter-01/graph-types.svg
• book/diagrams/chapter-05/bfs-animation.svg

CODE EXAMPLES ORGANIZATION:
book/code-examples/{language}/{algorithm}.{ext}

Examples:
• book/code-examples/python/bfs.py
• book/code-examples/cpp/dijkstra.cpp

═══════════════════════════════════════════════════════════════════════════════

🎨 CUSTOM MARKDOWN SYNTAX

INSIGHT BOXES:
:::insight life
Your relationships and goals form an invisible graph
:::

:::insight algorithm
BFS guarantees shortest path in unweighted graphs
:::

:::insight pitfall
Forgetting visited set leads to infinite loops
:::

CODE BLOCKS WITH TABS:
```tabs
tab: Python
```python
def bfs(graph, start):
    queue = [start]
    visited = {start}
```

tab: C++
```cpp
void bfs(Graph& g, int start) {
    queue<int> q;
    q.push(start);
}
```
```end

DIAGRAMS:
```diagram
type: svg
source: /diagrams/chapter-05/bfs-animation.svg
alt: BFS level-by-level exploration animation
caption: BFS explores all neighbors before going deeper
```

EXERCISES:
```exercise
difficulty: medium
title: Implement BFS from scratch
points: 10

Implement BFS algorithm that returns shortest path between two nodes.

Input: graph, start_node, end_node
Output: List of nodes in shortest path

Test cases:
- graph = {0: [1,2], 1: [3], 2: [3], 3: []}, start=0, end=3
- Expected: [0, 1, 3] or [0, 2, 3]
```

═══════════════════════════════════════════════════════════════════════════════

🚀 DEVELOPMENT WORKFLOW

STEP 1: SETUP PROJECT
```bash
# Clone or create project
mkdir graph-algorithms-handbook
cd graph-algorithms-handbook

# Create structure
mkdir -p app/src/{app,components,lib,styles}
mkdir -p book/{chapters,appendices,diagrams,code-examples}
mkdir -p book/chapters/{part-1-foundations,part-2-core-algorithms,part-3-advanced-topics,part-4-applied-thinking}

# Initialize Next.js in app/
cd app
npx create-next-app@latest . --typescript --tailwind --app
```

STEP 2: INSTALL DEPENDENCIES
```bash
cd app
npm install gray-matter react-markdown rehype-highlight remark-gfm
npm install -D puppeteer
npm install next-mdx-remote
npm install lucide-react
npm install prism-react-renderer
```

STEP 3: WRITE CONTENT
```bash
# Write chapters in book/
code ../book/chapters/part-1-foundations/01-what-are-graphs.md

# Create diagrams
# Use Excalidraw, export as SVG to book/diagrams/
```

STEP 4: DEVELOP WEBSITE
```bash
# Run dev server
npm run dev

# Visit http://localhost:3000
# Iterate on design and functionality
```

STEP 5: GENERATE PDF
```bash
# Build script
npm run build:pdf

# Output: app/public/book.pdf
```

STEP 6: DEPLOY
```bash
# Push to GitHub
git add .
git commit -m "Add chapter 5"
git push

# Auto-deploys to Vercel
```

═══════════════════════════════════════════════════════════════════════════════

📊 PROJECT METRICS

CONTENT STATS:
• Total chapters: 15
• Total appendices: 5
• Total pages: 108
• Estimated diagrams: 60+
• Code examples: 50+
• Exercises: 100+
• Reading time: ~8-10 hours

FILE STRUCTURE:
• Markdown files: ~20
• Diagram files: ~60 SVG
• Code example files: ~50
• React components: ~20
• Lib utilities: ~5

ESTIMATED DEVELOPMENT TIME:
• Content writing: 40-60 hours
• Diagram creation: 20-30 hours
• Website development: 30-40 hours
• PDF generation setup: 10-15 hours
• Testing & refinement: 20-30 hours
• TOTAL: 120-175 hours (3-4 months part-time)

═══════════════════════════════════════════════════════════════════════════════

✅ PROJECT CHECKLIST

PHASE 1: FOUNDATION
□ Set up project structure
□ Initialize Next.js app
□ Install dependencies
□ Create metadata.json
□ Write first chapter (template)
□ Test markdown rendering

PHASE 2: CONTENT CREATION
□ Write all Part I chapters (4)
□ Write all Part II chapters (4)
□ Write all Part III chapters (3)
□ Write all Part IV chapters (4)
□ Write all appendices (5)
□ Create all diagrams (~60)
□ Write all code examples (~50)

PHASE 3: WEBSITE DEVELOPMENT
□ Design homepage
□ Build chapter navigation
□ Implement markdown renderer
□ Add syntax highlighting
□ Create custom MD components
□ Add dark/light mode
□ Implement search functionality
□ Add progress tracking
□ Create download page
□ Mobile responsive design

PHASE 4: PDF GENERATION
□ Create print-optimized route
□ Set up Puppeteer script
□ Test PDF generation
□ Add page numbers
□ Include table of contents
□ Optimize for printing

PHASE 5: POLISH & LAUNCH
□ Proofread all content
□ Test all code examples
□ Verify all diagrams load
□ SEO optimization
□ Performance optimization
□ Add analytics
□ Deploy to Vercel
□ Set up custom domain
□ Launch announcement

═══════════════════════════════════════════════════════════════════════════════

🎯 SUCCESS METRICS

USER ENGAGEMENT:
• Average reading time per chapter
• Chapter completion rate
• PDF download count
• Most visited chapters
• Search queries

CONTENT QUALITY:
• Code example run rate
• Exercise completion rate
• User feedback/comments
• Error reports
• Contribution requests

REACH:
• Monthly visitors
• Social media shares
• GitHub stars (if open source)
• Newsletter subscribers
• Course platform partnerships

═══════════════════════════════════════════════════════════════════════════════

END OF DOCUMENTATION# Graphs-handbook
