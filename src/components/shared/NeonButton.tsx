'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

interface NeonButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'gold' | 'green' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  className?: string
}

export function NeonButton({ children, onClick, variant = 'gold', size = 'md', disabled, loading, className }: NeonButtonProps) {
  const colors = {
    gold: {
      bg: 'bg-[#d4a843]',
      text: 'text-[#0a0a0f]',
      hover: 'hover:bg-[#e0b853]',
      shadow: 'hover:shadow-[0_0_20px_rgba(212,168,67,0.4)]',
    },
    green: {
      bg: 'bg-[#4ade80]',
      text: 'text-[#0a0a0f]',
      hover: 'hover:bg-[#5aee90]',
      shadow: 'hover:shadow-[0_0_20px_rgba(74,222,128,0.4)]',
    },
    outline: {
      bg: 'bg-transparent',
      text: 'text-[#d4a843]',
      hover: 'hover:bg-[rgba(212,168,67,0.1)]',
      shadow: 'hover:shadow-[0_0_15px_rgba(212,168,67,0.2)]',
    },
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 border',
        colors[variant].bg,
        colors[variant].text,
        colors[variant].hover,
        colors[variant].shadow,
        sizes[size],
        variant === 'outline' && 'border-[#d4a843]/30',
        variant !== 'outline' && 'border-transparent',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      {loading && <Loader2 className="w-4 h-4 animate-spin" />}
      {children}
    </motion.button>
  )
}
