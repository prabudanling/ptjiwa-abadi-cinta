'use client'

import { useState, useEffect, useRef, useMemo } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useAppStore, type AppView } from '@/store/useAppStore'
import {
  COMPANY, PUBLIC_INSIGHTS, TRUST_LOGOS, PUBLIC_SERVICES,
  LUXURY_HERO_STATS, LUXURY_ACCENTS, MODULES,
} from '@/lib/company-data'
import {
  Package, Briefcase, Building2, Factory, Leaf,
  ArrowRight, ChevronDown, MapPin, Clock,
  ArrowUpRight, Users, Globe, Award, TrendingUp, Sparkles, Network,
} from 'lucide-react'
import {
  PublicNav, PublicFooter, CtaBand, PUBLIC_DESIGN,
} from '@/components/public/PublicChrome'

const moduleIcons: Record<string, React.ReactNode> = {
  Package: <Package className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
  Factory: <Factory className="w-6 h-6" />,
  Leaf: <Leaf className="w-6 h-6" />,
}

const SERIF = 'var(--font-fraunces), Georgia, "Times New Roman", serif'

/* ============================================================
   SAGE PARTICLE FIELD — soft floating dots on light bg
   ============================================================ */
function SageParticles() {
  const particles = useMemo(() => {
    return Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.4 + 0.15,
      isGold: Math.random() > 0.5,
    }))
  }, [])
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {particles.map(p => (
        <motion.span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`, top: `${p.y}%`,
            width: p.size, height: p.size,
            background: p.isGold
              ? 'radial-gradient(circle, #E8D9A0, #C9A961)'
              : 'radial-gradient(circle, #A8D5BA, #5A8A6A)',
            boxShadow: p.isGold
              ? '0 0 8px rgba(201,169,97,0.4)'
              : '0 0 8px rgba(143,184,155,0.5)',
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [p.opacity, p.opacity * 1.8, p.opacity],
          }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

/* ============================================================
   ANIMATED COUNTER — counts up when in view
   ============================================================ */
function Counter({ value, suffix = '', duration = 2 }: { value: number; suffix?: string; duration?: number }) {
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

  return <span ref={ref}>{display}{suffix}</span>
}

/* ============================================================
   3D TILT CARD — mouse-following tilt
   ============================================================ */
function TiltCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState('')
  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTransform(`perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateZ(8px)`)
  }
  const handleLeave = () => setTransform('perspective(1000px) rotateY(0) rotateX(0) translateZ(0)')
  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transform, transition: 'transform 0.2s ease-out', transformStyle: 'preserve-3d' }}
      className={className}
    >
      {children}
    </div>
  )
}

/* ============================================================
   FADE IN ON SCROLL
   ============================================================ */
function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
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
   LUXURY HERO — light mint gradient with sage particles
   ============================================================ */
function LuxuryHero({ onNavigate }: { onNavigate: (v: AppView) => void }) {
  const { scrollY } = useScroll()
  const yBg = useTransform(scrollY, [0, 600], [0, 120])
  const yContent = useTransform(scrollY, [0, 600], [0, 80])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: `linear-gradient(160deg, ${LUXURY_ACCENTS.cream} 0%, ${LUXURY_ACCENTS.mint} 50%, ${LUXURY_ACCENTS.mintBright} 100%)` }}>
      {/* Animated gradient orbs */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 pointer-events-none" aria-hidden>
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(168,213,186,0.35), transparent 70%)', filter: 'blur(40px)' }}
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(201,169,97,0.18), transparent 70%)', filter: 'blur(50px)' }}
        />
      </motion.div>

      {/* Sage particle field */}
      <SageParticles />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden style={{
        backgroundImage: `linear-gradient(#2D5A3D 1px, transparent 1px), linear-gradient(90deg, #2D5A3D 1px, transparent 1px)`,
        backgroundSize: '80px 80px',
      }} />

      <motion.div style={{ y: yContent, opacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#5A8A6A]/30 bg-white/60 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#5A8A6A]" />
              <span className="text-[#2D5A3D] text-xs font-semibold tracking-[0.2em] uppercase">PT Jiwa Abdi Cinta</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6"
            style={{
              fontFamily: SERIF,
              background: 'linear-gradient(135deg, #0F2A1A 0%, #2D5A3D 35%, #5A8A6A 70%, #C9A961 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Membangun Masa Depan Bisnis Indonesia
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="text-lg sm:text-xl text-[#3A4A3A] max-w-2xl mb-10 leading-relaxed"
          >
            Konsultasi strategis, perdagangan, konstruksi, industri sawit, dan pertanian — satu ekosistem terintegrasi dari hulu ke hilir, dengan komitmen pada keberlanjutan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <button
              onClick={() => onNavigate('layanan')}
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-sm font-medium text-sm transition-all duration-300 relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #2D5A3D, #5A8A6A)', color: '#FFFFFF' }}
            >
              <span className="absolute inset-0 bg-white/30 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative">Jelajahi Layanan Kami</span>
              <ArrowRight className="w-4 h-4 relative transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => onNavigate('proyek')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-sm border border-[#2D5A3D]/30 bg-white/50 text-[#2D5A3D] text-sm font-medium hover:bg-white/80 transition-colors backdrop-blur-sm"
            >
              Lihat Portofolio
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Floating glass stat chips */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-14 max-w-3xl"
          >
            {LUXURY_HERO_STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                className="rounded-sm border border-[#8FB89B]/30 bg-white/70 backdrop-blur-md p-4 shadow-sm"
              >
                <p className="text-2xl lg:text-3xl font-bold" style={{ fontFamily: SERIF, color: stat.color }}>
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-[11px] text-[#5A7A6A] mt-0.5">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <ChevronDown className="w-5 h-5 text-[#5A8A6A]/50" />
      </motion.div>
    </section>
  )
}

/* ============================================================
   TRUST MARQUEE — infinite scrolling on light mint
   ============================================================ */
function TrustMarquee() {
  const items = [...TRUST_LOGOS, ...TRUST_LOGOS]
  return (
    <section className="bg-[#E8F0E8] py-8 border-y border-[#D4E0D4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5">
        <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-[#5A8A6A]">
          Dipercaya oleh mitra strategis
        </p>
      </div>
      <div className="relative">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="flex items-center gap-12 w-max"
        >
          {items.map((name, i) => (
            <span key={i} className="text-[#8FB89B] hover:text-[#2D5A3D] transition-colors text-lg font-medium tracking-wide whitespace-nowrap" style={{ fontFamily: SERIF }}>
              {name}
            </span>
          ))}
        </motion.div>
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#E8F0E8] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#E8F0E8] to-transparent pointer-events-none" />
      </div>
    </section>
  )
}

/* ============================================================
   LUXURY SERVICES — 3D tilt cards on light cream
   ============================================================ */
function LuxuryServices({ onNavigate }: { onNavigate: (v: AppView) => void }) {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[#F8FAF6]">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden style={{
        backgroundImage: `radial-gradient(#2D5A3D 1px, transparent 1px)`,
        backgroundSize: '30px 30px',
      }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#8FB89B]/40 bg-[#8FB89B]/10 mb-5">
              <Sparkles className="w-3 h-3 text-[#5A8A6A]" />
              <span className="text-[#2D5A3D] text-xs font-semibold tracking-[0.2em] uppercase">Layanan Kami</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#1A3D2A]" style={{ fontFamily: SERIF }}>
              Lima Bidang Usaha Terintegrasi
            </h2>
            <p className="text-[#5A7A6A] max-w-xl mx-auto">
              Dari hulu ke hilir — setiap aspek kegiatan usaha dalam satu ekosistem yang saling terhubung.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PUBLIC_SERVICES.map((service, i) => (
            <FadeIn key={service.id} delay={i * 0.08}>
              <TiltCard className="h-full">
                <button
                  onClick={() => onNavigate(service.id as AppView)}
                  className="group w-full text-left rounded-sm p-6 h-full transition-all duration-300 relative overflow-hidden bg-white border border-[#D4E0D4] hover:border-[#8FB89B] hover:shadow-lg"
                >
                  {/* Hover sage glow border */}
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: `inset 0 0 30px ${service.color}25, 0 8px 30px ${service.color}15` }} />
                  <div className="flex items-start gap-4 mb-4 relative">
                    <div className="p-2.5 rounded-sm flex-shrink-0 transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: `${service.color}20`, color: service.color }}>
                      {moduleIcons[service.icon]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-[#1A3D2A] text-base mb-0.5" style={{ fontFamily: SERIF }}>{service.name}</h3>
                      <p className="text-xs text-[#8FB89B]">{service.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#5A7A6A] leading-relaxed mb-4 relative">{service.description}</p>
                  <div className="flex items-center gap-1.5 text-xs font-medium transition-all duration-300 opacity-70 group-hover:opacity-100 relative" style={{ color: service.color }}>
                    <span>Selengkapnya</span>
                    <ArrowUpRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </button>
              </TiltCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   ECOSYSTEM VISUAL — animated integration diagram
   ============================================================ */
function EcosystemSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const modules = MODULES.slice(0, 5)
  return (
    <section ref={ref} className="py-24 lg:py-32 bg-[#E8F0E8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-[#C9A961] text-xs font-semibold tracking-[0.2em] uppercase">Ekosistem Terintegrasi</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A3D2A] mt-3 mb-4" style={{ fontFamily: SERIF }}>
              Satu Atap, Lima Bidang Usaha
            </h2>
            <p className="text-[#5A7A6A] max-w-xl mx-auto">
              Setiap divisi saling memperkuat — menciptakan sinergi dari hulu perkebunan hingga hilir industri.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="relative max-w-4xl mx-auto aspect-square sm:aspect-[4/3]">
            {/* SVG connectors */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none" aria-hidden>
              {modules.map((_, i) => {
                const angle = (i / 5) * 2 * Math.PI - Math.PI / 2
                const x = 200 + Math.cos(angle) * 130
                const y = 200 + Math.sin(angle) * 130
                return (
                  <motion.line
                    key={i}
                    x1="200" y1="200" x2={x} y2={y}
                    stroke="#5A8A6A" strokeWidth="1.5" strokeDasharray="4 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={inView ? { pathLength: 1, opacity: 0.5 } : {}}
                    transition={{ duration: 1, delay: 0.3 + i * 0.15 }}
                  />
                )
              })}
            </svg>

            {/* Center hub */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            >
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #2D5A3D, #5A8A6A)', boxShadow: '0 0 40px rgba(90,138,106,0.4)' }}>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-[#C9A961]/40"
                />
                <div className="text-center">
                  <Network className="w-5 h-5 text-[#E8D9A0] mx-auto mb-1" />
                  <p className="text-white text-xs font-bold" style={{ fontFamily: SERIF }}>JAC</p>
                </div>
              </div>
            </motion.div>

            {/* Module nodes */}
            {modules.map((m, i) => {
              const angle = (i / 5) * 2 * Math.PI - Math.PI / 2
              const x = 50 + Math.cos(angle) * 32.5
              const y = 50 + Math.sin(angle) * 32.5
              return (
                <motion.div
                  key={m.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.12, type: 'spring', stiffness: 200 }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center bg-white shadow-lg border-2" style={{ borderColor: m.color, color: m.color }}>
                      <div className="scale-75 sm:scale-90">{moduleIcons[m.icon]}</div>
                    </div>
                    <span className="text-[10px] sm:text-xs font-medium text-[#1A3D2A] text-center max-w-[80px] leading-tight">{m.name.split(',')[0].split(' &')[0]}</span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ============================================================
   ANIMATED STATS — light mint band with counters
   ============================================================ */
function LuxuryStats() {
  const { setCurrentView } = useAppStore()
  const stats = [
    { value: 5, suffix: '', label: 'Bidang Usaha', icon: <Globe className="w-5 h-5" /> },
    { value: 17, suffix: '+', label: 'KBLI Terdaftar', icon: <Award className="w-5 h-5" /> },
    { value: 340, suffix: '+', label: 'Mitra & Klien', icon: <Users className="w-5 h-5" /> },
    { value: 47, suffix: '+', label: 'Proyek Selesai', icon: <TrendingUp className="w-5 h-5" /> },
  ]
  return (
    <section className="relative py-20 overflow-hidden" style={{ background: `linear-gradient(135deg, ${LUXURY_ACCENTS.sageBright} 0%, ${LUXURY_ACCENTS.mintBright} 100%)` }}>
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" aria-hidden style={{
        backgroundImage: `linear-gradient(#1A3D2A 1px, transparent 1px), linear-gradient(90deg, #1A3D2A 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-sm bg-white/40 text-[#2D5A3D] mb-4">{stat.icon}</div>
                <p className="text-4xl lg:text-5xl font-bold text-[#1A3D2A] mb-1" style={{ fontFamily: SERIF }}>
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-[#3A4A3A]">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button onClick={() => setCurrentView('about')} className="inline-flex items-center gap-2 text-[#2D5A3D] text-sm font-medium hover:gap-3 transition-all duration-300">
              Pelajari lebih lanjut tentang kami
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ============================================================
   INSIGHTS PREVIEW — rich gradient cards
   ============================================================ */
function LuxuryInsights() {
  const { setCurrentView } = useAppStore()
  return (
    <section className="py-24 lg:py-32 bg-[#F8FAF6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <span className="text-[#C9A961] text-xs font-semibold tracking-[0.2em] uppercase">Thought Leadership</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1A3D2A] mt-3" style={{ fontFamily: SERIF }}>
                Insights &amp; Perspektif
              </h2>
            </div>
            <button onClick={() => setCurrentView('insights')} className="inline-flex items-center gap-1.5 text-[#2D5A3D] text-sm font-medium hover:gap-2.5 transition-all duration-300">
              Lihat Semua Insights
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PUBLIC_INSIGHTS.slice(0, 3).map((insight, i) => (
            <FadeIn key={insight.id} delay={i * 0.1}>
              <article className="group cursor-pointer h-full flex flex-col bg-white rounded-sm overflow-hidden border border-[#D4E0D4] hover:shadow-xl transition-all duration-300">
                <div className="w-full aspect-[16/10] flex items-center justify-center relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${insight.categoryColor}, ${insight.categoryColor}cc)` }}>
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, white, transparent 60%)' }} />
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ duration: 0.4 }}
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-white/25 backdrop-blur-sm relative"
                  >
                    <TrendingUp className="w-5 h-5 text-white" />
                  </motion.div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <span className="inline-block text-[10px] font-semibold tracking-[0.15em] uppercase px-2.5 py-1 rounded-sm mb-3 w-fit" style={{ backgroundColor: `${insight.categoryColor}15`, color: insight.categoryColor }}>
                    {insight.category}
                  </span>
                  <h3 className="text-lg font-bold text-[#1A3D2A] mb-2 leading-snug group-hover:text-[#2D5A3D] transition-colors" style={{ fontFamily: SERIF }}>
                    {insight.title}
                  </h3>
                  <p className="text-sm text-[#5A7A6A] leading-relaxed mb-4 line-clamp-2 flex-1">{insight.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-[#8B9A8B]">
                    <span>{insight.date}</span>
                    <span className="w-1 h-1 rounded-full bg-[#D4E0D4]" />
                    <span>{insight.readTime} baca</span>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   CAREERS TEASER — with animated geometric shapes
   ============================================================ */
function LuxuryCareers() {
  const { setCurrentView } = useAppStore()
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[#E8F0E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn>
            <div>
              <span className="text-[#C9A961] text-xs font-semibold tracking-[0.2em] uppercase">Karir</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1A3D2A] mt-3 mb-4" style={{ fontFamily: SERIF }}>
                Bergabung dengan Tim Kami
              </h2>
              <p className="text-[#5A7A6A] leading-relaxed mb-6">
                Di JAC, kami percaya bahwa sumber daya manusia adalah aset terpenting. Kami mencari individu berbakat yang berbagi visi untuk membangun masa depan bisnis Indonesia yang lebih baik.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { title: 'Business Development Manager', location: 'Jakarta', type: 'Full-time' },
                  { title: 'Civil Engineer', location: 'Surabaya', type: 'Full-time' },
                  { title: 'CPO Trading Analyst', location: 'Jakarta', type: 'Full-time' },
                ].map((job, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 4 }}
                    className="flex items-center justify-between p-3.5 bg-white rounded-sm border border-[#D4E0D4] hover:border-[#8FB89B] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C9A961]" />
                      <span className="text-sm font-medium text-[#1A3D2A]">{job.title}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-[#8B9A8B]">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{job.type}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              <button onClick={() => setCurrentView('careers')} className="inline-flex items-center gap-2 text-[#2D5A3D] text-sm font-medium hover:gap-3 transition-all duration-300">
                Lihat Posisi Terbuka
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="relative aspect-square max-w-md mx-auto">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full border-2 border-[#8FB89B]/30" />
              </motion.div>
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }} className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full border border-[#C9A961]/30" />
              </motion.div>
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-[#8FB89B]/15 rotate-45" />
              </motion.div>
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-sm flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #2D5A3D, #5A8A6A)' }}>
                  <span className="text-2xl font-bold text-white" style={{ fontFamily: SERIF }}>JAC</span>
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   MAIN
   ============================================================ */
export default function LandingPage() {
  const { setCurrentView } = useAppStore()
  const navigate = (v: AppView) => setCurrentView(v)

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF6] landing-page">
      <PublicNav transparentOnTop />
      <main className="flex-1">
        <LuxuryHero onNavigate={navigate} />
        <TrustMarquee />
        <LuxuryServices onNavigate={navigate} />
        <EcosystemSection />
        <LuxuryStats />
        <LuxuryInsights />
        <LuxuryCareers />
        <CtaBand />
      </main>
      <PublicFooter />
    </div>
  )
}
