'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { PublicNav, PublicFooter, CtaBand, PageHero, FadeIn, SectionLabel, PUBLIC_DESIGN } from '@/components/public/PublicChrome'
import { useAppStore } from '@/store/useAppStore'
import { SUSTAINABILITY_PILLARS, CERTIFICATIONS, SDG_ALIGNMENT, SUSTAINABILITY_STATS, LUXURY_ACCENTS } from '@/lib/company-data'
import { Leaf, Users, TreePine, Scale, Award, ArrowRight, Sparkles, CheckCircle2, TrendingUp, Globe } from 'lucide-react'

const SERIF = PUBLIC_DESIGN.serif

/* ============================================================
   PILLAR ICON MAP — string name → React node
   ============================================================ */
const PILLAR_ICONS: Record<string, React.ReactNode> = {
  Leaf: <Leaf className="w-9 h-9" strokeWidth={1.5} />,
  Users: <Users className="w-9 h-9" strokeWidth={1.5} />,
  TreePine: <TreePine className="w-9 h-9" strokeWidth={1.5} />,
  Scale: <Scale className="w-9 h-9" strokeWidth={1.5} />,
}

/* ============================================================
   ANIMATED COUNTER — counts up when in view, cubic ease-out
   ============================================================ */
function Counter({
  value, suffix = '', duration = 2,
}: { value: number; suffix?: string; duration?: number }) {
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

  return <span ref={ref}>{display.toLocaleString('id-ID')}{suffix}</span>
}

/* ============================================================
   SDG NUMBER EXTRACTOR — 'sdg8' → '8'
   ============================================================ */
function sdgNumber(id: string): string {
  const m = id.match(/sdg(\d+)/i)
  return m ? m[1] : ''
}

/* ============================================================
   MAIN
   ============================================================ */
export default function SustainabilityPage() {
  const { setCurrentView } = useAppStore()

  /* Parallax for the intro + stats band background */
  const statsRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: statsProgress } = useScroll({
    target: statsRef,
    offset: ['start end', 'end start'],
  })
  const yGrid = useTransform(statsProgress, [0, 1], [-40, 40])
  const yDots = useTransform(statsProgress, [0, 1], [30, -30])

  /* Parallax for the pledge band */
  const pledgeRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: pledgeProgress } = useScroll({
    target: pledgeRef,
    offset: ['start end', 'end start'],
  })
  const yPledgeBg = useTransform(pledgeProgress, [0, 1], [-30, 30])

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF6] landing-page">
      <PublicNav />
      <main className="flex-1">
        <PageHero
          label="Keberlanjutan"
          title="Komitmen untuk Masa Depan Lestari"
          subtitle="Setiap operasional PT Jiwa Abdi Cinta dirancang untuk menyeimbangkan pertumbuhan bisnis dengan tanggung jawab lingkungan dan sosial — dari kebun sawit bersertifikasi, hutan tanaman industri, hingga komunitas petani plasma."
        />

        {/* ============== INTRO + STATS BAND (mint gradient + parallax) ============== */}
        <section
          ref={statsRef}
          className="relative py-20 lg:py-28 overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${LUXURY_ACCENTS.sageBright} 0%, ${LUXURY_ACCENTS.mintBright} 100%)` }}
          aria-labelledby="intro-heading"
        >
          {/* Parallax sage grid overlay */}
          <motion.div
            style={{ y: yGrid }}
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            aria-hidden
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(${LUXURY_ACCENTS.sageDeep} 1px, transparent 1px), linear-gradient(90deg, ${LUXURY_ACCENTS.sageDeep} 1px, transparent 1px)`,
                backgroundSize: '64px 64px',
              }}
            />
          </motion.div>
          {/* Parallax sage particle dots overlay */}
          <motion.div
            style={{ y: yDots }}
            className="absolute inset-0 opacity-[0.12] pointer-events-none"
            aria-hidden
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(${LUXURY_ACCENTS.sageDeep} 1.4px, transparent 1.4px)`,
                backgroundSize: '40px 40px',
              }}
            />
          </motion.div>
          {/* Floating glow orbs (luxury depth) */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.22, 0.42, 0.22] }}
            transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 right-1/4 w-[420px] h-[420px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(90,138,106,0.22), transparent 70%)', filter: 'blur(45px)' }}
            aria-hidden
          />
          <motion.div
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.16, 0.34, 0.16] }}
            transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-1/4 left-1/4 w-[480px] h-[480px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(201,169,97,0.18), transparent 70%)', filter: 'blur(50px)' }}
            aria-hidden
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Intro: heading + approach card */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
              <FadeIn>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#5A8A6A]/30 bg-white/40 backdrop-blur-sm mb-5">
                  <Sparkles className="w-3.5 h-3.5 text-[#5A8A6A]" />
                  <SectionLabel>Inti Bisnis Kami</SectionLabel>
                </span>
                <h2
                  id="intro-heading"
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A3D2A] leading-[1.1] mb-5"
                  style={{ fontFamily: SERIF }}
                >
                  Keberlanjutan adalah Inti Bisnis Kami
                </h2>
                <p className="text-base sm:text-lg text-[#1A3D2A]/80 leading-relaxed max-w-xl">
                  Bukan komplementer, melainkan fondasi. JAC mengintegrasikan praktik berkelanjutan ke dalam setiap rantai nilai — dari kebun plasma bersertifikasi ISPO &amp; RSPO, hutan tanaman industri berstandar FSC, hingga pabrik fraksinasi yang efisien. Kami percaya pertumbuhan bisnis dan kelestarian alam harus berjalan beriringan.
                </p>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="relative rounded-sm border border-white/70 bg-white/65 backdrop-blur-md p-7 lg:p-8 shadow-[0_12px_44px_-16px_rgba(26,61,42,0.18)]">
                  <div className="absolute -top-3 left-7 px-3 py-1 bg-[#2D5A3D] text-white text-[10px] font-semibold tracking-[0.22em] uppercase rounded-sm">
                    Pendekatan ESG
                  </div>
                  <div className="space-y-4 mt-2">
                    {[
                      { k: 'Lingkungan', v: 'Kelola lahan, air, dan keanekaragaman hayati secara bertanggung jawab.' },
                      { k: 'Sosial', v: 'Berdayakan komunitas lokal dan 1.200+ keluarga petani plasma.' },
                      { k: 'Ekonomi', v: 'Rantai nilai yang adil, transparan, dan berdaya saing global.' },
                      { k: 'Tata Kelola', v: 'Kepatuhan penuh regulasi dan audit independen berkala.' },
                    ].map((row, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#5A8A6A] flex-shrink-0" />
                        <p className="text-[#1A3D2A] text-sm leading-relaxed">
                          <span className="font-semibold" style={{ fontFamily: SERIF }}>{row.k}</span>
                          <span className="text-[#5A7A6A]"> — {row.v}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Stats grid (animated counters) */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {SUSTAINABILITY_STATS.map((st, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="relative h-full rounded-sm border border-white/70 bg-white/85 backdrop-blur-md p-6 lg:p-7 overflow-hidden"
                  >
                    {/* Color top accent strip */}
                    <span
                      className="absolute top-0 left-0 right-0 h-0.5"
                      style={{ background: `linear-gradient(90deg, transparent, ${st.color}, transparent)` }}
                      aria-hidden
                    />
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="w-10 h-10 rounded-sm flex items-center justify-center"
                        style={{ backgroundColor: `${st.color}1F`, color: st.color }}
                      >
                        <TrendingUp className="w-5 h-5" strokeWidth={1.8} />
                      </div>
                      <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#8B9A8B]">
                        0{i + 1}
                      </span>
                    </div>
                    <div
                      className="text-3xl lg:text-4xl font-bold mb-1.5 text-[#1A3D2A]"
                      style={{ fontFamily: SERIF }}
                    >
                      <Counter value={st.value} suffix={st.suffix} />
                    </div>
                    <p className="text-[#5A7A6A] text-xs lg:text-sm leading-snug">
                      {st.label}
                    </p>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ============== 4 PILLARS (cream bg, alternating 2-col rows) ============== */}
        <section className="py-20 lg:py-28 bg-[#F8FAF6]" aria-labelledby="pillars-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-14 lg:mb-20">
                <SectionLabel>Empat Pilar</SectionLabel>
                <h2
                  id="pillars-heading"
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A3D2A] mt-3 mb-4"
                  style={{ fontFamily: SERIF }}
                >
                  Empat Pilar Keberlanjutan
                </h2>
                <p className="text-[#5A7A6A] max-w-2xl mx-auto leading-relaxed">
                  Strategi keberlanjutan JAC dibangun di atas empat pilar saling terkait — masing-masing dengan target terukur dan inisiatif nyata di lapangan.
                </p>
              </div>
            </FadeIn>

            <div className="space-y-10 lg:space-y-14">
              {SUSTAINABILITY_PILLARS.map((p, i) => {
                const reversed = i % 2 === 1
                const icon = PILLAR_ICONS[p.icon] ?? PILLAR_ICONS.Leaf
                return (
                  <FadeIn key={p.id} delay={i * 0.05}>
                    <motion.article
                      whileHover={{ y: -4 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                      className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch rounded-sm border border-[#D4E0D4] bg-white p-6 sm:p-8 lg:p-10 shadow-[0_10px_36px_-14px_rgba(26,61,42,0.10)] overflow-hidden"
                    >
                      {/* Visual panel */}
                      <div className={reversed ? 'lg:order-2' : ''}>
                        <div
                          className="relative h-full rounded-sm overflow-hidden p-8 lg:p-10 min-h-[280px] flex flex-col justify-between"
                          style={{ background: `linear-gradient(135deg, ${p.color}1F 0%, ${p.color}0A 100%)` }}
                        >
                          {/* Subtle dot pattern */}
                          <div
                            className="absolute inset-0 opacity-[0.10] pointer-events-none"
                            aria-hidden
                            style={{
                              backgroundImage: `radial-gradient(${p.color} 1.2px, transparent 1.2px)`,
                              backgroundSize: '24px 24px',
                            }}
                          />
                          {/* Color accent strip */}
                          <span
                            className="absolute top-0 left-0 w-1 h-full"
                            style={{ background: `linear-gradient(180deg, ${p.color}, ${p.color}55)` }}
                            aria-hidden
                          />
                          <div className="relative flex items-start justify-between">
                            <div
                              className="w-16 h-16 rounded-full flex items-center justify-center bg-white"
                              style={{ color: p.color, boxShadow: `0 10px 28px -8px ${p.color}66` }}
                            >
                              {icon}
                            </div>
                            <span
                              className="inline-flex items-center justify-center w-9 h-9 rounded-sm text-xs font-bold"
                              style={{ backgroundColor: `${p.color}26`, color: p.color, fontFamily: SERIF }}
                            >
                              0{i + 1}
                            </span>
                          </div>
                          <div className="relative mt-6">
                            <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#8B9A8B] mb-2">
                              {p.metric.label}
                            </p>
                            <p
                              className="text-5xl lg:text-6xl font-bold leading-none text-[#1A3D2A]"
                              style={{ fontFamily: SERIF }}
                            >
                              {p.metric.value}
                            </p>
                            <p className="text-sm text-[#5A7A6A] mt-2">{p.metric.sub}</p>
                          </div>
                        </div>
                      </div>

                      {/* Content panel */}
                      <div className={reversed ? 'lg:order-1' : ''}>
                        <span
                          className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm text-[10px] font-semibold tracking-[0.2em] uppercase mb-4"
                          style={{ backgroundColor: `${p.color}1A`, color: p.color }}
                        >
                          Pilar {i + 1}
                        </span>
                        <h3
                          className="text-2xl sm:text-3xl font-bold text-[#1A3D2A] mb-3"
                          style={{ fontFamily: SERIF }}
                        >
                          {p.name}
                        </h3>
                        <p className="text-[#5A7A6A] leading-relaxed mb-6">
                          {p.description}
                        </p>
                        <ul className="space-y-3">
                          {p.initiatives.map((init, j) => (
                            <li key={j} className="flex items-start gap-3">
                              <CheckCircle2
                                className="w-5 h-5 mt-0.5 flex-shrink-0"
                                style={{ color: p.color }}
                                strokeWidth={1.8}
                              />
                              <span className="text-sm text-[#1A3D2A] leading-relaxed">{init}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.article>
                  </FadeIn>
                )
              })}
            </div>
          </div>
        </section>

        {/* ============== CERTIFICATIONS GRID (mint bg) ============== */}
        <section className="py-20 lg:py-28 bg-[#E8F0E8]" aria-labelledby="certs-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-14 lg:mb-16">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#5A8A6A]/30 bg-white/60 mb-5">
                  <Award className="w-3.5 h-3.5 text-[#5A8A6A]" />
                  <SectionLabel>Sertifikasi</SectionLabel>
                </span>
                <h2
                  id="certs-heading"
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A3D2A] mt-3 mb-4"
                  style={{ fontFamily: SERIF }}
                >
                  Sertifikasi &amp; Standar Internasional
                </h2>
                <p className="text-[#5A7A6A] max-w-2xl mx-auto leading-relaxed">
                  Enam sertifikasi keberlanjutan aktif yang menjamin praktik JAC memenuhi standar nasional dan global — dari kebun hingga rantai pasok akhir.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {CERTIFICATIONS.map((c, i) => (
                <FadeIn key={c.id} delay={(i % 3) * 0.08}>
                  <motion.article
                    whileHover={{
                      y: -6,
                      borderColor: c.color,
                      boxShadow: `0 18px 44px -16px ${c.color}66`,
                    }}
                    transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                    className="group relative h-full rounded-sm border border-[#D4E0D4] bg-white p-6 lg:p-7 overflow-hidden"
                  >
                    {/* Color top accent strip */}
                    <span
                      className="absolute top-0 left-0 right-0 h-1"
                      style={{ background: `linear-gradient(90deg, ${c.color}, ${c.color}80 60%, transparent)` }}
                      aria-hidden
                    />
                    {/* Hover radial glow */}
                    <span
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      aria-hidden
                      style={{ background: `radial-gradient(circle at top right, ${c.color}14, transparent 60%)` }}
                    />
                    <div className="relative">
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className="w-14 h-14 rounded-sm flex items-center justify-center font-bold text-base"
                          style={{ backgroundColor: `${c.color}1A`, color: c.color, fontFamily: SERIF }}
                        >
                          {c.name}
                        </div>
                        <span
                          className="text-[10px] font-semibold tracking-[0.18em] uppercase px-2 py-1 rounded-sm"
                          style={{ backgroundColor: `${c.color}14`, color: c.color }}
                        >
                          {c.year}
                        </span>
                      </div>
                      <h3
                        className="text-lg font-bold text-[#1A3D2A] mb-2 leading-snug"
                        style={{ fontFamily: SERIF }}
                      >
                        {c.fullName}
                      </h3>
                      <div className="flex items-center gap-2 mb-3">
                        <Globe className="w-3.5 h-3.5 text-[#8B9A8B] flex-shrink-0" />
                        <span className="text-xs text-[#5A7A6A]">{c.scope}</span>
                      </div>
                      <p className="text-sm text-[#5A7A6A] leading-relaxed">
                        {c.description}
                      </p>
                    </div>
                  </motion.article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ============== SDG ALIGNMENT (cream bg) ============== */}
        <section className="py-20 lg:py-28 bg-[#F8FAF6]" aria-labelledby="sdg-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-14 lg:mb-16">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#5A8A6A]/30 bg-white/60 mb-5">
                  <Globe className="w-3.5 h-3.5 text-[#5A8A6A]" />
                  <SectionLabel>SDG Alignment</SectionLabel>
                </span>
                <h2
                  id="sdg-heading"
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A3D2A] mt-3 mb-4"
                  style={{ fontFamily: SERIF }}
                >
                  Selaras dengan Tujuan Pembangunan Berkelanjutan
                </h2>
                <p className="text-[#5A7A6A] max-w-2xl mx-auto leading-relaxed">
                  Kontribusi langsung JAC terhadap empat Sustainable Development Goals PBB — diukur melalui dampak nyata di lapangan.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
              {SDG_ALIGNMENT.map((sdg, i) => (
                <FadeIn key={sdg.id} delay={i * 0.1}>
                  <motion.article
                    whileHover={{ y: -5 }}
                    transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                    className="group relative h-full rounded-sm bg-white p-6 lg:p-7 overflow-hidden border border-[#D4E0D4] border-l-4"
                    style={{ borderLeftColor: sdg.color }}
                  >
                    {/* Hover soft glow */}
                    <span
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      aria-hidden
                      style={{ background: `linear-gradient(135deg, ${sdg.color}0F, transparent 70%)` }}
                    />
                    <div className="relative">
                      <div className="flex items-start justify-between mb-4">
                        <span
                          className="inline-flex items-center justify-center w-11 h-11 rounded-sm font-bold text-base text-[#1A3D2A]"
                          style={{ backgroundColor: `${sdg.color}1F`, fontFamily: SERIF }}
                        >
                          {sdgNumber(sdg.id)}
                        </span>
                        <span
                          className="text-[10px] font-semibold tracking-[0.2em] uppercase px-2 py-1 rounded-sm"
                          style={{ backgroundColor: `${sdg.color}14`, color: sdg.color }}
                        >
                          SDG
                        </span>
                      </div>
                      <h3
                        className="text-base lg:text-lg font-bold text-[#1A3D2A] mb-3 leading-snug min-h-[3.5rem]"
                        style={{ fontFamily: SERIF }}
                      >
                        {sdg.name}
                      </h3>
                      <p className="text-sm text-[#5A7A6A] leading-relaxed">
                        {sdg.contribution}
                      </p>
                    </div>
                  </motion.article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ============== PLEDGE / COMMITMENT (sage gradient + parallax) ============== */}
        <section
          ref={pledgeRef}
          className="relative py-20 lg:py-28 overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${LUXURY_ACCENTS.sage} 0%, ${LUXURY_ACCENTS.sageBright} 100%)` }}
          aria-labelledby="pledge-heading"
        >
          {/* Parallax background dots */}
          <motion.div
            style={{ y: yPledgeBg }}
            className="absolute inset-0 opacity-[0.1] pointer-events-none"
            aria-hidden
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(${LUXURY_ACCENTS.forest} 1.2px, transparent 1.2px)`,
                backgroundSize: '36px 36px',
              }}
            />
          </motion.div>
          {/* Soft center glow */}
          <motion.div
            animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.45, 0.3] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[620px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.45), transparent 60%)', filter: 'blur(60px)' }}
            aria-hidden
          />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <Sparkles className="w-9 h-9 text-[#1A3D2A] mx-auto mb-6" strokeWidth={1.5} />
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2D5A3D]/25 bg-white/45 backdrop-blur-sm mb-6">
                <SectionLabel>Komitmen Jangka Panjang</SectionLabel>
              </span>
              <h2
                id="pledge-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A3D2A] leading-[1.25] mb-6"
                style={{ fontFamily: SERIF }}
              >
                “Kami berkomitmen meninggalkan jejak yang lebih hijau, komunitas yang lebih kuat, dan tata kelola yang lebih transparan — untuk generasi hari ini dan masa depan.”
              </h2>
              <p className="text-base sm:text-lg text-[#1A3D2A]/80 mb-9 max-w-2xl mx-auto leading-relaxed">
                Komitmen ini tertanam dalam setiap keputusan operasional, investasi, dan kemitraan JAC — diukur, dilaporkan, dan diaudit secara independen setiap tahun.
              </p>
              <button
                onClick={() => setCurrentView('contact')}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1A3D2A] text-white text-sm font-medium rounded-sm hover:bg-[#2D5A3D] transition-colors shadow-[0_12px_32px_-10px_rgba(26,61,42,0.45)]"
              >
                Pelajari lebih lanjut
                <ArrowRight className="w-4 h-4" />
              </button>
            </FadeIn>
          </div>
        </section>
      </main>

      <CtaBand
        title="Bergabung dalam Komitmen Keberlanjutan"
        subtitle="Jadilah mitra JAC dalam membangun rantai pasok yang lestari — dari kebun bersertifikasi hingga pasar global yang bertanggung jawab."
      />
      <PublicFooter />
    </div>
  )
}
