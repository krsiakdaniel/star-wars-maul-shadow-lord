import Image from 'next/image'

import { UI } from '@/texts/ui'

export const Footer = () => {
  return (
    <footer className="flex flex-wrap justify-between items-center gap-4 px-8 py-6 md:px-16 md:py-8 border-t border-white/5 bg-zinc-950">
      <span className="text-zinc-500 text-xs">
        {UI.footer.madeBy}{' '}
        <a
          href={UI.footer.domainUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-300 hover:text-white transition-colors"
        >
          {UI.footer.domain}
        </a>
      </span>
      <Image
        src="/images/logo/logo-disney.webp"
        alt="Disney+"
        width={40}
        height={40}
        className="opacity-40"
      />
      <span className="text-zinc-500 text-xs">{UI.footer.disclaimer}</span>
    </footer>
  )
}
