import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Award, MapPin, Target } from "lucide-react";
import { ABOUT_CONTENT, COMPANY_INFO } from "@/lib/constants";
import { GallerySlider } from "@/components/ui/gallery-slider";
import { GalleryGrid } from "@/components/ui/gallery-grid";

// Section removed as requested

// Temporary data for Team
const TEAM = [
  { name: "I Gusti Ayu Anom, SE., M.Sos", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" },
  { name: "Tim Pengajar 1", role: "Senior Instructor", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" },
  { name: "Tim Pengajar 2", role: "Adobe Certified Expert", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop" },
  { name: "Tim Pengajar 3", role: "Accounting Specialist", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop" },
];

// Data for Gallery
const GALLERY = [
  "/dokumentasi/1.jpg",
  "/dokumentasi/2.jpg",
  "/dokumentasi/3.jpg",
  "/dokumentasi/4.jpg",
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Breadcrumb */}
      <div className="bg-[#FDF8F0] border-b border-[#E8DFD0]">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center text-sm text-[#0F1B3D]/50">
            <Link href="/" className="hover:text-blue-600 transition-colors">Beranda</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="font-semibold text-blue-600">Tentang Kami</span>
          </nav> 
        </div>
      </div>

      {/* 2. Hero Tentang TAC */}
      <section className="relative py-20 bg-[#0F1B3D] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Membangun Masa Depan Digital</h1>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            The A Class mendedikasikan diri untuk mencetak talenta digital berkualitas global melalui pendidikan vokasi dan sertifikasi internasional.
          </p>
        </div>
      </section>

      {/* 3. Deskripsi Lengkap */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Tentang The A Class</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                {ABOUT_CONTENT.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="relative">
               <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl">
                 <Image 
                   src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" 
                   alt="Students learning"
                   fill
                   sizes="(max-width: 768px) 100vw, 50vw"
                   className="object-cover"
                 />
               </div>
               <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-slate-100 max-w-xs">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="h-5 w-5 text-blue-500" />
                    <p className="font-bold text-slate-800">Lokasi Kami</p>
                  </div>
                  <p className="text-sm text-slate-600">{COMPANY_INFO.address}</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Visi & Misi */}
      <section className="py-20 bg-[#F5EFE6]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Visi Kami</h3>
                <p className="text-slate-600 italic leading-relaxed">&quot;{ABOUT_CONTENT.visi}&quot;</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Misi Kami</h3>
                <ul className="space-y-3">
                  {ABOUT_CONTENT.misi.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-600 leading-relaxed">
                      <div className="min-w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 5. Cara Memulai */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm font-bold tracking-[0.2em] text-blue-500 uppercase mb-4">Cara Memulai</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 max-w-2xl mx-auto leading-tight">
              Sangat mudah untuk mulai, sebelum anda mengikuti tes sertifikasi di The A Class.
            </h2>
          </div>

          <div className="max-w-3xl mx-auto relative">

            {/* === Mobile: straight vertical dashed line === */}
            <div className="md:hidden absolute left-[29px] top-8 bottom-8 w-0 border-l-[3px] border-dashed border-blue-200 z-0" />

            {/* ─── Step 1: circle RIGHT (desktop) ─── */}
            <div className="relative flex gap-6 md:gap-8 md:flex-row-reverse group">
              <div className="relative z-10 flex-shrink-0 w-[60px] h-[60px] md:w-[64px] md:h-[64px] rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center text-xl font-bold shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <div className="pt-2 flex-1 md:text-right">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">Daftar</h3>
                <p className="text-slate-500 leading-relaxed">
                  Jika anda peserta baru, anda harus mendaftar terlebih dahulu untuk mendapatkan akses tryout gratis. Anda hanya perlu menginputkan nama, email, dan nomor WhatsApp anda, kemudian kami akan menghubungi anda melalui WhatsApp.
                </p>
                <Link href="/register" className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:gap-2.5 transition-all duration-300">
                  Daftar Sekarang <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* ─── Connector 1: S-curve from right → left (desktop) ─── */}
            <div className="h-6 md:h-24 relative hidden md:block">
              {/* Top-right corner: vertical down + curve to horizontal left */}
              <div className="absolute top-0 right-[31px] left-1/2 h-1/2 border-r-[3px] border-b-[3px] border-dashed border-blue-200 rounded-br-[2.5rem]" style={{ borderTop: 'none', borderLeft: 'none' }} />
              {/* Bottom-left corner: horizontal from right + curve to vertical down */}
              <div className="absolute bottom-0 left-[31px] right-1/2 h-1/2 border-l-[3px] border-t-[3px] border-dashed border-blue-200 rounded-tl-[2.5rem]" style={{ borderBottom: 'none', borderRight: 'none' }} />
            </div>
            <div className="h-0 md:hidden" />

            {/* ─── Step 2: circle LEFT (desktop) ─── */}
            <div className="relative flex gap-6 md:gap-8 group">
              <div className="relative z-10 flex-shrink-0 w-[60px] h-[60px] md:w-[64px] md:h-[64px] rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center text-xl font-bold shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              <div className="pt-2 flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">Login</h3>
                <p className="text-slate-500 leading-relaxed">
                  Jika sudah terdaftar dan disetujui oleh admin, anda dapat login menggunakan email dan password yang kami berikan melalui WhatsApp.
                </p>
                <Link href="/tryout" className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:gap-2.5 transition-all duration-300">
                  Login Tryout <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* ─── Connector 2: S-curve from left → right (desktop) ─── */}
            <div className="h-6 md:h-24 relative hidden md:block">
              {/* Top-left corner: vertical down + curve to horizontal right */}
              <div className="absolute top-0 left-[31px] right-1/2 h-1/2 border-l-[3px] border-b-[3px] border-dashed border-blue-200 rounded-bl-[2.5rem]" style={{ borderTop: 'none', borderRight: 'none' }} />
              {/* Bottom-right corner: horizontal from left + curve to vertical down */}
              <div className="absolute bottom-0 right-[31px] left-1/2 h-1/2 border-r-[3px] border-t-[3px] border-dashed border-blue-200 rounded-tr-[2.5rem]" style={{ borderBottom: 'none', borderLeft: 'none' }} />
            </div>
            <div className="h-0 md:hidden" />

            {/* ─── Step 3: circle RIGHT (desktop) ─── */}
            <div className="relative flex gap-6 md:gap-8 md:flex-row-reverse group">
              <div className="relative z-10 flex-shrink-0 w-[60px] h-[60px] md:w-[64px] md:h-[64px] rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center text-xl font-bold shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <div className="pt-2 flex-1 md:text-right">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">Mulai Tryout</h3>
                <p className="text-slate-500 leading-relaxed">
                  Setelah berhasil login, pilih program sertifikasi yang tersedia, pilih tipe latihan soal, dan mulai kerjakan simulasi ujian sertifikasi anda. Selamat belajar!
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Tim Pengajar */}
      <section className="py-20 bg-[#F5EFE6]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Tim Pengajar</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Didukung oleh para praktisi dan instruktur bersertifikat internasional yang berpengalaman di bidangnya.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
                <div className="aspect-[4/5] relative overflow-hidden bg-slate-200">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-sm text-blue-600 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Gallery */}
      <section className="py-20 mb-20">
         <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Galeri Kegiatan</h2>
            <p className="text-slate-600">Dokumentasi kegiatan pembelajaran dan sertifikasi di The A Class.</p>
          </div>
          
          <GallerySlider images={GALLERY} />
          <GalleryGrid />
         </div>
      </section>

    </div>
  );
}
