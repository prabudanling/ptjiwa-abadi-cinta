'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useAppStore, type AppView } from '@/store/useAppStore'
import Sidebar from '@/components/navigation/Sidebar'
import Dashboard from '@/components/dashboard/Dashboard'
import PerdaganganModule from '@/components/modules/PerdaganganModule'
import JasaModule from '@/components/modules/JasaModule'
import KonstruksiModule from '@/components/modules/KonstruksiModule'
import IndustriModule from '@/components/modules/IndustriModule'
import PertanianModule from '@/components/modules/PertanianModule'
import PerizinanModule from '@/components/modules/PerizinanModule'
import { motion, AnimatePresence } from 'framer-motion'
import { COMPANY } from '@/lib/company-data'
import { Bell, Search, Menu, LogOut } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

const viewComponents: Partial<Record<AppView, React.ComponentType>> = {
  dashboard: Dashboard,
  perdagangan: PerdaganganModule,
  jasa: JasaModule,
  konstruksi: KonstruksiModule,
  industri: IndustriModule,
  pertanian: PertanianModule,
  perizinan: PerizinanModule,
}

export default function AppShell() {
  const { currentView, sidebarOpen, setSidebarOpen, setCurrentView } = useAppStore()
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    // If arriving fresh (store default is 'landing'), show dashboard
    if (currentView === 'landing') setCurrentView('dashboard')
  }, [currentView, setCurrentView])

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024)
    checkDesktop()
    window.addEventListener('resize', checkDesktop)
    return () => window.removeEventListener('resize', checkDesktop)
  }, [])

  const CurrentComponent = viewComponents[currentView] ?? Dashboard

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main
          className={cn(
            'flex-1 transition-all duration-300 flex flex-col',
            isDesktop && sidebarOpen ? 'lg:ml-[260px]' : 'ml-0'
          )}
        >
          {/* Top Navigation Bar */}
          <header className="sticky top-0 z-30 glass-strong border-b border-[rgba(212,168,67,0.1)]">
            <div className="flex items-center justify-between px-4 lg:px-6 py-3">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="lg:hidden p-2 rounded-lg hover:bg-[rgba(212,168,67,0.05)] transition-colors"
                >
                  <Menu className="w-5 h-5" />
                </button>
                <div className="hidden sm:block relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Cari produk, jasa, proyek, izin..."
                    className="pl-10 w-64 lg:w-80 bg-[rgba(212,168,67,0.05)] border-[rgba(212,168,67,0.1)] text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* Company badge */}
                <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(212,168,67,0.05)] border border-[rgba(212,168,67,0.1)]">
                  <div className="w-5 h-5 rounded bg-[#d4a843] flex items-center justify-center text-[8px] font-bold text-[#0a0a0f]">JAC</div>
                  <span className="text-xs text-muted-foreground">{COMPANY.name}</span>
                </div>

                {/* Notifications */}
                <button className="relative p-2 rounded-lg hover:bg-[rgba(212,168,67,0.05)] transition-colors" aria-label="Notifikasi">
                  <Bell className="w-5 h-5 text-muted-foreground" />
                  <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#d4a843] animate-pulse-neon" />
                </button>

                {/* User */}
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#d4a843]/20 flex items-center justify-center text-[#d4a843] text-xs font-bold">
                    W
                  </div>
                  <div className="hidden lg:block">
                    <p className="text-xs font-medium">Wirono</p>
                    <p className="text-[10px] text-muted-foreground">Super Admin</p>
                  </div>
                </div>

                {/* Back to Landing */}
                <Link
                  href="/"
                  className="p-2 rounded-lg hover:bg-[rgba(212,168,67,0.05)] transition-colors"
                  title="Kembali ke halaman utama"
                >
                  <LogOut className="w-4 h-4 text-muted-foreground" />
                </Link>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <div className="p-4 lg:p-6 max-w-[1400px] mx-auto flex-1 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentView}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <CurrentComponent />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer */}
          <footer className="mt-auto py-4 px-4 lg:px-6 border-t border-[rgba(212,168,67,0.05)]">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
              <p>© 2026 {COMPANY.name} — Super App v1.0</p>
              <p>Akta No. {COMPANY.aktaNumber} • Notaris: {COMPANY.notaris} • {COMPANY.location}</p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  )
}
