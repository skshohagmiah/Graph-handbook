"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur z-50">
      <div className="container-main flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold text-primary">
          Graphs Handbook
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <Link href="/chapters" className="text-sm hover:text-primary transition-colors">
            Chapters
          </Link>
          <Link href="/about" className="text-sm hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/download" className="text-sm hover:text-primary transition-colors">
            Download
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden border-t border-border bg-input">
          <div className="container-main py-4 space-y-2">
            <Link href="/chapters" className="block py-2 hover:text-primary transition-colors">
              Chapters
            </Link>
            <Link href="/about" className="block py-2 hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/download" className="block py-2 hover:text-primary transition-colors">
              Download
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
