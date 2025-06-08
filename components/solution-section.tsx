"use client"

import { useEffect, useRef } from "react"
import { Cloud, Cpu, BotIcon as Robot } from "lucide-react"

export default function SolutionSection() {
  const animationRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-flow")
          }
        })
      },
      { threshold: 0.5 },
    )

    if (animationRef.current) {
      observer.observe(animationRef.current)
    }

    return () => {
      if (animationRef.current) {
        observer.unobserve(animationRef.current)
      }
    }
  }, [])

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Programmable Fabrication Infrastructure</h2>
          <p className="text-xl text-gray-300">
            We're building the first makerspace where AI systems can physically operate tools to build, iterate, and
            test hardware in the real world.
          </p>
        </div>

        <div
          ref={animationRef}
          className="relative max-w-4xl mx-auto h-[300px] md:h-[400px] bg-gray-900/30 rounded-xl border border-gray-800 p-6 overflow-hidden"
        >
          {/* Flow animation */}
          <div className="flex justify-between items-center h-full">
            {/* Cloud */}
            <div className="flex flex-col items-center w-1/3">
              <div className="p-4 bg-blue-500/10 rounded-full mb-4">
                <Cloud className="h-10 w-10 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">AI Design</h3>
              <p className="text-sm text-gray-400 text-center">
                Cloud-based AI generates designs and fabrication instructions
              </p>
            </div>

            {/* Robot */}
            <div className="flex flex-col items-center w-1/3">
              <div className="p-4 bg-orange-500/10 rounded-full mb-4">
                <Robot className="h-10 w-10 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Automated Tools</h3>
              <p className="text-sm text-gray-400 text-center">
                AI-controlled fabrication equipment executes instructions
              </p>
            </div>

            {/* Output */}
            <div className="flex flex-col items-center w-1/3">
              <div className="p-4 bg-blue-500/10 rounded-full mb-4">
                <Cpu className="h-10 w-10 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Physical Output</h3>
              <p className="text-sm text-gray-400 text-center">
                Rapid iteration of physical prototypes with feedback loop
              </p>
            </div>
          </div>

          {/* Flow lines */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {/* Line from Cloud to Robot */}
            <path
              d="M150,100 C200,50 250,150 300,100"
              fill="none"
              stroke="url(#blue-gradient)"
              strokeWidth="3"
              strokeDasharray="10,5"
              className="flow-path"
            />

            {/* Line from Robot to Output */}
            <path
              d="M350,100 C400,50 450,150 500,100"
              fill="none"
              stroke="url(#orange-gradient)"
              strokeWidth="3"
              strokeDasharray="10,5"
              className="flow-path"
            />

            {/* Feedback loop */}
            <path
              d="M500,150 C450,200 200,200 150,150"
              fill="none"
              stroke="url(#blue-gradient)"
              strokeWidth="2"
              strokeDasharray="5,5"
              className="flow-path-feedback"
            />

            {/* Gradients */}
            <defs>
              <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>

              <linearGradient id="orange-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#ea580c" />
              </linearGradient>
            </defs>
          </svg>

          {/* Animated dots */}
          <div className="absolute top-[100px] left-[150px] w-4 h-4 rounded-full bg-blue-500 animate-flow-dot-1"></div>
          <div className="absolute top-[100px] left-[350px] w-4 h-4 rounded-full bg-orange-500 animate-flow-dot-2"></div>
          <div className="absolute top-[150px] left-[325px] w-3 h-3 rounded-full bg-blue-400 animate-flow-dot-3"></div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our API-driven infrastructure enables AI systems to design, build, and iterate on physical prototypes
            without human intervention, dramatically accelerating hardware innovation.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes flowAnimation {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        
        .animate-flow .flow-path {
          animation: flowAnimation 3s linear infinite;
        }
        
        .animate-flow .flow-path-feedback {
          animation: flowAnimation 5s linear infinite;
        }
        
        @keyframes flowDot1 {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          10%, 90% { opacity: 1; transform: scale(1); }
          0% { transform: translate(0, 0) scale(0.5); }
          50% { transform: translate(150px, -50px) scale(1); }
          100% { transform: translate(300px, 0) scale(0.5); }
        }
        
        @keyframes flowDot2 {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          10%, 90% { opacity: 1; transform: scale(1); }
          0% { transform: translate(0, 0) scale(0.5); }
          50% { transform: translate(75px, -50px) scale(1); }
          100% { transform: translate(150px, 0) scale(0.5); }
        }
        
        @keyframes flowDot3 {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          10%, 90% { opacity: 1; transform: scale(1); }
          0% { transform: translate(0, 0) scale(0.5); }
          50% { transform: translate(-175px, 50px) scale(1); }
          100% { transform: translate(-350px, 0) scale(0.5); }
        }
        
        .animate-flow-dot-1 {
          animation: flowDot1 4s ease-in-out infinite;
          opacity: 0;
        }
        
        .animate-flow-dot-2 {
          animation: flowDot2 4s ease-in-out infinite;
          animation-delay: 2s;
          opacity: 0;
        }
        
        .animate-flow-dot-3 {
          animation: flowDot3 6s ease-in-out infinite;
          animation-delay: 4s;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}
