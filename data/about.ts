import { type CastMember, type ShowDetail } from "@/types/about"

export const CAST: CastMember[] = [
  { name: "Sam Witwer", character: "Maul" },
  { name: "Gideon Adlon", character: "Devon Izara" },
  { name: "Wagner Moura", character: "Brander Lawson" },
  { name: "Richard Ayoade", character: "Two-Boots" },
  { name: "Dennis Haysbert", character: "Master Eeko-Dio-Daki" },
  { name: "Steve Blum", character: "Icarus" },
  { name: "Vanessa Marshall", character: "Rook Kast" },
  { name: "A.J. LoCascio", character: "Marrok" },
  { name: "Chris Diamantopoulos", character: "Looti Vario" },
]

export const SHOW_DETAILS: ShowDetail[] = [
  { key: "Created by", value: "Dave Filoni", accent: false, orange: false },
  { key: "Director", value: "Brad Rau", accent: false, orange: false },
  { key: "Head Writer", value: "Matt Michnovetz", accent: false, orange: false },
  { key: "Network", value: "Disney+", accent: false, orange: false },
  { key: "Genre", value: "Animated · Sci-Fi · Action", accent: false, orange: false },
  { key: "Premiered", value: "April 6, 2026", accent: false, orange: false },
  { key: "Season 2", value: "Confirmed", accent: false, orange: true },
  { key: "Tomatometer", value: "100%", accent: true, orange: false },
  { key: "Metacritic", value: "75 / 100", accent: false, orange: false },
]
