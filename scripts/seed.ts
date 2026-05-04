/**
 * Seed script — fetches all TMDB data for Star Wars: Maul - Shadow Lord,
 * saves structured data to data/show.json, and downloads images to public/images/.
 *
 * Run once with:  bun run seed
 * Re-run any time to pick up new episode stills (e.g. when ep 5-10 stills appear).
 * Already-downloaded files are skipped — safe to run multiple times.
 *
 * Requires TMDB_API_KEY in .env.local (loaded automatically by Bun).
 */
import { existsSync, mkdirSync, writeFileSync } from 'fs'
import { resolve } from 'path'

const TMDB_API_BASE = 'https://api.themoviedb.org/3'
const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p'
const TMDB_SERIES_ID = 289219
const OUTPUT_PATH = resolve(process.cwd(), 'data/show.json')

const getApiKey = (): string => {
  const key = process.env.TMDB_API_KEY
  if (!key) throw new Error('TMDB_API_KEY is not defined in .env.local')
  return key
}

const tmdbFetch = async <T>(path: string): Promise<T> => {
  const url = `${TMDB_API_BASE}${path}?api_key=${getApiKey()}`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`TMDB error: ${res.status} ${res.statusText} — ${url}`)
  return res.json() as Promise<T>
}

const downloadImage = async (
  tmdbPath: string,
  destPath: string,
  size = 'original',
): Promise<void> => {
  if (existsSync(destPath)) {
    console.log(`  skip  ${destPath.split('/public/')[1]}`)
    return
  }
  const url = `${TMDB_IMAGE_BASE}/${size}${tmdbPath}`
  const res = await fetch(url)
  if (!res.ok) {
    console.warn(`  WARN  failed to download ${url} (${res.status})`)
    return
  }
  writeFileSync(destPath, Buffer.from(await res.arrayBuffer()))
  console.log(`  saved ${destPath.split('/public/')[1]}`)
}

const ensureDir = (dir: string) => {
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true })
}

const filename = (tmdbPath: string) => tmdbPath.replace(/^\//, '')

const seed = async () => {
  console.log('Fetching TMDB data...\n')

  const [show, season, credits, images, videos] = await Promise.all([
    tmdbFetch<Record<string, unknown>>(`/tv/${TMDB_SERIES_ID}`),
    tmdbFetch<Record<string, unknown>>(`/tv/${TMDB_SERIES_ID}/season/1`),
    tmdbFetch<Record<string, unknown>>(`/tv/${TMDB_SERIES_ID}/credits`),
    tmdbFetch<Record<string, unknown>>(`/tv/${TMDB_SERIES_ID}/images`),
    tmdbFetch<Record<string, unknown>>(`/tv/${TMDB_SERIES_ID}/videos`),
  ])

  const seasonEpisodes = season.episodes as Array<Record<string, unknown>>
  const cast = credits.cast as Array<unknown>
  const crew = credits.crew as Array<unknown>
  const posters = images.posters as Array<Record<string, unknown>>
  const backdrops = images.backdrops as Array<Record<string, unknown>>
  const videoResults = videos.results as Array<unknown>

  console.log(`✓ show       — ${show.name}`)
  console.log(`✓ season     — ${seasonEpisodes.length} episodes`)
  console.log(`✓ credits    — ${cast.length} cast, ${crew.length} crew`)
  console.log(`✓ images     — ${posters.length} posters, ${backdrops.length} backdrops`)
  console.log(`✓ videos     — ${videoResults.length} videos`)

  writeFileSync(
    OUTPUT_PATH,
    JSON.stringify({ show, season, credits, images, videos }, null, 2),
    'utf-8',
  )
  console.log(`\n✓ data saved → data/show.json`)

  const root = resolve(process.cwd(), 'public/images')

  // Episode stills
  console.log('\nDownloading episode stills...')
  const episodesDir = resolve(root, 'episodes')
  ensureDir(episodesDir)
  for (const ep of seasonEpisodes) {
    if (!ep.still_path) {
      console.log(`  skip  ep ${ep.episode_number} — no still yet`)
      continue
    }
    const dest = resolve(episodesDir, `episode-${ep.episode_number}-still.jpg`)
    await downloadImage(ep.still_path as string, dest, 'w780')
  }

  // Posters
  console.log('\nDownloading posters...')
  const postersDir = resolve(root, 'posters')
  ensureDir(postersDir)
  for (const poster of posters) {
    const dest = resolve(postersDir, filename(poster.file_path as string))
    await downloadImage(poster.file_path as string, dest, 'w500')
  }

  // Backdrops
  console.log('\nDownloading backdrops...')
  const backgroundDir = resolve(root, 'background')
  ensureDir(backgroundDir)
  for (const backdrop of backdrops) {
    const dest = resolve(backgroundDir, filename(backdrop.file_path as string))
    await downloadImage(backdrop.file_path as string, dest, 'original')
  }

  // Main show poster
  if (show.poster_path) {
    console.log('\nDownloading main show poster...')
    const dest = resolve(postersDir, 'show-poster.jpg')
    await downloadImage(show.poster_path as string, dest, 'w500')
  }

  console.log('\nDone.')
}

seed().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})
