import { Play } from 'lucide-react'

import { DISNEY_SHOW } from '@/data/constants'

import { UI } from '@/texts/ui'

import { type HeroActionsProps } from './HeroActions.types'

export const HeroActions = ({ onOpenTrailer }: HeroActionsProps) => {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={DISNEY_SHOW}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-7 py-3 bg-white text-zinc-950 text-sm font-semibold rounded no-underline transition-colors hover:bg-white/90 select-none"
      >
        <Play size={15} fill="black" color="black" />
        {UI.hero.playOnDisney}
      </a>
      <button
        onClick={onOpenTrailer}
        className="inline-flex items-center gap-2 px-6 py-3 text-white text-sm font-medium rounded border border-white/20 bg-white/12 transition-colors hover:bg-white/20 cursor-pointer select-none"
      >
        <Play size={15} fill="currentColor" />
        {UI.hero.teaserTrailer}
      </button>
    </div>
  )
}
