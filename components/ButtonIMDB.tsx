import { ExternalLink } from 'lucide-react'

import { UI } from '@/texts/ui'

import { type ButtonIMDBProps } from './ButtonIMDB.types'

export const ButtonIMDB = ({ href }: ButtonIMDBProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-w-40 justify-center items-center gap-2 px-4 py-2 text-sm font-bold rounded no-underline text-black bg-yellow-400 border border-yellow-400 transition-opacity hover:opacity-85 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
    >
      {UI.episodeModal.imdb}
      <span className="sr-only">{UI.srOnly.newTab}</span>
      <ExternalLink size={12} aria-hidden="true" />
    </a>
  )
}
