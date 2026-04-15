'use client'

import { useState } from 'react'

import Image from 'next/image'

import Lightbox from 'yet-another-react-lightbox'

import { ImageLightboxGridProps } from './ImageLightboxGrid.types'

import 'yet-another-react-lightbox/styles.css'

export const ImageLightboxGrid = ({
  items,
  containerClassName,
  cardClassName,
  ariaLabel,
  alt,
  sizes,
}: ImageLightboxGridProps) => {
  const [lightboxIndex, setLightboxIndex] = useState(-1)

  return (
    <>
      <div className={containerClassName}>
        {items.map((src, index) => (
          <div
            key={src}
            className={`animate-card-fade-in group relative overflow-hidden rounded-md transition-shadow duration-200 ease-out hover:ring-4 hover:ring-white cursor-pointer ${cardClassName}`}
            style={{ animationDelay: `${index * 0.06}s` }}
            onClick={() => setLightboxIndex(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setLightboxIndex(index)
            }}
            aria-label={`${ariaLabel} ${index + 1}`}
          >
            <Image
              src={src}
              alt={`${alt} ${index + 1}`}
              fill
              className="object-cover transition-transform duration-200 ease-out will-change-transform group-hover:scale-[1.05]"
              sizes={sizes}
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={items.map((src) => ({ src }))}
      />
    </>
  )
}
