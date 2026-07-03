'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useAppStore, type AppView } from '@/store/useAppStore'
import { MODULES, COMPANY } from '@/lib/company-data'
import {
  LayoutDashboard, Package, Briefcase, Building2, Factory, Leaf,
  ChevronLeft, ChevronRight, Crown, Menu, X
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState } from 'react'

const ICON_MAP: Record<string, React.ReactNode> = {
  Package: <Package className="w-5 h-5" />,
  Briefcase: <Briefcase className="w-5 h-5" />,
  Building2: <Building2 className="w-5 h-5" />,
  Factory: <Factory className="w-5 h-5" />,
  Leaf: <Leaf className="w-5 h-5" />,
}

const NAV_ITEMS: { id: AppView; label: string; icon: React.ReactNode; color: string }[] = [
  { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" />, color: '#d4a843' },
  ...MODULES.map(m => ({
    id: m.id as AppView,
    label: m.name,
    icon: ICON_MAP[m.icon] ?? <Package className="w-5 h-5" />,
    color: m.color,
  })),
]

export default function Sidebar() {
  const { currentView, setCurrentView, sidebarOpen, setSidebarOpen } = useAppStore()
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-lg glass"
      >
        {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ x: sidebarOpen ? 0 : -280 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={cn(
          'fixed left-0 top-0 h-full z-50 w-[260px] flex flex-col',
          'bg-[#0d0d14] border-r border-[rgba(212,168,67,0.1)]'
        )}
      >
        {/* Logo */}
        <div className="p-4 border-b border-[rgba(212,168,67,0.1)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#d4a843] flex items-center justify-center font-bold text-[#0a0a0f] text-sm neon-gold-glow">
              JAC
            </div>
            <div>
              <h1 className="text-sm font-bold text-[#d4a843] neon-text-gold">{COMPANY.shortName}</h1>
              <p className="text-[10px] text-muted-foreground">Super App</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive = currentView === item.id
            return (
              <motion.button
                key={item.id}
                onClick={() => {
                  setCurrentView(item.id)
                  if (window.innerWidth < 1024) setSidebarOpen(false)
                }}
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
                className={cn(
                  'w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-left',
                  isActive
                    ? 'text-white'
                    : 'text-muted-foreground hover:text-foreground'
                )}
                style={{
                  backgroundColor: isActive ? `${item.color}20` : 'transparent',
                  borderLeft: isActive ? `3px solid ${item.color}` : '3px solid transparent',
                }}
                whileHover={{ x: 4 }}
              >
                <span style={{ color: isActive ? item.color : 'inherit' }}>{item.icon}</span>
                <span className="text-sm font-medium">{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="ml-auto w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                )}
              </motion.button>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="p-3 border-t border-[rgba(212,168,67,0.1)]">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-8 h-8 rounded-full bg-[#d4a843]/20 flex items-center justify-center">
              <Crown className="w-4 h-4 text-[#d4a843]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium truncate">Wirono</p>
              <p className="text-[10px] text-muted-foreground">Super Admin</p>
            </div>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="hidden lg:flex items-center gap-2 w-full px-3 py-2 text-xs text-muted-foreground hover:text-foreground mt-1 rounded-lg hover:bg-[rgba(212,168,67,0.05)] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Collapse
          </button>
        </div>
      </motion.aside>

      {/* Desktop toggle when collapsed */}
      {!sidebarOpen && (
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => setSidebarOpen(true)}
          className="fixed top-4 left-4 z-50 p-2 rounded-lg glass hover:neon-gold-glow transition-all hidden lg:flex"
        >
          <ChevronRight className="w-5 h-5 text-[#d4a843]" />
        </motion.button>
      )}
    </>
  )
}
