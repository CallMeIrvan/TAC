"use client"
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { COMPANY_INFO } from '@/lib/constants';

const NAV_ITEMS = [
  { label: 'Tentang Kami', href: '/about' },
  { label: 'Program', href: '/program' },
// Link removed
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <div className="container px-4 md:px-6 mx-auto h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo/logo-tac.png" alt="Logo TAC" width={40} height={40} className="object-contain" style={{ width: "40px", height: "40px" }} />
          <span className="font-bold text-2xl md:text-[1.7rem] text-slate-900 hidden sm:inline-block leading-none">
            {COMPANY_INFO.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-semibold transition-colors hover:text-blue-600",
                pathname === item.href ? "text-blue-600" : "text-slate-600"
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center gap-6">
            <Link href="/tryout/login" className="text-sm font-semibold text-slate-800 hover:text-blue-600 transition-colors">
              Akses Tryout
            </Link>
            <Button asChild className="bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-lg font-semibold">
              <Link href="/register">Daftar Sekarang</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white p-4 flex flex-col gap-4 shadow-lg absolute w-full left-0">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold py-2 text-slate-600 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/tryout/login"
            className="text-sm font-semibold py-2 text-slate-800 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Akses Tryout
          </Link>
          <div className="pt-2">
            <Button asChild className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              <Link href="/register" onClick={() => setIsOpen(false)}>
                Daftar Sekarang
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
