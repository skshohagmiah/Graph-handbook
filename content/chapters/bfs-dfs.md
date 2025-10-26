---
title: Breadth-First & Depth-First Search
number: 3
description: Master the two fundamental graph traversal algorithms.
---

# Breadth-First & Depth-First Search

## Overview

BFS and DFS are the two most fundamental graph traversal algorithms. They visit every vertex and edge exactly once.

## Breadth-First Search (BFS)

### Concept

BFS explores the graph level by level, visiting all neighbors before moving deeper.

### Algorithm

1. Start at a source vertex
2. Add it to a queue
3. While queue is not empty:
   - Dequeue a vertex
   - Visit all unvisited neighbors
   - Add them to the queue

### Implementation

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

### Complexity
- **Time**: O(V + E)
- **Space**: O(V)

### Use Cases
- Shortest path in unweighted graphs
- Level-order traversal
- Connected components
- Bipartite checking

## Depth-First Search (DFS)

### Concept

DFS explores as far as possible along each branch before backtracking.

### Algorithm

1. Start at a source vertex
2. Mark it as visited
3. Recursively visit all unvisited neighbors

### Implementation

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

### Complexity
- **Time**: O(V + E)
- **Space**: O(V) - recursion stack

### Use Cases
- Topological sorting
- Cycle detection
- Strongly connected components
- Backtracking problems

## Comparison

| Aspect | BFS | DFS |
|---|---|---|
| Data Structure | Queue | Stack (recursion) |
| Order | Level-by-level | Deep exploration |
| Shortest Path | Yes (unweighted) | No |
| Cycle Detection | Yes | Yes |
| Space | O(V) | O(V) |

## Key Takeaways

- BFS finds shortest paths in unweighted graphs
- DFS is useful for topological sorting and cycle detection
- Both have O(V + E) time complexity
- Choose based on your specific problem requirements

---

**Next Chapter**: Find shortest paths using Dijkstra's and Bellman-Ford algorithms.
\`\`\`

```tsx file="" isHidden
