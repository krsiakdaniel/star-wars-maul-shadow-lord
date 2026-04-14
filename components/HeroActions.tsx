import Image from "next/image"

import { DISNEY_SHOW } from "@/data/constants"
import { UI } from "@/texts/ui"

import { type HeroActionsProps } from "./HeroActions.types"
import { PlayIcon } from "./PlayIcon"

export const HeroActions = ({ onOpenTrailer }: HeroActionsProps) => {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={DISNEY_SHOW}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-7 py-3 bg-white text-zinc-950 text-sm font-semibold rounded no-underline transition-colors hover:bg-white/90"
        style={{ fontSize: "0.875rem" }}
      >
        <Image src="/images/logo/disney-logo.png" alt="Disney+" width={20} height={20} />
        {UI.hero.playOnDisney}
      </a>
      <button
        onClick={onOpenTrailer}
        className="inline-flex items-center gap-2 px-6 py-3 text-white text-sm font-medium rounded border border-white/20 bg-white/12 transition-colors hover:bg-white/20 cursor-pointer"
        style={{ fontSize: "0.875rem" }}
      >
        <PlayIcon />
        {UI.hero.teaserTrailer}
      </button>
    </div>
  )
}
