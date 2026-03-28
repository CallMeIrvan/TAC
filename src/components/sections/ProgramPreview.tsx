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
    <section className="py-20 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Program Unggulan Pilihan</h2>
          <p className="text-muted-foreground text-lg">
            Kami menawarkan berbagai program sertifikasi dan kursus yang dirancang untuk kebutuhan industri saat ini.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featured.map((p) => (
             <Card key={p.id} className="flex flex-col border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
               <CardHeader>
                 <div className="flex justify-between items-start mb-4">
                   <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                     p.type === 'Sertifikasi' 
                       ? 'bg-blue-100 text-blue-700' 
                       : 'bg-green-100 text-green-700'
                   }`}>
                     {p.type}
                   </span>
                 </div>
                 <CardTitle className="text-xl font-bold leading-tight">{p.name}</CardTitle>
               </CardHeader>
               <CardContent className="flex-1">
                 <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">
                   {p.description}
                 </p>
                 <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-slate-500">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                      <span>Standar Internasional</span>
                    </div>
                    <div className="flex items-center text-sm text-slate-500">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                      <span>Sertifikat Resmi</span>
                    </div>
                 </div>
                 <div className="pt-4 border-t border-slate-100">
                   <p className="text-sm text-slate-500 mb-2">Investasi</p>
                   {p.type === 'Sertifikasi' ? (
                       <p className="text-2xl font-bold text-primary">
                          {formatRupiah(p.price || 0)}
                       </p>
                   ) : (
                       <div className="space-y-2">
                           <p className="text-2xl font-bold text-green-600">
                              {formatRupiah(p.packagePrice || 0)} <span className="text-sm font-normal text-slate-500">/ paket</span>
                           </p>
                           <p className="text-xs text-slate-500 bg-slate-50 p-2 rounded-md border border-slate-100 leading-relaxed">
                               <strong>Regular:</strong> Harga dibagi {p.isFixedQuota ? "5 atau 10" : `minimal ${p.minParticipants}`} peserta.<br/>
                           </p>
                       </div>
                   )}
                 </div>
               </CardContent>
               <CardFooter>
                 <Button className="w-full" asChild>
                   <Link href={`/program/${p.id}`}>Detail Program</Link>
                 </Button>
               </CardFooter>
             </Card>
          ))}
        </div>
        
        <div className="text-center">
            <Link href="/program">Lihat Semua Program</Link>
        </div>
      </div>
    </section>
  )
}
