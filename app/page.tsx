import { Footer } from '@/components/Footer'

import { EpisodeGrid } from '@/features/Episodes/EpisodeGrid'
import { Hero } from '@/features/Hero/Hero'

const Home = () => {
  return (
    <main>
      <Hero />
      <EpisodeGrid />
      <Footer />
    </main>
  )
}

export default Home
