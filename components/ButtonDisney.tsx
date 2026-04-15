import { ExternalLink } from 'lucide-react'

import { DISNEY_SHOW } from '@/data/constants'

import { UI } from '@/texts/ui'

export const ButtonDisney = () => {
  return (
    <a
      href={DISNEY_SHOW}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-w-40 justify-center items-center gap-2 px-4 py-2 text-sm bg-white text-zinc-950 font-semibold rounded no-underline transition-colors select-none hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
    >
      {UI.hero.visitDisney}
      <span className="sr-only">{UI.srOnly.newTab}</span>
      <ExternalLink size={12} aria-hidden="true" />
    </a>
  )
}
