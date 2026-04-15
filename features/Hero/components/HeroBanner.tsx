import Image from 'next/image'

type HeroBannerProps = { parallaxY?: number }

export const HeroBanner = ({ parallaxY = 0 }: HeroBannerProps) => {
  return (
    <>
      {/* background — Next.js Image emits fetchpriority=high + preload link for LCP */}
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden"
        style={{ transform: `translateY(${parallaxY}px)`, willChange: 'transform' }}
      >
        <Image
          src="/images/background/background-darth-maul.webp"
          alt=""
          fill
          priority
          className="object-cover object-[center_20%] scale-[1.15]"
        />
      </div>

      {/* gentle gradient overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, var(--c-bg) 0%, rgba(10,10,15,0.1) 50%, transparent 80%), linear-gradient(to right, rgba(10,10,15,0.25) 0%, transparent 60%)',
        }}
      />
    </>
  )
}
