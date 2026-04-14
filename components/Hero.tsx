"use client"

import { useState } from "react"

import { UI } from "@/texts/ui"

import { HeroActions } from "./HeroActions"
import { HeroBanner } from "./HeroBanner"
import { HeroPills } from "./HeroPills"
import { TrailerModal } from "./TrailerModal"

export const Hero = () => {
  const [trailerOpen, setTrailerOpen] = useState(false)

  return (
    <>
      {/* HERO */}
      <div className="relative flex items-end overflow-hidden" style={{ height: "90vh", minHeight: "600px" }}>
        <HeroBanner />

        {/* content */}
        <div
          className="relative z-10 animate-hero-fade-up px-5 pb-14 md:px-7 md:pb-18 lg:px-16"
          style={{ maxWidth: "620px" }}
        >
          {/* eyebrow */}
          <p
            className="flex items-center gap-3 mb-3 uppercase text-orange-500"
            style={{
              fontFamily: "var(--font-cinzel), serif",
              fontSize: "0.625rem",
              fontWeight: 600,
              letterSpacing: "0.45em",
            }}
          >
            <span
              className="block shrink-0 bg-orange-500"
              style={{ width: "24px", height: "1.5px" }}
            />
            {UI.hero.eyebrow}
          </p>

          {/* title */}
          <h1
            className="text-white leading-none mb-2"
            style={{
              fontFamily: "var(--font-cinzel), serif",
              fontSize: "clamp(3.25rem, 7vw, 5.625rem)",
              fontWeight: 900,
              textShadow: "0 2px 40px rgba(212,26,14,0.4)",
            }}
          >
            {UI.hero.title}
          </h1>

          {/* subtitle */}
          <p
            className="uppercase mb-5 text-orange-500"
            style={{
              fontFamily: "var(--font-cinzel), serif",
              fontSize: "clamp(0.8125rem, 2vw, 1.25rem)",
              fontWeight: 400,
              letterSpacing: "0.4em",
            }}
          >
            {UI.hero.subtitle}
          </p>

          <HeroPills />

          {/* description */}
          <p
            className="mb-7 text-stone-200/75"
            style={{
              fontSize: "0.875rem",
              fontWeight: 300,
              lineHeight: 1.75,
              maxWidth: "500px",
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


