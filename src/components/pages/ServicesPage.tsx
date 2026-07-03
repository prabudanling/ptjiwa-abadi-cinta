'use client'

import { useRef, useState, useEffect, useMemo } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { PublicNav, PublicFooter, CtaBand, PageHero, PUBLIC_DESIGN } from '@/components/public/PublicChrome'
import { SERVICE_OFFERINGS, MODULES, LUXURY_ACCENTS } from '@/lib/company-data'
import { Package, Briefcase, Building2, Factory, Leaf, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'

const ICONS: Record<string, React.ReactNode> = {
  Package: <Package className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
  Factory: <Factory className="w-6 h-6" />,
  Leaf: <Leaf className="w-6 h-6" />,
}

const SERIF = PUBLIC_DESIGN.serif

/* ============================================================
   STAT PARSER — extract prefix/number/suffix from stat strings
   like "340+", "Rp 47M", "5.200 ha", "4.8★", "1.250 t/h"
   ============================================================ */
type ParsedStat = {
  prefix: string
  num: number | null
  suffix: string
  format: (n: number) => string
  raw: string
}

function parseStat(value: string): ParsedStat {
  const m = value.match(/^(\D*)(\d[\d\.,]*)(.*)$/)
  if (!m) return { prefix: '', num: null, suffix: '', format: () => value, raw: value }
  const [, prefix, numStr, suffix] = m

  // Indonesian thousand-separated integer: "5.200", "1.250", "10.000"
  const isThousandSeparated = /^\d{1,3}(\.\d{3})+$/.test(numStr)
  if (isThousandSeparated) {
    const num = parseInt(numStr.replace(/\./g, ''), 10)
    return {
      prefix, num, suffix,
      format: (n) => Math.round(n).toLocaleString('id-ID'),
      raw: value,
    }
  }

  // Comma decimal: "4,8"
  if (numStr.includes(',')) {
    const num = parseFloat(numStr.replace(',', '.'))
    const decimals = (numStr.split(',')[1] || '').length
    return {
      prefix, num, suffix,
      format: (n) => n.toFixed(decimals).replace('.', ','),
      raw: value,
    }
  }

  // Dot decimal: "4.8", "14.85"
  const num = parseFloat(numStr)
  const decimals = (numStr.split('.')[1] || '').length
  return {
    prefix, num, suffix,
    format: (n) => decimals > 0 ? n.toFixed(decimals) : Math.round(n).toString(),
    raw: value,
  }
}

/* ============================================================
   ANIMATED COUNTER — counts up when in view
   ============================================================ */
function Counter({ value, duration = 1.8 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const parsed = useMemo(() => parseStat(value), [value])
  const [display, setDisplay] = useState<string>(parsed.num !== null ? parsed.format(0) : parsed.raw)

  useEffect(() => {
    const target = parsed.num
    if (target === null || !inView) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(parsed.format(eased * target))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, parsed, duration])

  if (parsed.num === null) return <span ref={ref}>{parsed.raw}</span>
  return <span ref={ref}>{parsed.prefix}{display}{parsed.suffix}</span>
}

/* ============================================================
   FADE IN ON SCROLL — local luxury wrapper
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
   GOLD PARTICLES — luxury floating dots
   ============================================================ */
function GoldParticles({ count = 22 }: { count?: number }) {
  const particles = useMemo(() => Array.from({ length: count }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2.5 + 1,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.5 + 0.2,
  })), [count])
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {particles.map(p => (
        <motion.span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`, top: `${p.y}%`,
            width: p.size, height: p.size,
            background: 'radial-gradient(circle, #F5D061, #B8860B)',
            boxShadow: '0 0 6px rgba(245,208,97,0.6)',
          }}
          animate={{ y: [0, -30, 0], opacity: [p.opacity, p.opacity * 1.8, p.opacity] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

/* ============================================================
   INTRO BAND — dark emerald with gold particles + counters
   ============================================================ */
function IntroBand() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const yOrb1 = useTransform(scrollYProgress, [0, 1], [80, -80])
  const yOrb2 = useTransform(scrollYProgress, [0, 1], [-60, 60])

  const stats = [
    { value: '5', label: 'Bidang Usaha', color: '#E8C547' },
    { value: '17+', label: 'KBLI Terdaftar', color: '#D4A843' },
    { value: '340+', label: 'Mitra & Klien', color: '#E8C547' },
    { value: '47+', label: 'Proyek Selesai', color: '#D4A843' },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        background: `linear-gradient(160deg, ${LUXURY_ACCENTS.emeraldDeep} 0%, ${LUXURY_ACCENTS.emerald} 50%, ${LUXURY_ACCENTS.charcoal} 100%)`,
      }}
    >
      {/* Parallax orbs */}
      <motion.div style={{ y: yOrb1 }} className="absolute top-1/4 right-1/4 w-[480px] h-[480px] rounded-full pointer-events-none" aria-hidden
        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-full h-full rounded-full" style={{ background: 'radial-gradient(circle, rgba(212,168,67,0.25), transparent 70%)', filter: 'blur(40px)' }} />
      </motion.div>
      <motion.div style={{ y: yOrb2 }} className="absolute bottom-1/4 left-1/4 w-[520px] h-[520px] rounded-full pointer-events-none" aria-hidden
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <div className="w-full h-full rounded-full" style={{ background: 'radial-gradient(circle, rgba(27,122,110,0.3), transparent 70%)', filter: 'blur(50px)' }} />
      </motion.div>

      <GoldParticles />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden style={{
        backgroundImage: `linear-gradient(#F5D061 1px, transparent 1px), linear-gradient(90deg, #F5D061 1px, transparent 1px)`,
        backgroundSize: '80px 80px',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D4A843]/30 bg-[#D4A843]/5 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#E8C547]" />
              <span className="text-[#E8C547] text-xs font-semibold tracking-[0.2em] uppercase">Ekosistem Terintegrasi</span>
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-5 mb-6 leading-[1.15]"
              style={{ fontFamily: SERIF }}
            >
              Satu Ekosistem,
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #F5D061 0%, #E8C547 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Lima Pilar Bisnis
              </span>
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl">
              PT Jiwa Abdi Cinta menyatukan perdagangan, jasa, konstruksi, industri sawit, dan pertanian dalam satu rantai nilai terintegrasi — dari hulu perkebunan hingga hilir industri, diperkuat jaringan mitra terverifikasi dan kepatuhan penuh terhadap 17+ klasifikasi KBLI.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {stats.map((s, i) => (
              <FadeIn key={i} delay={0.1 + i * 0.1}>
                <div className="rounded-sm border border-[#D4A843]/20 bg-white/[0.03] backdrop-blur-md p-5 sm:p-6 h-full transition-colors hover:border-[#D4A843]/40">
                  <p className="text-4xl lg:text-5xl font-bold mb-1" style={{ fontFamily: SERIF, color: s.color }}>
                    <Counter value={s.value} />
                  </p>
                  <p className="text-white/50 text-xs sm:text-sm">{s.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   MODULE SHOWCASE SECTION — alternating visual/content
   ============================================================ */
function ModuleSection({
  module, index,
}: {
  module: typeof SERVICE_OFFERINGS[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const isDark = index % 2 === 1
  const isReversed = index % 2 === 1

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const yDecor = useTransform(scrollYProgress, [0, 1], [60, -60])

  const bgStyle: React.CSSProperties = isDark
    ? { background: `linear-gradient(170deg, ${LUXURY_ACCENTS.charcoal} 0%, ${LUXURY_ACCENTS.emeraldDeep} 60%, ${LUXURY_ACCENTS.emerald} 100%)` }
    : { background: LUXURY_ACCENTS.cream }

  const textColor = isDark ? 'text-white' : 'text-[#1A1A2E]'
  const mutedColor = isDark ? 'text-white/65' : 'text-[#5a5a6a]'
  const cardBorder = isDark ? 'rgba(212,168,67,0.15)' : '#e5e0d5'
  const cardBg = isDark ? 'rgba(255,255,255,0.03)' : '#ffffff'

  return (
    <section ref={ref} className="relative py-20 lg:py-28 overflow-hidden" style={bgStyle}>
      {isDark && <GoldParticles count={14} />}
      {isDark && (
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" aria-hidden style={{
          backgroundImage: `radial-gradient(#D4A843 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center`}>
          {/* Visual panel */}
          <motion.div
            initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isReversed ? 50 : -50 }}
            transition={{ duration: 0.85, ease: [0.25, 0.4, 0.25, 1] }}
            className={`relative ${isReversed ? 'lg:order-2' : ''}`}
          >
            <div
              className="relative rounded-sm p-8 lg:p-10 overflow-hidden"
              style={{
                background: `linear-gradient(150deg, ${module.color} 0%, ${LUXURY_ACCENTS.emeraldDeep} 100%)`,
                boxShadow: isDark
                  ? `0 30px 80px -30px ${module.color}80, inset 0 1px 0 rgba(255,255,255,0.1)`
                  : `0 30px 80px -30px ${module.color}60, inset 0 1px 0 rgba(255,255,255,0.1)`,
              }}
            >
              {/* Glass grid overlay */}
              <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }} />

              {/* Parallax decorative icon */}
              <motion.div
                style={{ y: yDecor }}
                className="absolute -top-8 -right-8 opacity-[0.12] pointer-events-none"
                aria-hidden
              >
                <div className="scale-[7] origin-top-right text-white">
                  {ICONS[module.icon]}
                </div>
              </motion.div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center text-white">
                    {ICONS[module.icon]}
                  </div>
                  <span className="text-white/50 text-xs font-mono tracking-widest">
                    BIDANG 0{index + 1} / 05
                  </span>
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight" style={{ fontFamily: SERIF }}>
                  {module.name}
                </h3>
                <p className="text-white/75 text-sm mb-8">{module.tagline}</p>

                <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                  {module.stats.map((stat, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, y: 16 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                      transition={{ duration: 0.5, delay: 0.4 + j * 0.12 }}
                      className="rounded-sm bg-white/10 backdrop-blur-sm border border-white/15 p-3"
                    >
                      <p className="text-base sm:text-lg lg:text-xl font-bold text-white leading-tight" style={{ fontFamily: SERIF }}>
                        <Counter value={stat.value} />
                      </p>
                      <p className="text-white/60 text-[10px] mt-1 leading-tight">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isReversed ? -50 : 50 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
            className={isReversed ? 'lg:order-1' : ''}
          >
            <span
              className="inline-block text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ color: isDark ? module.color : module.color }}
            >
              {module.tagline}
            </span>
            <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mt-3 mb-5 leading-tight ${textColor}`} style={{ fontFamily: SERIF }}>
              {module.name}
            </h3>
            <p className={`text-base lg:text-lg leading-relaxed mb-8 ${mutedColor}`}>
              {module.overview}
            </p>

            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {module.offerings.map((o, j) => (
                <motion.div
                  key={j}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + j * 0.1 }}
                  whileHover={{ y: -4, boxShadow: `0 14px 40px -12px ${module.color}70` }}
                  className="group rounded-sm p-5 border transition-colors h-full"
                  style={{ borderColor: cardBorder, backgroundColor: cardBg }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0 transition-transform group-hover:scale-150"
                      style={{ backgroundColor: module.color }}
                    />
                    <div>
                      <h4 className={`font-semibold text-sm mb-1.5 ${textColor}`}>{o.title}</h4>
                      <p className={`text-xs leading-relaxed ${mutedColor}`}>{o.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   KBLI / LEGAL SECTION — cream, grouped by module
   ============================================================ */
function KbliSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#FAFAF7] relative overflow-hidden">
      {/* Subtle gold dot pattern */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none" aria-hidden style={{
        backgroundImage: `radial-gradient(#B8860B 1px, transparent 1px)`,
        backgroundSize: '32px 32px',
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#B8860B]/30 bg-[#B8860B]/5 mb-5">
              <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" />
              <span className="text-[#B8860B] text-xs font-semibold tracking-[0.2em] uppercase">Kepatuhan & Klasifikasi</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E] mb-4" style={{ fontFamily: SERIF }}>
              17+ KBLI Terdaftar, Satu Entitas Hukum
            </h2>
            <p className="text-[#5a5a6a] max-w-2xl mx-auto leading-relaxed">
              Setiap bidang usaha didukung klasifikasi KBLI resmi sesuai Akta Pendirian No. 310 — memastikan kepatuhan regulasi dan ruang lingkup operasional yang transparan.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {MODULES.map((mod, i) => (
            <FadeIn key={mod.id} delay={i * 0.08}>
              <div className="bg-white rounded-sm border border-[#e5e0d5] overflow-hidden h-full transition-shadow hover:shadow-xl"
                style={{ boxShadow: '0 1px 0 rgba(15,27,23,0.02)' }}
              >
                {/* Color stripe */}
                <div className="h-1.5" style={{ background: `linear-gradient(90deg, ${mod.color}, ${LUXURY_ACCENTS.gold})` }} />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-11 h-11 rounded-sm flex items-center justify-center"
                      style={{ backgroundColor: `${mod.color}15`, color: mod.color }}
                    >
                      {ICONS[mod.icon]}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1A1A2E] text-base leading-tight" style={{ fontFamily: SERIF }}>
                        {mod.name}
                      </h3>
                      <p className="text-[#8a8a9a] text-xs mt-0.5">{mod.subtitle}</p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {mod.kbliNames.map((name, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className="w-4 h-4 mt-0.5 flex-shrink-0"
                          style={{ color: mod.color }}
                        />
                        <div className="flex-1 min-w-0">
                          <span className="block text-xs font-mono font-semibold mb-0.5" style={{ color: mod.color }}>
                            KBLI {mod.kblis[j]}
                          </span>
                          <span className="block text-xs text-[#5a5a6a] leading-relaxed">
                            {name}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   PROCESS / HOW WE WORK — 4 elegant numbered steps
   ============================================================ */
const PROCESS_STEPS = [
  {
    no: '01',
    title: 'Konsultasi & Discovery',
    desc: 'Memahami kebutuhan, audit menyeluruh, analisis kelayakan, dan pemetaan ruang lingkup bersama tim ahli lintas divisi.',
  },
  {
    no: '02',
    title: 'Perencanaan & Strategi',
    desc: 'Penyusunan proposal teknis, RAB terperinci, timeline proyek, dan alokasi sumber daya yang terukur dan transparan.',
  },
  {
    no: '03',
    title: 'Eksekusi & Implementasi',
    desc: 'Pelaksanaan terkoordinasi lintas divisi dengan monitoring real-time, kontrol kualitas berlapis, dan pelaporan berkala.',
  },
  {
    no: '04',
    title: 'Evaluasi & Penyerahan',
    desc: 'Inspeksi akhir, dokumentasi lengkap, serah terima, dan dukungan after-sales untuk memastikan keberlanjutan operasional.',
  },
]

function ProcessSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section
      ref={ref}
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ background: `linear-gradient(180deg, ${LUXURY_ACCENTS.cream} 0%, #F5F0E8 100%)` }}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#0D503C]/25 bg-[#0D503C]/5 mb-5">
              <Sparkles className="w-3.5 h-3.5 text-[#0D503C]" />
              <span className="text-[#0D503C] text-xs font-semibold tracking-[0.2em] uppercase">Cara Kami Bekerja</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E] mb-4" style={{ fontFamily: SERIF }}>
              Proses Empat Langkah, Hasil Berkelas
            </h2>
            <p className="text-[#5a5a6a] max-w-2xl mx-auto leading-relaxed">
              Dari diskusi awal hingga serah terima — metodologi terstruktur yang memastikan setiap proyek tuntas tepat waktu, sesuai anggaran, dan melampaui ekspektasi.
            </p>
          </div>
        </FadeIn>

        <div className="relative">
          {/* Connecting horizontal line (lg only) */}
          <div className="hidden lg:block absolute top-[34px] left-[12.5%] right-[12.5%] h-px" aria-hidden
            style={{ background: `linear-gradient(90deg, transparent, ${LUXURY_ACCENTS.gold} 20%, ${LUXURY_ACCENTS.gold} 80%, transparent)` }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.4, 0.25, 1] }}
                className="relative text-center lg:text-left"
              >
                <div className="flex lg:justify-start justify-center mb-5">
                  <div
                    className="relative w-[68px] h-[68px] rounded-full flex items-center justify-center font-bold text-xl"
                    style={{
                      fontFamily: SERIF,
                      color: LUXURY_ACCENTS.emeraldDeep,
                      background: `linear-gradient(135deg, ${LUXURY_ACCENTS.goldBright}, ${LUXURY_ACCENTS.gold})`,
                      boxShadow: `0 8px 24px -8px ${LUXURY_ACCENTS.gold}80`,
                    }}
                  >
                    {step.no}
                    <span className="absolute inset-0 rounded-full border-2 border-white/40" aria-hidden />
                  </div>
                </div>
                <h3 className="font-bold text-[#1A1A2E] text-lg mb-2.5" style={{ fontFamily: SERIF }}>
                  {step.title}
                </h3>
                <p className="text-[#5a5a6a] text-sm leading-relaxed">
                  {step.desc}
                </p>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4" aria-hidden>
                    <ArrowRight className="w-4 h-4 text-[#B8860B] rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   PAGE — Services
   ============================================================ */
export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF7] landing-page">
      <PublicNav />
      <main className="flex-1">
        <PageHero
          label="Layanan"
          title="Lima Bidang Usaha Terintegrasi"
          subtitle="Dari hulu ke hilir — ekosistem bisnis lengkap dalam satu atap, dirancang untuk pertumbuhan jangka panjang yang berkelanjutan."
        />

        <IntroBand />

        {/* Module showcase — alternating cream/dark sections */}
        {SERVICE_OFFERINGS.map((mod, i) => (
          <ModuleSection key={mod.moduleId} module={mod} index={i} />
        ))}

        <KbliSection />
        <ProcessSection />
      </main>
      <CtaBand
        title="Siap Memulai Proyek Anda?"
        subtitle="Tim spesialis lintas divisi siap mendampingi dari konsultasi awal hingga serah terima — hubungi divisi yang relevan dengan kebutuhan Anda."
      />
      <PublicFooter />
    </div>
  )
}
