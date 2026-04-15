import type { Metadata } from 'next'

export const siteMetadata: Metadata = {
  metadataBase: new URL('https://star-wars-maul-shadow-lord.vercel.app'),
  title: {
    default: 'Star Wars: Maul – Shadow Lord',
    template: '%s | Star Wars: Maul – Shadow Lord',
  },
  description:
    'After the Clone Wars, a former Sith lord plots to rebuild his criminal empire on Janix — a planet untouched by the Empire. A Disney+ Original Series.',
  keywords: [
    'Star Wars',
    'Maul',
    'Shadow Lord',
    'Disney+',
    'Sith',
    'Darth Maul',
    'animated series',
    'crime syndicate',
    'Janix',
    'Devon',
  ],
  authors: [{ name: 'Disney' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    title: 'Star Wars: Maul – Shadow Lord',
    description:
      'After the Clone Wars, a former Sith lord plots to rebuild his criminal empire on Janix — a planet untouched by the Empire. A Disney+ Original Series.',
    images: [
      {
        url: '/images/open-graph/og.webp',
        width: 1280,
        height: 720,
        alt: 'Maul – Shadow Lord',
      },
    ],
    siteName: 'Star Wars: Maul – Shadow Lord',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Star Wars: Maul – Shadow Lord',
    description:
      'After the Clone Wars, a former Sith lord plots to rebuild his criminal empire on Janix — a planet untouched by the Empire. A Disney+ Original Series.',
    images: ['/images/open-graph/og.webp'],
  },
  icons: {
    icon: '/favicon.png',
  },
}
