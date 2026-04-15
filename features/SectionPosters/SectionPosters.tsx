import { POSTERS } from '@/data/posters'

import { UI } from '@/texts/ui'

import { ImageLightboxGrid } from '@/components/ImageLightboxGrid'

export const SectionPosters = () => (
  <ImageLightboxGrid
    items={POSTERS}
    containerClassName="flex flex-wrap gap-5"
    cardClassName="w-70 aspect-2/3 bg-red-950"
    ariaLabel={UI.episodeGrid.posterAriaLabel}
    alt={UI.episodeGrid.posterAlt}
    sizes="280px"
  />
)
