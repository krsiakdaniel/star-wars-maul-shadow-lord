"use client"

import { useState } from "react"

import { EPISODES } from "@/data/episodes"
import { Episode } from "@/types/episode"
import { UI } from "@/texts/ui"

import { EpisodeCard } from "./EpisodeCard"
import { EpisodeModal } from "./EpisodeModal"

export const EpisodeGrid = () => {
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null)

  return (
    <>
      <section
        className="mx-auto px-5 pt-12 pb-20 md:px-10 xl:px-16"
        style={{ maxWidth: "1400px" }}
      >
        <div className="flex items-baseline justify-between mb-7">
          <span
            className="uppercase text-white"
            style={{
              fontFamily: "var(--font-cinzel), serif",
              fontSize: "0.8125rem",
              fontWeight: 600,
              letterSpacing: "0.25em",
            }}
          >
            {UI.episodeGrid.seasonLabel}
          </span>
          <span className="text-zinc-600" style={{ fontSize: "0.75rem" }}>
            {UI.episodeGrid.episodeCount}
          </span>
        </div>

        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {EPISODES.map((ep, i) => (
            <EpisodeCard
              key={ep.num}
              episode={ep}
              index={i}
              onClick={() => setSelectedEpisode(ep)}
            />
          ))}
        </div>
      </section>

      <EpisodeModal
        key={selectedEpisode?.num ?? -1}
        episode={selectedEpisode}
        onClose={() => setSelectedEpisode(null)}
      />
    </>
  )
}


