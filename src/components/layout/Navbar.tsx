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
    <nav className="sticky top-0 z-50 w-full border-b border-[#1a2a5e] bg-[#0F1B3D]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0F1B3D]/90">
      <div className="container px-4 md:px-6 mx-auto h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo/logo-tac.png" alt="Logo TAC" width={40} height={40} className="object-contain" style={{ width: "40px", height: "40px" }} />
          <span className="font-bold text-2xl md:text-[1.7rem] text-white hidden sm:inline-block leading-none">
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
                "text-sm font-medium transition-colors hover:text-blue-400",
                pathname === item.href ? "text-blue-400 font-bold" : "text-blue-100/80"
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center gap-2">
            <Button asChild className="bg-blue-600 text-white border border-blue-500 hover:bg-blue-500 transition-colors">
              <Link href="/tryout/login">Akses Tryout</Link>
            </Button>
            <Button asChild className="bg-transparent text-white border border-white/30 hover:bg-white hover:text-[#0F1B3D] transition-colors">
              <Link href="/register">Daftar Sekarang</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-[#1a2a5e] bg-[#0F1B3D] p-4 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium py-2 text-blue-100/80 hover:text-blue-400"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2">
            <Button asChild className="w-full bg-blue-600 text-white border border-blue-500 hover:bg-blue-500 transition-colors">
              <Link href="/tryout/login" onClick={() => setIsOpen(false)}>
                Akses Tryout
              </Link>
            </Button>
            <Button asChild className="w-full bg-transparent text-white border border-white/30 hover:bg-white hover:text-[#0F1B3D] transition-colors">
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
