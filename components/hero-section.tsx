"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import Head from "next/head"

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  // Generate structured data for the makerspace
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Frontier Makerspace",
    "description": "AI-powered makerspace in San Francisco with advanced fabrication tools including laser cutters, CNC mills, and pick-and-place machines.",
    "url": "https://frontiermakerspace.com",
    "logo": "https://frontiermakerspace.com/images/logo.png",
    "sameAs": [
      "https://twitter.com/frontiermakerspace",
      "https://linkedin.com/company/frontier-makerspace",
      "https://github.com/frontiermakerspace"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-415-555-0123",
      "contactType": "customer service",
      "email": "info@frontiermakerspace.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Innovation Way",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94107",
      "addressCountry": "US"
    }
  }

  // Particle animation effect (kept as is, but moved after the structured data)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Animation variables
    const particles: {
      x: number
      y: number
      radius: number
      color: string
      velocity: { x: number; y: number }
    }[] = []

    const colors = ["#0ea5e9", "#f97316", "#0284c7"]

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        velocity: {
          x: (Math.random() - 0.5) * 0.5,
          y: (Math.random() - 0.5) * 0.5,
        },
      })
    }


    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw grid
      ctx.strokeStyle = "#1e293b"
      ctx.lineWidth = 0.5
      const gridSize = 50

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += particle.velocity.x
        particle.y += particle.velocity.y

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
      })

      // Connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = particles[i].color
            ctx.globalAlpha = 0.2 * (1 - distance / 100)
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
            ctx.globalAlpha = 1
          }
        }
      }
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Frontier Makerspace | AI-Powered Fabrication Space in San Francisco</title>
        <meta 
          name="description" 
          content="Frontier Makerspace is a next-generation fabrication facility in San Francisco where AI meets physical manufacturing. Access advanced tools like laser cutters, CNC mills, and pick-and-place machines." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Frontier Makerspace | AI-Powered Fabrication Space" />
        <meta 
          property="og:description" 
          content="Experience the future of manufacturing with AI-controlled fabrication tools in the heart of San Francisco." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://frontiermakerspace.com" />
        <meta property="og:image" content="https://frontiermakerspace.com/images/og-image.jpg" />
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      
      <header className="relative h-screen flex items-center justify-center overflow-hidden" role="banner">
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 z-0" 
          style={{ filter: "blur(1px)" }} 
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90 z-10" />

        <div className="container relative z-20 px-4 md:px-6 mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-orange-500 leading-tight">
              Build the Future—Faster with AI-Powered Fabrication
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Frontier Makerspace in San Francisco bridges AI and physical manufacturing with cutting-edge tools including laser cutters, CNC mills, and automated pick-and-place systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => {
                  const ctaSection = document.getElementById('cta-section');
                  if (ctaSection) {
                    ctaSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-md transition-colors duration-200 h-14 flex items-center justify-center"
                aria-label="Request investor information package"
              >
                Request Investor Deck
                <Download className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
              <Button 
                asChild
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-500/10 hover:text-orange-400 h-14 px-8 py-6 text-lg"
              >
                <a 
                  href="https://berlinhouse.com/apply" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                  aria-label="Join our beta program (opens in new tab)"
                >
                  Join the Beta Program
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
