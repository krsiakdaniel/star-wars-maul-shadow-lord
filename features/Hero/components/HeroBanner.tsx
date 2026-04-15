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

      {/* gentle gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, var(--c-bg) 0%, rgba(10,10,15,0.1) 50%, transparent 80%), linear-gradient(to right, rgba(10,10,15,0.25) 0%, transparent 60%)',
        }}
      />
    </>
  )
}
