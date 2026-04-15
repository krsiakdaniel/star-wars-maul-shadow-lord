import { Play } from 'lucide-react'

import { UI } from '@/texts/ui'

import { type ButtonTeaserTrailerProps } from './ButtonTeaserTrailer.types'

export const ButtonTeaserTrailer = ({ onClick }: ButtonTeaserTrailerProps) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 px-4 py-2 text-sm text-white font-medium rounded border border-white/20 bg-white/12 hover:bg-white/20 transition-colors cursor-pointer select-none"
    >
      <Play size={16} fill="currentColor" />
      {UI.hero.teaserTrailer}
    </button>
  )
}
