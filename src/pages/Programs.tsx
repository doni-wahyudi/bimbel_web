import { Book, MonitorPlay, GraduationCap, CheckCircle } from 'lucide-react';
import CTASection from '../components/home/CTASection';
import './Programs.css';

const Programs = () => {
  const allPrograms = [
    {
      id: "sd",
      title: "Bimbel Sekolah Dasar (SD)",
      icon: <Book size={48} className="text-cyan" style={{ marginBottom: '16px' }} />,
      badge: "Kelas 1 - 6 SD",
      desc: "Membangun fondasi belajar yang kuat dengan metode yang menyenangkan agar anak tidak cepat bosan.",
      subjects: ["Matematika", "Bahasa Indonesia", "Ilmu Pengetahuan Alam (IPA)"],
      benefits: ["Pendampingan PR harian", "Latihan soal tematik rutin", "Pengembangan minat baca dan hitung dasar"]
    },
    {
      id: "smp",
      title: "Bimbel Sekolah Menengah Pertama (SMP)",
      icon: <MonitorPlay size={48} className="text-cyan" style={{ marginBottom: '16px' }} />,
      badge: "Kelas 7 - 9 SMP",
      desc: "Pendalaman konsep krusial dan persiapan mental menghadapi ujian sekolah yang lebih kompleks.",
      subjects: ["Matematika", "Ilmu Pengetahuan Alam (IPA)", "Bahasa Inggris", "Bahasa Indonesia"],
      benefits: ["Fokus pemahaman konsep dasar", "Persiapan Ujian Akhir Sekolah", "Strategi manajemen waktu belajar"]
    },
    {
      id: "sma",
      title: "Bimbel Sekolah Menengah Atas (SMA)",
      icon: <GraduationCap size={48} className="text-cyan" style={{ marginBottom: '16px' }} />,
      badge: "Kelas 10 - 12 SMA & Alumni",
      desc: "Program intensif persiapan kelulusan dan strategi jitu menembus Perguruan Tinggi Negeri (PTN) favorit.",
      subjects: ["Matematika Lanjut", "Fisika & Kimia", "Biologi", "Bahasa Inggris Lanjut", "TPS / TKA untuk UTBK"],
      benefits: ["Drilling Soal HOTS", "Try Out UTBK/SNBT berkala", "Konsultasi pemilihan jurusan PTN"]
    }
  ];

  return (
    <div className="programs-page animate-fade-in">
      {/* Header Section */}
      <section className="page-header-tech">
        <div className="container">
          <h1 className="tech-heading-lg text-gradient-cyan">Program Belajar</h1>
          <p className="page-subtitle-tech">
            Didesain khusus untuk memenuhi kebutuhan akademik pada setiap jenjang pendidikan.
          </p>
        </div>
      </section>

      {/* Programs List */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
            {allPrograms.map((prog, idx) => (
              <div 
                key={prog.id} 
                id={prog.id}
                className={`program-card-tech ${idx % 2 !== 0 ? 'reverse' : ''}`}
              >
                <div className="program-icon-side">
                  {prog.icon}
                  <h2 className="program-title">{prog.title}</h2>
                  <span className="badge-tech">{prog.badge}</span>
                </div>
                
                <div className="program-content-side">
                  <p className="program-desc">{prog.desc}</p>
                  
                  <div className="features-grid">
                    <div>
                      <h4 style={{ color: '#fff', marginBottom: '16px', fontSize: '1.1rem' }}>Mata Pelajaran:</h4>
                      <ul className="feature-list">
                        {prog.subjects.map((sub, i) => (
                          <li key={i}>
                            <div className="tech-bullet"></div>
                            {sub}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 style={{ color: '#fff', marginBottom: '16px', fontSize: '1.1rem' }}>Keunggulan:</h4>
                      <ul className="feature-list">
                        {prog.benefits.map((ben, i) => (
                          <li key={i}>
                            <CheckCircle size={18} className="text-cyan" style={{ marginTop: 2, flexShrink: 0 }} />
                            {ben}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div style={{ flexBasis: '100%', display: 'flex', justifyContent: 'center', marginTop: 'var(--space-4)' }}>
                  <a 
                    href={`https://wa.me/6281234567890?text=Halo%20saya%20tertarik%20mendaftar%20${prog.title}...`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-pill-primary inline-flex"
                  >
                    Daftar Program Ini
                  </a>
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
