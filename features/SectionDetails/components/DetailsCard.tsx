import { type DetailsCardProps } from './DetailsCard.types'

export const DetailsCard = ({ title, rows }: DetailsCardProps) => {
  return (
    <div className="bg-white/3 border border-white/6 rounded-md p-8">
      <p
        className="text-xs font-semibold tracking-[0.35em] uppercase mb-4 pb-4 border-b border-white/6 text-orange-500"
        style={{ fontFamily: 'var(--font-cinzel), serif' }}
      >
        {title}
      </p>
      <div className="grid gap-2">
        {rows.map((row) => (
          <div
            key={row.left}
            className="flex justify-between items-baseline py-2 border-b border-white/4 last:border-b-0"
          >
            <span className="uppercase text-zinc-500 text-xs tracking-widest">{row.left}</span>
            <span className={`text-[0.8125rem] ${row.rightClassName ?? 'text-zinc-300'}`}>
              {row.right}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
