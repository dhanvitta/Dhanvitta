import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dhanvitta',
  description: 'Master the Art of Stock Trading with dhanvitta',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-572RKSLF" />
      <GoogleAnalytics measurementId="G-BCGK8K7KB9" />
      <body className={inter.className}>{children}
        <Analytics />

      </body>
    </html>
  )
}
