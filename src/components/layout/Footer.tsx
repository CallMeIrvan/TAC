import Link from 'next/link';
import Image from 'next/image';
import { COMPANY_INFO } from '@/lib/constants';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200 mt-auto">
      <div className="container px-4 md:px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
               <Image src="/logo/logo-tac.png" alt="Logo TAC" width={48} height={48} className="object-contain bg-white rounded-md p-1" />
               <h3 className="text-xl font-bold text-white">{COMPANY_INFO.name}</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Lembaga Pendidikan & Sertifikasi Profesional.
              Membangun masa depan dengan keterampilan berbasis teknologi.
            </p>
            <div className="flex gap-4">
              <Link href={COMPANY_INFO.socials.find(s => s.name === "Instagram")?.url || "#"} className="hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href={COMPANY_INFO.socials.find(s => s.name === "Facebook")?.url || "#"} className="hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Link Cepat</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/about" className="hover:text-white">Tentang Kami</Link></li>
              <li><Link href="/program" className="hover:text-white">Program Kami</Link></li>
              <li><Link href="/dokumentasi" className="hover:text-white">Dokumentasi</Link></li>
              <li><Link href="/register" className="hover:text-white">Pendaftaran</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Hubungi Kami</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 shrink-0 mt-0.5 text-blue-500" />
                  <span>{COMPANY_INFO.address}</span>
                </div>
                {/* Minimap (Clickable) */}
                <a 
                  href="https://maps.google.com/?q=The+A+Class+Denpasar,+Jl.+Tukad+Yeh+Aya+IX+No.21c" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block mt-1 rounded-xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all relative group"
                >
                  <iframe
                    src="https://maps.google.com/maps?q=The%20A%20Class%20Denpasar&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="120"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    title="Lokasi TAC"
                    className="pointer-events-none grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                  />
                  <div className="absolute bottom-0 w-full bg-slate-950/90 backdrop-blur-sm border-t border-slate-800 text-center py-2 text-xs font-medium text-blue-400 group-hover:text-blue-300">
                    Buka di Google Maps
                  </div>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-green-500" />
                <a href={`https://wa.me/${COMPANY_INFO.contacts.whatsapp.replace(/\+/g, '')}`} className="hover:text-white">
                  {COMPANY_INFO.contacts.whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-yellow-500" />
                <a href={`mailto:${COMPANY_INFO.contacts.email}`} className="hover:text-white">
                  {COMPANY_INFO.contacts.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
