'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GlassCard, ModuleHeader, StatCard } from '@/components/shared/GlassCard'
import { NeonButton } from '@/components/shared/NeonButton'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Briefcase, Search, Calendar, Users, Star, Clock, MapPin, Video,
  MessageSquare, Award, Plus, Eye, BookOpen, GraduationCap, Mic2
} from 'lucide-react'

const SERVICES = [
  { id: 1, name: 'Konsultasi Manajemen Strategis', category: 'Konsultasi Manajemen', provider: 'Dr. Wirono, SE.M.Pd', price: 'Rp 5.000.000/sesi', duration: '2 jam', rating: 4.9, reviews: 47, online: true, kbli: '70209' },
  { id: 2, name: 'Konsultasi Teknis Kelapa Sawit', category: 'Konsultasi Teknis', provider: 'Ir. Budi Santoso', price: 'Rp 7.500.000/sesi', duration: '3 jam', rating: 4.8, reviews: 32, online: true, kbli: '71102' },
  { id: 3, name: 'Pelatihan Manajemen Bisnis', category: 'Pelatihan Kerja', provider: 'Team PT JAC', price: 'Rp 15.000.000/paket', duration: '3 hari', rating: 4.7, reviews: 89, online: false, kbli: '78435' },
  { id: 4, name: 'Pelatihan Keselamatan Kerja Industri Sawit', category: 'Pelatihan Kerja', provider: 'HSE Team PT JAC', price: 'Rp 10.000.000/paket', duration: '2 hari', rating: 4.6, reviews: 56, online: false, kbli: '78439' },
  { id: 5, name: 'Konsultasi Hukum Bisnis', category: 'Hukum Bisnis', provider: 'Bagas Raffy Raditya, S.H.', price: 'Rp 3.000.000/sesi', duration: '1 jam', rating: 4.9, reviews: 23, online: true, kbli: '70209' },
  { id: 6, name: 'Virtual Conference: Palm Oil Future 2024', category: 'MICE', provider: 'PT JAC Events', price: 'Rp 2.500.000/tiket', duration: '1 hari', rating: 4.8, reviews: 156, online: true, kbli: '82301' },
]

const MICE_EVENTS = [
  { id: 1, title: 'Indonesia Palm Oil Summit 2024', type: 'Conference', date: '15-17 Mar 2024', location: 'Jakarta Convention Center', virtual: true, capacity: 500, registered: 342, price: 'Rp 5.000.000' },
  { id: 2, title: 'Workshop: Sustainable Plantation Management', type: 'Workshop', date: '22 Mar 2024', location: 'Online (Zoom)', virtual: true, capacity: 100, registered: 78, price: 'Rp 1.500.000' },
  { id: 3, title: 'Exhibition: Palm Oil Technology Expo', type: 'Exhibition', date: '5-7 Apr 2024', location: 'JIExpo Kemayoran', virtual: false, capacity: 1000, registered: 650, price: 'Rp 500.000' },
  { id: 4, title: 'Incentive Trip: Riau Plantation Tour', type: 'Incentive Trip', date: '20-22 Apr 2024', location: 'Riau, Sumatera', virtual: false, capacity: 30, registered: 28, price: 'Rp 12.000.000' },
]

export default function JasaModule() {
  const [activeTab, setActiveTab] = useState('services')

  return (
    <div className="space-y-6">
      <ModuleHeader title="Modul Jasa" subtitle="Konsultasi manajemen, MICE, pelatihan kerja — KBLI 70209, 82301, 78435, 78439" color="#60a5fa" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Layanan Aktif" value="48" change="+6" icon={<Briefcase className="w-5 h-5 text-[#60a5fa]" />} color="#60a5fa" />
        <StatCard title="Booking Bulan Ini" value="234" change="+18%" icon={<Calendar className="w-5 h-5 text-[#4ade80]" />} color="#4ade80" />
        <StatCard title="Konsultan" value="15" change="+3" icon={<Users className="w-5 h-5 text-[#d4a843]" />} color="#d4a843" />
        <StatCard title="Rating Rata-rata" value="4.7" change="+0.2" icon={<Star className="w-5 h-5 text-[#f97316]" />} color="#f97316" />
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="glass">
          <TabsTrigger value="services">Layanan</TabsTrigger>
          <TabsTrigger value="mice">MICE Events</TabsTrigger>
          <TabsTrigger value="training">Pelatihan</TabsTrigger>
          <TabsTrigger value="ratings">Rating</TabsTrigger>
        </TabsList>

        <TabsContent value="services" className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Cari layanan konsultasi..." className="pl-10 bg-[#12121a] border-[rgba(96,165,250,0.15)]" />
            </div>
            <NeonButton variant="outline" size="sm" onClick={() => {}} style={{ color: '#60a5fa', borderColor: '#60a5fa' }}>
              <Plus className="w-4 h-4" /> Tambah Layanan
            </NeonButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <GlassCard className="h-full group">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-lg bg-[#60a5fa]/10 flex items-center justify-center">
                        {service.category === 'Konsultasi Manajemen' || service.category === 'Konsultasi Teknis' || service.category === 'Hukum Bisnis' ?
                          <Briefcase className="w-5 h-5 text-[#60a5fa]" /> :
                          <GraduationCap className="w-5 h-5 text-[#60a5fa]" />
                        }
                      </div>
                      <Badge variant="outline" className="text-[10px] border-[#60a5fa]/30 text-[#60a5fa]">{service.kbli}</Badge>
                    </div>
                    {service.online && (
                      <Badge variant="outline" className="text-[10px] border-[#4ade80]/30 text-[#4ade80]">
                        <Video className="w-3 h-3 mr-1" /> Online
                      </Badge>
                    )}
                  </div>

                  <h4 className="font-semibold text-sm mb-1 group-hover:text-[#60a5fa] transition-colors">{service.name}</h4>
                  <p className="text-xs text-muted-foreground mb-3">{service.provider}</p>

                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-[#60a5fa]">{service.price}</span>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" /> {service.duration}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-[#d4a843] text-[#d4a843]" />
                      <span>{service.rating}</span>
                      <span className="text-muted-foreground">({service.reviews})</span>
                    </div>
                    <NeonButton size="sm" variant="outline">Booking</NeonButton>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="mice" className="space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold">MICE Events</h3>
            <NeonButton size="sm"><Plus className="w-4 h-4" /> Buat Event</NeonButton>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MICE_EVENTS.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard className="h-full">
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2 rounded-lg bg-[#60a5fa]/10">
                      {event.type === 'Conference' ? <Mic2 className="w-5 h-5 text-[#60a5fa]" /> :
                       event.type === 'Workshop' ? <BookOpen className="w-5 h-5 text-[#60a5fa]" /> :
                       <MapPin className="w-5 h-5 text-[#60a5fa]" />
                      }
                    </div>
                    <div className="flex items-center gap-2">
                      {event.virtual && (
                        <Badge variant="outline" className="text-[10px] border-[#4ade80]/30 text-[#4ade80]">
                          <Video className="w-3 h-3 mr-1" /> Virtual
                        </Badge>
                      )}
                      <Badge className="text-[10px] bg-[#60a5fa]/20 text-[#60a5fa] border-0">{event.type}</Badge>
                    </div>
                  </div>
                  <h4 className="font-semibold text-sm mb-2">{event.title}</h4>
                  <div className="space-y-1.5 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-2"><Calendar className="w-3 h-3" /> {event.date}</div>
                    <div className="flex items-center gap-2"><MapPin className="w-3 h-3" /> {event.location}</div>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-[rgba(96,165,250,0.1)]">
                    <div>
                      <p className="text-sm font-bold text-[#60a5fa]">{event.price}</p>
                      <p className="text-[10px] text-muted-foreground">{event.registered}/{event.capacity} peserta</p>
                    </div>
                    <NeonButton size="sm" variant="outline" style={{ color: '#60a5fa' }}>Daftar</NeonButton>
                  </div>
                  <div className="mt-2 w-full h-1.5 rounded-full bg-[rgba(96,165,250,0.1)]">
                    <div className="h-full rounded-full bg-[#60a5fa]" style={{ width: `${(event.registered / event.capacity) * 100}%` }} />
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="training" className="space-y-4">
          <h3 className="text-sm font-semibold">Program Pelatihan</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.filter(s => s.category.includes('Pelatihan')).map((training) => (
              <GlassCard key={training.id}>
                <div className="p-3 rounded-lg bg-[#60a5fa]/5 mb-3 text-center">
                  <GraduationCap className="w-8 h-8 text-[#60a5fa] mx-auto mb-1" />
                  <Badge variant="outline" className="text-[10px] border-[#60a5fa]/30 text-[#60a5fa]">{training.kbli}</Badge>
                </div>
                <h4 className="font-semibold text-sm mb-1">{training.name}</h4>
                <p className="text-xs text-muted-foreground mb-2">{training.provider} • {training.duration}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-[#60a5fa]">{training.price}</span>
                  <div className="flex items-center gap-1 text-xs"><Star className="w-3 h-3 fill-[#d4a843] text-[#d4a843]" /> {training.rating}</div>
                </div>
              </GlassCard>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="ratings" className="space-y-4">
          <h3 className="text-sm font-semibold">Top Konsultan & Trainer</h3>
          <div className="space-y-3">
            {[
              { name: 'Dr. Wirono, SE.M.Pd', specialty: 'Manajemen Strategis', rating: 4.9, sessions: 142, avatar: 'W' },
              { name: 'Ir. Budi Santoso', specialty: 'Teknis Kelapa Sawit', rating: 4.8, sessions: 98, avatar: 'B' },
              { name: 'Bagas Raffy Raditya, S.H.', specialty: 'Hukum Bisnis', rating: 4.9, sessions: 67, avatar: 'R' },
              { name: 'HSE Team PT JAC', specialty: 'Keselamatan Kerja', rating: 4.6, sessions: 156, avatar: 'H' },
            ].map((consultant, i) => (
              <GlassCard key={i}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#60a5fa]/10 flex items-center justify-center text-[#60a5fa] font-bold text-lg">
                    {consultant.avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{consultant.name}</h4>
                    <p className="text-xs text-muted-foreground">{consultant.specialty}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="w-4 h-4 fill-[#d4a843] text-[#d4a843]" />
                      <span className="font-bold">{consultant.rating}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{consultant.sessions} sesi</p>
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
