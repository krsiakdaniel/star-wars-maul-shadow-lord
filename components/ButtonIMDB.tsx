import { ExternalLink } from 'lucide-react'

import { UI } from '@/texts/ui'

import { type ButtonIMDBProps } from './ButtonIMDB.types'

export const ButtonIMDB = ({ href }: ButtonIMDBProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-w-40 justify-center items-center gap-2 px-4 py-2 text-[0.75rem] font-bold rounded no-underline text-black bg-yellow-400 border border-yellow-400 transition-opacity hover:opacity-85 select-none"
    >
      {UI.episodeModal.imdb}
      <ExternalLink size={12} aria-hidden="true" />
    </a>
  )
}
