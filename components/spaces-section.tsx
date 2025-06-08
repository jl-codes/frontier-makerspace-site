"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Printer, FlaskRoundIcon as Flask, MapPin, Building } from "lucide-react"
import Image from "next/image"

export default function SpacesSection() {
  const [activeTab, setActiveTab] = useState("prototyping")

  const spaces = [
    {
      id: "prototyping",
      title: "Prototyping Floor",
      description: "4000 sq ft dedicated to rapid hardware prototyping with AI-controlled fabrication tools.",
      icon: <Printer className="h-6 w-6" aria-hidden="true" />,
      features: [
        "Laser Cutting & Engraving",
        "Pick-and-Place Assembly",
        "CNC Milling & Routing",
        "3D Printing Farm",
        "Automated Testing Stations",
      ],
      image: "/images/spaces/prototyping-lab-frontier-makerspace.png",
      imageAlt: "Modern prototyping lab with various fabrication tools and workspaces"
    },
    {
      id: "lounge",
      title: "Lounge + Event Spaces",
      description: "4000 sq ft collaborative environment for networking, presentations, and community building.",
      icon: <Building className="h-6 w-6" aria-hidden="true" />,
      features: [
        "800+ Person Event Capacity",
        "Private Meeting Rooms",
        "Podcast & Media Studio",
        "Café & Refreshments",
        "Demo Showcase Area",
      ],
      image: "/images/spaces/lounge-event-space-frontier-makerspace.png",
      imageAlt: "Modern event space with lounge seating and presentation area"
    },
    {
      id: "expansion",
      title: "Expansion Floors",
      description: "Multiple other floors dedicated to cutting-edge technology development.",
      icon: <Flask className="h-6 w-6" aria-hidden="true" />,
      features: [
        "Biotechnology Laboratory",
        "Robotics Testing Arena",
        "Longevity Research Floor",
        "Auxiliary Fabrication Space",
        "Web3 Development Lab",
      ],
      image: "/images/spaces/expansion-space-frontier-makerspace.png",
      imageAlt: "Flexible research and development space with modern equipment"
    },
  ]

  // Schema.org structured data for LocalBusiness
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Frontier Makerspace",
    "image": "https://frontiermakerspace.com/images/og-image.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "995 Market St",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94107",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "37.7749",
      "longitude": "-122.4194"
    },
    "url": "https://frontiermakerspace.com",
    "telephone": "+1-415-555-0123",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ]
  }

  return (
    <section 
      className="py-20 bg-gradient-to-b from-gray-900 to-black"
      aria-label="Facility spaces and capabilities"
    >
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="container px-4 md:px-6 mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Spaces & Capabilities</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our 12,000 sq ft facility in downtown San Francisco houses everything needed for AI-driven hardware
            innovation.
          </p>
        </header>

        <div className="flex items-center justify-center mb-8">
          <div className="bg-gray-800/50 p-2 rounded-lg">
            <MapPin className="h-5 w-5 text-orange-500 inline-block mr-2" aria-hidden="true" />
            <span className="text-gray-300">Frontier Tower, Downtown San Francisco</span>
          </div>
        </div>

        <Tabs 
          defaultValue="prototyping" 
          className="w-full max-w-5xl mx-auto"
          onValueChange={(value) => setActiveTab(value)}
        >
          <TabsList 
            className="grid grid-cols-3 mb-8 bg-gray-900/50 p-1 rounded-lg"
            aria-label="Select space type"
          >
            {spaces.map((space) => (
              <TabsTrigger
                key={space.id}
                value={space.id}
                className={`data-[state=active]:bg-gradient-to-r ${
                  space.id === "prototyping" || space.id === "expansion"
                    ? "data-[state=active]:from-blue-600 data-[state=active]:to-blue-800"
                    : "data-[state=active]:from-orange-600 data-[state=active]:to-orange-800"
                } data-[state=active]:text-white`}
                id={`tab-${space.id}`}
                aria-controls={`tabpanel-${space.id}`}
              >
                <div className="flex items-center">
                  {space.icon}
                  <span className="ml-2 hidden md:inline">{space.title}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {spaces.map((space) => (
            <TabsContent 
              key={space.id} 
              value={space.id} 
              className="mt-0"
              id={`tabpanel-${space.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${space.id}`}
              tabIndex={0}
            >
              <Card className="bg-gray-900/30 border-gray-800 overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-6 md:p-8">
                      <h3 className="text-2xl font-bold mb-4">{space.title}</h3>
                      <p className="text-gray-300 mb-6">{space.description}</p>

                      <ul className="space-y-3 mb-6">
                        {space.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <div
                              className={`h-2 w-2 rounded-full mr-3 ${
                                space.id === "prototyping" || space.id === "expansion" ? "bg-blue-500" : "bg-orange-500"
                              }`}
                              aria-hidden="true"
                            ></div>
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        className={`mt-4 ${
                          space.id === "prototyping" || space.id === "expansion"
                            ? "bg-blue-600 hover:bg-blue-700"
                            : "bg-orange-600 hover:bg-orange-700"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          const url = space.id === "prototyping" 
                            ? 'https://general-lithium-hq.com' 
                            : 'https://berlinhouse.com';
                          window.open(url, '_blank', 'noopener,noreferrer');
                        }}
                        aria-label={space.id === "prototyping" ? "Claim your pass" : `Learn more about ${space.title}`}
                      >
                        {space.id === "prototyping" ? "Claim Your Pass" : "Learn More"}
                      </Button>
                    </div>

                    <div className="relative h-[300px] md:h-auto overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent z-10 md:hidden"></div>
                      <Image
                        src={space.image}
                        alt={space.imageAlt}
                        className="w-full h-full object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={space.id === "prototyping"} // Load first image with priority
                      />
                      <div
                        className={`absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t ${
                          space.id === "prototyping" || space.id === "expansion"
                            ? "from-blue-900/50 to-transparent"
                            : "from-orange-900/50 to-transparent"
                        }`}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <footer className="mt-12 text-center">
          <p className="text-gray-400">
            All spaces are equipped with our proprietary API-driven infrastructure, enabling seamless integration with
            AI systems.
          </p>
        </footer>
      </div>
    </section>
  )
}
