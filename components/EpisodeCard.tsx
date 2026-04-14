"use client"

import Image from "next/image"

import { TEASER_ID } from "@/data/constants"
import { type EpisodeCardProps } from "./EpisodeCard.types"

export const EpisodeCard = ({ episode, index, onClick }: EpisodeCardProps) => {
  return (
    <div
      className="animate-card-fade-in cursor-pointer relative rounded-md overflow-hidden group transition-transform duration-200 ease-out hover:scale-[1.04] hover:-translate-y-1 hover:shadow-2xl"
      style={{
        background: "var(--c-card)",
        animationDelay: `${index * 0.06}s`,
        zIndex: "auto",
      }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick()
      }}
      aria-label={`${episode.chapter}: ${episode.title}`}
    >
      {/* thumbnail */}
      {episode.still ? (
        <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
          <Image
            src={episode.still}
            alt={episode.title}
            fill
            className="object-cover transition-[filter] duration-200"
            style={{ filter: "brightness(0.85) saturate(0.9)" }}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </div>
      ) : (
        <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
          <Image
            src={`https://img.youtube.com/vi/${TEASER_ID}/maxresdefault.jpg`}
            alt={episode.title}
            fill
            className="object-cover transition-[filter] duration-200"
            style={{ filter: "brightness(0.85) saturate(0.9)" }}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </div>
      )}

      {/* hover overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{
          background:
            "linear-gradient(to top, rgba(10,10,15,0.9) 0%, rgba(10,10,15,0.2) 60%, transparent 100%)",
        }}
      />

      {/* play button */}
      <div
        className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-[0.85] group-hover:scale-100 transition-all duration-200"
        style={{
          width: "44px",
          height: "44px",
          border: "1.5px solid rgba(255,255,255,0.7)",
          borderRadius: "50%",
        }}
      >
        <span
          style={{
            display: "block",
            width: 0,
            height: 0,
            borderStyle: "solid",
            borderWidth: "7px 0 7px 13px",
            borderColor: "transparent transparent transparent white",
            marginLeft: "3px",
          }}
        />
      </div>

      {/* info */}
      <div style={{ padding: "8px 12px 16px" }}>
        <p
          className="mb-0.75 uppercase text-orange-500"
          style={{ fontSize: "0.625rem", fontWeight: 600, letterSpacing: "0.1em" }}
        >
          {episode.chapter}
        </p>
        <p
          className="mb-1 overflow-hidden text-ellipsis whitespace-nowrap text-stone-200"
          style={{ fontSize: "0.8125rem", fontWeight: 500, lineHeight: 1.3 }}
        >
          {episode.title}
        </p>
        <p className="text-zinc-600" style={{ fontSize: "0.6875rem" }}>
          {episode.date}
        </p>
      </div>
    </div>
  )
}
