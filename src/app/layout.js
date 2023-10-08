import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dhanvitta',
  description: 'Master the Art of Stock Trading with dhanvitta',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>{children}</body>
    </html>
  )
}
