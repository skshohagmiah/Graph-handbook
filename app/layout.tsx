import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ProgressTracker } from "@/components/progress-tracker"
import { SearchDialog } from "@/components/search-dialog"
import { Suspense } from "react"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Graphs, Trees & Algorithms Handbook",
  description: "A practical guide to data structures, problem solving, and real-world thinking",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} bg-background text-foreground`}>
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <SearchDialog />
          <ProgressTracker />
        </Suspense>
      </body>
    </html>
  )
}
