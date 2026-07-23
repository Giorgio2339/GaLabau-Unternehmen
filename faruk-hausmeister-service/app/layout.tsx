import type { Metadata, Viewport } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Hausmeister & Gartenservice Heide | Faruk Hausmeister und Garten-Service',
  description:
    'Garten- & Grünpflege, Hausmeisterservice und Umzugshilfe in Heide und Umgebung. Zuverlässig, pünktlich, fair – 5,0 Sterne bei 15 Google-Bewertungen.',
  keywords: [
    'Hausmeisterservice Heide',
    'Gartenpflege Heide',
    'Umzugshilfe Heide',
    'Handwerker Heide Schleswig-Holstein',
    'Rasenmähen Heide',
    'Reparaturen Heide',
  ],
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#F7F4EC',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${fraunces.variable} bg-[#F7F4EC]`}>
      <body className="antialiased font-sans">{children}</body>
    </html>
  )
}
