import type { Metadata } from 'next'
import AppShell from '@/components/dashboard/AppShell'

export const metadata: Metadata = {
  title: 'Dashboard — PT Jiwa Abdi Cinta Super App',
  description: 'Portal manajemen terpadu enam bidang usaha PT Jiwa Abdi Cinta.',
}

export default function DashboardPage() {
  return <AppShell />
}
