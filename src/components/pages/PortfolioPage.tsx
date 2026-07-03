'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { PublicNav, PublicFooter, CtaBand, PageHero, PUBLIC_DESIGN } from '@/components/public/PublicChrome'
import { PROJECT_PORTFOLIO, PORTFOLIO_CATEGORIES, PORTFOLIO_STATS, LUXURY_ACCENTS } from '@/lib/company-data'
import { MapPin, Calendar, TrendingUp, ArrowUpRight, ArrowRight, Sparkles, Award } from 'lucide-react'

const SERIF = PUBLIC_DESIGN.serif

/* ============================================================
   ANIMATED COUNTER — counts up when in view, with prefix + suffix
   ============================================================ */
function Counter({
  value, prefix = '', suffix = '', duration = 2,
}: { value: number; prefix?: string; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(Math.round(eased * value))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration])

  return <span ref={ref}>{prefix}{display}{suffix}</span>
}

/* ============================================================
   FADE-IN ON SCROLL — shared luxury entrance wrapper
   ============================================================ */
function FadeIn({
  children, delay = 0, className = '',
}: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ============================================================
   ANIMATED PROGRESS BAR — fills on view
   ============================================================ */
function ProgressFill({ value, color }: { value: number; color: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-30px' })
  return (
    <div ref={ref} className="w-full h-1 rounded-full bg-white/10 overflow-hidden" aria-hidden>
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${value}%` } : { width: 0 }}
        transition={{ duration: 1.3, ease: [0.25, 0.4, 0.25, 1] }}
        className="h-full rounded-full"
        style={{ background: `linear-gradient(90deg, ${color}, ${LUXURY_ACCENTS.goldBright})` }}
      />
    </div>
  )
}

/* ============================================================
   FEATURED PICK — highest-value 'Selesai' project (fallback: first)
   ============================================================ */
function pickFeatured() {
  const numeric = (s: string) => parseFloat(s.replace(/[^\d.]/g, '')) || 0
  const done = PROJECT_PORTFOLIO.filter(p => p.status === 'Selesai')
  const pool = done.length > 0 ? done : PROJECT_PORTFOLIO
  return [...pool].sort((a, b) => numeric(b.value) - numeric(a.value))[0]
}

const STAT_ICONS = [Award, TrendingUp, MapPin, Sparkles]

/* ============================================================
   MAIN
   ============================================================ */
export default function PortfolioPage() {
  const [cat, setCat] = useState('Semua')
  const featured = pickFeatured()
  const filtered = cat === 'Semua'
    ? PROJECT_PORTFOLIO
    : PROJECT_PORTFOLIO.filter(p => p.category === cat)

  /* Parallax for the stats band background */
  const statsRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: statsProgress } = useScroll({
    target: statsRef,
    offset: ['start end', 'end start'],
  })
  const yBg = useTransform(statsProgress, [0, 1], [-50, 70])
  const yGrid = useTransform(statsProgress, [0, 1], [-30, 30])

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F4ED] landing-page">
      <PublicNav />
      <main className="flex-1">
        <PageHero
          label="Proyek & Portofolio"
          title="Karya Nyata Lintas Indonesia"
          subtitle="Showcase proyek dan pencapaian nyata di lima bidang usaha — dari konstruksi infrastruktur strategis hingga ekspor komoditas bersertifikasi, tersebar di 14 provinsi penjuru Nusantara."
        />

        {/* ============== STATS BAND (dark emerald + parallax) ============== */}
        <section
          ref={statsRef}
          className="relative py-20 lg:py-28 overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${LUXURY_ACCENTS.emerald} 0%, ${LUXURY_ACCENTS.emeraldDeep} 100%)` }}
          aria-labelledby="stats-heading"
        >
          {/* Parallax gold grid overlay */}
          <motion.div
            style={{ y: yBg }}
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            aria-hidden
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(${LUXURY_ACCENTS.goldPale} 1px, transparent 1px), linear-gradient(90deg, ${LUXURY_ACCENTS.goldPale} 1px, transparent 1px)`,
                backgroundSize: '60px 60px',
              }}
            />
          </motion.div>
          {/* Gold particle dots overlay */}
          <div
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            aria-hidden
            style={{
              backgroundImage: 'radial-gradient(#F0E4B8 1.5px, transparent 1.5px)',
              backgroundSize: '40px 40px',
            }}
          />
          {/* Floating glow orbs */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.45, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(212,168,67,0.18), transparent 70%)', filter: 'blur(40px)' }}
            aria-hidden
          />
          <motion.div
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.15, 0.35, 0.15] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(27,122,110,0.25), transparent 70%)', filter: 'blur(50px)' }}
            aria-hidden
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-14">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E8D9A0]/30 bg-[#E8D9A0]/5 backdrop-blur-sm mb-5">
                  <Sparkles className="w-3.5 h-3.5 text-[#F0E4B8]" />
                  <span className="text-[#F0E4B8] text-xs font-semibold tracking-[0.2em] uppercase">Dalam Angka</span>
                </span>
                <h2
                  id="stats-heading"
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
                  style={{ fontFamily: SERIF }}
                >
                  Jejak Nyata yang Terukur
                </h2>
              </div>
            </FadeIn>

            <motion.div
              style={{ y: yGrid }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
            >
              {PORTFOLIO_STATS.map((st, i) => {
                const Icon = STAT_ICONS[i] || Sparkles
                return (
                  <FadeIn key={i} delay={i * 0.1}>
                    <div className="relative h-full rounded-sm border border-[#E8D9A0]/20 bg-white/[0.04] backdrop-blur-md p-6 lg:p-7 overflow-hidden">
                      {/* Gold accent top bar */}
                      <span
                        className="absolute top-0 left-0 right-0 h-0.5"
                        style={{ background: `linear-gradient(90deg, transparent, ${LUXURY_ACCENTS.goldBright}, transparent)` }}
                        aria-hidden
                      />
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className="w-10 h-10 rounded-sm flex items-center justify-center"
                          style={{ backgroundColor: `${LUXURY_ACCENTS.gold}20`, color: LUXURY_ACCENTS.goldBright }}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/30">
                          0{i + 1}
                        </span>
                      </div>
                      <p
                        className="text-3xl lg:text-4xl font-bold mb-1"
                        style={{ fontFamily: SERIF, color: LUXURY_ACCENTS.goldPale }}
                      >
                        <Counter value={st.value} prefix={st.prefix} suffix={st.suffix} />
                      </p>
                      <p className="text-xs sm:text-sm text-white/55 leading-snug">{st.label}</p>
                    </div>
                  </FadeIn>
                )
              })}
            </motion.div>

            <FadeIn delay={0.3}>
              <div className="text-center mt-12">
                <button
                  onClick={() => document.getElementById('portfolio-grid')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 text-[#F0E4B8] text-sm font-medium hover:gap-3 transition-all duration-300"
                >
                  Pelajari lebih lanjut
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ============== FEATURED PROJECT (cream) ============== */}
        <section
          className="py-20 lg:py-28 bg-[#F8F4ED] relative overflow-hidden"
          aria-labelledby="featured-heading"
        >
          {/* Soft gold glow corner */}
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(212,168,67,0.07), transparent 70%)', filter: 'blur(40px)' }}
            aria-hidden
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="mb-10 max-w-2xl">
                <span className="text-[#C9A961] text-xs font-semibold tracking-[0.2em] uppercase">
                  Proyek Unggulan
                </span>
                <h2
                  id="featured-heading"
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1430] mt-3"
                  style={{ fontFamily: SERIF }}
                >
                  Sorotan Eksekusi Terbesar
                </h2>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <article className="grid grid-cols-1 lg:grid-cols-2 rounded-sm overflow-hidden border border-[#E0D8C8] bg-white shadow-xl">
                {/* Left: rich gradient panel */}
                <div
                  className="relative min-h-[280px] lg:min-h-[540px] flex items-center justify-center p-10 overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${featured.categoryColor}, ${featured.categoryColor}b3)` }}
                  aria-hidden
                >
                  {/* Featured badge */}
                  <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30">
                    <Award className="w-3.5 h-3.5 text-[#F0E4B8]" />
                    <span className="text-white text-[10px] font-bold tracking-[0.25em] uppercase">Featured</span>
                  </div>
                  {/* Decorative pattern overlays */}
                  <div
                    className="absolute inset-0 opacity-25"
                    style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, white, transparent 60%)' }}
                  />
                  <div
                    className="absolute inset-0 opacity-[0.1]"
                    style={{
                      backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
                      backgroundSize: '40px 40px',
                    }}
                  />
                  {/* Big floating icon */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="relative w-32 h-32 rounded-full flex items-center justify-center bg-white/15 backdrop-blur-sm border border-white/30"
                  >
                    <TrendingUp className="w-14 h-14 text-white" />
                  </motion.div>
                  {/* Bottom meta */}
                  <div className="absolute bottom-6 left-6">
                    <span className="text-white/80 text-xs font-semibold tracking-[0.25em] uppercase">
                      {featured.category}
                    </span>
                  </div>
                  <div className="absolute bottom-6 right-6 flex items-center gap-1.5 text-white/70 text-xs">
                    <Calendar className="w-3 h-3" />
                    <span>{featured.year}</span>
                  </div>
                </div>

                {/* Right: content panel */}
                <div className="p-8 lg:p-12 flex flex-col">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-[10px] font-bold tracking-[0.15em] uppercase"
                      style={{ backgroundColor: `${featured.categoryColor}15`, color: featured.categoryColor }}
                    >
                      {featured.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-[#8B7FA3]">
                      <Calendar className="w-3 h-3" />
                      {featured.year}
                    </span>
                  </div>

                  <h3
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1430] mb-3 leading-tight"
                    style={{ fontFamily: SERIF }}
                  >
                    {featured.title}
                  </h3>
                  <p className="flex items-center gap-1.5 text-sm text-[#6B5E80] mb-4">
                    <MapPin className="w-3.5 h-3.5 text-[#C9A961]" />
                    {featured.location}
                  </p>
                  <p className="text-sm text-[#6B5E80] leading-relaxed mb-6">
                    {featured.description}
                  </p>

                  {/* Metrics mini-cards */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {featured.metrics.map((m, i) => (
                      <div
                        key={i}
                        className="rounded-sm border border-[#E0D8C8] bg-[#F8F4ED] p-3 text-center"
                      >
                        <p
                          className="text-base lg:text-lg font-bold text-[#3A2D5C]"
                          style={{ fontFamily: SERIF }}
                        >
                          {m.v}
                        </p>
                        <p className="text-[10px] text-[#8B7FA3] mt-0.5 uppercase tracking-wider">
                          {m.k}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Footer row */}
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#E0D8C8]">
                    <div>
                      <p className="text-[10px] text-[#8B7FA3] uppercase tracking-[0.15em]">Nilai Proyek</p>
                      <p
                        className="text-2xl font-bold text-[#3A2D5C]"
                        style={{ fontFamily: SERIF }}
                      >
                        {featured.value}
                      </p>
                    </div>
                    <span
                      className="inline-flex items-center px-3 py-1 rounded-sm text-xs font-bold tracking-wide uppercase"
                      style={{ backgroundColor: '#6A9A7F20', color: '#6A9A7F' }}
                    >
                      {featured.status}
                    </span>
                    <button
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-sm text-sm font-medium text-white transition-all duration-300 group"
                      style={{ background: 'linear-gradient(135deg, #3A2D5C, #6A9A7F)' }}
                      onClick={() => document.getElementById('portfolio-grid')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Lihat detail
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </article>
            </FadeIn>
          </div>
        </section>

        {/* ============== GRID: ALL PROJECTS (dark emerald) ============== */}
        <section
          id="portfolio-grid"
          className="relative py-20 lg:py-28 overflow-hidden scroll-mt-20"
          style={{ background: `linear-gradient(180deg, ${LUXURY_ACCENTS.charcoal} 0%, ${LUXURY_ACCENTS.emeraldDeep} 100%)` }}
          aria-labelledby="grid-heading"
        >
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            aria-hidden
            style={{
              backgroundImage: 'radial-gradient(#F0E4B8 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }}
          />
          <div
            className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(184,134,11,0.12), transparent 70%)', filter: 'blur(50px)' }}
            aria-hidden
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-10">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E8D9A0]/30 bg-[#E8D9A0]/5 backdrop-blur-sm mb-5">
                  <Sparkles className="w-3.5 h-3.5 text-[#F0E4B8]" />
                  <span className="text-[#F0E4B8] text-xs font-semibold tracking-[0.2em] uppercase">Katalog</span>
                </span>
                <h2
                  id="grid-heading"
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3"
                  style={{ fontFamily: SERIF }}
                >
                  Semua Proyek
                </h2>
                <p className="text-white/55 max-w-xl mx-auto text-sm sm:text-base">
                  Jelajahi portofolio lengkap kami — filter berdasarkan bidang usaha untuk melihat eksekusi lintas industri.
                </p>
              </div>
            </FadeIn>

            {/* Filter pills */}
            <FadeIn delay={0.1}>
              <div
                className="flex flex-wrap items-center justify-center gap-2 mb-12"
                role="tablist"
                aria-label="Filter proyek berdasarkan kategori"
              >
                {PORTFOLIO_CATEGORIES.map(c => {
                  const active = cat === c
                  return (
                    <button
                      key={c}
                      role="tab"
                      aria-selected={active}
                      onClick={() => setCat(c)}
                      className="px-4 py-2 rounded-sm text-xs font-medium tracking-wide transition-all duration-300"
                      style={active
                        ? { background: 'linear-gradient(135deg, #3A2D5C, #6A9A7F)', color: '#FFFFFF', border: '1px solid rgba(212,168,67,0.4)', boxShadow: '0 4px 16px rgba(13,80,60,0.4)' }
                        : { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.65)' }
                      }
                      onMouseEnter={(e) => {
                        if (!active) {
                          e.currentTarget.style.borderColor = 'rgba(212,168,67,0.4)'
                          e.currentTarget.style.color = '#F0E4B8'
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!active) {
                          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                          e.currentTarget.style.color = 'rgba(255,255,255,0.65)'
                        }
                      }}
                    >
                      {c}
                    </button>
                  )
                })}
              </div>
            </FadeIn>

            {/* Grid with AnimatePresence */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filtered.map((p, i) => (
                  <motion.article
                    key={p.id}
                    layout
                    initial={{ opacity: 0, scale: 0.92, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.35, delay: i * 0.04, ease: [0.25, 0.4, 0.25, 1] }}
                    whileHover={{ y: -6 }}
                    className="group relative rounded-sm overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-md flex flex-col"
                    aria-label={`${p.title} — ${p.category}, ${p.location}`}
                  >
                    {/* Top gradient panel with decorative icon */}
                    <div
                      className="relative h-32 overflow-hidden flex items-center justify-center"
                      style={{ background: `linear-gradient(135deg, ${p.categoryColor}, ${p.categoryColor}b3)` }}
                      aria-hidden
                    >
                      <div
                        className="absolute inset-0 opacity-25"
                        style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, white, transparent 60%)' }}
                      />
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        transition={{ duration: 0.4 }}
                        className="relative w-14 h-14 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm border border-white/30"
                      >
                        <TrendingUp className="w-6 h-6 text-white" />
                      </motion.div>
                      {/* Category pill top-left */}
                      <span className="absolute top-3 left-3 text-[10px] font-bold tracking-[0.15em] uppercase text-white/95 px-2 py-0.5 rounded-sm bg-black/25 backdrop-blur-sm">
                        {p.category}
                      </span>
                      {/* Year top-right */}
                      <span className="absolute top-3 right-3 flex items-center gap-1 text-[10px] text-white/85">
                        <Calendar className="w-3 h-3" />
                        {p.year}
                      </span>
                    </div>

                    {/* Body */}
                    <div className="p-5 flex-1 flex flex-col">
                      <h3
                        className="text-base lg:text-lg font-bold text-white mb-1.5 leading-snug group-hover:text-[#F0E4B8] transition-colors duration-300"
                        style={{ fontFamily: SERIF }}
                      >
                        {p.title}
                      </h3>
                      <p className="flex items-center gap-1 text-xs text-white/50 mb-2">
                        <MapPin className="w-3 h-3" />
                        {p.location}
                      </p>
                      <p className="text-xs text-white/60 leading-relaxed mb-3 flex-1">
                        {p.description}
                      </p>

                      {/* Progress bar for Berlangsung */}
                      {p.status === 'Berlangsung' && (
                        <div className="mb-3">
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[10px] text-white/40 uppercase tracking-[0.15em]">Progres</span>
                            <span className="text-[10px] font-bold text-[#F0E4B8]">{p.progress}%</span>
                          </div>
                          <ProgressFill value={p.progress} color={p.categoryColor} />
                        </div>
                      )}

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-3 border-t border-white/10">
                        <span
                          className="text-sm font-bold"
                          style={{ fontFamily: SERIF, color: LUXURY_ACCENTS.goldPale }}
                        >
                          {p.value}
                        </span>
                        <span
                          className="inline-flex items-center px-2 py-0.5 rounded-sm text-[10px] font-bold tracking-wide uppercase"
                          style={p.status === 'Selesai'
                            ? { backgroundColor: 'rgba(27,122,110,0.18)', color: '#3FAA9C' }
                            : { backgroundColor: 'rgba(212,168,67,0.18)', color: '#F0E4B8' }
                          }
                        >
                          {p.status}
                        </span>
                      </div>
                    </div>

                    {/* Border glow on hover */}
                    <span
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-sm"
                      style={{ boxShadow: `inset 0 0 30px ${p.categoryColor}30, 0 8px 30px ${p.categoryColor}25` }}
                      aria-hidden
                    />
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Empty state */}
            {filtered.length === 0 && (
              <div className="text-center py-16">
                <p className="text-white/40 text-sm">Tidak ada proyek pada kategori ini.</p>
                <button
                  onClick={() => setCat('Semua')}
                  className="mt-3 text-[#F0E4B8] text-sm font-medium hover:underline transition-colors"
                >
                  Lihat semua proyek
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <CtaBand
        title="Punya Proyek yang Ingin Diwujudkan?"
        subtitle="Diskusikan kebutuhan proyek Anda dengan tim ahli JAC — dari konsep, perencanaan, hingga eksekusi lintas lima bidang usaha."
      />
      <PublicFooter />
    </div>
  )
}
