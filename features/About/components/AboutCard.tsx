import { type AboutCardProps } from './AboutCard.types'

export const AboutCard = ({ title, rows }: AboutCardProps) => {
  return (
    <div className="bg-white/3 border border-white/6 rounded-lg px-8 py-7">
      <p
        className="text-[0.625rem] font-semibold tracking-[0.35em] uppercase mb-4 pb-4 border-b border-white/6 text-orange-500"
        style={{ fontFamily: 'var(--font-cinzel), serif' }}
      >
        {title}
      </p>
      <div className="grid gap-3">
        {rows.map((row) => (
          <div
            key={row.left}
            className="flex justify-between items-baseline py-2 border-b border-white/4 last:border-b-0"
          >
            <span
              className="uppercase text-zinc-700"
              style={{ fontSize: '0.6875rem', letterSpacing: '0.1em' }}
            >
              {row.left}
            </span>
            <span
              className={row.rightClassName ?? 'text-zinc-300'}
              style={{ fontSize: '0.8125rem' }}
            >
              {row.right}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
