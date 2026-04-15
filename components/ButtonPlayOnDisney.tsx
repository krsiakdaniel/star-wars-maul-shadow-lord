import { Play } from 'lucide-react'

import { DISNEY_SHOW } from '@/data/constants'

import { UI } from '@/texts/ui'

export const ButtonPlayOnDisney = () => {
  return (
    <a
      href={DISNEY_SHOW}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-white text-zinc-950 font-semibold rounded no-underline transition-colors select-none hover:bg-white/90"
    >
      <Play size={16} fill="black" color="black" />
      {UI.hero.playOnDisney}
    </a>
  )
}
