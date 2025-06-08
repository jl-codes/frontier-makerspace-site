import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

export default function TeamSection() {
  const team = [
    {
      name: "Anna Hollingsworth",
      role: "Systems Architect",
      bio: "Artist and engineer with expertise in robotics and automated manufacturing systems. Champion of inclusivity for innovation. Led the development of autonomous fabrication processes.",
      image: "/images/team/anna-hollingsworth.jpeg",
      imageAlt: "Portrait of Anna Hollingsworth, Systems Architect at Frontier Makerspace",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Andrew Côté",
      role: "Engineering Physicist",
      bio: "PhD in Engineering Physics from UBC. With a background in nuclear fusion, plasma physics, LLMs for drug discovery & robotics, he is a maverick in the deep tech ecosystem.",
      image: "/images/team/andrew-cote.jpeg",
      imageAlt: "Portrait of Andrew Côté, Engineering Physicist at Frontier Makerspace",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Tony Loehr",
      role: "Software Strategist",
      bio: "Engineer with experience across Silicon Valley tech, defense, and startups—specializing in AI-driven robotic systems and autonomous infrastructure. Built scalable API platforms for autonomous manufacturing and robotic control.",
      image: "/images/team/tony-loehr.jpeg",
      imageAlt: "Portrait of Tony Loehr, Software Strategist at Frontier Makerspace",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={member.name} className="bg-gray-900/30 border-gray-800 overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src={member.image}
                  alt={member.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 2} // Load first two images with priority
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-orange-500 mb-4">{member.role}</p>
                <p className="text-gray-300 mb-6">{member.bio}</p>
                <div className="flex space-x-4">
                  <a href={member.social.twitter} className="text-gray-400 hover:text-white transition-colors">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-white transition-colors">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a href={member.social.github} className="text-gray-400 hover:text-white transition-colors">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
