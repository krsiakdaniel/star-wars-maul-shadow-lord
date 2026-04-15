import { GALLERY } from '@/data/gallery'

import { UI } from '@/texts/ui'

import { ImageLightboxGrid } from '@/components/ImageLightboxGrid'

export const SectionGallery = () => (
  <ImageLightboxGrid
    items={GALLERY}
    containerClassName="grid gap-5 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    cardClassName="aspect-video bg-red-950"
    ariaLabel={UI.episodeGrid.galleryAriaLabel}
    alt={UI.episodeGrid.galleryAlt}
    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
  />
)
