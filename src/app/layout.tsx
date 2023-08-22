'use client'
import { Header } from '@/components/commons/Header'
import './globals.css'
import { BackgroundAnimated } from '@/components/commons/BackgroundAnimated'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <BackgroundAnimated />
      </body>
    </html>
  )
}
