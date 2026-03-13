import { Book, MonitorPlay, GraduationCap, CheckCircle } from 'lucide-react';
import CTASection from '../components/home/CTASection';

const Programs = () => {
  const allPrograms = [
    {
      id: "sd",
      title: "Bimbel Sekolah Dasar (SD)",
      icon: <Book size={40} color="var(--accent)" />,
      badge: "Kelas 1 - 6 SD",
      desc: "Membangun fondasi belajar yang kuat dengan metode yang menyenangkan agar anak tidak cepat bosan.",
      subjects: ["Matematika", "Bahasa Indonesia", "Ilmu Pengetahuan Alam (IPA)"],
      benefits: ["Pendampingan PR harian", "Latihan soal tematik rutin", "Pengembangan minat baca dan hitung dasar"]
    },
    {
      id: "smp",
      title: "Bimbel Sekolah Menengah Pertama (SMP)",
      icon: <MonitorPlay size={40} color="var(--primary-light)" />,
      badge: "Kelas 7 - 9 SMP",
      desc: "Pendalaman konsep krusial dan persiapan mental menghadapi ujian sekolah yang lebih kompleks.",
      subjects: ["Matematika", "Ilmu Pengetahuan Alam (IPA)", "Bahasa Inggris", "Bahasa Indonesia"],
      benefits: ["Fokus pemahaman konsep dasar", "Persiapan Ujian Akhir Sekolah", "Strategi manajemen waktu belajar"]
    },
    {
      id: "sma",
      title: "Bimbel Sekolah Menengah Atas (SMA)",
      icon: <GraduationCap size={40} color="var(--secondary)" />,
      badge: "Kelas 10 - 12 SMA & Alumni",
      desc: "Program intensif persiapan kelulusan dan strategi jitu menembus Perguruan Tinggi Negeri (PTN) favorit.",
      subjects: ["Matematika Lanjut", "Fisika & Kimia", "Biologi", "Bahasa Inggris Lanjut", "TPS / TKA untuk UTBK"],
      benefits: ["Drilling Soal HOTS", "Try Out UTBK/SNBT berkala", "Konsultasi pemilihan jurusan PTN"]
    }
  ];

  return (
    <div className="programs-page animate-fade-in">
      <section className="section bg-primary text-white text-center">
        <div className="container">
          <h1 className="section-title text-white">Program Belajar</h1>
          <p className="section-subtitle text-white/80">
            Didesain khusus untuk memenuhi kebutuhan akademik pada setiap jenjang pendidikan.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
            {allPrograms.map((prog, idx) => (
              <div 
                key={prog.id} 
                id={prog.id}
                className="glass"
                style={{
                  display: 'flex',
                  flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse',
                  gap: 'var(--space-8)',
                  padding: 'var(--space-8)',
                  borderRadius: 'var(--radius-lg)',
                  alignItems: 'center',
                  flexWrap: 'wrap'
                }}
              >
                <div style={{ flex: '1 1 300px', textAlign: 'center', padding: 'var(--space-8)', background: 'var(--background)', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ marginBottom: 'var(--space-4)' }}>{prog.icon}</div>
                  <h2 style={{ color: 'var(--primary-dark)', marginBottom: 'var(--space-2)' }}>{prog.title}</h2>
                  <span style={{ display: 'inline-block', padding: '4px 12px', background: 'var(--surface-hover)', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600 }}>
                    {prog.badge}
                  </span>
                </div>
                
                <div style={{ flex: '2 1 400px' }}>
                  <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: 'var(--space-6)' }}>{prog.desc}</p>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-6)' }}>
                    <div>
                      <h4 style={{ marginBottom: 'var(--space-3)' }}>Mata Pelajaran:</h4>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        {prog.subjects.map((sub, i) => (
                          <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--text-muted)' }}>
                            <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--primary)' }}></div>
                            {sub}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 style={{ marginBottom: 'var(--space-3)' }}>Keunggulan:</h4>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        {prog.benefits.map((ben, i) => (
                          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px', color: 'var(--text-muted)' }}>
                            <CheckCircle size={18} color="var(--accent)" style={{ marginTop: 2, flexShrink: 0 }} />
                            {ben}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div style={{ marginTop: 'var(--space-6)' }}>
                    <a href={`https://wa.me/6281234567890?text=Halo%20saya%20tertarik%20mendaftar%20${prog.title}...`} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      Daftar Program Ini
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <CTASection />
    </div>
  );
};

export default Programs;
