'use client'

import { motion } from 'motion/react'
import {
  CalendarCheck,
  Globe,
  Wallet,
  CalendarRange,
  Users,
  LayoutDashboard,
  BarChart3,
  ArrowRight,
} from 'lucide-react'
import { Reveal } from './reveal'
import { CountUp } from './count-up'

const perks = [
  { icon: CalendarCheck, title: 'Agendamentos automáticos' },
  { icon: Globe, title: 'Página personalizada' },
  { icon: Wallet, title: 'Gestão financeira' },
  { icon: CalendarRange, title: 'Controle de agenda' },
  { icon: Users, title: 'Controle dos profissionais' },
  { icon: LayoutDashboard, title: 'Painel administrativo' },
  { icon: BarChart3, title: 'Relatórios completos' },
]

export function ForProfessionals() {
  return (
    <section id="profissionais" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[2rem] border border-gold/20 bg-surface p-8 sm:p-12 lg:p-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/10 blur-[100px]"
        />
        <div className="relative grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Para profissionais
              </p>
              <h2 className="mt-4 font-display text-4xl leading-[1] tracking-tight text-balance sm:text-5xl lg:text-6xl">
                Leve sua barbearia para{' '}
                <span className="text-gradient-gold">milhares de novos clientes.</span>
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
                Ganhe visibilidade, organize sua agenda e aumente seu faturamento
                com uma plataforma pensada para o profissional da navalha.
              </p>

              <a
                href="#"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-semibold text-gold-foreground transition-all duration-300 hover:gold-glow hover:brightness-110"
              >
                Cadastrar Barbearia
                <ArrowRight className="size-5" />
              </a>

              <div className="mt-8 flex gap-8">
                <div>
                  <CountUp
                    end={90000}
                    prefix="+"
                    className="font-display text-3xl text-gold"
                  />
                  <p className="text-xs text-muted-foreground">Agendamentos gerados</p>
                </div>
                <div>
                  <CountUp
                    end={40}
                    prefix="+"
                    className="font-display text-3xl text-gold"
                  />
                  <p className="text-xs text-muted-foreground">Cidades atendidas</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {perks.map((perk, i) => (
              <Reveal key={perk.title} delay={i}>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-background/60 p-4"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                    <perk.icon className="size-5" />
                  </span>
                  <span className="text-sm font-medium">{perk.title}</span>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
