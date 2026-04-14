import type { Metadata } from "next"
import { Cinzel, Inter } from "next/font/google"

import "./globals.css"

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "900"],
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Maul — Shadow Lord",
  description:
    "After the Clone Wars, a former Sith lord plots to rebuild his criminal empire on Janix — a planet untouched by the Empire.",
  icons: {
    icon: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${inter.variable}`}>
      <body
        style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "16px", lineHeight: "1.6" }}
      >
        {children}
      </body>
    </html>
  )
}
