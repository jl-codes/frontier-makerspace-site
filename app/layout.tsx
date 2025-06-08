import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Frontier Makerspace',
  description: 'Frontier Makerspace - Build the Future',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="remove-grammarly-attributes" strategy="beforeInteractive">
          {`
            // Remove Grammarly and other extension attributes that cause hydration mismatch
            document.addEventListener('DOMContentLoaded', () => {
              document.body.removeAttribute('data-new-gr-c-s-check-loaded');
              document.body.removeAttribute('data-gr-ext-installed');
            });
          `}
        </Script>
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
