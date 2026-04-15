import { UI } from '@/texts/ui'

export const SectionHeader = () => {
  return (
    <div className="mb-8">
      <div className="inline-flex items-center bg-white/8 rounded-full px-4 py-2">
        <span className="text-white text-sm font-medium">{UI.episodeGrid.seasonLabel}</span>
      </div>
    </div>
  )
}
