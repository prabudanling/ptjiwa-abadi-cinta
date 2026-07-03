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
]

export const ROLES = [
  { id: 'super_admin', name: 'Super Admin', description: 'Akses semua modul & data', defaultUser: 'Wirono' },
  { id: 'admin_perdagangan', name: 'Admin Perdagangan', description: 'Mengelola modul perdagangan', defaultUser: 'Purwanto' },
  { id: 'admin_jasa', name: 'Admin Jasa', description: 'Mengelola modul jasa', defaultUser: 'Tegar Ramadhan Wiroputro' },
  { id: 'admin_konstruksi', name: 'Admin Konstruksi', description: 'Mengelola modul konstruksi', defaultUser: 'Edy Kurniawan' },
  { id: 'admin_industri', name: 'Admin Industri', description: 'Mengelola modul industri', defaultUser: 'Wirono' },
  { id: 'admin_pertanian', name: 'Admin Pertanian', description: 'Mengelola modul pertanian', defaultUser: 'Edy Kurniawan' },
  { id: 'mitra', name: 'Mitra/Supplier/Kontraktor', description: 'Listing produk, ikut tender', defaultUser: '' },
  { id: 'pelanggan', name: 'Pelanggan', description: 'Beli produk, booking jasa', defaultUser: '' },
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
  factoriesActive: 3,
  warehouseCapacity: 10_000,
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

// Public-facing data for landing page
export const PUBLIC_INSIGHTS = [
  {
    id: '1',
    category: 'Industri Sawit',
    categoryColor: '#2D6A4F',
    title: 'Masa Depan Industri Sawit Indonesia 2025',
    excerpt: 'Analisis mendalam tentang tren, tantangan, dan peluang industri kelapa sawit di pasar global yang semakin kompetitif.',
    date: '15 Desember 2024',
    readTime: '8 menit',
    featured: true,
  },
  {
    id: '2',
    category: 'Konstruksi',
    categoryColor: '#C75B39',
    title: 'Infrastruktur Berkelanjutan: Tren Konstruksi Hijau 2025',
    excerpt: 'Bagaimana praktik konstruksi ramah lingkungan dan material berkelanjutan membentuk masa depan infrastruktur Indonesia.',
    date: '10 Desember 2024',
    readTime: '7 menit',
  },
  {
    id: '3',
    category: 'Strategi',
    categoryColor: '#1E3A5F',
    title: 'Strategi Pertumbuhan Bisnis di Era AI',
    excerpt: 'Memanfaatkan kecerdasan buatan untuk mendorong pertumbuhan bisnis yang berkelanjutan dan kompetitif.',
    date: '5 Desember 2024',
    readTime: '10 menit',
  },
  {
    id: '4',
    category: 'Perdagangan',
    categoryColor: '#B8860B',
    title: 'Rantai Pasok Global: Ketahanan di Tenga Ketidakpastian',
    excerpt: 'Membangun ketahanan rantai pasok melalui diversifikasi, digitalisasi, dan kemitraan strategis lintas wilayah.',
    date: '28 November 2024',
    readTime: '6 menit',
  },
  {
    id: '5',
    category: 'Pertanian',
    categoryColor: '#1B7A6E',
    title: 'Sawit Berkelanjutan: Menuju Sertifikasi ISPO & RSPO',
    excerpt: 'Perjalanan transformasi perkebunan kelapa sawit menuju praktik berkelanjutan dan sertifikasi internasional.',
    date: '22 November 2024',
    readTime: '9 menit',
  },
  {
    id: '6',
    category: 'Jasa',
    categoryColor: '#1E3A5F',
    title: 'MICE Pasca-Pandemi: Hibrid sebagai Standar Baru',
    excerpt: 'Evolusi industri pertemuan, perjalanan insentif, konferensi, dan pameran menuju format hibrida yang efisien.',
    date: '15 November 2024',
    readTime: '5 menit',
  },
  {
    id: '7',
    category: 'Industri Sawit',
    categoryColor: '#2D6A4F',
    title: 'Volatilitas Harga CPO: Strategi Hedging untuk Trader',
    excerpt: 'Instrument dan pendekatan manajemen risiko untuk mengelola volatilitas harga minyak sawit mentah.',
    date: '8 November 2024',
    readTime: '8 menit',
  },
  {
    id: '8',
    category: 'Konstruksi',
    categoryColor: '#C75B39',
    title: 'Tender Pemerintah: Panduan Menjadi Pemenang',
    excerpt: 'Strategi menyusun proposal tender yang kompetitif dan kepatuhan terhadap regulasi pengadaan publik.',
    date: '1 November 2024',
    readTime: '7 menit',
  },
  {
    id: '9',
    category: 'Strategi',
    categoryColor: '#1E3A5F',
    title: 'Transformasi Digital Korporat: Peta Jalan 2025',
    excerpt: 'Langkah praktis mengadopsi teknologi digital untuk efisiensi operasional dan pengalaman pelanggan.',
    date: '25 Oktober 2024',
    readTime: '11 menit',
  },
]

export const TRUST_LOGOS = [
  'PT Maju Jaya',
  'Bank Nasional',
  'Grup Sawit Nusantara',
  'Kementerian PUPR',
  'Universitas Indonesia',
]

export const CAREERS = [
  { id: 'c1', title: 'Business Development Manager', department: 'Perdagangan', location: 'Jakarta', type: 'Full-time', level: 'Mid-Senior', summary: 'Mengembangkan kanal penjualan komoditas dan memperluas jaringan mitra distributor.' },
  { id: 'c2', title: 'Civil Engineer', department: 'Konstruksi', location: 'Surabaya', type: 'Full-time', level: 'Mid-Senior', summary: 'Mengawasi pelaksanaan proyek konstruksi gedung & sipil sesuai standar mutu dan keselamatan.' },
  { id: 'c3', title: 'CPO Trading Analyst', department: 'Industri', location: 'Jakarta', type: 'Full-time', level: 'Mid-Senior', summary: 'Menganalisis pasar CPO global dan merekomendasikan strategi trading yang menguntungkan.' },
  { id: 'c4', title: 'Management Consultant', department: 'Jasa', location: 'Jakarta', type: 'Full-time', level: 'Senior', summary: 'Memberikan konsultasi strategis kepada klien korporat di berbagai sektor industri.' },
  { id: 'c5', title: 'Plantation Manager', department: 'Pertanian', location: 'Riau', type: 'Full-time', level: 'Senior', summary: 'Mengelola operasional perkebunan kelapa sawit untuk produktivitas dan keberlanjutan optimal.' },
  { id: 'c6', title: 'Supply Chain Specialist', department: 'Perdagangan', location: 'Medan', type: 'Full-time', level: 'Associate', summary: 'Mengoordinasikan logistik ekspor-impor dan manajemen gudang komoditas.' },
  { id: 'c7', title: 'MICE Event Coordinator', department: 'Jasa', location: 'Jakarta', type: 'Contract', level: 'Mid-Senior', summary: 'Merencanakan dan mengeksekusi konferensi, pameran, dan program insentif perusahaan.' },
  { id: 'c8', title: 'Finance & Accounting Officer', department: 'Korporat', location: 'Jakarta', type: 'Full-time', level: 'Associate', summary: 'Mengelola pembukuan, pelaporan keuangan, dan kepatuhan pajak lintas modul bisnis.' },
]

// Public-facing services data (refined colors, no KBLI codes)
export const PUBLIC_SERVICES = [
  {
    id: 'perdagangan',
    name: 'Perdagangan',
    subtitle: 'Marketplace & Trading',
    icon: 'Package',
    color: '#B8860B',
    description: 'Ekspor, impor, dan distribusi komoditas strategis — perdagangan mesin, bahan baku sawit, dan produk industri.',
  },
  {
    id: 'jasa',
    name: 'Jasa & Konsultasi',
    subtitle: 'Consulting & MICE',
    icon: 'Briefcase',
    color: '#1E3A5F',
    description: 'Konsultasi manajemen, penyelenggaraan MICE, dan pelatihan profesional untuk pertumbuhan bisnis.',
  },
  {
    id: 'konstruksi',
    name: 'Konstruksi',
    subtitle: 'Construction & Tender',
    icon: 'Building2',
    color: '#C75B39',
    description: 'Tender proyek, konstruksi gedung & sipil, irigasi, jembatan — pembangunan infrastruktur terpercaya.',
  },
  {
    id: 'industri',
    name: 'Industri Sawit',
    subtitle: 'Palm Oil & CPO Trading',
    icon: 'Factory',
    color: '#2D6A4F',
    description: 'Trading CPO, minyak goreng, dan fraksinasi — industri hilir kelapa sawit terintegrasi.',
  },
  {
    id: 'pertanian',
    name: 'Pertanian & Perikanan',
    subtitle: 'Agriculture & Fishery',
    icon: 'Leaf',
    color: '#1B7A6E',
    description: 'Perkebunan sawit, kehutanan, perikanan — manajemen agrikultur terintegrasi & sertifikasi.',
  },
]

/* ============================================================
   TENTANG KAMI — Visi, Misi, Nilai, Struktur Organisasi
   ============================================================ */

export const VISION = 'Menjadi konglomerasi bisnis terintegrasi terkemuka di Indonesia yang menghubungkan hulu ke hilir — dari perkebunan, industri, perdagangan, jasa, hingga konstruksi — dengan komitmen pada keberlanjutan, integritas, dan kepedulian.'

export const MISSION = [
  'Menyediakan ekosistem bisnis terintegrasi yang efisien dan tepercaya lintas lima bidang usaha.',
  'Mengedepankan praktik berkelanjutan dan sertifikasi di seluruh rantai nilai kelapa sawit.',
  'Membangun kemitraan jangka panjang yang saling menguntungkan dengan mitra, supplier, dan klien.',
  'Mengembangkan kapasitas sumber daya manusia Indonesia melalui pelatihan dan konsultasi profesional.',
  'Berkontribusi pada pertumbuhan ekonomi nasional melalui investasi infrastruktur dan industri.',
]

export const COMPANY_VALUES = [
  { id: 'v1', name: 'Integritas', icon: 'ShieldCheck', color: '#0D503C', description: 'Setiap keputusan dan tindakan dilandasi kejujuran, transparansi, dan kepatuhan hukum.' },
  { id: 'v2', name: 'Abdi', icon: 'Handshake', color: '#B8860B', description: 'Mengabdi pada kepentingan klien, mitra, dan masyarakat dengan dedikasi tanpa batas.' },
  { id: 'v3', name: 'Cinta', icon: 'Heart', color: '#C75B39', description: 'Mengutamakan kepedulian pada manusia, lingkungan, dan keberlanjutan dalam berbisnis.' },
  { id: 'v4', name: 'Kolaborasi', icon: 'Users', color: '#1E3A5F', description: 'Membangun sinergi lintas divisi dan mitra untuk menciptakan nilai yang lebih besar.' },
  { id: 'v5', name: 'Keberlanjutan', icon: 'Leaf', color: '#1B7A6E', description: 'Berkomitmen pada praktik agrikultur dan industri yang ramah lingkungan dan bertanggung jawab.' },
  { id: 'v6', name: 'Inovasi', icon: 'Lightbulb', color: '#2D6A4F', description: 'Terus berinovasi dalam layanan, proses, dan teknologi untuk tetap relevan dan kompetitif.' },
]

/* Struktur Organisasi — berdasarkan Akta Pendirian No. 310 */
export const ORG_STRUCTURE = {
  tiers: [
    {
      tier: 'Rapat Umum Pemegang Saham',
      description: 'Organ tertinggi yang menetapkan arah strategis perusahaan',
      members: [
        { name: 'Wirono, SE.M.Pd', role: 'Pemegang Saham 50%' },
        { name: 'Tegar Ramadhan Wiroputro', role: 'Pemegang Saham 30%' },
        { name: 'Purwanto', role: 'Pemegang Saham 10%' },
        { name: 'Edy Kurniawan', role: 'Pemegang Saham 10%' },
      ],
    },
    {
      tier: 'Dewan Komisaris',
      description: 'Pengawas tata kelola dan arah kebijakan perusahaan',
      members: [
        { name: 'Tegar Ramadhan Wiroputro', role: 'Komisaris Utama' },
      ],
    },
    {
      tier: 'Direksi',
      description: 'Pelaksana tata kelola dan pengurus harian perusahaan',
      members: [
        { name: 'Wirono, SE.M.Pd', role: 'Direktur Utama' },
        { name: 'Purwanto', role: 'Direktur Operasional' },
        { name: 'Edy Kurniawan', role: 'Direktur Bisnis & Keuangan' },
      ],
    },
    {
      tier: 'Kepala Divisi',
      description: 'Pemimpin unit operasional lima bidang usaha',
      members: [
        { name: 'Purwanto', role: 'Kepala Divisi Perdagangan & Supply Chain', dept: 'perdagangan' },
        { name: 'Tegar Ramadhan Wiroputro', role: 'Kepala Divisi Jasa & Konsultasi', dept: 'jasa' },
        { name: 'Edy Kurniawan', role: 'Kepala Divisi Konstruksi', dept: 'konstruksi' },
        { name: 'Wirono, SE.M.Pd', role: 'Kepala Divisi Industri Sawit', dept: 'industri' },
        { name: 'Edy Kurniawan', role: 'Kepala Divisi Pertanian', dept: 'pertanian' },
      ],
    },
  ],
}

export const LEADERSHIP = [
  {
    name: 'Wirono, SE.M.Pd',
    position: 'Direktur Utama',
    shares: '50%',
    bio: 'Akademisi dan praktisi bisnis dengan dedikasi pada pengembangan ekosistem industri sawit terintegrasi. Memimpin visi strategis JAC.',
    focus: ['Strategi Korporat', 'Industri Sawit', 'Tata Kelola'],
  },
  {
    name: 'Tegar Ramadhan Wiroputro',
    position: 'Komisaris Utama',
    shares: '30%',
    bio: 'Pengawas tata kelola dengan keahlian dalam pengembangan jasa profesional dan layanan konsultasi strategis.',
    focus: ['Tata Kelola', 'Jasa & Konsultasi', 'Kepatuhan'],
  },
  {
    name: 'Purwanto',
    position: 'Direktur Operasional',
    shares: '10%',
    bio: 'Mengarahkan operasional harian dan rantai pasok perdagangan komoditas lintas wilayah Indonesia.',
    focus: ['Operasional', 'Perdagangan', 'Supply Chain'],
  },
  {
    name: 'Edy Kurniawan',
    position: 'Direktur Bisnis & Keuangan',
    shares: '10%',
    bio: 'Mengelola keuangan korporat dan mengawasi pertumbuhan divisi konstruksi serta pertanian berkelanjutan.',
    focus: ['Keuangan', 'Konstruksi', 'Pertanian'],
  },
]

export const TIMELINE = [
  { year: '2022', title: 'Pendirian PT Jiwa Abdi Cinta', description: 'Akta Pendirian No. 310 ditandatangani di Jakarta Selatan pada 21 April 2022 oleh empat pemegang saham pendiri.' },
  { year: '2022', title: 'Konfigurasi Lima Bidang Usaha', description: 'Penetapan lima bidang usaha inti: perdagangan, jasa, konstruksi, industri sawit, dan pertanian dengan 17+ KBLI terdaftar.' },
  { year: '2023', title: 'Ekspansi Operasional', description: 'Pembukaan pabrik fraksinasi di Riau, gudang komoditas strategis, dan perkebunan kelapa sawit di Kalimantan Timur.' },
  { year: '2023', title: 'Kemitraan Strategis', description: 'Membangun jaringan 340+ mitra, supplier, dan kontraktor terverifikasi lintas wilayah Indonesia.' },
  { year: '2024', title: 'Digitalisasi Super App', description: 'Peluncuran platform digital terintegrasi yang menyatukan seluruh modul bisnis dalam satu ekosistem.' },
  { year: '2024', title: 'Komitmen Keberlanjutan', description: 'Percepatan sertifikasi ISPO & RSPO serta praktik agrikultur dan konstruksi berkelanjutan di seluruh operasional.' },
]

export const LEGAL_FOUNDATION = {
  aktaNumber: '310',
  aktaDate: '21 April 2022',
  notaris: 'Bagas Raffy Raditya, S.H.',
  location: 'Jakarta Selatan',
  modalDasar: 'Rp 20.000.000.000',
  modalDisetor: 'Rp 5.000.000.000',
  jumlahSaham: '10.000 lembar',
  nilaiNominal: 'Rp 2.000.000',
  sahamDitempatkan: '2.500 lembar',
  kbliCount: '17+',
  bidangUsaha: '5 bidang usaha terintegrasi',
}

export const DIFFERENTIATORS = [
  { id: 'd1', title: 'Ekosistem Terintegrasi', description: 'Lima bidang usaha dalam satu atap — dari hulu perkebunan hingga hilir industri dan distribusi.', icon: 'Network' },
  { id: 'd2', title: 'Keberlanjutan Terbukti', description: 'Sertifikasi ISPO, RSPO, FSC, dan PEFC di seluruh operasional agrikultur dan kehutanan.', icon: 'Leaf' },
  { id: 'd3', title: 'Jaringan Mitra Luas', description: '340+ mitra, supplier, dan kontraktor terverifikasi yang tersebar di seluruh Indonesia.', icon: 'Users' },
  { id: 'd4', title: 'Landasan Hukum Kuat', description: 'Perseroan berbadan hukum dengan Akta Notaris No. 310 dan 17+ KBLI terdaftar resmi.', icon: 'Scale' },
]

/* ============================================================
   KONTAK — Departemen & info
   ============================================================ */

export const CONTACT_DEPARTMENTS = [
  { id: 'perdagangan', name: 'Perdagangan & Supply Chain', email: 'perdagangan@jiwaabdicinta.co.id', phone: '+62 21 5555 0311', description: 'Pertanyaan produk, pesanan, dan logistik komoditas.' },
  { id: 'jasa', name: 'Jasa & Konsultasi', email: 'jasa@jiwaabdicinta.co.id', phone: '+62 21 5555 0312', description: 'Konsultasi manajemen, MICE, dan pelatihan profesional.' },
  { id: 'konstruksi', name: 'Konstruksi & Tender', email: 'konstruksi@jiwaabdicinta.co.id', phone: '+62 21 5555 0313', description: 'Tender proyek, konstruksi gedung & sipil, serta pengawasan.' },
  { id: 'industri', name: 'Industri Sawit & CPO', email: 'industri@jiwaabdicinta.co.id', phone: '+62 21 5555 0314', description: 'Trading CPO, minyak goreng, dan fraksinasi.' },
  { id: 'pertanian', name: 'Pertanian & Perikanan', email: 'pertanian@jiwaabdicinta.co.id', phone: '+62 21 5555 0315', description: 'Perkebunan sawit, kehutanan, dan perikanan terintegrasi.' },
  { id: 'korporat', name: 'Korporat & Umum', email: 'info@jiwaabdicinta.co.id', phone: '+62 21 5555 0310', description: 'Kemitraan, media, dan pertanyaan umum.' },
]

export const OFFICE_INFO = {
  address: 'Jakarta Selatan, DKI Jakarta, Indonesia',
  email: 'info@jiwaabdicinta.co.id',
  phone: '+62 21 5555 0310',
  hours: 'Senin – Jumat, 09.00 – 17.00 WIB',
}

export const CAREER_BENEFITS = [
  { title: 'Pengembangan Karir', description: 'Jalur karir jelas dan peluang rotasi lintas lima divisi bisnis.', icon: 'TrendingUp' },
  { title: 'Pelatihan Berkelanjutan', description: 'Program pelatihan internal dan eksternal untuk peningkatan kompetensi.', icon: 'GraduationCap' },
  { title: 'Kesehatan & Kesejahteraan', description: 'Asuransi kesehatan untuk karyawan dan keluarga, serta program kesejahteraan.', icon: 'HeartPulse' },
  { title: 'Lingkungan Inklusif', description: 'Budaya kerja yang menghargai keberagaman, kolaborasi, dan integritas.', icon: 'Users' },
  { title: 'Insentif Berprestasi', description: 'Sistem bonus dan penghargaan berbasis kinerja dan kontribusi.', icon: 'Award' },
  { title: 'Keseimbangan Hidup', description: 'Kebijakan cuti fleksibel dan program work-life balance.', icon: 'Clock' },
]

export const INSIGHT_CATEGORIES = ['Semua', 'Industri Sawit', 'Konstruksi', 'Perdagangan', 'Pertanian', 'Jasa', 'Strategi']

