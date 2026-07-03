'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { GlassCard, ModuleHeader, StatCard } from '@/components/shared/GlassCard'
import { NeonButton } from '@/components/shared/NeonButton'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Leaf, TreePine, Fish, MapPin, TrendingUp, Award, Plus, Eye,
  Calendar, BarChart3, Sprout, Droplets, Mountain, FileCheck
} from 'lucide-react'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts'

const PLANTATIONS = [
  { id: 1, name: 'Kebun Sawit Riau Utara', location: 'Riau', area: 1200, cropType: 'Kelapa Sawit', plantingYear: 2015, productivity: 4.2, certification: 'RSPO, ISPO', status: 'Produksi' },
  { id: 2, name: 'Kebun Sawit Kalimantan Timur', location: 'Kalimantan Timur', area: 2500, cropType: 'Kelapa Sawit', plantingYear: 2012, productivity: 3.8, certification: 'ISPO', status: 'Produksi' },
  { id: 3, name: 'Kebun Sawit Sumatera Utara', location: 'Sumatera Utara', area: 800, cropType: 'Kelapa Sawit', plantingYear: 2018, productivity: 3.5, certification: 'ISPO', status: 'TBM' },
  { id: 4, name: 'Kebun Sawit Jambi', location: 'Jambi', area: 700, cropType: 'Kelapa Sawit', plantingYear: 2020, productivity: 0, certification: '-', status: 'TBM' },
]

const HARVEST_DATA = [
  { month: 'Jul', tonnage: 420 },
  { month: 'Agu', tonnage: 380 },
  { month: 'Sep', tonnage: 450 },
  { month: 'Okt', tonnage: 480 },
  { month: 'Nov', tonnage: 510 },
  { month: 'Des', tonnage: 490 },
  { month: 'Jan', tonnage: 530 },
]

const FISHERIES = [
  { name: 'Tambak Udang Vannamei', location: 'Lampung', type: 'Tambak', species: 'Udang Vannamei', capacity: '50 ton/siklus', production: '38 ton/siklus', certification: 'ASC' },
  { name: 'KJA Ikan Nila', location: 'Jawa Barat', type: 'Keramba Jaring Apung', species: 'Ikan Nila', capacity: '30 ton/tahun', production: '25 ton/tahun', certification: '-' },
  { name: 'Tambak Bandeng', location: 'Jawa Timur', type: 'Tambak', species: 'Bandeng', capacity: '40 ton/siklus', production: '35 ton/siklus', certification: 'Gapleti' },
]

const FORESTS = [
  { name: 'HTI Eucalyptus Riau', location: 'Riau', area: 3000, type: 'HTI', species: 'Eucalyptus', certification: 'FSC' },
  { name: 'HTI Akasia Kalimantan', location: 'Kalimantan Barat', area: 2000, type: 'HTI', species: 'Akasia', certification: 'FSC, PEFC' },
  { name: 'Hutan Lindung Jawa Barat', location: 'Jawa Barat', area: 500, type: 'Hutan Lindung', species: 'Mix Tropical', certification: '-' },
]

export default function PertanianModule() {
  const [activeTab, setActiveTab] = useState('plantation')

  return (
    <div className="space-y-6">
      <ModuleHeader title="Modul Pertanian, Kehutanan & Perikanan" subtitle="Perkebunan sawit, kehutanan, perikanan — KBLI 01262 dan lainnya" color="#22d3ee" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Lahan" value="5,200 Ha" change="+700 Ha" icon={<MapPin className="w-5 h-5 text-[#22d3ee]" />} color="#22d3ee" />
        <StatCard title="Produksi TBS/bln" value="530 ton" change="+8%" icon={<Sprout className="w-5 h-5 text-[#4ade80]" />} color="#4ade80" />
        <StatCard title="Sertifikasi" value="4 Aktif" change="+1" icon={<Award className="w-5 h-5 text-[#d4a843]" />} color="#d4a843" />
        <StatCard title="Perikanan" value="3 Unit" icon={<Fish className="w-5 h-5 text-[#60a5fa]" />} color="#60a5fa" />
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="glass">
          <TabsTrigger value="plantation">Perkebunan Sawit</TabsTrigger>
          <TabsTrigger value="fishery">Perikanan</TabsTrigger>
          <TabsTrigger value="forestry">Kehutanan</TabsTrigger>
          <TabsTrigger value="certification">Sertifikasi</TabsTrigger>
        </TabsList>

        <TabsContent value="plantation" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold">Manajemen Perkebunan Kelapa Sawit</h3>
            <NeonButton size="sm"><Plus className="w-4 h-4" /> Tambah Kebun</NeonButton>
          </div>

          {/* Plantation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PLANTATIONS.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard className="h-full">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-[#22d3ee]/10 flex items-center justify-center">
                        <Leaf className="w-6 h-6 text-[#22d3ee]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{p.name}</h4>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {p.location}
                        </p>
                      </div>
                    </div>
                    <Badge className={`text-[10px] border-0 ${
                      p.status === 'Produksi' ? 'bg-[#4ade80]/20 text-[#4ade80]' : 'bg-[#d4a843]/20 text-[#d4a843]'
                    }`}>
                      {p.status}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                    <div className="p-2 rounded bg-[rgba(34,211,238,0.05)]">
                      <p className="text-muted-foreground">Luas</p>
                      <p className="font-bold">{p.area.toLocaleString()} Ha</p>
                    </div>
                    <div className="p-2 rounded bg-[rgba(74,222,128,0.05)]">
                      <p className="text-muted-foreground">Produktivitas</p>
                      <p className="font-bold">{p.productivity} ton/ha/thn</p>
                    </div>
                    <div className="p-2 rounded bg-[rgba(212,168,67,0.05)]">
                      <p className="text-muted-foreground">Tahun Tanam</p>
                      <p className="font-bold">{p.plantingYear}</p>
                    </div>
                    <div className="p-2 rounded bg-[rgba(96,165,250,0.05)]">
                      <p className="text-muted-foreground">Sertifikasi</p>
                      <p className="font-bold text-[10px]">{p.certification}</p>
                    </div>
                  </div>

                  <NeonButton size="sm" variant="outline" className="w-full">
                    <Eye className="w-3 h-3" /> Lihat Detail
                  </NeonButton>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Harvest Chart */}
          <GlassCard>
            <h3 className="text-sm font-semibold mb-4">Produksi TBS Bulanan (ton)</h3>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={HARVEST_DATA}>
                  <defs>
                    <linearGradient id="colorHarvest" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(34,211,238,0.1)" />
                  <XAxis dataKey="month" stroke="#8a8a9a" fontSize={10} />
                  <YAxis stroke="#8a8a9a" fontSize={10} />
                  <Tooltip contentStyle={{ backgroundColor: '#12121a', border: '1px solid rgba(34,211,238,0.2)', borderRadius: '8px', fontSize: '12px' }} />
                  <Area type="monotone" dataKey="tonnage" stroke="#22d3ee" fill="url(#colorHarvest)" name="TBS (ton)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>
        </TabsContent>

        <TabsContent value="fishery" className="space-y-4">
          <h3 className="text-sm font-semibold">Unit Perikanan</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FISHERIES.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard className="h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#60a5fa]/10 flex items-center justify-center">
                      <Fish className="w-5 h-5 text-[#60a5fa]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{f.name}</h4>
                      <p className="text-xs text-muted-foreground">{f.location}</p>
                    </div>
                  </div>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between"><span className="text-muted-foreground">Tipe</span><span>{f.type}</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Spesies</span><span>{f.species}</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Kapasitas</span><span>{f.capacity}</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Produksi</span><span className="text-[#4ade80]">{f.production}</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Sertifikasi</span><span className="text-[#d4a843]">{f.certification}</span></div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="forestry" className="space-y-4">
          <h3 className="text-sm font-semibold">Manajemen Kehutanan</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FORESTS.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#22d3ee]/10 flex items-center justify-center">
                      <TreePine className="w-5 h-5 text-[#22d3ee]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{f.name}</h4>
                      <p className="text-xs text-muted-foreground">{f.location}</p>
                    </div>
                  </div>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between"><span className="text-muted-foreground">Luas</span><span>{f.area.toLocaleString()} Ha</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Tipe</span><span>{f.type}</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Spesies</span><span>{f.species}</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Sertifikasi</span><span className="text-[#d4a843]">{f.certification || '-'}</span></div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="certification" className="space-y-4">
          <h3 className="text-sm font-semibold">Sertifikasi Keberlanjutan</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'RSPO', fullName: 'Roundtable on Sustainable Palm Oil', status: 'Aktif', validUntil: '2026-12-31', areas: ['Kebun Sawit Riau Utara'], color: '#4ade80' },
              { name: 'ISPO', fullName: 'Indonesian Sustainable Palm Oil', status: 'Aktif', validUntil: '2025-06-30', areas: ['Kebun Sawit Riau Utara', 'Kebun Sawit Kalimantan Timur', 'Kebun Sawit Sumatera Utara'], color: '#d4a843' },
              { name: 'FSC', fullName: 'Forest Stewardship Council', status: 'Aktif', validUntil: '2026-03-15', areas: ['HTI Eucalyptus Riau', 'HTI Akasia Kalimantan'], color: '#22d3ee' },
              { name: 'ASC', fullName: 'Aquaculture Stewardship Council', status: 'Aktif', validUntil: '2025-09-20', areas: ['Tambak Udang Vannamei'], color: '#60a5fa' },
              { name: 'PEFC', fullName: 'Programme for Endorsement of Forest Certification', status: 'Pending', validUntil: '-', areas: ['HTI Akasia Kalimantan'], color: '#a78bfa' },
            ].map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard className="h-full">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${cert.color}15` }}>
                      <FileCheck className="w-6 h-6" style={{ color: cert.color }} />
                    </div>
                    <Badge className={`text-[10px] border-0 ${cert.status === 'Aktif' ? 'bg-[#4ade80]/20 text-[#4ade80]' : 'bg-[#d4a843]/20 text-[#d4a843]'}`}>
                      {cert.status}
                    </Badge>
                  </div>
                  <h4 className="font-bold text-sm" style={{ color: cert.color }}>{cert.name}</h4>
                  <p className="text-xs text-muted-foreground mb-2">{cert.fullName}</p>
                  <p className="text-xs text-muted-foreground mb-1">Berlaku hingga: {cert.validUntil}</p>
                  <div className="mt-2 space-y-1">
                    {cert.areas.map((area, j) => (
                      <p key={j} className="text-[10px] text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-2.5 h-2.5" /> {area}
                      </p>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
