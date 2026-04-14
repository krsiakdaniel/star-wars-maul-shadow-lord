export const HeroBanner = () => {
  return (
    <>
      {/* background */}
      <div
        className="absolute inset-0 animate-slow-zoom"
        style={{
          backgroundImage: `url('/images/background/background-darth-maul-1.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%',
          filter: 'saturate(1.3) brightness(0.75)',
        }}
      />

      {/* gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, var(--c-bg) 0%, rgba(10,10,15,0.6) 40%, rgba(10,10,15,0.1) 70%, transparent 100%), linear-gradient(to right, rgba(10,10,15,0.8) 0%, rgba(10,10,15,0.3) 50%, transparent 100%)',
        }}
      />
    </>
  )
}
