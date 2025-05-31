import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Hazel’s Animal Talk 動物溝通",
  description: "連結您與毛孩的心靈橋樑 Listen, Connect, Understand",
  generator: 'v0.dev',
  metadataBase: new URL('https://hazelhealing.life'),
  icons: {
    icon: '/images/hazel-logo.png',
    apple: '/images/hazel-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/hazel-logo.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
