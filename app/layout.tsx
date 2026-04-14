import { Cinzel, Inter } from 'next/font/google'

import type { Metadata } from 'next'

import './globals.css'

const cinzel = Cinzel({
  variable: '--font-cinzel',
  subsets: ['latin'],
  weight: ['400', '600', '900'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Maul — Shadow Lord',
  description:
    'After the Clone Wars, a former Sith lord plots to rebuild his criminal empire on Janix — a planet untouched by the Empire.',
  icons: {
    icon: '/favicon.png',
  },
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en" className={`${cinzel.variable} ${inter.variable}`}>
      <body
        className="text-base leading-[1.6]"
        style={{ fontFamily: 'var(--font-inter), sans-serif' }}
      >
        {children}
      </body>
    </html>
  )
}

export default RootLayout
