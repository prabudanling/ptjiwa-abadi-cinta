'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { GlassCard, ModuleHeader, StatCard } from '@/components/shared/GlassCard'
import { NeonButton } from '@/components/shared/NeonButton'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { COMMODITY_PRICES } from '@/lib/company-data'
import {
  Factory, TrendingUp, ArrowUpRight, ArrowDownRight, Package,
  BarChart3, Truck, Warehouse, Plus, Eye, DollarSign,
  Activity, LineChart, Layers
} from 'lucide-react'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar
} from 'recharts'

const PRICE_HISTORY = [
  { month: 'Jul', cpo: 13200, minyakGoreng: 14800, olein: 14100 },
  { month: 'Agu', cpo: 12800, minyakGoreng: 14500, olein: 13800 },
  { month: 'Sep', cpo: 13500, minyakGoreng: 15200, olein: 14400 },
  { month: 'Okt', cpo: 14100, minyakGoreng: 15800, olein: 14900 },
  { month: 'Nov', cpo: 14500, minyakGoreng: 16000, olein: 15200 },
  { month: 'Des', cpo: 14200, minyakGoreng: 15900, olein: 15000 },
  { month: 'Jan', cpo: 14850, minyakGoreng: 16200, olein: 15500 },
]

const TRADES = [
  { id: 'TRD-001', commodity: 'CPO', type: 'Jual', qty: '1.000 ton', price: 'Rp 14.850.000/ton', total: 'Rp 14.85M', counterparty: 'PT Global Palm', status: 'confirmed' },
  { id: 'TRD-002', commodity: 'Minyak Goreng', type: 'Jual', qty: '500 ton', price: 'Rp 16.200.000/ton', total: 'Rp 8.1M', counterparty: 'CV Sejahtera', status: 'shipped' },
  { id: 'TRD-003', commodity: 'Olein', type: 'Beli', qty: '200 ton', price: 'Rp 15.500.000/ton', total: 'Rp 3.1M', counterparty: 'PT Refinery Indo', status: 'pending' },
  { id: 'TRD-004', commodity: 'Stearin', type: 'Jual', qty: '800 ton', price: 'Rp 13.200.000/ton', total: 'Rp 10.56M', counterparty: 'PT Chem Palm', status: 'delivered' },
  { id: 'TRD-005', commodity: 'Fraksinasi', type: 'Jual', qty: '300 ton', price: 'Rp 14.700.000/ton', total: 'Rp 4.41M', counterparty: 'PT Oil Tech', status: 'confirmed' },
]

const FACTORIES = [
  { name: 'Pabrik Fraksinasi JAC 1', location: 'Riau', type: 'Fraksinasi', capacity: '500 ton/hari', utilization: 82 },
  { name: 'Pabrik Minyak Goreng JAC', location: 'Medan', type: 'Minyak Goreng', capacity: '300 ton/hari', utilization: 91 },
  { name: 'Pabrik Pemurnian JAC', location: 'Kalimantan', type: 'Pemurnian', capacity: '450 ton/hari', utilization: 75 },
]

const WAREHOUSES = [
  { name: 'Gudang CPO Riau', location: 'Riau', capacity: '5.000 ton', stock: '3.200 ton', commodity: 'CPO' },
  { name: 'Gudang MG Medan', location: 'Medan', capacity: '3.000 ton', stock: '2.100 ton', commodity: 'Minyak Goreng' },
  { name: 'Gudang Olein JKT', location: 'Jakarta', capacity: '2.000 ton', stock: '1.500 ton', commodity: 'Olein' },
  { name: 'Gudang Stearin SBY', location: 'Surabaya', capacity: '2.500 ton', stock: '800 ton', commodity: 'Stearin' },
]

export default function IndustriModule() {
  const [activeTab, setActiveTab] = useState('trading')

  return (
    <div className="space-y-6">
      <ModuleHeader title="Modul Industri Sawit" subtitle="Trading CPO, minyak goreng, fraksinasi — KBLI 10433, 10434, 10435, 10436, 10437" color="#8FB89B" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Harga CPO Hari Ini" value="Rp 14.85Jt/ton" change="+2.3%" icon={<DollarSign className="w-5 h-5 text-[#8FB89B]" />} color="#8FB89B" />
        <StatCard title="Trading Volume" value="12,500 ton" change="+15%" icon={<BarChart3 className="w-5 h-5 text-[#5A8A6A]" />} color="#5A8A6A" />
        <StatCard title="Pabrik Aktif" value="3" icon={<Factory className="w-5 h-5 text-[#f97316]" />} color="#f97316" />
        <StatCard title="Kapasitas Gudang" value="12,500 ton" change="+2.1K" icon={<Warehouse className="w-5 h-5 text-[#60a5fa]" />} color="#60a5fa" />
      </div>

      {/* Live Commodity Prices */}
      <GlassCard>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold flex items-center gap-2">
            <Activity className="w-4 h-4 text-[#8FB89B] animate-pulse" /> Dashboard Harga Komoditas Real-Time
          </h3>
          <Badge variant="outline" className="text-[10px] border-[#8FB89B]/30 text-[#8FB89B]">LIVE</Badge>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {COMMODITY_PRICES.map((c) => (
            <div key={c.name} className="p-3 rounded-lg bg-[rgba(74,222,128,0.05)] border border-[rgba(74,222,128,0.1)]">
              <p className="text-xs text-muted-foreground mb-1">{c.name}</p>
              <p className="text-sm font-bold">{(c.price / 1_000_000).toFixed(1)}Jt</p>
              <p className={`text-xs flex items-center gap-1 ${c.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {c.change >= 0 ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {Math.abs(c.change)}%
              </p>
            </div>
          ))}
        </div>
      </GlassCard>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="glass">
          <TabsTrigger value="trading">Trading</TabsTrigger>
          <TabsTrigger value="price-chart">Grafik Harga</TabsTrigger>
          <TabsTrigger value="factories">Pabrik & Gudang</TabsTrigger>
        </TabsList>

        <TabsContent value="trading" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold">Trading CPO & Turunannya</h3>
            <NeonButton size="sm"><Plus className="w-4 h-4" /> Buat Trade</NeonButton>
          </div>

          <div className="space-y-3">
            {TRADES.map((trade, i) => (
              <motion.div
                key={trade.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <GlassCard>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#8FB89B]/10 flex items-center justify-center">
                        <Package className="w-5 h-5 text-[#8FB89B]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-sm">{trade.id}</h4>
                          <Badge className={`text-[10px] border-0 ${trade.type === 'Jual' ? 'bg-[#8FB89B]/20 text-[#8FB89B]' : 'bg-[#60a5fa]/20 text-[#60a5fa]'}`}>
                            {trade.type}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">{trade.commodity} • {trade.qty} • {trade.counterparty}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-sm font-bold">{trade.total}</p>
                        <p className="text-xs text-muted-foreground">@ {trade.price}</p>
                      </div>
                      <Badge className={`text-[10px] border-0 ${
                        trade.status === 'confirmed' ? 'bg-[#5A8A6A]/20 text-[#5A8A6A]' :
                        trade.status === 'shipped' ? 'bg-[#60a5fa]/20 text-[#60a5fa]' :
                        trade.status === 'delivered' ? 'bg-[#8FB89B]/20 text-[#8FB89B]' :
                        'bg-[#8B9A8B]/20 text-[#8B9A8B]'
                      }`}>
                        {trade.status}
                      </Badge>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="price-chart" className="space-y-4">
          <GlassCard>
            <h3 className="text-sm font-semibold mb-4">Tren Harga 7 Bulan (Rp/ton)</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={PRICE_HISTORY}>
                  <defs>
                    <linearGradient id="colorCPO" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8FB89B" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#8FB89B" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorMG" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#5A8A6A" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#5A8A6A" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(74,222,128,0.1)" />
                  <XAxis dataKey="month" stroke="#8B9A8B" fontSize={10} />
                  <YAxis stroke="#8B9A8B" fontSize={10} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(74,222,128,0.2)', borderRadius: '8px', fontSize: '12px' }}
                    formatter={(value: number) => [`Rp ${(value).toLocaleString('id-ID')}`, '']}
                  />
                  <Area type="monotone" dataKey="minyakGoreng" stroke="#5A8A6A" fill="url(#colorMG)" name="Minyak Goreng" />
                  <Area type="monotone" dataKey="olein" stroke="#60a5fa" fillOpacity={0.1} name="Olein" />
                  <Area type="monotone" dataKey="cpo" stroke="#8FB89B" fill="url(#colorCPO)" name="CPO" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>
        </TabsContent>

        <TabsContent value="factories" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Factories */}
            <div>
              <h3 className="text-sm font-semibold mb-3">Pabrik</h3>
              <div className="space-y-3">
                {FACTORIES.map((f, i) => (
                  <GlassCard key={i}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-[#8FB89B]/10 flex items-center justify-center">
                        <Factory className="w-5 h-5 text-[#8FB89B]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{f.name}</h4>
                        <p className="text-xs text-muted-foreground">{f.location} • {f.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span>Kapasitas: {f.capacity}</span>
                      <span className="font-bold text-[#8FB89B]">{f.utilization}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[rgba(74,222,128,0.1)]">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${f.utilization}%` }}
                        transition={{ duration: 1.5 }}
                        className="h-full rounded-full bg-[#8FB89B]"
                      />
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>

            {/* Warehouses */}
            <div>
              <h3 className="text-sm font-semibold mb-3">Gudang</h3>
              <div className="space-y-3">
                {WAREHOUSES.map((w, i) => {
                  const stockPercent = parseInt(w.stock) / parseInt(w.capacity) * 100
                  return (
                    <GlassCard key={i}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-[#60a5fa]/10 flex items-center justify-center">
                          <Warehouse className="w-5 h-5 text-[#60a5fa]" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">{w.name}</h4>
                          <p className="text-xs text-muted-foreground">{w.location} • {w.commodity}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs mb-2">
                        <span>Stok: {w.stock} / {w.capacity}</span>
                        <span className={`font-bold ${stockPercent > 80 ? 'text-red-400' : stockPercent > 50 ? 'text-[#5A8A6A]' : 'text-[#8FB89B]'}`}>
                          {stockPercent.toFixed(0)}%
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-[rgba(96,165,250,0.1)]">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${stockPercent}%` }}
                          transition={{ duration: 1.5 }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: stockPercent > 80 ? '#ef4444' : stockPercent > 50 ? '#5A8A6A' : '#8FB89B' }}
                        />
                      </div>
                    </GlassCard>
                  )
                })}
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
