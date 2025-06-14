import './styles.css'

import Footer from '@/components/LayoutComponents/Footer'
import Header from '@/components/LayoutComponents/Header'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { Metadata } from 'next'
import { Providers } from '@/providers'
import React from 'react'

export const metadata: Metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <div>{children}</div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
