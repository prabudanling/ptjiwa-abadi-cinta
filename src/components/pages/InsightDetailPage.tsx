'use client'

import { PublicNav, PublicFooter, PageHero, FadeIn, PUBLIC_DESIGN } from '@/components/public/PublicChrome'
import { useAppStore } from '@/store/useAppStore'
import { INSIGHT_ARTICLES, PUBLIC_INSIGHTS } from '@/lib/company-data'
import { ArrowLeft, ArrowRight, Clock, Calendar, CheckCircle2, User } from 'lucide-react'

export default function InsightDetailPage() {
  const { currentInsightId, setCurrentView, openInsight } = useAppStore()
  const id = currentInsightId ?? '1'
  const article = INSIGHT_ARTICLES[id] ?? INSIGHT_ARTICLES['1']
  const related = PUBLIC_INSIGHTS.filter(ins => ins.id !== id).slice(0, 3)

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF6] landing-page">
      <PublicNav />
      <main className="flex-1">
        {/* Hero with category color */}
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden" style={{ background: `linear-gradient(160deg, ${PUBLIC_DESIGN.cream} 0%, ${PUBLIC_DESIGN.mint} 100%)` }}>
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden style={{
            backgroundImage: `linear-gradient(#2D5A3D 1px, transparent 1px), linear-gradient(90deg, #2D5A3D 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }} />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => setCurrentView('insights')}
              className="inline-flex items-center gap-1.5 text-[#5A7A6A] hover:text-[#2D5A3D] text-sm font-medium mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Insights
            </button>
            <span className="inline-block text-[10px] font-semibold tracking-[0.15em] uppercase px-2.5 py-1 rounded-sm mb-4" style={{ backgroundColor: `${article.categoryColor}15`, color: article.categoryColor }}>
              {article.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A3D2A] leading-[1.15] mb-5" style={{ fontFamily: PUBLIC_DESIGN.serif }}>
              {article.title}
            </h1>
            <p className="text-lg text-[#5A7A6A] leading-relaxed mb-6">{article.excerpt}</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#8B9A8B]">
              <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-[#5A8A6A]" />{article.author}</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-[#5A8A6A]" />{article.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#5A8A6A]" />{article.readTime} baca</span>
            </div>
          </div>
        </section>

        {/* Article body */}
        <article className="py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="space-y-6">
                {article.body.map((para, i) => (
                  <p key={i} className="text-[#3A4A3A] text-base sm:text-lg leading-[1.8]">{para}</p>
                ))}
              </div>
            </FadeIn>

            {/* Takeaways */}
            <FadeIn delay={0.1}>
              <div className="mt-12 p-6 sm:p-8 bg-[#E8F0E8] rounded-sm border border-[#D4E0D4]">
                <h3 className="font-bold text-[#1A3D2A] text-lg mb-4" style={{ fontFamily: PUBLIC_DESIGN.serif }}>Poin Kunci</h3>
                <ul className="space-y-3">
                  {article.takeaways.map((t, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#5A8A6A] flex-shrink-0 mt-0.5" />
                      <span className="text-[#3A4A3A] text-sm sm:text-base">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Author card */}
            <FadeIn delay={0.15}>
              <div className="mt-10 flex items-center gap-4 p-5 bg-white rounded-sm border border-[#D4E0D4]">
                <div className="w-12 h-12 rounded-full bg-[#2D5A3D] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {article.author.split(' ').map(w => w[0]).slice(0, 2).join('')}
                </div>
                <div>
                  <p className="font-semibold text-[#1A3D2A] text-sm">{article.author}</p>
                  <p className="text-xs text-[#8B9A8B]">{article.authorRole}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </article>

        {/* Related articles */}
        {related.length > 0 && (
          <section className="py-16 bg-[#E8F0E8] border-t border-[#D4E0D4]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1A3D2A] mb-8" style={{ fontFamily: PUBLIC_DESIGN.serif }}>Baca Juga</h2>
              </FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((r, i) => (
                  <FadeIn key={r.id} delay={i * 0.08}>
                    <button onClick={() => { openInsight(r.id); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="group w-full text-left bg-white rounded-sm overflow-hidden border border-[#D4E0D4] hover:shadow-lg transition-all duration-300">
                      <div className="w-full aspect-[16/10] flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${r.categoryColor}, ${r.categoryColor}cc)` }}>
                        <Clock className="w-8 h-8 text-white/80" />
                      </div>
                      <div className="p-5">
                        <span className="inline-block text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-sm mb-2" style={{ backgroundColor: `${r.categoryColor}15`, color: r.categoryColor }}>{r.category}</span>
                        <h3 className="font-bold text-[#1A3D2A] text-base mb-2 group-hover:text-[#2D5A3D] transition-colors" style={{ fontFamily: PUBLIC_DESIGN.serif }}>{r.title}</h3>
                        <p className="text-xs text-[#8B9A8B]">{r.readTime} baca</p>
                      </div>
                    </button>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <PublicFooter />
    </div>
  )
}
