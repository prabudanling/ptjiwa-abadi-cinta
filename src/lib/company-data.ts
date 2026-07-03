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
    categoryColor: '#8FB89B',
    title: 'Masa Depan Industri Sawit Indonesia 2025',
    excerpt: 'Analisis mendalam tentang tren, tantangan, dan peluang industri kelapa sawit di pasar global yang semakin kompetitif.',
    date: '15 Desember 2024',
    readTime: '8 menit',
    featured: true,
  },
  {
    id: '2',
    category: 'Konstruksi',
    categoryColor: '#D99B7A',
    title: 'Infrastruktur Berkelanjutan: Tren Konstruksi Hijau 2025',
    excerpt: 'Bagaimana praktik konstruksi ramah lingkungan dan material berkelanjutan membentuk masa depan infrastruktur Indonesia.',
    date: '10 Desember 2024',
    readTime: '7 menit',
  },
  {
    id: '3',
    category: 'Strategi',
    categoryColor: '#9B8FB8',
    title: 'Strategi Pertumbuhan Bisnis di Era AI',
    excerpt: 'Memanfaatkan kecerdasan buatan untuk mendorong pertumbuhan bisnis yang berkelanjutan dan kompetitif.',
    date: '5 Desember 2024',
    readTime: '10 menit',
  },
  {
    id: '4',
    category: 'Perdagangan',
    categoryColor: '#C9A961',
    title: 'Rantai Pasok Global: Ketahanan di Tenga Ketidakpastian',
    excerpt: 'Membangun ketahanan rantai pasok melalui diversifikasi, digitalisasi, dan kemitraan strategis lintas wilayah.',
    date: '28 November 2024',
    readTime: '6 menit',
  },
  {
    id: '5',
    category: 'Pertanian',
    categoryColor: '#6A9A7F',
    title: 'Sawit Berkelanjutan: Menuju Sertifikasi ISPO & RSPO',
    excerpt: 'Perjalanan transformasi perkebunan kelapa sawit menuju praktik berkelanjutan dan sertifikasi internasional.',
    date: '22 November 2024',
    readTime: '9 menit',
  },
  {
    id: '6',
    category: 'Jasa',
    categoryColor: '#9B8FB8',
    title: 'MICE Pasca-Pandemi: Hibrid sebagai Standar Baru',
    excerpt: 'Evolusi industri pertemuan, perjalanan insentif, konferensi, dan pameran menuju format hibrida yang efisien.',
    date: '15 November 2024',
    readTime: '5 menit',
  },
  {
    id: '7',
    category: 'Industri Sawit',
    categoryColor: '#8FB89B',
    title: 'Volatilitas Harga CPO: Strategi Hedging untuk Trader',
    excerpt: 'Instrument dan pendekatan manajemen risiko untuk mengelola volatilitas harga minyak sawit mentah.',
    date: '8 November 2024',
    readTime: '8 menit',
  },
  {
    id: '8',
    category: 'Konstruksi',
    categoryColor: '#D99B7A',
    title: 'Tender Pemerintah: Panduan Menjadi Pemenang',
    excerpt: 'Strategi menyusun proposal tender yang kompetitif dan kepatuhan terhadap regulasi pengadaan publik.',
    date: '1 November 2024',
    readTime: '7 menit',
  },
  {
    id: '9',
    category: 'Strategi',
    categoryColor: '#9B8FB8',
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
    color: '#C9A961',
    description: 'Ekspor, impor, dan distribusi komoditas strategis — perdagangan mesin, bahan baku sawit, dan produk industri.',
  },
  {
    id: 'jasa',
    name: 'Jasa & Konsultasi',
    subtitle: 'Consulting & MICE',
    icon: 'Briefcase',
    color: '#9B8FB8',
    description: 'Konsultasi manajemen, penyelenggaraan MICE, dan pelatihan profesional untuk pertumbuhan bisnis.',
  },
  {
    id: 'konstruksi',
    name: 'Konstruksi',
    subtitle: 'Construction & Tender',
    icon: 'Building2',
    color: '#D99B7A',
    description: 'Tender proyek, konstruksi gedung & sipil, irigasi, jembatan — pembangunan infrastruktur terpercaya.',
  },
  {
    id: 'industri',
    name: 'Industri Sawit',
    subtitle: 'Palm Oil & CPO Trading',
    icon: 'Factory',
    color: '#8FB89B',
    description: 'Trading CPO, minyak goreng, dan fraksinasi — industri hilir kelapa sawit terintegrasi.',
  },
  {
    id: 'pertanian',
    name: 'Pertanian & Perikanan',
    subtitle: 'Agriculture & Fishery',
    icon: 'Leaf',
    color: '#6A9A7F',
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
  { id: 'v2', name: 'Abdi', icon: 'Handshake', color: '#C9A961', description: 'Mengabdi pada kepentingan klien, mitra, dan masyarakat dengan dedikasi tanpa batas.' },
  { id: 'v3', name: 'Cinta', icon: 'Heart', color: '#D99B7A', description: 'Mengutamakan kepedulian pada manusia, lingkungan, dan keberlanjutan dalam berbisnis.' },
  { id: 'v4', name: 'Kolaborasi', icon: 'Users', color: '#9B8FB8', description: 'Membangun sinergi lintas divisi dan mitra untuk menciptakan nilai yang lebih besar.' },
  { id: 'v5', name: 'Keberlanjutan', icon: 'Leaf', color: '#6A9A7F', description: 'Berkomitmen pada praktik agrikultur dan industri yang ramah lingkungan dan bertanggung jawab.' },
  { id: 'v6', name: 'Inovasi', icon: 'Lightbulb', color: '#8FB89B', description: 'Terus berinovasi dalam layanan, proses, dan teknologi untuk tetap relevan dan kompetitif.' },
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

/* ============================================================
   KELENGKAPAN INSIGHT — konten artikel lengkap (untuk detail)
   ============================================================ */

export const INSIGHT_ARTICLES: Record<string, { title: string; category: string; categoryColor: string; date: string; readTime: string; excerpt: string; author: string; authorRole: string; body: string[]; takeaways: string[] }> = {
  '1': {
    title: 'Masa Depan Industri Sawit Indonesia 2025',
    category: 'Industri Sawit', categoryColor: '#8FB89B',
    date: '15 Desember 2024', readTime: '8 menit',
    excerpt: 'Analisis mendalam tentang tren, tantangan, dan peluang industri kelapa sawit di pasar global yang semakin kompetitif.',
    author: 'Wirono, SE.M.Pd', authorRole: 'Direktur Utama, PT JAC',
    body: [
      'Industri kelapa sawit Indonesia berdiri di persimpangan kritis pada 2025. Di satu sisi, permintaan global untuk minyak nabati terus tumbuh seiring peningkatan populasi dan konsumsi. Di sisi lain, tekanan regulasi keberlanjutan dari Uni Eropa melalui EU Deforestation Regulation (EUDR) menuntut transformasi mendalam pada rantai pasok.',
      'Data menunjukkan bahwa Indonesia memproduksi sekitar 45 juta ton CPO per tahun, atau lebih dari 50% pasokan global. Namun, nilai tambah yang diterima masih didominasi oleh ekspor bahan baku. Hilirisasi menjadi kunci strategis — dari CPO menjadi olein, stearin, minyak goreng, hingga biofuel.',
      'Tiga tren utama yang akan membentuk industri di 2025: pertama, akselerasi sertifikasi ISPO dan RSPO sebagai prasyarat akses pasar. Kedua, digitalisasi rantai pasok untuk traceabilitas dari kebun ke konsumen. Ketiga, diversifikasi produk turunan untuk mengurangi ketergantungan pada CPO mentah.',
      'PT Jiwa Abdi Cinta memposisikan diri di jantung transformasi ini — dengan pabrik fraksinasi terintegrasi, kebun bersertifikasi, dan platform trading digital yang menghubungkan produsen langsung dengan pembeli global.',
    ],
    takeaways: [
      'Hilirisasi CPO menjadi strategi kunci untuk meningkatkan nilai tambah.',
      'Sertifikasi ISPO & RSPO kini prasyarat, bukan opsi, untuk akses pasar global.',
      'Digitalisasi traceabilitas rantai pasok menentukan daya saing 2025.',
    ],
  },
  '2': {
    title: 'Infrastruktur Berkelanjutan: Tren Konstruksi Hijau 2025',
    category: 'Konstruksi', categoryColor: '#D99B7A',
    date: '10 Desember 2024', readTime: '7 menit',
    excerpt: 'Bagaimana praktik konstruksi ramah lingkungan dan material berkelanjutan membentuk masa depan infrastruktur Indonesia.',
    author: 'Edy Kurniawan', authorRole: 'Direktur Bisnis & Keuangan, PT JAC',
    body: [
      'Konstruksi hijau bukan lagi niche — ia menjadi standar baru. Pemerintah Indonesia menargetkan penurunan emisi 29% pada 2030, dan sektor konstruksi menyumbang signifikan terhadap jejak karbon nasional.',
      'Praktik berkelanjutan mencakup penggunaan material daur ulang, efisiensi energi dalam operasional konstruksi, desain bangunan hemat energi, dan manajemen limbah konstruksi yang bertanggung jawab.',
      'Sertifikasi Greenship dari Green Building Council Indonesia semakin dipersyaratkan dalam tender proyek pemerintah. Kontraktor yang adaptif dengan standar ini akan memenangkan lebih banyak proyek strategis.',
    ],
    takeaways: [
      'Sertifikasi Greenship kian dipersyaratkan dalam tender pemerintah.',
      'Material daur ulang & efisiensi energi mengurangi biaya operasional jangka panjang.',
      'Kontraktor yang adaptif standar hijau memenangkan lebih banyak proyek.',
    ],
  },
  '3': {
    title: 'Strategi Pertumbuhan Bisnis di Era AI',
    category: 'Strategi', categoryColor: '#9B8FB8',
    date: '5 Desember 2024', readTime: '10 menit',
    excerpt: 'Memanfaatkan kecerdasan buatan untuk mendorong pertumbuhan bisnis yang berkelanjutan dan kompetitif.',
    author: 'Tegar Ramadhan Wiroputro', authorRole: 'Komisaris Utama, PT JAC',
    body: [
      'Era AI mengubah lanskap bisnis lebih cepat daripada revolusi digital sebelumnya. Perusahaan yang gagal beradaptasi menghadapi risiko obsolesensi dalam 3-5 tahun.',
      'Tiga penerapan AI paling berdampak untuk korporasi: otomasi proses back-office, analitik prediktif untuk keputusan strategis, dan personalisasi pengalaman pelanggan.',
      'Namun, adopsi AI bukan hanya soal teknologi — ia memerlukan transformasi budaya, investasi talenta, dan tata kelola data yang matang.',
    ],
    takeaways: [
      'AI paling berdampak di otomasi, analitik prediktif, dan personalisasi.',
      'Transformasi budaya & tata kelola data sama pentingnya dengan teknologi.',
      'Perusahaan yang lambat beradaptasi menghadapi risiko obsolesensi 3-5 tahun.',
    ],
  },
}

/* ============================================================
   KELESTARIAN & BERKELANJUTAN — data untuk halaman Sustainability
   ============================================================ */

export const SUSTAINABILITY_PILLARS = [
  {
    id: 's1', name: 'Produksi Bertanggung Jawab', icon: 'Leaf', color: '#5A8A6A',
    description: 'Praktik agrikultur dan industri yang meminimalkan dampak lingkungan sambil memaksimalkan produktivitas.',
    initiatives: ['Sertifikasi ISPO & RSPO di seluruh kebun', 'Manajemen limbah pabrik fraksinasi', 'Penggunaan energi terbarukan di pabrik'],
    metric: { label: 'Kebun Bersertifikasi', value: '100%', sub: 'ISPO + RSPO' },
  },
  {
    id: 's2', name: 'Kesejahteraan Masyarakat', icon: 'Users', color: '#9B8FB8',
    description: 'Memberdayakan komunitas lokal di sekitar operasional melalui program sosial dan ekonomi.',
    initiatives: ['Program plasma untuk petani swadaya', 'Beasiswa pendidikan anak mitra', 'Pelatihan keterampilan masyarakat lokal'],
    metric: { label: 'Keluarga Mitra Plasma', value: '1.200+', sub: 'petani swadaya' },
  },
  {
    id: 's3', name: 'Konservasi Lingkungan', icon: 'TreePine', color: '#8FB89B',
    description: 'Melindungi keanekaragaman hayati dan ekosistem di area operasional perkebunan dan kehutanan.',
    initiatives: ['Konservasi hutan riparian & HCV', 'Program rehabilitasi lahan terdegradasi', 'Pemantauan keanekaragaman hayati'],
    metric: { label: 'Area Konservasi', value: '850 ha', sub: 'HCV & riparian' },
  },
  {
    id: 's4', name: 'Tata Kelola Transparan', icon: 'Scale', color: '#C9A961',
    description: 'Kepatuhan penuh terhadap regulasi dan standar internasional dengan pelaporan yang akuntabel.',
    initiatives: ['Kepatuhan EUDR & ISPO', 'Audit independen tahunan', 'Pelaporan dampak berkelanjutan publik'],
    metric: { label: 'Audit Independen', value: '4', sub: 'sertifikasi aktif' },
  },
]

export const CERTIFICATIONS = [
  { id: 'ispo', name: 'ISPO', fullName: 'Indonesian Sustainable Palm Oil', scope: 'Perkebunan Kelapa Sawit', year: '2023', color: '#5A8A6A', description: 'Sertifikasi keberlanjutan sawit wajib nasional yang menjamin praktik perkebunan yang bertanggung jawab.' },
  { id: 'rspo', name: 'RSPO', fullName: 'Roundtable on Sustainable Palm Oil', scope: 'Perkebunan & rantai pasok', year: '2023', color: '#8FB89B', description: 'Standar internasional untuk minyak sawit berkelanjutan yang diakui pasar global.' },
  { id: 'fsc', name: 'FSC', fullName: 'Forest Stewardship Council', scope: 'Hutan Tanaman Industri', year: '2022', color: '#2D5A3D', description: 'Sertifikasi pengelolaan hutan yang menjamin keberlanjutan ekologi dan sosial.' },
  { id: 'pefc', name: 'PEFC', fullName: 'Programme for the Endorsement of Forest Certification', scope: 'HTI Akasia & Eucalyptus', year: '2022', color: '#6A9A7F', description: 'Sertifikasi internasional untuk pengelolaan hutan berkelanjutan.' },
  { id: 'asc', name: 'ASC', fullName: 'Aquaculture Stewardship Council', scope: 'Tambak Udang Vannamei', year: '2023', color: '#9B8FB8', description: 'Standar akuakultur berkelanjutan untuk perikanan budidaya yang bertanggung jawab.' },
  { id: 'iscc', name: 'ISCC', fullName: 'International Sustainability and Carbon Certification', scope: 'Biofuel & rantai pasok CPO', year: '2024', color: '#C9A961', description: 'Sertifikasi keberlanjutan dan jejak karbon untuk bioenergi dan rantai pasok.' },
]

export const SDG_ALIGNMENT = [
  { id: 'sdg8', name: 'Pekerjaan Layak & Pertumbuhan Ekonomi', color: '#8FB89B', contribution: 'Menciptakan 1.800+ lapangan kerja langsung dan memberdayakan 1.200+ keluarga petani plasma.' },
  { id: 'sdg12', name: 'Konsumsi & Produksi Bertanggung Jawab', color: '#5A8A6A', contribution: 'Praktik produksi bersertifikasi dengan manajemen limbah dan efisiensi sumber daya.' },
  { id: 'sdg13', name: 'Penanganan Perubahan Iklim', color: '#2D5A3D', contribution: 'Konservasi 850 ha HCV, rehabilitasi lahan, dan pengurangan emisi melalui efisiensi pabrik.' },
  { id: 'sdg15', name: 'Ekosistem Darat Lestari', color: '#6A9A7F', contribution: 'Pengelolaan HTI bersertifikasi FSC/PEFC dan perlindungan keanekaragaman hayati.' },
]

export const SUSTAINABILITY_STATS = [
  { value: 100, suffix: '%', label: 'Kebun Bersertifikasi ISPO+RSPO', color: '#5A8A6A' },
  { value: 850, suffix: ' ha', label: 'Area Konservasi HCV', color: '#2D5A3D' },
  { value: 1200, suffix: '+', label: 'Keluarga Petani Plasma', color: '#8FB89B' },
  { value: 4, suffix: '', label: 'Sertifikasi Internasional', color: '#C9A961' },
]

/* ============================================================
   TESTIMONIALS — social proof untuk landing
   ============================================================ */

export const TESTIMONIALS = [
  {
    name: 'Andi Wijaya', role: 'CEO, PT Maju Jaya Abadi', company: 'Mitra Perdagangan',
    quote: 'Kolaborasi dengan JAC dalam ekspor CPO berjalan transparan dan profesional. Rantai pasok tersertifikasi ISPO memberi kami akses ke pasar Eropa yang sebelumnya tertutup.',
    rating: 5, avatar: 'AW',
  },
  {
    name: 'Dr. Siti Rahmawati', role: 'Kepala Riset, Universitas Indonesia', company: 'Klien Konsultasi',
    quote: 'Tim konsultan JAC membantu transformasi digital lembaga kami dengan pendekatan strategis yang praktis. Hasilnya melebihi ekspektasi.',
    rating: 5, avatar: 'SR',
  },
  {
    name: 'Bambang Hartono', role: 'Direktur, PT Global Palm Indonesia', company: 'Mitra Industri',
    quote: 'Pabrik fraksinasi JAC menghasilkan olein dengan kualitas konsisten yang memenuhi standar ekspor kami. Logistiknya pun andal.',
    rating: 5, avatar: 'BH',
  },
]

/* ============================================================
   FAQ — pertanyaan umum (untuk halaman kontak/landing)
   ============================================================ */

export const FAQS = [
  {
    q: 'Bidang usaha apa saja yang dijalankan PT Jiwa Abdi Cinta?',
    a: 'JAC menjalankan lima bidang usaha terintegrasi: Perdagangan komoditas, Jasa & Konsultasi (MICE), Konstruksi & Tender, Industri Sawit (CPO), dan Pertanian/Perikanan. Semua terdaftar dalam Akta Pendirian No. 310 dengan 17+ KBLI.',
  },
  {
    q: 'Bagaimana cara menjadi mitra atau supplier JAC?',
    a: 'Anda dapat mendaftar sebagai mitra melalui halaman Kontak dengan memilih departemen terkait. Tim kami akan melakukan verifikasi dan onboarding dalam 5-7 hari kerja. Saat ini JAC memiliki 340+ mitra terverifikasi.',
  },
  {
    q: 'Apakah produk CPO JAC tersertifikasi keberlanjutan?',
    a: 'Ya. Seluruh kebun kelapa sawit JAC bersertifikasi ISPO (wajib nasional) dan RSPO (internasional). Kami juga memenuhi kepatuhan EUDR untuk akses pasar Uni Eropa.',
  },
  {
    q: 'Bagaimana proses pengajuan tender konstruksi JAC?',
    a: 'Tender terbuka diumumkan pada halaman Proyek. Kontraktor dengan SBU yang relevan dapat mengajukan proposal sebelum tanggal tutup. Evaluasi dilakukan berdasarkan kualifikasi teknis, harga, dan rekam jejak.',
  },
  {
    q: 'Apakah JAC melayani konsultasi untuk UMKM?',
    a: 'Ya, divis Jasa & Konsultasi melayani klien dari skala UMKM hingga korporasi besar. Program pelatihan dan konsultasi manajemen dapat disesuaikan dengan kebutuhan dan skala bisnis Anda.',
  },
  {
    q: 'Di wilayah mana saja JAC beroperasi?',
    a: 'Operasional JAC mencakup 14 provinsi di Indonesia, dengan kebun dan pabrik utama di Riau, Sumatera Utara, Kalimantan Timur, dan Kalimantan Barat. Kantor pusat berada di Jakarta Selatan.',
  },
]

/* ============================================================
   LAYANAN — Penawaran detail per modul (untuk halaman Layanan)
   ============================================================ */

export const SERVICE_OFFERINGS = [
  {
    moduleId: 'perdagangan',
    name: 'Perdagangan',
    tagline: 'Marketplace & Trading Komoditas',
    color: '#C9A961',
    icon: 'Package',
    overview: 'Jembatan perdagangan antara produsen dan pasar — ekspor, impor, dan distribusi komoditas strategis dengan jaringan 340+ mitra terverifikasi.',
    offerings: [
      { title: 'Trading CPO & Bahan Baku Sawit', desc: 'Perdagangan besar minyak kelapa sawit mentah dan TBS untuk industri hilir.' },
      { title: 'Ekspor-Impor Mesin Industri', desc: 'Penyediaan mesin produksi, fraksinasi, dan analisis laboratorium sawit.' },
      { title: 'Distribusi Komoditas', desc: 'Jaringan distribusi lintas wilayah dengan gudang strategis di Riau, Medan, Jakarta.' },
      { title: 'Marketplace B2B', desc: 'Platform digital untuk transaksi grosir antar perusahaan terverifikasi.' },
    ],
    stats: [{ label: 'Mitra Supplier', value: '340+' }, { label: 'Nilai Trading', value: 'Rp 47M' }, { label: 'Komoditas', value: '12+' }],
  },
  {
    moduleId: 'jasa',
    name: 'Jasa & Konsultasi',
    tagline: 'Consulting, MICE & Pelatihan',
    color: '#9B8FB8',
    icon: 'Briefcase',
    overview: 'Jasa profesional untuk pertumbuhan bisnis — konsultasi manajemen strategis, penyelenggaraan MICE, dan pelatihan kerja terstruktur.',
    offerings: [
      { title: 'Konsultasi Manajemen', desc: 'Strategi pertumbuhan, transformasi digital, dan tata kelola korporat.' },
      { title: 'MICE', desc: 'Konferensi, pameran, seminar, workshop, dan incentive trip terintegrasi.' },
      { title: 'Pelatihan Bisnis & Manajemen', desc: 'Program pelatihan kerja bisnis dan manajemen perusahaan bersertifikasi.' },
      { title: 'Konsultasi Teknis & Hukum Bisnis', desc: 'Pendampingan teknis dan kepatuhan hukum lintas sektor usaha.' },
    ],
    stats: [{ label: 'Klien Konsultasi', value: '120+' }, { label: 'Event MICE', value: '48' }, { label: 'Rating', value: '4.8★' }],
  },
  {
    moduleId: 'konstruksi',
    name: 'Konstruksi',
    tagline: 'Construction & Tender',
    color: '#D99B7A',
    icon: 'Building2',
    overview: 'Pembangun infrastruktur terpercaya — konstruksi gedung, sipil, irigasi, dan jembatan dengan manajemen tender yang transparan.',
    offerings: [
      { title: 'Konstruksi Gedung', desc: 'Perkantoran, gedung komersial, dan fasilitas industri multi-lantai.' },
      { title: 'Konstruksi Sipil', desc: 'Jembatan, jalan layang, fly over, underpass, dan pengolahan air bersih.' },
      { title: 'Jaringan Irigasi & Drainase', desc: 'Sistem irigasi dan drainase untuk pertanian dan kawasan industri.' },
      { title: 'Manajemen Tender', desc: 'Penyusunan dan pengelolaan tender proyek pemerintah & swasta.' },
    ],
    stats: [{ label: 'Proyek Aktif', value: '28' }, { label: 'Tender Dimenangkan', value: '15+' }, { label: 'Nilai Proyek', value: 'Rp 165M' }],
  },
  {
    moduleId: 'industri',
    name: 'Industri Sawit',
    tagline: 'Palm Oil & CPO Trading',
    color: '#8FB89B',
    icon: 'Factory',
    overview: 'Industri hilir kelapa sawit terintegrasi — trading CPO, minyak goreng, olein, stearin, dan fraksinasi dengan pabrik dan gudang sendiri.',
    offerings: [
      { title: 'Trading CPO & PKO', desc: 'Perdagangan minyak sawit mentah dan inti sawit untuk pasar domestik & ekspor.' },
      { title: 'Produksi Minyak Goreng', desc: 'Pabrik minyak goreng kemasan industri berkapasitas 300 ton/hari.' },
      { title: 'Fraksinasi & Pemurnian', desc: 'Pemisahan olein dan stearin dari minyak sawit murni.' },
      { title: 'Manajemen Pabrik & Gudang', desc: '3 pabrik dan 3 gudang strategis dengan kapasitas 10.000 ton.' },
    ],
    stats: [{ label: 'Kapasitas Pabrik', value: '1.250 t/h' }, { label: 'Kapasitas Gudang', value: '10K ton' }, { label: 'Harga CPO', value: 'Rp 14.85M' }],
  },
  {
    moduleId: 'pertanian',
    name: 'Pertanian & Perikanan',
    tagline: 'Agriculture, Forestry & Fishery',
    color: '#6A9A7F',
    icon: 'Leaf',
    overview: 'Manajemen agrikultur terintegrasi dari hulu — perkebunan sawit bersertifikasi, kehutanan industri, dan perikanan budidaya.',
    offerings: [
      { title: 'Perkebunan Kelapa Sawit', desc: '4.500+ hektar kebun bersertifikasi RSPO & ISPO dengan produktivitas optimal.' },
      { title: 'Kehutanan Industri', desc: 'HTI Eucalyptus dan Akasia bersertifikasi FSC & PEFC untuk pulp & kayu.' },
      { title: 'Perikanan Budidaya', desc: 'Tambak udang vannamei dan keramba jaring apung ikan nila.' },
      { title: 'Konsultasi Agrikultur', desc: 'Manajemen perkebunan, sertifikasi, dan praktik berkelanjutan.' },
    ],
    stats: [{ label: 'Luas Kebun', value: '5.200 ha' }, { label: 'Sertifikasi', value: '4' }, { label: 'Produksi', value: '2.8K ton' }],
  },
]

/* ============================================================
   PROYEK & PORTOFOLIO — showcase lintas modul
   ============================================================ */

export const PROJECT_PORTFOLIO = [
  {
    id: 'p1',
    title: 'Gedung Perkantoran Sudirman',
    category: 'Konstruksi',
    categoryColor: '#D99B7A',
    location: 'Jakarta Selatan',
    year: '2024',
    value: 'Rp 45 M',
    status: 'Berlangsung',
    progress: 72,
    description: 'Pembangunan gedung perkantoran 8 lantai di kawasan bisnis Sudirman dengan standar green building.',
    metrics: [{ k: 'Lantai', v: '8' }, { k: 'Luas', v: '12.000 m²' }, { k: 'Progres', v: '72%' }],
  },
  {
    id: 'p2',
    title: 'Jembatan Sungai Mahakam',
    category: 'Konstruksi',
    categoryColor: '#D99B7A',
    location: 'Kalimantan Timur',
    year: '2025',
    value: 'Rp 120 M',
    status: 'Berlangsung',
    progress: 15,
    description: 'Konstruksi jembatan penghubung strategis sepanjang 1.8 km melintasi Sungai Mahakam.',
    metrics: [{ k: 'Panjang', v: '1.8 km' }, { k: 'Lajur', v: '4' }, { k: 'Progres', v: '15%' }],
  },
  {
    id: 'p3',
    title: 'Ekspor CPO 12.000 Ton',
    category: 'Perdagangan',
    categoryColor: '#C9A961',
    location: 'Riau → Rotterdam',
    year: '2024',
    value: 'Rp 178 M',
    status: 'Selesai',
    progress: 100,
    description: 'Kontrak ekspor CPO premium 12.000 ton ke pembeli Eropa dengan rantai pasok tersertifikasi ISPO.',
    metrics: [{ k: 'Volume', v: '12K ton' }, { k: 'Tujuan', v: 'Rotterdam' }, { k: 'Status', v: 'Terkirim' }],
  },
  {
    id: 'p4',
    title: 'Pabrik Fraksinasi JAC 1',
    category: 'Industri',
    categoryColor: '#8FB89B',
    location: 'Riau',
    year: '2023',
    value: 'Rp 85 M',
    status: 'Selesai',
    progress: 100,
    description: 'Pembangunan pabrik fraksinasi minyak sawit berkapasitas 500 ton/hari dengan teknologi Eropa.',
    metrics: [{ k: 'Kapasitas', v: '500 t/h' }, { k: 'Investasi', v: 'Rp 85M' }, { k: 'Tenaga Kerja', v: '180' }],
  },
  {
    id: 'p5',
    title: 'Kebun Sawit Riau Utara',
    category: 'Pertanian',
    categoryColor: '#6A9A7F',
    location: 'Riau',
    year: '2023',
    value: 'Rp 32 M',
    status: 'Selesai',
    progress: 100,
    description: 'Pengembangan 1.200 hektar kebun kelapa sawit bersertifikasi RSPO & ISPO dengan produktivitas 4.2 ton/ha/tahun.',
    metrics: [{ k: 'Luas', v: '1.200 ha' }, { k: 'Sertifikasi', v: 'RSPO+ISPO' }, { k: 'Produktivitas', v: '4.2 t/ha' }],
  },
  {
    id: 'p6',
    title: 'Indonesia Palm Oil Summit 2024',
    category: 'Jasa',
    categoryColor: '#9B8FB8',
    location: 'Jakarta Convention Center',
    year: '2024',
    value: 'Rp 2.5 M',
    status: 'Selesai',
    progress: 100,
    description: 'Penyelenggaraan konferensi industri sawit terbesar dengan 342 peserta dan 28 pembicara internasional.',
    metrics: [{ k: 'Peserta', v: '342' }, { k: 'Pembicara', v: '28' }, { k: 'Durasi', v: '3 hari' }],
  },
  {
    id: 'p7',
    title: 'Sistem Irigasi Daerah Aliran',
    category: 'Konstruksi',
    categoryColor: '#D99B7A',
    location: 'Jawa Barat',
    year: '2023',
    value: 'Rp 28 M',
    status: 'Selesai',
    progress: 100,
    description: 'Pembangunan jaringan irigasi dan drainase untuk 800 hektar kawasan pertanian.',
    metrics: [{ k: 'Cakupan', v: '800 ha' }, { k: 'Saluran', v: '24 km' }, { k: 'Status', v: 'Operasional' }],
  },
  {
    id: 'p8',
    title: 'Supply Mesin Fraksinasi Mini',
    category: 'Perdagangan',
    categoryColor: '#C9A961',
    location: 'Medan → Kalimantan',
    year: '2024',
    value: 'Rp 18 M',
    status: 'Selesai',
    progress: 100,
    description: 'Penyediaan dan instalasi 6 unit mesin fraksinasi mini untuk pabrik mitra di Kalimantan.',
    metrics: [{ k: 'Unit', v: '6' }, { k: 'Kapasitas', v: '50 t/h' }, { k: 'Garansi', v: '2 thn' }],
  },
]

export const PORTFOLIO_CATEGORIES = ['Semua', 'Konstruksi', 'Perdagangan', 'Industri', 'Pertanian', 'Jasa']

export const PORTFOLIO_STATS = [
  { label: 'Total Proyek Selesai', value: 47, suffix: '+', color: '#C9A961' },
  { label: 'Nilai Portofolio', value: 508, prefix: 'Rp ', suffix: ' M', color: '#0D503C' },
  { label: 'Provinsi Terjangkau', value: 14, suffix: '', color: '#8FB89B' },
  { label: 'Mitra Eksekusi', value: 340, suffix: '+', color: '#6A9A7F' },
]

/* ============================================================
   LUXURY HERO — statistik untuk landing mewah
   ============================================================ */

export const LUXURY_HERO_STATS = [
  { value: 5, suffix: '', label: 'Bidang Usaha', color: '#2D5A3D' },
  { value: 17, suffix: '+', label: 'KBLI Terdaftar', color: '#5A8A6A' },
  { value: 340, suffix: '+', label: 'Mitra & Klien', color: '#2D5A3D' },
  { value: 47, suffix: '+', label: 'Proyek Selesai', color: '#5A8A6A' },
]

export const LUXURY_ACCENTS = {
  // Light surfaces (bright theme)
  cream: '#F8FAF6',          // green-tinted ivory — main light bg
  creamWarm: '#F5F0E8',      // warm cream
  mint: '#E8F0E8',           // very light mint — section variation
  mintBright: '#D4E8D4',     // brighter mint
  // Hijau muda (light green) — the primary accent family
  sage: '#8FB89B',           // soft sage (hijau muda)
  sageBright: '#A8D5BA',     // bright mint sage
  sageDeep: '#5A8A6A',       // deeper sage for accents/borders
  // Forest green for text (AAA contrast on light)
  forest: '#1A3D2A',         // deep forest — primary dark text
  forestDeep: '#0F2A1A',     // deepest forest
  ink: '#1A3D2A',            // ink = forest (text on light)
  inkSoft: '#2D5A3D',        // softer forest text
  muted: '#5A7A6A',          // muted sage-gray text
  mutedLight: '#8B9A8B',     // faint text
  // Gold accent (kept for luxury warmth)
  gold: '#C9A961',           // champagne bronze
  goldLight: '#E8D9A0',      // light champagne
  goldBright: '#F0E4B8',     // brightest champagne
  // Backward-compatible aliases (map old names → new light values so
  // existing references in page files cascade to the light theme)
  plumDeep: '#0F2A1A',       // now deepest forest (for dark text/gradients)
  plum: '#1A3D2A',           // now forest
  plumMid: '#5A8A6A',        // now sageDeep
  plumLight: '#8FB89B',      // now sage
  champagne: '#A8D5BA',      // now sageBright (hijau muda as primary accent)
  champagneBright: '#C8E6D0',// bright mint
  bronze: '#C9A961',         // gold accent kept
  sageDeep: '#5A8A6A',
  // Legacy name aliases (used by subagent-built page files)
  emerald: '#2D5A3D',        // forest green (accents/text)
  emeraldDeep: '#E8F0E8',    // mint (light — for former dark gradient sections)
  charcoal: '#F5F0E8',       // creamWarm (light — for former dark section bgs)
  goldPale: '#E8D9A0',       // champagne
  goldBright: '#F0E4B8',     // champagneBright
}


