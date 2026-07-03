'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Reveal } from './motion-primitives'

const serif = { fontFamily: 'Georgia, "Times New Roman", serif' }

export function PageHero({
  eyebrow,
  title,
  description,
  accent = '#B8860B',
}: {
  eyebrow: string
  title: string
  description?: string
  accent?: string
}) {
  return (
    <section className="relative bg-[#FAFAF7] pt-32 lg:pt-40 pb-16 lg:pb-20 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#0D503C 1px, transparent 1px), linear-gradient(90deg, #0D503C 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0D503C]/[0.03] rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-5 border-b pb-1"
          style={{ color: accent, borderColor: `${accent}4D` }}
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A2E] leading-[1.1] max-w-3xl text-balance"
          style={serif}
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg text-[#5a5a6a] max-w-2xl leading-relaxed text-pretty"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  )
}

export function CTABand({
  title = 'Siap Bertransformasi?',
  description = 'Hubungi kami untuk konsultasi strategis bisnis Anda — gratis dan tanpa komitmen.',
  primaryLabel = 'Kontak Kami',
  primaryHref = '/kontak',
  secondaryLabel = 'Jelajahi Layanan',
  secondaryHref = '/layanan',
}: {
  title?: string
  description?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}) {
  return (
    <section className="bg-[#0D503C] py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance" style={serif}>
            {title}
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8 text-lg text-pretty">{description}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={primaryHref}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#0D503C] text-sm font-medium rounded-sm hover:bg-[#F5F0E8] transition-colors"
            >
              {primaryLabel}
            </Link>
            <Link
              href={secondaryHref}
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white text-sm font-medium rounded-sm hover:bg-white/10 transition-colors"
            >
              {secondaryLabel}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
