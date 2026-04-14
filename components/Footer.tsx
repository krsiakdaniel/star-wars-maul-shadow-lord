import Image from 'next/image'

import { DISNEY_SHOW } from '@/data/constants'

import { UI } from '@/texts/ui'

export const Footer = () => {
  return (
    <footer className="flex flex-wrap justify-between items-center gap-4 px-5 py-6 md:px-16 md:py-8 border-t border-white/5">
      <span
        className="text-zinc-800"
        style={{
          fontFamily: 'var(--font-cinzel), serif',
          fontSize: '0.8125rem',
          fontWeight: 600,
          letterSpacing: '0.15em',
        }}
      >
        {UI.footer.brand} — <span className="text-red-600">{UI.footer.brandAccent}</span>
      </span>
      <a
        href={DISNEY_SHOW}
        target="_blank"
        rel="noopener noreferrer"
        className="opacity-30 hover:opacity-60 transition-opacity"
        aria-label="Disney+"
      >
        <Image src="/images/logo/disney-logo.png" alt="Disney+" width={22} height={22} />
      </a>
      <span className="text-zinc-800" style={{ fontSize: '0.75rem' }}>
        {UI.footer.disclaimer}
      </span>
    </footer>
  )
}
