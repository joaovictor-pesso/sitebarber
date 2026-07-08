'use client'

import { Scissors, AtSign, Share2, MessageCircle, ArrowRight } from 'lucide-react'
import { Reveal } from './reveal'

const columns = [
  {
    title: 'Plataforma',
    links: ['Serviços', 'Como Funciona', 'Barbearias', 'Profissionais'],
  },
  {
    title: 'Empresa',
    links: ['Sobre nós', 'Carreiras', 'Blog', 'Contato'],
  },
  {
    title: 'Legal',
    links: ['Termos de Uso', 'Política de Privacidade', 'Cookies', 'Direitos Autorais'],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      {/* Final CTA */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-center gap-6 rounded-[2rem] border border-gold/20 bg-surface p-10 text-center sm:p-14">
            <h2 className="font-display text-4xl tracking-tight text-balance sm:text-5xl">
              Seu próximo corte perfeito é <span className="text-gradient-gold">agora.</span>
            </h2>
            <p className="max-w-xl text-muted-foreground">
              Junte-se a milhares de clientes e barbearias que já agendam sem
              enrolação.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#barbearias"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground transition-all hover:gold-glow hover:brightness-110"
              >
                Encontrar Barbearias
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#profissionais"
                className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3.5 text-sm font-semibold transition-colors hover:border-gold/50"
              >
                Cadastrar Barbearia
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Links */}
      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-t border-border py-12 lg:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div>
            <a href="#" className="flex items-center gap-2.5" aria-label="Navalha início">
              <span className="flex size-9 items-center justify-center rounded-full border border-gold/40 text-gold">
                <Scissors className="size-4" />
              </span>
              <span className="font-display text-2xl leading-none tracking-wide">
                navalha<span className="text-gold">.</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A plataforma que conecta você aos melhores barbeiros da sua cidade.
              Agende em segundos, sem ligação, sem espera.
            </p>
            <div className="mt-5 flex gap-3">
              {[MessageCircle, AtSign, Share2].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Rede social"
                  className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-gold/50 hover:text-gold"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-gold"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Navalha. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Feito com precisão para a sua barbearia.
          </p>
        </div>
      </div>
    </footer>
  )
}
