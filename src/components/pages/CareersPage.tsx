'use client'

import { useState } from 'react'
import { useAppStore } from '@/store/useAppStore'
import { PublicNav, PublicFooter, CtaBand, PageHero, FadeIn, SectionLabel, PUBLIC_DESIGN } from '@/components/public/PublicChrome'
import { CAREERS, CAREER_BENEFITS } from '@/lib/company-data'
import {
  TrendingUp, GraduationCap, HeartPulse, Users, Award, Clock,
  MapPin, Briefcase, ArrowRight, CheckCircle2, Send,
} from 'lucide-react'

/* Icon mapping for CAREER_BENEFITS (icon string -> lucide component) */
const benefitIcons: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp className="w-5 h-5" />,
  GraduationCap: <GraduationCap className="w-5 h-5" />,
  HeartPulse: <HeartPulse className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  Award: <Award className="w-5 h-5" />,
  Clock: <Clock className="w-5 h-5" />,
}

const OPEN_APPLICATION_TIPS = [
  'Sertakan CV terbaru dengan riwayat pendidikan dan pengalaman kerja.',
  'Tuliskan surat lamaran singkat tentang minat serta area keahlianmu.',
  'Lampirkan portofolio, sertifikasi profesional, atau referensi pendukung.',
]

export default function CareersPage() {
  const [dept, setDept] = useState('Semua')
  const { setCurrentView } = useAppStore()

  const departments = Array.from(new Set(CAREERS.map((c) => c.department)))
  const filterOptions = ['Semua', ...departments]
  const filtered = dept === 'Semua' ? CAREERS : CAREERS.filter((c) => c.department === dept)

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF7] landing-page">
      <PublicNav />
      <main className="flex-1">
        <PageHero
          label="Karir"
          title="Bergabung dengan Tim Kami"
          subtitle="Wujudkan potensi terbaikmu dalam ekosistem bisnis terintegrasi JAC — tempat talenta bertumbuh bersama lima divisi bisnis strategis yang membentuk masa depan ekonomi Indonesia."
        />

        {/* ============ Culture / Mengapa JAC ============ */}
        <section className="py-20 lg:py-28" aria-labelledby="culture-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <FadeIn>
                <SectionLabel>Mengapa JAC</SectionLabel>
                <h2
                  id="culture-heading"
                  className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] mt-3 mb-5"
                  style={{ fontFamily: PUBLIC_DESIGN.serif }}
                >
                  Budaya yang Mendorong Pertumbuhan
                </h2>
                <p className="text-[#5a5a6a] leading-relaxed mb-4">
                  Di PT JIWA ABDI CINTA, manusia adalah aset terpenting. Kami membangun budaya kerja yang mengutamakan integritas, kolaborasi lintas fungsi, dan keberanian mengambil inisiatif. Dengan lima divisi bisnis yang saling terhubung — Perdagangan, Jasa, Konstruksi, Industri Sawit, dan Pertanian — setiap karyawan memiliki jalur pertumbuhan yang beragam dan peluang rotasi lintas divisi yang nyata.
                </p>
                <p className="text-[#5a5a6a] leading-relaxed mb-8">
                  Kami percaya pada pembelajaran sepanjang hayat dan memberikan ruang bagi setiap individu untuk berkembang sesuai potensi terbaiknya, sambil berkontribusi pada visi besar perusahaan.
                </p>

                {/* Stats trio */}
                <div className="grid grid-cols-3 gap-4 sm:gap-6 border-t border-[#e5e0d5] pt-6">
                  <div>
                    <div className="text-3xl sm:text-4xl font-bold text-[#0D503C]" style={{ fontFamily: PUBLIC_DESIGN.serif }}>340+</div>
                    <div className="text-[10px] sm:text-xs text-[#8a8a9a] mt-1 uppercase tracking-wider">Mitra Bisnis</div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-bold text-[#0D503C]" style={{ fontFamily: PUBLIC_DESIGN.serif }}>5</div>
                    <div className="text-[10px] sm:text-xs text-[#8a8a9a] mt-1 uppercase tracking-wider">Divisi Bisnis</div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-bold text-[#0D503C]" style={{ fontFamily: PUBLIC_DESIGN.serif }}>17+</div>
                    <div className="text-[10px] sm:text-xs text-[#8a8a9a] mt-1 uppercase tracking-wider">KBLI Aktif</div>
                  </div>
                </div>
              </FadeIn>

              {/* Decorative geometric composition */}
              <FadeIn delay={0.15}>
                <div className="relative aspect-square w-full max-w-md mx-auto">
                  {/* Faint grid background */}
                  <div
                    className="absolute inset-0 opacity-[0.05] rounded-sm"
                    style={{
                      backgroundImage:
                        'linear-gradient(#0D503C 1px, transparent 1px), linear-gradient(90deg, #0D503C 1px, transparent 1px)',
                      backgroundSize: '36px 36px',
                    }}
                    aria-hidden="true"
                  />

                  {/* Concentric circles */}
                  <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                    <div className="absolute w-[92%] h-[92%] rounded-full border border-[#0D503C]/12" />
                    <div className="absolute w-[70%] h-[70%] rounded-full border-2 border-[#0D503C]/20" />
                    <div className="absolute w-[48%] h-[48%] rounded-full border border-[#B8860B]/30" />
                    <div className="absolute w-[28%] h-[28%] rounded-full bg-[#0D503C]/[0.06]" />
                  </div>

                  {/* Rotated squares */}
                  <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                    <div
                      className="absolute w-[78%] h-[78%] border border-[#B8860B]/15"
                      style={{ transform: 'rotate(45deg)' }}
                    />
                    <div
                      className="absolute w-[54%] h-[54%] bg-[#B8860B]/[0.05] rounded-sm"
                      style={{ transform: 'rotate(15deg)' }}
                    />
                    <div
                      className="absolute w-[34%] h-[34%] border border-[#0D503C]/25 rounded-sm"
                      style={{ transform: 'rotate(-12deg)' }}
                    />
                  </div>

                  {/* Center medallion with briefcase icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-[18%] aspect-square rounded-full bg-white shadow-md border border-[#e5e0d5] flex items-center justify-center">
                      <Briefcase className="w-1/2 h-1/2 text-[#0D503C]" />
                    </div>
                  </div>

                  {/* Corner accents */}
                  <div className="absolute top-[8%] right-[10%] w-3 h-3 rounded-full bg-[#B8860B]/40" aria-hidden="true" />
                  <div className="absolute bottom-[12%] left-[8%] w-2 h-2 rounded-full bg-[#0D503C]/40" aria-hidden="true" />
                  <div
                    className="absolute top-[18%] left-[14%] w-4 h-4 border border-[#0D503C]/30 rounded-sm"
                    style={{ transform: 'rotate(30deg)' }}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute bottom-[20%] right-[16%] w-3 h-3 bg-[#B8860B]/20 rounded-sm"
                    style={{ transform: 'rotate(20deg)' }}
                    aria-hidden="true"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ============ Benefits / Kesejahteraan ============ */}
        <section className="py-20 lg:py-28 bg-white border-y border-[#e5e0d5]" aria-labelledby="benefits-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="max-w-2xl mb-12 lg:mb-14">
                <SectionLabel>Kesejahteraan</SectionLabel>
                <h2
                  id="benefits-heading"
                  className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] mt-3 mb-4"
                  style={{ fontFamily: PUBLIC_DESIGN.serif }}
                >
                  Tunjangan &amp; Manfaat
                </h2>
                <p className="text-[#5a5a6a] leading-relaxed">
                  Kami berkomitmen memberikan paket kompensasi dan manfaat yang kompetitif untuk mendukung kesejahteraan karyawan dan keluarga, serta ruang untuk bertumbuh secara profesional maupun personal.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CAREER_BENEFITS.map((b, i) => (
                <FadeIn key={b.title} delay={i * 0.06}>
                  <div className="h-full p-6 bg-[#FAFAF7] rounded-sm border border-[#e5e0d5] hover:border-[#0D503C]/40 hover:shadow-md transition-all duration-300">
                    <div className="w-10 h-10 rounded-sm bg-[#0D503C]/8 flex items-center justify-center text-[#0D503C] mb-4">
                      {benefitIcons[b.icon] ?? <Award className="w-5 h-5" />}
                    </div>
                    <h3 className="text-base font-bold text-[#1A1A2E] mb-2">{b.title}</h3>
                    <p className="text-sm text-[#5a5a6a] leading-relaxed">{b.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Open Positions ============ */}
        <section className="py-20 lg:py-28" aria-labelledby="positions-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
                <div className="max-w-2xl">
                  <SectionLabel>Posisi Tersedia</SectionLabel>
                  <h2
                    id="positions-heading"
                    className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] mt-3 mb-4"
                    style={{ fontFamily: PUBLIC_DESIGN.serif }}
                  >
                    Lowongan Terbuka
                  </h2>
                  <p className="text-[#5a5a6a] leading-relaxed">
                    Jelajahi peluang karir di seluruh divisi JAC. Pilih departemen untuk menyaring posisi yang paling sesuai dengan keahlian dan aspirasimu.
                  </p>
                </div>
                <div className="text-sm text-[#8a8a9a] flex-shrink-0">
                  <span className="text-2xl font-bold text-[#0D503C]" style={{ fontFamily: PUBLIC_DESIGN.serif }}>
                    {filtered.length}
                  </span>
                  <span className="ml-2">posisi tersedia</span>
                </div>
              </div>
            </FadeIn>

            {/* Department filter */}
            <FadeIn delay={0.1}>
              <div
                className="flex flex-wrap gap-2 mb-10"
                role="tablist"
                aria-label="Filter posisi berdasarkan departemen"
              >
                {filterOptions.map((opt) => {
                  const active = dept === opt
                  return (
                    <button
                      key={opt}
                      role="tab"
                      aria-selected={active}
                      onClick={() => setDept(opt)}
                      className={
                        'px-4 py-2 text-sm font-medium rounded-sm transition-all duration-200 ' +
                        (active
                          ? 'bg-[#0D503C] text-white shadow-sm'
                          : 'bg-white border border-[#e5e0d5] text-[#5a5a6a] hover:border-[#0D503C]/40 hover:text-[#0D503C]')
                      }
                    >
                      {opt}
                    </button>
                  )
                })}
              </div>
            </FadeIn>

            {/* Job cards */}
            <div className="space-y-4">
              {filtered.map((job, i) => (
                <FadeIn key={job.id} delay={i * 0.04}>
                  <article className="group p-6 bg-white rounded-sm border border-[#e5e0d5] hover:border-[#0D503C] hover:shadow-md transition-all duration-300">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="inline-flex items-center text-[10px] font-semibold tracking-wider uppercase px-2 py-1 rounded-sm bg-[#0D503C]/8 text-[#0D503C]">
                        {job.department}
                      </span>
                      <span className="text-[10px] font-medium tracking-wider uppercase text-[#8a8a9a]">
                        {job.level}
                      </span>
                    </div>
                    <h3
                      className="text-xl sm:text-2xl font-bold text-[#1A1A2E] mb-2 group-hover:text-[#0D503C] transition-colors"
                      style={{ fontFamily: PUBLIC_DESIGN.serif }}
                    >
                      {job.title}
                    </h3>
                    <p className="text-sm text-[#5a5a6a] leading-relaxed max-w-3xl">{job.summary}</p>

                    <div className="mt-5 pt-5 border-t border-[#e5e0d5] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-4 text-xs text-[#5a5a6a]">
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-[#0D503C]/60" />
                          {job.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Briefcase className="w-3.5 h-3.5 text-[#0D503C]/60" />
                          {job.type}
                        </span>
                      </div>
                      <button
                        onClick={() => setCurrentView('contact')}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0D503C] hover:gap-2.5 transition-all duration-300 self-start sm:self-auto"
                      >
                        Lamar / Selengkapnya
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </article>
                </FadeIn>
              ))}

              {filtered.length === 0 && (
                <div className="p-12 text-center border border-dashed border-[#e5e0d5] rounded-sm">
                  <p className="text-[#5a5a6a]">Belum ada posisi terbuka di departemen ini saat ini.</p>
                  <button
                    onClick={() => setDept('Semua')}
                    className="mt-3 text-sm font-medium text-[#0D503C] hover:underline"
                  >
                    Lihat semua posisi
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ============ Open Application CTA ============ */}
        <section
          className="py-20 lg:py-28 bg-[#0D503C] relative overflow-hidden"
          aria-labelledby="open-app-heading"
        >
          {/* Decorative grid + radial overlays */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
            aria-hidden="true"
          />
          <div
            className="absolute top-0 right-0 w-[480px] h-[480px] bg-white/[0.04] rounded-full -translate-y-1/3 translate-x-1/3"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-[#B8860B]/[0.10] rounded-full translate-y-1/3 -translate-x-1/4"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div>
                  <span className="inline-block text-[#B8860B] text-xs font-semibold tracking-[0.2em] uppercase">
                    Lamaran Terbuka
                  </span>
                  <h2
                    id="open-app-heading"
                    className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4"
                    style={{ fontFamily: PUBLIC_DESIGN.serif }}
                  >
                    Tidak menemukan posisi yang cocok?
                  </h2>
                  <p className="text-white/70 leading-relaxed mb-6 max-w-xl">
                    Kami selalu terbuka untuk talenta luar biasa. Kirimkan lamaran terbuka beserta CV dan area keahlianmu — tim HR JAC akan menghubungi jika ada kesempatan yang sesuai dengan profilmu.
                  </p>
                  <button
                    onClick={() => setCurrentView('contact')}
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#0D503C] text-sm font-medium rounded-sm hover:bg-[#F5F0E8] transition-colors"
                  >
                    Kirim Lamaran Terbuka
                    <Send className="w-4 h-4" />
                  </button>
                </div>

                <div className="lg:pl-6">
                  <ul className="space-y-3">
                    {OPEN_APPLICATION_TIPS.map((tip) => (
                      <li key={tip} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#B8860B] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-white/85 leading-relaxed">{tip}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-white/50 mt-6 pl-8">
                    Tim HR kami akan meninjau lamaran dalam 5–10 hari kerja dan menghubungi kandidat yang sesuai.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <CtaBand
        title="Temukan Posisi Impianmu"
        subtitle="Bergabunglah dengan masa depan bisnis Indonesia — kirim lamaranmu dan jadilah bagian dari perjalanan JAC."
      />
      <PublicFooter />
    </div>
  )
}
