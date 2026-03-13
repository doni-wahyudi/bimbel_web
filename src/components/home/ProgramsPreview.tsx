import { ArrowRight, Book, MonitorPlay, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ProgramsPreview.css';

const ProgramsPreview = () => {
  const programs = [
    {
      id: "sd",
      title: "Bimbel SD",
      icon: <Book size={32} />,
      color: "var(--accent)",
      description: "Fokus pada Matematika, Bahasa Indonesia, dan IPA dengan metode fun learning dan pendampingan PR.",
      features: ["Fun Learning", "Pendampingan PR"]
    },
    {
      id: "smp",
      title: "Bimbel SMP",
      icon: <MonitorPlay size={32} />,
      color: "var(--primary-light)",
      description: "Pendalaman konsep Matematika, IPA, dan Bahasa Inggris untuk persiapan ujian sekolah yang matang.",
      features: ["Pendalaman Konsep", "Persiapan Ujian"]
    },
    {
      id: "sma",
      title: "Bimbel SMA",
      icon: <GraduationCap size={32} />,
      color: "var(--secondary)",
      description: "Kuasai Matematika, Fisika, Kimia, Biologi, Bahasa Inggris. Strategi jitu tembus UTBK/SNBT.",
      features: ["Persiapan UTBK", "Strategi Soal Susah"]
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Program Unggulan</h2>
        <p className="section-subtitle">
          Pilihan program belajar yang disesuaikan dengan tingkatan dan kebutuhan akademik siswa untuk mencapai hasil maksimal.
        </p>
        
        <div className="programs-grid">
          {programs.map((program, index) => (
            <div 
              className="program-card animate-fade-in glass" 
              key={program.id}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div 
                className="program-icon-wrapper"
                style={{ backgroundColor: program.color }}
              >
                {program.icon}
              </div>
              <h3 className="program-title">{program.title}</h3>
              <p className="program-description">{program.description}</p>
              
              <div className="program-features">
                {program.features.map((feature, i) => (
                  <span key={i} className="program-badge">{feature}</span>
                ))}
              </div>
              
              <Link to={`/program#${program.id}`} className="program-link">
                Detail Program <ArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center" style={{ marginTop: '3rem', textAlign: 'center' }}>
          <Link to="/program" className="btn btn-primary">
            Lihat Semua Program
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramsPreview;
