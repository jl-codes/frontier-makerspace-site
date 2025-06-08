import HeroSection from "@/components/hero-section"
import ProblemSection from "@/components/problem-section"
import SolutionSection from "@/components/solution-section"
import SpacesSection from "@/components/spaces-section"
import TeamSection from "@/components/team-section"
import VisionSection from "@/components/vision-section"
import CtaSection from "@/components/cta-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <SpacesSection />
      <TeamSection />
      <VisionSection />
      <CtaSection />
    </main>
  )
}
