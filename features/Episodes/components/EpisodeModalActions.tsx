import { Play } from 'lucide-react'

import { DISNEY_SHOW } from '@/data/constants'

import { UI } from '@/texts/ui'

import { type EpisodeModalActionsProps } from './EpisodeModalActions.types'

export const EpisodeModalActions = ({ imdbHref, onShowTrailer }: EpisodeModalActionsProps) => {
  return (
    <div className="flex flex-wrap gap-2.5 mb-6">
      <a
        href={DISNEY_SHOW}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-zinc-950 text-[0.8125rem] font-semibold rounded no-underline transition-colors hover:bg-white/88 select-none"
      >
        <Play size={14} fill="black" color="black" />
        {UI.episodeModal.playOnDisney}
      </a>
      <button
        onClick={onShowTrailer}
        className="inline-flex items-center gap-2 px-5 py-3 text-white text-[0.8125rem] font-medium rounded border border-white/15 bg-white/10 transition-colors hover:bg-white/18 cursor-pointer select-none"
      >
        <Play size={14} fill="currentColor" />
        {UI.episodeModal.teaserTrailer}
      </button>
      <a
        href={imdbHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-4 py-3 text-[0.75rem] font-bold rounded no-underline text-black bg-yellow-400 border border-yellow-400 transition-opacity hover:opacity-85 select-none"
      >
        {UI.episodeModal.imdb}
      </a>
    </div>
  )
}
