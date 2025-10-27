"use client"

import { useEffect } from 'react'

declare global {
  interface Window {
    mermaid: any;
  }
}

export function MermaidWrapper() {
  useEffect(() => {
    const initializeMermaid = (mermaid: any) => {
      // Initialize mermaid with custom config
      mermaid.initialize({
        startOnLoad: false,
        theme: 'default',
        themeVariables: {
          primaryColor: '#3b82f6',
          primaryTextColor: '#1f2937',
          primaryBorderColor: '#2563eb',
          lineColor: '#6b7280',
          secondaryColor: '#f3f4f6',
          tertiaryColor: '#ffffff',
          background: '#ffffff',
          mainBkg: '#ffffff',
          secondaryBkg: '#f3f4f6'
        },
        flowchart: {
          useMaxWidth: true,
          htmlLabels: true
        }
      })

      // Function to render all mermaid diagrams
      const renderMermaidDiagrams = () => {
        const mermaidElements = document.querySelectorAll('.mermaid:not([data-processed])')
        
        if (mermaidElements.length === 0) {
          // If no elements found, try again after a short delay
          setTimeout(() => {
            const retryElements = document.querySelectorAll('.mermaid:not([data-processed])')
            if (retryElements.length > 0) {
              processElements(retryElements)
            }
          }, 200)
          return
        }
        
        processElements(mermaidElements)
      }
      
      const processElements = (elements: NodeListOf<Element>) => {
        elements.forEach((element, index) => {
          const graphDefinition = element.textContent || element.innerHTML
          if (graphDefinition.trim()) {
            try {
              // Create unique ID for each diagram
              const id = `mermaid-${Date.now()}-${index}`
              element.setAttribute('id', id)
              element.setAttribute('data-processed', 'true')
              
              // Clear the element and render
              element.innerHTML = ''
              mermaid.render(id + '-svg', graphDefinition).then(({ svg }: any) => {
                element.innerHTML = svg
              }).catch((error: any) => {
                console.error('Mermaid rendering error:', error)
                element.innerHTML = `<div class="text-red-500 text-sm">Diagram rendering failed</div>`
              })
            } catch (error) {
              console.error('Mermaid error:', error)
            }
          }
        })
      }

      // Initial render with multiple attempts
      renderMermaidDiagrams()
      
      // Additional renders with increasing delays to catch content loading
      setTimeout(renderMermaidDiagrams, 500)
      setTimeout(renderMermaidDiagrams, 1000)
      setTimeout(renderMermaidDiagrams, 2000)

      // Re-render when content changes (for dynamic content)
      const observer = new MutationObserver((mutations) => {
        let shouldRender = false
        mutations.forEach((mutation) => {
          if (mutation.type === 'childList') {
            mutation.addedNodes.forEach((node) => {
              if (node.nodeType === Node.ELEMENT_NODE) {
                const element = node as Element
                if (element.classList?.contains('mermaid') || 
                    element.querySelector?.('.mermaid')) {
                  shouldRender = true
                }
              }
            })
          }
        })
        
        if (shouldRender) {
          setTimeout(renderMermaidDiagrams, 100)
        }
      })

      observer.observe(document.body, {
        childList: true,
        subtree: true
      })

      // Return cleanup function
      return () => observer.disconnect()
    }

    const loadMermaid = async () => {
      try {
        let mermaid
        
        // Try to use installed mermaid first
        try {
          mermaid = (await import('mermaid')).default
        } catch {
          // Fallback to CDN if import fails
          if (!window.mermaid) {
            const script = document.createElement('script')
            script.src = 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js'
            script.onload = () => {
              if (window.mermaid) {
                initializeMermaid(window.mermaid)
              }
            }
            document.head.appendChild(script)
            return
          } else {
            mermaid = window.mermaid
          }
        }
        
        initializeMermaid(mermaid)
        
      } catch (error) {
        console.error('Failed to load Mermaid:', error)
      }
    }

    // Load mermaid after a short delay to ensure DOM is ready
    const timer = setTimeout(loadMermaid, 100)
    
    // Also listen for window load event to catch late-loading content
    const handleWindowLoad = () => {
      setTimeout(loadMermaid, 200)
    }
    
    if (document.readyState === 'loading') {
      window.addEventListener('load', handleWindowLoad)
    } else {
      // Document already loaded, try again
      setTimeout(loadMermaid, 300)
    }
    
    return () => {
      clearTimeout(timer)
      window.removeEventListener('load', handleWindowLoad)
    }
  }, [])

  return null
}
