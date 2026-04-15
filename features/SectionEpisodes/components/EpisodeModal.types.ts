import { type Episode } from '@/features/SectionEpisodes/Episode.types'

export type EpisodeModalProps = {
  episode: Episode | null
  onClose: () => void
}
