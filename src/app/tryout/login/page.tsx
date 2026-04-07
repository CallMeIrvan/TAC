"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { auth } from "@/lib/firebase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Lock, ArrowRight, Eye, EyeOff, Info } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SaaSAlert } from '@/lib/swal';

export default function TryoutLoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email.trim() || !password.trim()) {
            SaaSAlert.fire({
                title: 'Gagal Login',
                text: 'Harap masukkan email dan password Anda untuk melanjutkan.',
                confirmButtonText: 'Coba Lagi'
            });
            return;
        }

        setIsLoading(true);

        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push("/tryout/dashboard");
        } catch (err) {
            if (err instanceof FirebaseError) {
                let errorMessage = "Terjadi kesalahan saat login.";
                switch (err.code) {
                    case "auth/invalid-credential":
                    case "auth/user-not-found":
                    case "auth/wrong-password":
                        errorMessage = "Email atau password tidak valid.";
                        break;
                    case "auth/too-many-requests":
                        errorMessage = "Terlalu banyak percobaan gagal. Silakan coba lagi nanti.";
                        break;
                    default:
                        errorMessage = err.message;
                }
                SaaSAlert.fire({
                    title: 'Login Gagal',
                    text: errorMessage,
                    confirmButtonText: 'Coba Lagi'
                });
            } else {
                SaaSAlert.fire({
                    title: 'Login Gagal',
                    text: "Terjadi kesalahan yang tidak diketahui.",
                    confirmButtonText: 'Oke'
                });
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-900/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

            <div className="w-full max-w-md relative z-10">
                {/* Logo & Brand Top */}
                <div className="text-center mb-8">
                    <Link href="/" className="inline-flex items-center gap-2 group">
                        <Image src="/logo/logo-tac.png" alt="Logo TAC" width={40} height={40} style={{ width: "auto", height: "auto" }} />
                        <span className="font-bold text-xl text-slate-900 group-hover:text-blue-600 transition-colors">The A Class</span>
                    </Link>
                </div>

                {/* Login Card */}
                <div className="bg-white rounded-2xl shadow-[0_8px_40px_rgb(15,23,42,0.08)] border border-slate-200/50 overflow-hidden">
                    {/* Card Header with gradient */}
                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-center">
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-5 border border-white/20">
                            <Lock className="w-8 h-8 text-blue-300" />
                        </div>
                        <h1 className="text-2xl font-bold text-white mb-2">Akses Tryout TAC</h1>
                        <p className="text-blue-200/70 text-sm">
                            Masukkan email dan password yang telah diberikan oleh Admin.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="p-8 space-y-5">
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-slate-900 font-semibold text-sm">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="nama@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    disabled={isLoading}
                                    className="h-12 rounded-xl border-slate-200 bg-slate-50/50 focus:border-blue-500 focus:ring-blue-500/20 text-slate-900 placeholder:text-slate-400"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password" className="text-slate-900 font-semibold text-sm">Password</Label>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        disabled={isLoading}
                                        className="h-12 rounded-xl border-slate-200 bg-slate-50/50 focus:border-blue-500 focus:ring-blue-500/20 text-slate-900 placeholder:text-slate-400 pr-12"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-600 transition-colors p-1"
                                        tabIndex={-1}
                                    >
                                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="px-8 pb-8">
                            <Button
                                type="submit"
                                className="w-full h-12 text-base font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 shadow-lg shadow-blue-600/20 transition-all duration-300 hover:shadow-blue-600/30"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                        Memproses...
                                    </>
                                ) : (
                                    <>
                                        Masuk ke Dashboard
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </>
                                )}
                            </Button>
                        </div>
                    </form>
                </div>

                {/* Info Notice */}
                <div className="mt-6 bg-blue-50/80 border border-blue-100 rounded-xl p-5">
                    <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                            <Info className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-slate-900 mb-1">Belum punya akun?</p>
                            <p className="text-xs text-slate-600 leading-relaxed mb-3">
                                Untuk mengakses tryout, anda harus mendaftar program sertifikasi terlebih dahulu. Setelah pendaftaran disetujui oleh Admin, akun login akan dikirimkan melalui WhatsApp.
                            </p>
                            <Link 
                                href="/register" 
                                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 hover:gap-2.5 transition-all duration-300"
                            >
                                Daftar Sertifikasi <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Back to home */}
                <p className="text-center mt-6 text-xs text-[#0F1B3D]/40">
                    <Link href="/" className="hover:text-blue-600 transition-colors">← Kembali ke Beranda</Link>
                </p>
            </div>
        </div>
    );
}
