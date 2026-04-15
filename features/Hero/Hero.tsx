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
      <div className="relative flex items-end overflow-hidden min-h-120 sm:min-h-150 md:min-h-180 xl:min-h-210">
        <HeroBanner />

        {/* content */}
        <div className="relative z-10 animate-hero-fade-up px-8 pb-14 md:pb-18 md:px-16 max-w-155">
          <p className="sr-only">{UI.hero.eyebrow}</p>

          {/* SEO-only heading — visually hidden, logo image shown instead */}
          <h1 className="sr-only">
            {UI.hero.eyebrow} {UI.hero.title} {UI.hero.subtitle}
          </h1>

          <Image
            src="/images/logo/logo-maul-shadow-lord.webp"
            alt={`${UI.hero.eyebrow} ${UI.hero.title}: ${UI.hero.subtitle}`}
            width={400}
            height={179}
            className="mb-8 w-[200px] sm:w-[280px] md:w-[400px] h-auto"
            style={{ height: 'auto' }}
            priority
          />

          <HeroPills />

          {/* description */}
          <p className="mb-8 text-stone-200/75 text-sm font-light leading-[1.75] max-w-[500px]">
            {UI.hero.description}
          </p>

          <HeroActions onOpenTrailer={() => setTrailerOpen(true)} />
        </div>
      </div>

      <TrailerModal open={trailerOpen} onClose={() => setTrailerOpen(false)} />
    </>
  )
}
