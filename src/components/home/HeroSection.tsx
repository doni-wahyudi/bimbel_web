import { ArrowRight, BookOpen, Users, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <div className="badge glass">
            <span className="badge-dot"></span>
            Pendaftaran Tahun Ajaran Baru Telah Dibuka
          </div>
          
          <h1 className="hero-title">
            Tempat Anak <span className="text-secondary">Berprestasi</span> dan Berkarakter
          </h1>
          
          <p className="hero-description">
            Bimbingan belajar SD, SMP, SMA dengan metode efektif, kelas interaktif, dan guru berpengalaman yang siap mengantarkan anak Anda meraih mimpi.
          </p>
          
          <div className="hero-cta-group">
            <a 
              href="https://wa.me/6281234567890?text=Halo%20Siswa%20Teladan,%20saya%20ingin%20Konsultasi%20Gratis..." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary btn-lg"
            >
              Konsultasi Gratis <ArrowRight size={20} />
            </a>
            <Link to="/program" className="btn btn-outline btn-lg glass">
              Lihat Program
            </Link>
          </div>
          
          <div className="hero-features">
            <div className="feature-item">
              <Users size={20} className="feature-icon" />
              <span>Kelas Kecil (Maks 8 Siswa)</span>
            </div>
            <div className="feature-item">
              <BookOpen size={20} className="feature-icon" />
              <span>Metode Fun Learning</span>
            </div>
            <div className="feature-item">
              <Trophy size={20} className="feature-icon" />
              <span>Guru Bersertifikasi</span>
            </div>
          </div>
        </div>
        
        <div className="hero-image-wrapper animate-fade-in" style={{ animationDelay: '200ms' }}>
          <div className="hero-image-container glass">
            {/* Placeholder for an actual image */}
            <div className="hero-image-placeholder"></div>
            
            <div className="floating-card card-1 glass">
              <div className="card-icon bg-secondary">
                <Trophy size={24} color="white" />
              </div>
              <div className="card-text">
                <strong>100%</strong>
                <span>Lulus SBMPTN/SNBT</span>
              </div>
            </div>
            <div className="floating-card card-2 glass">
              <div className="card-icon bg-accent">
                <Users size={24} color="white" />
              </div>
              <div className="card-text">
                <strong>500+</strong>
                <span>Siswa Aktif</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
