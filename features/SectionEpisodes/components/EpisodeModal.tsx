'use client'

import { useEffect, useRef, useState } from 'react'

import { X } from 'lucide-react'

import { IMDB_BASE, IMDB_SHOW } from '@/data/constants'

import { UI } from '@/texts/ui'

import { type EpisodeModalProps } from './EpisodeModal.types'
import { EpisodeModalActions } from './EpisodeModalActions'
import { EpisodeModalStill } from './EpisodeModalStill'
import { EpisodeModalTrailer } from './EpisodeModalTrailer'

export const EpisodeModal = ({ episode, onClose }: EpisodeModalProps) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const [showTrailer, setShowTrailer] = useState(false)
  const open = episode !== null

  useEffect(() => {
    if (open) closeButtonRef.current?.focus()
  }, [open])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  const epNum = episode ? String(episode.order).padStart(2, '0') : ''
  const imdbHref = episode?.imdbId ? `${IMDB_BASE}${episode.imdbId}/` : IMDB_SHOW

  return (
    <div
      aria-hidden={!open}
      className="fixed inset-0 z-1000 flex items-start justify-center overflow-y-auto py-6 px-4 sm:px-6 transition-opacity duration-300 backdrop-blur-md bg-black/60"
      style={{
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'all' : 'none',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="episode-modal-title"
        aria-describedby="episode-modal-description"
        className="relative w-full my-auto rounded-lg overflow-hidden max-w-215"
        style={{
          background: 'var(--c-modal)',
          transform: open ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(20px)',
          transition: 'transform 0.3s ease',
          boxShadow: '0 32px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.06)',
        }}
      >
        {/* close */}
        <button
          ref={closeButtonRef}
          className="absolute top-2 right-2 z-10 flex items-center justify-center w-8 h-8 rounded-full border border-white/10 text-zinc-400 text-base bg-black/60 transition-colors hover:bg-white/15 hover:text-white cursor-pointer"
          onClick={onClose}
          aria-label={UI.episodeModal.ariaClose}
        >
          <X size={16} />
        </button>

        {/* still / trailer area */}
        {episode && (
          <>
            {!showTrailer && <EpisodeModalStill episode={episode} />}
            {showTrailer && <EpisodeModalTrailer />}

            {/* body */}
            <div className="px-4 md:px-8 pt-4 pb-8">
              <EpisodeModalActions imdbHref={imdbHref} onShowTrailer={() => setShowTrailer(true)} />

              <p
                id="episode-modal-description"
                className="mb-6 text-stone-400 text-sm font-light leading-[1.75]"
              >
                {episode.overview}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-3 border-t border-white/6">
                <div>
                  <p className="mb-1 uppercase text-zinc-700 text-[10px] font-semibold tracking-[0.15em]">
                    {UI.episodeModal.metaEpisode}
                  </p>
                  <p className="text-[0.8125rem] text-zinc-300">
                    {UI.episodeModal.metaEpisodePrefix}
                    {epNum}
                    {UI.episodeModal.metaEpisodeSeparator}
                    {episode.title}
                  </p>
                </div>
                <div>
                  <p className="mb-1 uppercase text-zinc-700 text-[10px] font-semibold tracking-[0.15em]">
                    {UI.episodeModal.metaAirDate}
                  </p>
                  <p className="text-[0.8125rem] text-zinc-300">{episode.date}</p>
                </div>
                <div>
                  <p className="mb-1 uppercase text-zinc-700 text-[10px] font-semibold tracking-[0.15em]">
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
