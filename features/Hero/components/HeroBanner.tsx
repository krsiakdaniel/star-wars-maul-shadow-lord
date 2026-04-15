import Image from 'next/image'

export const HeroBanner = () => {
  return (
    <>
      {/* background — Next.js Image emits fetchpriority=high + preload link for LCP */}
      <Image
        src="/images/background/background-darth-maul.webp"
        alt=""
        fill
        priority
        className="object-cover object-[center_20%]"
        aria-hidden="true"
      />

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
