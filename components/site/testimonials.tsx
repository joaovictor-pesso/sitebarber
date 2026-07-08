'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'motion/react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { Reveal } from './reveal'

const testimonials = [
  {
    name: 'Rafael Almeida',
    role: 'Cliente · São Paulo',
    rating: 5,
    avatar: '/avatars/rafael.png',
    text: 'Marquei meu corte em menos de um minuto. Vi as avaliações, escolhi o barbeiro e apareceu o horário na hora. Nunca mais liguei para agendar.',
  },
  {
    name: 'Lucas Ferreira',
    role: 'Cliente · Rio de Janeiro',
    rating: 5,
    avatar: '/avatars/lucas.png',
    text: 'A confirmação instantânea salva demais. Consigo ver os horários em tempo real e não perco mais tempo. Interface linda e super rápida.',
  },
  {
    name: 'Marcos Oliveira',
    role: 'Dono de barbearia · BH',
    rating: 5,
    avatar: '/avatars/marcos.png',
    text: 'Desde que cadastrei minha barbearia, minha agenda vive cheia. O painel de gestão é simples e os relatórios me ajudam a crescer todo mês.',
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)

  const next = useCallback(
    () => setIndex((i) => (i + 1) % testimonials.length),
    [],
  )
  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    const id = setInterval(next, 6000)
    return () => clearInterval(id)
  }, [next])

  const t = testimonials[index]

  return (
    <section className="bg-surface/40 py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Depoimentos
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-tight text-balance sm:text-5xl">
              Quem usa, recomenda
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="relative rounded-3xl border border-border bg-surface p-8 sm:p-12">
            <Quote className="absolute right-8 top-8 size-12 text-gold/15" />
            <div className="min-h-[220px] sm:min-h-[180px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex text-gold">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="size-5 fill-current" />
                    ))}
                  </div>
                  <p className="mt-5 text-lg leading-relaxed text-foreground text-pretty sm:text-xl">
                    “{t.text}”
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <Image
                      src={t.avatar || '/placeholder.svg'}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="size-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-sm text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Ir para depoimento ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === index ? 'w-8 bg-gold' : 'w-2 bg-border'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  aria-label="Depoimento anterior"
                  className="flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:border-gold/50 hover:text-gold"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  onClick={next}
                  aria-label="Próximo depoimento"
                  className="flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:border-gold/50 hover:text-gold"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
