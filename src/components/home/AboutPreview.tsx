import { CheckCircle2, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import home2 from '../../assets/student/home_2.webp';
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
    <section className="section about-tech-theme">
      <div className="container">
        <div className="about-grid">
          
          <div className="about-image-side animate-fade-in">
            <div className="about-image-wrapper">
              {/* Decorative elements */}
              <div className="about-glow-effect"></div>
              
              <div className="about-main-image glass-panel">
                <img src={home2} alt="Kegiatan Siswa Teladan" className="about-img-full" />
              </div>
              
              <div className="experience-badge glass-card-tech">
                <div className="exp-icon-box">
                  <Award size={24} className="text-cyan" />
                </div>
                <div className="exp-text-tech">
                  <strong>10+ Tahun</strong>
                  <span>Pengalaman Mendampingi</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-content-side animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h2 className="section-title text-left tech-heading">
              Mengapa Memilih <span className="text-gradient-cyan">Siswa Teladan?</span>
            </h2>
            <p className="about-description-tech">
              Kami percaya bahwa setiap anak memiliki potensi luar biasa yang siap untuk dikembangkan. 
              Di Siswa Teladan, kami tidak hanya fokus pada peningkatan nilai akademik, 
              tetapi juga pada pembentukan karakter dan kepercayaan diri siswa.
            </p>
            
            <ul className="benefit-list-tech">
              {benefits.map((benefit, index) => (
                <li key={index} className="benefit-item-tech">
                  <div className="benefit-icon-wrapper">
                    <CheckCircle2 size={18} className="text-cyan" />
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            
            <Link to="/tentang-kami" className="btn-pill-cyan mt-8 inline-block">
              Pelajari Lebih Lanjut
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
