import { Footer } from '@/components/Footer'

import { AboutSection } from '@/features/About/AboutSection'
import { EpisodeGrid } from '@/features/Episodes/EpisodeGrid'
import { Hero } from '@/features/Hero/Hero'

const Home = () => {
  return (
    <main>
      <Hero />
      <EpisodeGrid />
      <AboutSection />
      <Footer />
    </main>
  )
}

export default Home
