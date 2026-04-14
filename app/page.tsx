import { AboutSection } from "@/components/AboutSection"
import { EpisodeGrid } from "@/components/EpisodeGrid"
import { Footer } from "@/components/Footer"
import { Hero } from "@/components/Hero"

export default function Home() {
  return (
    <main>
      <Hero />
      <EpisodeGrid />
      <AboutSection />
      <Footer />
    </main>
  )
}
