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
   - bg: #F8FAF6  | card: #ffffff  | border: #D4E0D4
   - green: #2D5A3D (dark #1A3D2A)  | gold: #C9A961
   - text: #1A3D2A  muted: #5A7A6A  faint: #8B9A8B
   - headings: Georgia, serif
   ============================================================ */

export const PUBLIC_DESIGN = {
  // Light surfaces (bright theme)
  bg: '#F8FAF6',           // green-tinted ivory
  card: '#ffffff',
  border: '#D4E0D4',       // soft sage border
  cream: '#F8FAF6',
  creamWarm: '#F5F0E8',
  mint: '#E8F0E8',
  mintBright: '#D4E8D4',
  // Hijau muda (light green) — primary accent
  sage: '#8FB89B',
  sageBright: '#A8D5BA',
  sageDeep: '#5A8A6A',
  green: '#2D5A3D',        // primary brand green (forest)
  greenDark: '#1A3D2A',
  // Forest text (AAA on light)
  text: '#1A3D2A',
  ink: '#1A3D2A',
  inkSoft: '#2D5A3D',
  muted: '#5A7A6A',
  faint: '#8B9A8B',
  mutedLight: '#8B9A8B',
  // Gold accent
  gold: '#C9A961',
  goldLight: '#E8D9A0',
  // Backward-compatible aliases (cascade to light theme)
  plumDeep: '#0F2A1A',
  plum: '#1A3D2A',
  plumMid: '#5A8A6A',
  plumLight: '#8FB89B',
  champagne: '#A8D5BA',
  champagneBright: '#C8E6D0',
  bronze: '#C9A961',
  // Fonts
  serif: 'var(--font-fraunces), Georgia, "Times New Roman", serif',
  sans: 'var(--font-jakarta), ui-sans-serif, system-ui, sans-serif',
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
    <span className="inline-block text-[#C9A961] text-xs font-semibold tracking-[0.2em] uppercase">
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
        className={cn('text-3xl sm:text-4xl font-bold text-[#1A3D2A]', align === 'center' ? 'mt-3 mb-4' : 'mt-3')}
        style={{ fontFamily: PUBLIC_DESIGN.serif }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#5A7A6A] max-w-2xl mx-auto leading-relaxed">
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
        solid ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#D4E0D4]' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <button
            className="flex items-center gap-2"
            onClick={() => go({ view: 'landing' })}
          >
            <div className="w-8 h-8 rounded-sm bg-[#2D5A3D] flex items-center justify-center">
              <span className="text-white text-xs font-bold tracking-wider">JAC</span>
            </div>
            <span className="hidden sm:block text-[#2D5A3D] font-semibold text-sm tracking-wide">
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
                    active ? 'text-[#2D5A3D]' : 'text-[#2D5A3D] hover:text-[#2D5A3D]'
                  )}
                >
                  {link.label}
                  <span className={cn(
                    'absolute -bottom-1 left-0 h-0.5 bg-[#2D5A3D] transition-all duration-300',
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
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2 bg-[#2D5A3D] text-white text-sm font-medium rounded-sm hover:bg-[#1A3D2A] transition-colors"
            >
              Masuk
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-[#2D5A3D] hover:text-[#2D5A3D] transition-colors"
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
            className="lg:hidden bg-white border-b border-[#D4E0D4] overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => go(link)}
                  className="block w-full text-left px-3 py-2.5 text-[#2D5A3D] hover:text-[#2D5A3D] hover:bg-[#F5F0E8] text-sm font-medium rounded transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-3 border-t border-[#D4E0D4]">
                <button
                  onClick={() => { setMobileOpen(false); setCurrentView('dashboard') }}
                  className="w-full px-4 py-2.5 bg-[#2D5A3D] text-white text-sm font-medium rounded-sm hover:bg-[#1A3D2A] transition-colors"
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
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-[#F8FAF6] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(#2D5A3D 1px, transparent 1px), linear-gradient(90deg, #2D5A3D 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#2D5A3D]/[0.03] rounded-full -translate-y-1/3 translate-x-1/3" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="max-w-3xl"
        >
          <SectionLabel>{label}</SectionLabel>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A3D2A] leading-[1.1] mt-4 mb-5"
            style={{ fontFamily: PUBLIC_DESIGN.serif }}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-[#5A7A6A] leading-relaxed max-w-2xl">{subtitle}</p>
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
    <footer className="bg-[#E8F0E8] border-t border-[#D4E0D4] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Column 1: JAC */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-sm bg-[#2D5A3D] flex items-center justify-center">
                <span className="text-white text-xs font-bold tracking-wider">JAC</span>
              </div>
              <span className="text-[#1A3D2A] font-semibold text-sm">Jiwa Abdi Cinta</span>
            </div>
            <p className="text-[#5A7A6A] text-sm leading-relaxed mb-3">
              Ekosistem bisnis terintegrasi — perdagangan, jasa, konstruksi, industri sawit, dan pertanian.
            </p>
            <p className="text-[#8B9A8B] text-xs">
              Akta No. {COMPANY.aktaNumber}, {COMPANY.location}
            </p>
          </div>

          {/* Column 2: Layanan */}
          <div>
            <h4 className="text-[#1A3D2A] text-sm font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => { setCurrentView('landing'); setTimeout(() => document.getElementById('layanan')?.scrollIntoView({ behavior: 'smooth' }), 120) }}
                    className="text-[#5A7A6A] text-sm hover:text-[#2D5A3D] transition-colors text-left"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Perusahaan */}
          <div>
            <h4 className="text-[#1A3D2A] text-sm font-semibold mb-4">Perusahaan</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => setCurrentView(link.view)}
                    className="text-[#5A7A6A] text-sm hover:text-[#2D5A3D] transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Kontak */}
          <div>
            <h4 className="text-[#1A3D2A] text-sm font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#8FB89B] mt-0.5 flex-shrink-0" />
                <span className="text-[#5A7A6A] text-sm">Jakarta Selatan, DKI Jakarta, Indonesia</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#8FB89B] mt-0.5 flex-shrink-0" />
                <span className="text-[#5A7A6A] text-sm">info@jiwaabdicinta.co.id</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#8FB89B] mt-0.5 flex-shrink-0" />
                <span className="text-[#5A7A6A] text-sm">+62 21 5555 0310</span>
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-5">
              <a href="#" className="w-8 h-8 rounded-sm bg-[#8FB89B]/15 hover:bg-[#8FB89B]/25 flex items-center justify-center text-[#5A8A6A] hover:text-[#2D5A3D] transition-all" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-sm bg-[#8FB89B]/15 hover:bg-[#8FB89B]/25 flex items-center justify-center text-[#5A8A6A] hover:text-[#2D5A3D] transition-all" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#D4E0D4] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#8B9A8B] text-xs">
            &copy; 2024 PT Jiwa Abdi Cinta. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <button className="text-[#8B9A8B] text-xs hover:text-[#5A7A6A] transition-colors">Kebijakan Privasi</button>
            <span className="text-[#D4E0D4]">|</span>
            <button className="text-[#8B9A8B] text-xs hover:text-[#5A7A6A] transition-colors">Syarat &amp; Ketentuan</button>
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
    <section className="bg-[#D4E8D4] py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A3D2A] mb-4"
            style={{ fontFamily: PUBLIC_DESIGN.serif }}
          >
            {title}
          </h2>
          <p className="text-[#5A7A6A] max-w-xl mx-auto mb-8 text-lg">{subtitle}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setCurrentView('contact')}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#2D5A3D] text-white text-sm font-medium rounded-sm hover:bg-[#1A3D2A] transition-colors"
            >
              Kontak Kami
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentView('dashboard')}
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#2D5A3D]/30 text-[#2D5A3D] text-sm font-medium rounded-sm hover:bg-[#2D5A3D]/10 transition-colors"
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
