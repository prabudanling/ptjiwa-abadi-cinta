'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { TRUST_LOGOS } from '@/lib/company-data'
import { SERVICE_DETAILS, ARTICLES, JOBS } from '@/lib/site-content'
import SiteHeader from '@/components/site/SiteHeader'
import SiteFooter from '@/components/site/SiteFooter'
import { Reveal, CountUp, StaggerContainer, staggerItem } from '@/components/site/motion-primitives'
import { CTABand } from '@/components/site/PageSections'
import {
  Package, Briefcase, Building2, Factory, Leaf, ShieldCheck,
  ArrowRight, ChevronDown, MapPin, Clock,
  ArrowUpRight, Users, Globe, Award, TrendingUp, CheckCircle2,
} from 'lucide-react'

const serif = { fontFamily: 'Georgia, "Times New Roman", serif' }

const moduleIcons: Record<string, React.ReactNode> = {
  Package: <Package className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
  Factory: <Factory className="w-6 h-6" />,
  Leaf: <Leaf className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#FAFAF7] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#0D503C 1px, transparent 1px), linear-gradient(90deg, #0D503C 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#B8860B]/[0.04] rounded-full translate-y-1/2 -translate-x-1/3" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-36 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
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
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A2E] leading-[1.1] mb-6 text-balance"
              style={serif}
            >
              Membangun Masa Depan Bisnis Indonesia
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-lg sm:text-xl text-[#5a5a6a] max-w-xl mb-10 leading-relaxed text-pretty"
            >
              Konsultasi strategis, perdagangan, konstruksi, industri sawit, pertanian &amp; perizinan — satu ekosistem terintegrasi dari hulu ke hilir.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.4, 0.25, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/layanan"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0D503C] text-white text-sm font-medium rounded-sm hover:bg-[#0a3f2f] transition-all duration-300 group"
              >
                Jelajahi Layanan Kami
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/tentang"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-[#0D503C]/25 text-[#0D503C] text-sm font-medium rounded-sm hover:bg-[#0D503C]/5 transition-colors"
              >
                Tentang Kami
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-jakarta.png"
                alt="Skyline Jakarta, pusat operasi PT Jiwa Abdi Cinta"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D503C]/40 to-transparent" />
            </div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="absolute -bottom-6 -left-6 bg-white shadow-xl rounded-sm p-5 border border-[#e5e0d5]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-[#0D503C]/10 flex items-center justify-center text-[#0D503C]">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#1A1A2E]" style={serif}>
                    <CountUp end={6} />
                  </p>
                  <p className="text-xs text-[#8a8a9a]">Bidang Usaha Terintegrasi</p>
                </div>
              </div>
            </motion.div>
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

// Trust Marquee
function TrustBar() {
  const logos = [...TRUST_LOGOS, ...TRUST_LOGOS, ...TRUST_LOGOS]
  return (
    <section className="bg-white border-y border-[#e5e0d5]/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Reveal>
          <p className="text-center text-xs font-semibold tracking-[0.15em] uppercase text-[#8a8a9a] mb-6">
            Dipercaya oleh mitra dan institusi terkemuka
          </p>
        </Reveal>
      </div>
      <div className="relative pb-8">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
        <motion.div
          className="flex items-center gap-16 w-max"
          animate={{ x: ['0%', '-33.333%'] }}
          transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
        >
          {logos.map((name, i) => (
            <span
              key={i}
              className="text-base font-medium tracking-wide text-[#9a9aaa] whitespace-nowrap"
              style={serif}
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// About preview
function AboutPreview() {
  const points = [
    'Enam bidang usaha dalam satu ekosistem terintegrasi',
    'Legalitas lengkap: Akta No. 310, NIB, dan izin sektoral aktif',
    'Jaringan 340+ mitra supplier dan 800+ petani plasma',
    'Komitmen keberlanjutan ISPO dan kebijakan NDPE',
  ]
  return (
    <section className="bg-[#FAFAF7] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-lg">
              <Image
                src="/images/about-team.png"
                alt="Tim PT Jiwa Abdi Cinta berdiskusi strategi"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <span className="text-[#B8860B] text-xs font-semibold tracking-[0.2em] uppercase">
              Tentang Kami
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] mt-3 mb-5 text-balance" style={serif}>
              Satu Perusahaan, Enam Mesin Pertumbuhan
            </h2>
            <p className="text-[#5a5a6a] leading-relaxed mb-6 text-pretty">
              Sejak 2022, PT Jiwa Abdi Cinta tumbuh menjadi grup usaha terintegrasi yang menghubungkan
              perdagangan, jasa konsultasi, konstruksi, industri sawit, pertanian, dan layanan perizinan —
              dirancang agar setiap divisi saling memperkuat.
            </p>
            <ul className="space-y-3 mb-8">
              {points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0D503C] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[#3a3a4a]">{point}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/tentang"
              className="inline-flex items-center gap-2 text-[#0D503C] text-sm font-medium hover:gap-3 transition-all duration-300"
            >
              Pelajari Lebih Lanjut Tentang JAC
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

// Services Section
function ServicesSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-14">
            <span className="text-[#B8860B] text-xs font-semibold tracking-[0.2em] uppercase">
              Layanan Kami
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] mt-3 mb-4 text-balance" style={serif}>
              Enam Bidang Usaha Terintegrasi
            </h2>
            <p className="text-[#5a5a6a] max-w-xl mx-auto text-pretty">
              Dari hulu ke hilir — setiap aspek kegiatan usaha dalam satu ekosistem yang saling terhubung.
            </p>
          </div>
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICE_DETAILS.map((service) => (
            <motion.div key={service.slug} variants={staggerItem} className="h-full">
              <Link
                href={`/layanan/${service.slug}`}
                className="flex flex-col w-full text-left bg-[#FAFAF7] rounded-sm p-6 border border-[#e5e0d5]/60 hover:border-[#d5d0c5] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group h-full"
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
                    <p className="text-sm text-[#5a5a6a] leading-relaxed">{service.heroDescription.split('—')[0]}</p>
                  </div>
                </div>
                <div
                  className="mt-auto pt-4 flex items-center gap-1.5 text-xs font-medium transition-all duration-300 opacity-0 group-hover:opacity-100"
                  style={{ color: service.color }}
                >
                  <span>Selengkapnya</span>
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </Link>
            </motion.div>
          ))}
        </StaggerContainer>

        <Reveal delay={0.2} className="text-center mt-10">
          <Link
            href="/layanan"
            className="inline-flex items-center gap-2 text-[#0D503C] text-sm font-medium hover:gap-3 transition-all duration-300"
          >
            Lihat Detail Semua Layanan
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

// Insights Section
function InsightsSection() {
  const featured = ARTICLES.slice(0, 3)
  return (
    <section className="bg-[#FAFAF7] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <span className="text-[#B8860B] text-xs font-semibold tracking-[0.2em] uppercase">
                Thought Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] mt-3" style={serif}>
                Insights &amp; Perspektif
              </h2>
            </div>
            <Link
              href="/insights"
              className="inline-flex items-center gap-1.5 text-[#0D503C] text-sm font-medium hover:gap-2.5 transition-all duration-300"
            >
              Lihat Semua Insights
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((article) => (
            <motion.article key={article.slug} variants={staggerItem} className="h-full">
              <Link href={`/insights/${article.slug}`} className="group h-full flex flex-col">
                <div className="relative w-full aspect-[16/10] rounded-sm mb-4 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <span
                  className="inline-block text-[10px] font-semibold tracking-[0.15em] uppercase px-2.5 py-1 rounded-sm mb-3 w-fit"
                  style={{ backgroundColor: `${article.categoryColor}10`, color: article.categoryColor }}
                >
                  {article.category}
                </span>
                <h3
                  className="text-lg font-bold text-[#1A1A2E] mb-2 leading-snug group-hover:text-[#0D503C] transition-colors text-balance"
                  style={serif}
                >
                  {article.title}
                </h3>
                <p className="text-sm text-[#5a5a6a] leading-relaxed mb-4 line-clamp-2 flex-1">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-[#8a8a9a]">
                  <span>{article.date}</span>
                  <span className="w-1 h-1 rounded-full bg-[#d0d0d0]" />
                  <span>{article.readTime} baca</span>
                </div>
              </Link>
            </motion.article>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

// Stats Section
function StatsSection() {
  const stats = [
    { end: 6, suffix: '', label: 'Bidang Usaha', icon: <Globe className="w-5 h-5" /> },
    { end: 17, suffix: '+', label: 'KBLI Terdaftar', icon: <Award className="w-5 h-5" /> },
    { end: 340, suffix: '+', label: 'Mitra & Klien', icon: <Users className="w-5 h-5" /> },
    { end: 800, suffix: '+', label: 'Petani Plasma', icon: <Leaf className="w-5 h-5" /> },
  ]

  return (
    <section className="bg-[#0D503C] py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-sm bg-white/10 text-[#B8860B] mb-3">
                  {stat.icon}
                </div>
                <p className="text-3xl lg:text-4xl font-bold text-white mb-1" style={serif}>
                  <CountUp end={stat.end} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// Careers Section
function CareersSection() {
  const featured = JOBS.slice(0, 3)
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <div>
              <span className="text-[#B8860B] text-xs font-semibold tracking-[0.2em] uppercase">
                Karir
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] mt-3 mb-4 text-balance" style={serif}>
                Bergabung dengan Tim Kami
              </h2>
              <p className="text-[#5a5a6a] leading-relaxed mb-6 text-pretty">
                Di JAC, kami percaya bahwa sumber daya manusia adalah aset terpenting.
                Kami mencari individu berbakat yang berbagi visi untuk membangun masa depan
                bisnis Indonesia yang lebih baik.
              </p>

              <div className="space-y-3 mb-6">
                {featured.map((job) => (
                  <Link
                    key={job.slug}
                    href={`/karir#${job.slug}`}
                    className="flex items-center justify-between p-3.5 bg-[#FAFAF7] rounded-sm border border-[#e5e0d5]/60 hover:border-[#0D503C]/30 hover:shadow-sm transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0D503C]" />
                      <span className="text-sm font-medium text-[#1A1A2E] group-hover:text-[#0D503C] transition-colors">
                        {job.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-[#8a8a9a]">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {job.location}
                      </span>
                      <span className="hidden sm:flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {job.type}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              <Link
                href="/karir"
                className="inline-flex items-center gap-2 text-[#0D503C] text-sm font-medium hover:gap-3 transition-all duration-300"
              >
                Lihat Semua Posisi Terbuka
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-lg">
              <Image
                src="/images/careers-culture.png"
                alt="Budaya kerja kolaboratif di PT Jiwa Abdi Cinta"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/30 to-transparent" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

// Main Landing Page Component
export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF7] landing-page">
      <SiteHeader transparent />
      <main className="flex-1">
        <HeroSection />
        <TrustBar />
        <AboutPreview />
        <ServicesSection />
        <InsightsSection />
        <StatsSection />
        <CareersSection />
        <CTABand />
      </main>
      <SiteFooter />
    </div>
  )
}
