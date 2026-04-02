"use client";

import Image from "next/image";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight as ChevronRightIcon } from "lucide-react";

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

export function GalleryGrid() {
    const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

    const openLightbox  = (idx: number) => setLightboxIdx(idx);
    const closeLightbox = () => setLightboxIdx(null);
    const prevPhoto = () =>
        setLightboxIdx(i => i !== null ? (i - 1 + ALL_PHOTOS.length) % ALL_PHOTOS.length : null);
    const nextPhoto = () =>
        setLightboxIdx(i => i !== null ? (i + 1) % ALL_PHOTOS.length : null);

    return (
        <div className="w-full mt-16 max-w-5xl mx-auto">
             <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-800">Lebih Banyak Momen</h3>
                <p className="text-slate-500 mt-1">Jelajahi berbagai kegiatan kami sebelumnya</p>
             </div>

             {/* ── Hero Photo ─────────────────────────────────── */}
             <div
                 onClick={() => openLightbox(0)}
                 className="group relative w-full overflow-hidden rounded-2xl cursor-pointer mb-4 shadow-md"
                 style={{ height: 420 }}
             >
                 <Image
                     src={heroPhoto.src}
                     alt="Foto utama dokumentasi"
                     fill
                     className="object-cover transition-transform duration-700 group-hover:scale-105"
                     sizes="(max-width: 1024px) 100vw, 1024px"
                 />
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-2xl" />
             </div>

             {/* ── Grid Photos (10 remaining) ──────────────────── */}
             {/* Row 1: 3 equal columns */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                 {gridPhotos.slice(0, 3).map((photo, i) => (
                     <GridPhoto key={photo.id} photo={photo} idx={i + 1} height={240} onOpen={openLightbox} />
                 ))}
             </div>

             {/* Row 2: 1 wide (2/3) + 1 narrow (1/3) */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                 <div className="md:col-span-2">
                     <GridPhoto photo={gridPhotos[3]} idx={4} height={280} onOpen={openLightbox} />
                 </div>
                 <div>
                     <GridPhoto photo={gridPhotos[4]} idx={5} height={280} onOpen={openLightbox} />
                 </div>
             </div>

             {/* Row 3: 1 narrow (1/3) + 1 wide (2/3) */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                 <div>
                     <GridPhoto photo={gridPhotos[5]} idx={6} height={260} onOpen={openLightbox} />
                 </div>
                 <div className="md:col-span-2">
                     <GridPhoto photo={gridPhotos[6]} idx={7} height={260} onOpen={openLightbox} />
                 </div>
             </div>

             {/* Row 4: 3 equal columns */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                 {gridPhotos.slice(7, 10).map((photo, i) => (
                     <GridPhoto key={photo.id} photo={photo} idx={i + 8} height={220} onOpen={openLightbox} />
                 ))}
             </div>

            {/* ── Lightbox ─────────────────────────────────────── */}
            {lightboxIdx !== null && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
                    onClick={closeLightbox}
                >
                    <div
                        className="relative bg-transparent lg:bg-white rounded-2xl lg:shadow-2xl overflow-hidden max-w-4xl w-full"
                        onClick={e => e.stopPropagation()}
                        style={{ animation: "fadeScaleIn 0.25s ease" }}
                    >
                        {/* Close - Mobile optimized */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 z-10 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 transition-all backdrop-blur-md"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Image */}
                        <div className="relative w-full h-[60vh] lg:h-[75vh] flex items-center justify-center bg-transparent lg:bg-black/5">
                            <Image
                                src={ALL_PHOTOS[lightboxIdx].src}
                                alt={`Foto ${lightboxIdx + 1}`}
                                fill
                                style={{ objectFit: "contain" }}
                                sizes="100vw"
                                priority
                            />
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between px-6 py-4 bg-white lg:border-t border-slate-100 rounded-b-2xl lg:rounded-none">
                            <button
                                onClick={prevPhoto}
                                className="flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5" /> <span className="hidden sm:inline">Sebelumnya</span>
                            </button>
                            <span className="text-sm text-slate-400 font-bold bg-slate-100 px-4 py-1.5 rounded-full">
                                {lightboxIdx + 1} / {ALL_PHOTOS.length}
                            </span>
                            <button
                                onClick={nextPhoto}
                                className="flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
                            >
                                <span className="hidden sm:inline">Berikutnya</span> <ChevronRightIcon className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <style jsx global>{`
                @keyframes fadeScaleIn {
                    from { opacity: 0; transform: scale(0.95); }
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
            <div className="absolute inset-0 rounded-xl bg-black/0 group-hover:bg-black/20 transition-all duration-300 pointer-events-none" />
        </div>
    );
}
