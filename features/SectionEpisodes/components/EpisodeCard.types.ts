import { type Episode } from '@/features/SectionEpisodes/Episode.types'

export type EpisodeCardProps = {
  episode: Episode
  index: number
  onClick: () => void
}
