import { create } from 'zustand'

export type AppView = 'landing' | 'dashboard' | 'perdagangan' | 'jasa' | 'konstruksi' | 'industri' | 'pertanian' | 'perizinan'
export type UserRole = 'super_admin' | 'admin_perdagangan' | 'admin_jasa' | 'admin_konstruksi' | 'admin_industri' | 'admin_pertanian' | 'admin_perizinan' | 'mitra' | 'pelanggan' | 'notaris'

interface AppState {
  currentView: AppView
  setCurrentView: (view: AppView) => void
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
  currentRole: UserRole
  setCurrentRole: (role: UserRole) => void
  searchQuery: string
  setSearchQuery: (query: string) => void
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
}))
