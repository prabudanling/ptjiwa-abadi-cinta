import { db } from './src/lib/db'

async function seed() {
  console.log('🌱 Seeding database for PT JIWA ABDI CINTA Super App...')

  // Create users
  const wirono = await db.user.create({
    data: { email: 'wirono@jiwaabdicinta.co.id', name: 'Wirono, SE.M.Pd', role: 'super_admin', phone: '081234567890' }
  })
  const purwanto = await db.user.create({
    data: { email: 'purwanto@jiwaabdicinta.co.id', name: 'Purwanto', role: 'admin_perdagangan', phone: '081234567891' }
  })
  const edy = await db.user.create({
    data: { email: 'edy@jiwaabdicinta.co.id', name: 'Edy Kurniawan', role: 'admin_konstruksi', phone: '081234567892' }
  })
  const tegar = await db.user.create({
    data: { email: 'tegar@jiwaabdicinta.co.id', name: 'Tegar Ramadhan Wiroputro', role: 'admin_jasa', phone: '081234567893' }
  })
  const mitra1 = await db.user.create({
    data: { email: 'info@majujaya.co.id', name: 'PT Maju Jaya Abadi', role: 'mitra', phone: '081234567895' }
  })
  const mitra2 = await db.user.create({
    data: { email: 'info@globalpalm.co.id', name: 'PT Global Palm Indonesia', role: 'mitra', phone: '081234567896' }
  })
  const pelanggan1 = await db.user.create({
    data: { email: 'budi@example.com', name: 'Budi Santoso', role: 'pelanggan', phone: '081234567897' }
  })

  // Create products (Perdagangan)
  await db.product.createMany({
    data: [
      { name: 'CPO (Crude Palm Oil)', description: 'Minyak kelapa sawit mentah berkualitas tinggi', category: 'bahan_baku_sawit', kbliCode: '46202', price: 14850000, unit: 'ton', stock: 2500, sellerId: wirono.id, isVerified: true },
      { name: 'TBS Kelapa Sawit', description: 'Tandan Buah Segar kelapa sawit', category: 'bahan_baku_sawit', kbliCode: '46202', price: 2850000, unit: 'ton', stock: 15000, sellerId: wirono.id, isVerified: true },
      { name: 'Minyak Goreng B2B', description: 'Minyak goreng kemasan industri', category: 'ekspor', kbliCode: '47911', price: 16200000, unit: 'ton', stock: 800, sellerId: purwanto.id, isVerified: true },
    ]
  })

  // Create services (Jasa)
  await db.service.createMany({
    data: [
      { name: 'Konsultasi Manajemen Strategis', description: 'Layanan konsultasi manajemen untuk perusahaan', category: 'konsultasi_manajemen', kbliCode: '70209', price: 5000000, duration: '2 jam', provider: 'Dr. Wirono, SE.M.Pd', rating: 4.9, reviewCount: 47, isOnline: true },
      { name: 'Pelatihan Manajemen Bisnis', description: 'Program pelatihan bisnis dan manajemen', category: 'pelatihan', kbliCode: '78435', price: 15000000, duration: '3 hari', provider: 'Team PT JAC', rating: 4.7, reviewCount: 89, isOnline: false },
      { name: 'MICE Conference', description: 'Penyelenggaraan konferensi dan pameran', category: 'mice', kbliCode: '82301', price: 2500000, duration: '1 hari', provider: 'PT JAC Events', rating: 4.8, reviewCount: 156, isOnline: true },
    ]
  })

  // Create MICE events
  await db.mICEEvent.createMany({
    data: [
      { title: 'Indonesia Palm Oil Summit 2024', description: 'Konferensi industri sawit terbesar di Indonesia', eventType: 'conference', startDate: new Date('2024-03-15'), endDate: new Date('2024-03-17'), location: 'Jakarta Convention Center', virtualLink: 'https://zoom.us/j/example', capacity: 500, registered: 342, ticketPrice: 5000000 },
      { title: 'Workshop Sustainable Plantation', description: 'Workshop pengelolaan perkebunan berkelanjutan', eventType: 'workshop', startDate: new Date('2024-03-22'), endDate: new Date('2024-03-22'), location: 'Online (Zoom)', virtualLink: 'https://zoom.us/j/example2', capacity: 100, registered: 78, ticketPrice: 1500000 },
    ]
  })

  // Create projects (Konstruksi)
  const project1 = await db.project.create({
    data: { title: 'Gedung Perkantoran Sudirman', description: 'Pembangunan gedung perkantoran 8 lantai', category: 'gedung', kbliCode: '41012', location: 'Jakarta Selatan', budgetEstimate: 45000000000, startDate: new Date('2023-06-01'), endDate: new Date('2024-08-30'), status: 'in_progress', progress: 72 }
  })

  const project2 = await db.project.create({
    data: { title: 'Jembatan Sungai Mahakam', description: 'Konstruksi jembatan penghubung', category: 'sipil', kbliCode: '42102', location: 'Kalimantan Timur', budgetEstimate: 120000000000, startDate: new Date('2024-01-15'), endDate: new Date('2025-12-30'), status: 'in_progress', progress: 15 }
  })

  // Create tenders
  await db.tender.createMany({
    data: [
      { projectId: project1.id, tenderNumber: 'TDR-2024-001', announcedDate: new Date('2024-01-01'), closingDate: new Date('2024-02-28'), status: 'open', requirements: 'SBU Besar, Pengalaman minimal 5 tahun' },
      { projectId: project2.id, tenderNumber: 'TDR-2024-002', announcedDate: new Date('2024-01-15'), closingDate: new Date('2024-03-15'), status: 'open', requirements: 'SBU Besar, Sertifikat KEA' },
    ]
  })

  // Create commodities (Industri)
  const cpo = await db.commodity.create({
    data: { name: 'CPO', category: 'cpo', kbliCode: '10433', currentPrice: 14850000, priceUnit: 'Rp/ton', priceChange: 2.3 }
  })
  await db.commodity.createMany({
    data: [
      { name: 'Minyak Goreng', category: 'minyak_goreng', kbliCode: '10437', currentPrice: 16200000, priceUnit: 'Rp/ton', priceChange: -0.8 },
      { name: 'Olein', category: 'olein', kbliCode: '10435', currentPrice: 15500000, priceUnit: 'Rp/ton', priceChange: 1.5 },
      { name: 'Stearin', category: 'stearin', kbliCode: '10436', currentPrice: 13200000, priceUnit: 'Rp/ton', priceChange: -1.2 },
      { name: 'PKO', category: 'inti_sawit', kbliCode: '10434', currentPrice: 18900000, priceUnit: 'Rp/ton', priceChange: 3.1 },
      { name: 'Fraksinasi', category: 'fraksinasi', kbliCode: '10433', currentPrice: 14700000, priceUnit: 'Rp/ton', priceChange: 0.7 },
    ]
  })

  // Create price history for CPO
  const months = ['Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des', 'Jan']
  const cpoPrices = [13200, 12800, 13500, 14100, 14500, 14200, 14850]
  for (let i = 0; i < months.length; i++) {
    await db.commodityPrice.create({
      data: { commodityId: cpo.id, price: cpoPrices[i] * 1000, date: new Date(2023, i + 6, 1) }
    })
  }

  // Create factories
  await db.factory.createMany({
    data: [
      { name: 'Pabrik Fraksinasi JAC 1', location: 'Riau', type: 'pabrik_fraksinasi', capacity: 500 },
      { name: 'Pabrik Minyak Goreng JAC', location: 'Medan', type: 'pabrik_minyak_goreng', capacity: 300 },
      { name: 'Pabrik Pemurnian JAC', location: 'Kalimantan', type: 'pabrik_pemurnian', capacity: 450 },
    ]
  })

  // Create warehouses
  await db.warehouse.createMany({
    data: [
      { name: 'Gudang CPO Riau', location: 'Riau', capacity: 5000, currentStock: 3200, commodityType: 'CPO' },
      { name: 'Gudang MG Medan', location: 'Medan', capacity: 3000, currentStock: 2100, commodityType: 'Minyak Goreng' },
      { name: 'Gudang Olein JKT', location: 'Jakarta', capacity: 2000, currentStock: 1500, commodityType: 'Olein' },
    ]
  })

  // Create plantations (Pertanian)
  const plantation1 = await db.plantation.create({
    data: { name: 'Kebun Sawit Riau Utara', location: 'Riau', area: 1200, cropType: 'kelapa_sawit', plantingYear: 2015, productivity: 4.2, certification: 'RSPO, ISPO' }
  })
  await db.plantation.createMany({
    data: [
      { name: 'Kebun Sawit Kalimantan Timur', location: 'Kalimantan Timur', area: 2500, cropType: 'kelapa_sawit', plantingYear: 2012, productivity: 3.8, certification: 'ISPO' },
      { name: 'Kebun Sawit Sumatera Utara', location: 'Sumatera Utara', area: 800, cropType: 'kelapa_sawit', plantingYear: 2018, productivity: 3.5, certification: 'ISPO' },
    ]
  })

  // Create harvest records
  const harvestQtys = [420, 380, 450, 480, 510, 490, 530]
  for (let i = 0; i < months.length; i++) {
    await db.harvestRecord.create({
      data: { plantationId: plantation1.id, date: new Date(2023, i + 6, 15), quantity: harvestQtys[i], quality: 'A' }
    })
  }

  // Create fisheries
  await db.fishery.createMany({
    data: [
      { name: 'Tambak Udang Vannamei', location: 'Lampung', type: 'tambak', species: 'Udang Vannamei', capacity: 50, production: 38, certification: 'ASC' },
      { name: 'KJA Ikan Nila', location: 'Jawa Barat', type: 'keramba_jaring_apung', species: 'Ikan Nila', capacity: 30, production: 25 },
    ]
  })

  // Create forests
  await db.forestry.createMany({
    data: [
      { name: 'HTI Eucalyptus Riau', location: 'Riau', area: 3000, forestType: 'hutan_tanaman_industri', species: 'Eucalyptus', certification: 'FSC' },
      { name: 'HTI Akasia Kalimantan', location: 'Kalimantan Barat', area: 2000, forestType: 'hutan_tanaman_industri', species: 'Akasia', certification: 'FSC, PEFC' },
    ]
  })

  // Create permit types & requests — DIHAPUS (modul Perizinan dihapus dari sistem)

  // Create audit logs
  await db.auditLog.createMany({
    data: [
      { userId: wirono.id, action: 'CREATE', module: 'perdagangan', details: 'Created product: CPO' },
      { userId: wirono.id, action: 'VIEW', module: 'dashboard', details: 'Viewed dashboard' },
      { userId: purwanto.id, action: 'UPDATE', module: 'perdagangan', details: 'Updated product stock: TBS Kelapa Sawit' },
    ]
  })

  console.log('✅ Seed completed successfully!')
  console.log(`   Created 7 users, products, services, projects, commodities, plantations`)
}

seed()
  .catch(console.error)
  .finally(() => db.$disconnect())
