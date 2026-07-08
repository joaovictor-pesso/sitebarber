'use client'

import { Reveal } from './reveal'
import { CountUp } from './count-up'

const stats = [
  { end: 500, prefix: '+', label: 'Barbearias' },
  { end: 18000, prefix: '+', label: 'Clientes' },
  { end: 90000, prefix: '+', label: 'Agendamentos' },
  { end: 40, prefix: '+', label: 'Cidades' },
]

export function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-6 rounded-[2rem] border border-border bg-surface p-8 sm:p-12 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i}>
            <div className="text-center">
              <CountUp
                end={s.end}
                prefix={s.prefix}
                className="font-display text-5xl tracking-tight text-gradient-gold sm:text-6xl"
              />
              <p className="mt-2 text-sm font-medium text-muted-foreground">
                {s.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
