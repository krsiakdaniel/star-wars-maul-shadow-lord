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
      className="flex gap-8 border-b border-white/10 mb-8"
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
            className={`relative pb-4 select-none uppercase text-[1rem] font-semibold tracking-widest transition-colors cursor-pointer ${isHighlighted ? 'text-white' : 'text-zinc-500'}`}
          >
            {tab.label}
            {isHighlighted && (
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-white"
              />
            )}
          </button>
        )
      })}
    </div>
  )
}
