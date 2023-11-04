import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stiles Wedding',
  description: 'Welcome to our Pre-Wedding and Wedding',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="cupcake">
      <body>{children}</body>
    </html>
  )
}
