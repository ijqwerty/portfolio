import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { themeInitScript } from "@/lib/theme"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Issaih Jeremiah Mendiola — Software Developer",
  description:
    "Software Developer with experience in frontend, backend, and e-commerce systems. Skilled in Next.js, React, Tailwind CSS, and Python (Django REST Framework).",
  icons: {
    icon: [
      {
        url: "/code2.png",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/code2-dark.png",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/code2.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  )
}
