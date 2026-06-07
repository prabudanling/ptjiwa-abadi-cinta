'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { GlassCard, ModuleHeader, StatCard } from '@/components/shared/GlassCard'
import { NeonButton } from '@/components/shared/NeonButton'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  ShieldCheck, FileText, Clock, CheckCircle, AlertTriangle, Award,
  Plus, Eye, Download, Upload, Search, User, Stamp, CreditCard,
  CircleDot, ArrowRight
} from 'lucide-react'
import { Input } from '@/components/ui/input'

const PERMIT_TYPES = [
  { id: 1, name: 'Izin Usaha Perdagangan', category: 'Perdagangan', kbli: '46100, 46599, 47911, 46202', fee: 5000000, processingDays: 14, requirements: ['Akta Pendirian', 'NIB/OSS', 'NPWP Badan', 'KTP Direktur', 'Sertifikat Standar'] },
  { id: 2, name: 'Izin Usaha Jasa Konsultasi', category: 'Jasa', kbli: '70209, 71102', fee: 3000000, processingDays: 10, requirements: ['Akta Pendirian', 'NIB/OSS', 'Sertifikat Kompetensi', 'NPWP Badan'] },
  { id: 3, name: 'Izin Usaha Jasa MICE', category: 'Jasa', kbli: '82301', fee: 4000000, processingDays: 10, requirements: ['Akta Pendirian', 'NIB/OSS', 'Sertifikat Pengadaan', 'NPWP Badan'] },
  { id: 4, name: 'Sertifikat Badan Usaha (SBU) Konstruksi', category: 'Konstruksi', kbli: '41019, 42102, 41012', fee: 7500000, processingDays: 21, requirements: ['Akta Pendirian', 'NIB/OSS', 'NPWP Badan', 'Sertifikat Keahlian Teknis', 'Pengalaman Kerja'] },
  { id: 5, name: 'Izin Usaha Industri Sawit', category: 'Industri', kbli: '10433, 10434, 10435, 10437', fee: 10000000, processingDays: 30, requirements: ['Akta Pendirian', 'NIB/OSS', 'AMDAL', 'Izin Lokasi', 'Sertifikat Halal', 'NPWP Badan'] },
  { id: 6, name: 'Izin Usaha Perkebunan Kelapa Sawit', category: 'Pertanian', kbli: '01262', fee: 8000000, processingDays: 21, requirements: ['Akta Pendirian', 'NIB/OSS', 'HGU/Sertifikat Tanah', 'AMDAL', 'Rencana Kerja', 'NPWP Badan'] },
  { id: 7, name: 'Sertifikasi RSPO', category: 'Pertanian', kbli: '01262', fee: 15000000, processingDays: 45, requirements: ['Akta Pendirian', 'HGU', 'Dokumen AMDAL', 'PETA Lahan', 'Rencana Pengelolaan'] },
  { id: 8, name: 'Sertifikasi ISPO', category: 'Pertanian', kbli: '01262', fee: 12000000, processingDays: 30, requirements: ['Akta Pendirian', 'HGU', 'Dokumen AMDAL', 'Rencana Pengelolaan'] },
]

const PERMIT_REQUESTS = [
  { id: 'PRM-001', applicant: 'PT Maju Jaya Abadi', permitType: 'Izin Usaha Perdagangan', status: 'approved', submittedDate: '2024-01-05', fee: 5000000, verifiedBy: 'Bagas Raffy Raditya, S.H.' },
  { id: 'PRM-002', applicant: 'CV Bumi Konstruksi', permitType: 'SBU Konstruksi', status: 'under_review', submittedDate: '2024-01-10', fee: 7500000, verifiedBy: null },
  { id: 'PRM-003', applicant: 'PT Sawit Nusantara', permitType: 'Izin Usaha Industri Sawit', status: 'submitted', submittedDate: '2024-01-14', fee: 10000000, verifiedBy: null },
  { id: 'PRM-004', applicant: 'PT Palm Green', permitType: 'Sertifikasi RSPO', status: 'under_review', submittedDate: '2024-01-08', fee: 15000000, verifiedBy: null },
  { id: 'PRM-005', applicant: 'UD Karya Jasa', permitType: 'Izin Usaha Jasa Konsultasi', status: 'issued', submittedDate: '2023-12-20', fee: 3000000, verifiedBy: 'Bagas Raffy Raditya, S.H.' },
  { id: 'PRM-006', applicant: 'PT Agro Lestari', permitType: 'Izin Usaha Perkebunan', status: 'rejected', submittedDate: '2024-01-02', fee: 8000000, verifiedBy: 'Bagas Raffy Raditya, S.H.' },
]

const statusConfig: Record<string, { color: string; icon: React.ReactNode }> = {
  submitted: { color: '#8a8a9a', icon: <Upload className="w-3 h-3" /> },
  under_review: { color: '#d4a843', icon: <Clock className="w-3 h-3" /> },
  approved: { color: '#4ade80', icon: <CheckCircle className="w-3 h-3" /> },
  rejected: { color: '#ef4444', icon: <AlertTriangle className="w-3 h-3" /> },
  issued: { color: '#22d3ee', icon: <Award className="w-3 h-3" /> },
}

export default function PerizinanModule() {
  const [activeTab, setActiveTab] = useState('apply')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPermits = PERMIT_TYPES.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const filteredRequests = PERMIT_REQUESTS.filter(r =>
    r.applicant.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.permitType.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <ModuleHeader title="Modul Perizinan & Sertifikasi" subtitle="Pengajuan izin usaha di 5 bidang, sertifikasi digital — untuk pihak ketiga" color="#a78bfa" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Permohonan Masuk" value="47" change="+12" icon={<FileText className="w-5 h-5 text-[#a78bfa]" />} color="#a78bfa" />
        <StatCard title="Dalam Review" value="15" change="+3" icon={<Clock className="w-5 h-5 text-[#d4a843]" />} color="#d4a843" />
        <StatCard title="Diterbitkan" value="198" change="+28" icon={<CheckCircle className="w-5 h-5 text-[#4ade80]" />} color="#4ade80" />
        <StatCard title="Ditolak" value="8" change="+2" icon={<AlertTriangle className="w-5 h-5 text-[#ef4444]" />} color="#ef4444" />
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="glass">
          <TabsTrigger value="apply">Ajukan Izin</TabsTrigger>
          <TabsTrigger value="tracking">Tracking</TabsTrigger>
          <TabsTrigger value="verification">Verifikasi Notaris</TabsTrigger>
          <TabsTrigger value="certificates">Sertifikat</TabsTrigger>
        </TabsList>

        <TabsContent value="apply" className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Cari jenis izin atau sertifikasi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-[#12121a] border-[rgba(167,139,250,0.15)]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredPermits.map((permit, i) => (
              <motion.div
                key={permit.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <GlassCard className="h-full group">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#a78bfa]/10 flex items-center justify-center">
                        <ShieldCheck className="w-5 h-5 text-[#a78bfa]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm group-hover:text-[#a78bfa] transition-colors">{permit.name}</h4>
                        <Badge variant="outline" className="text-[10px] border-[#a78bfa]/30 text-[#a78bfa] mt-0.5">{permit.category}</Badge>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground mb-2">KBLI: {permit.kbli}</p>

                  <div className="space-y-2 text-xs mb-3">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-3 h-3" /> Proses: {permit.processingDays} hari kerja
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <CreditCard className="w-3 h-3" /> Biaya: Rp {(permit.fee / 1_000_000).toFixed(0)} Juta
                    </div>
                    <div className="text-muted-foreground">
                      <p className="mb-1">Persyaratan:</p>
                      <ul className="space-y-0.5 ml-3">
                        {permit.requirements.map((req, j) => (
                          <li key={j} className="flex items-center gap-1">
                            <CircleDot className="w-2 h-2 text-[#a78bfa]" /> {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <NeonButton size="sm" className="w-full" style={{ backgroundColor: '#a78bfa', color: '#0a0a0f' } as React.CSSProperties}>
                    Ajukan Izin <ArrowRight className="w-3 h-3" />
                  </NeonButton>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tracking" className="space-y-4">
          <h3 className="text-sm font-semibold">Tracking Permohonan</h3>

          {/* Pipeline visualization */}
          <GlassCard>
            <div className="flex items-center justify-between mb-4 overflow-x-auto">
              {['Submitted', 'Under Review', 'Approved', 'Issued'].map((stage, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs whitespace-nowrap"
                    style={{ backgroundColor: `${statusConfig[Object.keys(statusConfig)[i]]?.color}15`, color: statusConfig[Object.keys(statusConfig)[i]]?.color }}>
                    {statusConfig[Object.keys(statusConfig)[i]]?.icon}
                    <span>{stage}</span>
                    <span className="font-bold">{PERMIT_REQUESTS.filter(r => r.status === Object.keys(statusConfig)[i]).length}</span>
                  </div>
                  {i < 3 && <ArrowRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />}
                </div>
              ))}
            </div>
          </GlassCard>

          <div className="space-y-3">
            {filteredRequests.map((req, i) => (
              <motion.div
                key={req.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <GlassCard>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${statusConfig[req.status]?.color}15` }}>
                        {statusConfig[req.status]?.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{req.id} — {req.applicant}</h4>
                        <p className="text-xs text-muted-foreground">{req.permitType}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">Diajukan: {req.submittedDate}</p>
                        <p className="text-xs font-bold">Rp {(req.fee / 1_000_000).toFixed(0)}Jt</p>
                      </div>
                      <Badge className="text-[10px] border-0"
                        style={{ backgroundColor: `${statusConfig[req.status]?.color}20`, color: statusConfig[req.status]?.color }}>
                        {req.status.replace('_', ' ')}
                      </Badge>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="verification" className="space-y-4">
          <h3 className="text-sm font-semibold">Verifikasi Legalitas oleh Notaris</h3>
          <p className="text-xs text-muted-foreground mb-4">Notaris: <span className="text-[#a78bfa] font-semibold">Bagas Raffy Raditya, S.H.</span> — Verifikasi dokumen legalitas perizinan</p>

          <div className="space-y-3">
            {PERMIT_REQUESTS.filter(r => r.status === 'under_review' || r.status === 'submitted').map((req) => (
              <GlassCard key={req.id}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#a78bfa]/10 flex items-center justify-center">
                      <Stamp className="w-5 h-5 text-[#a78bfa]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{req.applicant}</h4>
                      <p className="text-xs text-muted-foreground">{req.permitType}</p>
                    </div>
                  </div>
                  <Badge className="text-[10px] border-0 bg-[#d4a843]/20 text-[#d4a843]">
                    Menunggu Verifikasi
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-xs mb-3">
                  <span>Dokumen: {req.id}/docs</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">Diajukan: {req.submittedDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <NeonButton size="sm" style={{ backgroundColor: '#4ade80', color: '#0a0a0f' } as React.CSSProperties}>
                    <CheckCircle className="w-3 h-3" /> Setujui
                  </NeonButton>
                  <NeonButton size="sm" style={{ backgroundColor: '#ef4444', color: '#fff' } as React.CSSProperties}>
                    <AlertTriangle className="w-3 h-3" /> Tolak
                  </NeonButton>
                  <NeonButton size="sm" variant="outline">
                    <Eye className="w-3 h-3" /> Lihat Dokumen
                  </NeonButton>
                </div>
              </GlassCard>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="certificates" className="space-y-4">
          <h3 className="text-sm font-semibold">Sertifikat Digital yang Diterbitkan</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PERMIT_REQUESTS.filter(r => r.status === 'issued' || r.status === 'approved').map((req) => (
              <GlassCard key={req.id}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-[#22d3ee]/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-[#22d3ee]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{req.applicant}</h4>
                    <p className="text-xs text-muted-foreground">{req.permitType}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span>Nomor: {req.id}/CERT/2024</span>
                  <Badge className="text-[10px] border-0 bg-[#22d3ee]/20 text-[#22d3ee]">Terverifikasi</Badge>
                </div>
                {req.verifiedBy && (
                  <p className="text-[10px] text-muted-foreground mb-2">Diverifikasi oleh: {req.verifiedBy}</p>
                )}
                <div className="flex items-center gap-2">
                  <NeonButton size="sm" variant="outline">
                    <Download className="w-3 h-3" /> Download PDF
                  </NeonButton>
                  <NeonButton size="sm" variant="outline">
                    <Eye className="w-3 h-3" /> Preview
                  </NeonButton>
                </div>
              </GlassCard>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
