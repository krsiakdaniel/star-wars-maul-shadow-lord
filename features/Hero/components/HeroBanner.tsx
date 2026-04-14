export const HeroBanner = () => {
  return (
    <>
      {/* background — no filter/transform so background-attachment:fixed works */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/images/background/background-darth-maul-1.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, var(--c-bg) 0%, rgba(10,10,15,0.25) 40%, transparent 65%), linear-gradient(to right, rgba(10,10,15,0.6) 0%, rgba(10,10,15,0.1) 40%, transparent 100%)',
        }}
      />
    </>
  )
}
