import { CastCard } from "./CastCard"
import { ShowDetailsCard } from "./ShowDetailsCard"

export const AboutSection = () => {
  return (
    <section
      className="mx-auto grid grid-cols-1 gap-6 px-5 pb-16 lg:grid-cols-2 lg:gap-12 lg:px-16 lg:pb-20"
      style={{ maxWidth: "1400px" }}
    >
      <CastCard />
      <ShowDetailsCard />
    </section>
  )
}
