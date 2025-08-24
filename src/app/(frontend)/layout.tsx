import React from 'react'
import './styles.css'
import Footer from './(layout-components)/Footer/Footer'
import { Oswald, Source_Code_Pro } from 'next/font/google'
import Header from './(layout-components)/Header/Header'

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-oswald',
})

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-source-code-pro',
})

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className={`${oswald.variable} ${sourceCodePro.variable}`}>
      <head></head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 mb-40">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
