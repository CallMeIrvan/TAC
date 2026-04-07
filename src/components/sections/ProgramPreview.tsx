import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getPrograms } from "@/lib/firebase/programs";
import { formatRupiah } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

export async function ProgramPreview() {
  const PROGRAMS = await getPrograms();
  const featured = PROGRAMS.slice(0, 3);
  
  return (
    <section className="py-24 bg-slate-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
            Pilihan Studi
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-slate-900">Program Unggulan Pilihan</h2>
          <p className="text-slate-500 text-lg">
            Kami menawarkan berbagai program sertifikasi dan kursus yang dirancang untuk kebutuhan industri saat ini.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featured.map((p) => (
             <Card key={p.id} className="flex flex-col bg-white border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden">
               <CardHeader className="p-8 pb-4">
                 <div className="flex justify-between items-start mb-6">
                   <span className={`px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest ${
                     p.type === 'Sertifikasi' 
                       ? 'bg-amber-100 text-amber-700' 
                       : 'bg-emerald-100 text-emerald-700'
                   }`}>
                     {p.type}
                   </span>
                 </div>
                 <CardTitle className="text-xl font-bold leading-tight text-slate-900">{p.name}</CardTitle>
               </CardHeader>
               <CardContent className="flex-1 px-8">
                 <p className="text-slate-500 mb-8 line-clamp-3 leading-relaxed text-sm">
                   {p.description}
                 </p>
                 <div className="space-y-3 mb-8">
                    <div className="flex items-center text-sm font-medium text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-3 shrink-0" />
                      <span>Standar Internasional</span>
                    </div>
                    <div className="flex items-center text-sm font-medium text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-3 shrink-0" />
                      <span>Sertifikat Resmi</span>
                    </div>
                 </div>
                 <div className="pt-6 border-t border-slate-100">
                   <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">Investasi Program</p>
                   {p.type === 'Sertifikasi' ? (
                       <p className="text-3xl font-extrabold text-blue-600 tracking-tight">
                          {formatRupiah(p.price || 0)}
                       </p>
                   ) : (
                       <div className="space-y-1">
                           <p className="text-3xl font-extrabold text-blue-600 tracking-tight">
                              {formatRupiah(p.packagePrice || 0)} <span className="text-sm font-semibold text-slate-400 tracking-normal">/paket</span>
                           </p>
                           <p className="text-[10px] text-slate-400 leading-relaxed font-medium">
                               (Regular: Harga dibagi minimal {p.isFixedQuota ? "5 peserta" : p.minParticipants + " peserta"})
                           </p>
                       </div>
                   )}
                 </div>
               </CardContent>
               <CardFooter className="px-8 pb-8 pt-4">
                 <Button className="w-full h-12 text-slate-700 hover:text-blue-600 font-semibold border-slate-200 hover:bg-slate-50" variant="outline" asChild>
                   <Link href={`/program/${p.id}`}>Detail Program</Link>
                 </Button>
               </CardFooter>
             </Card>
          ))}
        </div>
        
        <div className="text-center">
            <Link href="/program" className="text-sm font-bold text-blue-600 hover:text-blue-700 inline-flex items-center">
              Lihat Semua Program &rarr;
            </Link>
        </div>
      </div>
    </section>
  )
}
