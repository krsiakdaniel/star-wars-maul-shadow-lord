import { CAST, SHOW_DETAILS } from '@/data/details'

import { UI } from '@/texts/ui'

import { DetailsCard } from './components/DetailsCard'

export const SectionDetails = () => {
  const castRows = CAST.map((item) => ({
    left: item.character,
    right: item.name,
  }))

  const detailRows = SHOW_DETAILS.map((item) => ({
    left: item.key,
    right: item.value,
  }))

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
      <div className="animate-card-fade-in">
        <DetailsCard title={UI.detailsSection.castTitle} rows={castRows} />
      </div>
      <div className="animate-card-fade-in" style={{ animationDelay: '0.06s' }}>
        <DetailsCard title={UI.detailsSection.detailsTitle} rows={detailRows} />
      </div>
    </div>
  )
}
