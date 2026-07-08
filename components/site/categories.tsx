'use client'

import { motion } from 'motion/react'
import { Scissors, Sparkles, Eye, Palette, Zap, Layers, Droplets, Wind } from 'lucide-react'
import { Reveal } from './reveal'

const categories = [
  { icon: Scissors, label: 'Corte Masculino' },
  { icon: Wind, label: 'Barba' },
  { icon: Eye, label: 'Sobrancelha' },
  { icon: Palette, label: 'Pigmentação' },
  { icon: Sparkles, label: 'Luzes' },
  { icon: Layers, label: 'Degradê' },
  { icon: Droplets, label: 'Tratamentos' },
  { icon: Zap, label: 'Relâmpago' },
]

export function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <Reveal>
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Explore por categoria
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-tight text-balance sm:text-5xl">
            O serviço certo para o seu estilo
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
        {categories.map((cat, i) => (
          <Reveal key={cat.label} delay={i}>
            <motion.button
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group flex w-full flex-col items-center gap-3 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-gold/40"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-secondary text-gold transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
                <cat.icon className="size-5" />
              </span>
              <span className="text-center text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                {cat.label}
              </span>
            </motion.button>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
