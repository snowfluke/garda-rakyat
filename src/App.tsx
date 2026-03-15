import { motion } from 'motion/react';
import { Shield, Cpu, Wrench, Rocket, Target, Zap, Users, ArrowRight } from 'lucide-react';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-military-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-accent-orange flex items-center justify-center rounded-sm transform -skew-x-12">
            <Shield className="text-military-900 w-6 h-6" />
          </div>
          <span className="font-display font-bold text-xl tracking-widest stencil-text text-white">GARDA RAKYAT</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-paper/70">
          <a href="#konsep" className="hover:text-accent-orange transition-colors">KONSEP</a>
          <a href="#sektor" className="hover:text-accent-orange transition-colors">SEKTOR</a>
          <a href="#kisah" className="hover:text-accent-orange transition-colors">KISAH RAKYAT</a>
        </div>
        <button className="bg-paper text-military-900 px-6 py-2.5 font-bold text-sm stencil-text hover:bg-accent-orange hover:text-white transition-colors transform -skew-x-12">
          <span className="block transform skew-x-12">GABUNG JARINGAN</span>
        </button>
      </div>
    </nav>
  );
}

function HeroAssembly() {
  return (
    <div className="relative w-full max-w-lg aspect-square mx-auto hidden md:block">
      {/* Blueprint background lines */}
      <div className="absolute inset-0 border-2 border-accent-orange/20 rounded-full animate-[spin_20s_linear_infinite]" />
      <div className="absolute inset-4 border border-white/10 rounded-full border-dashed animate-[spin_15s_linear_infinite_reverse]" />
      
      {/* Center piece */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-military-800 border-2 border-accent-orange flex items-center justify-center rounded-lg transform rotate-45 z-10"
      >
        <Cpu className="w-12 h-12 text-accent-orange transform -rotate-45" />
      </motion.div>

      {/* Parts flying in */}
      {/* Top Left Propeller */}
      <motion.div
        initial={{ x: -200, y: -200, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1, type: "spring" }}
        className="absolute top-[20%] left-[20%] w-16 h-16 border border-white/30 flex items-center justify-center rounded-full bg-military-900 z-20"
      >
        <div className="w-8 h-1 bg-paper/50 animate-[spin_0.5s_linear_infinite]" />
      </motion.div>
      
      {/* Top Right Propeller */}
      <motion.div
        initial={{ x: 200, y: -200, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.2, type: "spring" }}
        className="absolute top-[20%] right-[20%] w-16 h-16 border border-white/30 flex items-center justify-center rounded-full bg-military-900 z-20"
      >
        <div className="w-8 h-1 bg-paper/50 animate-[spin_0.5s_linear_infinite]" />
      </motion.div>

      {/* Bottom Left Propeller */}
      <motion.div
        initial={{ x: -200, y: 200, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.4, type: "spring" }}
        className="absolute bottom-[20%] left-[20%] w-16 h-16 border border-white/30 flex items-center justify-center rounded-full bg-military-900 z-20"
      >
        <div className="w-8 h-1 bg-paper/50 animate-[spin_0.5s_linear_infinite]" />
      </motion.div>

      {/* Bottom Right Propeller */}
      <motion.div
        initial={{ x: 200, y: 200, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.6, type: "spring" }}
        className="absolute bottom-[20%] right-[20%] w-16 h-16 border border-white/30 flex items-center justify-center rounded-full bg-military-900 z-20"
      >
        <div className="w-8 h-1 bg-paper/50 animate-[spin_0.5s_linear_infinite]" />
      </motion.div>

      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full z-0">
        <motion.line x1="50%" y1="50%" x2="28%" y2="28%" stroke="#ff5722" strokeWidth="2" strokeDasharray="4 4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 2, duration: 0.5 }} />
        <motion.line x1="50%" y1="50%" x2="72%" y2="28%" stroke="#ff5722" strokeWidth="2" strokeDasharray="4 4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 2, duration: 0.5 }} />
        <motion.line x1="50%" y1="50%" x2="28%" y2="72%" stroke="#ff5722" strokeWidth="2" strokeDasharray="4 4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 2, duration: 0.5 }} />
        <motion.line x1="50%" y1="50%" x2="72%" y2="72%" stroke="#ff5722" strokeWidth="2" strokeDasharray="4 4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 2, duration: 0.5 }} />
      </svg>
      
      {/* Labels */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="absolute top-[10%] left-[5%] text-[10px] font-mono text-accent-orange bg-military-900/80 px-2 py-1">UMKM BUBUT: MOTOR BLDC</motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="absolute bottom-[10%] right-[5%] text-[10px] font-mono text-accent-orange bg-military-900/80 px-2 py-1">UMKM PLASTIK: BALING-BALING</motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="absolute top-[45%] left-[65%] text-[10px] font-mono text-paper bg-military-900/80 px-2 py-1 z-30">SMK ELEKTRO: FLIGHT CONTROLLER</motion.div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden grid-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-military-900/80 to-military-900" />
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-accent-orange/50 bg-accent-orange/10 text-accent-orange text-xs font-mono mb-6">
              <Target className="w-4 h-4" />
              <span>INISIATIF PERTAHANAN SEMESTA</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[0.9] mb-6 uppercase text-white">
              Dari Bengkel Rakyat,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-orange to-accent-yellow">
                Mengudara Menjaga Kedaulatan.
              </span>
            </h1>
            <p className="text-lg text-paper/70 mb-8 max-w-xl">
              Tidak perlu pabrik raksasa untuk membangun armada pertahanan. Kami menghubungkan ribuan UMKM, bengkel las, dan perakit elektronik rumahan menjadi satu rantai pasok alutsista mandiri.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-accent-orange text-military-900 px-8 py-4 font-bold stencil-text hover:bg-white transition-colors transform -skew-x-12 flex items-center gap-2">
                <span className="transform skew-x-12 flex items-center gap-2">
                  DAFTARKAN BENGKELMU <ArrowRight className="w-5 h-5" />
                </span>
              </button>
              <button className="border border-white/20 bg-white/5 backdrop-blur-sm text-paper px-8 py-4 font-bold stencil-text hover:bg-white/10 transition-colors transform -skew-x-12">
                <span className="transform skew-x-12">LIHAT BLUEPRINT</span>
              </button>
            </div>
          </motion.div>
          
          <div className="mt-12 flex items-center gap-8 border-t border-white/10 pt-8">
            <div>
              <div className="text-3xl font-display font-bold text-white">1,204</div>
              <div className="text-xs text-paper/50 font-mono mt-1">UMKM TERDAFTAR</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-white">45</div>
              <div className="text-xs text-paper/50 font-mono mt-1">PROTOTIPE RAMPUNG</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-accent-orange">100%</div>
              <div className="text-xs text-paper/50 font-mono mt-1">KOMPONEN LOKAL</div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <HeroAssembly />
        </div>
      </div>
    </section>
  );
}

function Concept() {
  return (
    <section id="konsep" className="py-24 bg-military-800 relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase text-white">Pertahanan Desentralisasi</h2>
          <p className="text-paper/70 text-lg">
            Jika satu pabrik besar dihancurkan, produksi berhenti. Jika 10.000 bengkel rakyat memproduksi komponen secara terdesentralisasi, pertahanan kita tidak bisa dilumpuhkan.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Wrench className="w-8 h-8" />,
              title: "Standarisasi Presisi",
              desc: "Kami menyediakan blueprint open-source dengan toleransi militer yang bisa diproduksi oleh mesin CNC atau mesin bubut standar UMKM."
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "Sistem Perakitan Sel",
              desc: "Komponen dikirim ke 'Sel Perakitan' rahasia di berbagai daerah untuk dirakit menjadi unit drone kamikaze atau rudal taktis utuh."
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: "Kedaulatan Ekonomi",
              desc: "Anggaran pertahanan tidak lagi lari ke luar negeri, melainkan menghidupi jutaan keluarga pekerja, teknisi, dan insinyur lokal."
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-military-900 border border-white/10 p-8 relative group hover:border-accent-orange/50 transition-colors"
            >
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-accent-orange" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-accent-orange" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-accent-orange" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-accent-orange" />
              
              <div className="text-accent-orange mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold mb-4 uppercase text-white">{item.title}</h3>
              <p className="text-paper/60 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sectors() {
  const sectors = [
    {
      id: "01",
      name: "Rangka & Aerodinamika",
      target: "Bengkel Las, Pengrajin Karbon, Pabrik Plastik",
      parts: ["Sayap Lipat", "Fuselage", "Sirip Kendali"],
      color: "border-blue-500/30",
      text: "text-blue-400"
    },
    {
      id: "02",
      name: "Propulsi & Motor",
      target: "Bengkel Dinamo, Pabrik Baterai, Machining",
      parts: ["Motor BLDC", "Solid Propellant Casing", "Baling-baling"],
      color: "border-accent-orange/30",
      text: "text-accent-orange"
    },
    {
      id: "03",
      name: "Avionik & Sensor",
      target: "SMK Elektro, Maker Space, Servis HP",
      parts: ["Flight Controller", "Modul GPS Anti-Jamming", "Kamera Optik"],
      color: "border-emerald-500/30",
      text: "text-emerald-400"
    },
    {
      id: "04",
      name: "Hulu Ledak (Payload)",
      target: "Pabrik Kimia Lokal, Industri Tambang",
      parts: ["Casing Fragmentasi", "Sistem Pemicu (Fuze)", "Bahan Peledak"],
      color: "border-red-500/30",
      text: "text-red-400"
    }
  ];

  return (
    <section id="sektor" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase text-white">Pilih Sektor Produksimu</h2>
            <p className="text-paper/70 max-w-xl">
              Sesuaikan dengan keahlian dan alat yang kamu miliki. Kami menyediakan modul pelatihan dan standar kualitas (QA) untuk setiap komponen.
            </p>
          </div>
          <button className="text-accent-orange font-mono text-sm flex items-center gap-2 hover:text-white transition-colors">
            UNDUH KATALOG LENGKAP <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {sectors.map((sector, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`border ${sector.color} bg-military-800/50 p-8 flex flex-col md:flex-row gap-6 group hover:bg-military-800 transition-colors`}
            >
              <div className={`text-5xl font-display font-bold opacity-20 ${sector.text}`}>
                {sector.id}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 uppercase text-white">{sector.name}</h3>
                <div className="text-xs font-mono text-paper/50 mb-4 bg-military-900 inline-block px-2 py-1">
                  COCOK UNTUK: {sector.target}
                </div>
                <ul className="space-y-2">
                  {sector.parts.map((part, j) => (
                    <li key={j} className="flex items-center gap-2 text-paper/80">
                      <div className={`w-1.5 h-1.5 rounded-full bg-current ${sector.text}`} />
                      {part}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stories() {
  return (
    <section id="kisah" className="py-24 bg-military-800 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 uppercase text-center text-white">Dari Rakyat, Oleh Rakyat</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-video bg-military-900 border border-white/10 p-2 transform -skew-x-6">
            <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/welder/800/450?grayscale')] bg-cover bg-center opacity-50 mix-blend-luminosity" />
            <div className="absolute inset-0 bg-accent-orange/10 mix-blend-overlay" />
            
            {/* UI Overlay on image */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <div className="bg-military-900/80 backdrop-blur px-4 py-2 border-l-2 border-accent-orange transform skew-x-6">
                <div className="font-bold text-sm uppercase text-white">Bengkel Las "Maju Jaya"</div>
                <div className="text-xs font-mono text-paper/60">Sleman, Yogyakarta</div>
              </div>
              <div className="bg-accent-orange text-military-900 px-3 py-1 font-mono text-xs font-bold transform skew-x-6">
                PRODUSEN SIRIP RUDAL
              </div>
            </div>
          </div>
          
          <div>
            <div className="text-4xl text-accent-orange font-serif mb-6">"</div>
            <p className="text-xl md:text-2xl leading-relaxed mb-8 font-medium text-white">
              Awalnya saya cuma bikin pagar tralis dan kanopi. Pas gabung Garda Rakyat, saya dikasih blueprint sirip kendali rudal. Ternyata mesin potong plasma saya mumpuni. Sekarang, tiap bulan saya setor 500 set sirip. Bangga rasanya karya orang kampung bisa ikut jaga langit negara.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-military-700 rounded-full overflow-hidden">
                <img src="https://picsum.photos/seed/pakbudi/100/100?grayscale" alt="Pak Budi" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-bold uppercase text-white">Pak Budi</div>
                <div className="text-sm text-paper/50 font-mono">Pemilik Bengkel Las</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-32 relative blueprint-pattern border-t border-white/10">
      <div className="absolute inset-0 bg-military-900/80" />
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 uppercase text-white">Negara Memanggil. <br/>Siapkan Mesinmu.</h2>
        <p className="text-xl text-paper/80 mb-10">
          Daftarkan usahamu sekarang. Dapatkan akses ke platform blueprint, pelatihan standar militer, dan jadilah bagian dari rantai pasok pertahanan nasional.
        </p>
        <button className="bg-accent-orange text-military-900 px-10 py-5 text-lg font-bold stencil-text hover:bg-white transition-colors transform -skew-x-12 inline-flex items-center gap-3 shadow-[8px_8px_0px_rgba(0,0,0,0.5)] hover:shadow-[4px_4px_0px_rgba(0,0,0,0.5)] hover:translate-x-1 hover:translate-y-1">
          <span className="transform skew-x-12 flex items-center gap-2">
            MULAI PRODUKSI SEKARANG <Rocket className="w-6 h-6" />
          </span>
        </button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-military-900 py-12 border-t border-white/10 text-sm">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 mb-12">
        <div className="col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="text-accent-orange w-6 h-6" />
            <span className="font-display font-bold text-lg tracking-widest stencil-text text-white">GARDA RAKYAT</span>
          </div>
          <p className="text-paper/50 max-w-sm">
            Inisiatif rantai pasok pertahanan terdesentralisasi. Memberdayakan UMKM untuk kedaulatan teknologi militer nasional.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4 uppercase text-white">Navigasi</h4>
          <ul className="space-y-2 text-paper/60">
            <li><a href="#" className="hover:text-accent-orange">Tentang Kami</a></li>
            <li><a href="#" className="hover:text-accent-orange">Katalog Blueprint</a></li>
            <li><a href="#" className="hover:text-accent-orange">Standar Kualitas (QA)</a></li>
            <li><a href="#" className="hover:text-accent-orange">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 uppercase text-white">Kontak Rahasia</h4>
          <ul className="space-y-2 text-paper/60 font-mono text-xs">
            <li>PGP KEY: 0x8F92...</li>
            <li>SIGNAL: +62 812-XXXX-XXXX</li>
            <li>EMAIL: rekrutmen@gardarakyat.id</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-paper/40 font-mono text-xs">
        <p>&copy; 2026 Garda Rakyat. All rights reserved.</p>
        <p>ENCRYPTED CONNECTION ESTABLISHED.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-military-900 text-paper selection:bg-accent-orange selection:text-military-900 font-sans">
      <Navbar />
      <Hero />
      <Concept />
      <Sectors />
      <Stories />
      <CTA />
      <Footer />
    </div>
  );
}
