import { UI } from '@/texts/ui'

export const SectionHeader = () => {
  return (
    <div className="mb-8">
      <div className="inline-flex items-center bg-white/5 rounded-md px-4 py-2">
        <span className="text-white text-sm font-medium">{UI.episodeGrid.seasonLabel}</span>
      </div>
    </div>
  )
}
