'use client'

import { useLayoutEffect, useRef, useState } from 'react'

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
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [indicator, setIndicator] = useState<{ left: number; width: number }>({ left: 0, width: 0 })

  useLayoutEffect(() => {
    const activeIndex = TABS.findIndex((t) => t.id === activeTab)
    const el = tabRefs.current[activeIndex]
    if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth })
  }, [activeTab])

  return (
    <div
      role="tablist"
      aria-label={UI.tabs.ariaLabel}
      className="tabs-scroll relative flex gap-4 sm:gap-8 overflow-x-auto border-b border-white/10 mb-8 px-1 pt-1"
    >
      {TABS.map((tab, i) => {
        const isActive = activeTab === tab.id
        const isHovered = hoveredTab === tab.id
        const isHighlighted = isActive || isHovered
        return (
          <button
            key={tab.id}
            ref={(el) => {
              tabRefs.current[i] = el
            }}
            role="tab"
            aria-selected={isActive}
            aria-controls={`tabpanel-${tab.id}`}
            id={`tab-${tab.id}`}
            onClick={() => onTabChange(tab.id)}
            onMouseEnter={() => setHoveredTab(tab.id)}
            onMouseLeave={() => setHoveredTab(null)}
            className={`pb-4 shrink-0 select-none uppercase text-sm sm:text-[1rem] font-semibold tracking-wider sm:tracking-widest transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:rounded-sm ${isHighlighted ? 'text-white' : 'text-zinc-400'}`}
          >
            {tab.label}
          </button>
        )
      })}

      {/* sliding active indicator */}
      <span
        aria-hidden="true"
        className="absolute bottom-0 h-0.75 rounded-full bg-white transition-[left,width] duration-300 ease-out"
        style={{ left: indicator.left, width: indicator.width }}
      />
    </div>
  )
}
