'use client'

import { motion } from 'motion/react'
import {
  CalendarClock,
  ShieldCheck,
  BadgeCheck,
  MessageSquareHeart,
  MapPin,
  Timer,
  Zap,
  Headphones,
} from 'lucide-react'
import { Reveal } from './reveal'

const benefits = [
  { icon: CalendarClock, title: 'Agenda Online', desc: 'Marque a qualquer hora, sem ligações.' },
  { icon: ShieldCheck, title: 'Pagamento Seguro', desc: 'Transações protegidas de ponta a ponta.' },
  { icon: BadgeCheck, title: 'Profissionais Verificados', desc: 'Barbeiros avaliados e confiáveis.' },
  { icon: MessageSquareHeart, title: 'Avaliações Reais', desc: 'Opiniões de clientes de verdade.' },
  { icon: MapPin, title: 'Localização', desc: 'Encontre as melhores perto de você.' },
  { icon: Timer, title: 'Horários em Tempo Real', desc: 'Disponibilidade sempre atualizada.' },
  { icon: Zap, title: 'Confirmação Instantânea', desc: 'Reserva confirmada na hora.' },
  { icon: Headphones, title: 'Suporte', desc: 'Atendimento sempre que precisar.' },
]

export function Benefits() {
  return (
    <section className="bg-surface/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Por que escolher a Navalha
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-tight text-balance sm:text-5xl">
              Tudo que você precisa em um só lugar
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                className="group h-full rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-gold/40"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-gold transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
                  <b.icon className="size-5" />
                </span>
                <h3 className="mt-4 font-semibold">{b.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {b.desc}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
