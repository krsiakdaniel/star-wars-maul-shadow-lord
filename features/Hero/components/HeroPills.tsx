import { UI } from '@/texts/ui'

export const HeroPills = () => {
  return (
    <div className="flex flex-wrap items-center gap-2 mb-4">
      <span className="inline-flex items-center px-2 py-1 rounded-[3px] text-[0.6875rem] font-semibold tracking-wide text-blue-400 bg-blue-400/20 border border-blue-400/40">
        {UI.hero.pillSeason}
      </span>
      <span className="inline-flex items-center px-2 py-1 rounded-[3px] text-[0.6875rem] font-semibold tracking-wide text-red-400 bg-red-600/20 border border-red-600/40">
        {UI.hero.pillRating}
      </span>
      <span className="inline-flex items-center px-2 py-1 rounded-[3px] text-[0.6875rem] font-semibold tracking-wide text-zinc-400 bg-white/8 border border-white/10">
        {UI.hero.pillGenre}
      </span>
    </div>
  )
}
