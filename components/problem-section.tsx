import { CircuitBoard, Clock, Layers } from "lucide-react"

export default function ProblemSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Physical Prototyping Is Still Manual</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Problem 1 */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 group">
            <div className="mb-4 p-3 bg-blue-500/10 rounded-full w-fit">
              <CircuitBoard className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
              AI can design, but can't fabricate
            </h3>
            <p className="text-gray-400">
              While AI has revolutionized digital design, it remains disconnected from physical manufacturing processes,
              creating a bottleneck in innovation.
            </p>
            <div className="mt-6 border-t border-gray-800 pt-4">
              <div className="w-full h-32 bg-gray-800/50 rounded-md overflow-hidden relative">
                <svg className="w-full h-full" viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M50,120 C80,80 120,140 150,100 C180,60 220,120 250,80"
                    fill="none"
                    stroke="#0ea5e9"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                  <circle cx="150" cy="100" r="10" fill="#0ea5e9" opacity="0.5" />
                  <text x="150" y="80" textAnchor="middle" fill="#fff" fontSize="10">
                    Design
                  </text>
                  <line x1="180" y1="100" x2="220" y2="100" stroke="#f97316" strokeWidth="2" strokeDasharray="2,2" />
                  <text x="200" y="90" textAnchor="middle" fill="#f97316" fontSize="10">
                    Gap
                  </text>
                  <rect x="230" y="90" width="20" height="20" fill="none" stroke="#f97316" strokeWidth="1" />
                  <text x="240" y="130" textAnchor="middle" fill="#fff" fontSize="10">
                    Fabrication
                  </text>
                </svg>
              </div>
            </div>
          </div>

          {/* Problem 2 */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 backdrop-blur-sm hover:border-orange-500/50 transition-all duration-300 group">
            <div className="mb-4 p-3 bg-orange-500/10 rounded-full w-fit">
              <Clock className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-400 transition-colors">
              Hardware iteration is slow, costly, and siloed
            </h3>
            <p className="text-gray-400">
              Traditional hardware development cycles are measured in months, not minutes, with high costs and
              fragmented expertise limiting innovation.
            </p>
            <div className="mt-6 border-t border-gray-800 pt-4">
              <div className="w-full h-32 bg-gray-800/50 rounded-md overflow-hidden relative">
                <svg className="w-full h-full" viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg">
                  <rect x="40" y="40" width="40" height="40" fill="none" stroke="#f97316" strokeWidth="1" />
                  <text x="60" y="65" textAnchor="middle" fill="#fff" fontSize="10">
                    Design
                  </text>

                  <line x1="80" y1="60" x2="120" y2="60" stroke="#f97316" strokeWidth="1" strokeDasharray="4,2" />
                  <text x="100" y="50" textAnchor="middle" fill="#f97316" fontSize="8">
                    Weeks
                  </text>

                  <rect x="120" y="40" width="40" height="40" fill="none" stroke="#f97316" strokeWidth="1" />
                  <text x="140" y="65" textAnchor="middle" fill="#fff" fontSize="10">
                    Build
                  </text>

                  <line x1="160" y1="60" x2="200" y2="60" stroke="#f97316" strokeWidth="1" strokeDasharray="4,2" />
                  <text x="180" y="50" textAnchor="middle" fill="#f97316" fontSize="8">
                    Weeks
                  </text>

                  <rect x="200" y="40" width="40" height="40" fill="none" stroke="#f97316" strokeWidth="1" />
                  <text x="220" y="65" textAnchor="middle" fill="#fff" fontSize="10">
                    Test
                  </text>

                  <path
                    d="M220,80 C220,100 60,100 60,80"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="1"
                    strokeDasharray="4,2"
                  />
                  <text x="140" y="110" textAnchor="middle" fill="#f97316" fontSize="8">
                    Repeat
                  </text>
                </svg>
              </div>
            </div>
          </div>

          {/* Problem 3 */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 group">
            <div className="mb-4 p-3 bg-blue-500/10 rounded-full w-fit">
              <Layers className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
              Most makerspaces are not programmable
            </h3>
            <p className="text-gray-400">
              Current makerspaces offer tools but lack the API-driven infrastructure needed for autonomous operation and
              AI-controlled fabrication.
            </p>
            <div className="mt-6 border-t border-gray-800 pt-4">
              <div className="w-full h-32 bg-gray-800/50 rounded-md overflow-hidden relative">
                <svg className="w-full h-full" viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg">
                  <rect x="70" y="30" width="160" height="90" rx="5" fill="none" stroke="#0ea5e9" strokeWidth="1" />
                  <text x="150" y="25" textAnchor="middle" fill="#fff" fontSize="10">
                    Makerspace
                  </text>

                  <rect x="90" y="50" width="30" height="20" fill="none" stroke="#fff" strokeWidth="1" opacity="0.5" />
                  <text x="105" y="85" textAnchor="middle" fill="#fff" fontSize="8">
                    Laser
                  </text>

                  <rect x="135" y="50" width="30" height="20" fill="none" stroke="#fff" strokeWidth="1" opacity="0.5" />
                  <text x="150" y="85" textAnchor="middle" fill="#fff" fontSize="8">
                    CNC
                  </text>

                  <rect x="180" y="50" width="30" height="20" fill="none" stroke="#fff" strokeWidth="1" opacity="0.5" />
                  <text x="195" y="85" textAnchor="middle" fill="#fff" fontSize="8">
                    3D Print
                  </text>

                  <line x1="50" y1="130" x2="250" y2="130" stroke="#f97316" strokeWidth="1" strokeDasharray="4,2" />
                  <text x="150" y="145" textAnchor="middle" fill="#f97316" fontSize="10">
                    No Programmable Interface
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
