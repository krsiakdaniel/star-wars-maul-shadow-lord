import { TEASER_EMBED_URL } from '@/data/constants'

import { UI } from '@/texts/ui'

export const EpisodeModalTrailer = () => {
  return (
    <div className="relative rounded-t-lg overflow-hidden bg-black aspect-video">
      <iframe
        src={TEASER_EMBED_URL}
        className="absolute inset-0 w-full h-full border-none"
        allowFullScreen
        allow="autoplay"
        title={UI.episodeModal.iframeTitle}
      />
    </div>
  )
}
