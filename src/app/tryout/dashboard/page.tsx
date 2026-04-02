"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db, auth } from "@/lib/firebase/client";
import { getPrograms, Program } from "@/lib/firebase/programs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Loader2, LogOut, Verified, ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function TryoutDashboardPage() {
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [certifications, setCertifications] = useState<Program[]>([]);
    const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (!currentUser) {
                router.push("/tryout/login");
            } else {
                setUser(currentUser);
                try {
                    // Fetch purchased orders
                    const q = query(
                        collection(db, "orders"), 
                        where("uid", "==", currentUser.uid), 
                        where("paymentStatus", "==", "approved")
                    );
                    const snap = await getDocs(q);
                    const purchasedIds = snap.docs.map(doc => doc.data().program);
                    
                    // Fetch all programs and filter based on purchases
                    const progs = await getPrograms();
                    setCertifications(progs.filter((p) => p.type === "Sertifikasi" && purchasedIds.includes(p.id)));
                } catch (error) {
                    console.error("Gagal sinkronasi pesanan:", error);
                } finally {
                    setIsLoading(false);
                }
            }
        });

        return () => unsubscribe();
    }, [router]);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            router.push("/");
        } catch (error) {
            console.error("Gagal logout:", error);
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center">
                <Loader2 className="h-10 w-10 animate-spin text-blue-600 mb-4" />
                <p className="text-slate-500 font-medium animate-pulse">Memverifikasi Sesi...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 pb-16">
            {/* Header Dashboard */}
            <div className="bg-white border-b border-slate-200">
                <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="flex items-center gap-2">
                          <Image src="/logo/logo-tac.png" alt="Logo TAC" width={32} height={32} className="object-contain" />
                          <span className="font-bold text-xl text-slate-800">The A Class</span>
                        </Link>
                        <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded ml-2">Tryout</span>
                    </div>
                    {user && (
                        <div className="flex items-center gap-4 text-sm font-medium text-slate-600">
                            <span>{user.email}</span>
                            <Button variant="outline" size="sm" onClick={handleLogout} className="text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200">
                                <LogOut className="w-4 h-4 mr-2" /> Keluar
                            </Button>
                        </div>
                    )}
                </div>
            </div>

            {/* Dashboard Content */}
            <div className="container mx-auto px-4 mt-8">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-slate-900">Dashboard Simulasi Ujian</h1>
                    <p className="text-slate-500 mt-2">Pilih modul sertifikasi di bawah ini untuk memulai latihan tryout (Tipe 1 & Tipe 2).</p>
                </div>

                {certifications.length === 0 ? (
                    <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center shadow-sm">
                        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
                            <Verified className="w-10 h-10" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-3">Belum Ada Ujian Aktif</h2>
                        <p className="text-slate-500 max-w-md mx-auto mb-8 leading-relaxed">
                            Anda belum memiliki program Sertifikasi yang sudah disetujui. 
                            Silakan lakukan pendaftaran dan selesaikan pembayaran untuk mengaktifkan modul Tryout Anda.
                        </p>
                        <Button asChild className="bg-blue-600 hover:bg-blue-700">
                            <Link href="/program">
                                Lihat Program Sertifikasi
                            </Link>
                        </Button>
                    </div>
                ) : (
                    <div className="flex flex-wrap justify-center gap-6">
                        {certifications.map((program) => (
                            <Card key={program.id} className="relative hover:shadow-lg transition-all border-slate-200/60 bg-white h-full flex flex-col w-full max-w-sm">
                                <CardHeader className="pb-4 border-b border-slate-50/50 bg-gradient-to-br from-slate-50 to-white rounded-t-xl">
                                    <div className="flex items-start justify-between">
                                        <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                                            <Verified className="w-6 h-6" />
                                        </div>
                                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                                            {program.level}
                                        </span>
                                    </div>
                                    <CardTitle className="leading-tight text-xl" style={{ fontFamily: "var(--font-rubik), sans-serif" }}>{program.name}</CardTitle>
                                    <CardDescription className="line-clamp-2 mt-2">{program.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="pt-6">
                                    <p className="text-sm text-slate-500 font-medium mb-3">Pilih Tipe Simulasi:</p>
                                    <div className="relative">
                                        <button
                                            onClick={() => setOpenDropdownId(openDropdownId === program.id ? null : program.id)}
                                            onBlur={() => setTimeout(() => { if (openDropdownId === program.id) setOpenDropdownId(null) }, 200)}
                                            className={`w-full flex items-center justify-between bg-white border px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 outline-none
                                                ${openDropdownId === program.id ? 'border-blue-400 ring-4 ring-blue-500/10 text-blue-700' : 'border-slate-200 hover:border-blue-300 text-slate-700 hover:bg-slate-50/50'}`}
                                        >
                                            <span>-- Klik untuk memilih --</span>
                                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openDropdownId === program.id ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
                                        </button>
                                        
                                        <div className={`absolute z-20 w-full mt-2 bg-white border border-slate-100 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] py-2 transition-all duration-200 origin-top
                                            ${openDropdownId === program.id ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'}`}
                                        >
                                            <button 
                                                onMouseDown={(e) => { e.preventDefault(); router.push(`/tryout/exam?program=${program.id}&type=1`); }}
                                                className="w-full text-left px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-700 transition-colors flex items-center justify-between group"
                                            >
                                                Latihan Soal 1
                                                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                            </button>
                                            <div className="h-px bg-slate-50 mx-4"></div>
                                            <button 
                                                onMouseDown={(e) => { e.preventDefault(); router.push(`/tryout/exam?program=${program.id}&type=2`); }}
                                                className="w-full text-left px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-indigo-50 hover:text-indigo-700 transition-colors flex items-center justify-between group"
                                            >
                                                Latihan Soal 2
                                                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                            </button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
