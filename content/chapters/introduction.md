---
title: Introduction to Graphs
number: 1
description: Understand what graphs are, why they matter, and how they model real-world systems.
---

# Introduction to Graphs

## What is a Graph?

A **graph** is a fundamental data structure consisting of a set of vertices (also called nodes) connected by edges. Graphs are one of the most powerful tools in computer science for modeling relationships and connections.

### Basic Definition

Formally, a graph G is defined as:
- **G = (V, E)** where:
  - **V** is a set of vertices (nodes)
  - **E** is a set of edges (connections between vertices)

### Visual Example

\`\`\`
    A --- B
    |     |
    C --- D
\`\`\`

In this simple graph:
- Vertices: {A, B, C, D}
- Edges: {(A,B), (A,C), (B,D), (C,D)}

## Graph Terminology

### Types of Graphs

**Undirected Graphs**: Edges have no direction
- Connection is bidirectional
- Example: Social networks (friendship)

**Directed Graphs (Digraphs)**: Edges have direction
- Connection flows in one direction
- Example: Twitter follows (A follows B ≠ B follows A)

**Weighted Graphs**: Edges have associated values
- Example: Road networks (distance between cities)

**Unweighted Graphs**: All edges have equal weight
- Example: Social connections

### Key Concepts

- **Degree**: Number of edges connected to a vertex
- **Path**: Sequence of vertices connected by edges
- **Cycle**: Path that starts and ends at the same vertex
- **Connected Graph**: There's a path between every pair of vertices
- **Disconnected Graph**: Some vertices have no path between them

## Why Graphs Matter

Graphs are everywhere in the real world. They model:

1. **Social Networks**: People as vertices, friendships as edges
2. **Transportation**: Cities as vertices, roads as edges
3. **Computer Networks**: Computers as vertices, connections as edges
4. **Biological Systems**: Proteins as vertices, interactions as edges
5. **Recommendation Systems**: Users and items as vertices, preferences as edges

### The Power of Graph Thinking

Understanding graphs helps you:
- Model complex systems
- Find optimal solutions
- Identify patterns and relationships
- Make better decisions

## Real-World Applications

### Navigation & Maps
GPS systems use graphs to find shortest routes between locations. Vertices represent intersections, edges represent roads.

### Social Media
Recommendation algorithms analyze your social graph to suggest friends and content you might like.

### Recommendation Engines
Netflix, Amazon, and Spotify use graphs to connect users with similar preferences to recommend movies, products, and music.

### Web Crawling
Search engines use graphs to understand the structure of the web and rank pages.

## Key Takeaways

- Graphs model relationships and connections
- They consist of vertices and edges
- Graphs can be directed or undirected, weighted or unweighted
- Graph algorithms solve real-world problems efficiently
- Understanding graphs is essential for modern software development

---

**Next Chapter**: Learn how to represent graphs in code with different data structures.
