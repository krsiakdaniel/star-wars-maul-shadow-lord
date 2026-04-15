'use client'

import { useState } from 'react'

import { UI } from '@/texts/ui'

import { TabId, type TabsProps } from './Tabs.types'

const TABS: { id: TabId; label: string }[] = [
  { id: TabId.Episodes, label: UI.episodeGrid.tabEpisodes },
  { id: TabId.Gallery, label: UI.episodeGrid.tabGallery },
  { id: TabId.Posters, label: UI.episodeGrid.tabPosters },
  { id: TabId.Details, label: UI.episodeGrid.tabDetails },
]

export const Tabs = ({ activeTab, onTabChange }: TabsProps) => {
  const [hoveredTab, setHoveredTab] = useState<TabId | null>(null)

  return (
    <div
      role="tablist"
      aria-label={UI.tabs.ariaLabel}
      className="tabs-scroll flex gap-4 sm:gap-8 overflow-x-auto border-b border-white/10 mb-8"
    >
      {TABS.map((tab) => {
        const isActive = activeTab === tab.id
        const isHovered = hoveredTab === tab.id
        const isHighlighted = isActive || isHovered
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            aria-controls={`tabpanel-${tab.id}`}
            id={`tab-${tab.id}`}
            onClick={() => onTabChange(tab.id)}
            onMouseEnter={() => setHoveredTab(tab.id)}
            onMouseLeave={() => setHoveredTab(null)}
            className={`relative pb-4 shrink-0 select-none uppercase text-sm sm:text-[1rem] font-semibold tracking-wider sm:tracking-widest transition-colors cursor-pointer ${isHighlighted ? 'text-white' : 'text-zinc-400'}`}
          >
            {tab.label}
            {isHighlighted && (
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 right-0 h-0.75 rounded-full bg-white"
              />
            )}
          </button>
        )
      })}
    </div>
  )
}
