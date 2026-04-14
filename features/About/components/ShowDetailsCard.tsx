import { SHOW_DETAILS } from '@/data/about'

import { UI } from '@/texts/ui'

import { AboutCard } from './AboutCard'

export const ShowDetailsCard = () => {
  const rows = SHOW_DETAILS.map((item) => ({
    left: item.key,
    right: item.value,
  }))

  return <AboutCard title={UI.aboutSection.detailsTitle} rows={rows} />
}
