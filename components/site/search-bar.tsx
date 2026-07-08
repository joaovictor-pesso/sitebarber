'use client'

import { MapPin, Scissors, Store, CalendarDays, Clock, Search } from 'lucide-react'
import { Reveal } from './reveal'

const fields = [
  { icon: MapPin, label: 'Cidade', placeholder: 'Onde você está?' },
  { icon: Scissors, label: 'Serviço', placeholder: 'Corte, barba...' },
  { icon: Store, label: 'Barbearia', placeholder: 'Nome da barbearia' },
  { icon: CalendarDays, label: 'Data', placeholder: 'Hoje' },
  { icon: Clock, label: 'Horário', placeholder: 'Qualquer' },
]

export function SearchBar() {
  return (
    <div className="relative z-10 mx-auto -mt-6 max-w-5xl px-4 sm:px-6 lg:px-8">
      <Reveal>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="glass-card grid grid-cols-1 gap-2 rounded-3xl border border-border p-3 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] md:grid-cols-[repeat(5,1fr)_auto] md:rounded-full md:p-2"
        >
          {fields.map((field) => (
            <label
              key={field.label}
              className="group flex cursor-text items-center gap-3 rounded-2xl px-4 py-2.5 transition-colors hover:bg-secondary/60 md:rounded-full"
            >
              <field.icon className="size-4 shrink-0 text-gold" />
              <span className="flex min-w-0 flex-col">
                <span className="text-[11px] font-medium text-muted-foreground">
                  {field.label}
                </span>
                <input
                  type="text"
                  placeholder={field.placeholder}
                  className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
                />
              </span>
            </label>
          ))}
          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground transition-all duration-300 hover:gold-glow hover:brightness-110"
          >
            <Search className="size-4" />
            <span className="md:hidden">Pesquisar</span>
          </button>
        </form>
      </Reveal>
    </div>
  )
}
