import { generateHandbookPDF } from "@/lib/pdf"

export async function GET() {
  try {
    const htmlContent = await generateHandbookPDF()

    return new Response(htmlContent, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Content-Disposition": 'attachment; filename="graphs-handbook.html"',
      },
    })
  } catch (error) {
    console.error("PDF generation error:", error)
    return new Response("Error generating PDF", { status: 500 })
  }
}
