import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ABOUT_CONTENT } from "@/lib/constants";

export function AboutSummary() {
  return (
    <section className="py-20 bg-[#FDF8F0]">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              {/* Abstract decorative graphic placeholder */}
              <div className="aspect-video bg-gradient-to-tr from-slate-200 to-slate-100 rounded-2xl overflow-hidden shadow-xl border border-slate-100 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-90 hover:scale-105 transition-transform duration-700"></div>
                <div className="absolute inset-0 bg-blue-900/10"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-slate-100 max-w-xs hidden md:block">
                <p className="text-sm font-medium text-slate-500 mb-2">Didukung oleh</p>
                <div className="flex gap-4 opacity-70 grayscale">
                    {/* Logos would go here */}
                    <span className="font-bold text-slate-800">Microsoft</span>
                    <span className="font-bold text-slate-800">Adobe</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6">Tentang The A Class</h2>
            <div className="space-y-4 text-slate-600 mb-8 leading-relaxed">
              <p>{ABOUT_CONTENT.description[0]}</p>
              <p>{ABOUT_CONTENT.description[1]}</p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4 py-2 bg-slate-50 rounded-r-lg mb-8">
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1">Visi Kami</p>
              <p className="italic text-slate-800 font-medium">&quot;{ABOUT_CONTENT.visi}&quot;</p>
            </div>

            <Button asChild>
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
