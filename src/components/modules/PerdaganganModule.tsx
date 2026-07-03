'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GlassCard, ModuleHeader, StatCard } from '@/components/shared/GlassCard'
import { NeonButton } from '@/components/shared/NeonButton'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Package, Search, ShoppingCart, Globe, Truck, FileText, Star, Filter,
  ArrowUpRight, TrendingUp, Users, BarChart3, Plus, Eye, MessageSquare
} from 'lucide-react'

const PRODUCTS = [
  { id: 1, name: 'CPO (Crude Palm Oil)', category: 'Bahan Baku Sawit', price: 'Rp 14.850.000/ton', stock: 2500, seller: 'PT JAC Plantation', rating: 4.8, verified: true, kbli: '46202', origin: 'Kalimantan' },
  { id: 2, name: 'Mesin Fraksinasi Mini', category: 'Mesin & Peralatan', price: 'Rp 850.000.000/unit', stock: 5, seller: 'PT Machinery Indo', rating: 4.5, verified: true, kbli: '46599', origin: 'Jepang' },
  { id: 3, name: 'Kelapa Sawit Buah TBS', category: 'Bahan Baku Sawit', price: 'Rp 2.850.000/ton', stock: 15000, seller: 'PT JAC Plantation', rating: 4.9, verified: true, kbli: '46202', origin: 'Sumatera' },
  { id: 4, name: 'Alat Lab Palm Oil Analysis', category: 'Peralatan Lab', price: 'Rp 125.000.000/set', stock: 12, seller: 'LabTech Indonesia', rating: 4.3, verified: false, kbli: '46599', origin: 'Jerman' },
  { id: 5, name: 'Pupuk Sawit NPK', category: 'Bahan Baku', price: 'Rp 15.500/kg', stock: 50000, seller: 'PT Agro Chem', rating: 4.6, verified: true, kbli: '46100', origin: 'Indonesia' },
  { id: 6, name: 'Minyak Goreng B2B', category: 'Produk Jadi', price: 'Rp 16.200.000/ton', stock: 800, seller: 'PT JAC Industri', rating: 4.7, verified: true, kbli: '47911', origin: 'Riau' },
]

const ORDERS = [
  { id: 'ORD-2847', buyer: 'PT Maju Bersama', product: 'CPO', qty: '500 ton', total: 'Rp 7.425M', status: 'shipped', date: '2024-01-15' },
  { id: 'ORD-2846', buyer: 'CV Sejahtera', product: 'Minyak Goreng B2B', qty: '100 ton', total: 'Rp 1.620M', status: 'confirmed', date: '2024-01-15' },
  { id: 'ORD-2845', buyer: 'PT Global Trade', product: 'TBS Kelapa Sawit', qty: '2000 ton', total: 'Rp 5.700M', status: 'pending', date: '2024-01-14' },
  { id: 'ORD-2844', buyer: 'PT Indo Palm', product: 'Mesin Fraksinasi', qty: '1 unit', total: 'Rp 850Jt', status: 'delivered', date: '2024-01-13' },
  { id: 'ORD-2843', buyer: 'UD Makmur Jaya', product: 'Pupuk NPK', qty: '10.000 kg', total: 'Rp 155Jt', status: 'negotiated', date: '2024-01-13' },
]

const statusColors: Record<string, string> = {
  pending: '#eab308',
  confirmed: '#60a5fa',
  negotiated: '#a78bfa',
  shipped: '#8FB89B',
  delivered: '#22d3ee',
  cancelled: '#ef4444',
}

export default function PerdaganganModule() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState('catalog')

  const filteredProducts = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <ModuleHeader title="Modul Perdagangan" subtitle="Marketplace ekspor/impor, supplier, distributor — KBLI 46100, 46599, 47911, 46202, 71102" color="#5A8A6A" />

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Produk" value="1,247" change="+28" icon={<Package className="w-5 h-5 text-[#5A8A6A]" />} color="#5A8A6A" />
        <StatCard title="Pesanan Aktif" value="156" change="+12" icon={<ShoppingCart className="w-5 h-5 text-[#8FB89B]" />} color="#8FB89B" />
        <StatCard title="Supplier Terverifikasi" value="89" change="+5" icon={<Users className="w-5 h-5 text-[#60a5fa]" />} color="#60a5fa" />
        <StatCard title="Nilai Trading" value="Rp 47.2M" change="+18.5%" icon={<TrendingUp className="w-5 h-5 text-[#f97316]" />} color="#f97316" />
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="glass">
          <TabsTrigger value="catalog">Katalog Produk</TabsTrigger>
          <TabsTrigger value="orders">Pesanan</TabsTrigger>
          <TabsTrigger value="suppliers">Supplier</TabsTrigger>
          <TabsTrigger value="logistics">Logistik</TabsTrigger>
        </TabsList>

        <TabsContent value="catalog" className="space-y-4">
          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Cari produk, kategori, KBLI..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-[#FFFFFF] border-[rgba(212,168,67,0.15)]"
              />
            </div>
            <NeonButton variant="outline" size="sm">
              <Filter className="w-4 h-4" /> Filter
            </NeonButton>
            <NeonButton size="sm">
              <Plus className="w-4 h-4" /> Tambah Produk
            </NeonButton>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence>
              {filteredProducts.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <GlassCard className="h-full group">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-lg bg-[#5A8A6A]/10 flex items-center justify-center">
                          <Package className="w-5 h-5 text-[#5A8A6A]" />
                        </div>
                        <div>
                          <Badge variant="outline" className="text-[10px] border-[#5A8A6A]/30 text-[#5A8A6A]">
                            {product.kbli}
                          </Badge>
                        </div>
                      </div>
                      {product.verified && (
                        <div className="flex items-center gap-1 text-[10px] text-[#8FB89B]">
                          <Star className="w-3 h-3 fill-[#8FB89B]" /> Verified
                        </div>
                      )}
                    </div>

                    <h4 className="font-semibold text-sm mb-1 group-hover:text-[#5A8A6A] transition-colors">{product.name}</h4>
                    <p className="text-xs text-muted-foreground mb-3">{product.category}</p>

                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-bold text-[#5A8A6A]">{product.price}</span>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Star className="w-3 h-3 fill-[#5A8A6A] text-[#5A8A6A]" /> {product.rating}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Stok: {product.stock.toLocaleString()}</span>
                      <span className="flex items-center gap-1"><Globe className="w-3 h-3" /> {product.origin}</span>
                    </div>

                    <div className="mt-3 pt-3 border-t border-[rgba(212,168,67,0.1)] flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{product.seller}</span>
                      <NeonButton size="sm" variant="outline">
                        <Eye className="w-3 h-3" /> Detail
                      </NeonButton>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </TabsContent>

        <TabsContent value="orders" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold">Pesanan Terkini</h3>
            <NeonButton size="sm"><Plus className="w-4 h-4" /> Buat Pesanan</NeonButton>
          </div>

          <div className="space-y-3">
            {ORDERS.map((order) => (
              <GlassCard key={order.id} className="!p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#5A8A6A]/10 flex items-center justify-center">
                      <ShoppingCart className="w-4 h-4 text-[#5A8A6A]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{order.id} — {order.buyer}</p>
                      <p className="text-xs text-muted-foreground">{order.product} • {order.qty}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold">{order.total}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: `${statusColors[order.status]}20`, color: statusColors[order.status] }}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="suppliers" className="space-y-4">
          <h3 className="text-sm font-semibold">Supplier & Distributor Terverifikasi</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: 'PT JAC Plantation', type: 'Supplier CPO & TBS', verified: true, products: 45, rating: 4.9 },
              { name: 'PT Machinery Indo', type: 'Distributor Mesin', verified: true, products: 120, rating: 4.5 },
              { name: 'LabTech Indonesia', type: 'Supplier Alat Lab', verified: false, products: 67, rating: 4.3 },
              { name: 'PT Agro Chem', type: 'Supplier Pupuk', verified: true, products: 23, rating: 4.6 },
            ].map((supplier, i) => (
              <GlassCard key={i}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-[#5A8A6A]/10 flex items-center justify-center text-[#5A8A6A] font-bold">
                    {supplier.name.charAt(3)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-sm">{supplier.name}</h4>
                      {supplier.verified && <Star className="w-3 h-3 fill-[#8FB89B] text-[#8FB89B]" />}
                    </div>
                    <p className="text-xs text-muted-foreground">{supplier.type}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span>{supplier.products} produk</span>
                  <span className="flex items-center gap-1"><Star className="w-3 h-3 fill-[#5A8A6A] text-[#5A8A6A]" /> {supplier.rating}</span>
                </div>
              </GlassCard>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="logistics" className="space-y-4">
          <h3 className="text-sm font-semibold">Tracking Logistik</h3>
          <div className="space-y-3">
            {[
              { id: 'SHP-001', from: 'Kalimantan', to: 'Jakarta', status: 'In Transit', progress: 65, eta: '2 hari' },
              { id: 'SHP-002', from: 'Riau', to: 'Surabaya', status: 'Loading', progress: 20, eta: '4 hari' },
              { id: 'SHP-003', from: 'Medan', to: 'Jakarta', status: 'Delivered', progress: 100, eta: '-' },
            ].map((shipment) => (
              <GlassCard key={shipment.id}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-[#5A8A6A]" />
                    <span className="text-sm font-medium">{shipment.id}</span>
                  </div>
                  <Badge variant="outline" className="text-[10px]" style={{ borderColor: shipment.progress === 100 ? '#8FB89B' : '#5A8A6A', color: shipment.progress === 100 ? '#8FB89B' : '#5A8A6A' }}>
                    {shipment.status}
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-xs mb-2">
                  <span>{shipment.from}</span>
                  <ArrowUpRight className="w-3 h-3 text-[#5A8A6A]" />
                  <span>{shipment.to}</span>
                  <span className="text-muted-foreground ml-auto">ETA: {shipment.eta}</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[rgba(212,168,67,0.1)]">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${shipment.progress}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: shipment.progress === 100 ? '#8FB89B' : '#5A8A6A' }}
                  />
                </div>
              </GlassCard>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
