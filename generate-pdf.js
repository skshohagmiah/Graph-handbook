const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generatePDF() {
    console.log('📄 Generating PDF from HANDBOOK.html...');
    
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    // Load the HTML file
    const htmlPath = path.join(__dirname, 'book', 'HANDBOOK.html');
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    
    await page.setContent(htmlContent, {
        waitUntil: 'networkidle0'
    });
    
    // Generate PDF with academic book settings
    const pdf = await page.pdf({
        path: path.join(__dirname, 'book', 'HANDBOOK.pdf'),
        format: 'A4',
        printBackground: true,
        margin: {
            top: '0.75in',
            right: '0.75in',
            bottom: '0.75in',
            left: '0.75in'
        },
        displayHeaderFooter: true,
        headerTemplate: `
            <div style="font-size: 10px; font-family: Times New Roman; width: 100%; text-align: center; color: #666;">
                <span>Graph Algorithms Handbook</span>
            </div>
        `,
        footerTemplate: `
            <div style="font-size: 10px; font-family: Times New Roman; width: 100%; text-align: center; color: #666;">
                <span class="pageNumber"></span>
            </div>
        `,
        preferCSSPageSize: false
    });
    
    await browser.close();
    
    console.log('');
    console.log('🎉 PDF generated successfully!');
    console.log('📖 Output: book/HANDBOOK.pdf');
    console.log(`📏 File size: ${Math.round(fs.statSync(path.join(__dirname, 'book', 'HANDBOOK.pdf')).size / 1024)} KB`);
    console.log('');
    console.log('✨ Features:');
    console.log('  📄 A4 format with proper margins');
    console.log('  📚 Academic book styling preserved');
    console.log('  🔢 Page numbers in footer');
    console.log('  📝 Book title in header');
    console.log('  🖨️ Print-ready quality');
}

// Run the PDF generation
generatePDF().catch(console.error);
