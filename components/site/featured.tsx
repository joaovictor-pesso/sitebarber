'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { Star, MapPin, Clock, ArrowRight } from 'lucide-react'
import { Reveal } from './reveal'

const shops = [
  {
    name: 'Barbearia Vintage',
    city: 'São Paulo, SP',
    rating: 4.9,
    reviews: 312,
    price: 45,
    time: '40 min',
    image: '/barbershops/vintage.png',
  },
  {
    name: 'Urban Cut Studio',
    city: 'Rio de Janeiro, RJ',
    rating: 4.8,
    reviews: 248,
    price: 55,
    time: '35 min',
    image: '/barbershops/urban.png',
  },
  {
    name: 'Classic Gentlemen',
    city: 'Belo Horizonte, MG',
    rating: 5.0,
    reviews: 189,
    price: 60,
    time: '50 min',
    image: '/barbershops/classic.png',
  },
  {
    name: 'Old School Barber',
    city: 'Curitiba, PR',
    rating: 4.7,
    reviews: 274,
    price: 40,
    time: '30 min',
    image: '/barbershops/premium.png',
  },
]

export function Featured() {
  return (
    <section id="barbearias" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <Reveal>
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Barbearias em destaque
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-tight text-balance sm:text-5xl">
              As mais bem avaliadas perto de você
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:brightness-110"
          >
            Ver todas
            <ArrowRight className="size-4" />
          </a>
        </div>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {shops.map((shop, i) => (
          <Reveal key={shop.name} delay={i}>
            <motion.article
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="group h-full overflow-hidden rounded-3xl border border-border bg-surface transition-shadow duration-300 hover:border-gold/40 hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.7)]"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={shop.image || '/placeholder.svg'}
                  alt={`Interior da ${shop.name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full glass-card px-2.5 py-1 text-xs font-semibold">
                  <Star className="size-3 fill-gold text-gold" />
                  {shop.rating}
                  <span className="text-muted-foreground">({shop.reviews})</span>
                </span>
              </div>

              <div className="p-5">
                <h3 className="font-display text-xl tracking-wide">{shop.name}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="size-3.5" />
                  {shop.city}
                </p>

                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    A partir de{' '}
                    <span className="font-display text-lg text-gold">
                      R$ {shop.price}
                    </span>
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="size-3.5" />
                    {shop.time}
                  </span>
                </div>

                <div className="mt-5 flex gap-2">
                  <button className="flex-1 rounded-full border border-border px-4 py-2.5 text-xs font-semibold transition-colors hover:border-gold/50 hover:text-gold">
                    Ver Perfil
                  </button>
                  <button className="flex-1 rounded-full bg-gold px-4 py-2.5 text-xs font-semibold text-gold-foreground transition-all hover:brightness-110">
                    Agendar
                  </button>
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
