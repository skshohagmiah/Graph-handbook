const fs = require('fs');

console.log('📚 Building Simple Handbook with Separate Files...');

// List of files to combine
const files = [
    'cover.html',
    'preface.html',
    'table-of-contents.html',
    'chapter-01.html',
    'chapter-02.html',
    'chapter-03.html',
    'chapter-04.html',
    'chapter-05.html',
    'chapter-06.html',
    'chapter-07.html',
    'chapter-08.html',
    'chapter-09.html',
    'chapter-10.html',
    'chapter-11.html',
    'chapter-12.html',
    'chapter-13.html',
    'chapter-14.html',
    'chapter-15.html',
    'chapter-16.html',
    'chapter-17.html',
    'appendix-a.html',
    'appendix-b.html',
    'appendix-c.html',
    'appendix-d.html',
    'appendix-e.html'
];

let combinedHTML = `<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Graph Algorithms Handbook</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
    <script>
        // Configure Mermaid for better print rendering
        mermaid.initialize({
            startOnLoad: true,
            theme: 'base',
            themeVariables: {
                primaryColor: '#f9f9f9',
                primaryTextColor: '#000000',
                primaryBorderColor: '#333333',
                lineColor: '#333333',
                fontSize: '14px'
            },
            flowchart: {
                useMaxWidth: true,
                htmlLabels: false,
                curve: 'basis'
            },
            sequence: {
                useMaxWidth: true
            },
            gantt: {
                useMaxWidth: true
            },
            fontFamily: 'Arial, sans-serif',
            fontSize: 14
        });
        
        // Fix for print rendering
        window.addEventListener('beforeprint', function() {
            mermaid.init();
{{ ... }}
        });
    </script>
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
            font-size: 16px;
            color: #333;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 12px;
            font-weight: bold;
        }
        
        .chapter-title {
            font-size: 32px;
            font-weight: bold;
            color: #000;
            margin-bottom: 40px;
            line-height: 1.2;
        }
        
        .section-title {
            font-size: 22px;
            font-weight: bold;
            color: #1a202c;
            margin: 45px 0 20px 0;
            border-bottom: 2px solid #4299e1;
            padding-bottom: 10px;
        }
        
        .academic-text {
            font-size: 12pt;
            line-height: 1.7;
            color: #2d3748;
            text-align: justify;
            margin-bottom: 14px;
        }
        
        .code-block {
            background-color: #2d2d2d; /* deeper gray for print clarity */
            color: #f8f8f2; /* softer white */
            border: 1.5px solid #444;
            border-left: 4px solid #3b82f6; /* subtle blue accent */
            border-radius: 6px;
            padding: 14px 18px;
            font-family: 'Fira Code', 'Courier New', monospace;
            font-size: 10pt;
            margin: 20px 0;
            overflow-x: auto;
            white-space: pre;
            line-height: 1.5;
            box-shadow: none; /* remove for PDF */
            }

        
        .definition-box {
            border-left: 4px solid #2196f3;
            background-color: #f8f9fa;
            padding: 16px;
            margin: 20px 0;
            font-style: italic;
            border-radius: 4px;
        }
        
        /* Mermaid diagram styling */
        .mermaid {
            text-align: center;
            margin: 20px 0;
        }
        
        .mermaid svg {
            max-width: 100%;
            height: auto;
        }
        
        .cover-title {
            font-size: 48px;
            font-weight: normal;
            color: black;
            margin-bottom: 40px;
            line-height: 1.3;
            text-align: center;
        }
        
        .cover-divider {
            width: 128px;
            height: 1px;
            background: black;
            margin: 0 auto 40px auto;
        }
        
        .cover-subtitle {
            font-size: 18px;
            color: black;
            font-weight: 300;
            max-width: 400px;
            line-height: 1.5;
            margin: 0 auto 100px auto;
            text-align: center;
        }
        
        .cover-author {
            font-size: 18px;
            color: black;
            font-weight: normal;
            margin-bottom: 12px;
            text-align: center;
        }
        
        .cover-year {
            font-size: 16px;
            color: black;
            font-weight: 300;
            text-align: center;
        }
        
        /* Cover page container styling */
        .cover-page {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 0 48px;
            font-family: 'Times New Roman', serif;
        }
        
        .cover-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            max-width: 600px;
        }
        
        .cover-main {
            flex: 2;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        
        .cover-footer {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding-bottom: 60px;
        }
        
        /* Summary section styling to match diagram backgrounds */
        .summary-section {
            background-color: #f8f9fa;
            border: 1px solid #dee2e6;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
        }
        
        .performance-summary {
            background-color: #f8f9fa;
            border: 2px solid #4caf50;
            border-radius: 8px;
            padding: 25px;
            margin: 30px 0;
        }
        
        .completion-summary {
            background-color: #f8f9fa;
            border-left: 5px solid #2196f3;
            padding: 20px;
            margin: 30px 0;
        }
        
        @media print {
            body {
                font-family: Times, serif !important;
                font-size: 14pt !important;
                line-height: 1.5 !important;
                margin: 0.1in !important;
                color: black !important;
                background: white !important;
            }
            
            /* Keep chapter titles with content */
            .chapter-number {
                font-size: 16pt !important;
                font-weight: bold !important;
                margin: 0 0 6pt 0 !important;
                page-break-before: always;
                page-break-after: avoid;
            }
            
            .chapter-title {
                font-size: 24pt !important;
                font-weight: bold !important;
                margin: 6pt 0 15pt 0 !important;
                page-break-after: avoid;
                page-break-inside: avoid;
            }
            
            .section-title, h2 {
                font-size: 18pt !important;
                font-weight: bold !important;
                margin: 15pt 0 10pt 0 !important;
                page-break-after: avoid;
            }
            
            h3 {
                font-size: 16pt !important;
                font-weight: bold !important;
                margin: 12pt 0 8pt 0 !important;
                page-break-after: avoid;
            }
            
            p, .academic-text {
                margin: 0 0 8pt 0 !important;
                text-align: justify !important;
            }
            
            /* Keep first content with chapter title */
            .chapter-title + p,
            .chapter-title + .academic-text,
            .chapter-title + ul,
            .chapter-title + ol,
            .chapter-title + pre,
            .chapter-title + .code-block {
                page-break-before: avoid !important;
            }
            
            pre, .code-block {
                font-family: 'Courier New', Courier, monospace !important;
                font-size: 11pt !important;
                line-height: 1.3 !important;
                background: #f8f8f8 !important;
                color: #000000 !important;
                border: 2pt solid #666666 !important;
                padding: 12pt !important;
                margin: 12pt 0 !important;
                page-break-inside: avoid !important;
                white-space: pre-wrap !important;
                word-wrap: break-word !important;
            }
            
            ul, ol {
                margin: 8pt 0 10pt 20pt !important;
            }
            
            li {
                margin-bottom: 3pt !important;
            }
            
            .mermaid {
                margin: 12pt 0 !important;
                text-align: center !important;
            }
            
            .definition-box {
                background: #f9f9f9 !important;
                border-left: 3pt solid #333 !important;
                padding: 8pt !important;
                margin: 10pt 0 !important;
            }
            
            /* Ultra-simple cover page - force everything together */
            .cover-container, .cover-content {
                page-break-inside: avoid !important;
                page-break-after: always !important;
                text-align: center !important;
                padding: 30pt !important;
            }
            
            .cover-title {
                font-size: 28pt !important;
                font-weight: bold !important;
                margin: 10pt 0 15pt 0 !important;
            }
            
            .cover-subtitle {
                font-size: 14pt !important;
                margin: 0 0 40pt 0 !important;
            }
            
            .cover-footer {
                margin-top: 40pt !important;
            }
            
            .cover-author {
                font-size: 16pt !important;
                font-weight: bold !important;
                margin: 0 0 5pt 0 !important;
            }
            
            .cover-year {
                font-size: 14pt !important;
                margin: 0 !important;
            }
        }
        }
    </style>
</head>
<body class="font-sans text-gray-800 bg-white">
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
            else if (filename === 'chapter-02.html') pageId = 'ch2';
            else if (filename === 'chapter-03.html') pageId = 'ch3';
            else if (filename === 'chapter-04.html') pageId = 'ch4';
            else if (filename === 'chapter-05.html') pageId = 'ch5';
            else if (filename === 'chapter-06.html') pageId = 'ch6';
            else if (filename === 'chapter-07.html') pageId = 'ch7';
            else if (filename === 'chapter-08.html') pageId = 'ch8';
            else if (filename === 'chapter-09.html') pageId = 'ch9';
            else if (filename === 'chapter-10.html') pageId = 'ch10';
            else if (filename === 'chapter-11.html') pageId = 'ch11';
            else if (filename === 'chapter-12.html') pageId = 'ch12';
            else if (filename === 'chapter-13.html') pageId = 'ch13';
            else if (filename === 'chapter-14.html') pageId = 'ch14';
            else if (filename === 'chapter-15.html') pageId = 'ch15';
            else if (filename === 'chapter-16.html') pageId = 'ch16';
            else if (filename === 'chapter-17.html') pageId = 'ch17';
            else if (filename === 'appendix-a.html') pageId = 'appa';
            else if (filename === 'appendix-b.html') pageId = 'appb';
            else if (filename === 'appendix-c.html') pageId = 'appc';
            else if (filename === 'appendix-d.html') pageId = 'appd';
            else if (filename === 'appendix-e.html') pageId = 'appe';

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
