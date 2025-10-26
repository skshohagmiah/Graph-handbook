import type React from "react"
import { SidebarNav } from "@/components/sidebar-nav"

export default function ChaptersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <SidebarNav />
      <main className="flex-1">{children}</main>
    </div>
  )
}
