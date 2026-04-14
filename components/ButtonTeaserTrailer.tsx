import { Play } from 'lucide-react'

import { UI } from '@/texts/ui'

import { type ButtonTeaserTrailerProps } from './ButtonTeaserTrailer.types'

export const ButtonTeaserTrailer = ({ onClick, variant = 'modal' }: ButtonTeaserTrailerProps) => {
  const isHero = variant === 'hero'
  const textSize = isHero ? 'text-sm' : 'text-[0.8125rem]'
  const border = isHero ? 'border-white/20' : 'border-white/15'
  const bg = isHero ? 'bg-white/12' : 'bg-white/10'
  const hoverBg = isHero ? 'hover:bg-white/20' : 'hover:bg-white/18'

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-6 py-3 text-white font-medium rounded border transition-colors cursor-pointer select-none ${textSize} ${border} ${bg} ${hoverBg}`}
    >
      <Play size={isHero ? 15 : 14} fill="currentColor" />
      {UI.hero.teaserTrailer}
    </button>
  )
}
