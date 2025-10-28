const fs = require('fs');

// List of all chapter files
const files = [
    'chapter-01.html', 'chapter-02.html', 'chapter-03.html', 'chapter-04.html',
    'chapter-05.html', 'chapter-06.html', 'chapter-07.html', 'chapter-08.html',
    'chapter-09.html', 'chapter-10.html', 'chapter-11.html', 'chapter-12.html',
    'chapter-13.html', 'chapter-14.html', 'chapter-15.html', 'chapter-16.html',
    'chapter-17.html'
];

console.log('🔧 Fixing HTML encoding in include statements...');

files.forEach(filename => {
    if (fs.existsSync(filename)) {
        let content = fs.readFileSync(filename, 'utf8');
        
        // Fix common include statements
        content = content.replace(/#include <iostream>/g, '#include &lt;iostream&gt;');
        content = content.replace(/#include <vector>/g, '#include &lt;vector&gt;');
        content = content.replace(/#include <queue>/g, '#include &lt;queue&gt;');
        content = content.replace(/#include <string>/g, '#include &lt;string&gt;');
        content = content.replace(/#include <unordered_map>/g, '#include &lt;unordered_map&gt;');
        content = content.replace(/#include <unordered_set>/g, '#include &lt;unordered_set&gt;');
        content = content.replace(/#include <algorithm>/g, '#include &lt;algorithm&gt;');
        content = content.replace(/#include <memory>/g, '#include &lt;memory&gt;');
        content = content.replace(/#include <stack>/g, '#include &lt;stack&gt;');
        content = content.replace(/#include <climits>/g, '#include &lt;climits&gt;');
        content = content.replace(/#include <limits>/g, '#include &lt;limits&gt;');
        content = content.replace(/#include <cmath>/g, '#include &lt;cmath&gt;');
        content = content.replace(/#include <set>/g, '#include &lt;set&gt;');
        content = content.replace(/#include <cstring>/g, '#include &lt;cstring&gt;');
        
        fs.writeFileSync(filename, content);
        console.log(`✅ Fixed ${filename}`);
    }
});

console.log('🎉 All include statements fixed!');
