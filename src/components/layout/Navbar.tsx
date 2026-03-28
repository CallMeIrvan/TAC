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
  { label: 'Dokumentasi', href: '/dokumentasi' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 md:px-6 mx-auto h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo/logo-tac.png" alt="Logo TAC" width={40} height={40} className="object-contain" />
          <span className="font-bold text-xl md:text-2xl text-primary hidden sm:inline-block">
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
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href ? "text-primary font-bold" : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center gap-2">
            <Button asChild className="bg-white text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
              <Link href="/tryout/login">Akses Tryout</Link>
            </Button>
            <Button asChild className="bg-white text-black border border-black hover:!bg-black hover:!text-white transition-colors">
              <Link href="/register">Daftar Sekarang</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t bg-background p-4 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium py-2 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2">
            <Button asChild className="w-full bg-white text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
              <Link href="/tryout/login" onClick={() => setIsOpen(false)}>
                Akses Tryout
              </Link>
            </Button>
            <Button asChild className="w-full bg-white text-black border border-black hover:!bg-black hover:!text-white transition-colors">
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
