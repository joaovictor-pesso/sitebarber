import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Navalha — Agende cortes com os melhores barbeiros da sua cidade',
  description:
    'Encontre a barbearia perfeita em poucos segundos. Compare avaliações, veja horários disponíveis em tempo real e reserve seu horário em menos de um minuto.',
  generator: 'v0.app',
  keywords: [
    'barbearia',
    'agendamento',
    'corte de cabelo',
    'barbeiro',
    'agendar barbearia',
  ],
  openGraph: {
    title: 'Navalha — Seu próximo corte perfeito é agora',
    description:
      'Agende cortes com os melhores barbeiros da sua cidade em menos de um minuto.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0f0f0f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${bebas.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
