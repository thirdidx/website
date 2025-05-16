import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import {  Inconsolata, Instrument_Serif } from "next/font/google"

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-instrument-serif",
  display: "swap",
})

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inconsolata",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Third Index",
  description: "A technology studio building web applications with technical precision &amp; design intent."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${inconsolata.variable}`}>
      <body>{children}</body>
    </html>
  )
}
