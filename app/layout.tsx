import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import {  Space_Grotesk, Inconsolata } from "next/font/google"

// const ibmPlexMono = IBM_Plex_Mono({
//   subsets: ["latin"],
//   weight: ["400", "500"],
//   variable: "--font-mono",
// })

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
})


export const metadata: Metadata = {
  title: "Third Index",
  description: "We develop web applications that navigate complexity with clarity."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inconsolata.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  )
}
