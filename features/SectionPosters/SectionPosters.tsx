import { POSTERS } from '@/data/posters'

import { UI } from '@/texts/ui'

import { ImageLightboxGrid } from '@/components/ImageLightboxGrid'

export const SectionPosters = () => (
  <ImageLightboxGrid
    items={POSTERS}
    containerClassName="grid gap-5 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    cardClassName="aspect-2/3 bg-zinc-900"
    ariaLabel={UI.episodeGrid.posterAriaLabel}
    alt={UI.episodeGrid.posterAlt}
    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
  />
)
