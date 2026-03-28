import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Phone, Mail, FileText, GraduationCap, CheckCircle } from "lucide-react";

import { COMPANY_INFO } from "@/lib/constants";

export default function RegisterPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
       {/* Breadcrumb */}
       <nav className="flex mb-8 text-sm font-medium text-slate-500">
         <Link href="/" className="hover:text-slate-900">Beranda</Link>
         <span className="mx-2">/</span>
         <span className="text-blue-600">Pendaftaran</span>
       </nav>

      {/* Header dengan Warning */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">PENDAFTARAN KURSUS DAN SERTIFIKASI</h1>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg shadow-sm">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <AlertTriangle className="h-6 w-6 text-yellow-500" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold text-yellow-800 mb-2">Perhatian !!!</h3>
              <div className="text-sm text-yellow-800 space-y-2 leading-relaxed">
                <p>1. Masukkan data diri Anda dengan baik dan benar, sehingga dapat memudahkan Admin untuk menghubungi Anda.</p>
                <p>2. Setelah memasukkan data diri, maka Admin The A Class akan menghubungi Anda via WhatsApp.</p>
                <p>3. Pertanyaan lebih lanjut harap hubungi kontak berikut:</p>
                <div className="mt-3 flex flex-wrap items-center gap-6 font-medium">
                  <a href={`https://wa.me/${COMPANY_INFO.contacts.whatsapp.replace('+', '')}`} className="flex items-center text-green-700 hover:text-green-800 bg-green-100/50 px-3 py-1 rounded-full transition-colors">
                    <Phone className="w-4 h-4 mr-2" />
                    {COMPANY_INFO.contacts.whatsapp}
                  </a>
                  <a href="mailto:info@theaclassdps.com" className="flex items-center text-blue-700 hover:text-blue-800 bg-blue-100/50 px-3 py-1 rounded-full transition-colors">
                    <Mail className="w-4 h-4 mr-2" />
                    info@theaclassdps.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Pilihan Program Type */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Sertifikasi Card */}
        <div className="group border border-slate-200 rounded-2xl p-8 hover:border-blue-500 hover:shadow-xl cursor-pointer transition-all duration-300 relative overflow-hidden bg-white">
          <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          <div className="text-center relative z-10">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <FileText className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-slate-900">Sertifikasi</h3>
            <p className="text-slate-600 mb-6">
              Program sertifikasi profesional dengan standar internasional untuk validasi keahlian.
            </p>
            <ul className="text-sm text-slate-500 text-left mb-8 space-y-3 bg-slate-50 p-4 rounded-lg">
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                Durasi: 2-4 minggu
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                Sertifikat internasional (Microsoft/Adobe)
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                Online Exam Capability
              </li>
            </ul>
            <Button asChild className="w-full h-12 text-lg">
              <Link href="/register/sertifikasi">
                Daftar Sertifikasi
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Kursus Card */}
        <div className="group border border-slate-200 rounded-2xl p-8 hover:border-green-500 hover:shadow-xl cursor-pointer transition-all duration-300 relative overflow-hidden bg-white">
          <div className="absolute top-0 left-0 w-full h-1 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          <div className="text-center relative z-10">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-slate-900">Kursus Intensif</h3>
            <p className="text-slate-600 mb-6">
              Pelatihan intensif dengan sistem kelas terbimbing dari dasar hingga mahir.
            </p>
            <ul className="text-sm text-slate-500 text-left mb-8 space-y-3 bg-slate-50 p-4 rounded-lg">
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                Durasi: 1-3 bulan
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                Mentoring Eksklusif
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                Project-based Learning
              </li>
            </ul>
            <Button asChild className="w-full h-12 text-lg bg-green-600 hover:bg-green-700">
              <Link href="/register/kursus">
                Daftar Kursus
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
