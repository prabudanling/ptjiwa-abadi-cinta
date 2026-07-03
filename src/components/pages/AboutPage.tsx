'use client'

import { PublicNav, PublicFooter, CtaBand, PageHero, FadeIn, SectionLabel, SectionHeading, PUBLIC_DESIGN } from '@/components/public/PublicChrome'
import {
  COMPANY, VISION, MISSION, COMPANY_VALUES, ORG_STRUCTURE,
  LEADERSHIP, TIMELINE, LEGAL_FOUNDATION, DIFFERENTIATORS,
} from '@/lib/company-data'
import {
  ShieldCheck, Handshake, Heart, Users, Leaf, Lightbulb,
  Network, Scale, Building2, Award,
} from 'lucide-react'

/* ============================================================
   Icon mappings — string name (from data) -> lucide component
   ============================================================ */
const valueIcons: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  Handshake: <Handshake className="w-6 h-6" />,
  Heart: <Heart className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Leaf: <Leaf className="w-6 h-6" />,
  Lightbulb: <Lightbulb className="w-6 h-6" />,
}

const diffIcons: Record<string, React.ReactNode> = {
  Network: <Network className="w-5 h-5" />,
  Leaf: <Leaf className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  Scale: <Scale className="w-5 h-5" />,
}

/* ============================================================
   Department color map (Kepala Divisi accent colors)
   ============================================================ */
const DEPT_COLORS: Record<string, string> = {
  perdagangan: '#C9A961',
  jasa: '#1E3A5F',
  konstruksi: '#C75B39',
  industri: '#8FB89B',
  pertanian: '#6A9A7F',
}

/* ============================================================
   Helpers
   ============================================================ */
type OrgMember = {
  name: string
  role: string
  dept?: string
}

/** Extract up to two initials from a name, stripping common titles. */
function getInitials(name: string): string {
  const cleaned = name
    .replace(/,/g, ' ')
    .replace(/\b(SE|S\.H\.|M\.Pd|Dr\.|Ir\.|M\.M|Ph\.D)\b/g, ' ')
  const parts = cleaned.split(/\s+/).filter(p => p.length > 1 && /^[A-Za-z]/.test(p))
  return parts.slice(0, 2).map(p => p[0]?.toUpperCase() ?? '').join('')
}

/** Tier label header for the org chart. */
function OrgTierLabel({ index, name, description, center }: {
  index: number
  name: string
  description: string
  center?: boolean
}) {
  return (
    <div className={`mb-5 ${center ? 'text-center' : ''}`}>
      <div className={`flex items-center gap-2 ${center ? 'justify-center' : ''}`}>
        <span className="text-[#C9A961] text-[10px] font-bold tracking-[0.2em] uppercase">
          Tingkat {index}
        </span>
        <span className="w-8 h-px bg-[#E0D8C8]" aria-hidden="true" />
      </div>
      <h3
        className="text-lg sm:text-xl font-bold text-[#1A1430] mt-1.5"
        style={{ fontFamily: PUBLIC_DESIGN.serif }}
      >
        {name}
      </h3>
      <p className="text-xs sm:text-sm text-[#6B5E80] mt-1 max-w-xl mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  )
}

/** A single member card. Optionally tinted with the dept color (Kepala Divisi). */
function OrgMemberCard({ member, withDept }: { member: OrgMember; withDept?: boolean }) {
  const deptColor = withDept && member.dept ? DEPT_COLORS[member.dept] : null
  return (
    <div className="bg-white border border-[#E0D8C8] rounded-sm p-5 relative overflow-hidden h-full hover:shadow-md hover:border-[#3A2D5C]/30 transition-all">
      {deptColor && (
        <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: deptColor }} aria-hidden="true" />
      )}
      <div className={`flex items-start gap-3 ${deptColor ? 'mt-1.5' : ''}`}>
        {deptColor ? (
          <div
            className="w-9 h-9 rounded-sm flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${deptColor}18`, color: deptColor }}
            aria-hidden="true"
          >
            <Building2 className="w-4 h-4" />
          </div>
        ) : (
          <div className="w-9 h-9 rounded-sm bg-[#3A2D5C]/10 text-[#3A2D5C] flex items-center justify-center flex-shrink-0" aria-hidden="true">
            <Building2 className="w-4 h-4" />
          </div>
        )}
        <div className="min-w-0">
          <div className="text-sm font-bold text-[#1A1430] leading-tight">{member.name}</div>
          <div className="text-xs text-[#6B5E80] mt-1 leading-snug">{member.role}</div>
        </div>
      </div>
    </div>
  )
}

/** A row of member cards with horizontal + vertical connectors (org chart style). */
function OrgRow({ members, withDept, layout }: {
  members: OrgMember[]
  withDept?: boolean
  layout: 'three' | 'five'
}) {
  const gridCls = layout === 'three'
    ? 'grid-cols-1 lg:grid-cols-3'
    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-5'
  const barCls = layout === 'three'
    ? 'lg:left-[16.6667%] lg:right-[16.6667%]'
    : 'lg:left-[10%] lg:right-[10%]'

  return (
    <div className="relative">
      {/* Horizontal connector bar (visible only on lg for a clean org-chart look) */}
      <div
        className={`hidden lg:block absolute top-0 h-px bg-[#3A2D5C]/30 ${barCls}`}
        aria-hidden="true"
      />
      <div className={`grid gap-4 ${gridCls}`}>
        {members.map((m, i) => (
          <div key={i} className="flex flex-col items-center">
            {/* Vertical drop above each card */}
            <div className="w-px h-7 bg-[#3A2D5C]/30" aria-hidden="true" />
            <div className="w-full">
              <OrgMemberCard member={m} withDept={withDept} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/** Vertical connector between org chart tiers. */
function VConnector() {
  return <div className="w-px h-10 bg-[#3A2D5C]/30 mx-auto" aria-hidden="true" />
}

/* ============================================================
   AboutPage
   ============================================================ */
export default function AboutPage() {
  const legalItems: { label: string; value: string }[] = [
    { label: 'Nomor Akta', value: LEGAL_FOUNDATION.aktaNumber },
    { label: 'Tanggal Pendirian', value: LEGAL_FOUNDATION.aktaDate },
    { label: 'Notaris Pembuat Akta', value: LEGAL_FOUNDATION.notaris },
    { label: 'Lokasi Pendirian', value: LEGAL_FOUNDATION.location },
    { label: 'Modal Dasar', value: LEGAL_FOUNDATION.modalDasar },
    { label: 'Modal Disetor', value: LEGAL_FOUNDATION.modalDisetor },
    { label: 'Jumlah Saham', value: LEGAL_FOUNDATION.jumlahSaham },
    { label: 'Nilai Nominal', value: LEGAL_FOUNDATION.nilaiNominal },
    { label: 'Saham Ditempatkan', value: LEGAL_FOUNDATION.sahamDitempatkan },
    { label: 'Jumlah KBLI', value: LEGAL_FOUNDATION.kbliCount },
    { label: 'Bidang Usaha', value: LEGAL_FOUNDATION.bidangUsaha },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F4ED] landing-page">
      <PublicNav />
      <main className="flex-1">
        <PageHero
          label="Tentang Kami"
          title="Tentang PT Jiwa Abdi Cinta"
          subtitle={`Ekosistem bisnis terintegrasi dari hulu ke hilir — dibangun di atas landasan hukum yang kuat (Akta No. ${COMPANY.aktaNumber}, ${COMPANY.aktaDate}) dan komitmen pada keberlanjutan, integritas, serta kepedulian.`}
        />

        {/* ====================================================
            Section 1: Visi & Misi
            ==================================================== */}
        <section className="py-20 lg:py-28" aria-labelledby="visi-misi-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="mb-12 max-w-2xl">
                <SectionLabel>Visi &amp; Misi</SectionLabel>
                <h2
                  id="visi-misi-heading"
                  className="text-3xl sm:text-4xl font-bold text-[#1A1430] mt-3"
                  style={{ fontFamily: PUBLIC_DESIGN.serif }}
                >
                  Arah Strategis &amp; Tujuan Perusahaan
                </h2>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <FadeIn>
                <div className="bg-white border border-[#E0D8C8] rounded-sm p-8 lg:p-10 h-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#3A2D5C]" aria-hidden="true" />
                  <div className="text-[#C9A961] text-xs font-semibold tracking-[0.2em] uppercase mb-5">
                    Visi
                  </div>
                  <p
                    className="text-xl sm:text-2xl text-[#1A1430] leading-relaxed"
                    style={{ fontFamily: PUBLIC_DESIGN.serif }}
                  >
                    &ldquo;{VISION}&rdquo;
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <div className="bg-white border border-[#E0D8C8] rounded-sm p-8 lg:p-10 h-full">
                  <div className="text-[#C9A961] text-xs font-semibold tracking-[0.2em] uppercase mb-6">
                    Misi
                  </div>
                  <ol className="space-y-4">
                    {MISSION.map((m, i) => (
                      <li key={i} className="flex gap-4">
                        <span
                          className="flex-shrink-0 w-7 h-7 rounded-sm bg-[#3A2D5C] text-white text-xs font-bold flex items-center justify-center"
                          style={{ fontFamily: PUBLIC_DESIGN.serif }}
                        >
                          {i + 1}
                        </span>
                        <span className="text-[#3A2D5C] leading-relaxed text-sm sm:text-base pt-0.5">
                          {m}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ====================================================
            Section 2: Nilai-Nilai Perusahaan
            ==================================================== */}
        <section className="py-20 lg:py-28 bg-white border-y border-[#E0D8C8]" aria-labelledby="nilai-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="mb-12 max-w-2xl">
                <SectionLabel>Nilai-Nilai Perusahaan</SectionLabel>
                <h2
                  id="nilai-heading"
                  className="text-3xl sm:text-4xl font-bold text-[#1A1430] mt-3"
                  style={{ fontFamily: PUBLIC_DESIGN.serif }}
                >
                  Enam Pilar Karakter JAC
                </h2>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {COMPANY_VALUES.map((v, i) => (
                <FadeIn key={v.id} delay={(i % 3) * 0.05}>
                  <div className="bg-[#F8F4ED] border border-[#E0D8C8] rounded-sm p-7 h-full hover:shadow-md hover:border-[#3A2D5C]/30 transition-all">
                    <div
                      className="w-12 h-12 rounded-sm flex items-center justify-center mb-5"
                      style={{ backgroundColor: `${v.color}18`, color: v.color }}
                      aria-hidden="true"
                    >
                      {valueIcons[v.icon]}
                    </div>
                    <h3
                      className="text-lg font-bold text-[#1A1430] mb-2"
                      style={{ fontFamily: PUBLIC_DESIGN.serif }}
                    >
                      {v.name}
                    </h3>
                    <p className="text-sm text-[#6B5E80] leading-relaxed">{v.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================
            Section 3: Struktur Organisasi (CENTERPIECE)
            ==================================================== */}
        <section className="py-20 lg:py-28" aria-labelledby="struktur-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <SectionHeading
                label="Struktur Organisasi"
                title="Tata Kelola & Hierarki Organisasi"
                subtitle="Empat tingkat struktur tata kelola — dari Rapat Umum Pemegang Saham sebagai organ tertinggi hingga Kepala Divisi yang memimpin operasional lima bidang usaha."
                align="center"
              />
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="max-w-5xl mx-auto">
                {/* --- Tier 1: RUPS (special green card) --- */}
                <OrgTierLabel
                  index={1}
                  name="Rapat Umum Pemegang Saham"
                  description="Organ tertinggi yang menetapkan arah strategis perusahaan."
                  center
                />
                <div className="bg-[#3A2D5C] rounded-sm shadow-md overflow-hidden">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
                    {ORG_STRUCTURE.tiers[0].members.map((m, i) => (
                      <div key={i} className="p-5 text-center">
                        <div className="text-white font-semibold text-sm leading-tight">{m.name}</div>
                        <div className="text-[#C9A961] text-xs font-medium mt-1.5 tracking-wide">{m.role}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <VConnector />

                {/* --- Tier 2: Dewan Komisaris (single centered card) --- */}
                <OrgTierLabel
                  index={2}
                  name="Dewan Komisaris"
                  description="Pengawas tata kelola dan arah kebijakan perusahaan."
                  center
                />
                <div className="flex justify-center">
                  <div className="bg-white border border-[#E0D8C8] rounded-sm p-6 max-w-md w-full text-center relative shadow-sm">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-[#3A2D5C]" aria-hidden="true" />
                    <div
                      className="text-base font-bold text-[#1A1430] mt-1"
                      style={{ fontFamily: PUBLIC_DESIGN.serif }}
                    >
                      {ORG_STRUCTURE.tiers[1].members[0].name}
                    </div>
                    <div className="text-[#3A2D5C] text-sm font-medium mt-1">
                      {ORG_STRUCTURE.tiers[1].members[0].role}
                    </div>
                  </div>
                </div>

                <VConnector />

                {/* --- Tier 3: Direksi (3 cards) --- */}
                <OrgTierLabel
                  index={3}
                  name="Direksi"
                  description="Pelaksana tata kelola dan pengurus harian perusahaan."
                  center
                />
                <OrgRow members={ORG_STRUCTURE.tiers[2].members} layout="three" />

                <VConnector />

                {/* --- Tier 4: Kepala Divisi (5 cards with dept colors) --- */}
                <OrgTierLabel
                  index={4}
                  name="Kepala Divisi"
                  description="Pemimpin unit operasional lima bidang usaha."
                  center
                />
                <OrgRow members={ORG_STRUCTURE.tiers[3].members} layout="five" withDept />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ====================================================
            Section 4: Tim Kepemimpinan
            ==================================================== */}
        <section className="py-20 lg:py-28 bg-white border-y border-[#E0D8C8]" aria-labelledby="leadership-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="mb-12 max-w-2xl">
                <SectionLabel>Tim Kepemimpinan</SectionLabel>
                <h2
                  id="leadership-heading"
                  className="text-3xl sm:text-4xl font-bold text-[#1A1430] mt-3"
                  style={{ fontFamily: PUBLIC_DESIGN.serif }}
                >
                  Pemimpin di Setiap Tingkat
                </h2>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {LEADERSHIP.map((leader, i) => (
                <FadeIn key={leader.name} delay={(i % 4) * 0.05}>
                  <div className="bg-[#F8F4ED] border border-[#E0D8C8] rounded-sm p-6 h-full flex flex-col hover:shadow-md hover:border-[#3A2D5C]/30 transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="w-12 h-12 rounded-sm bg-[#3A2D5C] text-white font-bold flex items-center justify-center text-sm"
                        style={{ fontFamily: PUBLIC_DESIGN.serif }}
                        aria-hidden="true"
                      >
                        {getInitials(leader.name)}
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#C9A961]/10 text-[#C9A961] text-[10px] font-bold tracking-wider rounded-sm uppercase">
                        <Award className="w-3 h-3" aria-hidden="true" />
                        Saham {leader.shares}
                      </div>
                    </div>
                    <h3
                      className="text-base font-bold text-[#1A1430] mb-1 leading-tight"
                      style={{ fontFamily: PUBLIC_DESIGN.serif }}
                    >
                      {leader.name}
                    </h3>
                    <div className="text-[#3A2D5C] text-sm font-medium mb-3">{leader.position}</div>
                    <p className="text-sm text-[#6B5E80] leading-relaxed mb-4 flex-1">{leader.bio}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {leader.focus.map(f => (
                        <span
                          key={f}
                          className="px-2.5 py-1 bg-white border border-[#E0D8C8] text-[10px] text-[#6B5E80] rounded-sm"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================
            Section 5: Sejarah & Tonggak (Timeline)
            ==================================================== */}
        <section className="py-20 lg:py-28" aria-labelledby="sejarah-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="mb-12 max-w-2xl">
                <SectionLabel>Sejarah &amp; Tonggak</SectionLabel>
                <h2
                  id="sejarah-heading"
                  className="text-3xl sm:text-4xl font-bold text-[#1A1430] mt-3"
                  style={{ fontFamily: PUBLIC_DESIGN.serif }}
                >
                  Perjalanan PT Jiwa Abdi Cinta
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="relative max-w-4xl mx-auto">
                {/* Vertical line */}
                <div
                  className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-[#3A2D5C]/20 -translate-x-1/2"
                  aria-hidden="true"
                />
                <div className="space-y-6 sm:space-y-0">
                  {TIMELINE.map((item, i) => {
                    const isLeft = i % 2 === 0
                    return (
                      <div key={i} className="relative sm:grid sm:grid-cols-2">
                        {/* Dot */}
                        <div
                          className="absolute left-4 sm:left-1/2 top-7 w-3.5 h-3.5 rounded-full bg-[#C9A961] ring-4 ring-[#F8F4ED] -translate-x-1/2 z-10"
                          aria-hidden="true"
                        />
                        {/* Card */}
                        <div
                          className={`pl-12 sm:pl-0 ${
                            isLeft
                              ? 'sm:col-start-1 sm:pr-10 sm:text-right'
                              : 'sm:col-start-2 sm:pl-10'
                          }`}
                        >
                          <div className="bg-white border border-[#E0D8C8] rounded-sm p-6 mb-6 sm:mb-12 hover:shadow-md transition-shadow">
                            <div
                              className={`flex items-center gap-3 mb-3 ${
                                isLeft ? 'sm:justify-end' : ''
                              }`}
                            >
                              <span className="text-[#8B7FA3] text-[10px] uppercase tracking-wider">
                                Tonggak {i + 1}
                              </span>
                              <span className="px-3 py-1 bg-[#3A2D5C] text-white text-xs font-bold tracking-wider rounded-sm">
                                {item.year}
                              </span>
                            </div>
                            <h3
                              className="text-base font-bold text-[#1A1430] mb-2"
                              style={{ fontFamily: PUBLIC_DESIGN.serif }}
                            >
                              {item.title}
                            </h3>
                            <p className="text-sm text-[#6B5E80] leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ====================================================
            Section 6: Landasan Hukum (dark green)
            ==================================================== */}
        <section className="py-20 lg:py-28 bg-[#3A2D5C]" aria-labelledby="legal-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="mb-12 text-center">
                <span className="inline-block text-[#C9A961] text-xs font-semibold tracking-[0.2em] uppercase">
                  Landasan Hukum
                </span>
                <h2
                  id="legal-heading"
                  className="text-3xl sm:text-4xl font-bold text-white mt-3"
                  style={{ fontFamily: PUBLIC_DESIGN.serif }}
                >
                  Dasar Hukum &amp; Identitas Perseroan
                </h2>
                <p className="text-white/60 max-w-2xl mx-auto mt-4 leading-relaxed">
                  Perseroan berbadan hukum dengan Akta Notaris No. {LEGAL_FOUNDATION.aktaNumber} tanggal{' '}
                  {LEGAL_FOUNDATION.aktaDate}, didirikan di {LEGAL_FOUNDATION.location}.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-sm overflow-hidden">
                {legalItems.map((item, i) => (
                  <div key={i} className="bg-[#2A1F4A] p-6 hover:bg-[#3A2D5C] transition-colors">
                    <div className="text-[#C9A961] text-xs uppercase tracking-[0.15em] mb-2 font-semibold">
                      {item.label}
                    </div>
                    <div
                      className="text-white text-lg font-semibold"
                      style={{ fontFamily: PUBLIC_DESIGN.serif }}
                    >
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ====================================================
            Section 7: Mengapa JAC (Differentiators)
            ==================================================== */}
        <section className="py-20 lg:py-28" aria-labelledby="differentiators-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="mb-12 max-w-2xl">
                <SectionLabel>Mengapa JAC</SectionLabel>
                <h2
                  id="differentiators-heading"
                  className="text-3xl sm:text-4xl font-bold text-[#1A1430] mt-3"
                  style={{ fontFamily: PUBLIC_DESIGN.serif }}
                >
                  Empat Pembeda Utama
                </h2>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {DIFFERENTIATORS.map((d, i) => (
                <FadeIn key={d.id} delay={(i % 4) * 0.05}>
                  <div className="bg-white border border-[#E0D8C8] rounded-sm p-7 h-full relative hover:shadow-md hover:border-[#3A2D5C]/30 transition-all">
                    <div
                      className="text-[#C9A961] text-xs font-bold tracking-wider mb-4"
                      style={{ fontFamily: PUBLIC_DESIGN.serif }}
                    >
                      0{i + 1}
                    </div>
                    <div
                      className="w-11 h-11 rounded-sm bg-[#3A2D5C] text-white flex items-center justify-center mb-4"
                      aria-hidden="true"
                    >
                      {diffIcons[d.icon]}
                    </div>
                    <h3
                      className="text-base font-bold text-[#1A1430] mb-2"
                      style={{ fontFamily: PUBLIC_DESIGN.serif }}
                    >
                      {d.title}
                    </h3>
                    <p className="text-sm text-[#6B5E80] leading-relaxed">{d.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </main>
      <CtaBand
        title="Bergabunglah dengan Ekosistem Kami"
        subtitle="Jadilah mitra, supplier, kontraktor, atau klien dalam ekosistem bisnis terintegrasi PT Jiwa Abdi Cinta — tumbuh bersama lintas lima bidang usaha."
      />
      <PublicFooter />
    </div>
  )
}
