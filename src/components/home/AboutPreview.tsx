import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import './AboutPreview.css';

const AboutPreview = () => {
  const benefits = [
    'Kelas eksklusif maksimal 8 siswa per kelas',
    'Guru berpengalaman dan bersertifikasi',
    'Laporan perkembangan belajar rutin',
    'Fasilitas kelas yang nyaman dan interaktif',
    'Pendekatan personal sesuai karakter anak',
    'Materi up-to-date sesuai kurikulum terbaru'
  ];

  return (
    <section className="section bg-surface">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-side animate-fade-in">
            <div className="about-image-wrapper">
              {/* Decorative elements */}
              <div className="about-pattern-1"></div>
              <div className="about-pattern-2"></div>
              
              <div className="about-main-image glass">
                <div className="image-placeholder bg-primary-light">
                  {/* Image placeholder */}
                </div>
              </div>
              
              <div className="experience-badge glass">
                <span className="exp-number text-primary">10+</span>
                <span className="exp-text text-muted">Tahun<br/>Pengalaman</span>
              </div>
            </div>
          </div>
          
          <div className="about-content-side animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h2 className="section-title text-left">
              Mengapa Memilih <span className="text-secondary">Siswa Teladan?</span>
            </h2>
            <p className="about-description">
              Kami percaya bahwa setiap anak memiliki potensi luar biasa yang siap untuk dikembangkan. 
              Di Siswa Teladan, kami tidak hanya fokus pada peningkatan nilai akademik akademik, 
              tetapi juga pada pembentukan karakter dan kepercayaan diri siswa.
            </p>
            
            <ul className="benefit-list">
              {benefits.map((benefit, index) => (
                <li key={index} className="benefit-item">
                  <CheckCircle2 className="benefit-icon text-accent" size={24} />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            
            <Link to="/tentang-kami" className="btn btn-primary mt-8">
              Pelajari Lebih Lanjut
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
