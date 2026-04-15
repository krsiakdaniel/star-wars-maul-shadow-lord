import type { MetadataRoute } from 'next'

const manifest = (): MetadataRoute.Manifest => ({
  name: 'Star Wars: Maul – Shadow Lord',
  short_name: 'Maul: Shadow Lord',
  description:
    'After the Clone Wars, a former Sith lord plots to rebuild his criminal empire on Janix — a planet untouched by the Empire. A Disney+ Original Series.',
  start_url: '/',
  display: 'standalone',
  background_color: '#09090b',
  theme_color: '#09090b',
  icons: [
    {
      src: '/favicon.png',
      sizes: 'any',
      type: 'image/png',
    },
  ],
})

export default manifest
