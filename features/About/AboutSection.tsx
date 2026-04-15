import { CastCard } from './components/CastCard'
import { ShowDetailsCard } from './components/ShowDetailsCard'

export const AboutSection = () => {
  return (
    <section className="mx-auto grid grid-cols-1 gap-6 px-4 py-16 lg:grid-cols-2 lg:gap-12 lg:px-16 lg:py-16 max-w-[1400px]">
      <CastCard />
      <ShowDetailsCard />
    </section>
  )
}
