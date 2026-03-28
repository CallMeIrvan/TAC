import { z } from "zod";

export const registrationSchema = z.object({
  registrationType: z.enum(["sertifikasi", "kursus"]),
  program: z.string().min(1, "Program harus dipilih"),
  email: z.string().email("Format email tidak valid"),
  fullName: z.string().min(3, "Nama lengkap minimal 3 karakter"),
  status: z.enum(["pekerja", "mahasiswa/i", "siswa/i", "umum"]),
  origin: z.string().min(1, "Asal instansi/kampus/sekolah harus diisi"),
  identifier: z.string().min(1, "NIM/NIK/NIS harus diisi"),
  whatsapp: z.string()
    .min(10, "Nomor WhatsApp minimal 10 digit")
    .regex(/^[0-9]+$/, "Nomor WhatsApp harus berupa angka"),
  courseClassType: z.enum(["reguler", "privat"]).optional(),
  mosQuota: z.enum(["5", "10"]).optional(),
}).superRefine((data, ctx) => {
  if (data.program === "mos-excel-course" && data.courseClassType === "reguler" && !data.mosQuota) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Pilihan kuota peserta wajib dipilih untuk kelas MOS Excel Regular",
      path: ["mosQuota"],
    });
  }
});

export type RegistrationFormValues = z.infer<typeof registrationSchema>;
