import { create } from 'zustand'

export type AppView =
  // Public pages
  | 'landing'
  | 'about'
  | 'layanan'
  | 'proyek'
  | 'insights'
  | 'insight-detail'
  | 'careers'
  | 'contact'
  | 'keberlanjutan'
  // App (behind login)
  | 'dashboard'
  | 'perdagangan'
  | 'jasa'
  | 'konstruksi'
  | 'industri'
  | 'pertanian'

export type UserRole =
  | 'super_admin'
  | 'admin_perdagangan'
  | 'admin_jasa'
  | 'admin_konstruksi'
  | 'admin_industri'
  | 'admin_pertanian'
  | 'mitra'
  | 'pelanggan'

export const PUBLIC_VIEWS: AppView[] = ['landing', 'about', 'layanan', 'proyek', 'insights', 'insight-detail', 'careers', 'contact', 'keberlanjutan']

interface AppState {
  currentView: AppView
  setCurrentView: (view: AppView) => void
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
  currentRole: UserRole
  setCurrentRole: (role: UserRole) => void
  searchQuery: string
  setSearchQuery: (query: string) => void
  currentInsightId: string | null
  setCurrentInsightId: (id: string | null) => void
  openInsight: (id: string) => void
}

export const useAppStore = create<AppState>((set) => ({
  currentView: 'landing',
  setCurrentView: (view) => set({ currentView: view }),
  sidebarOpen: true,
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  currentRole: 'super_admin',
  setCurrentRole: (role) => set({ currentRole: role }),
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
  currentInsightId: null,
  setCurrentInsightId: (id) => set({ currentInsightId: id }),
  openInsight: (id) => set({ currentInsightId: id, currentView: 'insight-detail' }),
}))
