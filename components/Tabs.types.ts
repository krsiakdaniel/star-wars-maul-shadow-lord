export enum TabId {
  Episodes = 'episodes',
  Gallery = 'gallery',
  Posters = 'posters',
  Details = 'details',
}

export type TabsProps = {
  activeTab: TabId
  onTabChange: (tab: TabId) => void
}
