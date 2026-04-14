import { type Episode } from '@/types/episode'

export type EpisodeModalProps = {
  episode: Episode | null
  onClose: () => void
}
