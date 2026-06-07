// Company Data from Akta Pendirian PT JIWA ABDI CINTA
// Akta No. 310, 21 April 2022, Jakarta Selatan

export const COMPANY = {
  name: 'PT JIWA ABDI CINTA',
  shortName: 'JAC',
  aktaNumber: '310',
  aktaDate: '21 April 2022',
  location: 'Jakarta Selatan',
  notaris: 'Bagas Raffy Raditya, S.H.',
  modalDasar: 'Rp 20.000.000.000',
  modalDisetor: 'Rp 5.000.000.000',
  jumlahSaham: '10.000 lembar',
  nilaiNominal: 'Rp 2.000.000',
  sahamDitempatkan: '2.500 lembar',
}

export const SHAREHOLDERS = [
  {
    name: 'Wirono, SE.M.Pd',
    shares: '50%',
    position: 'Direktur Utama',
    birthPlace: 'Pekalongan',
    birthDate: '24 Mei 1970',
    nationality: 'WNI',
    occupation: 'Dosen',
    address: 'Apartemen Centra Timur Residence Tower Orange 1, Jakarta Timur',
  },
  {
    name: 'Purwanto',
    shares: '10%',
    position: 'Direktur',
    birthPlace: 'Bekasi',
    birthDate: '19 Juli 1988',
    nationality: 'WNI',
    occupation: 'Karyawan Swasta',
    address: 'Asr Yon Ang Air, Jakarta Utara',
  },
  {
    name: 'Edy Kurniawan',
    shares: '10%',
    position: 'Direktur',
    birthPlace: 'Bekasi',
    birthDate: '22 Januari 1987',
    nationality: 'WNI',
    occupation: 'Karyawan Swasta',
    address: 'KP. Pondok Rajeg, Kabupaten Bogor',
  },
  {
    name: 'Tegar Ramadhan Wiroputro',
    shares: '30%',
    position: 'Komisaris',
    birthPlace: 'Jakarta',
    birthDate: '14 November 2002',
    nationality: 'WNI',
    occupation: 'Partikelir',
    address: 'Komp Diskum AD Blok O/7, Jakarta Timur',
  },
]

export const MODULES = [
  {
    id: 'perdagangan',
    name: 'Perdagangan',
    subtitle: 'Marketplace & Trading',
    icon: 'Package',
    color: '#d4a843',
    description: 'Ekspor, impor, supplier, distributor — perdagangan mesin, bahan baku sawit, dan komoditas strategis.',
    kblis: ['46100', '71102', '46599', '47911', '46202'],
    kbliNames: [
      'Perdagangan Besar Atas Dasar Balas Jasa (Fee) Atau Kontrak',
      'Aktivitas Keinsinyuran dan Konsultasi Teknis YBDI',
      'Perdagangan Besar Mesin, Peralatan Dan Perlengkapan Lainnya',
      'Perdagangan Eceran Melalui Media Untuk Komoditi Makanan, Minuman, Tembakau, Kimia, Farmasi, Kosmetik Dan Alat Laboratorium',
      'Perdagangan Besar Buah Yang Mengandung Minyak',
    ],
  },
  {
    id: 'jasa',
    name: 'Jasa',
    subtitle: 'Consulting & MICE',
    icon: 'Briefcase',
    color: '#60a5fa',
    description: 'Konsultasi manajemen, MICE, pelatihan kerja — jasa profesional untuk pertumbuhan bisnis.',
    kblis: ['70209', '82301', '78439', '78435'],
    kbliNames: [
      'Aktivitas Konsultasi Manajemen Lainnya',
      'Jasa Penyelenggara Pertemuan, Perjalanan Insentif, Konferensi dan Pameran (MICE)',
      'Pelatihan Kerja Perusahaan Lainnya',
      'Pelatihan Kerja Bisnis dan Manajemen Perusahaan',
    ],
  },
  {
    id: 'konstruksi',
    name: 'Konstruksi',
    subtitle: 'Construction & Tender',
    icon: 'Building2',
    color: '#f97316',
    description: 'Tender proyek, konstruksi gedung & sipil, irigasi, jembatan — pembangunan infrastruktur.',
    kblis: ['41019', '42102', '41012', '42201', '42209', '42202'],
    kbliNames: [
      'Konstruksi Gedung Lainnya',
      'Konstruksi Bangunan Sipil Jembatan, Jalan Layang, Fly Over, dan Underpass',
      'Konstruksi Gedung Perkantoran',
      'Konstruksi Jaringan Irigasi dan Drainase',
      'Konstruksi Jaringan Irigasi, Komunikasi, dan Limbah Lainnya',
      'Konstruksi Bangunan Sipil Pengolahan Air Bersih',
    ],
  },
  {
    id: 'industri',
    name: 'Industri',
    subtitle: 'Palm Oil & CPO Trading',
    icon: 'Factory',
    color: '#4ade80',
    description: 'Trading CPO, minyak goreng, fraksinasi — industri hilir kelapa sawit terintegrasi.',
    kblis: ['10433', '10434', '10435', '10436', '10437'],
    kbliNames: [
      'Industri Pemisahan/Fraksinasi Minyak Mentah Kelapa Sawit dan Minyak Mentah Inti Kelapa Sawit',
      'Industri Pemurnian Minyak Mentah Kelapa Sawit dan Minyak Mentah Inti Kelapa Sawit',
      'Industri Pemisahan/Fraksinasi Minyak Murni Kelapa Sawit',
      'Industri Pemisahan/Fraksinasi Minyak Murni Inti Kelapa Sawit',
      'Industri Minyak Goreng Kelapa Sawit',
    ],
  },
  {
    id: 'pertanian',
    name: 'Pertanian, Kehutanan & Perikanan',
    subtitle: 'Agriculture & Fishery',
    icon: 'Leaf',
    color: '#22d3ee',
    description: 'Perkebunan sawit, kehutanan, perikanan — manajemen agrikultur terintegrasi & sertifikasi.',
    kblis: ['01262'],
    kbliNames: [
      'Perkebunan Buah Kelapa Sawit',
    ],
  },
  {
    id: 'perizinan',
    name: 'Perizinan & Sertifikasi',
    subtitle: 'Licensing & Certification',
    icon: 'ShieldCheck',
    color: '#a78bfa',
    description: 'Pengajuan izin usaha, sertifikasi digital — legalitas di 5 bidang usaha untuk pihak ketiga.',
    kblis: ['ALL'],
    kbliNames: [
      'Seluruh KBLI sesuai Pasal 3 Akta Pendirian',
    ],
  },
]

export const ROLES = [
  { id: 'super_admin', name: 'Super Admin', description: 'Akses semua modul & data', defaultUser: 'Wirono' },
  { id: 'admin_perdagangan', name: 'Admin Perdagangan', description: 'Mengelola modul perdagangan', defaultUser: '' },
  { id: 'admin_jasa', name: 'Admin Jasa', description: 'Mengelola modul jasa', defaultUser: '' },
  { id: 'admin_konstruksi', name: 'Admin Konstruksi', description: 'Mengelola modul konstruksi', defaultUser: '' },
  { id: 'admin_industri', name: 'Admin Industri', description: 'Mengelola modul industri', defaultUser: '' },
  { id: 'admin_pertanian', name: 'Admin Pertanian', description: 'Mengelola modul pertanian', defaultUser: '' },
  { id: 'admin_perizinan', name: 'Admin Perizinan', description: 'Mengelola modul perizinan', defaultUser: '' },
  { id: 'mitra', name: 'Mitra/Supplier/Kontraktor', description: 'Listing produk, ikut tender', defaultUser: '' },
  { id: 'pelanggan', name: 'Pelanggan', description: 'Beli produk, booking jasa, ajukan sertifikasi', defaultUser: '' },
  { id: 'notaris', name: 'Notaris', description: 'Verifikasi legalitas dokumen perizinan', defaultUser: 'Bagas Raffy Raditya' },
]

// Sample data for demo
export const SAMPLE_STATS = {
  totalRevenue: 287_500_000_000,
  totalTransactions: 12_847,
  activePartners: 342,
  activeProjects: 28,
  cpoPriceToday: 14_850_000,
  cpoPriceChange: 2.3,
  plantationArea: 5_200,
  pendingPermits: 47,
}

export const COMMODITY_PRICES = [
  { name: 'CPO', price: 14850000, change: 2.3, unit: 'Rp/ton' },
  { name: 'Minyak Goreng', price: 16200000, change: -0.8, unit: 'Rp/ton' },
  { name: 'Olein', price: 15500000, change: 1.5, unit: 'Rp/ton' },
  { name: 'Stearin', price: 13200000, change: -1.2, unit: 'Rp/ton' },
  { name: 'PKO', price: 18900000, change: 3.1, unit: 'Rp/ton' },
  { name: 'Fraksinasi', price: 14700000, change: 0.7, unit: 'Rp/ton' },
]

export const MONTHLY_REVENUE = [
  { month: 'Jan', perdagangan: 42, jasa: 18, konstruksi: 35, industri: 58, pertanian: 22 },
  { month: 'Feb', perdagangan: 38, jasa: 22, konstruksi: 40, industri: 62, pertanian: 24 },
  { month: 'Mar', perdagangan: 45, jasa: 25, konstruksi: 38, industri: 55, pertanian: 28 },
  { month: 'Apr', perdagangan: 50, jasa: 20, konstruksi: 42, industri: 60, pertanian: 26 },
  { month: 'Mei', perdagangan: 48, jasa: 28, konstruksi: 45, industri: 65, pertanian: 30 },
  { month: 'Jun', perdagangan: 52, jasa: 32, konstruksi: 48, industri: 70, pertanian: 32 },
  { month: 'Jul', perdagangan: 55, jasa: 30, konstruksi: 52, industri: 68, pertanian: 35 },
  { month: 'Agu', perdagangan: 58, jasa: 35, konstruksi: 50, industri: 72, pertanian: 33 },
  { month: 'Sep', perdagangan: 53, jasa: 38, konstruksi: 55, industri: 75, pertanian: 36 },
  { month: 'Okt', perdagangan: 60, jasa: 40, konstruksi: 58, industri: 78, pertanian: 38 },
  { month: 'Nov', perdagangan: 62, jasa: 42, konstruksi: 60, industri: 82, pertanian: 40 },
  { month: 'Des', perdagangan: 65, jasa: 45, konstruksi: 65, industri: 85, pertanian: 42 },
]
