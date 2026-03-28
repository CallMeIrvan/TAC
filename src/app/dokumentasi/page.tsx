"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronRight, X, ChevronLeft, ChevronRight as ChevronRightIcon } from "lucide-react";

const ALL_PHOTOS = [
    { id: 1,  src: "/dokumentasi/1.jpg"   },
    { id: 2,  src: "/dokumentasi/2.jpg"   },
    { id: 3,  src: "/dokumentasi/3.jpg"   },
    { id: 4,  src: "/dokumentasi/4.jpg"   },
    { id: 5,  src: "/dokumentasi/5.jpg"   },
    { id: 6,  src: "/dokumentasi/6.jpg"   },
    { id: 7,  src: "/dokumentasi/7.jpg"   },
    { id: 8,  src: "/dokumentasi/8.jpeg"  },
    { id: 9,  src: "/dokumentasi/9.jpg"   },
    { id: 10, src: "/dokumentasi/10.jpeg" },
    { id: 11, src: "/dokumentasi/11.jpeg" },
];

// Hero = first photo, grid = rest
const heroPhoto  = ALL_PHOTOS[0];
const gridPhotos = ALL_PHOTOS.slice(1); // 10 photos in grid

export default function DokumentasiPage() {
    const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

    const openLightbox  = (idx: number) => setLightboxIdx(idx);
    const closeLightbox = () => setLightboxIdx(null);
    const prevPhoto = () =>
        setLightboxIdx(i => i !== null ? (i - 1 + ALL_PHOTOS.length) % ALL_PHOTOS.length : null);
    const nextPhoto = () =>
        setLightboxIdx(i => i !== null ? (i + 1) % ALL_PHOTOS.length : null);

    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Breadcrumb */}
            <div className="bg-white border-b border-slate-200">
                <div className="container mx-auto px-4 py-3">
                    <nav className="flex items-center text-sm text-slate-500">
                        <Link href="/" className="hover:text-blue-600 transition-colors">Beranda</Link>
                        <ChevronRight className="h-4 w-4 mx-2" />
                        <span className="font-semibold text-blue-600">Dokumentasi Kegiatan</span>
                    </nav>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-12 max-w-5xl">

                {/* Section Header */}
                <div className="mb-6">
                    <h1 className="text-3xl font-extrabold text-slate-900">Galeri</h1>
                    <p className="text-slate-500 mt-1 text-sm">Momen kegiatan dan dokumentasi layanan kami</p>
                </div>

                {/* ── Hero Photo ─────────────────────────────────── */}
                <div
                    onClick={() => openLightbox(0)}
                    className="group relative w-full overflow-hidden rounded-2xl cursor-pointer mb-4 shadow-sm"
                    style={{ height: 420 }}
                >
                    <Image
                        src={heroPhoto.src}
                        alt="Foto utama dokumentasi"
                        fill
                        priority
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-2xl" />
                </div>

                {/* ── Grid Photos (10 remaining) ──────────────────── */}
                {/* Row 1: 3 equal columns */}
                <div className="grid grid-cols-3 gap-3 mb-3">
                    {gridPhotos.slice(0, 3).map((photo, i) => (
                        <GridPhoto key={photo.id} photo={photo} idx={i + 1} height={240} onOpen={openLightbox} />
                    ))}
                </div>

                {/* Row 2: 1 wide (2/3) + 1 narrow (1/3) */}
                <div className="grid grid-cols-3 gap-3 mb-3">
                    <div className="col-span-2">
                        <GridPhoto photo={gridPhotos[3]} idx={4} height={280} onOpen={openLightbox} />
                    </div>
                    <div>
                        <GridPhoto photo={gridPhotos[4]} idx={5} height={280} onOpen={openLightbox} />
                    </div>
                </div>

                {/* Row 3: 1 narrow (1/3) + 1 wide (2/3) */}
                <div className="grid grid-cols-3 gap-3 mb-3">
                    <div>
                        <GridPhoto photo={gridPhotos[5]} idx={6} height={260} onOpen={openLightbox} />
                    </div>
                    <div className="col-span-2">
                        <GridPhoto photo={gridPhotos[6]} idx={7} height={260} onOpen={openLightbox} />
                    </div>
                </div>

                {/* Row 4: 3 equal columns */}
                <div className="grid grid-cols-3 gap-3">
                    {gridPhotos.slice(7, 10).map((photo, i) => (
                        <GridPhoto key={photo.id} photo={photo} idx={i + 8} height={220} onOpen={openLightbox} />
                    ))}
                </div>
            </div>

            {/* ── Lightbox ─────────────────────────────────────── */}
            {lightboxIdx !== null && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
                    onClick={closeLightbox}
                >
                    <div
                        className="relative bg-white rounded-2xl shadow-2xl overflow-hidden max-w-2xl w-full"
                        onClick={e => e.stopPropagation()}
                        style={{ animation: "fadeScaleIn 0.25s ease" }}
                    >
                        {/* Close */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-3 right-3 z-10 bg-black/40 hover:bg-black/70 text-white rounded-full p-1.5 transition-all"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Image */}
                        <Image
                            src={ALL_PHOTOS[lightboxIdx].src}
                            alt={`Foto ${lightboxIdx + 1}`}
                            width={800}
                            height={600}
                            style={{ width: "100%", height: "auto", maxHeight: "72vh", objectFit: "contain", display: "block" }}
                            priority
                        />

                        {/* Footer */}
                        <div className="flex items-center justify-between px-5 py-3 bg-white border-t border-slate-100">
                            <button
                                onClick={prevPhoto}
                                className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                            >
                                <ChevronLeft className="w-4 h-4" /> Sebelumnya
                            </button>
                            <span className="text-xs text-slate-400 font-medium">
                                {lightboxIdx + 1} / {ALL_PHOTOS.length}
                            </span>
                            <button
                                onClick={nextPhoto}
                                className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                            >
                                Berikutnya <ChevronRightIcon className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <style jsx global>{`
                @keyframes fadeScaleIn {
                    from { opacity: 0; transform: scale(0.93); }
                    to   { opacity: 1; transform: scale(1); }
                }
            `}</style>
        </div>
    );
}

// Reusable grid photo cell
function GridPhoto({
    photo,
    idx,
    height,
    onOpen,
}: {
    photo: { id: number; src: string };
    idx: number;
    height: number;
    onOpen: (idx: number) => void;
}) {
    return (
        <div
            onClick={() => onOpen(idx)}
            className="group relative w-full overflow-hidden rounded-xl cursor-pointer shadow-sm"
            style={{ height }}
        >
            <Image
                src={photo.src}
                alt={`Dokumentasi ${photo.id}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 rounded-xl bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
        </div>
    );
}
