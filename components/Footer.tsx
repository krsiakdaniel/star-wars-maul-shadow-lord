import Image from 'next/image'

import { UI } from '@/texts/ui'

export const Footer = () => {
  return (
    <footer className="flex flex-wrap justify-between items-center gap-4 px-8 py-6 md:px-16 md:py-8 border-t border-white/5">
      <span
        className="text-red-600"
        style={{
          fontFamily: 'var(--font-cinzel), serif',
          fontSize: '0.8125rem',
          fontWeight: 600,
          letterSpacing: '0.15em',
        }}
      >
        {UI.footer.brand} — {UI.footer.brandAccent}
      </span>
      <Image
        src="/images/logo/logo-disney.webp"
        alt="Disney+"
        width={40}
        height={40}
        className="opacity-40"
      />
      <span className="text-zinc-500" style={{ fontSize: '0.75rem' }}>
        {UI.footer.disclaimer}
      </span>
    </footer>
  )
}
