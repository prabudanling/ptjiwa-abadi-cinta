'use client'

import { useState } from 'react'
import { PublicNav, PublicFooter, CtaBand, PageHero, FadeIn, SectionLabel, PUBLIC_DESIGN } from '@/components/public/PublicChrome'
import { PUBLIC_INSIGHTS, INSIGHT_CATEGORIES } from '@/lib/company-data'
import { TrendingUp, ArrowRight, ArrowUpRight, Mail, CheckCircle2, Clock } from 'lucide-react'

export default function InsightsPage() {
  const [category, setCategory] = useState('Semua')
  const [subscribed, setSubscribed] = useState(false)
  const [email, setEmail] = useState('')

  const featured = PUBLIC_INSIGHTS.find((i) => i.featured) ?? PUBLIC_INSIGHTS[0]
  const nonFeatured = PUBLIC_INSIGHTS.filter((i) => !i.featured)
  const filtered =
    category === 'Semua'
      ? nonFeatured
      : nonFeatured.filter((i) => i.category === category)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) setSubscribed(true)
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF7] landing-page">
      <PublicNav />
      <main className="flex-1">
        <PageHero
          label="Thought Leadership"
          title="Insights & Perspektif"
          subtitle="Analisis mendalam, tren industri, dan perspektif strategis dari para ahli JAC untuk membantu pemimpin bisnis menghadapi masa depan."
        />

        {/* ============ Featured Article ============ */}
        <section className="py-12 lg:py-16" aria-labelledby="featured-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="mb-8">
                <SectionLabel>Artikel Pilihan</SectionLabel>
                <h2
                  id="featured-heading"
                  className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mt-3"
                  style={{ fontFamily: PUBLIC_DESIGN.serif }}
                >
                  Sorotan Bulan Ini
                </h2>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <article className="group grid grid-cols-1 lg:grid-cols-2 bg-white rounded-sm border border-[#e5e0d5]/60 overflow-hidden hover:shadow-xl hover:border-[#e5e0d5] transition-all duration-300">
                {/* Left: tinted category panel */}
                <div
                  className="relative p-8 sm:p-10 lg:p-12 flex flex-col justify-between min-h-[280px] lg:min-h-[440px] overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${featured.categoryColor}1f 0%, ${featured.categoryColor}0a 100%)`,
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-[0.07] pointer-events-none"
                    style={{
                      backgroundImage: `linear-gradient(${featured.categoryColor} 1px, transparent 1px), linear-gradient(90deg, ${featured.categoryColor} 1px, transparent 1px)`,
                      backgroundSize: '40px 40px',
                    }}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute -bottom-10 -right-10 w-52 h-52 rounded-full flex items-center justify-center pointer-events-none"
                    style={{ backgroundColor: `${featured.categoryColor}14` }}
                    aria-hidden="true"
                  >
                    <TrendingUp
                      className="w-28 h-28"
                      style={{ color: featured.categoryColor }}
                      strokeWidth={1.2}
                    />
                  </div>

                  <div className="relative z-10">
                    <span
                      className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.18em] uppercase px-3 py-1.5 rounded-sm"
                      style={{
                        backgroundColor: `${featured.categoryColor}1f`,
                        color: featured.categoryColor,
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: featured.categoryColor }}
                      />
                      {featured.category}
                    </span>
                  </div>

                  <div className="relative z-10 flex items-center gap-3">
                    <span
                      className="text-xs font-semibold tracking-[0.22em] uppercase"
                      style={{ color: featured.categoryColor }}
                    >
                      Featured
                    </span>
                    <span
                      className="w-10 h-px"
                      style={{ backgroundColor: featured.categoryColor, opacity: 0.4 }}
                    />
                  </div>
                </div>

                {/* Right: content */}
                <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                  <h3
                    className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-[#1A1A2E] leading-[1.15] mb-5"
                    style={{ fontFamily: PUBLIC_DESIGN.serif }}
                  >
                    {featured.title}
                  </h3>
                  <p className="text-[#5a5a6a] text-base sm:text-lg leading-relaxed mb-6">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-[#8a8a9a] mb-7">
                    <span>{featured.date}</span>
                    <span className="w-1 h-1 rounded-full bg-[#d0d0d0]" />
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {featured.readTime} baca
                    </span>
                  </div>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#0D503C] text-white text-sm font-semibold rounded-sm hover:bg-[#0a3f2f] transition-all w-fit group/btn"
                  >
                    Baca selengkapnya
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
                  </button>
                </div>
              </article>
            </FadeIn>
          </div>
        </section>

        {/* ============ Category Filter + Article Grid ============ */}
        <section className="py-12 lg:py-20" aria-labelledby="library-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
                <div>
                  <SectionLabel>Perpustakaan Insights</SectionLabel>
                  <h2
                    id="library-heading"
                    className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mt-3"
                    style={{ fontFamily: PUBLIC_DESIGN.serif }}
                  >
                    Jelajahi Semua Artikel
                  </h2>
                </div>
                <p className="text-sm text-[#5a5a6a] max-w-md leading-relaxed">
                  Pilih kategori untuk menyaring perspektif ahli JAC di sepanjang lima bidang usaha dan strategi korporat.
                </p>
              </div>
            </FadeIn>

            {/* Filter pills */}
            <FadeIn delay={0.05}>
              <div
                className="flex flex-wrap gap-2 mb-10"
                role="tablist"
                aria-label="Filter artikel berdasarkan kategori"
              >
                {INSIGHT_CATEGORIES.map((cat) => {
                  const active = category === cat
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setCategory(cat)}
                      role="tab"
                      aria-selected={active}
                      className={
                        'px-4 py-2 text-sm font-medium rounded-full transition-all ' +
                        (active
                          ? 'bg-[#0D503C] text-white shadow-sm'
                          : 'bg-white border border-[#e5e0d5] text-[#5a5a6a] hover:border-[#0D503C]/40 hover:text-[#1A1A2E]')
                      }
                    >
                      {cat}
                    </button>
                  )
                })}
              </div>
            </FadeIn>

            {/* Article grid */}
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((insight, i) => (
                  <FadeIn key={insight.id} delay={i * 0.05}>
                    <article className="group cursor-pointer h-full flex flex-col bg-white rounded-sm border border-[#e5e0d5]/60 hover:shadow-lg hover:border-[#e5e0d5] transition-all duration-300 overflow-hidden">
                      {/* Tinted top panel */}
                      <div
                        className="relative h-28 flex items-center px-5 overflow-hidden"
                        style={{
                          background: `linear-gradient(135deg, ${insight.categoryColor}1f 0%, ${insight.categoryColor}0a 100%)`,
                        }}
                      >
                        <div
                          className="absolute inset-0 opacity-[0.06] pointer-events-none"
                          style={{
                            backgroundImage: `linear-gradient(${insight.categoryColor} 1px, transparent 1px), linear-gradient(90deg, ${insight.categoryColor} 1px, transparent 1px)`,
                            backgroundSize: '32px 32px',
                          }}
                          aria-hidden="true"
                        />
                        <TrendingUp
                          className="w-8 h-8 relative z-10"
                          style={{ color: insight.categoryColor }}
                          strokeWidth={1.6}
                        />
                        <span
                          className="ml-auto inline-flex items-center text-[10px] font-semibold tracking-[0.16em] uppercase px-2.5 py-1 rounded-sm relative z-10"
                          style={{
                            backgroundColor: `${insight.categoryColor}1f`,
                            color: insight.categoryColor,
                          }}
                        >
                          {insight.category}
                        </span>
                      </div>

                      {/* Body */}
                      <div className="p-5 flex flex-col flex-1">
                        <h3
                          className="text-lg font-bold text-[#1A1A2E] leading-snug mb-2 line-clamp-2"
                          style={{ fontFamily: PUBLIC_DESIGN.serif }}
                        >
                          {insight.title}
                        </h3>
                        <p className="text-sm text-[#5a5a6a] leading-relaxed mb-4 line-clamp-2 flex-1">
                          {insight.excerpt}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-[#8a8a9a] mb-4">
                          <span>{insight.date}</span>
                          <span className="w-1 h-1 rounded-full bg-[#d0d0d0]" />
                          <span className="inline-flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {insight.readTime}
                          </span>
                        </div>
                        <div className="pt-3 border-t border-[#e5e0d5]/60 flex items-center justify-between">
                          <span className="text-sm font-semibold text-[#0D503C] inline-flex items-center gap-1.5 group-hover:gap-2 transition-all">
                            Baca selengkapnya
                            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </span>
                        </div>
                      </div>
                    </article>
                  </FadeIn>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 border border-dashed border-[#e5e0d5] rounded-sm">
                <p className="text-[#5a5a6a]">
                  Belum ada artikel dalam kategori{' '}
                  <span className="font-semibold text-[#1A1A2E]">{category}</span>.
                </p>
                <button
                  type="button"
                  onClick={() => setCategory('Semua')}
                  className="mt-4 text-sm font-semibold text-[#0D503C] hover:underline"
                >
                  Lihat semua artikel
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ============ Newsletter / Subscribe ============ */}
        <section className="py-20 lg:py-28" aria-labelledby="newsletter-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="relative bg-[#0D503C] rounded-sm overflow-hidden">
                {/* Decorative overlays */}
                <div
                  className="absolute inset-0 opacity-[0.06] pointer-events-none"
                  style={{
                    backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                  }}
                  aria-hidden="true"
                />
                <div
                  className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/[0.05] pointer-events-none"
                  aria-hidden="true"
                />
                <div
                  className="absolute -bottom-32 -left-20 w-72 h-72 rounded-full bg-[#B8860B]/10 pointer-events-none"
                  aria-hidden="true"
                />

                <div className="relative z-10 p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  {/* Left: copy */}
                  <div>
                    <span className="inline-block text-[#B8860B] text-xs font-semibold tracking-[0.22em] uppercase mb-4">
                      Newsletter JAC
                    </span>
                    <h2
                      id="newsletter-heading"
                      className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight"
                      style={{ fontFamily: PUBLIC_DESIGN.serif }}
                    >
                      Dapatkan Insights Terbaru
                    </h2>
                    <p className="text-white/70 leading-relaxed max-w-md">
                      Berlangganan untuk menerima analisis bulanan, sorotan industri, dan perspektif strategis langsung dari para ahli JAC.
                    </p>
                  </div>

                  {/* Right: form / success state */}
                  <div>
                    {!subscribed ? (
                      <form
                        onSubmit={handleSubscribe}
                        className="bg-white/[0.06] backdrop-blur-sm border border-white/15 rounded-sm p-5 sm:p-6"
                      >
                        <label
                          htmlFor="newsletter-email"
                          className="block text-white/80 text-sm font-medium mb-3"
                        >
                          Alamat email Anda
                        </label>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <div className="relative flex-1">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                            <input
                              id="newsletter-email"
                              type="email"
                              required
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="nama@perusahaan.com"
                              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-sm text-white placeholder:text-white/40 text-sm focus:outline-none focus:bg-white/15 focus:border-white/40 transition-colors"
                            />
                          </div>
                          <button
                            type="submit"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#B8860B] text-white text-sm font-semibold rounded-sm hover:bg-[#a3760a] transition-colors whitespace-nowrap"
                          >
                            Berlangganan
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-white/50 text-xs mt-3 leading-relaxed">
                          Kami menghargai privasi Anda. Berhenti berlangganan kapan saja.
                        </p>
                      </form>
                    ) : (
                      <div className="bg-white/[0.06] backdrop-blur-sm border border-white/15 rounded-sm p-8 text-center">
                        <div className="w-14 h-14 rounded-full bg-[#B8860B]/20 flex items-center justify-center mx-auto mb-4">
                          <CheckCircle2 className="w-7 h-7 text-[#B8860B]" />
                        </div>
                        <h3
                          className="text-xl font-bold text-white mb-2"
                          style={{ fontFamily: PUBLIC_DESIGN.serif }}
                        >
                          Terima kasih telah berlangganan!
                        </h3>
                        <p className="text-white/70 text-sm leading-relaxed max-w-sm mx-auto">
                          Insights terbaru dari JAC akan dikirim ke{' '}
                          <span className="font-semibold text-white">{email}</span>.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <CtaBand
        title="Butuh Perspektif Strategis?"
        subtitle="Hubungi tim konsultasi JAC untuk diskusi mendalam tentang tantangan dan peluang bisnis Anda."
      />
      <PublicFooter />
    </div>
  )
}
