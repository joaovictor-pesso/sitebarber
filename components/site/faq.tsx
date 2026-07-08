'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Plus } from 'lucide-react'
import { Reveal } from './reveal'

const faqs = [
  {
    q: 'Quanto custa para usar a Navalha como cliente?',
    a: 'Nada. Para clientes, encontrar barbearias, comparar avaliações e agendar horários é totalmente gratuito. Você paga apenas pelo serviço na barbearia.',
  },
  {
    q: 'Como funciona o agendamento em tempo real?',
    a: 'Os horários disponíveis são sincronizados diretamente com a agenda de cada barbearia. Ao reservar, o horário é bloqueado na hora e você recebe a confirmação instantânea.',
  },
  {
    q: 'Sou barbeiro. Como cadastro minha barbearia?',
    a: 'Basta clicar em "Cadastrar Barbearia", criar seu perfil, adicionar seus serviços, preços e equipe. Em poucos minutos você já começa a receber agendamentos.',
  },
  {
    q: 'Posso cancelar ou remarcar um horário?',
    a: 'Sim. Você pode cancelar ou remarcar diretamente pelo app, respeitando a política de cada barbearia. Tudo de forma simples e sem ligações.',
  },
  {
    q: 'Os profissionais são verificados?',
    a: 'Sim. Todas as barbearias passam por um processo de verificação e contam com avaliações reais de clientes para garantir sua confiança.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="contato" className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <Reveal>
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Perguntas frequentes
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-tight text-balance sm:text-5xl">
            Ainda tem dúvidas?
          </h2>
        </div>
      </Reveal>

      <div className="space-y-3">
        {faqs.map((faq, i) => {
          const isOpen = open === i
          return (
            <Reveal key={faq.q} delay={i}>
              <div className="overflow-hidden rounded-2xl border border-border bg-surface">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-pretty">{faq.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary text-gold"
                  >
                    <Plus className="size-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
