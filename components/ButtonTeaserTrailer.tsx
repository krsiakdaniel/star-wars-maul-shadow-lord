import { Play } from 'lucide-react'

import { type ButtonTeaserTrailerProps } from './ButtonTeaserTrailer.types'

export const ButtonTeaserTrailer = ({ text, onClick }: ButtonTeaserTrailerProps) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex min-w-40 justify-center items-center gap-2 px-4 py-2 text-sm text-white font-medium rounded bg-zinc-700 hover:bg-zinc-600 transition-colors cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-700 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
    >
      <Play size={16} fill="currentColor" aria-hidden="true" />
      {text}
    </button>
  )
}
