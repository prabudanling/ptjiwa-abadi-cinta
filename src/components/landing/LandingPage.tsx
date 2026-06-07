'use client'

import { motion } from 'framer-motion'
import { useAppStore, type AppView } from '@/store/useAppStore'
import { COMPANY, MODULES, SHAREHOLDERS } from '@/lib/company-data'
import ParticleCanvas from '@/components/shared/ParticleCanvas'
import { NeonButton } from '@/components/shared/NeonButton'
import { GlassCard } from '@/components/shared/GlassCard'
import {
  Package, Briefcase, Building2, Factory, Leaf, ShieldCheck,
  ArrowRight, Globe, Users, Award, TrendingUp, Zap, ChevronDown
} from 'lucide-react'

const moduleIcons: Record<string, React.ReactNode> = {
  Package: <Package className="w-8 h-8" />,
  Briefcase: <Briefcase className="w-8 h-8" />,
  Building2: <Building2 className="w-8 h-8" />,
  Factory: <Factory className="w-8 h-8" />,
  Leaf: <Leaf className="w-8 h-8" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8" />,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function LandingPage() {
  const { setCurrentView } = useAppStore()

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Particle Background */}
      <ParticleCanvas />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern z-0" />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs text-[#d4a843] mb-6"
          >
            <Zap className="w-3 h-3" />
            Akta No. 310 • Jakarta Selatan • 2022
          </motion.div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-[#d4a843] neon-text-gold">PT JIWA</span>
            <br />
            <span className="text-[#4ade80] neon-text-green">ABDI CINTA</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Ekosistem digital penuh — Perdagangan, Jasa, Konstruksi, Industri Sawit, 
            Pertanian & Perizinan. Satu platform, semua kegiatan usaha.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center"
          >
            <NeonButton size="lg" onClick={() => setCurrentView('dashboard')}>
              Masuk Dashboard <ArrowRight className="w-4 h-4" />
            </NeonButton>
            <NeonButton variant="outline" size="lg" onClick={() => {
              document.getElementById('modules')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              Jelajahi Modul
            </NeonButton>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8"
        >
          <ChevronDown className="w-6 h-6 text-[#d4a843]/50" />
        </motion.div>
      </section>

      {/* Company Stats Bar */}
      <section className="relative z-10 py-8 border-y border-[rgba(212,168,67,0.1)]">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Modal Dasar', value: 'Rp 20M', icon: <TrendingUp className="w-5 h-5" /> },
            { label: 'Bidang Usaha', value: '5 Bidang', icon: <Globe className="w-5 h-5" /> },
            { label: 'KBLI Terdaftar', value: '17+ Kode', icon: <Award className="w-5 h-5" /> },
            { label: 'Pemegang Saham', value: '4 Orang', icon: <Users className="w-5 h-5" /> },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 text-center md:text-left"
            >
              <div className="p-2 rounded-lg bg-[#d4a843]/10 text-[#d4a843]">{stat.icon}</div>
              <div>
                <p className="text-lg font-bold">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="text-[#d4a843]">6 Modul</span> Usaha Terintegrasi
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Dari hulu ke hilir — setiap aspek kegiatan usaha PT Jiwa Abdi Cinta 
              dalam satu ekosistem digital yang saling terhubung.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {MODULES.map((mod) => (
              <motion.div key={mod.id} variants={itemVariants}>
                <GlassCard
                  className="h-full group"
                  onClick={() => setCurrentView(mod.id as AppView)}
                  glow={mod.id === 'perdagangan' ? 'gold' : 'none'}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${mod.color}15`, color: mod.color }}
                    >
                      {moduleIcons[mod.icon]}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg" style={{ color: mod.color }}>{mod.name}</h3>
                      <p className="text-xs text-muted-foreground mb-2">{mod.subtitle}</p>
                      <p className="text-sm text-foreground/80">{mod.description}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="px-2 py-0.5 rounded bg-[rgba(212,168,67,0.1)] text-[#d4a843]">
                      {mod.kblis.length} KBLI
                    </span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Shareholders Section */}
      <section className="relative z-10 py-20 px-4 border-t border-[rgba(212,168,67,0.1)]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-2">
              Struktur <span className="text-[#d4a843]">Perusahaan</span>
            </h2>
            <p className="text-muted-foreground">Berdasarkan Akta Pendirian No. 310</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SHAREHOLDERS.map((sh, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard className="text-center h-full">
                  <div className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center text-xl font-bold"
                    style={{ backgroundColor: `${sh.position === 'Direktur Utama' ? '#d4a843' : sh.position === 'Komisaris' ? '#4ade80' : '#60a5fa'}20`, color: sh.position === 'Direktur Utama' ? '#d4a843' : sh.position === 'Komisaris' ? '#4ade80' : '#60a5fa' }}
                  >
                    {sh.name.charAt(0)}
                  </div>
                  <h3 className="font-semibold text-sm">{sh.name}</h3>
                  <p className="text-xs text-[#d4a843]">{sh.position}</p>
                  <p className="text-xs text-muted-foreground mt-1">{sh.shares} saham</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-[rgba(212,168,67,0.1)] mt-auto">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-xs text-muted-foreground">
            © 2024 {COMPANY.name}. Akta No. {COMPANY.aktaNumber} • Notaris: {COMPANY.notaris}
          </p>
          <p className="text-[10px] text-muted-foreground/50 mt-1">
            Berkedudukan di {COMPANY.location} • Jangka waktu tidak terbatas
          </p>
        </div>
      </footer>
    </div>
  )
}
