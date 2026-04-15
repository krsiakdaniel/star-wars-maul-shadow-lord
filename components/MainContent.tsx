'use client'

import { useState } from 'react'

import { SectionHeader } from '@/components/SectionHeader'

import { SectionDetails } from '@/features/SectionDetails/SectionDetails'
import { SectionEpisodes } from '@/features/SectionEpisodes/SectionEpisodes'
import { SectionGallery } from '@/features/SectionGallery/SectionGallery'
import { SectionPosters } from '@/features/SectionPosters/SectionPosters'

import { Tabs } from './Tabs'
import { TabId } from './Tabs.types'

export const MainContent = () => {
  const [activeTab, setActiveTab] = useState<TabId>(TabId.Episodes)

  return (
    <div className="px-8 pt-12 pb-20 md:px-16">
      <Tabs activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === TabId.Episodes && (
        <section
          role="tabpanel"
          id={`tabpanel-${TabId.Episodes}`}
          aria-labelledby={`tab-${TabId.Episodes}`}
        >
          <SectionHeader />
          <SectionEpisodes />
        </section>
      )}

      {activeTab === TabId.Posters && (
        <section
          role="tabpanel"
          id={`tabpanel-${TabId.Posters}`}
          aria-labelledby={`tab-${TabId.Posters}`}
        >
          <SectionHeader />
          <SectionPosters />
        </section>
      )}

      {activeTab === TabId.Gallery && (
        <section
          role="tabpanel"
          id={`tabpanel-${TabId.Gallery}`}
          aria-labelledby={`tab-${TabId.Gallery}`}
        >
          <SectionHeader />
          <SectionGallery />
        </section>
      )}

      {activeTab === TabId.Details && (
        <section
          role="tabpanel"
          id={`tabpanel-${TabId.Details}`}
          aria-labelledby={`tab-${TabId.Details}`}
        >
          <SectionHeader />
          <SectionDetails />
        </section>
      )}
    </div>
  )
}
