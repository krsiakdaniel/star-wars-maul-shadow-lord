import { UI } from "@/texts/ui"

export const Footer = () => {
  return (
    <footer
      className="flex flex-wrap justify-between items-center gap-4 px-5 py-6 md:px-16 md:py-8 border-t border-white/5"
    >
      <span
        className="text-zinc-800"
        style={{
          fontFamily: "var(--font-cinzel), serif",
          fontSize: "0.8125rem",
          fontWeight: 600,
          letterSpacing: "0.15em",
        }}
      >
        {UI.footer.brand} —{" "}
        <span className="text-red-600">{UI.footer.brandAccent}</span>
      </span>
      <span className="text-zinc-800" style={{ fontSize: "0.75rem" }}>
        {UI.footer.disclaimer}
      </span>
    </footer>
  )
}

