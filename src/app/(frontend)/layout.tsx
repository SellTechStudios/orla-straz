import './styles.css'
import { Metadata } from 'next'
import React from 'react'
import Footer from '@/app/(frontend)/(layout-components)/Footer/Footer'
import Header from '@/app/(frontend)/(layout-components)/Header/Header'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'

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
