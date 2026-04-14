"use client"

import { useEffect, useRef, useState } from "react"

import Image from "next/image"

import { DISNEY_SHOW, IMDB_BASE, IMDB_SHOW, TEASER_ID } from "@/data/constants"
import { UI } from "@/texts/ui"
import { type EpisodeModalProps } from "./EpisodeModal.types"
import { SmallPlayIcon } from "./SmallPlayIcon"

export const EpisodeModal = ({ episode, onClose }: EpisodeModalProps) => {
  const [showTrailer, setShowTrailer] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const open = episode !== null

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleKey)
    return () => document.removeEventListener("keydown", handleKey)
  }, [onClose])

  const epNum = episode ? String(episode.num).padStart(2, "0") : ""
  const imdbHref = episode?.imdbId ? `${IMDB_BASE}${episode.imdbId}/` : IMDB_SHOW

  return (
    <div
      className="fixed inset-0 z-1000 flex items-start justify-center overflow-y-auto py-6 px-4 sm:px-6 transition-opacity duration-300 backdrop-blur-md bg-black/88"
      style={{
        opacity: open ? 1 : 0,
        pointerEvents: open ? "all" : "none",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className="relative w-full my-auto rounded-lg overflow-hidden"
        style={{
          maxWidth: "860px",
          background: "var(--c-modal)",
          transform: open ? "scale(1) translateY(0)" : "scale(0.95) translateY(20px)",
          transition: "transform 0.3s ease",
          boxShadow: "0 32px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.06)",
        }}
      >
        {/* close */}
        <button
          className="absolute top-3.5 right-3.5 z-10 flex items-center justify-center w-8 h-8 rounded-full border border-white/10 text-zinc-400 text-base bg-black/60 transition-colors hover:bg-white/15 hover:text-white cursor-pointer"
          onClick={onClose}
          aria-label={UI.episodeModal.ariaClose}
        >
          ✕
        </button>

        {/* still / trailer area */}
        {episode && (
          <>
            {/* still */}
            {!showTrailer && (
              <div
                className="relative rounded-t-lg overflow-hidden bg-black"
                style={{ aspectRatio: "16/9" }}
              >
                {episode.still ? (
                  <Image
                    src={episode.still}
                    alt={episode.title}
                    fill
                    className="object-cover"
                    style={{ filter: "brightness(0.7) saturate(0.9)" }}
                  />
                ) : (
                  <Image
                    src={`https://img.youtube.com/vi/${TEASER_ID}/maxresdefault.jpg`}
                    alt={episode.title}
                    fill
                    className="object-cover"
                    style={{ filter: "brightness(0.7) saturate(0.9)" }}
                  />
                )}
                {/* gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, var(--c-modal) 0%, rgba(20,16,26,0.4) 40%, transparent 70%), linear-gradient(to right, rgba(20,16,26,0.5) 0%, transparent 50%)",
                  }}
                />
                {/* info overlay */}
                <div className="absolute bottom-4 left-4 right-16 sm:bottom-6 sm:left-7 sm:right-20">
                  <p
                    className="mb-1.5 uppercase text-orange-500"
                    style={{
                      fontSize: "0.6875rem",
                      fontWeight: 600,
                      letterSpacing: "0.2em",
                    }}
                  >
                    {episode.chapter} · Season 1
                  </p>
                  <h2
                    className="text-white mb-2.5"
                    style={{
                      fontFamily: "var(--font-cinzel), serif",
                      fontSize: "clamp(1.25rem, 3vw, 1.875rem)",
                      fontWeight: 700,
                      lineHeight: 1.15,
                    }}
                  >
                    {episode.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs text-zinc-300">{episode.date}</span>
                    <span className="w-0.75 h-0.75 rounded-full shrink-0 bg-zinc-700" />
                    <span className="text-xs text-zinc-500">{episode.runtime}</span>
                    {episode.rating && (
                      <>
                        <span className="w-0.75 h-0.75 rounded-full shrink-0 bg-zinc-700" />
                        <span className="text-xs text-zinc-500">
                          ★ {episode.rating.toFixed(1)}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* trailer iframe */}
            {showTrailer && (
              <div
                className="relative rounded-t-lg overflow-hidden bg-black"
                style={{ aspectRatio: "16/9" }}
              >
                <iframe
                  ref={iframeRef}
                  src={`https://www.youtube.com/embed/${TEASER_ID}?autoplay=1&rel=0`}
                  className="absolute inset-0 w-full h-full border-none"
                  allowFullScreen
                  allow="autoplay"
                  title={UI.episodeModal.iframeTitle}
                />
              </div>
            )}

            {/* body */}
            <div className="px-4 pb-6 pt-5 sm:px-7 sm:pb-8 sm:pt-6">
              <div className="flex flex-wrap gap-2.5 mb-6">
                <a
                  href={DISNEY_SHOW}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-zinc-950 text-[0.8125rem] font-semibold rounded no-underline transition-colors hover:bg-white/88"
                >
                  <Image src="/images/logo/disney-logo.png" alt="Disney+" width={18} height={18} />
                  {UI.episodeModal.playOnDisney}
                </a>
                <button
                  onClick={() => setShowTrailer(true)}
                  className="inline-flex items-center gap-2 px-5 py-3 text-white text-[0.8125rem] font-medium rounded border border-white/15 bg-white/10 transition-colors hover:bg-white/18 cursor-pointer"
                >
                  <SmallPlayIcon />
                  {UI.episodeModal.teaserTrailer}
                </button>
                <a
                  href={imdbHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-3 text-[0.75rem] font-bold rounded no-underline text-black bg-yellow-400 border border-yellow-400 transition-opacity hover:opacity-85"
                >
                  {UI.episodeModal.imdb}
                </a>
              </div>

              <p
                className="mb-6 text-stone-400"
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 300,
                  lineHeight: 1.75,
                }}
              >
                {episode.overview}
              </p>

              <div
                className="grid grid-cols-2 gap-4 pt-5 sm:grid-cols-3 border-t border-white/6"
              >
                <div>
                  <p
                    className="mb-1 uppercase text-zinc-700"
                    style={{
                      fontSize: "10px",
                      fontWeight: 600,
                      letterSpacing: "0.15em",
                    }}
                  >
                    {UI.episodeModal.metaEpisode}
                  </p>
                  <p className="text-[0.8125rem] text-zinc-300">
                    E{epNum} — {episode.title}
                  </p>
                </div>
                <div>
                  <p
                    className="mb-1 uppercase text-zinc-700"
                    style={{
                      fontSize: "10px",
                      fontWeight: 600,
                      letterSpacing: "0.15em",
                    }}
                  >
                    {UI.episodeModal.metaAirDate}
                  </p>
                  <p className="text-[0.8125rem] text-zinc-300">{episode.date}</p>
                </div>
                <div>
                  <p
                    className="mb-1 uppercase text-zinc-700"
                    style={{
                      fontSize: "10px",
                      fontWeight: 600,
                      letterSpacing: "0.15em",
                    }}
                  >
                    {UI.episodeModal.metaSeason}
                  </p>
                  <p className="text-[0.8125rem] text-zinc-300">
                    {UI.episodeModal.metaSeasonValue}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}


