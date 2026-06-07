'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glow?: 'gold' | 'green' | 'none'
  onClick?: () => void
}

export function GlassCard({ children, className, hover = true, glow = 'none', onClick }: GlassCardProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={hover ? { scale: 1.02, y: -2 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={cn(
        'glass rounded-xl p-4',
        glow === 'gold' && 'neon-gold-glow',
        glow === 'green' && 'neon-green-glow',
        hover && 'cursor-pointer transition-all duration-300',
        className
      )}
    >
      {children}
    </motion.div>
  )
}

export function StatCard({ title, value, change, icon, color }: {
  title: string
  value: string
  change?: string
  icon: React.ReactNode
  color: string
}) {
  return (
    <GlassCard className="relative overflow-hidden">
      <div className="absolute top-0 right-0 w-20 h-20 opacity-5" style={{ background: `radial-gradient(circle, ${color}, transparent)` }} />
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider">{title}</p>
          <p className="text-2xl font-bold mt-1" style={{ color }}>{value}</p>
          {change && (
            <p className={`text-xs mt-1 ${change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
              {change} dari bulan lalu
            </p>
          )}
        </div>
        <div className="p-2 rounded-lg" style={{ backgroundColor: `${color}15` }}>
          {icon}
        </div>
      </div>
    </GlassCard>
  )
}

export function ModuleHeader({ title, subtitle, color }: { title: string; subtitle: string; color: string }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-1">
        <div className="h-1 w-8 rounded-full" style={{ backgroundColor: color }} />
        <h2 className="text-2xl font-bold" style={{ color }}>{title}</h2>
      </div>
      <p className="text-muted-foreground text-sm ml-11">{subtitle}</p>
    </div>
  )
}
