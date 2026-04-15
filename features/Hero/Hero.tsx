'use client'

import { useEffect, useRef, useState } from 'react'

import Image from 'next/image'

import { UI } from '@/texts/ui'

import { HeroActions } from './components/HeroActions'
import { HeroBanner } from './components/HeroBanner'
import { HeroPills } from './components/HeroPills'
import { TrailerModal } from './components/TrailerModal'

export const Hero = () => {
  const [trailerOpen, setTrailerOpen] = useState(false)
  const [parallaxY, setParallaxY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      const scrolled = -rect.top
      if (scrolled >= 0) setParallaxY(scrolled * 0.35)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div ref={heroRef} className="relative flex items-end overflow-hidden">
        <HeroBanner parallaxY={parallaxY} />

        {/* content */}
        <div className="relative z-10 px-8 pt-16 pb-14 md:px-16 max-w-155">
          <p className="sr-only">{UI.hero.eyebrow}</p>

          {/* SEO-only heading — visually hidden, logo image shown instead */}
          <h1 className="sr-only">
            {UI.hero.eyebrow} {UI.hero.title} {UI.hero.subtitle}
          </h1>

          <div className="animate-hero-item animate-hero-item-1">
            <Image
              src="/images/logo/logo-maul-shadow-lord.webp"
              alt={`${UI.hero.eyebrow} ${UI.hero.title}: ${UI.hero.subtitle}`}
              width={400}
              height={179}
              className="mb-8 w-[200px] sm:w-[280px] md:w-[400px] h-auto"
              style={{ height: 'auto' }}
              sizes="(max-width: 640px) 200px, (max-width: 768px) 280px, 400px"
              priority
            />
          </div>

          <div className="animate-hero-item animate-hero-item-2">
            <HeroPills />
          </div>

          {/* description */}
          <p className="animate-hero-item animate-hero-item-3 mb-8 text-stone-200/90 text-sm font-normal leading-[1.75] max-w-[500px]">
            {UI.hero.description}
          </p>

          <div className="animate-hero-item animate-hero-item-4">
            <HeroActions onOpenTrailer={() => setTrailerOpen(true)} />
          </div>
        </div>
      </div>

      <TrailerModal open={trailerOpen} onClose={() => setTrailerOpen(false)} />
    </>
  )
}
