import { SHOW_DETAILS } from "@/data/about"
import { UI } from "@/texts/ui"

export const ShowDetailsCard = () => {
  return (
    <div className="bg-white/3 border border-white/6 rounded-lg px-8 py-7">
      <p
        className="text-[0.625rem] font-semibold tracking-[0.35em] uppercase mb-4 pb-4 border-b border-white/6 text-orange-500"
        style={{ fontFamily: "var(--font-cinzel), serif" }}
      >
        {UI.aboutSection.detailsTitle}
      </p>
      <div className="grid gap-3">
        {SHOW_DETAILS.map((item) => (
          <div
            key={item.key}
            className="flex justify-between items-baseline py-2 border-b border-white/4 last:border-b-0"
          >
            <span
              className="uppercase text-zinc-700"
              style={{ fontSize: "0.6875rem", letterSpacing: "0.1em" }}
            >
              {item.key}
            </span>
            <span
              className={
                item.accent ? "text-red-500" : item.orange ? "text-orange-500" : "text-zinc-300"
              }
              style={{
                fontSize: "0.8125rem",
                fontWeight: item.accent || item.orange ? 500 : 400,
              }}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
