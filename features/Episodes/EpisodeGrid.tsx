'use client'

import { useState } from 'react'

import { EPISODES } from '@/data/episodes'

import { UI } from '@/texts/ui'

import { Episode } from '@/types/episode'

import { CastCard } from '@/features/About/components/CastCard'
import { ShowDetailsCard } from '@/features/About/components/ShowDetailsCard'

import { EpisodeModal } from './EpisodeModal'
import { EpisodeCard } from './components/EpisodeCard'
import { EpisodeTabs } from './components/EpisodeTabs'
import { type Tab } from './components/EpisodeTabs.types'

export const EpisodeGrid = () => {
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null)
  const [activeTab, setActiveTab] = useState<Tab>('episodes')

  return (
    <>
      <section className="mx-auto px-8 pt-12 pb-20 md:px-16" style={{ maxWidth: '1400px' }}>
        {/* Tab bar */}
        <EpisodeTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Episodes tab */}
        {activeTab === 'episodes' && (
          <>
            <div className="flex items-baseline justify-between mb-7">
              <span
                className="uppercase text-white"
                style={{
                  fontFamily: 'var(--font-cinzel), serif',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  letterSpacing: '0.25em',
                }}
              >
                {UI.episodeGrid.seasonLabel}
              </span>
              <span className="text-zinc-600" style={{ fontSize: '0.75rem' }}>
                {UI.episodeGrid.episodeCount}
              </span>
            </div>

            <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
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

        {/* Details tab */}
        {activeTab === 'details' && (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12">
            <CastCard />
            <ShowDetailsCard />
          </div>
        )}
      </section>

      <EpisodeModal
        key={selectedEpisode?.num ?? -1}
        episode={selectedEpisode}
        onClose={() => setSelectedEpisode(null)}
      />
    </>
  )
}
