import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { formatRupiah } from "@/lib/utils";
import { COMPANY_INFO } from "@/lib/constants";
import { getProgramBySlug, getPrograms } from "@/lib/firebase/programs";
import { Metadata } from 'next';
import {
  CheckCircle2,
  Clock,
  Calendar,
  Shield,
  Users,
  HelpCircle,
  ChevronRight,
} from "lucide-react";

// Mock Data for Detail Page (since constants.ts is limited)
interface ProgramDetail {
  duration: string;
  benefits: string[];
  faqs: { q: string; a: string }[];
  description: string[];
}

const COMMON_IT_BENEFITS = [
  "Akses platform latihan",
  "Sertifikasi international",
  "Menambah nilai saat melamar kerja",
  "Meningkatkan kredibilitas profesional",
  "Meningkatkan daya saing di dunia kerja",
];

const MOCK_DETAILS: Record<string, ProgramDetail> = {
  default: {
    duration: "12 Sesi (2 Jam/Sesi)",
    benefits: COMMON_IT_BENEFITS,
    faqs: [
      {
        q: "Apakah pemula bisa ikut?",
        a: "Tentu saja! Program ini dirancang dari dasar hingga mahir.",
      },
      {
        q: "Bagaimana jika berhalangan hadir?",
        a: "Tenang, tersedia rekaman kelas yang bisa diakses kapan saja.",
      },
      {
        q: "Apakah sertifikat diakui?",
        a: "Sertifikat kami berafiliasi dengan vendor internasional seperti Microsoft/Adobe.",
      },
    ],
    description: [
        "Program ini dirancang khusus untuk memenuhi kebutuhan industri terkini. Anda akan mempelajari materi komprehensif yang mencakup teori fundamental hingga praktik langsung studi kasus dunia kerja.",
        "Dibimbing langsung oleh praktisi berpengalaman, memastikan Anda mendapatkan insight yang relevan."
    ]
  },
  ic3: {
    duration: "Fleksibel",
    benefits: [
      ...COMMON_IT_BENEFITS,
      "Menjadi dasar untuk sertifikasi IT lanjutan",
    ],
    faqs: [
      {
        q: "Apakah ujian ini dalam bahasa Indonesia?",
        a: "Tersedia pilihan dalam Bahasa Indonesia maupun English.",
      },
    ],
    description: [
        "IC3 (Internet and Computing Core Certification) merupakan sertifikasi keahlian umum dalam menggunakan TIK yang berstandar global serta merefleksikan keahlian TIK terkini dan relevan bagi dunia kerja maupun dunia pendidikan.",
        "IC3 diciptakan oleh Certiport (www.certiport.org) bagian dari Pearson perusahaan terdepan dalam menyediakan program sertifikasi dan solusi pelatihan untuk institusi pendidikan, pencari kerja dan perusahaan teknologi yang dapat diakses melalui lebih dari 12.000 Certiport Authorized Testing Centers di seluruh dunia."
    ]
  },
  mos: {
    duration: "Fleksibel",
    benefits: COMMON_IT_BENEFITS,
    faqs: [
      {
        q: "Apakah ujian ini dalam bahasa Indonesia?",
        a: "Tersedia pilihan dalam Bahasa Indonesia maupun English.",
      },
    ],
    description: [
        "Sertifikasi Microsoft® merupakan salah satu sertifikasi yang memudahkan institusi dalam membangun dan menyediakan pendidikan teknologi dengan sertifikasi teknologi level awal yang sederhana dan terjangkau.",
        "Fokus terhadap MOS atau Microsoft Office Specialist yang merupakan sertifikasi berskala global yang menunjukan kemampuan dalam menggunakan program-program dari Microsoft Office seperti Microsoft Word, Microsoft Excel, Microsoft Power Point, Microsoft OneNote, Microsoft Outlook, Microsoft Access, Microsoft SharePoint. Lebih dari 1 juta tes setiap tahunnya dilaksanakan di lebih dari 140 negara di dunia.",
        "Sertifikasi Microsoft® akan membantu peserta mendapatkan sertifikasi industri di awal karir teknologi mereka dan memberikan kepercayaan diri untuk melanjutkan karir mereka di bidang IT yang menantang dan bermanfaat."
    ]
  },
  "its-database": {
    duration: "Fleksibel",
    benefits: COMMON_IT_BENEFITS,
    faqs: [
      {
        q: "Apakah ujian ini dalam bahasa Indonesia?",
        a: "Ujian ITS umumnya menggunakan Bahasa Inggris.",
      },
    ],
    description: [
        "Program Spesialis Teknologi Informasi (ITS) Database adalah cara bagi Anda untuk memvalidasi keterampilan IT tingkat awal yang biasanya dicari oleh pemberi kerja, khususnya dalam pengelolaan basis data.",
        "Program Spesialis TI ditujukan untuk kandidat yang sedang mempertimbangkan atau baru memulai karir di bidang teknologi informasi. Keahlian database sangat krusial di era big data ini."
    ]
  },
  "its-networking": {
    duration: "Fleksibel",
    benefits: COMMON_IT_BENEFITS,
    faqs: [
      {
        q: "Apakah ujian ini dalam bahasa Indonesia?",
        a: "Ujian ITS umumnya menggunakan Bahasa Inggris.",
      },
    ],
    description: [
        "Program Spesialis Teknologi Informasi (ITS) Networking adalah ujian sertifikasi untuk memvalidasi pengetahuan dasar jaringan komputer dan infrastruktur IT.",
        "Sangat relevan untuk kandidat yang ingin memulai karir sebagai Network Administrator atau Network Engineer."
    ]
  },
  aca: {
      duration: "Fleksibel",
      benefits: COMMON_IT_BENEFITS,
      faqs: [
        { q: "Software Adobe versi apa yang diuji?", a: "Biasanya versi CS6 hingga CC (Creative Cloud) yang terbaru." }
      ],
      description: [
        "Adobe Certified Associate (ACA) merupakan sertifikasi yang telah dikenal dan diakui dunia kerja untuk memperlihatkan tingkat kemampuan dalam menggunakan aplikasi-aplikasi komunikasi visual Adobe yaitu Adobe Photoshop, Adobe InDesign, Adobe Illustrator, Adobe Dreamweaver, Adobe Flash dan Adobe Premiere Pro.",
        "Sertifikasi ACA juga dapat menunjukan bakat yang dimiliki seseorang dalam mengkomunikasikan ide dan kreatifitasnya dalam bentuk video, multimedia, desain grafis dan website dengan menggunakan aplikasi-aplikasi Adobe. Bagi Anda yang ingin menempuh pendidikan lebih tinggi atau mengambil kelas khusus dalam komunikasi visual, memiliki sertifikasi ACA terlebih dahulu dapat memberi gambaran mengenai program pendidikan yang akan ditempuh.",
        "Untuk yang akan memasuki dunia kerja, sertifikasi ACA memberi nilai lebih dan menjadikannya sebagai kandidat unggulan yang layak dipilih."
      ]
  },
  "meta-ads": {
      duration: "Fleksibel",
      benefits: COMMON_IT_BENEFITS,
      faqs: [
        { q: "Apakah ujian ini resmi dari Meta?", a: "Ya, sertifikasi ini diakui secara global oleh Meta." }
      ],
      description: [
          "Meta Blueprint Certification (sebelumnya Facebook Blueprint) adalah program sertifikasi resmi dari Meta yang dirancang untuk memvalidasi tingkat kemahiran tingkat lanjut dalam berbagai aspek pemasaran digital menggunakan platform produk Meta, termasuk Facebook, Instagram, dan Messenger.",
          "Memiliki sertifikasi Meta Blueprint memberikan keuntungan profesional dengan membuktikan kemampuan Anda kepada perusahaan atau klien dalam merancang strategi iklan digital yang efektif dan membuahkan hasil rill."
      ]
  },
  jurnal: {
      duration: "Fleksibel",
      benefits: COMMON_IT_BENEFITS,
      faqs: [
        { q: "Apakah ujian ini resmi dari Mekari?", a: "Ya, penilaian dilakukan langsung oleh pihak penguji dari Mekari Jurnal." }
      ],
      description: [
          "Jurnal.id adalah sebuah software akuntansi online berbasis cloud untuk mengatur sistem pembukuan yang lebih baik bagi pemilik Usaha Kecil dan Menengah (UKM) yang dapat diakses di mana pun dan kapan pun.",
          "Proses sertifikasi jurnal.id yang dilaksanakan oleh pihak Mekari terdiri dari beberapa penilaian sebagai berikut: Nilai Ujian Praktek 40%, Ujian Teori 30% dan Nilai Tugas 30%. Persentase nilai tersebut sudah diatur oleh pihak Mekari dan penilaian dilakukan oleh pihak Mekari secara langsung."
      ]
  },
  toeic: {
    duration: "Fleksibel",
    benefits: [
      "Ujian sertifikasi resmi (listening and reading)",
      "Sertifikat TOEIC resmi diakui secara international",
      "Menambah nilai saat melamar kerja",
      "Syarat untuk wisuda dan beasiswa",
      "Meningkatkan daya saing karir",
      "Mengukur kemampuan Bahasa Inggris secara objektif",
    ],
    faqs: [
      {
        q: "Berapa lama masa berlaku sertifikat TOEIC?",
        a: "Sertifikat TOEIC berlaku selama 2 tahun.",
      },
    ],
    description: [
        "Test of English for International Communication (TOEIC) merupakan salah satu sertifikasi Bahasa Inggris yang sering digunakan dalam lingkungan pekerjaan dan bisnis. TOEIC bisa digunakan sebagai pengukur kemampuan Bahasa Inggris, sebagai sarana komunikasi sehari-hari dan sering menjadi syarat masuk perguruan tinggi.",
        "TOEIC mengukur kemampuan dalam beberapa aspek (reading & listening) yang dipakai dalam dunia kerja. Tes ini lebih banyak digunakan untuk menguji business dan general English yang diambil dari kehidupan sehari-hari.",
        "Banyak alasan mengapa mengikuti tes TOEIC. Pertama, alasan pekerjaan di mana perusahaan meminta sertifikat TOEIC. Kedua, pendaftaran pendidikan atau syarat lulus. Di Indonesia, TOEIC adalah tes dasar yang menunjukkan kesiapan seseorang dalam berbahasa Inggris di dunia profesional."
    ]
  },
  "mos-excel-course": {
    duration: "10 Orang",
    benefits: [
      "Dapat module pembelajaran",
      "Dapat sertifikat cetak fisik",
      "Meningkatkan pengetahuan dan keterampilan",
      "Meningkatkan kompetensi internasional",
      "Meningkatkan peluang karir",
      "Menambah nilai pada CV atau Portofolio",
    ],
    faqs: [
      {
        q: "Apakah sudah termasuk ujian sertifikasi?",
        a: "Kursus ini ditujukan untuk persiapan materi. Ujian sertifikasi diambil terpisah.",
      },
    ],
    description: [
        "Excel merupakan bagian dari microsoft office yang berfungsi untuk mencatat, menyimpan, dan mengolah data dengan metode spreadsheet. Microsoft Excel dapat digunakan di sistem Windows, Mac OS, dll.",
        "Di era serba digital seperti saat ini, Microsoft Excel merupakan software paling populer dan paling banyak digunakan di berbagai bidang. Bahkan, saat ini Excel sudah menjadi syarat umum yang harus dimiliki oleh job seeker.",
        "Modul MOS atau Microsoft Excel ini melatih dan menguji pengetahuan Anda tentang: Pengelolaan lembar kerja (worksheet), Pembuatan sel data, Memformat sel, Penggunaan formula dan fungsi, Penyajian data visual, hingga Analisa data tingkat lanjut."
    ]
  },
  "accounting-course": {
    duration: "5 Orang",
    benefits: [
      "Dapat module pembelajaran",
      "Dapat sertifikat cetak fisik",
      "Meningkatkan pengetahuan dan keterampilan",
      "Meningkatkan kompetensi internasional",
      "Meningkatkan peluang karir",
      "Menambah nilai pada CV atau Portofolio",
    ],
    faqs: [
      {
        q: "Apakah perlu background akuntansi?",
        a: "Tidak wajib, kelas mulai dari dasar.",
      },
    ],
    description: [
        "Kursus Akuntansi ini dirancang bagi Anda yang ingin menguasai alur pembukuan mulai dari dasar hingga tingkat lanjut.",
        "Anda akan diajarkan siklus akuntansi lengkap, penjurnalan, buku besar, penyusunan laporan keuangan neraca, laba/rugi, hingga analisa rasio keuangan dasar.",
        "Sangat relevan untuk UKM, staff admin, maupun pencari kerja yang ingin menambah skillset administrasi keuangan."
    ]
  },
  "tax-pph-op": {
    duration: "5 Orang",
    benefits: [
      "Dapat module pembelajaran",
      "Dapat sertifikat cetak fisik",
      "Meningkatkan pengetahuan dan keterampilan",
      "Meningkatkan kompetensi internasional",
      "Meningkatkan peluang karir",
      "Menambah nilai pada CV atau Portofolio",
    ],
    faqs: [
      {
        q: "Apa fokus kelas uji ini?",
        a: "Mencakup kompetensi perpajakan PPh Orang Pribadi.",
      },
    ],
    description: [
        "Kursus Perpajakan membekali Anda dengan pengetahuan tata cara dan aturan perpajakan yang berlaku di Indonesia (standar Brevet A/B) khusus untuk PPh Orang Pribadi.",
        "Materi mencakup KUP, PPh Orang Pribadi Dasar hingga pengisian e-SPT dan e-Faktur.",
        "Cocok untuk konsultan pajak pemula, staff keuangan, maupun pengusaha yang ingin mengurus ketertiban pajaknya sendiri."
    ]
  },
  "tax-pph-badan": {
    duration: "5 Orang",
    benefits: [
      "Dapat module pembelajaran",
      "Dapat sertifikat cetak fisik",
      "Meningkatkan pengetahuan dan keterampilan",
      "Meningkatkan kompetensi internasional",
      "Meningkatkan peluang karir",
      "Menambah nilai pada CV atau Portofolio",
    ],
    faqs: [
      {
        q: "Apa fokus kelas uji ini?",
        a: "Mencakup kompetensi perpajakan PPh Badan.",
      },
    ],
    description: [
        "Kursus Perpajakan membekali Anda dengan pengetahuan tata cara dan aturan perpajakan yang berlaku di Indonesia (standar Brevet A/B) khusus untuk PPh Badan.",
        "Materi mencakup PPh Badan Dasar, koreksi fiskal, hingga pengisian e-SPT.",
        "Cocok untuk profesional akuntansi dan finance perusahaan."
    ]
  },
  "tax-ppn": {
    duration: "5 Orang",
    benefits: [
      "Dapat module pembelajaran",
      "Dapat sertifikat cetak fisik",
      "Meningkatkan pengetahuan dan keterampilan",
      "Meningkatkan kompetensi internasional",
      "Meningkatkan peluang karir",
      "Menambah nilai pada CV atau Portofolio",
    ],
    faqs: [
      {
        q: "Apa fokus kelas uji ini?",
        a: "Mencakup kompetensi perpajakan PPN & PPnBM.",
      },
    ],
    description: [
        "Kursus Perpajakan membekali Anda dengan pengetahuan khusus tentang PPN (Pajak Pertambahan Nilai) & PPnBM.",
        "Materi mencakup konsep dasar PPN, pemungutan, hingga aplikasi faktur (e-Faktur).",
        "Cocok untuk tim administrasi penjualan dan finance yang sering berhadapan dengan faktur."
    ]
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const slug = (await params).slug;
  const p = await getProgramBySlug(slug);
  if (!p) return { title: 'Program Tidak Ditemukan' };
  return { title: p.seoTitle || p.name, description: p.seoDescription || p.description };
}

export async function generateStaticParams() {
   const programs = await getPrograms();
   return programs.map(p => ({ slug: p.slug }));
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const program = await getProgramBySlug(slug);

  if (!program) {
    notFound();
  }

  // Use mock details or default
  const details = MOCK_DETAILS[slug] || MOCK_DETAILS.default;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center text-sm text-slate-500">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Beranda
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link
              href="/program"
              className="hover:text-blue-600 transition-colors"
            >
              Program
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="font-semibold text-blue-600 line-clamp-1">
              {program.name}
            </span>
          </nav>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Header Section */}
            <div>
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4 ${
                  program.type === "Sertifikasi"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {program.type}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                {program.name}
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                {program.description}
              </p>
            </div>

            {/* Info Bar */}
            <div className="flex flex-wrap gap-4 md:gap-8 p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold">
                    Durasi
                  </p>
                  <p className="font-semibold text-slate-800">
                    {details.duration}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold">
                    Level
                  </p>
                  <p className="font-semibold text-slate-800">
                    {program.level || "Umum"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold">
                    Metode
                  </p>
                  <p className="font-semibold text-slate-800">
                    Online / Offline
                  </p>
                </div>
              </div>
            </div>

            {/* About / Description */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Tentang Program</h2>
              <div className="prose max-w-none text-slate-600 space-y-4">
                  {details.description.map((desc: string, idx: number) => (
                      <p key={idx}>{desc}</p>
                  ))}
              </div>
            </section>

            {/* Syllabus section removed per user request */}

            {/* Benefits */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Fasilitas & Benefit</h2>
              
              {program.id === "toeic" && (
                  <div className="mb-4 p-4 bg-orange-50 border border-orange-200 rounded-lg text-sm text-orange-800">
                      <strong>Perhatian:</strong> Untuk pendaftaran TOEIC, Anda akan diminta <strong>melampirkan pas foto resmi</strong> saat melanjutkan proses administrasi via WhatsApp admin.
                  </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                {details.benefits.map((benefit: string, idx: number) => (
                  <div
                    key={idx}
                    className="flex p-4 bg-slate-50 rounded-lg border border-slate-100"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm font-medium text-slate-700">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {details.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-6 rounded-xl border border-slate-200"
                  >
                    <h3 className="font-bold text-slate-900 mb-2 flex items-start">
                      <HelpCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      {faq.q}
                    </h3>
                    <p className="text-slate-600 ml-7">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-lg">
                <h3 className="font-semibold text-slate-500 mb-2">
                  Biaya Program
                </h3>
                <div className="flex items-end gap-2 mb-6">
                  {program.type === "Sertifikasi" ? (
                    <span className="text-3xl font-bold text-blue-600">
                      {formatRupiah(program.price || 0)}
                    </span>
                  ) : (
                    <div className="flex flex-col">
                      <span className="text-3xl font-bold text-green-600">
                        {formatRupiah(program.packagePrice || 0)} <span className="text-base font-normal text-slate-500">/ paket</span>
                      </span>
                      <span className="text-sm text-slate-500 mt-2 bg-slate-50 p-2 rounded border border-slate-100">
                        Regular: Harga dibagi {program.isFixedQuota ? "5 atau 10" : `minimal ${program.minParticipants}`} peserta.
                      </span>
                    </div>
                  )}
                </div>

                <div className="space-y-3 mb-6">
                  <Button className="w-full text-lg h-12" asChild>
                    <Link
                      href={`/register/${program.type === "Sertifikasi" ? "sertifikasi" : "kursus"}?program=${program.id}`}
                    >
                      Daftar Sekarang
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.contacts.whatsapp.replace("+", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Konsultasi via WhatsApp
                    </a>
                  </Button>
                </div>

                <div className="text-center">
                  <p className="text-xs text-slate-500 mb-2">
                    Dijamin aman & terpercaya
                  </p>
                  <div className="flex justify-center gap-2 grayscale opacity-50">
                    {/* Payment Logos Placeholder */}
                    <div className="h-6 w-10 bg-slate-200 rounded"></div>
                    <div className="h-6 w-10 bg-slate-200 rounded"></div>
                    <div className="h-6 w-10 bg-slate-200 rounded"></div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <h4 className="font-bold text-blue-900 mb-2">Butuh Bantuan?</h4>
                <p className="text-sm text-blue-700 mb-4">
                  Tim konsultan kami siap membantu Anda memilih program yang
                  tepat.
                </p>
                <a
                  href={`tel:${COMPANY_INFO.contacts.whatsapp}`}
                  className="text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Hubungi Tim Admission
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
