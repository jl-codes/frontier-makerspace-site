"use client"

import { useEffect, useRef } from "react"
import { CheckCircle2 } from "lucide-react"

export default function VisionSection() {
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timeline = entry.target
            const items = timeline.querySelectorAll(".timeline-item")

            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("active")
              }, index * 500)
            })
          }
        })
      },
      { threshold: 0.2 },
    )

    if (timelineRef.current) {
      observer.observe(timelineRef.current)
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current)
      }
    }
  }, [])

  const phases = [
    {
      title: "Phase 1: Hardware-enabled AI Prototyping",
      description:
        "Launch our San Francisco facility with AI-controlled fabrication tools, enabling rapid hardware prototyping for startups and enterprises.",
      features: ["Automated laser cutting, CNC, and assembly", "API-driven tool control", "Real-time feedback loops"],
      year: "2025",
    },
    {
      title: "Phase 2: API for Remote AI-controlled Builds",
      description:
        "Expand our infrastructure to enable remote access, allowing AI systems to design and build hardware from anywhere in the world.",
      features: ["Cloud-to-physical API", "Digital twin simulation", "Autonomous quality control"],
      year: "2026",
    },
    {
      title: "Phase 3: Global Distributed Manufacturing Nodes",
      description:
        "Scale to a network of AI-controlled fabrication facilities worldwide, creating a distributed manufacturing platform for the AI era.",
      features: [
        "Global network of facilities",
        "Localized production capabilities",
        "End-to-end supply chain integration",
      ],
      year: "2027",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">A Scalable Platform for Hard-Tech Invention</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our vision extends beyond a single facility to create a global infrastructure for AI-driven hardware
            innovation.
          </p>
        </div>

        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-orange-500 transform md:translate-x-[-50%]"></div>

          {phases.map((phase, index) => (
            <div
              key={index}
              className={`timeline-item relative flex flex-col md:flex-row mb-16 opacity-0 transition-all duration-700 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-[-8px] md:left-1/2 top-0 w-4 h-4 rounded-full bg-blue-500 border-2 border-gray-900 transform md:translate-x-[-50%] z-10"></div>

              {/* Year marker */}
              <div className="absolute left-6 md:left-1/2 top-0 bg-orange-500 text-black font-bold py-1 px-3 rounded-full text-sm transform md:translate-x-[-50%] md:translate-y-[-50%] z-20">
                {phase.year}
              </div>

              {/* Content */}
              <div className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3 text-blue-400">{phase.title}</h3>
                  <p className="text-gray-300 mb-4">{phase.description}</p>

                  <ul className="space-y-2">
                    {phase.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 max-w-2xl mx-auto">
            By building this infrastructure, we're creating the foundation for a new era of hardware innovation—where AI
            can design, build, and iterate on physical products at unprecedented speed and scale.
          </p>
        </div>
      </div>

      <style jsx>{`
        .timeline-item.active {
          opacity: 1;
          transform: translateY(0);
        }
        
        .timeline-item {
          transform: translateY(20px);
        }
      `}</style>
    </section>
  )
}
