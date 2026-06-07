'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useAppStore, type AppView } from '@/store/useAppStore'
import { COMPANY, PUBLIC_INSIGHTS, TRUST_LOGOS, CAREERS, PUBLIC_SERVICES } from '@/lib/company-data'
import {
  Package, Briefcase, Building2, Factory, Leaf, ShieldCheck,
  ArrowRight, Menu, X, ChevronDown, MapPin, Clock, Mail, Phone, Linkedin, Twitter,
  ArrowUpRight, Users, Globe, Award, TrendingUp,
} from 'lucide-react'

const moduleIcons: Record<string, React.ReactNode> = {
  Package: <Package className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
  Factory: <Factory className="w-6 h-6" />,
  Leaf: <Leaf className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
}

// Fade-in on scroll animation wrapper
function FadeInWhenVisible({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
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

// Navigation Bar
function NavBar({ onMasuk }: { onMasuk: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Tentang', href: '#about' },
    { label: 'Layanan', href: '#layanan' },
    { label: 'Insights', href: '#insights' },
    { label: 'Karir', href: '#karir' },
    { label: 'Kontak', href: '#kontak' },
  ]

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#e5e0d5]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
            <div className="w-8 h-8 rounded-sm bg-[#0D503C] flex items-center justify-center">
              <span className="text-white text-xs font-bold tracking-wider">JAC</span>
            </div>
            <span className="hidden sm:block text-[#0D503C] font-semibold text-sm tracking-wide">
              Jiwa Abdi Cinta
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-[#3a3a4a] hover:text-[#0D503C] text-sm font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0D503C] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onMasuk}
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
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left px-3 py-2.5 text-[#3a3a4a] hover:text-[#0D503C] hover:bg-[#F5F0E8] text-sm font-medium rounded transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-3 border-t border-[#e5e0d5]">
                <button
                  onClick={() => { setMobileOpen(false); onMasuk() }}
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

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#FAFAF7] overflow-hidden">
      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
          linear-gradient(#0D503C 1px, transparent 1px),
          linear-gradient(90deg, #0D503C 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />
      {/* Accent shape */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0D503C]/[0.03] rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#B8860B]/[0.04] rounded-full translate-y-1/2 -translate-x-1/3" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <span className="inline-block text-[#B8860B] text-xs font-semibold tracking-[0.2em] uppercase mb-6 border-b border-[#B8860B]/30 pb-1">
              PT Jiwa Abdi Cinta
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1A1A2E] leading-[1.1] mb-6"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            Membangun Masa Depan Bisnis Indonesia
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-lg sm:text-xl text-[#5a5a6a] max-w-2xl mb-10 leading-relaxed"
          >
            Konsultasi strategis, perdagangan, konstruksi, industri sawit, pertanian & perizinan — satu ekosistem terintegrasi.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <button
              onClick={() => document.getElementById('layanan')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0D503C] text-white text-sm font-medium rounded-sm hover:bg-[#0a3f2f] transition-all duration-300 group"
            >
              Jelajahi Layanan Kami
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-5 h-5 text-[#0D503C]/30" />
      </motion.div>
    </section>
  )
}

// Trust Bar
function TrustBar() {
  return (
    <section className="bg-white border-y border-[#e5e0d5]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <FadeInWhenVisible>
          <p className="text-center text-xs font-semibold tracking-[0.15em] uppercase text-[#8a8a9a] mb-6">
            Dipercaya oleh
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-14">
            {TRUST_LOGOS.map((name, i) => (
              <div
                key={i}
                className="flex items-center justify-center px-4 py-2 text-[#9a9aaa] hover:text-[#5a5a6a] transition-colors"
              >
                <span className="text-sm sm:text-base font-medium tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
                  {name}
                </span>
              </div>
            ))}
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  )
}

// Services Section
function ServicesSection({ onNavigate }: { onNavigate: (view: AppView) => void }) {
  return (
    <section id="layanan" className="bg-[#FAFAF7] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInWhenVisible>
          <div className="text-center mb-14">
            <span className="text-[#B8860B] text-xs font-semibold tracking-[0.2em] uppercase">
              Layanan Kami
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] mt-3 mb-4"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              Enam Bidang Usaha Terintegrasi
            </h2>
            <p className="text-[#5a5a6a] max-w-xl mx-auto">
              Dari hulu ke hilir — setiap aspek kegiatan usaha dalam satu ekosistem yang saling terhubung.
            </p>
          </div>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PUBLIC_SERVICES.map((service, i) => (
            <FadeInWhenVisible key={service.id} delay={i * 0.08}>
              <button
                onClick={() => onNavigate(service.id as AppView)}
                className="w-full text-left bg-white rounded-sm p-6 border border-[#e5e0d5]/60 hover:border-[#d5d0c5] hover:shadow-lg transition-all duration-300 group h-full"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="p-2.5 rounded-sm transition-colors duration-300 flex-shrink-0"
                    style={{ backgroundColor: `${service.color}10`, color: service.color }}
                  >
                    {moduleIcons[service.icon]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-[#1A1A2E] text-base mb-0.5">{service.name}</h3>
                    <p className="text-xs text-[#8a8a9a] mb-2">{service.subtitle}</p>
                    <p className="text-sm text-[#5a5a6a] leading-relaxed">{service.description}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-medium transition-all duration-300 opacity-0 group-hover:opacity-100" style={{ color: service.color }}>
                  <span>Selengkapnya</span>
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </button>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  )
}

// Insights Section
function InsightsSection() {
  return (
    <section id="insights" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInWhenVisible>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <span className="text-[#B8860B] text-xs font-semibold tracking-[0.2em] uppercase">
                Thought Leadership
              </span>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] mt-3"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                Insights & Perspektif
              </h2>
            </div>
            <button className="inline-flex items-center gap-1.5 text-[#0D503C] text-sm font-medium hover:gap-2.5 transition-all duration-300">
              Lihat Semua Insights
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PUBLIC_INSIGHTS.map((insight, i) => (
            <FadeInWhenVisible key={insight.id} delay={i * 0.1}>
              <article className="group cursor-pointer h-full flex flex-col">
                {/* Image placeholder */}
                <div
                  className="w-full aspect-[16/10] rounded-sm mb-4 flex items-center justify-center transition-all duration-300 group-hover:shadow-md"
                  style={{ backgroundColor: `${insight.categoryColor}08` }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${insight.categoryColor}15` }}>
                    <TrendingUp className="w-5 h-5" style={{ color: insight.categoryColor }} />
                  </div>
                </div>

                {/* Category tag */}
                <span
                  className="inline-block text-[10px] font-semibold tracking-[0.15em] uppercase px-2.5 py-1 rounded-sm mb-3 w-fit"
                  style={{ backgroundColor: `${insight.categoryColor}10`, color: insight.categoryColor }}
                >
                  {insight.category}
                </span>

                {/* Title */}
                <h3
                  className="text-lg font-bold text-[#1A1A2E] mb-2 leading-snug group-hover:text-[#0D503C] transition-colors"
                  style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                >
                  {insight.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-[#5a5a6a] leading-relaxed mb-4 line-clamp-2 flex-1">
                  {insight.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-[#8a8a9a]">
                  <span>{insight.date}</span>
                  <span className="w-1 h-1 rounded-full bg-[#d0d0d0]" />
                  <span>{insight.readTime} baca</span>
                </div>

                {/* Read more */}
                <div className="mt-3 flex items-center gap-1.5 text-xs font-medium text-[#0D503C] opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span>Baca selengkapnya</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </article>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  )
}

// Stats Section
function StatsSection() {
  const stats = [
    { value: '5', label: 'Bidang Usaha', icon: <Globe className="w-5 h-5" /> },
    { value: '17+', label: 'KBLI Terdaftar', icon: <Award className="w-5 h-5" /> },
    { value: '50+', label: 'Mitra & Klien', icon: <Users className="w-5 h-5" /> },
    { value: '310', label: 'Akta Pendirian', icon: <TrendingUp className="w-5 h-5" /> },
  ]

  return (
    <section id="about" className="bg-[#0D503C] py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInWhenVisible>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-sm bg-white/10 text-[#B8860B] mb-3">
                  {stat.icon}
                </div>
                <p className="text-3xl lg:text-4xl font-bold text-white mb-1" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                  {stat.value}
                </p>
                <p className="text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  )
}

// Careers Section
function CareersSection() {
  return (
    <section id="karir" className="bg-[#FAFAF7] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <FadeInWhenVisible>
            <div>
              <span className="text-[#B8860B] text-xs font-semibold tracking-[0.2em] uppercase">
                Karir
              </span>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] mt-3 mb-4"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                Bergabung dengan Tim Kami
              </h2>
              <p className="text-[#5a5a6a] leading-relaxed mb-6">
                Di JAC, kami percaya bahwa sumber daya manusia adalah aset terpenting. 
                Kami mencari individu berbakat yang berbagi visi untuk membangun masa depan 
                bisnis Indonesia yang lebih baik.
              </p>

              {/* Open positions preview */}
              <div className="space-y-3 mb-6">
                {CAREERS.map((job, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3.5 bg-white rounded-sm border border-[#e5e0d5]/60 hover:border-[#d5d0c5] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0D503C]" />
                      <span className="text-sm font-medium text-[#1A1A2E]">{job.title}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-[#8a8a9a]">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <button className="inline-flex items-center gap-2 text-[#0D503C] text-sm font-medium hover:gap-3 transition-all duration-300">
                Lihat Posisi Terbuka
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </FadeInWhenVisible>

          {/* Right: Geometric illustration */}
          <FadeInWhenVisible delay={0.2}>
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Geometric shapes */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full border-2 border-[#0D503C]/10" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full border border-[#B8860B]/10" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-[#0D503C]/[0.04] rotate-45" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-[#B8860B]/[0.06] rotate-12 rounded-sm" />
              </div>
              {/* Center text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-4xl font-bold text-[#0D503C]/20" style={{ fontFamily: 'Georgia, serif' }}>JAC</p>
                  <p className="text-xs text-[#0D503C]/30 mt-1 tracking-widest uppercase">People & Growth</p>
                </div>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  )
}

// CTA Section
function CTASection({ onMasuk }: { onMasuk: () => void }) {
  return (
    <section className="bg-[#0D503C] py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeInWhenVisible>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            Siap Bertransformasi?
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8 text-lg">
            Hubungi kami untuk konsultasi strategis bisnis Anda.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => document.getElementById('kontak')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#0D503C] text-sm font-medium rounded-sm hover:bg-[#F5F0E8] transition-colors"
            >
              Kontak Kami
            </button>
            <button
              onClick={onMasuk}
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white text-sm font-medium rounded-sm hover:bg-white/10 transition-colors"
            >
              Masuk Dashboard
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  const serviceLinks = PUBLIC_SERVICES.map(s => ({ name: s.name, id: s.id }))
  const companyLinks = [
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Karir', href: '#karir' },
    { name: 'Insights', href: '#insights' },
    { name: 'Kontak', href: '#kontak' },
  ]

  return (
    <footer id="kontak" className="bg-[#1A1A2E] pt-16 pb-8">
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
              Ekosistem bisnis terintegrasi — perdagangan, jasa, konstruksi, industri sawit, pertanian, dan perizinan.
            </p>
            <p className="text-white/30 text-xs">
              Akta No. 310, Jakarta Selatan
            </p>
          </div>

          {/* Column 2: Layanan */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => document.getElementById('layanan')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-white/40 text-sm hover:text-white/70 transition-colors"
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
                    onClick={() => {
                      const el = document.querySelector(link.href)
                      if (el) el.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="text-white/40 text-sm hover:text-white/70 transition-colors"
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
            {/* Social */}
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
            <button className="text-white/30 text-xs hover:text-white/50 transition-colors">Syarat & Ketentuan</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Main Landing Page Component
export default function LandingPage() {
  const { setCurrentView } = useAppStore()

  const handleMasuk = () => {
    setCurrentView('dashboard' as AppView)
  }

  const handleNavigate = (view: AppView) => {
    setCurrentView(view)
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF7] landing-page">
      <NavBar onMasuk={handleMasuk} />
      <main className="flex-1">
        <HeroSection />
        <TrustBar />
        <ServicesSection onNavigate={handleNavigate} />
        <InsightsSection />
        <StatsSection />
        <CareersSection />
        <CTASection onMasuk={handleMasuk} />
      </main>
      <Footer />
    </div>
  )
}
