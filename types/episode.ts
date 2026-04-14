export interface Episode {
  num: number
  chapter: string
  title: string
  date: string
  runtime: string
  overview: string
  still: string | null
  imdbId: string | null
  rating?: number
}
