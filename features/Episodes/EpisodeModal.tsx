'use client'

import { useEffect, useState } from 'react'

import { X } from 'lucide-react'

import { IMDB_BASE, IMDB_SHOW } from '@/data/constants'

import { UI } from '@/texts/ui'

import { type EpisodeModalProps } from './EpisodeModal.types'
import { EpisodeModalActions } from './components/EpisodeModalActions'
import { EpisodeModalStill } from './components/EpisodeModalStill'
import { EpisodeModalTrailer } from './components/EpisodeModalTrailer'

export const EpisodeModal = ({ episode, onClose }: EpisodeModalProps) => {
  const [showTrailer, setShowTrailer] = useState(false)
  const open = episode !== null

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

  const epNum = episode ? String(episode.num).padStart(2, '0') : ''
  const imdbHref = episode?.imdbId ? `${IMDB_BASE}${episode.imdbId}/` : IMDB_SHOW

  return (
    <div
      className="fixed inset-0 z-1000 flex items-start justify-center overflow-y-auto py-6 px-4 sm:px-6 transition-opacity duration-300 backdrop-blur-md bg-black/88"
      style={{
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'all' : 'none',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className="relative w-full my-auto rounded-lg overflow-hidden"
        style={{
          maxWidth: '860px',
          background: 'var(--c-modal)',
          transform: open ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(20px)',
          transition: 'transform 0.3s ease',
          boxShadow: '0 32px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.06)',
        }}
      >
        {/* close */}
        <button
          className="absolute top-3.5 right-3.5 z-10 flex items-center justify-center w-8 h-8 rounded-full border border-white/10 text-zinc-400 text-base bg-black/60 transition-colors hover:bg-white/15 hover:text-white cursor-pointer"
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
            <div className="px-4 pb-6 pt-5 sm:px-7 sm:pb-8 sm:pt-6">
              <EpisodeModalActions imdbHref={imdbHref} onShowTrailer={() => setShowTrailer(true)} />

              <p
                className="mb-6 text-stone-400"
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 300,
                  lineHeight: 1.75,
                }}
              >
                {episode.overview}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-5 sm:grid-cols-3 border-t border-white/6">
                <div>
                  <p
                    className="mb-1 uppercase text-zinc-700"
                    style={{
                      fontSize: '10px',
                      fontWeight: 600,
                      letterSpacing: '0.15em',
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
                      fontSize: '10px',
                      fontWeight: 600,
                      letterSpacing: '0.15em',
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
                      fontSize: '10px',
                      fontWeight: 600,
                      letterSpacing: '0.15em',
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
