// Rich public-facing content for PT JIWA ABDI CINTA corporate site

export const SITE = {
  name: 'PT Jiwa Abdi Cinta',
  shortName: 'JAC',
  tagline: 'Membangun Masa Depan Bisnis Indonesia',
  email: 'info@jiwaabdicinta.co.id',
  phone: '+62 21 5555 0310',
  address: 'Jakarta Selatan, DKI Jakarta, Indonesia',
  akta: 'Akta Pendirian No. 310, 21 April 2022',
}

// ---------- SERVICES (detail pages) ----------
export interface ServiceDetail {
  slug: string
  name: string
  subtitle: string
  icon: string
  color: string
  heroTitle: string
  heroDescription: string
  overview: string[]
  capabilities: { title: string; description: string }[]
  approach: { step: string; title: string; description: string }[]
  stats: { value: string; label: string }[]
  faqs: { q: string; a: string }[]
  image: string
}

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    slug: 'perdagangan',
    name: 'Perdagangan',
    subtitle: 'Marketplace & Trading',
    icon: 'Package',
    color: '#B8860B',
    heroTitle: 'Menghubungkan Pasar, Menggerakkan Ekonomi',
    heroDescription:
      'Layanan perdagangan besar dan distribusi komoditas strategis — dari mesin industri hingga bahan baku sawit — dengan jaringan supplier dan buyer yang terkurasi di seluruh Indonesia.',
    overview: [
      'Divisi Perdagangan JAC beroperasi sebagai penghubung strategis antara produsen, supplier, dan pembeli di pasar domestik maupun internasional. Kami mengelola rantai pasok end-to-end untuk komoditas bernilai tinggi termasuk mesin dan peralatan industri, bahan baku kelapa sawit, serta produk kimia dan farmasi.',
      'Dengan model perdagangan berbasis fee dan kontrak, kami memastikan setiap transaksi memiliki transparansi penuh, mitigasi risiko yang matang, dan kepatuhan regulasi ekspor-impor Indonesia.',
    ],
    capabilities: [
      { title: 'Ekspor & Impor', description: 'Pengurusan dokumen kepabeanan, logistik internasional, dan kepatuhan regulasi perdagangan lintas negara.' },
      { title: 'Distribusi Mesin & Peralatan', description: 'Perdagangan besar mesin industri, peralatan konstruksi, dan perlengkapan pabrik dengan garansi resmi.' },
      { title: 'Trading Komoditas Sawit', description: 'Jual-beli buah yang mengandung minyak, CPO, dan turunannya dengan harga pasar real-time.' },
      { title: 'E-Commerce B2B', description: 'Platform perdagangan eceran melalui media untuk komoditi makanan, minuman, kimia, farmasi, dan alat laboratorium.' },
      { title: 'Manajemen Supplier', description: 'Kurasi, verifikasi legalitas, dan penilaian kinerja jaringan supplier dan distributor.' },
      { title: 'Konsultasi Teknis', description: 'Aktivitas keinsinyuran dan konsultasi teknis untuk kebutuhan pengadaan barang industri.' },
    ],
    approach: [
      { step: '01', title: 'Analisis Kebutuhan', description: 'Kami memetakan kebutuhan pengadaan atau penjualan Anda beserta spesifikasi teknis dan volume.' },
      { step: '02', title: 'Kurasi Mitra', description: 'Tim kami memilih supplier atau buyer terverifikasi dari jaringan kami yang paling sesuai.' },
      { step: '03', title: 'Negosiasi & Kontrak', description: 'Struktur harga, term pembayaran, dan mitigasi risiko dirancang untuk melindungi semua pihak.' },
      { step: '04', title: 'Eksekusi & Monitoring', description: 'Pengiriman, dokumen, dan pembayaran dipantau real-time hingga transaksi selesai.' },
    ],
    stats: [
      { value: '340+', label: 'Mitra Supplier Aktif' },
      { value: '12', label: 'Provinsi Terjangkau' },
      { value: '98%', label: 'Ketepatan Pengiriman' },
    ],
    faqs: [
      { q: 'Apakah JAC melayani pengadaan untuk instansi pemerintah?', a: 'Ya. Kami berpengalaman dalam pengadaan barang/jasa pemerintah dan terdaftar dalam sistem pengadaan elektronik dengan legalitas lengkap.' },
      { q: 'Bagaimana skema pembayaran perdagangan internasional?', a: 'Kami mendukung Letter of Credit (L/C), Telegraphic Transfer (T/T), dan skema escrow sesuai kesepakatan para pihak.' },
      { q: 'Apakah tersedia layanan inspeksi kualitas barang?', a: 'Tersedia. Setiap pengiriman dapat disertai inspeksi pihak ketiga independen sebelum barang dikirim.' },
    ],
    image: '/images/insight-perdagangan.png',
  },
  {
    slug: 'jasa',
    name: 'Jasa & Konsultasi',
    subtitle: 'Consulting & MICE',
    icon: 'Briefcase',
    color: '#1E3A5F',
    heroTitle: 'Strategi yang Mengubah Arah Bisnis',
    heroDescription:
      'Konsultasi manajemen, penyelenggaraan MICE berskala nasional, dan pelatihan profesional — dirancang untuk mengakselerasi pertumbuhan organisasi Anda.',
    overview: [
      'Divisi Jasa JAC menyediakan layanan konsultasi manajemen komprehensif — mulai dari perumusan strategi korporat, transformasi organisasi, hingga peningkatan efisiensi operasional. Tim konsultan kami menggabungkan pengalaman lintas industri dengan pendekatan berbasis data.',
      'Kami juga merupakan penyelenggara MICE (Meeting, Incentive, Conference, Exhibition) profesional serta lembaga pelatihan kerja bisnis dan manajemen yang telah melayani puluhan perusahaan dan institusi.',
    ],
    capabilities: [
      { title: 'Konsultasi Strategi', description: 'Perumusan visi, strategi pertumbuhan, dan roadmap transformasi bisnis berbasis riset pasar.' },
      { title: 'Penyelenggaraan MICE', description: 'Konferensi, pameran, perjalanan insentif, dan pertemuan korporat dari perencanaan hingga eksekusi.' },
      { title: 'Pelatihan Korporat', description: 'Program pelatihan kerja bisnis dan manajemen yang disesuaikan dengan kebutuhan perusahaan.' },
      { title: 'Transformasi Organisasi', description: 'Restrukturisasi, desain organisasi, dan manajemen perubahan untuk efektivitas jangka panjang.' },
      { title: 'Riset & Analisis Pasar', description: 'Studi kelayakan, analisis kompetitor, dan intelijen pasar untuk pengambilan keputusan.' },
      { title: 'Pendampingan UMKM', description: 'Program inkubasi dan pendampingan usaha kecil menengah menuju skala korporasi.' },
    ],
    approach: [
      { step: '01', title: 'Diagnosis', description: 'Asesmen mendalam terhadap kondisi organisasi, pasar, dan kapabilitas internal Anda.' },
      { step: '02', title: 'Desain Solusi', description: 'Rancangan strategi dan program yang terukur dengan KPI yang jelas.' },
      { step: '03', title: 'Implementasi', description: 'Pendampingan eksekusi bersama tim internal untuk transfer pengetahuan maksimal.' },
      { step: '04', title: 'Evaluasi & Skala', description: 'Pengukuran dampak, iterasi, dan perluasan inisiatif yang terbukti berhasil.' },
    ],
    stats: [
      { value: '50+', label: 'Klien Konsultasi' },
      { value: '120+', label: 'Event MICE Terselenggara' },
      { value: '4.8/5', label: 'Kepuasan Peserta Pelatihan' },
    ],
    faqs: [
      { q: 'Berapa lama durasi tipikal proyek konsultasi?', a: 'Bervariasi dari 4 minggu (asesmen cepat) hingga 6-12 bulan (transformasi menyeluruh), tergantung ruang lingkup.' },
      { q: 'Apakah pelatihan bisa diselenggarakan in-house?', a: 'Ya. Seluruh program pelatihan dapat diselenggarakan di lokasi perusahaan Anda atau di fasilitas mitra kami.' },
      { q: 'Skala event MICE apa yang bisa ditangani?', a: 'Dari pertemuan eksekutif 20 orang hingga konferensi dan pameran nasional dengan ribuan peserta.' },
    ],
    image: '/images/insight-ai.png',
  },
  {
    slug: 'konstruksi',
    name: 'Konstruksi',
    subtitle: 'Construction & Tender',
    icon: 'Building2',
    color: '#C75B39',
    heroTitle: 'Infrastruktur yang Dibangun untuk Generasi',
    heroDescription:
      'Konstruksi gedung, jembatan, jaringan irigasi, dan bangunan sipil — dikerjakan dengan standar keselamatan tertinggi dan tata kelola proyek yang transparan.',
    overview: [
      'Divisi Konstruksi JAC mengerjakan proyek gedung perkantoran, bangunan sipil, jembatan, jalan layang, jaringan irigasi dan drainase, hingga instalasi pengolahan air bersih. Kami mengikuti tender pemerintah maupun swasta dengan rekam jejak penyelesaian tepat waktu.',
      'Setiap proyek dikelola dengan sistem monitoring digital: laporan harian lapangan, kurva-S progres, dan dokumentasi mutu yang dapat diakses klien secara real-time.',
    ],
    capabilities: [
      { title: 'Konstruksi Gedung', description: 'Gedung perkantoran, fasilitas komersial, dan bangunan institusi dengan sertifikasi mutu.' },
      { title: 'Bangunan Sipil', description: 'Jembatan, jalan layang, fly over, dan underpass dengan standar teknis Bina Marga.' },
      { title: 'Irigasi & Drainase', description: 'Jaringan irigasi pertanian, drainase perkotaan, dan pengendalian banjir.' },
      { title: 'Pengolahan Air Bersih', description: 'Konstruksi instalasi pengolahan air bersih dan jaringan distribusinya.' },
      { title: 'Manajemen Tender', description: 'Penyusunan dokumen penawaran, estimasi biaya, dan strategi tender kompetitif.' },
      { title: 'Monitoring Digital', description: 'Dashboard progres proyek real-time dengan laporan harian dan dokumentasi foto udara.' },
    ],
    approach: [
      { step: '01', title: 'Studi & Perencanaan', description: 'Survei lokasi, analisis tanah, dan perencanaan teknis detail (DED).' },
      { step: '02', title: 'Mobilisasi', description: 'Pengadaan material, alat berat, dan tenaga kerja bersertifikat K3.' },
      { step: '03', title: 'Pelaksanaan', description: 'Konstruksi dengan quality control berlapis dan laporan progres mingguan.' },
      { step: '04', title: 'Serah Terima', description: 'Commissioning, masa pemeliharaan, dan dokumentasi as-built lengkap.' },
    ],
    stats: [
      { value: '28', label: 'Proyek Aktif' },
      { value: '0', label: 'Kecelakaan Fatal (Zero LTI)' },
      { value: '95%', label: 'Penyelesaian Tepat Waktu' },
    ],
    faqs: [
      { q: 'Apakah JAC memiliki SBU (Sertifikat Badan Usaha) konstruksi?', a: 'Ya, kami memiliki SBU aktif untuk klasifikasi bangunan gedung dan bangunan sipil sesuai regulasi LPJK.' },
      { q: 'Bagaimana sistem pengawasan mutu proyek?', a: 'Kami menerapkan quality control tiga lapis: mandor lapangan, quality engineer internal, dan konsultan pengawas independen.' },
      { q: 'Apakah menerima proyek di luar Pulau Jawa?', a: 'Ya. Kami memiliki pengalaman mobilisasi proyek di Sumatera, Kalimantan, dan Sulawesi.' },
    ],
    image: '/images/insight-konstruksi.png',
  },
  {
    slug: 'industri',
    name: 'Industri Sawit',
    subtitle: 'Palm Oil & CPO Trading',
    icon: 'Factory',
    color: '#2D6A4F',
    heroTitle: 'Hilirisasi Sawit dari Hulu ke Hilir',
    heroDescription:
      'Fraksinasi, pemurnian, dan trading CPO serta minyak goreng kelapa sawit — industri hilir yang terintegrasi dengan rantai pasok perkebunan.',
    overview: [
      'Divisi Industri JAC bergerak di sektor hilir kelapa sawit: pemisahan/fraksinasi minyak mentah kelapa sawit (CPO) dan inti sawit (PKO), pemurnian, hingga produksi minyak goreng. Integrasi dengan divisi Pertanian memberi kami keunggulan kepastian pasokan bahan baku.',
      'Kami juga aktif dalam trading CPO dan produk turunannya — olein, stearin, dan PKO — dengan akses harga pasar real-time dan jaringan pembeli industri di dalam dan luar negeri.',
    ],
    capabilities: [
      { title: 'Fraksinasi CPO & PKO', description: 'Pemisahan minyak mentah kelapa sawit dan inti sawit menjadi fraksi olein dan stearin.' },
      { title: 'Pemurnian (Refinery)', description: 'Proses RBD (Refined, Bleached, Deodorized) untuk minyak sawit siap konsumsi.' },
      { title: 'Produksi Minyak Goreng', description: 'Industri minyak goreng kelapa sawit dengan standar SNI dan sertifikasi halal.' },
      { title: 'Trading CPO', description: 'Jual-beli CPO dan turunannya dengan referensi harga KPBN dan bursa global.' },
      { title: 'Manajemen Gudang & Tangki', description: 'Fasilitas penyimpanan tangki timbun dengan sistem monitoring stok digital.' },
      { title: 'Sertifikasi ISPO/RSPO', description: 'Pendampingan sertifikasi keberlanjutan untuk akses pasar ekspor premium.' },
    ],
    approach: [
      { step: '01', title: 'Sourcing TBS & CPO', description: 'Pengadaan bahan baku dari kebun sendiri dan mitra petani plasma terverifikasi.' },
      { step: '02', title: 'Pengolahan', description: 'Fraksinasi dan pemurnian dengan rendemen optimal dan limbah terkelola.' },
      { step: '03', title: 'Quality Assurance', description: 'Uji laboratorium FFA, moisture, dan parameter mutu di setiap batch.' },
      { step: '04', title: 'Distribusi', description: 'Pengiriman ke pembeli industri dan ritel dengan logistik tangki khusus.' },
    ],
    stats: [
      { value: '5.200 Ha', label: 'Area Kebun Terintegrasi' },
      { value: '6', label: 'Produk Turunan Sawit' },
      { value: '24/7', label: 'Monitoring Harga Real-time' },
    ],
    faqs: [
      { q: 'Bagaimana penentuan harga trading CPO?', a: 'Harga mengacu pada tender KPBN Inacom dan bursa Rotterdam/Bursa Malaysia, disesuaikan kualitas dan lokasi serah.' },
      { q: 'Apakah produk minyak goreng sudah bersertifikat?', a: 'Ya, produk kami memenuhi SNI 7709 dan tersertifikasi halal MUI.' },
      { q: 'Apakah JAC menerima kemitraan pengolahan (maklon)?', a: 'Kami terbuka untuk skema toll manufacturing dengan volume minimum tertentu. Hubungi tim kami untuk diskusi.' },
    ],
    image: '/images/insight-sawit.png',
  },
  {
    slug: 'pertanian',
    name: 'Pertanian & Perikanan',
    subtitle: 'Agriculture & Fishery',
    icon: 'Leaf',
    color: '#1B7A6E',
    heroTitle: 'Agrikultur Berkelanjutan untuk Indonesia',
    heroDescription:
      'Perkebunan kelapa sawit, kehutanan, dan perikanan yang dikelola dengan prinsip keberlanjutan, teknologi presisi, dan kemitraan bersama masyarakat lokal.',
    overview: [
      'Divisi Pertanian, Kehutanan & Perikanan JAC mengelola perkebunan buah kelapa sawit seluas ribuan hektar dengan praktik agrikultur presisi — pemetaan drone, pemupukan berimbang, dan panen berbasis data kematangan buah.',
      'Kami berkomitmen pada keberlanjutan: sertifikasi ISPO, kebijakan tanpa deforestasi (NDPE), serta program kemitraan plasma yang memberdayakan petani lokal di sekitar wilayah operasi.',
    ],
    capabilities: [
      { title: 'Perkebunan Kelapa Sawit', description: 'Pengelolaan kebun inti dan plasma dengan produktivitas TBS di atas rata-rata nasional.' },
      { title: 'Agrikultur Presisi', description: 'Pemetaan drone, sensor tanah, dan analitik data untuk optimalisasi input pertanian.' },
      { title: 'Pengelolaan Kehutanan', description: 'Praktik kehutanan lestari dan rehabilitasi lahan sesuai regulasi KLHK.' },
      { title: 'Budidaya Perikanan', description: 'Unit budidaya perikanan air tawar dan payau dengan standar CBIB.' },
      { title: 'Kemitraan Plasma', description: 'Program plasma petani sawit dengan pendampingan teknis dan jaminan pembelian TBS.' },
      { title: 'Sertifikasi Keberlanjutan', description: 'ISPO, RSPO, dan audit NDPE untuk kepatuhan pasar global.' },
    ],
    approach: [
      { step: '01', title: 'Pemetaan & Perencanaan', description: 'Survei lahan, analisis kesesuaian, dan perencanaan tata kelola blok kebun.' },
      { step: '02', title: 'Budidaya Presisi', description: 'Penanaman, pemeliharaan, dan pemupukan berbasis data kondisi aktual lahan.' },
      { step: '03', title: 'Panen & Pascapanen', description: 'Panen tepat matang dan pengiriman TBS ke pabrik dalam 24 jam.' },
      { step: '04', title: 'Keberlanjutan', description: 'Monitoring lingkungan, pelaporan ESG, dan pembinaan masyarakat sekitar.' },
    ],
    stats: [
      { value: '5.200 Ha', label: 'Luas Kebun Dikelola' },
      { value: '800+', label: 'Petani Plasma Bermitra' },
      { value: '22 Ton/Ha', label: 'Produktivitas TBS Tahunan' },
    ],
    faqs: [
      { q: 'Di mana lokasi perkebunan JAC?', a: 'Wilayah operasi utama kami berada di Sumatera dan Kalimantan, dengan kantor manajemen di Jakarta.' },
      { q: 'Bagaimana skema kemitraan plasma?', a: 'Petani mendapat pendampingan teknis, akses bibit unggul, dan jaminan pembelian TBS dengan harga penetapan Disbun.' },
      { q: 'Apa komitmen lingkungan JAC?', a: 'Kami menerapkan kebijakan NDPE: tanpa deforestasi, tanpa pembukaan gambut, dan tanpa eksploitasi.' },
    ],
    image: '/images/insight-pertanian.png',
  },
  {
    slug: 'perizinan',
    name: 'Perizinan & Sertifikasi',
    subtitle: 'Licensing & Certification',
    icon: 'ShieldCheck',
    color: '#4A2D6A',
    heroTitle: 'Legalitas Bisnis Tanpa Hambatan',
    heroDescription:
      'Pengurusan izin usaha, sertifikasi, dan legalitas korporasi untuk pihak ketiga — didukung jaringan notaris dan pemahaman mendalam atas sistem OSS-RBA.',
    overview: [
      'Divisi Perizinan & Sertifikasi JAC membantu perusahaan dan perorangan mengurus seluruh aspek legalitas usaha: pendirian badan hukum, NIB dan perizinan berusaha berbasis risiko (OSS-RBA), sertifikat standar, hingga izin operasional sektoral.',
      'Bekerja sama dengan jaringan notaris dan konsultan hukum berpengalaman, kami memastikan setiap dokumen sah, akurat, dan selesai dalam waktu yang terukur — dengan pelacakan status pengajuan yang transparan.',
    ],
    capabilities: [
      { title: 'Pendirian Badan Usaha', description: 'PT, CV, yayasan, dan koperasi — dari akta notaris hingga SK Kemenkumham.' },
      { title: 'NIB & OSS-RBA', description: 'Pengurusan Nomor Induk Berusaha dan perizinan berbasis risiko di sistem OSS.' },
      { title: 'Izin Sektoral', description: 'Izin konstruksi (SBU), industri, perdagangan (API), dan izin operasional lainnya.' },
      { title: 'Sertifikasi Produk', description: 'SNI, halal, BPOM, dan sertifikasi mutu untuk akses pasar domestik dan ekspor.' },
      { title: 'Verifikasi Notaris', description: 'Legalisasi dan verifikasi dokumen melalui jaringan notaris resmi kami.' },
      { title: 'Kepatuhan Berkelanjutan', description: 'Pengingat perpanjangan izin, pelaporan LKPM, dan audit kepatuhan tahunan.' },
    ],
    approach: [
      { step: '01', title: 'Konsultasi Awal', description: 'Identifikasi kebutuhan izin sesuai KBLI dan skala usaha Anda — gratis.' },
      { step: '02', title: 'Persiapan Dokumen', description: 'Checklist dokumen lengkap dengan pendampingan pengisian yang benar.' },
      { step: '03', title: 'Pengajuan & Monitoring', description: 'Pengajuan resmi dengan pelacakan status real-time di setiap tahapan.' },
      { step: '04', title: 'Serah Terima Legalitas', description: 'Dokumen izin diserahkan lengkap dengan panduan kewajiban kepatuhan.' },
    ],
    stats: [
      { value: '470+', label: 'Izin Berhasil Diterbitkan' },
      { value: '14 Hari', label: 'Rata-rata Waktu Proses NIB' },
      { value: '100%', label: 'Dokumen Terverifikasi Notaris' },
    ],
    faqs: [
      { q: 'Berapa lama proses pendirian PT?', a: 'Dengan dokumen lengkap, akta hingga SK Kemenkumham dan NIB umumnya selesai dalam 7-14 hari kerja.' },
      { q: 'Apakah bisa mengurus izin di luar Jakarta?', a: 'Bisa. Sistem OSS berlaku nasional dan kami melayani klien di seluruh Indonesia secara daring maupun tatap muka.' },
      { q: 'Bagaimana jaminan keamanan dokumen klien?', a: 'Seluruh dokumen dikelola dengan perjanjian kerahasiaan (NDA) dan penyimpanan digital terenkripsi.' },
    ],
    image: '/images/insight-perizinan.png',
  },
]

// ---------- INSIGHTS (full articles) ----------
export interface Article {
  slug: string
  category: string
  categoryColor: string
  title: string
  excerpt: string
  date: string
  readTime: string
  author: string
  authorRole: string
  image: string
  content: { heading?: string; paragraphs: string[] }[]
}

export const ARTICLES: Article[] = [
  {
    slug: 'masa-depan-industri-sawit-indonesia',
    category: 'Industri Sawit',
    categoryColor: '#2D6A4F',
    title: 'Masa Depan Industri Sawit Indonesia 2026',
    excerpt: 'Analisis mendalam tentang tren, tantangan, dan peluang industri kelapa sawit di pasar global yang semakin kompetitif.',
    date: '15 Juni 2026',
    readTime: '8 menit',
    author: 'Tim Riset JAC',
    authorRole: 'Divisi Industri',
    image: '/images/insight-sawit.png',
    content: [
      {
        paragraphs: [
          'Indonesia tetap menjadi produsen minyak kelapa sawit terbesar di dunia dengan kontribusi lebih dari 55% pasokan global. Namun lanskap industri ini sedang bergeser cepat: regulasi keberlanjutan Uni Eropa (EUDR), mandatori biodiesel B40 domestik, dan konsolidasi rantai pasok menuntut pelaku industri untuk beradaptasi lebih gesit dari sebelumnya.',
          'Dalam analisis ini, tim riset JAC memetakan tiga kekuatan utama yang akan membentuk industri sawit Indonesia hingga akhir dekade — dan bagaimana pelaku usaha dari petani hingga refinery dapat memposisikan diri.',
        ],
      },
      {
        heading: 'Hilirisasi Bukan Lagi Pilihan',
        paragraphs: [
          'Nilai tambah terbesar industri sawit kini berada di sektor hilir. Selisih margin antara ekspor CPO mentah dan produk turunan seperti oleokimia, minyak goreng premium, dan specialty fats terus melebar. Pemerintah pun mendorong hilirisasi lewat kebijakan pungutan ekspor yang progresif.',
          'Bagi pelaku menengah, strategi paling realistis adalah kemitraan fraksinasi dan toll manufacturing — memanfaatkan kapasitas refinery yang belum optimal tanpa investasi modal besar. Model ini yang kami terapkan di JAC: integrasi kebun, pengolahan, dan trading dalam satu ekosistem.',
        ],
      },
      {
        heading: 'Keberlanjutan sebagai Tiket Masuk Pasar',
        paragraphs: [
          'Sertifikasi ISPO kini wajib bagi seluruh pelaku perkebunan, sementara RSPO dan kepatuhan EUDR menjadi tiket masuk pasar Eropa. Data traceability — melacak TBS dari blok kebun hingga tangki refinery — bukan lagi diferensiasi, melainkan persyaratan dasar.',
          'Investasi pada sistem traceability digital terbukti mengembalikan nilainya: premium harga produk tersertifikasi mencapai 3-7% di pasar ekspor, belum termasuk akses ke pembeli korporat multinasional yang mensyaratkan NDPE.',
        ],
      },
      {
        heading: 'Petani Plasma di Pusat Rantai Pasok',
        paragraphs: [
          'Sekitar 41% kebun sawit Indonesia dikelola petani swadaya. Produktivitas mereka rata-rata 30% di bawah kebun korporat — gap yang sekaligus merupakan peluang terbesar industri. Program peremajaan sawit rakyat (PSR) dan kemitraan plasma modern dengan pendampingan agronomi presisi dapat menaikkan produktivitas nasional secara signifikan.',
          'Kesimpulannya: dekade ini milik pelaku yang mengintegrasikan hilirisasi, keberlanjutan, dan pemberdayaan petani dalam satu strategi. Industri sawit Indonesia tidak sedang melambat — ia sedang bertransformasi.',
        ],
      },
    ],
  },
  {
    slug: 'digitalisasi-perizinan-peluang-tantangan',
    category: 'Perizinan',
    categoryColor: '#4A2D6A',
    title: 'Digitalisasi Perizinan: Peluang & Tantangan OSS-RBA',
    excerpt: 'Bagaimana transformasi digital membentuk ulang proses perizinan bisnis di Indonesia dan apa yang perlu Anda persiapkan.',
    date: '10 Juni 2026',
    readTime: '6 menit',
    author: 'Divisi Perizinan JAC',
    authorRole: 'Legal & Compliance',
    image: '/images/insight-perizinan.png',
    content: [
      {
        paragraphs: [
          'Sejak diberlakukannya sistem Online Single Submission berbasis risiko (OSS-RBA), lanskap perizinan usaha di Indonesia berubah fundamental. Izin tidak lagi diberikan berdasarkan jenis usaha semata, melainkan tingkat risiko kegiatan — rendah, menengah, atau tinggi.',
          'Perubahan ini mempercepat proses bagi jutaan UMKM berisiko rendah yang kini cukup mengantongi NIB. Namun bagi usaha berisiko menengah-tinggi, kompleksitas justru berpindah ke pemenuhan sertifikat standar dan persetujuan lingkungan.',
        ],
      },
      {
        heading: 'Tiga Kesalahan Paling Umum',
        paragraphs: [
          'Dari ratusan pengajuan yang kami dampingi, tiga kesalahan paling sering terjadi: pemilihan kode KBLI yang tidak sesuai kegiatan aktual, ketidaksesuaian lokasi usaha dengan tata ruang (KKPR), dan kelalaian pelaporan LKPM triwulanan yang berujung pembekuan izin.',
          'Kesalahan KBLI adalah yang paling mahal. Kode yang salah membuat izin turunan tidak dapat diterbitkan dan — dalam kasus tender pemerintah — dapat menggugurkan penawaran secara administratif.',
        ],
      },
      {
        heading: 'Persiapan yang Direkomendasikan',
        paragraphs: [
          'Pertama, audit legalitas menyeluruh: pastikan akta, NIB, KBLI, dan izin operasional selaras dengan kegiatan bisnis aktual. Kedua, bangun kalender kepatuhan — perpanjangan sertifikat, pelaporan LKPM, dan kewajiban lingkungan memiliki tenggat yang berbeda-beda.',
          'Ketiga, jangan menunggu ekspansi untuk membereskan legalitas. Penambahan bidang usaha atau lokasi baru akan jauh lebih cepat jika fondasi perizinan sudah rapi. Di JAC, kami menyebutnya "legal readiness" — kesiapan legalitas sebagai aset strategis, bukan beban administratif.',
        ],
      },
    ],
  },
  {
    slug: 'strategi-pertumbuhan-bisnis-era-ai',
    category: 'Konsultasi',
    categoryColor: '#1E3A5F',
    title: 'Strategi Pertumbuhan Bisnis di Era AI',
    excerpt: 'Memanfaatkan kecerdasan buatan untuk mendorong pertumbuhan bisnis yang berkelanjutan dan kompetitif.',
    date: '5 Juni 2026',
    readTime: '10 menit',
    author: 'Wirono, SE.M.Pd',
    authorRole: 'Direktur Utama',
    image: '/images/insight-ai.png',
    content: [
      {
        paragraphs: [
          'Kecerdasan buatan telah melewati fase eksperimen. Di 2026, pertanyaannya bukan lagi "apakah perlu mengadopsi AI" melainkan "di proses mana AI memberikan pengembalian tertinggi". Pengalaman kami mendampingi klien lintas sektor menunjukkan pola yang konsisten: perusahaan yang berhasil bukan yang paling canggih teknologinya, melainkan yang paling disiplin memilih kasus penggunaan.',
        ],
      },
      {
        heading: 'Mulai dari Masalah, Bukan Teknologi',
        paragraphs: [
          'Kesalahan klasik adopsi AI adalah membeli teknologi lalu mencari masalahnya. Pendekatan yang benar terbalik: identifikasi proses dengan volume tinggi, aturan yang jelas, dan biaya kesalahan yang terukur — di sanalah AI memberikan dampak tercepat.',
          'Di sektor perdagangan, contohnya prediksi permintaan dan otomasi dokumen ekspor-impor. Di konstruksi, analisis foto progres lapangan dan deteksi risiko keterlambatan. Di perkebunan, pemetaan drone dengan computer vision untuk deteksi dini serangan hama.',
        ],
      },
      {
        heading: 'Manusia Tetap di Pusat Keputusan',
        paragraphs: [
          'AI terbaik berfungsi sebagai penasihat, bukan pengambil keputusan akhir. Struktur yang kami rekomendasikan: AI menyaring dan merangkum, manusia memutuskan dan bertanggung jawab. Model ini menjaga akuntabilitas sekaligus mengakselerasi siklus keputusan hingga 60%.',
          'Investasi paling penting justru pada manusia: pelatihan literasi data untuk manajemen menengah adalah prediktor keberhasilan adopsi AI yang paling kuat dalam pengamatan kami — jauh melampaui besarnya anggaran teknologi.',
        ],
      },
      {
        heading: 'Peta Jalan Praktis 12 Bulan',
        paragraphs: [
          'Kuartal pertama: audit proses dan pilih dua kasus penggunaan prioritas. Kuartal kedua: pilot terukur dengan KPI jelas. Kuartal ketiga: evaluasi, hentikan yang gagal tanpa sentimentalitas, skalakan yang berhasil. Kuartal keempat: institusionalisasi — SOP, pelatihan, dan tata kelola data.',
          'Pertumbuhan di era AI bukan tentang kecepatan adopsi, melainkan ketepatan eksekusi. Perusahaan yang menang adalah yang menggabungkan ambisi teknologi dengan disiplin manajemen klasik.',
        ],
      },
    ],
  },
  {
    slug: 'logistik-perdagangan-nasional-2026',
    category: 'Perdagangan',
    categoryColor: '#B8860B',
    title: 'Membaca Arah Logistik & Perdagangan Nasional',
    excerpt: 'Biaya logistik Indonesia mulai turun. Apa artinya bagi pelaku perdagangan domestik dan bagaimana memanfaatkan momentumnya.',
    date: '28 Mei 2026',
    readTime: '7 menit',
    author: 'Tim Riset JAC',
    authorRole: 'Divisi Perdagangan',
    image: '/images/insight-perdagangan.png',
    content: [
      {
        paragraphs: [
          'Rasio biaya logistik terhadap PDB Indonesia perlahan membaik seiring beroperasinya pelabuhan-pelabuhan baru dan integrasi National Logistics Ecosystem (NLE). Bagi pelaku perdagangan, penurunan ini bukan sekadar statistik — ia mengubah kalkulus kelayakan rute distribusi yang sebelumnya tidak ekonomis.',
        ],
      },
      {
        heading: 'Koridor Timur Semakin Menarik',
        paragraphs: [
          'Rute distribusi ke Indonesia timur yang dulu memakan margin kini semakin layak berkat subsidi tol laut dan konsolidasi muatan balik. Pelaku yang membangun jaringan distributor di Sulawesi, Maluku, dan Papua hari ini akan menikmati posisi first-mover ketika daya beli kawasan tersebut tumbuh.',
          'Kuncinya adalah muatan balik: komoditas perikanan, hasil bumi, dan produk olahan lokal dapat mengisi kontainer kembali ke barat, memangkas biaya efektif hingga 35%.',
        ],
      },
      {
        heading: 'Digitalisasi Dokumen Perdagangan',
        paragraphs: [
          'Integrasi NLE memangkas waktu pengurusan dokumen ekspor-impor secara signifikan. Delivery order elektronik, e-SKA, dan single submission kepabeanan kini menjadi standar. Pelaku yang masih mengandalkan proses manual bukan hanya lebih lambat — mereka semakin mahal.',
          'Rekomendasi kami: investasikan pada kapabilitas digital trade documentation sekarang, selagi selisih efisiensi masih menjadi keunggulan kompetitif dan belum menjadi standar minimum industri.',
        ],
      },
    ],
  },
  {
    slug: 'konstruksi-berkelanjutan-standar-baru',
    category: 'Konstruksi',
    categoryColor: '#C75B39',
    title: 'Konstruksi Berkelanjutan: Dari Kepatuhan ke Keunggulan',
    excerpt: 'Green building dan material rendah karbon bergeser dari persyaratan tender menjadi sumber keunggulan biaya jangka panjang.',
    date: '20 Mei 2026',
    readTime: '6 menit',
    author: 'Divisi Konstruksi JAC',
    authorRole: 'Engineering',
    image: '/images/insight-konstruksi.png',
    content: [
      {
        paragraphs: [
          'Tender infrastruktur pemerintah kini semakin sering mencantumkan persyaratan keberlanjutan: material rendah karbon, pengelolaan limbah konstruksi, dan efisiensi energi bangunan. Kontraktor yang memandangnya sebagai beban administratif akan tertinggal dari yang menjadikannya kapabilitas inti.',
        ],
      },
      {
        heading: 'Ekonomi Material Rendah Karbon',
        paragraphs: [
          'Beton dengan campuran fly ash dan slag kini tersedia luas dengan harga kompetitif, sementara baja daur ulang telah mencapai paritas harga di banyak wilayah. Selisih biaya green material terus menyempit — dan pada beberapa kategori sudah negatif jika memperhitungkan siklus hidup bangunan.',
          'Pengalaman proyek kami menunjukkan efisiensi energi operasional gedung dapat menghemat 20-30% biaya utilitas tahunan, angka yang membuat investasi desain pasif kembali modal dalam 4-6 tahun.',
        ],
      },
      {
        heading: 'Keselamatan Tetap Fondasi Utama',
        paragraphs: [
          'Keberlanjutan sejati mencakup manusia. Budaya zero lost-time injury (LTI) bukan hanya kewajiban moral — rekam jejak K3 yang bersih semakin menjadi faktor penentu prakualifikasi tender besar, baik pemerintah maupun swasta.',
          'Kontraktor masa depan adalah yang mengintegrasikan mutu, keselamatan, dan jejak lingkungan dalam satu sistem manajemen proyek digital. Di JAC, ketiganya terpantau dalam satu dashboard yang sama.',
        ],
      },
    ],
  },
  {
    slug: 'akuakultur-peluang-ekonomi-biru',
    category: 'Pertanian & Perikanan',
    categoryColor: '#1B7A6E',
    title: 'Akuakultur & Ekonomi Biru: Peluang yang Belum Tergarap',
    excerpt: 'Potensi budidaya perikanan Indonesia baru tergarap sebagian kecil. Teknologi dan kemitraan membuka babak pertumbuhan baru.',
    date: '12 Mei 2026',
    readTime: '7 menit',
    author: 'Tim Riset JAC',
    authorRole: 'Divisi Pertanian & Perikanan',
    image: '/images/insight-pertanian.png',
    content: [
      {
        paragraphs: [
          'Indonesia memiliki potensi lahan budidaya perikanan terbesar di dunia, namun tingkat pemanfaatannya masih di bawah 10%. Sementara permintaan protein ikan global terus tumbuh, akuakultur nasional berdiri di ambang lompatan besar — jika tiga hambatan klasiknya teratasi.',
        ],
      },
      {
        heading: 'Teknologi Menurunkan Risiko Budidaya',
        paragraphs: [
          'Sensor kualitas air, pakan otomatis, dan asuransi parametrik mengubah profil risiko budidaya secara dramatis. Tingkat kematian benih yang dulu menjadi momok kini dapat ditekan melalui monitoring oksigen terlarut dan suhu secara real-time dengan biaya perangkat yang semakin terjangkau.',
          'Model kemitraan inti-plasma yang teruji di sawit dapat direplikasi di perikanan: perusahaan menyediakan benih, pakan, dan teknologi; pembudidaya menyediakan lahan dan tenaga; hasil dibeli dengan jaminan harga.',
        ],
      },
      {
        heading: 'Sertifikasi Membuka Pasar Ekspor',
        paragraphs: [
          'Sertifikasi CBIB (Cara Budidaya Ikan yang Baik) dan standar ASC/BAP menjadi kunci akses pasar ekspor bernilai tinggi. Produk udang dan ikan tersertifikasi menikmati premium harga 10-20% di pasar Jepang, Amerika, dan Eropa.',
          'Ekonomi biru bukan slogan — ia adalah sektor pertumbuhan nyata dekade ini. Pelaku yang membangun kapabilitas budidaya berkelanjutan hari ini sedang menanam posisi di pasar protein masa depan.',
        ],
      },
    ],
  },
  {
    slug: 'mice-indonesia-bangkit',
    category: 'Jasa & MICE',
    categoryColor: '#1E3A5F',
    title: 'Industri MICE Indonesia: Momentum Kebangkitan',
    excerpt: 'Pertemuan dan pameran bisnis kembali bergairah. Bagaimana penyelenggara dan korporasi memaksimalkan nilai setiap event.',
    date: '2 Mei 2026',
    readTime: '5 menit',
    author: 'Divisi Jasa JAC',
    authorRole: 'MICE & Events',
    image: '/images/office-jakarta.png',
    content: [
      {
        paragraphs: [
          'Industri MICE Indonesia tumbuh dua digit didorong posisi strategis di ASEAN, infrastruktur venue baru, dan kebijakan bebas visa yang diperluas. Jakarta, Bali, dan kini IKN bersaing menjadi tuan rumah konferensi regional — menciptakan peluang besar bagi penyelenggara profesional.',
        ],
      },
      {
        heading: 'Event Hibrida Menjadi Standar',
        paragraphs: [
          'Format hibrida — peserta fisik dan virtual bersamaan — kini menjadi ekspektasi standar, bukan nilai tambah. Konsekuensinya, kualitas produksi siaran, platform interaksi daring, dan pengalaman peserta virtual harus dirancang setara dengan peserta di lokasi.',
          'Data adalah dividen tersembunyi event hibrida: perilaku peserta, sesi terpopuler, dan koneksi bisnis yang terbentuk dapat diukur presisi — memberi penyelenggara dan sponsor bukti ROI yang dulu mustahil didapat.',
        ],
      },
      {
        heading: 'Dari Acara Menjadi Aset Strategis',
        paragraphs: [
          'Korporasi terdepan tidak lagi memandang event sebagai pengeluaran seremoni, melainkan kanal akuisisi klien dan pembangunan ekosistem. Konferensi tahunan yang dikelola baik menghasilkan pipeline bisnis, konten thought leadership setahun penuh, dan loyalitas komunitas.',
          'Kuncinya ada pada desain pengalaman: kurasi peserta, fasilitasi pertemuan bisnis yang terstruktur, dan tindak lanjut sistematis pasca-acara. Event terbaik dimulai jauh sebelum hari-H dan tidak pernah benar-benar berakhir.',
        ],
      },
    ],
  },
]

// ---------- CAREERS ----------
export interface Job {
  slug: string
  title: string
  division: string
  location: string
  type: string
  summary: string
  responsibilities: string[]
  requirements: string[]
}

export const JOBS: Job[] = [
  {
    slug: 'business-development-manager',
    title: 'Business Development Manager',
    division: 'Perdagangan',
    location: 'Jakarta',
    type: 'Full-time',
    summary: 'Memimpin ekspansi jaringan mitra dagang dan mengidentifikasi peluang bisnis baru di sektor perdagangan komoditas dan mesin industri.',
    responsibilities: [
      'Membangun dan mengelola pipeline klien B2B di sektor komoditas dan industri',
      'Menegosiasikan kontrak perdagangan dan kemitraan strategis',
      'Menganalisis tren pasar dan menyusun strategi penetrasi wilayah baru',
      'Berkolaborasi dengan tim logistik dan legal untuk eksekusi transaksi',
    ],
    requirements: [
      'Minimal 5 tahun pengalaman business development di sektor perdagangan/distribusi',
      'Jaringan luas di industri komoditas atau mesin industri',
      'Kemampuan negosiasi dan komunikasi tingkat eksekutif',
      'Bersedia melakukan perjalanan dinas domestik dan internasional',
    ],
  },
  {
    slug: 'civil-engineer',
    title: 'Civil Engineer',
    division: 'Konstruksi',
    location: 'Surabaya',
    type: 'Full-time',
    summary: 'Bertanggung jawab atas perencanaan teknis dan pengawasan mutu proyek bangunan sipil — jembatan, irigasi, dan gedung.',
    responsibilities: [
      'Menyusun perencanaan teknis detail (DED) dan estimasi biaya proyek',
      'Mengawasi pelaksanaan konstruksi dan memastikan kepatuhan spesifikasi teknis',
      'Mengelola laporan progres harian dan dokumentasi mutu',
      'Berkoordinasi dengan konsultan pengawas dan pemilik proyek',
    ],
    requirements: [
      'S1 Teknik Sipil dengan minimal 3 tahun pengalaman proyek infrastruktur',
      'Memiliki SKA/SKK Konstruksi aktif (minimal Ahli Muda)',
      'Menguasai AutoCAD, SAP2000/ETABS, dan MS Project',
      'Bersedia ditempatkan di lokasi proyek',
    ],
  },
  {
    slug: 'cpo-trading-analyst',
    title: 'CPO Trading Analyst',
    division: 'Industri',
    location: 'Jakarta',
    type: 'Full-time',
    summary: 'Menganalisis pergerakan harga CPO dan produk turunannya untuk mendukung keputusan trading dan manajemen risiko.',
    responsibilities: [
      'Memantau harga KPBN, Bursa Malaysia, dan Rotterdam secara harian',
      'Menyusun analisis fundamental dan teknikal pasar minyak nabati',
      'Mendukung eksekusi kontrak jual-beli CPO dan produk turunan',
      'Menyusun laporan posisi dan eksposur risiko mingguan',
    ],
    requirements: [
      'S1 Ekonomi, Keuangan, atau Agribisnis dengan minat kuat di pasar komoditas',
      'Pemahaman rantai pasok kelapa sawit dari kebun hingga refinery',
      'Kemampuan analisis data (Excel tingkat lanjut; Python menjadi nilai tambah)',
      'Kemampuan bahasa Inggris bisnis aktif',
    ],
  },
  {
    slug: 'legal-permit-specialist',
    title: 'Legal & Permit Specialist',
    division: 'Perizinan',
    location: 'Jakarta',
    type: 'Full-time',
    summary: 'Mengelola pengurusan perizinan klien di sistem OSS-RBA dan memastikan kepatuhan legalitas korporasi.',
    responsibilities: [
      'Memproses pengajuan NIB, sertifikat standar, dan izin operasional klien',
      'Melakukan audit legalitas dan menyusun rekomendasi kepatuhan',
      'Berkoordinasi dengan notaris dan instansi pemerintah terkait',
      'Memelihara kalender kepatuhan dan pengingat kewajiban klien',
    ],
    requirements: [
      'S1 Hukum dengan minimal 2 tahun pengalaman perizinan usaha/corporate legal',
      'Menguasai sistem OSS-RBA dan regulasi perizinan berusaha',
      'Teliti, terorganisir, dan mampu mengelola banyak klien paralel',
      'Kemampuan komunikasi yang baik dengan klien dan instansi',
    ],
  },
  {
    slug: 'estate-manager-sawit',
    title: 'Estate Manager (Kebun Sawit)',
    division: 'Pertanian',
    location: 'Kalimantan Tengah',
    type: 'Full-time',
    summary: 'Memimpin operasional kebun kelapa sawit termasuk produksi, kemitraan plasma, dan kepatuhan keberlanjutan.',
    responsibilities: [
      'Mengelola operasional kebun: pemeliharaan, panen, dan transportasi TBS',
      'Membina hubungan dengan petani plasma dan masyarakat sekitar',
      'Memastikan kepatuhan ISPO dan kebijakan NDPE perusahaan',
      'Mengelola anggaran, tenaga kerja, dan target produktivitas blok',
    ],
    requirements: [
      'S1 Pertanian/Agronomi dengan minimal 7 tahun pengalaman perkebunan sawit',
      'Pengalaman memimpin estate minimal 2.000 Ha',
      'Pemahaman sertifikasi ISPO/RSPO dan praktik agrikultur presisi',
      'Kepemimpinan lapangan yang kuat dan kemampuan pembinaan tim besar',
    ],
  },
  {
    slug: 'event-manager-mice',
    title: 'Event Manager (MICE)',
    division: 'Jasa',
    location: 'Jakarta',
    type: 'Full-time',
    summary: 'Merancang dan mengeksekusi event korporat — konferensi, pameran, dan perjalanan insentif — dari konsep hingga evaluasi.',
    responsibilities: [
      'Menyusun konsep kreatif, anggaran, dan timeline event klien',
      'Mengelola vendor: venue, produksi, katering, dan teknologi event',
      'Memimpin eksekusi hari-H dengan tim lapangan',
      'Menyusun laporan evaluasi dan ROI event untuk klien',
    ],
    requirements: [
      'Minimal 4 tahun pengalaman event management/MICE',
      'Portofolio event korporat berskala 200+ peserta',
      'Kemampuan multitasking dan bekerja di bawah tekanan tenggat',
      'Jaringan vendor event yang luas di Jabodetabek',
    ],
  },
]

export const BENEFITS = [
  { title: 'Pengembangan Karier', description: 'Jalur karier terstruktur dengan program mentoring langsung dari jajaran direksi.' },
  { title: 'Pelatihan Berkelanjutan', description: 'Akses ke seluruh program pelatihan internal JAC dan sertifikasi profesional eksternal.' },
  { title: 'Kesehatan & Asuransi', description: 'BPJS Kesehatan & Ketenagakerjaan plus asuransi kesehatan swasta untuk keluarga.' },
  { title: 'Bonus Kinerja', description: 'Skema bonus tahunan berbasis pencapaian target individu dan divisi.' },
  { title: 'Keseimbangan Hidup', description: 'Cuti tahunan penuh, fleksibilitas kerja hibrida untuk peran kantor pusat.' },
  { title: 'Dampak Nyata', description: 'Berkontribusi pada proyek yang membangun infrastruktur dan ekonomi Indonesia.' },
]

// ---------- ABOUT ----------
export const TIMELINE = [
  { year: '2022', title: 'Pendirian Perusahaan', description: 'PT Jiwa Abdi Cinta resmi berdiri melalui Akta No. 310 di hadapan Notaris Bagas Raffy Raditya, S.H., Jakarta Selatan, dengan modal dasar Rp 20 miliar.' },
  { year: '2023', title: 'Ekspansi Enam Bidang Usaha', description: 'Operasional penuh di enam lini: perdagangan, jasa konsultasi, konstruksi, industri sawit, pertanian, dan layanan perizinan.' },
  { year: '2024', title: 'Digitalisasi Operasional', description: 'Peluncuran Super App internal yang mengintegrasikan seluruh divisi dalam satu platform manajemen terpadu.' },
  { year: '2025', title: 'Kemitraan Strategis', description: 'Perluasan jaringan hingga 340+ mitra supplier, 800+ petani plasma, dan portofolio 28 proyek konstruksi aktif.' },
  { year: '2026', title: 'Menuju Keberlanjutan', description: 'Komitmen penuh pada sertifikasi ISPO, kebijakan NDPE, dan tata kelola perusahaan berstandar internasional.' },
]

export const VALUES = [
  { title: 'Integritas', description: 'Setiap keputusan diambil dengan kejujuran dan tanggung jawab penuh kepada mitra, klien, dan masyarakat.', icon: 'ShieldCheck' },
  { title: 'Keunggulan', description: 'Standar kerja tertinggi di setiap lini — dari lapangan kebun hingga ruang rapat direksi.', icon: 'Award' },
  { title: 'Kolaborasi', description: 'Pertumbuhan yang kami kejar adalah pertumbuhan bersama: karyawan, mitra, petani, dan komunitas.', icon: 'Users' },
  { title: 'Keberlanjutan', description: 'Bisnis yang baik adalah bisnis yang menjaga bumi dan memberdayakan generasi berikutnya.', icon: 'Leaf' },
]

export const LEADERSHIP = [
  { name: 'Wirono, SE.M.Pd', role: 'Direktur Utama', bio: 'Akademisi dan praktisi bisnis dengan pengalaman lintas sektor pendidikan, perdagangan, dan agribisnis. Memimpin visi strategis JAC sejak pendirian.' },
  { name: 'Purwanto', role: 'Direktur', bio: 'Membawahi operasional divisi perdagangan dan logistik dengan fokus pada efisiensi rantai pasok dan pengembangan jaringan mitra.' },
  { name: 'Edy Kurniawan', role: 'Direktur', bio: 'Memimpin divisi konstruksi dan industri, mengawal standar mutu proyek serta pengembangan kapasitas produksi.' },
  { name: 'Tegar Ramadhan Wiroputro', role: 'Komisaris', bio: 'Menjalankan fungsi pengawasan tata kelola perusahaan dan memastikan kepatuhan terhadap prinsip GCG.' },
]
