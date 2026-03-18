import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import home1 from '../../assets/student/home_1.webp';
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
            <span className="font-light block-text">Mencetak Anak</span>
            <span className="block-text">
              <span className="font-bold text-gradient-cyan">Berprestasi</span>
              <span className="font-light" style={{ display: 'inline-block', marginLeft: '16px', color: '#fff' }}>&</span>
            </span>
            <span className="font-bold block-text">Berkarakter</span>
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
          <div className="hero-image-card">
            <img src={home1} alt="Siswa Teladan" className="hero-student-img img-main" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
