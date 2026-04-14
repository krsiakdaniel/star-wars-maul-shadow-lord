import { CAST } from '@/data/about'

import { UI } from '@/texts/ui'

import { AboutCard } from './AboutCard'

export const CastCard = () => {
  const rows = CAST.map((item) => ({
    left: item.character,
    right: item.name,
  }))

  return <AboutCard title={UI.aboutSection.castTitle} rows={rows} />
}
