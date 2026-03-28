"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, Filter } from "lucide-react";
import { getPrograms, Program } from "@/lib/firebase/programs";
import { ProgramCard } from "@/components/program-card";
import { Button } from "@/components/ui/button";
// Need to check if Checkbox exists. If not, use native input type checkbox.

export default function ProgramPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [programs, setPrograms] = useState<Program[]>([]);

  // Fetch programs
  useEffect(() => {
    getPrograms().then(setPrograms);
  }, []);

  // Filter Categories
  const categories = ["Sertifikasi", "Kursus"];
  const levels = ["Pemula", "Menengah", "Lanjutan"]; // Inferred from constants update
  const priceRanges = [
      { label: "< Rp 1.000.000", value: "low" },
      { label: "Rp 1.000.000 - Rp 2.000.000", value: "mid" },
      { label: "> Rp 2.000.000", value: "high" }
  ];

  const toggleFilter = (state: string[], setState: (val: string[]) => void, value: string) => {
    if (state.includes(value)) {
      setState(state.filter(item => item !== value));
    } else {
      setState([...state, value]);
    }
  };

  const filteredPrograms = useMemo(() => {
    return programs.filter(program => {
        // Category Filter
        if (selectedCategories.length > 0) {
            // Match Case Insensitive if needed, but constants are capitalized in 'type' field ("Sertifikasi") but lowercase in 'category' ("sertifikasi") - check constants.ts
            // In constants.ts: type: "Sertifikasi", category: "sertifikasi"
            // Our filter categories are Title Case. Let's match against 'type'.
            if (!selectedCategories.includes(program.type)) return false;
        }

        // Level Filter
        if (selectedLevels.length > 0) {
            // program.level might be undefined for some unless I updated all. I updated constants.ts so it should be there.
            if (!program.level || !selectedLevels.includes(program.level)) return false;
        }

        // Price Filter
        if (selectedPriceRanges.length > 0) {
            let priceMatch = false;
            const price = program.type === "Sertifikasi" ? (program.price || 0) : (program.packagePrice || 0);
            if (selectedPriceRanges.includes("low") && price < 1000000) priceMatch = true;
            if (selectedPriceRanges.includes("mid") && price >= 1000000 && price <= 2000000) priceMatch = true;
            if (selectedPriceRanges.includes("high") && price > 2000000) priceMatch = true;
            
            if (!priceMatch) return false;
        }

        return true;
    });
  }, [programs, selectedCategories, selectedLevels, selectedPriceRanges]);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center text-sm text-slate-500">
            <Link href="/" className="hover:text-blue-600 transition-colors">Beranda</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="font-semibold text-blue-600">Program</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
            
            {/* Sidebar Filters */}
            <div className={`w-full md:w-64 flex-shrink-0 ${mobileFiltersOpen ? 'block' : 'hidden md:block'}`}>
                <div className="bg-white rounded-lg border border-slate-200 p-6 sticky top-24">
                    <h3 className="font-bold text-lg mb-4 flex items-center">
                        <Filter className="w-5 h-5 mr-2" /> Filter
                    </h3>
                    
                    {/* Category */}
                    <div className="mb-6">
                        <h4 className="font-semibold text-sm mb-3 text-slate-700">Kategori</h4>
                        <div className="space-y-2">
                            {categories.map(cat => (
                                <label key={cat} className="flex items-center space-x-2 cursor-pointer">
                                    <input 
                                        type="checkbox" 
                                        className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                                        checked={selectedCategories.includes(cat)}
                                        onChange={() => toggleFilter(selectedCategories, setSelectedCategories, cat)}
                                    />
                                    <span className="text-sm text-slate-600">{cat}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                        <h4 className="font-semibold text-sm mb-3 text-slate-700">Harga</h4>
                        <div className="space-y-2">
                             {priceRanges.map(range => (
                                <label key={range.value} className="flex items-center space-x-2 cursor-pointer">
                                    <input 
                                        type="checkbox" 
                                        className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                                        checked={selectedPriceRanges.includes(range.value)}
                                        onChange={() => toggleFilter(selectedPriceRanges, setSelectedPriceRanges, range.value)}
                                    />
                                    <span className="text-sm text-slate-600">{range.label}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Level */}
                    <div>
                        <h4 className="font-semibold text-sm mb-3 text-slate-700">Level</h4>
                        <div className="space-y-2">
                            {levels.map(level => (
                                <label key={level} className="flex items-center space-x-2 cursor-pointer">
                                    <input 
                                        type="checkbox" 
                                        className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                                        checked={selectedLevels.includes(level)}
                                        onChange={() => toggleFilter(selectedLevels, setSelectedLevels, level)}
                                    />
                                    <span className="text-sm text-slate-600">{level}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Filter Toggle */}
            <div className="md:hidden pb-4">
                 <Button variant="outline" className="w-full" onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}>
                    <Filter className="mr-2 h-4 w-4" /> 
                    {mobileFiltersOpen ? 'Sembunyikan Filter' : 'Tampilkan Filter'}
                 </Button>
            </div>

            {/* Program Grid */}
            <div className="flex-1">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold mb-2">Program Pilihan</h1>
                    <p className="text-slate-600">Menampilkan {filteredPrograms.length} program pelatihan terbaik.</p>
                </div>

                {filteredPrograms.length > 0 ? (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredPrograms.map(program => (
                            <ProgramCard key={program.id} program={program} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-lg border border-slate-200">
                        <p className="text-slate-500 mb-2">Tidak ditemukan program yang sesuai filter.</p>
                        <Button variant="link" onClick={() => {
                            setSelectedCategories([]);
                            setSelectedLevels([]);
                            setSelectedPriceRanges([]);
                        }}>
                            Reset Filter
                        </Button>
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
}
