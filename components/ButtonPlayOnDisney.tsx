import { Play } from 'lucide-react'

import { DISNEY_SHOW } from '@/data/constants'

import { UI } from '@/texts/ui'

import { type ButtonPlayOnDisneyProps } from './ButtonPlayOnDisney.types'

export const ButtonPlayOnDisney = ({ variant = 'modal' }: ButtonPlayOnDisneyProps) => {
  const isHero = variant === 'hero'
  const textSize = isHero ? 'text-sm' : 'text-[0.8125rem]'
  const hoverBg = isHero ? 'hover:bg-white/90' : 'hover:bg-white/88'

  return (
    <a
      href={DISNEY_SHOW}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-6 py-3 bg-white text-zinc-950 font-semibold rounded no-underline transition-colors select-none ${textSize} ${hoverBg}`}
    >
      <Play size={isHero ? 15 : 14} fill="black" color="black" />
      {UI.hero.playOnDisney}
    </a>
  )
}
