import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Award, MapPin, Target } from "lucide-react";
import { ABOUT_CONTENT, COMPANY_INFO } from "@/lib/constants";

// Temporary data for Timeline
const TIMELINE = [
  { year: "2019", title: "Berdiri", description: "The A Class didirikan sebagai training center di Denpasar." },
  { year: "2020", title: "Ekspansi Digital", description: "Mulai membuka kelas online dan webinar untuk menjangkau peserta lebih luas." },
  { year: "2021", title: "Mitra Resmi", description: "Menjadi mitra resmi Microsoft dan Adobe untuk sertifikasi internasional." },
  { year: "2023", title: "Pengembangan Kurikulum", description: "Meluncurkan program kursus intensif Akuntansi dan Perpajakan." },
  { year: "2025", title: "The Next Level", description: "Menuju pusat pelatihan vokasi teknologi terdepan di Bali." },
];

// Temporary data for Team
const TEAM = [
  { name: "I Gusti Ayu Anom, SE., M.Sos", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" },
  { name: "Tim Pengajar 1", role: "Senior Instructor", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" },
  { name: "Tim Pengajar 2", role: "Adobe Certified Expert", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop" },
  { name: "Tim Pengajar 3", role: "Accounting Specialist", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop" },
];

// Temporary data for Gallery
const GALLERY = [
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop",
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center text-sm text-slate-500">
            <Link href="/" className="hover:text-blue-600 transition-colors">Beranda</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="font-semibold text-blue-600">Tentang Kami</span>
          </nav> 
        </div>
      </div>

      {/* 2. Hero Tentang TAC */}
      <section className="relative py-20 bg-blue-900 text-white overflow-hidden">
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
                <p>{ABOUT_CONTENT.lpk_desc}</p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                   <h3 className="font-bold text-2xl text-blue-600 mb-1">5+</h3>
                   <p className="text-sm text-slate-500">Tahun Pengalaman</p>
                </div>
                 <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                   <h3 className="font-bold text-2xl text-blue-600 mb-1">1000+</h3>
                   <p className="text-sm text-slate-500">Alumni Bersertifikat</p>
                </div>
              </div>
            </div>
            <div className="relative">
               <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl">
                 <Image 
                   src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" 
                   alt="Students learning"
                   fill
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
      <section className="py-20 bg-slate-50">
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

      {/* 5. Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Perjalanan Kami</h2>
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-200 hidden md:block"></div>
            
            <div className="space-y-12">
              {TIMELINE.map((item, index) => (
                <div key={index} className={`relative flex items-center justify-between md:justify-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="hidden md:block w-5/12"></div>
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 border-4 border-white shadow-lg flex items-center justify-center z-10">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="w-full pl-12 md:pl-0 md:w-5/12 text-left">
                    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                      <span className="inline-block py-1 px-3 bg-blue-50 text-blue-600 text-xs font-bold rounded-full mb-2">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Tim Pengajar */}
      <section className="py-20 bg-slate-50">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GALLERY.map((img, idx) => (
              <div key={idx} className="relative aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
                <Image
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
         </div>
      </section>

    </div>
  );
}
