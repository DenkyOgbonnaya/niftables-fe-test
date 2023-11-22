import type { Metadata } from 'next'
import './globals.css'
import { monumentExtended, satoshi } from '@/styles/font'

export const metadata: Metadata = {
  title: 'Dennis Ogbonnaya',
  description: 'Niftables Test',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} ${monumentExtended.variable}`}>{children}</body>
    </html>
  )
}
