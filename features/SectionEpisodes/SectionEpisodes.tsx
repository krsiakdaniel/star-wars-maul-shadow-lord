'use client'

import { useState } from 'react'

import { EPISODES } from '@/data/episodes'

import { type Episode } from '@/features/SectionEpisodes/Episode.types'

import { EpisodeCard } from './components/EpisodeCard'
import { EpisodeModal } from './components/EpisodeModal'

export const SectionEpisodes = () => {
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null)

  return (
    <>
      <div className="grid gap-5 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {EPISODES.map((episode, index) => (
          <EpisodeCard
            key={episode.order}
            episode={episode}
            index={index}
            onClick={() => setSelectedEpisode(episode)}
          />
        ))}
      </div>

      <EpisodeModal
        key={selectedEpisode?.order ?? -1}
        episode={selectedEpisode}
        onClose={() => setSelectedEpisode(null)}
      />
    </>
  )
}
