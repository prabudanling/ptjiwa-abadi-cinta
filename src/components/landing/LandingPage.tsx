'use client'

import { motion } from 'framer-motion'
import { useAppStore, type AppView } from '@/store/useAppStore'
import { COMPANY, PUBLIC_INSIGHTS, TRUST_LOGOS, PUBLIC_SERVICES } from '@/lib/company-data'
import {
  Package, Briefcase, Building2, Factory, Leaf,
  ArrowRight, ChevronDown, MapPin, Clock,
  ArrowUpRight, Users, Globe, Award, TrendingUp,
} from 'lucide-react'
import {
  PublicNav, PublicFooter, CtaBand, FadeIn, SectionLabel, PUBLIC_DESIGN,
} from '@/components/public/PublicChrome'

const moduleIcons: Record<string, React.ReactNode> = {
  Package: <Package className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
  Factory: <Factory className="w-6 h-6" />,
  Leaf: <Leaf className="w-6 h-6" />,
}

/* ---------- Hero Section ---------- */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#FAFAF7] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(#0D503C 1px, transparent 1px), linear-gradient(90deg, #0D503C 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />
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
            style={{ fontFamily: PUBLIC_DESIGN.serif }}
          >
            Membangun Masa Depan Bisnis Indonesia
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-lg sm:text-xl text-[#5a5a6a] max-w-2xl mb-10 leading-relaxed"
          >
            Konsultasi strategis, perdagangan, konstruksi, industri sawit, dan pertanian — satu ekosistem terintegrasi dari hulu ke hilir.
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

/* ---------- Trust Bar ---------- */
function TrustBar() {
  return (
    <section className="bg-white border-y border-[#e5e0d5]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <FadeIn>
          <p className="text-center text-xs font-semibold tracking-[0.15em] uppercase text-[#8a8a9a] mb-6">
            Dipercaya oleh
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-14">
            {TRUST_LOGOS.map((name, i) => (
              <div key={i} className="flex items-center justify-center px-4 py-2 text-[#9a9aaa] hover:text-[#5a5a6a] transition-colors">
                <span className="text-sm sm:text-base font-medium tracking-wide" style={{ fontFamily: PUBLIC_DESIGN.serif }}>
                  {name}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ---------- Services Section ---------- */
function ServicesSection({ onNavigate }: { onNavigate: (view: AppView) => void }) {
  return (
    <section id="layanan" className="bg-[#FAFAF7] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <SectionLabel>Layanan Kami</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] mt-3 mb-4" style={{ fontFamily: PUBLIC_DESIGN.serif }}>
              Lima Bidang Usaha Terintegrasi
            </h2>
            <p className="text-[#5a5a6a] max-w-xl mx-auto">
              Dari hulu ke hilir — setiap aspek kegiatan usaha dalam satu ekosistem yang saling terhubung.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PUBLIC_SERVICES.map((service, i) => (
            <FadeIn key={service.id} delay={i * 0.08}>
              <button
                onClick={() => onNavigate(service.id as AppView)}
                className="w-full text-left bg-white rounded-sm p-6 border border-[#e5e0d5]/60 hover:border-[#d5d0c5] hover:shadow-lg transition-all duration-300 group h-full"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-sm transition-colors duration-300 flex-shrink-0" style={{ backgroundColor: `${service.color}10`, color: service.color }}>
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
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Insights Section ---------- */
function InsightsSection() {
  const { setCurrentView } = useAppStore()
  return (
    <section id="insights" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <SectionLabel>Thought Leadership</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] mt-3" style={{ fontFamily: PUBLIC_DESIGN.serif }}>
                Insights &amp; Perspektif
              </h2>
            </div>
            <button onClick={() => setCurrentView('insights')} className="inline-flex items-center gap-1.5 text-[#0D503C] text-sm font-medium hover:gap-2.5 transition-all duration-300">
              Lihat Semua Insights
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PUBLIC_INSIGHTS.slice(0, 3).map((insight, i) => (
            <FadeIn key={insight.id} delay={i * 0.1}>
              <article className="group cursor-pointer h-full flex flex-col">
                <div className="w-full aspect-[16/10] rounded-sm mb-4 flex items-center justify-center transition-all duration-300 group-hover:shadow-md" style={{ backgroundColor: `${insight.categoryColor}08` }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${insight.categoryColor}15` }}>
                    <TrendingUp className="w-5 h-5" style={{ color: insight.categoryColor }} />
                  </div>
                </div>
                <span className="inline-block text-[10px] font-semibold tracking-[0.15em] uppercase px-2.5 py-1 rounded-sm mb-3 w-fit" style={{ backgroundColor: `${insight.categoryColor}10`, color: insight.categoryColor }}>
                  {insight.category}
                </span>
                <h3 className="text-lg font-bold text-[#1A1A2E] mb-2 leading-snug group-hover:text-[#0D503C] transition-colors" style={{ fontFamily: PUBLIC_DESIGN.serif }}>
                  {insight.title}
                </h3>
                <p className="text-sm text-[#5a5a6a] leading-relaxed mb-4 line-clamp-2 flex-1">{insight.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-[#8a8a9a]">
                  <span>{insight.date}</span>
                  <span className="w-1 h-1 rounded-full bg-[#d0d0d0]" />
                  <span>{insight.readTime} baca</span>
                </div>
                <div className="mt-3 flex items-center gap-1.5 text-xs font-medium text-[#0D503C] opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span>Baca selengkapnya</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Stats Section ---------- */
function StatsSection() {
  const { setCurrentView } = useAppStore()
  const stats = [
    { value: '5', label: 'Bidang Usaha', icon: <Globe className="w-5 h-5" /> },
    { value: '17+', label: 'KBLI Terdaftar', icon: <Award className="w-5 h-5" /> },
    { value: '340+', label: 'Mitra & Klien', icon: <Users className="w-5 h-5" /> },
    { value: '310', label: 'Akta Pendirian', icon: <TrendingUp className="w-5 h-5" /> },
  ]
  return (
    <section id="about" className="bg-[#0D503C] py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-sm bg-white/10 text-[#B8860B] mb-3">{stat.icon}</div>
                <p className="text-3xl lg:text-4xl font-bold text-white mb-1" style={{ fontFamily: PUBLIC_DESIGN.serif }}>{stat.value}</p>
                <p className="text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button onClick={() => setCurrentView('about')} className="inline-flex items-center gap-2 text-white/80 text-sm font-medium hover:text-white transition-colors">
              Pelajari lebih lanjut tentang kami
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ---------- Careers Section ---------- */
function CareersSection() {
  const { setCurrentView } = useAppStore()
  return (
    <section id="karir" className="bg-[#FAFAF7] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn>
            <div>
              <SectionLabel>Karir</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] mt-3 mb-4" style={{ fontFamily: PUBLIC_DESIGN.serif }}>
                Bergabung dengan Tim Kami
              </h2>
              <p className="text-[#5a5a6a] leading-relaxed mb-6">
                Di JAC, kami percaya bahwa sumber daya manusia adalah aset terpenting. Kami mencari individu berbakat yang berbagi visi untuk membangun masa depan bisnis Indonesia yang lebih baik.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { title: 'Business Development Manager', location: 'Jakarta', type: 'Full-time' },
                  { title: 'Civil Engineer', location: 'Surabaya', type: 'Full-time' },
                  { title: 'CPO Trading Analyst', location: 'Jakarta', type: 'Full-time' },
                ].map((job, i) => (
                  <div key={i} className="flex items-center justify-between p-3.5 bg-white rounded-sm border border-[#e5e0d5]/60 hover:border-[#d5d0c5] transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0D503C]" />
                      <span className="text-sm font-medium text-[#1A1A2E]">{job.title}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-[#8a8a9a]">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{job.type}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={() => setCurrentView('careers')} className="inline-flex items-center gap-2 text-[#0D503C] text-sm font-medium hover:gap-3 transition-all duration-300">
                Lihat Posisi Terbuka
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 flex items-center justify-center"><div className="w-48 h-48 rounded-full border-2 border-[#0D503C]/10" /></div>
              <div className="absolute inset-0 flex items-center justify-center"><div className="w-64 h-64 rounded-full border border-[#B8860B]/10" /></div>
              <div className="absolute inset-0 flex items-center justify-center"><div className="w-32 h-32 bg-[#0D503C]/[0.04] rotate-45" /></div>
              <div className="absolute inset-0 flex items-center justify-center"><div className="w-20 h-20 bg-[#B8860B]/[0.06] rotate-12 rounded-sm" /></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-4xl font-bold text-[#0D503C]/20" style={{ fontFamily: PUBLIC_DESIGN.serif }}>JAC</p>
                  <p className="text-xs text-[#0D503C]/30 mt-1 tracking-widest uppercase">People &amp; Growth</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ---------- Main Landing Page ---------- */
export default function LandingPage() {
  const { setCurrentView } = useAppStore()

  const handleNavigate = (view: AppView) => setCurrentView(view)

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF7] landing-page">
      <PublicNav transparentOnTop />
      <main className="flex-1">
        <HeroSection />
        <TrustBar />
        <ServicesSection onNavigate={handleNavigate} />
        <InsightsSection />
        <StatsSection />
        <CareersSection />
        <CtaBand />
      </main>
      <PublicFooter />
    </div>
  )
}
