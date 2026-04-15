'use client'

import Image from 'next/image'

import { Play } from 'lucide-react'

import { EPISODE_PLACEHOLDER } from '@/data/constants'

import { UI } from '@/texts/ui'

import { type EpisodeCardProps } from './EpisodeCard.types'

export const EpisodeCard = ({ episode, index, onClick }: EpisodeCardProps) => {
  return (
    <div
      className="animate-card-fade-in cursor-pointer group focus-visible:outline-none"
      style={{ animationDelay: `${index * 0.09}s` }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onClick()
      }}
      aria-label={`${episode.chapter}: ${episode.title}`}
    >
      {/* thumbnail */}
      <div className="relative rounded-md bg-zinc-900 overflow-hidden transition-all duration-200 ease-out ring-offset-2 ring-offset-black group-hover:ring-3 group-hover:ring-red-700 group-hover:shadow-[0_0_24px_4px_rgba(185,28,28,0.45)] group-focus-visible:ring-3 group-focus-visible:ring-red-700 group-focus-visible:shadow-[0_0_24px_4px_rgba(185,28,28,0.45)]">
        <div className="relative w-full aspect-video">
          <Image
            src={episode.still ?? EPISODE_PLACEHOLDER}
            alt={episode.title}
            fill
            className="object-cover transition-transform duration-200 ease-out will-change-transform group-hover:scale-[1.05]"
            sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 768px) calc(50vw - 2rem), calc(33vw - 2rem)"
            priority={index < 3}
          />
        </div>

        {/* play button */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-[0.85] group-hover:scale-100 transition-all duration-200 w-11 h-11 border-2 border-white/70 bg-white/30 rounded-full"
        >
          <Play size={16} fill="white" color="white" className="ml-0.5" />
        </div>
      </div>

      {/* info */}
      <div className="px-1 pt-2 pb-4">
        <p className="mb-1 uppercase text-orange-500 text-[0.625rem] font-semibold tracking-widest">
          {episode.chapter}
        </p>
        <p className="mb-1 overflow-hidden text-ellipsis whitespace-nowrap text-stone-200 text-[0.8125rem] leading-[1.3]">
          {episode.title}
        </p>
        <p className="text-zinc-400 text-[0.6875rem]">
          {episode.date}
          {episode.runtime && (
            <>
              {UI.srOnly.separator}
              {episode.runtime}
            </>
          )}
        </p>
      </div>
    </div>
  )
}
