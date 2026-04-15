'use client'

import { useEffect, useRef } from 'react'

import { X } from 'lucide-react'

import { TRAILER_EMBED_URL } from '@/data/constants'

import { UI } from '@/texts/ui'

import { type TrailerModalProps } from './TrailerModal.types'

const FOCUSABLE =
  'button:not([disabled]), [href], input, select, textarea, iframe, [tabindex]:not([tabindex="-1"])'

export const TrailerModal = ({ open, onClose }: TrailerModalProps) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)

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
        aria-label={UI.trailer.iframeTitle}
        className="relative w-full rounded-md overflow-hidden bg-black shadow-2xl max-w-215"
        style={{
          transform: open ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(20px)',
          transition: 'transform 0.3s ease',
          boxShadow: '0 32px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.06)',
        }}
      >
        <button
          ref={closeButtonRef}
          className="absolute top-2 right-2 z-10 flex items-center justify-center w-8 h-8 rounded-md border border-white/10 text-zinc-400 text-base bg-black/60 transition-colors hover:bg-white/15 hover:text-white cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          onClick={onClose}
          aria-label={UI.trailer.ariaClose}
        >
          <X size={16} />
        </button>
        <div className="relative aspect-video">
          {open && (
            <iframe
              src={TRAILER_EMBED_URL}
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
