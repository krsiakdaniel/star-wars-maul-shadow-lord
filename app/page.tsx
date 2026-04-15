import { Footer } from '@/components/Footer'
import { MainContent } from '@/components/MainContent'

import { Hero } from '@/features/Hero/Hero'

const Home = () => {
  return (
    <main>
      <Hero />
      <MainContent />
      <Footer />
    </main>
  )
}

export default Home
