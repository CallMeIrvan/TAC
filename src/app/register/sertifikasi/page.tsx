"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registrationSchema, RegistrationFormValues } from "@/lib/validations";
import { COMPANY_INFO } from "@/lib/constants";
import { getPrograms, Program } from "@/lib/firebase/programs";
import { formatRupiah } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, ChevronRight, Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase/client";

import { Suspense } from 'react';

function SertifikasiRegistrationForm() {
  const searchParams = useSearchParams();
  const initialProgramId = searchParams.get("program") || "";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedProgramId, setSelectedProgramId] = useState(initialProgramId);
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
      getPrograms().then(data => {
          setPrograms(data.filter(p => p.type === "Sertifikasi" || p.category.toLowerCase() === "sertifikasi"));
      });
  }, []);

  const {
      register,
      handleSubmit,
      formState: { errors },
      watch,
      setValue,
    } = useForm({
      resolver: zodResolver(registrationSchema),
      defaultValues: {
        registrationType: "sertifikasi",
        program: initialProgramId,
        status: "mahasiswa/i",
      },
  });

  const selectedStatus = watch("status");

  const onSubmit = async (data: RegistrationFormValues) => {
    setIsSubmitting(true);
    try {
      // 1. Save completely to Firestore
      const docRef = await addDoc(collection(db, "orders"), {
        ...data,
        program: selectedProgramId,
        paymentStatus: "pending", 
        createdAt: serverTimestamp(),
      });

      // 2. Identify program name
      const programObj = programs.find(p => p.id === selectedProgramId);
      const programName = programObj ? programObj.name : "Sertifikasi TAC";

      // 3. Prepare Whatsapp Redirect
      const adminPhone = COMPANY_INFO.contacts.whatsapp.replace(/[^0-9]/g, ""); 
      
      let message = `Halo Admin TAC,\n\nSaya ingin melanjutkan proses pendaftaran.\n\nNama: ${data.fullName}\nEmail: ${data.email}\nProgram: ${programName}\nID Pendaftaran: ${docRef.id}\n\nMohon informasi pembayarannya. Terima kasih!`;
      
      if (selectedProgramId === "toeic") {
          message = `Halo Admin TAC,\n\nSaya ingin melanjutkan proses pendaftaran.\n\nNama: ${data.fullName}\nEmail: ${data.email}\nProgram: ${programName}\nID Pendaftaran: ${docRef.id}\n\n*Catatan: Saya siap melampirkan pas foto resmi untuk keperluan sertifikat.* \n\nMohon informasi pembayarannya. Terima kasih!`;
      }

      const waUrl = `https://wa.me/${adminPhone}?text=${encodeURIComponent(message)}`;
      
      // 4. Redirect 
      window.location.href = waUrl;

    } catch (error) {
      console.error(error);
      alert("Gagal mengirim data. Pastikan koneksi internet stabil.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleProgramSelect = (id: string) => {
      setSelectedProgramId(id);
      setValue("program", id, { shouldValidate: true });
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl min-h-screen">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 text-slate-500">
          <li className="inline-flex items-center">
            <Link href="/register" className="hover:text-blue-600">
              Pendaftaran
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <ChevronRight className="w-4 h-4 mx-1" />
              <span className="font-semibold text-blue-600">Sertifikasi</span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2 text-slate-900">Form Pendaftaran Sertifikasi</h1>
        <p className="text-slate-600">Harap lengkapi data berikut untuk proses administrasi sertifikasi.</p>
        
        {selectedProgramId === "toeic" && (
            <div className="mt-4 p-4 bg-orange-50 border border-orange-200 rounded-lg text-sm text-orange-800">
                <strong>Perhatian:</strong> Untuk pendaftaran program TOEIC, Anda akan diminta untuk <strong>melampirkan pas foto resmi</strong> setelah dialihkan ke WhatsApp Admin pada akhir pengisian form ini.
            </div>
        )}
      </div>

       <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
         {/* Program Section */}
         <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
            <h2 className="text-lg font-semibold mb-4 text-slate-900">Pilih Program Sertifikasi *</h2>
            <div className="grid md:grid-cols-2 gap-4">
                {programs.map((program) => (
                    <div 
                        key={program.id}
                        onClick={() => handleProgramSelect(program.id)}
                        className={`cursor-pointer rounded-lg p-4 border transition-all ${
                            selectedProgramId === program.id 
                            ? "border-blue-500 bg-blue-50 ring-1 ring-blue-500" 
                            : "border-slate-200 hover:border-slate-300"
                        }`}
                    >
                        <div className="flex justify-between items-start">
                             <div>
                                <h3 className="font-bold text-slate-900" style={{ fontFamily: "var(--font-rubik), sans-serif" }}>{program.name}</h3>
                                <p className="text-slate-500 text-sm mt-1">{formatRupiah(program.price || 0)}</p>
                             </div>
                             <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                                 selectedProgramId === program.id ? 'bg-blue-600 border-blue-600' : 'border-slate-300'
                             }`}>
                                 {selectedProgramId === program.id && <Check className="w-3 h-3 text-white" />}
                             </div>
                        </div>
                    </div>
                ))}
            </div>
            {errors.program && <p className="text-red-500 text-sm mt-2">{errors.program.message}</p>}
         </div>

         {/* Personal Data Section */}
         <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm space-y-4">
             <h2 className="text-lg font-semibold mb-4 text-slate-900">Data Diri Peserta</h2>
             
             <div className="grid md:grid-cols-2 gap-4">
                 <div className="space-y-2">
                     <label className="text-sm font-medium">Nama Lengkap *</label>
                     <Input {...register("fullName")} placeholder="Sesuai KTP" className={errors.fullName ? "border-red-500" : ""} />
                     {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName.message}</p>}
                 </div>

                 <div className="space-y-2">
                     <label className="text-sm font-medium">Email *</label>
                     <Input {...register("email")} type="email" placeholder="nama@email.com" className={errors.email ? "border-red-500" : ""} />
                     {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                 </div>
             </div>

             <div className="space-y-2">
                 <label className="text-sm font-medium">Status *</label>
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                     {["pekerja", "mahasiswa/i", "siswa/i", "umum"].map((st) => (
                         <label key={st} className={`flex items-center justify-center px-3 py-2 border rounded-md cursor-pointer text-sm capitalize ${
                             selectedStatus === st ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
                         }`}>
                             <input type="radio" value={st} {...register("status")} className="sr-only" />
                             {st}
                         </label>
                     ))}
                 </div>
                 {errors.status && <p className="text-red-500 text-xs">{errors.status.message}</p>}
             </div>

             <div className="grid md:grid-cols-2 gap-4">
                 <div className="space-y-2">
                     <label className="text-sm font-medium">Asal Instansi/Kampus *</label>
                     <Input {...register("origin")} placeholder="Nama Kampus / Kantor" className={errors.origin ? "border-red-500" : ""} />
                     {errors.origin && <p className="text-red-500 text-xs">{errors.origin.message}</p>}
                 </div>
                 <div className="space-y-2">
                     <label className="text-sm font-medium">Nomor Identitas (NIM/NIK/NIS) *</label>
                     <Input {...register("identifier")} placeholder="Nomor Induk" className={errors.identifier ? "border-red-500" : ""} />
                     {errors.identifier && <p className="text-red-500 text-xs">{errors.identifier.message}</p>}
                 </div>
             </div>

             <div className="space-y-2">
                 <label className="text-sm font-medium">Nomor WhatsApp *</label>
                 <div className="flex">
                    <span className="inline-flex items-center px-3 border border-r-0 border-slate-300 rounded-l-md bg-slate-50 text-slate-500 font-medium">+62</span>
                    <Input {...register("whatsapp")} type="tel" placeholder="8123456789" className={`rounded-l-none ${errors.whatsapp ? "border-red-500" : ""}`} />
                 </div>
                 <p className="text-xs text-slate-500">Pastikan nomor aktif dan terhubung dengan WhatsApp.</p>
                 {errors.whatsapp && <p className="text-red-500 text-xs">{errors.whatsapp.message}</p>}
             </div>
         </div>

         <div className="flex justify-end gap-4">
             <Button variant="ghost" asChild>
                 <Link href="/register">Batal</Link>
             </Button>
             <Button type="submit" disabled={isSubmitting || !selectedProgramId}>
                 {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                 Kirim Pendaftaran
             </Button>
         </div>
       </form>
    </div>
  );
}

export default function SertifikasiRegistrationPage() {
  return (
    <Suspense fallback={<div className="container py-8 max-w-4xl min-h-screen text-center"><Loader2 className="w-8 h-8 animate-spin mx-auto text-blue-600" /></div>}>
      <SertifikasiRegistrationForm />
    </Suspense>
  );
}
