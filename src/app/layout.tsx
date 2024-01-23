import type { Metadata } from 'next'
import localFont from 'next/font/local'

import './globals.css'
import { Header } from '@/components/Header'
import { SongsProvider } from '@/hooks/Songs'

const articulat = localFont({
  src: [
    {
      path: '../../public/assets/fonts/ArticulatCF-Medium.otf',
      weight: '600',
      style: 'semibold',
    },
    {
      path: '../../public/assets/fonts/ArticulatCF-Normal.otf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-articulat',
})

export const metadata: Metadata = {
  title: 'Muse.ai',
  description: 'Muse.ai, listen to your music',
  authors: {
    name: 'Letícia Alexandre',
    url: 'https://github.com/leticiafrontend',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${articulat.className}`}>
        <SongsProvider>
          <div className="min-h-screen bg-black">
            <Header />
            {children}
          </div>
        </SongsProvider>
      </body>
    </html>
  )
}
