import type { Metadata } from 'next'

import { siteMetadata } from '@/app/metadata'

import { cinzel, inter } from './fonts'

import './globals.css'

export const metadata: Metadata = siteMetadata

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en" className={`${cinzel.variable} ${inter.variable}`}>
      <body
        className="bg-zinc-950 text-base leading-[1.6]"
        style={{ fontFamily: 'var(--font-inter), sans-serif' }}
      >
        {children}
      </body>
    </html>
  )
}

export default RootLayout
