'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useAppStore, type AppView } from '@/store/useAppStore'
import { COMPANY, PUBLIC_SERVICES } from '@/lib/company-data'
import {
  ArrowRight, Menu, X, MapPin, Mail, Phone, Linkedin, Twitter,
} from 'lucide-react'
import { cn } from '@/lib/utils'

/* ============================================================
   Design tokens (shared across all public pages)
   - bg: #FAFAF7  | card: #ffffff  | border: #e5e0d5
   - green: #0D503C (dark #0a3f2f)  | gold: #B8860B
   - text: #1A1A2E  muted: #5a5a6a  faint: #8a8a9a
   - headings: Georgia, serif
   ============================================================ */

export const PUBLIC_DESIGN = {
  bg: '#FAFAF7',
  card: '#ffffff',
  border: '#e5e0d5',
  green: '#0D503C',
  greenDark: '#0a3f2f',
  gold: '#B8860B',
  text: '#1A1A2E',
  muted: '#5a5a6a',
  faint: '#8a8a9a',
  serif: 'Georgia, "Times New Roman", serif',
} as const

/* ---------- Fade-in on scroll wrapper ---------- */
export function FadeIn({
  children, delay = 0, className = '',
}: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ---------- Section label (gold uppercase eyebrow) ---------- */
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-[#B8860B] text-xs font-semibold tracking-[0.2em] uppercase">
      {children}
    </span>
  )
}

/* ---------- Section heading (serif) ---------- */
export function SectionHeading({
  label, title, subtitle, align = 'left',
}: {
  label?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}) {
  return (
    <div className={cn(align === 'center' ? 'text-center mb-14' : 'mb-10')}>
      {label && <SectionLabel>{label}</SectionLabel>}
      <h2
        className={cn('text-3xl sm:text-4xl font-bold text-[#1A1A2E]', align === 'center' ? 'mt-3 mb-4' : 'mt-3')}
        style={{ fontFamily: PUBLIC_DESIGN.serif }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#5a5a6a] max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}

/* ---------- Public Navigation ---------- */
const NAV_LINKS: { label: string; view: AppView; scroll?: string }[] = [
  { label: 'Beranda', view: 'landing' },
  { label: 'Tentang Kami', view: 'about' },
  { label: 'Layanan', view: 'layanan' },
  { label: 'Proyek', view: 'proyek' },
  { label: 'Insights', view: 'insights' },
  { label: 'Karir', view: 'careers' },
  { label: 'Kontak', view: 'contact' },
]

export function PublicNav({ transparentOnTop = false }: { transparentOnTop?: boolean }) {
  const { setCurrentView, currentView } = useAppStore()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const go = (link: { view: AppView; scroll?: string }) => {
    setMobileOpen(false)
    if (link.scroll && link.view === 'landing') {
      if (currentView !== 'landing') {
        setCurrentView('landing')
        setTimeout(() => {
          document.querySelector(link.scroll!)?.scrollIntoView({ behavior: 'smooth' })
        }, 120)
      } else {
        document.querySelector(link.scroll)?.scrollIntoView({ behavior: 'smooth' })
      }
      return
    }
    setCurrentView(link.view)
  }

  const solid = !transparentOnTop || scrolled

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        solid ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#e5e0d5]' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <button
            className="flex items-center gap-2"
            onClick={() => go({ view: 'landing' })}
          >
            <div className="w-8 h-8 rounded-sm bg-[#0D503C] flex items-center justify-center">
              <span className="text-white text-xs font-bold tracking-wider">JAC</span>
            </div>
            <span className="hidden sm:block text-[#0D503C] font-semibold text-sm tracking-wide">
              Jiwa Abdi Cinta
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const active = currentView === link.view && !(link.scroll && currentView !== 'landing')
              return (
                <button
                  key={link.label}
                  onClick={() => go(link)}
                  className={cn(
                    'text-sm font-medium transition-colors relative group',
                    active ? 'text-[#0D503C]' : 'text-[#3a3a4a] hover:text-[#0D503C]'
                  )}
                >
                  {link.label}
                  <span className={cn(
                    'absolute -bottom-1 left-0 h-0.5 bg-[#0D503C] transition-all duration-300',
                    active ? 'w-full' : 'w-0 group-hover:w-full'
                  )} />
                </button>
              )
            })}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => { setMobileOpen(false); setCurrentView('dashboard') }}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2 bg-[#0D503C] text-white text-sm font-medium rounded-sm hover:bg-[#0a3f2f] transition-colors"
            >
              Masuk
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-[#3a3a4a] hover:text-[#0D503C] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-b border-[#e5e0d5] overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => go(link)}
                  className="block w-full text-left px-3 py-2.5 text-[#3a3a4a] hover:text-[#0D503C] hover:bg-[#F5F0E8] text-sm font-medium rounded transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-3 border-t border-[#e5e0d5]">
                <button
                  onClick={() => { setMobileOpen(false); setCurrentView('dashboard') }}
                  className="w-full px-4 py-2.5 bg-[#0D503C] text-white text-sm font-medium rounded-sm hover:bg-[#0a3f2f] transition-colors"
                >
                  Masuk Dashboard
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

/* ---------- Page Hero (for subpages) ---------- */
export function PageHero({
  label, title, subtitle,
}: {
  label: string
  title: string
  subtitle?: string
}) {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-[#FAFAF7] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(#0D503C 1px, transparent 1px), linear-gradient(90deg, #0D503C 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0D503C]/[0.03] rounded-full -translate-y-1/3 translate-x-1/3" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="max-w-3xl"
        >
          <SectionLabel>{label}</SectionLabel>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A2E] leading-[1.1] mt-4 mb-5"
            style={{ fontFamily: PUBLIC_DESIGN.serif }}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-[#5a5a6a] leading-relaxed max-w-2xl">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  )
}

/* ---------- Public Footer ---------- */
export function PublicFooter() {
  const { setCurrentView } = useAppStore()
  const serviceLinks = PUBLIC_SERVICES.map(s => ({ name: s.name, id: s.id as AppView }))
  const companyLinks: { name: string; view: AppView }[] = [
    { name: 'Tentang Kami', view: 'about' },
    { name: 'Karir', view: 'careers' },
    { name: 'Insights', view: 'insights' },
    { name: 'Kontak', view: 'contact' },
  ]

  return (
    <footer className="bg-[#1A1A2E] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Column 1: JAC */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-sm bg-[#0D503C] flex items-center justify-center">
                <span className="text-white text-xs font-bold tracking-wider">JAC</span>
              </div>
              <span className="text-white font-semibold text-sm">Jiwa Abdi Cinta</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-3">
              Ekosistem bisnis terintegrasi — perdagangan, jasa, konstruksi, industri sawit, dan pertanian.
            </p>
            <p className="text-white/30 text-xs">
              Akta No. {COMPANY.aktaNumber}, {COMPANY.location}
            </p>
          </div>

          {/* Column 2: Layanan */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => { setCurrentView('landing'); setTimeout(() => document.getElementById('layanan')?.scrollIntoView({ behavior: 'smooth' }), 120) }}
                    className="text-white/40 text-sm hover:text-white/70 transition-colors text-left"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Perusahaan */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Perusahaan</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => setCurrentView(link.view)}
                    className="text-white/40 text-sm hover:text-white/70 transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Kontak */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-white/30 mt-0.5 flex-shrink-0" />
                <span className="text-white/40 text-sm">Jakarta Selatan, DKI Jakarta, Indonesia</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-white/30 mt-0.5 flex-shrink-0" />
                <span className="text-white/40 text-sm">info@jiwaabdicinta.co.id</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-white/30 mt-0.5 flex-shrink-0" />
                <span className="text-white/40 text-sm">+62 21 5555 0310</span>
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-5">
              <a href="#" className="w-8 h-8 rounded-sm bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/40 hover:text-white/70 transition-all" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-sm bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/40 hover:text-white/70 transition-all" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            &copy; 2024 PT Jiwa Abdi Cinta. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <button className="text-white/30 text-xs hover:text-white/50 transition-colors">Kebijakan Privasi</button>
            <span className="text-white/10">|</span>
            <button className="text-white/30 text-xs hover:text-white/50 transition-colors">Syarat &amp; Ketentuan</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ---------- CTA band (reusable) ---------- */
export function CtaBand({
  title = 'Siap Bertransformasi?',
  subtitle = 'Hubungi kami untuk konsultasi strategis bisnis Anda.',
}: { title?: string; subtitle?: string }) {
  const { setCurrentView } = useAppStore()
  return (
    <section className="bg-[#0D503C] py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: PUBLIC_DESIGN.serif }}
          >
            {title}
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8 text-lg">{subtitle}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setCurrentView('contact')}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#0D503C] text-sm font-medium rounded-sm hover:bg-[#F5F0E8] transition-colors"
            >
              Kontak Kami
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentView('dashboard')}
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white text-sm font-medium rounded-sm hover:bg-white/10 transition-colors"
            >
              Masuk Dashboard
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
