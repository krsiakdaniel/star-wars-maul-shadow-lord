import Image from 'next/image'

import { EPISODE_PLACEHOLDER } from '@/data/constants'

import { UI } from '@/texts/ui'

import { type EpisodeModalStillProps } from './EpisodeModalStill.types'

export const EpisodeModalStill = ({ episode }: EpisodeModalStillProps) => {
  return (
    <div className="relative rounded-t-lg overflow-hidden bg-black aspect-video">
      {episode.still ? (
        <Image
          src={episode.still}
          alt={episode.title}
          fill
          className="object-cover"
          style={{ filter: 'brightness(0.7) saturate(0.9)' }}
        />
      ) : (
        <Image
          src={EPISODE_PLACEHOLDER}
          alt={episode.title}
          fill
          className="object-cover"
          style={{ filter: 'brightness(0.7) saturate(0.9)' }}
        />
      )}
      {/* gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, var(--c-modal) 0%, rgba(20,16,26,0.4) 40%, transparent 70%), linear-gradient(to right, rgba(20,16,26,0.5) 0%, transparent 50%)',
        }}
      />
      {/* info overlay */}
      <div className="absolute bottom-4 left-4 right-16 sm:bottom-6 sm:left-8 sm:right-20">
        <p className="mb-2 uppercase text-orange-500 text-[0.6875rem] font-semibold tracking-[0.2em]">
          {episode.chapter}
          {' \u00b7 '}
          {UI.episodeGrid.seasonLabel}
        </p>
        <h2
          id="episode-modal-title"
          className="text-white mb-2 text-[clamp(1.25rem,3vw,1.875rem)] font-bold leading-[1.15]"
          style={{ fontFamily: 'var(--font-cinzel), serif' }}
        >
          {episode.title}
        </h2>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-zinc-300">{episode.date}</span>
          <span className="w-0.75 h-0.75 rounded-full shrink-0 bg-zinc-700" />
          <span className="text-xs text-zinc-500">{episode.runtime}</span>
        </div>
      </div>
    </div>
  )
}
