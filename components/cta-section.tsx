"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Download, Send } from "lucide-react"

export default function CtaSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Here you would normally send the email to your backend
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setEmail("")
      }, 3000)
    }
  }

  return (
    <section id="cta-section" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-[300px] -left-[300px] w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-orange-400">
              Invest in the Infrastructure of Invention
            </h2>
            <p className="text-xl text-gray-300">
              Join us in building the future of hardware innovation. Request our investor deck or schedule a visit to
              our space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Request Deck */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300">
              <div className="mb-4 p-3 bg-blue-500/10 rounded-full w-fit">
                <Download className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Request the Deck</h3>
              <p className="text-gray-400 mb-6">
                Get our comprehensive investor deck with detailed information about our technology, market opportunity,
                and growth strategy.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="bg-gray-800/50 border-gray-700 focus:border-blue-500 text-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  {submitted ? "Deck Requested!" : "Request Deck"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            {/* Visit Space */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-orange-500/30 transition-all duration-300">
              <div className="mb-4 p-3 bg-orange-500/10 rounded-full w-fit">
                <Calendar className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Visit the Space</h3>
              <p className="text-gray-400 mb-6">
                Schedule a tour of our San Francisco facility to see our AI-controlled fabrication tools in action and
                meet the team.
              </p>

              <Button
                className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                onClick={() => window.open("https://calendly.com/turingxo/frontier-makerspace", "_blank", "noopener,noreferrer")}
              >
                Schedule a Visit
                <Calendar className="ml-2 h-4 w-4" />
              </Button>

              <div className="mt-4 pt-4 border-t border-gray-800">
                <p className="text-sm text-gray-400">Or contact us directly:</p>
                <a
                  href="mailto:info@frontiermakerspace.com"
                  className="text-orange-400 hover:text-orange-300 transition-colors"
                >
                  info@frontiermakerspace.com
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-400">
              Frontier Makerspace is backed by strategic partners in AI, robotics, and
              manufacturing.
            </p>
          </div>
        </div>
      </div>

      <footer className="mt-20 border-t border-gray-800">
        <div className="container px-4 md:px-6 mx-auto py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-orange-400">
                Frontier Makerspace
              </h3>
              <p className="text-gray-400 text-sm">Building the infrastructure for AI-driven hardware innovation</p>
            </div>

            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                GitHub
              </a>
            </div>
          </div>

          <div className="mt-6 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Frontier Makerspace. All rights reserved.
          </div>
        </div>
      </footer>
    </section>
  )
}
