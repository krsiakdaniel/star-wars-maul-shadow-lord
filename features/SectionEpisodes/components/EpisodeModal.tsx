'use client'

import { useEffect, useRef, useState } from 'react'

import { X } from 'lucide-react'

import { IMDB_BASE, IMDB_SHOW } from '@/data/constants'

import { UI } from '@/texts/ui'

import { type EpisodeModalProps } from './EpisodeModal.types'
import { EpisodeModalActions } from './EpisodeModalActions'
import { EpisodeModalStill } from './EpisodeModalStill'
import { EpisodeModalTrailer } from './EpisodeModalTrailer'

const FOCUSABLE =
  'button:not([disabled]), [href], input, select, textarea, iframe, [tabindex]:not([tabindex="-1"])'

export const EpisodeModal = ({ episode, onClose }: EpisodeModalProps) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const [showTrailer, setShowTrailer] = useState(false)
  const [visible, setVisible] = useState(false)
  const open = episode !== null

  useEffect(() => {
    if (open) {
      const raf = requestAnimationFrame(() => setVisible(true))
      return () => cancelAnimationFrame(raf)
    } else {
      setVisible(false)
    }
  }, [open])

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
    if (!open) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab') return
      const dialog = dialogRef.current
      if (!dialog) return
      const focusable = Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE))
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [open, onClose])

  const epNum = episode ? String(episode.order).padStart(2, '0') : ''
  const imdbHref = episode?.imdbId ? `${IMDB_BASE}${episode.imdbId}/` : IMDB_SHOW

  return (
    <div
      inert={!open}
      className="fixed inset-0 z-1000 flex items-center justify-center p-6 transition-opacity duration-300 backdrop-blur-md bg-black/60"
      style={{
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'all' : 'none',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="episode-modal-title"
        aria-describedby="episode-modal-description"
        className="relative w-full rounded-md overflow-hidden overflow-y-auto max-h-[90dvh] modal-scroll max-w-215"
        style={{
          background: 'var(--c-modal)',
          transform: visible ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(20px)',
          transition: 'transform 0.3s ease',
          boxShadow: '0 32px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.06)',
        }}
      >
        {/* close */}
        <button
          ref={closeButtonRef}
          className="absolute top-2 right-2 z-10 flex items-center justify-center w-8 h-8 rounded-md border border-white/10 text-zinc-400 text-base bg-black/60 transition-colors hover:bg-white/15 hover:text-white cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
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
