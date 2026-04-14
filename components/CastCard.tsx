import { CAST } from "@/data/about"
import { UI } from "@/texts/ui"

export const CastCard = () => {
  return (
    <div className="bg-white/3 border border-white/6 rounded-lg px-8 py-7">
      <p
        className="text-[0.625rem] font-semibold tracking-[0.35em] uppercase mb-4 pb-4 border-b border-white/6 text-orange-500"
        style={{ fontFamily: "var(--font-cinzel), serif" }}
      >
        {UI.aboutSection.castTitle}
      </p>
      {CAST.map((member) => (
        <div
          key={member.name}
          className="flex justify-between items-center py-2.5 border-b border-white/4 last:border-b-0"
        >
          <span className="text-stone-300" style={{ fontSize: "0.8125rem", fontWeight: 400 }}>
            {member.name}
          </span>
          <span className="text-zinc-600 italic" style={{ fontSize: "0.75rem" }}>
            {member.character}
          </span>
        </div>
      ))}
    </div>
  )
}
