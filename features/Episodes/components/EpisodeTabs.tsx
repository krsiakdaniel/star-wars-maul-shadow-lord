'use client'

import { useState } from 'react'

import { UI } from '@/texts/ui'

import { type EpisodeTabsProps, type Tab } from './EpisodeTabs.types'

const TABS: { id: Tab; label: string }[] = [
  { id: 'episodes', label: UI.episodeGrid.tabEpisodes },
  { id: 'posters', label: UI.episodeGrid.tabPosters },
  { id: 'details', label: UI.episodeGrid.tabDetails },
]

export const EpisodeTabs = ({ activeTab, onTabChange }: EpisodeTabsProps) => {
  const [hoveredTab, setHoveredTab] = useState<Tab | null>(null)

  return (
    <div className="flex gap-8 border-b border-white/10 mb-8">
      {TABS.map((tab) => {
        const isActive = activeTab === tab.id
        const isHovered = hoveredTab === tab.id
        const isHighlighted = isActive || isHovered
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            onMouseEnter={() => setHoveredTab(tab.id)}
            onMouseLeave={() => setHoveredTab(null)}
            className={`relative pb-3 select-none uppercase text-[1rem] font-semibold tracking-widest transition-colors cursor-pointer ${isHighlighted ? 'text-white' : 'text-zinc-500'}`}
            style={{ fontFamily: 'var(--font-cinzel), serif' }}
          >
            {tab.label}
            {isHighlighted && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-white" />
            )}
          </button>
        )
      })}
    </div>
  )
}
