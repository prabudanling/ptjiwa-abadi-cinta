'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { GlassCard, ModuleHeader, StatCard } from '@/components/shared/GlassCard'
import { NeonButton } from '@/components/shared/NeonButton'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Building2, HardHat, Clock, CheckCircle, Users, FileText, MapPin,
  TrendingUp, Plus, Eye, Gavel, Calendar, AlertTriangle, BarChart3
} from 'lucide-react'

const TENDERS = [
  { id: 'TDR-001', title: 'Konstruksi Gedung Perkantoran 8 Lantai', kbli: '41012', budget: 'Rp 45M', closingDate: '28 Feb 2024', bids: 7, status: 'open', location: 'Jakarta Selatan' },
  { id: 'TDR-002', title: 'Konstruksi Jembatan Sungai Mahakam', kbli: '42102', budget: 'Rp 120M', closingDate: '15 Mar 2024', bids: 4, status: 'open', location: 'Kalimantan Timur' },
  { id: 'TDR-003', title: 'Rehabilitasi Jaringan Irigasi', kbli: '42201', budget: 'Rp 28M', closingDate: '10 Feb 2024', bids: 12, status: 'evaluation', location: 'Jawa Barat' },
  { id: 'TDR-004', title: 'Konstruksi Fly Over Cakung', kbli: '42102', budget: 'Rp 85M', closingDate: '5 Feb 2024', bids: 5, status: 'awarded', location: 'Jakarta Timur' },
  { id: 'TDR-005', title: 'Pengolahan Air Bersih PDAM', kbli: '42202', budget: 'Rp 15M', closingDate: '20 Jan 2024', bids: 8, status: 'awarded', location: 'Bogor' },
]

const PROJECTS = [
  { id: 'PRJ-001', name: 'Gedung Perkantoran Sudirman', progress: 72, status: 'in_progress', startDate: '2023-06-01', endDate: '2024-08-30', contractor: 'PT Konstruksi Mandiri' },
  { id: 'PRJ-002', name: 'Jembatan Sungai Mahakam', progress: 15, status: 'in_progress', startDate: '2024-01-15', endDate: '2025-12-30', contractor: 'PT Sipil Utama' },
  { id: 'PRJ-003', name: 'Fly Over Cakung', progress: 100, status: 'completed', startDate: '2022-03-01', endDate: '2024-01-20', contractor: 'PT Bumi Konstruksi' },
  { id: 'PRJ-004', name: 'Irigasi Jawa Barat', progress: 45, status: 'in_progress', startDate: '2023-09-01', endDate: '2024-12-30', contractor: 'PT Air Bersih Nusantara' },
]

const CONTRACTORS = [
  { name: 'PT Konstruksi Mandiri', sbu: 'SBU-KS-2024-001', qualification: 'Besar', projects: 23, rating: 4.8 },
  { name: 'PT Sipil Utama', sbu: 'SBU-KS-2024-002', qualification: 'Besar', projects: 18, rating: 4.7 },
  { name: 'PT Bumi Konstruksi', sbu: 'SBU-KS-2024-003', qualification: 'Menengah', projects: 15, rating: 4.5 },
  { name: 'PT Air Bersih Nusantara', sbu: 'SBU-KS-2024-004', qualification: 'Menengah', projects: 12, rating: 4.6 },
]

export default function KonstruksiModule() {
  const [activeTab, setActiveTab] = useState('tenders')

  return (
    <div className="space-y-6">
      <ModuleHeader title="Modul Konstruksi" subtitle="Tender proyek, kontraktor, monitoring — KBLI 41019, 42102, 41012, 42201, 42209, 42202" color="#f97316" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Proyek Aktif" value="12" change="+2" icon={<Building2 className="w-5 h-5 text-[#f97316]" />} color="#f97316" />
        <StatCard title="Tender Terbuka" value="5" change="+1" icon={<Gavel className="w-5 h-5 text-[#5A8A6A]" />} color="#5A8A6A" />
        <StatCard title="Kontraktor" value="34" change="+4" icon={<HardHat className="w-5 h-5 text-[#8FB89B]" />} color="#8FB89B" />
        <StatCard title="Nilai Proyek" value="Rp 293M" change="+Rp 45M" icon={<TrendingUp className="w-5 h-5 text-[#60a5fa]" />} color="#60a5fa" />
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="glass">
          <TabsTrigger value="tenders">Tender</TabsTrigger>
          <TabsTrigger value="projects">Proyek</TabsTrigger>
          <TabsTrigger value="contractors">Kontraktor</TabsTrigger>
          <TabsTrigger value="reports">Laporan</TabsTrigger>
        </TabsList>

        <TabsContent value="tenders" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold">Tender Proyek</h3>
            <NeonButton size="sm"><Plus className="w-4 h-4" /> Buat Tender</NeonButton>
          </div>

          <div className="space-y-3">
            {TENDERS.map((tender, i) => (
              <motion.div
                key={tender.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <GlassCard>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#f97316]/10 flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-5 h-5 text-[#f97316]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{tender.title}</h4>
                        <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {tender.location}</span>
                          <Badge variant="outline" className="text-[10px] border-[#f97316]/30 text-[#f97316]">{tender.kbli}</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="text-right">
                        <p className="font-bold text-[#f97316]">{tender.budget}</p>
                        <p className="text-xs text-muted-foreground">{tender.bids} penawaran</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">Closing</p>
                        <p className="text-xs">{tender.closingDate}</p>
                      </div>
                      <Badge className={`text-[10px] border-0 ${
                        tender.status === 'open' ? 'bg-[#8FB89B]/20 text-[#8FB89B]' :
                        tender.status === 'evaluation' ? 'bg-[#5A8A6A]/20 text-[#5A8A6A]' :
                        'bg-[#60a5fa]/20 text-[#60a5fa]'
                      }`}>
                        {tender.status}
                      </Badge>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="projects" className="space-y-4">
          <h3 className="text-sm font-semibold">Monitoring Proyek</h3>
          <div className="space-y-4">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#f97316]/10 flex items-center justify-center">
                        {project.status === 'completed' ? <CheckCircle className="w-5 h-5 text-[#8FB89B]" /> : <Clock className="w-5 h-5 text-[#f97316]" />}
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{project.name}</h4>
                        <p className="text-xs text-muted-foreground">{project.contractor}</p>
                      </div>
                    </div>
                    <Badge className={`text-[10px] border-0 ${
                      project.status === 'completed' ? 'bg-[#8FB89B]/20 text-[#8FB89B]' : 'bg-[#f97316]/20 text-[#f97316]'
                    }`}>
                      {project.status === 'completed' ? 'Selesai' : 'Berjalan'}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                    <span>{project.startDate} → {project.endDate}</span>
                    <span className="font-bold text-[#f97316]">{project.progress}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[rgba(249,115,22,0.1)]">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${project.progress}%` }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: project.progress === 100 ? '#8FB89B' : '#f97316' }}
                    />
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="contractors" className="space-y-4">
          <h3 className="text-sm font-semibold">Profil Kontraktor & Tenaga Ahli</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CONTRACTORS.map((c, i) => (
              <GlassCard key={i}>
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-14 h-14 rounded-full bg-[#f97316]/10 flex items-center justify-center text-[#f97316] font-bold text-lg">
                    {c.name.charAt(3)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{c.name}</h4>
                    <p className="text-xs text-muted-foreground">Kualifikasi: {c.qualification}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="flex items-center gap-1"><FileText className="w-3 h-3" /> SBU: {c.sbu}</span>
                  <span>{c.projects} proyek</span>
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <span>Rating:</span>
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span key={idx} className={`w-3 h-3 rounded-full ${idx < Math.floor(c.rating) ? 'bg-[#5A8A6A]' : 'bg-[rgba(212,168,67,0.2)]'}`} />
                  ))}
                  <span className="ml-1">{c.rating}</span>
                </div>
              </GlassCard>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <h3 className="text-sm font-semibold">Laporan Harian Proyek</h3>
          <div className="space-y-3">
            {[
              { project: 'Gedung Perkantoran Sudirman', date: '15 Jan 2024', activity: 'Pengecoran lantai 6, pemasangan besi kolom lantai 7', workers: 85, issues: 'Tidak ada' },
              { project: 'Jembatan Sungai Mahakam', date: '15 Jan 2024', activity: 'Pemasangan pile cap pier 3, pengeboran pile pier 4', workers: 42, issues: 'Keterlambatan material baja dari supplier' },
              { project: 'Irigasi Jawa Barat', date: '15 Jan 2024', activity: 'Pengerjaan saluran primer segmen 5, instalasi pintu air', workers: 35, issues: 'Cuaca hujan - penyesuaian jadwal' },
            ].map((report, i) => (
              <GlassCard key={i}>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#f97316]/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-[#f97316]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{report.project}</h4>
                    <p className="text-xs text-muted-foreground mb-2">{report.date}</p>
                    <p className="text-sm">{report.activity}</p>
                    <div className="flex items-center gap-4 mt-2 text-xs">
                      <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {report.workers} pekerja</span>
                      {report.issues !== 'Tidak ada' && (
                        <span className="flex items-center gap-1 text-yellow-400"><AlertTriangle className="w-3 h-3" /> {report.issues}</span>
                      )}
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
