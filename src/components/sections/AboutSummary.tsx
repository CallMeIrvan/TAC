import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ABOUT_CONTENT } from "@/lib/constants";

export function AboutSummary() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              {/* Abstract decorative graphic placeholder */}
              <div className="aspect-video bg-gradient-to-tr from-slate-200 to-slate-100 rounded-2xl overflow-hidden shadow-xl border border-slate-100 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-90 hover:scale-105 transition-transform duration-700"></div>
                <div className="absolute inset-0 bg-blue-900/10"></div>
              </div>
              <div className="absolute -bottom-6 -right-0 md:-right-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 max-w-[260px]">
                <div className="flex items-center gap-3 mb-2">
                   <div className="flex -space-x-3">
                     <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px] text-slate-500 font-bold">U1</div>
                     <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px] text-slate-500 font-bold">U2</div>
                     <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px] text-slate-500 font-bold">U3</div>
                   </div>
                   <span className="font-bold text-sm text-slate-800">500+ Alumni</span>
                </div>
                <p className="text-[10px] text-slate-500 leading-tight">
                  Telah sukses meraih sertifikasi profesional.
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-blue-500 uppercase bg-blue-50 rounded-full">
              Tentang The A Class
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-slate-900 leading-tight">
              Membangun Karir Melalui Keahlian Tersertifikasi
            </h2>
            <div className="space-y-4 text-slate-600 mb-8 leading-relaxed">
              <p>{ABOUT_CONTENT.description[0]}</p>
              <p>{ABOUT_CONTENT.description[1]}</p>
            </div>
            
            <div className="border border-slate-100 bg-white shadow-sm p-5 rounded-2xl mb-8">
              <p className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">Visi Kami</p>
              <p className="italic text-slate-500 text-sm leading-relaxed">&quot;{ABOUT_CONTENT.visi}&quot;</p>
            </div>

            <div className="mb-8">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Didukung Oleh Mitra Global:</p>
              <div className="flex gap-6 text-slate-400 font-bold text-lg">
                  <span>Microsoft</span>
                  <span>Adobe</span>
              </div>
            </div>

            <Button asChild className="bg-blue-600 text-white hover:bg-blue-700 px-6 font-semibold">
              <Link href="/about">
                Profil Lengkap <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
