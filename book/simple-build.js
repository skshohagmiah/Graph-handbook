const fs = require('fs');

console.log('📚 Building Simple Handbook with Separate Files...');

// List of files to combine
const files = [
    'cover.html',
    'preface.html',
    'table-of-contents.html',
    'chapter-01.html'
    // Add more files as you create them
];

let combinedHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Graphs, Trees & Algorithms Handbook</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        /* Academic book styling like CPH */
        body { 
            font-family: 'Times New Roman', serif; 
            line-height: 1.6;
        }
        
        h1, h2, h3, h4, h5, h6 {
            font-family: 'Times New Roman', serif;
            font-weight: normal;
        }
        
        .academic-content {
            max-width: 750px;
            margin: 0 auto;
            padding: 60px 40px;
        }
        
        .chapter-number {
            font-size: 14px;
            color: #666;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 8px;
        }
        
        .chapter-title {
            font-size: 28px;
            font-weight: normal;
            color: #000;
            margin-bottom: 40px;
            line-height: 1.2;
        }
        
        .section-title {
            font-size: 20px;
            font-weight: normal;
            color: #000;
            margin: 40px 0 20px 0;
            border-bottom: 1px solid #ddd;
            padding-bottom: 8px;
        }
        
        .academic-text {
            font-size: 11pt;
            line-height: 1.6;
            color: #000;
            text-align: justify;
            margin-bottom: 12px;
        }
        
        .code-block {
            background: #f8f8f8;
            border: 1px solid #ddd;
            padding: 12px;
            font-family: 'Courier New', monospace;
            font-size: 9pt;
            margin: 16px 0;
            overflow-x: auto;
        }
        
        .definition-box {
            border-left: 3px solid #000;
            padding-left: 16px;
            margin: 20px 0;
            font-style: italic;
        }
        
        /* Cover page specific styling */
        .cover-page {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 0 48px;
            background: white;
        }
        
        .cover-title {
            font-size: 48px;
            font-weight: normal;
            color: black;
            margin-bottom: 32px;
            line-height: 1.2;
        }
        
        .cover-divider {
            width: 128px;
            height: 1px;
            background: black;
            margin: 0 auto 32px auto;
        }
        
        .cover-subtitle {
            font-size: 18px;
            color: black;
            font-weight: 300;
            max-width: 400px;
            line-height: 1.4;
            margin-bottom: 80px;
        }
        
        .cover-author {
            font-size: 18px;
            color: black;
            font-weight: normal;
            margin-bottom: 8px;
        }
        
        .cover-year {
            font-size: 16px;
            color: black;
            font-weight: 300;
        }
        
        @media print {
            .no-print { display: none !important; }
            .page-break { page-break-before: always; }
        }
    </style>
</head>
<body class="font-sans text-gray-800 bg-white">
    <!-- Navigation -->
    <nav class="fixed top-4 left-4 z-50 no-print">
        <div class="flex flex-col space-y-2">
            <a href="#cover" class="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors text-sm font-medium">📖 Cover</a>
            <a href="#preface" class="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors text-sm font-medium">📝 Preface</a>
            <a href="#toc" class="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors text-sm font-medium">📚 TOC</a>
            <a href="#ch1" class="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors text-sm font-medium">Ch 1</a>
        </div>
    </nav>
`;

// Add each file as a separate page
files.forEach((filename, index) => {
    if (fs.existsSync(filename)) {
        console.log(`✅ Adding ${filename}`);
        
        const content = fs.readFileSync(filename, 'utf8');
        
        // Extract body content
        const bodyMatch = content.match(/<body[^>]*>([\s\S]*)<\/body>/i);
        if (bodyMatch) {
            let pageId = 'page' + index;
            if (filename === 'cover.html') pageId = 'cover';
            else if (filename === 'preface.html') pageId = 'preface';
            else if (filename === 'table-of-contents.html') pageId = 'toc';
            else if (filename === 'chapter-01.html') pageId = 'ch1';
            
            // Add appropriate container classes based on file type
            let containerClass = "min-h-screen";
            if (filename === 'cover.html') {
                containerClass = "cover-page"; // Cover uses its own styling
            } else {
                containerClass += " academic-content"; // All other pages use academic styling
            }
            
            combinedHTML += `
    <div class="${containerClass} ${index > 0 ? 'page-break' : ''}" id="${pageId}">
        ${bodyMatch[1]}
    </div>
            `;
        }
    } else {
        console.log(`❌ File not found: ${filename}`);
    }
});

combinedHTML += `
</body>
</html>`;

// Write combined file
fs.writeFileSync('./HANDBOOK.html', combinedHTML);

console.log('');
console.log('🎉 Simple handbook built!');
console.log('📖 Output: HANDBOOK.html');
console.log(`📏 File size: ${Math.round(combinedHTML.length / 1024)} KB`);
console.log('');
console.log('✨ Features:');
console.log('  📝 Separate files for each section');
console.log('  🎨 Clean design (no background colors)');
console.log('  🔗 Simple navigation');
console.log('  🖨️ Print-ready');
console.log('');
console.log('📚 How to add more:');
console.log('  1. Create chapter-02.html, chapter-03.html, etc.');
console.log('  2. Add them to the files array in this script');
console.log('  3. Run: node simple-build.js');
