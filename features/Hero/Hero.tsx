'use client'

import { useState } from 'react'

import Image from 'next/image'

import { UI } from '@/texts/ui'

import { HeroActions } from './components/HeroActions'
import { HeroBanner } from './components/HeroBanner'
import { HeroPills } from './components/HeroPills'
import { TrailerModal } from './components/TrailerModal'

export const Hero = () => {
  const [trailerOpen, setTrailerOpen] = useState(false)

  return (
    <>
      {/* HERO */}
      <div className="relative flex items-end overflow-hidden h-[90vh] min-h-150">
        <HeroBanner />

        {/* content */}
        <div
          className="relative z-10 animate-hero-fade-up px-8 pb-14 md:pb-18 md:px-16"
          style={{ maxWidth: '620px' }}
        >
          <p className="sr-only">{UI.hero.eyebrow}</p>

          {/* SEO-only heading — visually hidden, logo image shown instead */}
          <h1 className="sr-only">
            {UI.hero.eyebrow} {UI.hero.title} {UI.hero.subtitle}
          </h1>

          <Image
            src="/images/logo/logo-maul-shadow-lord.webp"
            alt={`${UI.hero.eyebrow} ${UI.hero.title}: ${UI.hero.subtitle}`}
            width={400}
            height={150}
            className="mb-5"
            priority
          />

          <HeroPills />

          {/* description */}
          <p
            className="mb-7 text-stone-200/75"
            style={{
              fontSize: '0.875rem',
              fontWeight: 300,
              lineHeight: 1.75,
              maxWidth: '500px',
            }}
          >
            {UI.hero.description}
          </p>

          <HeroActions onOpenTrailer={() => setTrailerOpen(true)} />
        </div>
      </div>

      <TrailerModal open={trailerOpen} onClose={() => setTrailerOpen(false)} />
    </>
  )
}
