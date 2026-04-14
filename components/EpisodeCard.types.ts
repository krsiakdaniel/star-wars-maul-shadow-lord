import { type Episode } from "@/types/episode"

export type EpisodeCardProps = {
  episode: Episode
  index: number
  onClick: () => void
}
