import { UI } from '@/texts/ui'

import { type ButtonIMDBProps } from './ButtonIMDB.types'

export const ButtonIMDB = ({ href }: ButtonIMDBProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-6 py-3 text-[0.75rem] font-bold rounded no-underline text-black bg-yellow-400 border border-yellow-400 transition-opacity hover:opacity-85 select-none"
    >
      {UI.episodeModal.imdb}
    </a>
  )
}
