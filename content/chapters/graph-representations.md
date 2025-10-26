---
title: Graph Representations
number: 2
description: Learn different ways to represent graphs in code: adjacency lists, matrices, and edge lists.
---

# Graph Representations

## Overview

There are three main ways to represent graphs in code:
1. **Adjacency List** - Most common and space-efficient
2. **Adjacency Matrix** - Fast lookups, more memory
3. **Edge List** - Simple but less efficient

## Adjacency List

### Concept

Store a list of neighbors for each vertex. This is the most commonly used representation.

### Implementation

\`\`\`python
# Using a dictionary
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D'],
    'C': ['A', 'D'],
    'D': ['B', 'C']
}
\`\`\`

### Advantages
- Space-efficient: O(V + E)
- Fast iteration over neighbors
- Works well for sparse graphs

### Disadvantages
- Slower edge lookup: O(degree)
- Requires more code for weighted graphs

## Adjacency Matrix

### Concept

Use a 2D matrix where matrix[i][j] represents the edge between vertices i and j.

### Implementation

\`\`\`python
# For unweighted graph
matrix = [
    [0, 1, 1, 0],  # A
    [1, 0, 0, 1],  # B
    [1, 0, 0, 1],  # C
    [0, 1, 1, 0]   # D
]

# For weighted graph
matrix = [
    [0, 5, 3, 0],
    [5, 0, 0, 2],
    [3, 0, 0, 4],
    [0, 2, 4, 0]
]
\`\`\`

### Advantages
- Fast edge lookup: O(1)
- Simple to understand
- Good for dense graphs

### Disadvantages
- Space: O(V²) - wasteful for sparse graphs
- Slower iteration over neighbors

## Edge List

### Concept

Store all edges as a list of pairs (or tuples with weights).

### Implementation

\`\`\`python
# Unweighted
edges = [
    ('A', 'B'),
    ('A', 'C'),
    ('B', 'D'),
    ('C', 'D')
]

# Weighted
edges = [
    ('A', 'B', 5),
    ('A', 'C', 3),
    ('B', 'D', 2),
    ('C', 'D', 4)
]
\`\`\`

### Advantages
- Simple and straightforward
- Good for algorithms like Kruskal's MST

### Disadvantages
- Slow neighbor lookup: O(E)
- Inefficient for most graph algorithms

## Choosing the Right Representation

| Representation | Space | Edge Lookup | Neighbor Iteration | Best For |
|---|---|---|---|---|
| Adjacency List | O(V+E) | O(degree) | O(degree) | Most algorithms, sparse graphs |
| Adjacency Matrix | O(V²) | O(1) | O(V) | Dense graphs, quick lookups |
| Edge List | O(E) | O(E) | O(E) | MST algorithms, simple cases |

## Key Takeaways

- **Adjacency List** is the default choice for most problems
- Choose based on your graph's density and operation frequency
- Weighted graphs require storing values with edges
- Different representations suit different algorithms

---

**Next Chapter**: Master the two fundamental graph traversal algorithms: BFS and DFS.
