import type { Metadata } from 'next'

export const siteMetadata: Metadata = {
  metadataBase: new URL('https://maul-shadow-lord.vercel.app'),
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
        url: '/images/background/background-darth-maul.webp',
        width: 1920,
        height: 1080,
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
    images: ['/images/background/background-darth-maul.webp'],
  },
  icons: {
    icon: '/favicon.png',
  },
}
