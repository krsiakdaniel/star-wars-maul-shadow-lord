export type Tab = 'episodes' | 'posters' | 'details'

export type EpisodeTabsProps = {
  activeTab: Tab
  onTabChange: (tab: Tab) => void
}
