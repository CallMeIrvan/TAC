import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { formatRupiah } from "@/lib/utils";
import { Clock, BarChart } from "lucide-react";

interface ProgramProps {
    id: string;
    name: string;
    description: string;
    price?: number;
    packagePrice?: number;
    privatePrice?: number;
    minParticipants?: number;
    isFixedQuota?: boolean;
    type: string;
    level?: string;
}

export function ProgramCard({ program }: { program: ProgramProps }) {
  return (
     <Card className="flex flex-col h-full border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
       <CardHeader>
         <div className="flex justify-between items-start mb-4">
           <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
             program.type === 'Sertifikasi' 
               ? 'bg-blue-100 text-blue-700' 
               : 'bg-green-100 text-green-700'
           }`}>
             {program.type}
           </span>
         </div>
         <CardTitle className="text-xl font-bold leading-tight" style={{ fontFamily: "var(--font-rubik), sans-serif" }}>{program.name}</CardTitle>
       </CardHeader>
       <CardContent className="flex-1">
         <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">
           {program.description}
         </p>
         <div className="space-y-3 mb-6">
            <div className="flex items-center text-sm text-slate-500">
               <Clock className="w-4 h-4 mr-2 text-slate-400" />
               <span>Internasional Standards</span>
            </div>
             {program.level && (
                 <div className="flex items-center text-sm text-slate-500">
                   <BarChart className="w-4 h-4 mr-2 text-slate-400" />
                   <span>Level: {program.level}</span>
                 </div>
             )}
         </div>
         <div className="pt-4 border-t border-slate-100">
           <p className="text-sm text-slate-500 mb-2">Investasi</p>
           {program.type === 'Sertifikasi' ? (
               <p className="text-2xl font-bold text-blue-600">
                  {formatRupiah(program.price || 0)}
               </p>
           ) : (
               <div className="space-y-2">
                   <p className="text-2xl font-bold text-green-600">
                      {formatRupiah(program.packagePrice || 0)} <span className="text-sm font-normal text-slate-500">/ paket</span>
                   </p>
                   <p className="text-xs text-slate-500 bg-slate-50 p-2 rounded-md border border-slate-100 leading-relaxed">
                       <strong>Regular:</strong> Harga dibagi {program.isFixedQuota ? "5 atau 10" : `minimal ${program.minParticipants}`} peserta.<br/>
                   </p>
               </div>
           )}
         </div>
       </CardContent>
       <CardFooter className="gap-2">
         <Button className="flex-1" variant="outline" asChild>
           <Link href={`/program/${program.id}`}>Lihat Detail</Link>
         </Button>
         <Button className="flex-1" asChild>
           {/* If type is Sertifikasi go to /register/sertifikasi, else /register/kursus */}
            <Link href={`/register/${program.type === 'Sertifikasi' ? 'sertifikasi' : 'kursus'}?program=${program.id}`}>
                Beli / Daftar
            </Link>
         </Button>
       </CardFooter>
     </Card>
  )
}
