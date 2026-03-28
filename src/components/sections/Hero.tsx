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
        quality={80}
        className="object-cover -z-10"
      />
      
      {/* Semi-transparent overlay to ensure text readability */}
      <div className="absolute inset-0 bg-white/80 dark:bg-slate-950/90 backdrop-blur-[2px] -z-10"></div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-64 h-64 bg-indigo-200/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container px-4 md:px-6 mx-auto text-center relative z-10">
        <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full">
          Lembaga Pendidikan & Sertifikasi
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
          Bangun Masa Depan Karir<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700">
            Bersama The A Class
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
          Kami menyediakan sertifikasi internasional dan kursus keahlian standar global untuk meningkatkan kompetensi Anda di era digital.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="h-12 px-8 text-base" asChild>
            <Link href="/programs">
              Lihat Program <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-white/50 backdrop-blur-sm hover:bg-white" asChild>
            <Link href="/register">
              Daftar Sekarang
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
