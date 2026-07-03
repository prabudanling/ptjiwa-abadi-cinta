'use client'

import { useState } from 'react'
import { PublicNav, PublicFooter, PageHero, FadeIn, SectionLabel, PUBLIC_DESIGN } from '@/components/public/PublicChrome'
import { CONTACT_DEPARTMENTS, OFFICE_INFO, COMPANY } from '@/lib/company-data'
import { MapPin, Mail, Phone, Clock, Send, CheckCircle2, ArrowRight, MessageSquare } from 'lucide-react'

/* Shared input styling — McKinsey/BCG professional light theme */
const INPUT_CLASS =
  'w-full px-3.5 py-2.5 bg-white border border-[#D4E0D4] rounded-sm text-sm text-[#1A3D2A] focus:outline-none focus:border-[#2D5A3D] transition-colors placeholder:text-[#8B9A8B]/70'
const LABEL_CLASS = 'block text-xs font-medium text-[#5A7A6A] mb-1.5'

type FormState = {
  name: string
  email: string
  company: string
  department: string
  subject: string
  message: string
}

const INITIAL_FORM: FormState = {
  name: '',
  email: '',
  company: '',
  department: '',
  subject: '',
  message: '',
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState<FormState>(INITIAL_FORM)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // HTML `required` handles empty fields; this is the JS guard per spec.
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return
    setSubmitted(true)
  }

  const resetForm = () => {
    setForm(INITIAL_FORM)
    setSubmitted(false)
  }

  const update =
    (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((s) => ({ ...s, [k]: e.target.value }))

  const selectedDept = CONTACT_DEPARTMENTS.find((d) => d.id === form.department)

  const officeCards = [
    { icon: <MapPin className="w-5 h-5" />, label: 'Alamat Kantor', value: OFFICE_INFO.address },
    { icon: <Mail className="w-5 h-5" />, label: 'Email Umum', value: OFFICE_INFO.email, href: `mailto:${OFFICE_INFO.email}` },
    { icon: <Phone className="w-5 h-5" />, label: 'Telepon', value: OFFICE_INFO.phone, href: `tel:${OFFICE_INFO.phone.replace(/\s/g, '')}` },
    { icon: <Clock className="w-5 h-5" />, label: 'Jam Operasional', value: OFFICE_INFO.hours },
  ]

  const quickInfo = [
    {
      icon: <Clock className="w-5 h-5" />,
      title: 'Jam Operasional',
      body: OFFICE_INFO.hours,
      sub: 'Sabtu, Minggu & hari libur nasional tutup.',
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: 'Respon Cepat',
      body: 'Dalam 1×24 jam',
      sub: 'Setiap pertanyaan ditindaklanjuti oleh divisi terkait pada hari kerja.',
    },
    {
      icon: <ArrowRight className="w-5 h-5" />,
      title: 'Lima Bidang Layanan',
      body: 'Perdagangan · Jasa · Konstruksi · Industri Sawit · Pertanian',
      sub: 'Satu ekosistem bisnis terintegrasi dari hulu ke hilir.',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF6] landing-page">
      <PublicNav />
      <main className="flex-1">
        <PageHero
          label="Kontak"
          title="Hubungi Kami"
          subtitle={`Tim ${COMPANY.shortName} siap membantu kebutuhan bisnis Anda di lima bidang usaha — perdagangan, jasa, konstruksi, industri sawit, dan pertanian. Sampaikan pertanyaan, proposal kemitraan, atau permintaan konsultasi Anda.`}
        />

        {/* =====================================================
            Main contact section — 2-column grid (form + info)
            ===================================================== */}
        <section className="py-20 lg:py-28" aria-labelledby="contact-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="mb-12 lg:mb-16 max-w-3xl">
                <SectionLabel>Hubungi Tim Kami</SectionLabel>
                <h2
                  id="contact-heading"
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A3D2A] mt-3 leading-tight"
                  style={{ fontFamily: PUBLIC_DESIGN.serif }}
                >
                  Sampaikan kebutuhan bisnis Anda
                </h2>
                <p className="text-[#5A7A6A] mt-4 leading-relaxed">
                  Kirim pesan melalui formulir di bawah ini atau hubungi langsung divisi yang relevan. Kami berkomitmen merespons setiap pertanyaan dalam 1×24 jam pada hari kerja.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
              {/* LEFT — Contact form card */}
              <FadeIn>
                <div className="bg-white border border-[#D4E0D4] rounded-sm p-6 sm:p-8 shadow-sm">
                  {submitted ? (
                    <div className="text-center py-6 sm:py-10">
                      <div className="w-16 h-16 rounded-full bg-[#2D5A3D]/10 flex items-center justify-center mx-auto mb-5">
                        <CheckCircle2 className="w-9 h-9 text-[#2D5A3D]" />
                      </div>
                      <h3
                        className="text-2xl font-bold text-[#1A3D2A] mb-3"
                        style={{ fontFamily: PUBLIC_DESIGN.serif }}
                      >
                        Pesan Anda terkirim
                      </h3>
                      <p className="text-[#5A7A6A] max-w-md mx-auto mb-2">
                        Terima kasih,{' '}
                        <span className="font-semibold text-[#1A3D2A]">{form.name || 'Bapak/Ibu'}</span>{' '}
                        telah menghubungi {COMPANY.name}.
                      </p>
                      <p className="text-sm text-[#5A7A6A] max-w-md mx-auto mb-6">
                        Tim {selectedDept?.name ?? 'Korporat & Umum'} kami akan merespons melalui{' '}
                        <span className="text-[#1A3D2A] font-medium">{form.email}</span> dalam 1×24 jam.
                      </p>
                      <button
                        type="button"
                        onClick={resetForm}
                        className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#D4E0D4] text-[#1A3D2A] text-sm font-medium rounded-sm hover:border-[#2D5A3D] hover:text-[#2D5A3D] transition-colors"
                      >
                        Kirim pesan lain
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="mb-6">
                        <SectionLabel>Formulir Pesan</SectionLabel>
                        <h3
                          className="text-xl font-bold text-[#1A3D2A] mt-2"
                          style={{ fontFamily: PUBLIC_DESIGN.serif }}
                        >
                          Mari berbicara
                        </h3>
                      </div>
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="name" className={LABEL_CLASS}>
                              Nama Lengkap <span className="text-[#D99B7A]">*</span>
                            </label>
                            <input
                              id="name"
                              name="name"
                              type="text"
                              required
                              autoComplete="name"
                              value={form.name}
                              onChange={update('name')}
                              className={INPUT_CLASS}
                              placeholder="Nama Anda"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className={LABEL_CLASS}>
                              Email <span className="text-[#D99B7A]">*</span>
                            </label>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              required
                              autoComplete="email"
                              value={form.email}
                              onChange={update('email')}
                              className={INPUT_CLASS}
                              placeholder="email@perusahaan.com"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="company" className={LABEL_CLASS}>
                              Perusahaan
                            </label>
                            <input
                              id="company"
                              name="company"
                              type="text"
                              autoComplete="organization"
                              value={form.company}
                              onChange={update('company')}
                              className={INPUT_CLASS}
                              placeholder="Nama perusahaan"
                            />
                          </div>
                          <div>
                            <label htmlFor="department" className={LABEL_CLASS}>
                              Departemen
                            </label>
                            <select
                              id="department"
                              name="department"
                              value={form.department}
                              onChange={update('department')}
                              className={INPUT_CLASS}
                            >
                              <option value="">Pilih departemen terkait…</option>
                              {CONTACT_DEPARTMENTS.map((d) => (
                                <option key={d.id} value={d.id}>
                                  {d.name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="subject" className={LABEL_CLASS}>
                            Subjek
                          </label>
                          <input
                            id="subject"
                            name="subject"
                            type="text"
                            value={form.subject}
                            onChange={update('subject')}
                            className={INPUT_CLASS}
                            placeholder="Ringkasan singkat pertanyaan Anda"
                          />
                        </div>

                        <div>
                          <label htmlFor="message" className={LABEL_CLASS}>
                            Pesan <span className="text-[#D99B7A]">*</span>
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            value={form.message}
                            onChange={update('message')}
                            className={`${INPUT_CLASS} resize-none`}
                            placeholder="Ceritakan kebutuhan bisnis, pertanyaan, atau proposal kemitraan Anda…"
                          />
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-1">
                          <p className="text-xs text-[#8B9A8B]">
                            <span className="text-[#D99B7A]">*</span> Wajib diisi · Kami menjaga kerahasiaan data Anda.
                          </p>
                          <button
                            type="submit"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2D5A3D] text-white text-sm font-medium rounded-sm hover:bg-[#1A3D2A] transition-colors shadow-sm"
                          >
                            Kirim Pesan
                            <Send className="w-4 h-4" />
                          </button>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </FadeIn>

              {/* RIGHT — Office info cards + per-department contact list */}
              <FadeIn delay={0.15}>
                <div className="bg-white border border-[#D4E0D4] rounded-sm overflow-hidden mb-8 shadow-sm">
                  {officeCards.map((c, i) => (
                    <div
                      key={c.label}
                      className={`flex items-start gap-4 p-5 ${
                        i < officeCards.length - 1 ? 'border-b border-[#D4E0D4]' : ''
                      }`}
                    >
                      <div className="w-10 h-10 rounded-sm bg-[#2D5A3D]/10 flex items-center justify-center text-[#2D5A3D] flex-shrink-0">
                        {c.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-[#8B9A8B] uppercase tracking-wider mb-1">{c.label}</p>
                        {c.href ? (
                          <a
                            href={c.href}
                            className="text-sm text-[#1A3D2A] hover:text-[#2D5A3D] transition-colors break-all"
                          >
                            {c.value}
                          </a>
                        ) : (
                          <p className="text-sm text-[#1A3D2A]">{c.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <SectionLabel>Kontak per Departemen</SectionLabel>
                  <h3
                    className="text-lg font-bold text-[#1A3D2A] mt-2 mb-4"
                    style={{ fontFamily: PUBLIC_DESIGN.serif }}
                  >
                    Terhubung langsung dengan divisi terkait
                  </h3>
                  <div className="space-y-2">
                    {CONTACT_DEPARTMENTS.map((d) => (
                      <div
                        key={d.id}
                        className="p-4 bg-white rounded-sm border border-[#D4E0D4] hover:border-[#2D5A3D]/40 hover:shadow-sm transition-all"
                      >
                        <p className="text-sm font-semibold text-[#1A3D2A]">{d.name}</p>
                        <p className="text-xs text-[#5A7A6A] mt-1 leading-relaxed">{d.description}</p>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2.5 text-xs text-[#8B9A8B]">
                          <a
                            href={`mailto:${d.email}`}
                            className="flex items-center gap-1.5 hover:text-[#2D5A3D] transition-colors"
                          >
                            <Mail className="w-3 h-3" />
                            {d.email}
                          </a>
                          <a
                            href={`tel:${d.phone.replace(/\s/g, '')}`}
                            className="flex items-center gap-1.5 hover:text-[#2D5A3D] transition-colors"
                          >
                            <Phone className="w-3 h-3" />
                            {d.phone}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* =====================================================
            Map / Location band — full-width grid-pattern panel
            ===================================================== */}
        <section
          className="relative py-20 lg:py-28 bg-[#8FB89B]/[0.05] overflow-hidden"
          aria-labelledby="map-heading"
        >
          {/* Subtle grid pattern to evoke a map */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(143,184,155,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(143,184,155,0.18) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
            aria-hidden="true"
          />
          {/* Decorative "road" lines */}
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute top-1/4 left-0 right-0 h-px bg-[#8FB89B]/35" />
            <div className="absolute top-3/4 left-0 right-0 h-px bg-[#8FB89B]/35" />
            <div className="absolute top-0 bottom-0 left-1/3 w-px bg-[#8FB89B]/35" />
            <div className="absolute top-0 bottom-0 right-1/4 w-px bg-[#8FB89B]/35" />
          </div>
          {/* Soft radial accent centered on the marker */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#A8D5BA]/25 rounded-full blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <div className="w-20 h-20 rounded-full bg-[#2D5A3D] flex items-center justify-center shadow-xl shadow-[#2D5A3D]/25 mx-auto mb-7 ring-8 ring-white">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <SectionLabel>Lokasi Kantor</SectionLabel>
              <h2
                id="map-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A3D2A] mt-3 mb-4 max-w-2xl mx-auto leading-tight"
                style={{ fontFamily: PUBLIC_DESIGN.serif }}
              >
                {OFFICE_INFO.address}
              </h2>
              <p className="text-[#5A7A6A] max-w-lg mx-auto mb-7">
                Berlokasi strategis di Jakarta Selatan — mudah diakses untuk pertemuan langsung dengan tim kepemimpinan dan manajer divisi {COMPANY.shortName}.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-[#D4E0D4] text-[#2D5A3D] text-sm font-semibold rounded-sm hover:border-[#2D5A3D] hover:shadow-sm transition-all group"
              >
                Buka di Google Maps
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </FadeIn>
          </div>
        </section>

        {/* =====================================================
            Quick info — 3-card FAQ teaser
            ===================================================== */}
        <section className="py-20 lg:py-28" aria-labelledby="quick-info-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="mb-12 lg:mb-14 text-center">
                <SectionLabel>Informasi Cepat</SectionLabel>
                <h2
                  id="quick-info-heading"
                  className="text-3xl sm:text-4xl font-bold text-[#1A3D2A] mt-3"
                  style={{ fontFamily: PUBLIC_DESIGN.serif }}
                >
                  Yang perlu Anda ketahui
                </h2>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {quickInfo.map((q, i) => (
                <FadeIn key={q.title} delay={i * 0.1}>
                  <div className="h-full p-7 bg-white border border-[#D4E0D4] rounded-sm hover:border-[#2D5A3D]/30 hover:shadow-sm transition-all">
                    <div className="w-11 h-11 rounded-sm bg-[#2D5A3D]/10 flex items-center justify-center text-[#2D5A3D] mb-5">
                      {q.icon}
                    </div>
                    <h3 className="text-base font-semibold text-[#1A3D2A] mb-2">{q.title}</h3>
                    <p className="text-sm text-[#1A3D2A] font-medium mb-1.5 leading-relaxed">{q.body}</p>
                    <p className="text-xs text-[#8B9A8B] leading-relaxed">{q.sub}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </main>
      <PublicFooter />
    </div>
  )
}
