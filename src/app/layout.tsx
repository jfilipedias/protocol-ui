import './globals.css'

import { Inter } from 'next/font/google'
import Header from '@/components/header'
import { HeroPattern } from '@/components/hero-pattern'
import Sidebar from '@/components/sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${inter.className}`}>
      <body className="bg-zinc-900">
        <Sidebar />

        <div className="relative ml-80 h-screen">
          <Header />
          <HeroPattern />

          <main className="max-w-4xl px-8 py-24">{children}</main>
        </div>
      </body>
    </html>
  )
}
