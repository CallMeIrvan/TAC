"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function GallerySlider({ images }: { images: string[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((curr) => (curr === 0 ? images.length - 1 : curr - 1));
    };

    const nextSlide = useCallback(() => {
        setCurrentIndex((curr) => (curr === images.length - 1 ? 0 : curr + 1));
    }, [images.length]);

    // Autoplay
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 4000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <div className="relative w-full max-w-5xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl group border-4 border-white/50 bg-slate-100">
             {/* Slider track */}
             <div 
                className="flex transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1) h-[450px] md:h-[550px]"
                style={{ transform: `translateX(-${currentIndex * 100}%)`, transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}
             >
                {images.map((src, i) => (
                    <div key={i} className="min-w-full relative h-full">
                        <Image
                            src={src}
                            alt={`Gallery image ${i + 1}`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 1024px"
                            className="object-cover"
                            priority={i === 0}
                        />
                         {/* Aesthetic Gradient Overlay on Hover */}
                         <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons - Appear on hover */}
            <button 
                onClick={prevSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 backdrop-blur-sm z-10"
            >
                <ChevronLeft className="w-6 h-6 mr-1" />
            </button>
            <button 
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 backdrop-blur-sm z-10"
            >
                <ChevronRight className="w-6 h-6 ml-1" />
            </button>

            {/* Dynamic Dots Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10 bg-slate-900/30 px-4 py-2.5 rounded-full backdrop-blur-md">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`transition-all duration-500 rounded-full ${
                            currentIndex === i 
                                ? "w-8 h-2.5 bg-blue-500 shadow-lg" 
                                : "w-2.5 h-2.5 bg-white/70 hover:bg-white shadow-md hover:scale-125"
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
