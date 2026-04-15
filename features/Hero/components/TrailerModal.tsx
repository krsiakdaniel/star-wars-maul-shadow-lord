'use client'

import { useEffect, useRef } from 'react'

import { X } from 'lucide-react'

import { TEASER_EMBED_URL } from '@/data/constants'

import { UI } from '@/texts/ui'

import { type TrailerModalProps } from './TrailerModal.types'

export const TrailerModal = ({ open, onClose }: TrailerModalProps) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

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
        role="dialog"
        aria-modal="true"
        aria-label={UI.trailer.iframeTitle}
        className="relative w-full rounded-lg overflow-hidden bg-black shadow-2xl max-w-240"
        style={{
          transform: open ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(20px)',
          transition: 'transform 0.3s ease',
          boxShadow: '0 32px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.06)',
        }}
      >
        <button
          ref={closeButtonRef}
          className="absolute top-2 right-2 z-10 flex items-center justify-center w-8 h-8 rounded-full border border-white/10 text-zinc-400 text-base bg-black/60 transition-colors hover:bg-white/15 hover:text-white cursor-pointer"
          onClick={onClose}
          aria-label={UI.trailer.ariaClose}
        >
          <X size={16} />
        </button>
        <div className="relative aspect-video">
          {open && (
            <iframe
              src={TEASER_EMBED_URL}
              className="absolute inset-0 w-full h-full border-none"
              sandbox="allow-scripts allow-same-origin allow-presentation"
              allowFullScreen
              allow="autoplay"
              title={UI.trailer.iframeTitle}
            />
          )}
        </div>
      </div>
    </div>
  )
}
