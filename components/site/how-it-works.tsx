'use client'

import { Search, MousePointerClick, CalendarCheck, UserCheck, Store, Palette, Bell, LayoutDashboard } from 'lucide-react'
import { Reveal } from './reveal'

const clientSteps = [
  { icon: Search, title: 'Pesquisar', desc: 'Busque barbearias por cidade, serviço ou avaliação.' },
  { icon: MousePointerClick, title: 'Escolher', desc: 'Selecione o profissional e o serviço ideal para você.' },
  { icon: CalendarCheck, title: 'Agendar', desc: 'Veja horários livres em tempo real e reserve em segundos.' },
  { icon: UserCheck, title: 'Comparecer', desc: 'Receba a confirmação e é só aparecer no horário marcado.' },
]

const barberSteps = [
  { icon: Store, title: 'Cadastrar Barbearia', desc: 'Crie o perfil da sua barbearia em poucos minutos.' },
  { icon: Palette, title: 'Personalizar Perfil', desc: 'Adicione serviços, preços, fotos e sua equipe.' },
  { icon: Bell, title: 'Receber Agendamentos', desc: 'Novos clientes marcam com você automaticamente.' },
  { icon: LayoutDashboard, title: 'Gerenciar Agenda', desc: 'Controle horários e faturamento em um só painel.' },
]

function Timeline({
  title,
  badge,
  steps,
}: {
  title: string
  badge: string
  steps: typeof clientSteps
}) {
  return (
    <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8">
      <span className="inline-flex rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
        {badge}
      </span>
      <h3 className="mt-4 font-display text-3xl tracking-wide">{title}</h3>

      <ol className="mt-8 space-y-6">
        {steps.map((step, i) => (
          <li key={step.title} className="relative flex gap-4 pb-6 last:pb-0">
            {i < steps.length - 1 && (
              <span className="absolute left-[22px] top-12 h-[calc(100%-1.5rem)] w-px bg-border" />
            )}
            <span className="relative z-10 flex size-11 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-background text-gold">
              <step.icon className="size-5" />
            </span>
            <div className="pt-1">
              <div className="flex items-center gap-2">
                <span className="font-display text-lg text-muted-foreground">
                  0{i + 1}
                </span>
                <h4 className="font-semibold">{step.title}</h4>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {step.desc}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

export function HowItWorks() {
  return (
    <section id="como-funciona" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <Reveal>
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Como funciona
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-tight text-balance sm:text-5xl">
            Simples para quem agenda e para quem atende
          </h2>
        </div>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <Timeline title="Para Clientes" badge="Clientes" steps={clientSteps} />
        </Reveal>
        <Reveal delay={1}>
          <Timeline title="Para Barbeiros" badge="Barbeiros" steps={barberSteps} />
        </Reveal>
      </div>
    </section>
  )
}
