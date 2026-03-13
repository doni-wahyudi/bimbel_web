import { useState } from 'react';
import { CheckCircle2, ArrowRight, ArrowLeft, ClipboardList, Info } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: { label: string; value: string; score: number }[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "Apa level pendidikan Anda saat ini?",
    options: [
      { label: "Sekolah Dasar (SD)", value: "SD", score: 1 },
      { label: "Sekolah Menengah Pertama (SMP)", value: "SMP", score: 2 },
      { label: "Sekolah Menengah Atas (SMA/SMK)", value: "SMA", score: 3 },
    ]
  },
  {
    id: 2,
    text: "Mata pelajaran apa yang paling ingin Anda tingkatkan?",
    options: [
      { label: "Matematika & Numerasi", value: "math", score: 0 },
      { label: "Bahasa Inggris & Literasi", value: "english", score: 0 },
      { label: "Sains (IPA/Fisika/Kimia)", value: "science", score: 0 },
      { label: "Persiapan Ujian Akhir/UTBK", value: "exam", score: 0 },
    ]
  },
  {
    id: 3,
    text: "Bagaimana cara belajar favorit Anda?",
    options: [
      { label: "Diskusi Kelompok Kecil", value: "group", score: 0 },
      { label: "Fokus Privat (Satu-lawan-Satu)", value: "private", score: 0 },
      { label: "Penjelasan Visual & Gambar", value: "visual", score: 0 },
    ]
  }
];

const DiagnosticTest = () => {
  const [step, setStep] = useState(0); // 0: Start, 1-3: Questions, 4: Result
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const selectOption = (questionId: number, value: string) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const getRecommendation = () => {
    const level = answers[1];
    const interest = answers[2];
    
    if (level === 'SD') return { title: 'Program Reguler SD', desc: 'Sangat cocok untuk memperkuat dasar numerasi dan literasi anak Anda.' };
    if (level === 'SMP') return { title: 'Program Intensif SMP', desc: 'Direkomendasikan fokus ke persiapan ujian nasional dan OSN.' };
    if (level === 'SMA' && interest === 'exam') return { title: 'Program Persiapan UTBK SMA', desc: 'Fokus intensif pada materi seleksi PTN impian.' };
    return { title: 'Program Privat Siswa Teladan', desc: 'Pendekatan personal untuk hasil yang lebih spesifik.' };
  };

  if (step === 0) {
    return (
      <div className="section animate-fade-in">
        <div className="container" style={{ maxWidth: '700px' }}>
          <div className="glass" style={{ padding: 'var(--space-10)', textAlign: 'center', borderRadius: 'var(--radius-lg)' }}>
            <ClipboardList size={64} style={{ color: 'var(--primary)', marginBottom: 'var(--space-4)' }} />
            <h1 className="section-title">Tes Diagnostik Singkat</h1>
            <p className="section-subtitle">Hanya butuh 1 menit untuk mengetahui program belajar yang paling efektif untuk Anda atau anak Anda.</p>
            <button onClick={handleNext} className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>
              Mulai Tes Sekarang <ArrowRight size={20} style={{ marginLeft: '8px' }} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (step <= questions.length) {
    const q = questions[step - 1];
    return (
      <div className="section animate-fade-in">
        <div className="container" style={{ maxWidth: '600px' }}>
          <div className="glass" style={{ padding: 'var(--space-8)', borderRadius: 'var(--radius-lg)', background: 'white' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-6)', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <span>Langkah {step} dari {questions.length}</span>
              <div style={{ width: '100px', height: '6px', background: 'var(--border)', borderRadius: '3px', marginLeft: '12px', marginTop: '6px', position: 'relative' }}>
                <div style={{ position: 'absolute', height: '100%', left: 0, top: 0, background: 'var(--primary)', borderRadius: '3px', width: `${(step / questions.length) * 100}%`, transition: 'width 0.3s ease' }}></div>
              </div>
            </div>
            <h2 style={{ marginBottom: 'var(--space-8)', fontSize: '1.5rem', color: 'var(--primary-dark)' }}>{q.text}</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              {q.options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => selectOption(q.id, opt.value)}
                  style={{
                    padding: '16px 20px',
                    textAlign: 'left',
                    borderRadius: 'var(--radius-sm)',
                    border: `2px solid ${answers[q.id] === opt.value ? 'var(--primary)' : 'var(--border)'}`,
                    background: answers[q.id] === opt.value ? 'var(--primary-light)' : 'transparent',
                    color: answers[q.id] === opt.value ? 'white' : 'var(--text-main)',
                    fontSize: '1.1rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    fontWeight: answers[q.id] === opt.value ? 600 : 400
                  }}
                >
                  {opt.label}
                  {answers[q.id] === opt.value && <CheckCircle2 size={20} style={{ float: 'right' }} />}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 'var(--space-10)' }}>
              <button disabled={step === 1} onClick={handleBack} className="btn btn-outline" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <ArrowLeft size={18} /> Kembali
              </button>
              <button 
                disabled={!answers[q.id]} 
                onClick={handleNext} 
                className="btn btn-primary" 
                style={{ display: 'flex', gap: '8px', alignItems: 'center' }}
              >
                {step === questions.length ? 'Lihat Hasil' : 'Lanjut'} <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const rec = getRecommendation();
  return (
    <div className="section animate-fade-in">
      <div className="container" style={{ maxWidth: '700px' }}>
        <div className="glass" style={{ padding: 'var(--space-10)', textAlign: 'center', borderRadius: 'var(--radius-lg)', background: 'linear-gradient(135deg, white, var(--background))' }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'var(--accent)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
            <CheckCircle2 size={40} />
          </div>
          <h1 className="section-title">Hasil Analisis Anda</h1>
          <p className="section-subtitle">Berdasarkan jawaban Anda, berikut adalah rekomendasi program terbaik dari kami:</p>
          
          <div className="glass" style={{ padding: 'var(--space-6)', borderRadius: 'var(--radius-lg)', background: 'white', border: '2px solid var(--primary-light)', marginBottom: 'var(--space-8)' }}>
            <h2 style={{ color: 'var(--primary-dark)', marginBottom: '12px' }}>{rec.title}</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>{rec.desc}</p>
          </div>

          <div style={{ background: 'var(--primary-light)', padding: 'var(--space-4) var(--space-6)', borderRadius: 'var(--radius-sm)', color: 'white', marginBottom: 'var(--space-8)', display: 'flex', gap: '12px', alignItems: 'center', textAlign: 'left' }}>
            <Info size={24} />
            <p style={{ margin: 0, fontSize: '0.9rem' }}>Daftar sekarang melalui WhatsApp untuk mendapatkan <strong>Diskon 20%</strong> untuk pendaftaran pertama Anda!</p>
          </div>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <button onClick={() => setStep(0)} className="btn btn-outline">Ulangi Tes</button>
            <a href={`https://wa.me/6281234567890?text=Halo%20Admin!%20Saya%20baru%20saja%20menyelesaikan%20tes%20diagnostik%20dan%20mendapatkan%20rekomendasi:%20${encodeURIComponent(rec.title)}.%20Saya%20tertarik%20mendaftar.`} className="btn btn-primary">
              Klaim Diskon & Daftar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticTest;
