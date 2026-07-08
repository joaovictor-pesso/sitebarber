'use client'

import { motion } from 'motion/react'
import {
  Star,
  Search,
  Store,
  CalendarCheck,
  MapPin,
  BellRing,
  QrCode,
  CheckCircle2,
} from 'lucide-react'
import { CountUp } from './count-up'

const stats = [
  { end: 500, prefix: '+', label: 'Barbearias' },
  { end: 18000, prefix: '+', label: 'Clientes' },
  { end: 90000, prefix: '+', label: 'Agendamentos' },
]

const float = (delay: number, distance = 12) => ({
  animate: {
    y: [0, -distance, 0],
    transition: {
      duration: 5 + delay,
      repeat: Infinity,
      ease: 'easeInOut' as const,
      delay,
    },
  },
})

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 lg:pt-36" id="servicos">
      {/* ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-gold/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-gold/5 blur-[140px]"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        {/* Left */}
        <div className="text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold"
          >
            Agendamento sem enrolação
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-display text-5xl leading-[0.95] tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            Encontre a barbearia perfeita em{' '}
            <span className="text-gradient-gold">poucos segundos.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground lg:mx-0 lg:text-lg"
          >
            Agende cortes com os melhores barbeiros da sua cidade. Compare
            avaliações, horários disponíveis e reserve seu horário em menos de um
            minuto.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <a
              href="#barbearias"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground transition-all duration-300 hover:gold-glow hover:brightness-110"
            >
              <Search className="size-4" />
              Encontrar Barbearias
            </a>
            <a
              href="#profissionais"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface/50 px-7 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-gold/50 hover:bg-surface"
            >
              <Store className="size-4" />
              Cadastrar minha Barbearia
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center lg:justify-start"
          >
            <div className="flex items-center gap-2">
              <div className="flex text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <span className="text-sm font-semibold">4.9</span>
            </div>
            <div className="hidden h-8 w-px bg-border sm:block" />
            <div className="flex items-center gap-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <CountUp
                    end={s.end}
                    prefix={s.prefix}
                    className="font-display text-2xl text-foreground"
                  />
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right — phone mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative mx-auto flex w-full max-w-sm items-center justify-center lg:max-w-md"
        >
          <PhoneMockup />

          {/* Floating cards */}
          <motion.div
            {...float(0.4)}
            className="glass-card absolute -left-4 top-16 hidden rounded-2xl border border-border p-3 shadow-xl sm:block"
          >
            <div className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-full bg-gold/15 text-gold">
                <Star className="size-4 fill-current" />
              </span>
              <div>
                <p className="text-sm font-semibold leading-none">4.9 · 312</p>
                <p className="text-[11px] text-muted-foreground">avaliações</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...float(0.9)}
            className="glass-card absolute -right-2 top-1/3 hidden rounded-2xl border border-border p-3 shadow-xl sm:block"
          >
            <div className="flex items-center gap-2">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
                <span className="relative inline-flex size-2.5 rounded-full bg-gold" />
              </span>
              <p className="text-xs font-medium">Diego M. · Online</p>
            </div>
          </motion.div>

          <motion.div
            {...float(1.3)}
            className="glass-card absolute -left-6 bottom-28 hidden rounded-2xl border border-border p-3 shadow-xl sm:block"
          >
            <div className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-xl bg-secondary text-gold">
                <QrCode className="size-4" />
              </span>
              <div>
                <p className="text-xs font-semibold leading-none">Check-in</p>
                <p className="text-[11px] text-muted-foreground">QR Code</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...float(0.6)}
            className="glass-card absolute -right-4 bottom-16 hidden rounded-2xl border border-border p-3 shadow-xl sm:block"
          >
            <div className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-full bg-gold/15 text-gold">
                <CheckCircle2 className="size-4" />
              </span>
              <div>
                <p className="text-xs font-semibold leading-none">Confirmado</p>
                <p className="text-[11px] text-muted-foreground">Hoje, 18:30</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function PhoneMockup() {
  return (
    <div className="relative w-[260px] rounded-[2.5rem] border border-border bg-surface p-2.5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] sm:w-[280px]">
      <div className="absolute left-1/2 top-3 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-background" />
      <div className="overflow-hidden rounded-[2rem] bg-background">
        {/* App header */}
        <div className="flex items-center justify-between px-4 pb-3 pt-7">
          <div>
            <p className="text-[11px] text-muted-foreground">Olá, Rafael</p>
            <p className="font-display text-lg leading-none">Vamos agendar?</p>
          </div>
          <span className="flex size-8 items-center justify-center rounded-full bg-gold text-gold-foreground">
            <BellRing className="size-4" />
          </span>
        </div>

        {/* Map strip */}
        <div className="relative mx-3 h-24 overflow-hidden rounded-xl border border-border bg-secondary">
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:18px_18px]" />
          <div className="absolute left-1/3 top-1/2 flex size-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold text-gold-foreground shadow-lg">
            <MapPin className="size-4" />
          </div>
          <div className="absolute right-6 top-4 size-3 rounded-full bg-gold/40" />
          <div className="absolute bottom-5 right-12 size-2 rounded-full bg-gold/30" />
        </div>

        {/* Appointment card */}
        <div className="m-3 rounded-xl border border-border bg-surface p-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
              Próximo horário
            </span>
            <span className="rounded-full bg-gold/15 px-2 py-0.5 text-[10px] font-semibold text-gold">
              Confirmado
            </span>
          </div>
          <div className="mt-2 flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-lg bg-gold/15 text-gold">
              <CalendarCheck className="size-5" />
            </span>
            <div>
              <p className="text-sm font-semibold leading-tight">Corte + Barba</p>
              <p className="text-[11px] text-muted-foreground">
                Diego M. · Hoje, 18:30
              </p>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
            <span className="text-[11px] text-muted-foreground">Valor</span>
            <span className="font-display text-lg text-gold">R$ 65,00</span>
          </div>
        </div>

        {/* Time slots */}
        <div className="flex gap-2 px-3 pb-5">
          {['17:00', '17:30', '18:30', '19:00'].map((t, i) => (
            <span
              key={t}
              className={`flex-1 rounded-lg py-2 text-center text-[11px] font-medium ${
                i === 2
                  ? 'bg-gold text-gold-foreground'
                  : 'bg-secondary text-muted-foreground'
              }`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
