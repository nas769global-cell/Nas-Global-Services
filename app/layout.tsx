import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'NAS Global Services - Urusan Pusaka, CIDB & Konsultasi',
  description: 'Layanan profesional untuk Urusan Pusaka, Pendaftaran CIDB, Hartanah, Pembinaan, dan Konsultasi. Urusan dunia, kita ikhtiarkan bersama.',
  keywords: 'Pusaka, CIDB, Hartanah, Pembinaan, Konsultasi, Malaysia',
  authors: [{ name: 'NAS Global Services' }],
  openGraph: {
    type: 'website',
    locale: 'ms_MY',
    url: 'https://nasglobalservices.com',
    siteName: 'NAS Global Services',
    title: 'NAS Global Services',
    description: 'Layanan profesional untuk Urusan Pusaka, CIDB & Konsultasi',
  },
  alternates: {
    canonical: 'https://nasglobalservices.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ms">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
