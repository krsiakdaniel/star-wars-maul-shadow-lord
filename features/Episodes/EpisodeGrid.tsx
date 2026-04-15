'use client'

import { useState } from 'react'

import Image from 'next/image'

import Lightbox from 'yet-another-react-lightbox'

import { POSTERS } from '@/data/constants'
import { EPISODES } from '@/data/episodes'

import { UI } from '@/texts/ui'

import { Episode } from '@/types/episode'

import { CastCard } from '@/features/About/components/CastCard'
import { ShowDetailsCard } from '@/features/About/components/ShowDetailsCard'

import { EpisodeModal } from './EpisodeModal'
import { EpisodeCard } from './components/EpisodeCard'
import { EpisodeTabs } from './components/EpisodeTabs'
import { type Tab } from './components/EpisodeTabs.types'

import 'yet-another-react-lightbox/styles.css'

export const EpisodeGrid = () => {
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null)
  const [activeTab, setActiveTab] = useState<Tab>('episodes')
  const [lightboxIndex, setLightboxIndex] = useState(-1)

  return (
    <>
      <section className="px-8 pt-12 pb-20 md:px-16">
        {/* Tab bar */}
        <EpisodeTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Episodes tab */}
        {activeTab === 'episodes' && (
          <>
            <div className="flex items-baseline justify-between mb-8">
              <span className="uppercase text-white text-[0.8125rem] font-semibold tracking-[0.25em]">
                {UI.episodeGrid.seasonLabel}
              </span>
              <span className="text-zinc-600 text-xs">{UI.episodeGrid.episodeCount}</span>
            </div>

            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {EPISODES.map((ep, i) => (
                <EpisodeCard
                  key={ep.num}
                  episode={ep}
                  index={i}
                  onClick={() => setSelectedEpisode(ep)}
                />
              ))}
            </div>
          </>
        )}

        {/* Posters tab */}
        {activeTab === 'posters' && (
          <>
            <div className="flex items-baseline justify-between mb-8">
              <span className="uppercase text-white text-[0.8125rem] font-semibold tracking-[0.25em]">
                {UI.episodeGrid.seasonLabel}
              </span>
            </div>

            <div className="flex flex-wrap gap-6">
              {POSTERS.map((src, i) => (
                <div
                  key={src}
                  className="animate-card-fade-in relative overflow-hidden rounded-md transition-shadow duration-200 ease-out hover:ring-2 hover:ring-white cursor-pointer w-[280px] aspect-[2/3]"
                  style={{ animationDelay: `${i * 0.06}s` }}
                  onClick={() => setLightboxIndex(i)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') setLightboxIndex(i)
                  }}
                  aria-label={`${UI.episodeGrid.posterAriaLabel} ${i + 1}`}
                >
                  <Image
                    src={src}
                    alt={`${UI.episodeGrid.posterAlt} ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="280px"
                  />
                </div>
              ))}
            </div>
          </>
        )}

        {/* Details tab */}
        {activeTab === 'details' && (
          <>
            <div className="flex items-baseline justify-between mb-8">
              <span className="uppercase text-white text-[0.8125rem] font-semibold tracking-[0.25em]">
                {UI.episodeGrid.seasonLabel}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="animate-card-fade-in">
                <CastCard />
              </div>
              <div className="animate-card-fade-in">
                <ShowDetailsCard />
              </div>
            </div>
          </>
        )}
      </section>

      <EpisodeModal
        key={selectedEpisode?.num ?? -1}
        episode={selectedEpisode}
        onClose={() => setSelectedEpisode(null)}
      />

      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={POSTERS.map((src) => ({ src }))}
      />
    </>
  )
}
