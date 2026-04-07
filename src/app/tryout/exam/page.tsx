"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/lib/firebase/client";
import { ExamQuestion } from "@/lib/exam-data";
import { collection, query, where, getDocs } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { CheckSquare, Circle, ChevronLeft, ChevronRight, Flag, Loader2, CheckCircle2, XCircle, ArrowLeft, RefreshCw } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SaaSAlert } from '@/lib/swal';

import { Suspense } from "react";

type Answers = Record<number, string[]>;
// For true_false: key = questionId, value = Record<statementIndex, "True"|"False">
type TFAnswers = Record<number, Record<number, "True" | "False">>;
type DDAnswers = Record<number, Record<string, string>>;

function ExamPageContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const programId = searchParams.get("program") ?? "unknown";
    const examType = (searchParams.get("type") ?? "1") as "1" | "2";

    const [isAuthChecked, setIsAuthChecked] = useState(false);
    const [isLoadingQuestions, setIsLoadingQuestions] = useState(true);
    const [fetchErrorMsg, setFetchErrorMsg] = useState("");
    const [examTitle, setExamTitle] = useState("");
    const [questions, setQuestions] = useState<ExamQuestion[]>([]);
    const [answers, setAnswers] = useState<Answers>({});
    const [tfAnswers, setTfAnswers] = useState<TFAnswers>({});
    const [ddAnswers, setDdAnswers] = useState<DDAnswers>({});
    const [activeDragCategory, setActiveDragCategory] = useState<string | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [score, setScore] = useState({ correct: 0, total: 0 });

    // Auth gate and purchase verification
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, async (user) => {
            if (!user) {
                router.push("/tryout/login");
            } else {
                try {
                    // Check if user has an approved order for this explicit program
                    const q = query(
                        collection(db, "orders"), 
                        where("uid", "==", user.uid), 
                        where("paymentStatus", "==", "approved"),
                        where("program", "==", programId)
                    );
                    const snap = await getDocs(q);
                    
                    if (snap.empty) {
                        // Kicked out back to dashboard if no valid purchase is found
                        router.push("/tryout/dashboard");
                    } else {
                        setIsAuthChecked(true);
                    }
                } catch (e) {
                    console.error("Order verification failed", e);
                    router.push("/tryout/dashboard");
                }
            }
        });
        return () => unsub();
    }, [router, programId]);

    // Load questions from Firestore
    useEffect(() => {
        const fetchRemoteQuestions = async () => {
             setIsLoadingQuestions(true);
             try {
                 // Tarik semua exams tanpa filter where() untuk menghindari masalah spasi tersembunyi (trailing space)
                 // atau error index / permissions parsial. Filter dilakukan di sisi client.
                 const q = query(collection(db, "exams"));
                 const snap = await getDocs(q);
                 
                 const safeTargetProgramId = String(programId).trim().toLowerCase();
                 
                 // Sistem sangat pintar dan fleksibel: 
                 // Admin bebas mengetik nama panjang seperti "ic3-gs6-level1-certiport" atau "ic3-keren".
                 // Selama ID di URL (contoh: "ic3") menjadi bagian dari kata yang diketik Admin, sistem akan langsung menganggap COCOK.
                 const matchedDocs = snap.docs
                    .map(d => d.data())
                    .filter(d => {
                        const dbProgId = String(d.programId || "").trim().toLowerCase();
                        const isTypeMatch = String(d.type).trim() === String(examType).trim();
                        
                        // Cek apakah sama persis ATAU apakah salah satunya bagian dari kalimat yang lain
                        const isIdMatch = dbProgId === safeTargetProgramId || 
                                          dbProgId.includes(safeTargetProgramId) || 
                                          safeTargetProgramId.includes(dbProgId);
                                          
                        return isTypeMatch && isIdMatch;
                    });

                 if (matchedDocs.length > 0) {
                     // Cari dokumen yang punya pertanyaan (mencegah terambilnya dokumen kosong palsu/ghost)
                     let bestDoc = matchedDocs[0];
                     for (const d of matchedDocs) {
                         if (d.questions && d.questions.length > 0) {
                             bestDoc = d;
                             break;
                         }
                     }
                     
                     setQuestions(bestDoc.questions || []);
                     setExamTitle(bestDoc.title || `Latihan ${programId.toUpperCase()}`);
                 } else {
                     setQuestions([]);
                     const available = Array.from(new Set(snap.docs.map(d => String(d.data().programId)))).join(", ");
                     setFetchErrorMsg(`DEBUG Mismatch: URL mencari ID "${programId}". Tapi Firebase HANYA memiliki ID berikut: [${available}]`);
                 }
             } catch (error) {
                 const e = error as Error;
                 console.error("Failed to load exams", e);
                 setFetchErrorMsg(e.message || "Unknown error occurred.");
                 SaaSAlert.fire({
                     title: 'Kendala Server',
                     text: "Gagal mengambil soal dari server:\n\n" + e.message,
                     confirmButtonText: 'Tutup'
                 });
             } finally {
                 setIsLoadingQuestions(false);
             }
        };

        if (isAuthChecked) {
            fetchRemoteQuestions();
        }
    }, [isAuthChecked, programId, examType]);

    const currentQ = questions[currentIndex];
    const totalQ = questions.length;

    const handleOptionToggle = useCallback((qId: number, label: string, type: string) => {
        setAnswers(prev => {
            const current = prev[qId] ?? [];
            if (type === "single") {
                return { ...prev, [qId]: [label] };
            } else {
                const isSelected = current.includes(label);
                return {
                    ...prev,
                    [qId]: isSelected
                        ? current.filter(l => l !== label)
                        : [...current, label],
                };
            }
        });
    }, []);

    const handleTFToggle = useCallback((qId: number, stmtIdx: number, val: "True" | "False") => {
        setTfAnswers(prev => ({
            ...prev,
            [qId]: { ...(prev[qId] ?? {}), [stmtIdx]: val },
        }));
    }, []);

    const handleDDToggle = useCallback((qId: number, itemId: string, catId: string) => {
        setDdAnswers(prev => ({
            ...prev,
            [qId]: { ...(prev[qId] ?? {}), [itemId]: catId },
        }));
    }, []);

    const handleSubmit = () => {
        let correct = 0;
        questions.forEach(q => {
            if (q.type === "true_false" && q.statements) {
                const tfa = tfAnswers[q.id] ?? {};
                const allCorrect = q.statements.every((s, i) => tfa[i] === s.answer);
                if (allCorrect) correct++;
            } else if (q.type === "drag_and_drop" && q.dragItems) {
                const dda = ddAnswers[q.id] ?? {};
                const allCorrect = q.dragItems.every(item => dda[item.id] === item.categoryId);
                if (allCorrect) correct++;
            } else {
                const userAns = (answers[q.id] ?? []).sort().join(",");
                const correctAns = [...q.answers].sort().join(",");
                if (userAns === correctAns && correctAns !== "") correct++;
            }
        });
        setScore({ correct, total: totalQ });
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const getAnswerStatus = (q: ExamQuestion, label: string) => {
        if (!isSubmitted) return "idle";
        const isCorrect = q.answers.includes(label);
        const isSelected = (answers[q.id] ?? []).includes(label);
        if (isCorrect) return "correct";
        if (isSelected && !isCorrect) return "wrong";
        return "idle";
    };

    // Count answered questions (including true_false and drag_and_drop)
    const answeredCount = questions.filter(q => {
        if (q.type === "true_false") {
            const tfa = tfAnswers[q.id] ?? {};
            return q.statements && q.statements.every((_, i) => tfa[i] !== undefined);
        }
        if (q.type === "drag_and_drop") {
            const dda = ddAnswers[q.id] ?? {};
            return q.dragItems && q.dragItems.every(item => dda[item.id] !== undefined);
        }
        return (answers[q.id] ?? []).length > 0;
    }).length;

    const percentage = totalQ > 0 ? Math.round((score.correct / score.total) * 100) : 0;

    if (!isAuthChecked || isLoadingQuestions) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center">
                <Loader2 className="h-10 w-10 animate-spin text-blue-600" />
            </div>
        );
    }

    if (questions.length === 0) {
        return (
            <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 text-center">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <XCircle className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                    <h2 className="text-xl font-bold text-slate-800 mb-2">Ujian Belum Tersedia</h2>
                    <p className="text-slate-500 mb-6">
                        Paket soal untuk sertifikasi ini belum dibuat oleh Admin.<br/><br/>
                        {fetchErrorMsg && <strong className="text-red-600 block bg-red-50 p-3 rounded border border-red-100 text-xs text-left">{fetchErrorMsg}</strong>}
                    </p>
                    <Link href="/tryout/dashboard">
                        <Button>Kembali ke Dashboard</Button>
                    </Link>
                </div>
            </div>
        );
    }

    // ── RESULT SCREEN ────────────────────────────────────────
    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-slate-50 pb-16">
                <div className="bg-white border-b">
                    <div className="container mx-auto px-4 py-3 flex items-center gap-3">
                        <Link href="/tryout/dashboard"><Image src="/logo/logo-tac.png" alt="TAC" width={32} height={32} /></Link>
                        <span className="font-bold text-slate-800">Hasil Latihan</span>
                    </div>
                </div>
                <div className="container mx-auto px-4 mt-8 max-w-2xl">
                    {/* Score Card */}
                    <div className={`rounded-2xl p-8 text-center mb-8 shadow-sm ${percentage >= 60 ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}>
                        <div className={`text-7xl font-black mb-2 ${percentage >= 60 ? "text-green-600" : "text-red-600"}`}>{percentage}%</div>
                        <p className="text-xl font-semibold text-slate-800">{score.correct} / {score.total} Jawaban Benar</p>
                        <p className={`mt-2 text-sm font-medium ${percentage >= 60 ? "text-green-700" : "text-red-700"}`}>
                            {percentage >= 80 ? "🎉 Luar Biasa! Terus semangat!" : percentage >= 60 ? "👍 Bagus! Masih ada ruang untuk berkembang." : "📚 Jangan menyerah! Pelajari lagi soal-soal yang salah."}
                        </p>
                    </div>

                    {/* Per-question review */}
                    <h2 className="text-xl font-bold text-slate-800 mb-4">Pembahasan Jawaban</h2>
                    <div className="flex flex-col gap-4">
                        {questions.map((q, idx) => {
                            let isFullyCorrect = false;
                            if (q.type === "true_false" && q.statements) {
                                const tfa = tfAnswers[q.id] ?? {};
                                isFullyCorrect = q.statements.every((s, i) => tfa[i] === s.answer);
                            } else if (q.type === "drag_and_drop" && q.dragItems) {
                                const dda = ddAnswers[q.id] ?? {};
                                isFullyCorrect = q.dragItems.every(item => dda[item.id] === item.categoryId);
                            } else {
                                const userAns = answers[q.id] ?? [];
                                isFullyCorrect = [...q.answers].sort().join(",") === [...userAns].sort().join(",");
                            }
                            return (
                                <div key={q.id} className={`bg-white rounded-xl border p-5 ${isFullyCorrect ? "border-green-200" : "border-red-200"}`}>
                                    <div className="flex items-start gap-3 mb-3">
                                        {isFullyCorrect
                                            ? <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                            : <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                        }
                                        <p className="text-sm font-semibold text-slate-700 whitespace-pre-wrap"><span className="text-slate-400 mr-1">Q{idx + 1}.</span>{q.question}</p>
                                    </div>
                                    {q.imageUrl && (
                                        <div className="pl-8 mb-4">
                                            <img src={q.imageUrl} alt="Gambar Soal" className="max-h-40 rounded-lg border border-slate-200 object-contain bg-slate-50" />
                                        </div>
                                    )}
                                    <div className="pl-8">
                                        {q.type === "true_false" && q.statements ? (
                                            <table className="w-full text-xs border-collapse">
                                                <thead>
                                                    <tr>
                                                        <th className="text-left text-slate-500 pb-1 font-medium">Pernyataan</th>
                                                        <th className="text-center text-slate-500 pb-1 font-medium w-16">Jawaban</th>
                                                        <th className="text-center text-slate-500 pb-1 font-medium w-16">Benar</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {q.statements.map((s, i) => {
                                                        const tfa = tfAnswers[q.id] ?? {};
                                                        const userVal = tfa[i];
                                                        const correct = s.answer;
                                                        const isRight = userVal === correct;
                                                        return (
                                                            <tr key={i} className={`border-t ${isRight ? "bg-green-50" : "bg-red-50"}`}>
                                                                <td className="py-2 pr-3 text-slate-700">{s.text}</td>
                                                                <td className={`text-center font-semibold py-2 ${isRight ? "text-green-700" : "text-red-700"}`}>{userVal ?? "-"}</td>
                                                                <td className="text-center font-semibold py-2 text-green-700">{correct}</td>
                                                            </tr>
                                                        );
                                                    })}
                                                </tbody>
                                            </table>
                                        ) : q.type === "drag_and_drop" && q.dragItems ? (
                                            <table className="w-full text-xs border-collapse">
                                                <thead>
                                                    <tr>
                                                        <th className="text-left text-slate-500 pb-1 font-medium">Item</th>
                                                        <th className="text-center text-slate-500 pb-1 font-medium w-24">Jawaban Anda</th>
                                                        <th className="text-center text-slate-500 pb-1 font-medium w-24">Kunci Benar</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {q.dragItems.map((item, i) => {
                                                        const dda = ddAnswers[q.id] ?? {};
                                                        const userCatId = dda[item.id];
                                                        const userCatText = q.dragCategories?.find(c => c.id === userCatId)?.text || "-";
                                                        const correctCatText = q.dragCategories?.find(c => c.id === item.categoryId)?.text || "-";
                                                        const isRight = userCatId === item.categoryId;
                                                        return (
                                                            <tr key={i} className={`border-t ${isRight ? "bg-green-50" : "bg-red-50"}`}>
                                                                <td className="py-2 pr-3 text-slate-700">{item.text}</td>
                                                                <td className={`text-center font-semibold py-2 ${isRight ? "text-green-700" : "text-red-700"}`}>{userCatText}</td>
                                                                <td className="text-center font-semibold py-2 text-green-700">{correctCatText}</td>
                                                            </tr>
                                                        );
                                                    })}
                                                </tbody>
                                            </table>
                                        ) : (
                                            <div className="flex flex-col gap-1.5">
                                                {q.options.map(opt => {
                                                    const status = getAnswerStatus(q, opt.label);
                                                    return (
                                                        <div key={opt.label} className={`text-xs rounded-lg px-3 py-2 font-medium
                                                            ${status === "correct" ? "bg-green-100 text-green-800 border border-green-200" :
                                                            status === "wrong" ? "bg-red-100 text-red-800 border border-red-200" :
                                                            "bg-slate-50 text-slate-500"}`}>
                                                            {opt.label}. {opt.text}
                                                            {status === "correct" && <span className="ml-2 font-bold">✓ Benar</span>}
                                                            {status === "wrong" && <span className="ml-2 font-bold">✗ Salah kamu</span>}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Button 
                            className="w-full py-6 text-base font-semibold shadow-sm" 
                            onClick={() => { 
                                setIsSubmitted(false); 
                                setAnswers({}); 
                                setTfAnswers({}); 
                                setDdAnswers({}); // Fix: Reset drag and drop answers
                                setScore({ correct: 0, total: 0 });
                                setCurrentIndex(0); 
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                        >
                            <RefreshCw className="w-4 h-4 mr-2" />
                            Ulangi Latihan
                        </Button>
                        <Button variant="outline" className="w-full py-6 text-base font-semibold border-slate-300 shadow-sm" asChild>
                            <Link href="/tryout/dashboard">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Kembali ke Dashboard
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    // ── EXAM SCREEN ──────────────────────────────────────────
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            {/* Header */}
            <div className="bg-white border-b sticky top-0 z-10">
                <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link href="/tryout/dashboard" className="flex items-center gap-1.5 text-slate-500 hover:text-slate-800 transition-colors text-sm font-medium">
                            <ArrowLeft className="w-4 h-4" />
                            <span className="hidden sm:inline">Kembali</span>
                        </Link>
                        <div className="w-px h-6 bg-slate-200" />
                        <Link href="/tryout/dashboard"><Image src="/logo/logo-tac.png" alt="TAC" width={32} height={32} /></Link>
                        <div>
                            <p className="font-bold text-slate-800 text-sm leading-tight">{examTitle}</p>
                            <p className="text-xs text-slate-400 capitalize">{programId.replace(/-/g, " ")}</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-sm font-bold text-blue-600">{currentIndex + 1} / {totalQ}</p>
                        <p className="text-xs text-slate-400">{answeredCount} terjawab</p>
                    </div>
                </div>
                {/* Progress bar */}
                <div className="h-1 bg-slate-100">
                    <div className="h-1 bg-blue-500 transition-all" style={{ width: `${((currentIndex + 1) / totalQ) * 100}%` }} />
                </div>
            </div>

            {/* Question area */}
            <div className="flex-1 container mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6 max-w-5xl items-start justify-center">
                
                {/* Left Sidebar (Navigator) */}
                <div className="w-full lg:w-auto lg:max-w-72 flex-shrink-0 order-2 lg:order-1">
                    <div className="bg-white rounded-xl border p-4 lg:sticky lg:top-24 inline-block w-full">
                        <p className="text-xs font-semibold text-slate-500 mb-3">Navigasi Soal</p>
                        <div className="flex flex-wrap gap-2">
                            {questions.map((q, idx) => {
                                let isAnswered = false;
                                if (q.type === "true_false") {
                                    const tfa = tfAnswers[q.id] ?? {};
                                    isAnswered = !!(q.statements && q.statements.every((_, i) => tfa[i] !== undefined));
                                } else {
                                    isAnswered = !!(answers[q.id] && answers[q.id].length > 0);
                                }
                                const isCurrent = idx === currentIndex;
                                return (
                                    <button
                                        key={q.id}
                                        onClick={() => setCurrentIndex(idx)}
                                        className={`w-8 h-8 rounded-lg text-xs font-bold transition-all
                                            ${isCurrent ? "bg-blue-600 text-white ring-2 ring-blue-400 ring-offset-1" :
                                            isAnswered ? "bg-green-100 text-green-700 border border-green-200" :
                                            "bg-slate-100 text-slate-500 hover:bg-slate-200"}`}
                                    >
                                        {idx + 1}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Main Question Area */}
                <div className="flex-1 w-full max-w-2xl order-1 lg:order-2">
                    {/* Question card */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 mb-4">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-full">Soal {currentIndex + 1}</span>
                        {currentQ.type === "true_false" && (
                            <span className="flex items-center gap-1 bg-amber-100 text-amber-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                                True / False
                            </span>
                        )}
                        {currentQ.type === "multiple" && (
                            <span className="flex items-center gap-1 bg-violet-100 text-violet-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                                <CheckSquare className="w-3 h-3" /> Pilih lebih dari 1
                            </span>
                        )}
                        {currentQ.type === "drag_and_drop" && (
                            <span className="flex items-center gap-1 bg-teal-100 text-teal-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                                <CheckSquare className="w-3 h-3" /> Interaktif (Pilih Jawaban)
                            </span>
                        )}
                        {currentQ.type === "single" && (
                            <span className="flex items-center gap-1 bg-slate-100 text-slate-600 text-xs font-semibold px-2.5 py-1 rounded-full">
                                <Circle className="w-3 h-3" /> Pilih 1 jawaban
                            </span>
                        )}
                    </div>
                    <p className="text-slate-800 font-medium leading-relaxed whitespace-pre-wrap">{currentQ.question}</p>
                    {currentQ.imageUrl && (
                        <div className="mt-4 rounded-xl border border-slate-200 overflow-hidden bg-slate-50 relative flex items-center justify-center p-2 mb-2">
                           <img src={currentQ.imageUrl} alt="Gambar Soal" className="max-h-64 object-contain rounded-lg" />
                        </div>
                    )}
                    {currentQ.note && (
                        <p className="text-xs text-slate-500 italic mt-2 bg-slate-50 rounded-lg px-3 py-2 border">{currentQ.note}</p>
                    )}
                </div>

                {/* ── TRUE/FALSE TABLE ── */}
                {currentQ.type === "true_false" && currentQ.statements && (
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                        {/* Header row */}
                        <div className="grid grid-cols-[1fr_80px_80px] bg-slate-50 border-b px-4 py-2">
                            <span className="text-xs font-bold text-slate-500">Pernyataan</span>
                            <span className="text-xs font-bold text-slate-700 text-center">True</span>
                            <span className="text-xs font-bold text-slate-700 text-center">False</span>
                        </div>
                        {currentQ.statements.map((stmt, i) => {
                            const tfa = tfAnswers[currentQ.id] ?? {};
                            const selected = tfa[i];
                            return (
                                <div key={i} className={`grid grid-cols-[1fr_80px_80px] items-center px-4 py-3.5 border-b last:border-b-0 transition-colors
                                    ${selected === "True" ? "bg-blue-50/60" : selected === "False" ? "bg-orange-50/60" : "bg-white hover:bg-slate-50/80"}`}>
                                    <p className="text-sm text-slate-800 pr-4 leading-snug">{stmt.text}</p>
                                    {/* True radio */}
                                    <div className="flex justify-center">
                                        <button
                                            onClick={() => handleTFToggle(currentQ.id, i, "True")}
                                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all
                                                ${selected === "True"
                                                    ? "border-blue-500 bg-blue-500"
                                                    : "border-slate-300 hover:border-blue-400"}`}
                                        >
                                            {selected === "True" && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
                                        </button>
                                    </div>
                                    {/* False radio */}
                                    <div className="flex justify-center">
                                        <button
                                            onClick={() => handleTFToggle(currentQ.id, i, "False")}
                                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all
                                                ${selected === "False"
                                                    ? "border-orange-500 bg-orange-500"
                                                    : "border-slate-300 hover:border-orange-400"}`}
                                        >
                                            {selected === "False" && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* ── DRAG AND DROP OPTIONS ── */}
                {currentQ.type === "drag_and_drop" && currentQ.dragCategories && currentQ.dragItems && (
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Kiri: Kategori (Source) */}
                        <div className="w-full md:w-1/3 flex flex-col gap-3">
                            <h4 className="text-sm font-bold text-slate-500 mb-2 border-b pb-2">Kategori Pilihan</h4>
                            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                                {currentQ.dragCategories.map(cat => (
                                    <div 
                                        key={cat.id}
                                        draggable
                                        onDragStart={(e) => {
                                           e.dataTransfer.setData("text/plain", cat.id);
                                           setActiveDragCategory(cat.id);
                                        }}
                                        onDragEnd={() => setActiveDragCategory(null)}
                                        onClick={() => setActiveDragCategory(cat.id)}
                                        className={`bg-white p-4 rounded-xl border-2 text-center cursor-grab active:cursor-grabbing text-sm font-bold transition-all shadow-sm select-none
                                            ${activeDragCategory === cat.id ? "border-blue-500 ring-2 ring-blue-200 bg-blue-50 text-blue-700" : "border-slate-200 text-slate-700 hover:border-blue-300 hover:bg-slate-50"}`}
                                    >
                                        {cat.text}
                                    </div>
                                ))}
                            </div>
                            <p className="text-xs text-slate-400 mt-2 text-center lg:text-left">Tarik (Drag) kategori di atas, atau sentuh/klik lalu pilih targetnya untuk perangkat HP.</p>
                        </div>

                        {/* Kanan: Item & Drop Zones */}
                        <div className="w-full md:w-2/3 flex flex-col gap-3">
                            <h4 className="text-sm font-bold text-slate-500 mb-2 border-b pb-2">Area Jawaban</h4>
                            {currentQ.dragItems.map(item => {
                                const userCatId = (ddAnswers[currentQ.id] || {})[item.id];
                                const catObj = currentQ.dragCategories!.find(c => c.id === userCatId);
                                
                                return (
                                    <div key={item.id} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                                        {/* Drop Zone */}
                                        <div 
                                            className={`w-full sm:w-1/2 p-4 rounded-lg border-2 border-dashed flex items-center justify-center transition-all cursor-pointer min-h-[60px]
                                                ${userCatId ? "border-solid border-green-500 bg-green-50" : "border-slate-300 bg-slate-50 hover:bg-slate-100 hover:border-blue-400"}`}
                                            onDragOver={(e) => { e.preventDefault(); e.currentTarget.classList.add("bg-blue-100", "border-blue-400"); }}
                                            onDragLeave={(e) => { e.currentTarget.classList.remove("bg-blue-100", "border-blue-400"); }}
                                            onDrop={(e) => {
                                                e.preventDefault();
                                                e.currentTarget.classList.remove("bg-blue-100", "border-blue-400");
                                                const catId = e.dataTransfer.getData("text/plain");
                                                if(catId) handleDDToggle(currentQ.id, item.id, catId);
                                            }}
                                            onClick={() => {
                                                if (activeDragCategory) {
                                                    handleDDToggle(currentQ.id, item.id, activeDragCategory);
                                                    setActiveDragCategory(null);
                                                }
                                            }}
                                        >
                                            {userCatId ? (
                                                <span className="font-bold text-green-700 text-sm">{catObj?.text}</span>
                                            ) : (
                                                <span className="text-xs text-slate-400 font-medium">Lepas/Sentuh di sini</span>
                                            )}
                                        </div>
                                        
                                        {/* Item Text */}
                                        <div className="w-full sm:w-1/2 text-sm font-medium text-slate-800 text-center sm:text-left flex items-center">
                                            {item.text}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}

                {/* ── REGULAR OPTIONS (single / multiple) ── */}
                {(currentQ.type === "single" || currentQ.type === "multiple") && (
                    <div className="flex flex-col gap-3">
                        {currentQ.options.map(opt => {
                            const isSelected = (answers[currentQ.id] ?? []).includes(opt.label);
                            return (
                                <button
                                    key={opt.label}
                                    onClick={() => handleOptionToggle(currentQ.id, opt.label, currentQ.type)}
                                    className={`w-full text-left flex items-start gap-4 p-4 rounded-xl border-2 transition-all duration-150
                                        ${isSelected
                                            ? "border-blue-500 bg-blue-50 shadow-sm"
                                            : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                                        }`}
                                >
                                    {/* Radio / Checkbox indicator */}
                                    <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-${currentQ.type === "single" ? "full" : "md"} border-2 flex items-center justify-center transition-all
                                        ${isSelected ? "border-blue-500 bg-blue-500" : "border-slate-300"}`}>
                                        {isSelected && <div className={`bg-white ${currentQ.type === "single" ? "w-2 h-2 rounded-full" : "w-2.5 h-2.5 m-auto"}`}>
                                            {currentQ.type !== "single" && (
                                                <svg viewBox="0 0 10 8" fill="white"><path d="M1 4l3 3L9 1" strokeWidth="2" stroke="white" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
                                            )}
                                        </div>}
                                    </div>
                                    <div>
                                        <span className={`text-sm font-bold mr-2 ${isSelected ? "text-blue-600" : "text-slate-500"}`}>{opt.label}.</span>
                                        <span className={`text-sm ${isSelected ? "text-slate-900 font-medium" : "text-slate-700"}`}>{opt.text}</span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                )}

                {/* Nav buttons */}
                <div className="flex items-center justify-between mt-6 gap-3">
                    <Button variant="outline" onClick={() => setCurrentIndex(i => Math.max(0, i - 1))} disabled={currentIndex === 0} className="flex-1">
                        <ChevronLeft className="w-4 h-4 mr-1" /> Sebelumnya
                    </Button>
                    {currentIndex < totalQ - 1 ? (
                        <Button onClick={() => setCurrentIndex(i => i + 1)} className="flex-1">
                            Berikutnya <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                    ) : (
                        <Button
                            onClick={handleSubmit}
                            className="flex-1 bg-green-600 hover:bg-green-700"
                            disabled={answeredCount === 0}
                        >
                            <Flag className="w-4 h-4 mr-2" /> Selesai & Lihat Nilai
                        </Button>
                    )}
                </div>

                </div>
            </div>
        </div>
    );
}

export default function ExamPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center"><Loader2 className="h-10 w-10 animate-spin text-blue-600" /></div>}>
            <ExamPageContent />
        </Suspense>
    );
}