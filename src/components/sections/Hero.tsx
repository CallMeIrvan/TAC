import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section 
      className="relative py-20 md:py-32 border-b overflow-hidden"
    >
      {/* Optimized Background Image */}
      <Image 
        src="/bg/slide2.png"
        alt="TAC Educational Background"
        fill
        priority
        className="object-cover -z-10"
      />
      
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-slate-900/80 bg-blend-multiply -z-10"></div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-64 h-64 bg-indigo-200/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container px-4 md:px-6 mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-slate-200 uppercase bg-white/10 border border-white/20 rounded-full backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
          Lembaga Pendidikan & Sertifikasi
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-wide text-white mb-6 font-normal">
          Bangun Masa Depan Karir<br />
          Bersama <span className="font-bold text-white tracking-wider">The A Class</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Kami menyediakan sertifikasi internasional dan kursus keahlian standar global untuk meningkatkan kompetensi Anda di era digital.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <Button size="lg" className="h-12 px-8 text-base bg-blue-600 hover:bg-blue-700 font-semibold" asChild>
            <Link href="/program">
              Lihat Program <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white border-white/20 font-semibold" asChild>
            <Link href="/register">
              Daftar Sekarang
            </Link>
          </Button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-300 font-medium">
          <div className="flex items-center gap-2">
            <div className="rounded-full p-0.5 bg-blue-500/20 text-blue-400">
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            Sertifikasi Global
          </div>
          <div className="flex items-center gap-2">
            <div className="rounded-full p-0.5 bg-blue-500/20 text-blue-400">
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            Trainer Profesional
          </div>
        </div>
      </div>
    </section>
  );
}
