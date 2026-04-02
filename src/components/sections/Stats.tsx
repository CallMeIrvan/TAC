export function Stats() {
  return (
    <section className="py-12 border-b border-[#1a2a5e] bg-[#0F1B3D]">
      <div className="container px-4 md:px-6 mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div className="p-4 hover:bg-white/5 rounded-lg transition-colors">
          <div className="text-4xl font-extrabold text-blue-400 mb-2">9+</div>
          <div className="text-sm font-medium text-blue-100/70 uppercase tracking-wide">Program Sertifikasi</div>
        </div>
        <div className="p-4 hover:bg-white/5 rounded-lg transition-colors">
          <div className="text-4xl font-extrabold text-blue-400 mb-2">5+</div>
          <div className="text-sm font-medium text-blue-100/70 uppercase tracking-wide">Tahun Pengalaman</div>
        </div>
         <div className="p-4 hover:bg-white/5 rounded-lg transition-colors">
          <div className="text-4xl font-extrabold text-blue-400 mb-2">500+</div>
          <div className="text-sm font-medium text-blue-100/70 uppercase tracking-wide">Alumni Kompeten</div>
        </div>
        <div className="p-4 hover:bg-white/5 rounded-lg transition-colors">
          <div className="text-4xl font-extrabold text-blue-400 mb-2">4+</div>
          <div className="text-sm font-medium text-blue-100/70 uppercase tracking-wide">Mitra Global</div>
        </div>
      </div>
    </section>
  )
}
