import Image from 'next/image'

import { UI } from '@/texts/ui'

export const Footer = () => {
  return (
    <footer className="flex flex-wrap justify-between items-center gap-4 px-8 py-6 md:px-16 md:py-8 border-t border-white/5 bg-(--c-footer)">
      <span className="text-zinc-400 text-xs">
        {UI.footer.madeBy}{' '}
        <a
          href={UI.footer.domainUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-300 hover:text-white transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:shadow-[0_0_24px_4px_rgba(185,28,28,0.45)]"
        >
          {UI.footer.domain}
          <span className="sr-only">{UI.srOnly.newTab}</span>
        </a>
      </span>
      <Image
        src="/images/logo/logo-disney.webp"
        alt={UI.footer.disneyAlt}
        width={73}
        height={40}
        className="opacity-40"
      />
      <span className="text-zinc-400 text-xs">{UI.footer.disclaimer}</span>
    </footer>
  )
}
