import { getAllChaptersContent } from "./markdown"

export async function generateHandbookPDF() {
  try {
    const chapters = await getAllChaptersContent()

    // Create a simple HTML document that can be printed to PDF
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Graphs, Trees & Algorithms Handbook</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #1f2937;
      background: white;
    }
    
    .cover {
      page-break-after: always;
      padding: 60px 40px;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: 100vh;
      background: linear-gradient(135deg, #2563eb 0%, #0891b2 100%);
      color: white;
    }
    
    .cover h1 {
      font-size: 48px;
      margin-bottom: 20px;
      font-weight: bold;
    }
    
    .cover p {
      font-size: 18px;
      margin-bottom: 10px;
      opacity: 0.9;
    }
    
    .cover .author {
      margin-top: 40px;
      font-size: 16px;
    }
    
    .toc {
      page-break-after: always;
      padding: 40px;
    }
    
    .toc h2 {
      font-size: 32px;
      margin-bottom: 30px;
      color: #2563eb;
    }
    
    .toc-item {
      margin-bottom: 12px;
      font-size: 14px;
    }
    
    .toc-item a {
      text-decoration: none;
      color: #2563eb;
    }
    
    .chapter {
      page-break-before: always;
      padding: 40px;
    }
    
    .chapter-header {
      margin-bottom: 30px;
      border-bottom: 2px solid #2563eb;
      padding-bottom: 20px;
    }
    
    .chapter-number {
      color: #2563eb;
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
      margin-bottom: 5px;
    }
    
    .chapter h1 {
      font-size: 32px;
      margin-bottom: 10px;
      color: #1f2937;
    }
    
    .chapter-description {
      color: #6b7280;
      font-size: 14px;
    }
    
    .chapter-content {
      font-size: 14px;
      line-height: 1.8;
    }
    
    .chapter-content h2 {
      font-size: 20px;
      margin-top: 25px;
      margin-bottom: 15px;
      color: #1f2937;
    }
    
    .chapter-content h3 {
      font-size: 16px;
      margin-top: 18px;
      margin-bottom: 10px;
      color: #374151;
    }
    
    .chapter-content p {
      margin-bottom: 12px;
    }
    
    .chapter-content ul,
    .chapter-content ol {
      margin-left: 20px;
      margin-bottom: 12px;
    }
    
    .chapter-content li {
      margin-bottom: 6px;
    }
    
    .chapter-content code {
      background: #f3f4f6;
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
      font-size: 13px;
    }
    
    .chapter-content pre {
      background: #f3f4f6;
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
      margin: 15px 0;
      border-left: 3px solid #2563eb;
    }
    
    .chapter-content pre code {
      background: none;
      padding: 0;
      font-size: 12px;
    }
    
    .chapter-content table {
      width: 100%;
      border-collapse: collapse;
      margin: 15px 0;
    }
    
    .chapter-content th,
    .chapter-content td {
      border: 1px solid #e5e7eb;
      padding: 10px;
      text-align: left;
    }
    
    .chapter-content th {
      background: #f3f4f6;
      font-weight: bold;
    }
    
    .chapter-content blockquote {
      border-left: 4px solid #2563eb;
      padding-left: 15px;
      margin: 15px 0;
      color: #6b7280;
      font-style: italic;
    }
    
    .chapter-content a {
      color: #2563eb;
      text-decoration: underline;
    }
    
    @media print {
      body {
        background: white;
      }
    }
  </style>
</head>
<body>
  <!-- Cover Page -->
  <div class="cover">
    <h1>Graphs, Trees & Algorithms Handbook</h1>
    <p>A practical guide to data structures, problem solving, and real-world thinking</p>
    <p class="author">By Shohag Miah</p>
  </div>
  
  <!-- Table of Contents -->
  <div class="toc">
    <h2>Table of Contents</h2>
    ${chapters
      .map(
        (chapter) => `
      <div class="toc-item">
        <strong>Chapter ${chapter.metadata.number}: ${chapter.title}</strong>
      </div>
    `,
      )
      .join("")}
  </div>
  
  <!-- Chapters -->
  ${chapters
    .map(
      (chapter) => `
    <div class="chapter">
      <div class="chapter-header">
        <div class="chapter-number">Chapter ${chapter.metadata.number}</div>
        <h1>${chapter.title}</h1>
        <div class="chapter-description">${chapter.metadata.description}</div>
      </div>
      <div class="chapter-content">
        ${chapter.html}
      </div>
    </div>
  `,
    )
    .join("")}
</body>
</html>
    `

    return htmlContent
  } catch (error) {
    console.error("Error generating PDF:", error)
    throw error
  }
}
