import { ArrowRight, Sparkles, Trophy, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import studentImage from '../../assets/student_image.png';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section hero-tech-theme">
      {/* Animated Background Elements */}
      <div className="hero-glow-layer primary-glow"></div>
      <div className="hero-glow-layer secondary-glow"></div>
      <div className="noise-overlay"></div>
      
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          
          <div className="glass-badge">
            <Sparkles size={16} className="text-cyan animate-pulse" />
            <span>Pendaftaran 2026 Dibuka</span>
          </div>

          <h1 className="hero-title-tech">
            <span className="font-light">Mencetak Anak</span>
            <span className="font-bold text-gradient-cyan">Berprestasi</span>
            <span className="font-light">&</span>
            <span className="font-bold">Berkarakter</span>
          </h1>
          
          <p className="hero-description-tech">
            Lembaga bimbingan belajar eksklusif dengan metode interaktif, dibimbing oleh pengajar tersertifikasi untuk memastikan masa depan cerah putra-putri Anda.
          </p>
          
          <div className="hero-cta-group">
            <a 
              href="https://wa.me/6281234567890?text=Halo%20Siswa%20Teladan,%20saya%20ingin%20Konsultasi%20Gratis..." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-pill-primary"
            >
              Mulai Konsultasi <ArrowRight size={18} className="btn-icon" />
            </a>
            <Link to="/program" className="btn-pill-glass">
              Eksplor Program
            </Link>
          </div>
        </div>
        
        <div className="hero-image-wrapper animate-fade-in" style={{ animationDelay: '200ms' }}>
          <img src={studentImage} alt="Siswa Teladan" className="hero-student-img" />
          
          {/* Enhanced Floating Cards */}
          <div className="floating-card glass tech-card-1">
            <div className="card-icon-wrapper cyan-bg">
              <Trophy size={22} color="#000" />
            </div>
            <div className="card-text-tech">
              <strong>100%</strong>
              <span>Lulus Seleksi PTN</span>
            </div>
          </div>
          
          <div className="floating-card glass tech-card-2">
            <div className="card-icon-wrapper white-bg">
              <Users size={22} className="text-cyan" />
            </div>
            <div className="card-text-tech">
              <strong>8:1</strong>
              <span>Rasio Kelas Eksklusif</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
