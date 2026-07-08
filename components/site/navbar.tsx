'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X, Globe, Scissors } from 'lucide-react'

const navLinks = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Barbearias', href: '#barbearias' },
  { label: 'Profissionais', href: '#profissionais' },
  { label: 'Contato', href: '#contato' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'glass border-b border-border shadow-[0_8px_30px_rgba(0,0,0,0.35)]'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
          <a href="#" className="flex items-center gap-2.5" aria-label="Navalha início">
            <span className="flex size-9 items-center justify-center rounded-full border border-gold/40 text-gold">
              <Scissors className="size-4" />
            </span>
            <span className="font-display text-2xl leading-none tracking-wide">
              navalha<span className="text-gold">.</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <button className="flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              <Globe className="size-4" />
              PT-BR
            </button>
            <a
              href="#entrar"
              className="rounded-full px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:text-gold"
            >
              Entrar
            </a>
            <a
              href="#profissionais"
              className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground transition-all duration-300 hover:gold-glow hover:brightness-110"
            >
              Cadastrar Barbearia
            </a>
          </div>

          <button
            className="flex size-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="size-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="size-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="glass border-b border-border px-4 pb-6 pt-2 lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="#entrar"
                onClick={() => setOpen(false)}
                className="w-full rounded-full border border-border px-5 py-3 text-center text-sm font-semibold text-foreground"
              >
                Entrar
              </a>
              <a
                href="#profissionais"
                onClick={() => setOpen(false)}
                className="w-full rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-gold-foreground"
              >
                Cadastrar Barbearia
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
