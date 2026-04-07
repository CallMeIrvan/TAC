import { BookOpen, Award, Users, Globe2 } from "lucide-react";

export function Stats() {
  return (
    <section className="relative z-20 -mt-12 mb-12">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 py-8 px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-50">
            <div className="px-4 flex flex-col items-center">
              <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-blue-500 mb-4">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="text-3xl font-extrabold text-slate-900 mb-1">9+</div>
              <div className="text-xs font-semibold text-slate-500 leading-tight">Program<br/>Sertifikasi</div>
            </div>
            <div className="px-4 flex flex-col items-center">
              <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-blue-500 mb-4">
                <Award className="w-6 h-6" />
              </div>
              <div className="text-3xl font-extrabold text-slate-900 mb-1">5+</div>
              <div className="text-xs font-semibold text-slate-500 leading-tight">Tahun<br/>Pengalaman</div>
            </div>
            <div className="px-4 flex flex-col items-center">
              <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-blue-500 mb-4">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-3xl font-extrabold text-slate-900 mb-1">500+</div>
              <div className="text-xs font-semibold text-slate-500 leading-tight">Alumni<br/>Kompeten</div>
            </div>
            <div className="px-4 flex flex-col items-center">
              <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-blue-500 mb-4">
                <Globe2 className="w-6 h-6" />
              </div>
              <div className="text-3xl font-extrabold text-slate-900 mb-1">4+</div>
              <div className="text-xs font-semibold text-slate-500 leading-tight">Mitra<br/>Global</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
