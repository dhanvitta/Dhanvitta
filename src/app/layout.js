import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"
import GoogleAnalytics from './utils/GoogleAnalytics'
// import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dhanvitta',
  description: 'Master the Art of Stock Trading with dhanvitta',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <GoogleTagManager gtmId="GTM-572RKSLF" /> */}
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-512x512.png"></link>
        <meta name="theme-color" content="#000" />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />

        {children}

        <Analytics />

      </body>
    </html>
  )
}
