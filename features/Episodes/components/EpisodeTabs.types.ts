export type Tab = 'episodes' | 'details'

export type EpisodeTabsProps = {
  activeTab: Tab
  onTabChange: (tab: Tab) => void
}
