'use client'

import { motion } from 'framer-motion'
import { GlassCard, StatCard, ModuleHeader } from '@/components/shared/GlassCard'
import { NeonButton } from '@/components/shared/NeonButton'
import { SAMPLE_STATS, COMMODITY_PRICES, MONTHLY_REVENUE, MODULES, COMPANY } from '@/lib/company-data'
import { useAppStore, type AppView } from '@/store/useAppStore'
import {
  TrendingUp, Package, Users, Building2, Factory, Leaf,
  ArrowUpRight, ArrowDownRight, BarChart3, DollarSign, Activity,
  Clock, CheckCircle, AlertTriangle, Briefcase
} from 'lucide-react'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar
} from 'recharts'

const PIE_DATA = [
  { name: 'Perdagangan', value: 35, color: '#d4a843' },
  { name: 'Industri', value: 28, color: '#4ade80' },
  { name: 'Konstruksi', value: 18, color: '#f97316' },
  { name: 'Jasa', value: 12, color: '#60a5fa' },
  { name: 'Pertanian', value: 7, color: '#22d3ee' },
]

const ACTIVITIES = [
  { type: 'order', message: 'Pesanan baru #ORD-2847 — CPO 500 ton', time: '2 menit lalu', color: '#d4a843' },
  { type: 'tender', message: 'Tender konstruksi gedung kantor won — PT JAC', time: '15 menit lalu', color: '#f97316' },
  { type: 'permit', message: 'Kontrak B2B baru — Minyak Goreng 800 ton', time: '1 jam lalu', color: '#a78bfa' },
  { type: 'booking', message: 'Booking MICE Conference — 200 peserta', time: '2 jam lalu', color: '#60a5fa' },
  { type: 'harvest', message: 'Panen kelapa sawit — 120 ton dari Kebun A', time: '3 jam lalu', color: '#22d3ee' },
  { type: 'trade', message: 'CPO trading — jual 1.000 ton @ Rp 14.850.000', time: '4 jam lalu', color: '#4ade80' },
]

const formatCurrency = (val: number) => {
  if (val >= 1_000_000_000_000) return `Rp ${(val / 1_000_000_000_000).toFixed(1)}T`
  if (val >= 1_000_000_000) return `Rp ${(val / 1_000_000_000).toFixed(1)}M`
  if (val >= 1_000_000) return `Rp ${(val / 1_000_000).toFixed(1)}Jt`
  return `Rp ${val.toLocaleString('id-ID')}`
}

export default function Dashboard() {
  const { setCurrentView } = useAppStore()

  return (
    <div className="space-y-6">
      <ModuleHeader title="Dashboard" subtitle="Ringkasan seluruh kegiatan usaha PT Jiwa Abdi Cinta" color="#d4a843" />

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Pendapatan"
          value={formatCurrency(SAMPLE_STATS.totalRevenue)}
          change="+12.5%"
          icon={<DollarSign className="w-5 h-5 text-[#d4a843]" />}
          color="#d4a843"
        />
        <StatCard
          title="Total Transaksi"
          value={SAMPLE_STATS.totalTransactions.toLocaleString('id-ID')}
          change="+8.3%"
          icon={<Activity className="w-5 h-5 text-[#4ade80]" />}
          color="#4ade80"
        />
        <StatCard
          title="Mitra Aktif"
          value={SAMPLE_STATS.activePartners.toString()}
          change="+15"
          icon={<Users className="w-5 h-5 text-[#60a5fa]" />}
          color="#60a5fa"
        />
        <StatCard
          title="Proyek Aktif"
          value={SAMPLE_STATS.activeProjects.toString()}
          change="+3"
          icon={<Building2 className="w-5 h-5 text-[#f97316]" />}
          color="#f97316"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Revenue Chart */}
        <GlassCard className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold">Pendapatan Bulanan (Miliar Rp)</h3>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <BarChart3 className="w-4 h-4" /> 12 Bulan Terakhir
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={MONTHLY_REVENUE}>
                <defs>
                  <linearGradient id="colorPerdagangan" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#d4a843" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#d4a843" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorIndustri" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4ade80" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#4ade80" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(212,168,67,0.1)" />
                <XAxis dataKey="month" stroke="#8a8a9a" fontSize={10} />
                <YAxis stroke="#8a8a9a" fontSize={10} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#12121a',
                    border: '1px solid rgba(212,168,67,0.2)',
                    borderRadius: '8px',
                    fontSize: '12px',
                  }}
                />
                <Area type="monotone" dataKey="industri" stackId="1" stroke="#4ade80" fill="url(#colorIndustri)" />
                <Area type="monotone" dataKey="perdagangan" stackId="1" stroke="#d4a843" fill="url(#colorPerdagangan)" />
                <Area type="monotone" dataKey="konstruksi" stackId="1" stroke="#f97316" fillOpacity={0.1} />
                <Area type="monotone" dataKey="jasa" stackId="1" stroke="#60a5fa" fillOpacity={0.1} />
                <Area type="monotone" dataKey="pertanian" stackId="1" stroke="#22d3ee" fillOpacity={0.1} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        {/* Pie Chart */}
        <GlassCard>
          <h3 className="text-sm font-semibold mb-4">Distribusi Pendapatan</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={PIE_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={75}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {PIE_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#12121a',
                    border: '1px solid rgba(212,168,67,0.2)',
                    borderRadius: '8px',
                    fontSize: '12px',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-2 space-y-1.5">
            {PIE_DATA.map((d) => (
              <div key={d.name} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: d.color }} />
                  <span className="text-muted-foreground">{d.name}</span>
                </div>
                <span className="font-medium">{d.value}%</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      {/* Commodity Prices & Activity Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Commodity Prices */}
        <GlassCard>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold">Harga Komoditas Hari Ini</h3>
            <span className="text-xs text-muted-foreground">Live</span>
          </div>
          <div className="space-y-3">
            {COMMODITY_PRICES.map((c) => (
              <div key={c.name} className="flex items-center justify-between py-2 border-b border-[rgba(212,168,67,0.05)] last:border-0">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#4ade80]/10 flex items-center justify-center">
                    <Factory className="w-4 h-4 text-[#4ade80]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{c.name}</p>
                    <p className="text-xs text-muted-foreground">{c.unit}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold">Rp {(c.price / 1_000_000).toFixed(1)}Jt</p>
                  <p className={`text-xs flex items-center justify-end gap-1 ${c.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {c.change >= 0 ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                    {Math.abs(c.change)}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Activity Feed */}
        <GlassCard>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold">Aktivitas Terkini</h3>
            <Activity className="w-4 h-4 text-muted-foreground animate-pulse" />
          </div>
          <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
            {ACTIVITIES.map((act, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 py-2 border-b border-[rgba(212,168,67,0.05)] last:border-0"
              >
                <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: act.color }} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm">{act.message}</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                    <Clock className="w-3 h-3" /> {act.time}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>

      {/* Quick Access Modules */}
      <div>
        <h3 className="text-sm font-semibold mb-3">Akses Cepat Modul</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {MODULES.map((mod) => (
            <motion.button
              key={mod.id}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentView(mod.id as AppView)}
              className="glass rounded-xl p-4 text-center transition-all duration-300 hover:neon-gold-glow"
            >
              <div className="mx-auto mb-2 w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${mod.color}15`, color: mod.color }}
              >
                {mod.icon === 'Package' ? <Package className="w-5 h-5" /> :
                 mod.icon === 'Briefcase' ? <Briefcase className="w-5 h-5" /> :
                 mod.icon === 'Building2' ? <Building2 className="w-5 h-5" /> :
                 mod.icon === 'Factory' ? <Factory className="w-5 h-5" /> :
                 mod.icon === 'Leaf' ? <Leaf className="w-5 h-5" /> :
                 <Package className="w-5 h-5" />}
              </div>
              <p className="text-xs font-medium" style={{ color: mod.color }}>{mod.name}</p>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Pending Tasks */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <GlassCard>
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-4 h-4 text-yellow-400" />
            <h4 className="text-sm font-semibold">Perlu Tindakan</h4>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span>Pesanan pending</span>
              <span className="text-[#d4a843] font-bold">23</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span>Tender berakhir</span>
              <span className="text-[#f97316] font-bold">5</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span>Booking jasa pending</span>
              <span className="text-[#60a5fa] font-bold">9</span>
            </div>
          </div>
        </GlassCard>

        <GlassCard>
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <h4 className="text-sm font-semibold">Selesai Bulan Ini</h4>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span>Pesanan dikirim</span>
              <span className="text-[#4ade80] font-bold">187</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span>Proyek selesai</span>
              <span className="text-[#4ade80] font-bold">4</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span>Booking jasa selesai</span>
              <span className="text-[#4ade80] font-bold">42</span>
            </div>
          </div>
        </GlassCard>

        <GlassCard>
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-4 h-4 text-[#d4a843]" />
            <h4 className="text-sm font-semibold">Pertumbuhan</h4>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span>Revenue MoM</span>
              <span className="text-[#4ade80] font-bold">+12.5%</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span>Mitra baru</span>
              <span className="text-[#4ade80] font-bold">+15</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span>CPO price WoW</span>
              <span className="text-[#4ade80] font-bold">+2.3%</span>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
