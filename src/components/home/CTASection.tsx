import { ArrowRight } from 'lucide-react';
import './CTASection.css';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-box glass animate-fade-in">
          <div className="cta-content">
            <h2 className="cta-title">Siap Mencetak Prestasi Bersama Kami?</h2>
            <p className="cta-description">
              Jangan tunda kesuksesan anak Anda. Daftarkan sekarang dan dapatkan tes diagnostik gratis untuk mengetahui potensi belajar anak!
            </p>
            <div className="cta-actions">
              <a 
                href="https://wa.me/6281234567890?text=Halo%20Siswa%20Teladan,%20saya%20ingin%20mendaftar%20Tes%20Diagnostik%20Gratis..." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary btn-lg"
              >
                Daftar Tes Diagnostik <ArrowRight size={20} />
              </a>
              <span className="cta-note">*Terbatas untuk 50 pendaftar pertama bulan ini</span>
            </div>
          </div>
          
          <div className="cta-decoration">
            <div className="decoration-circle circle-1"></div>
            <div className="decoration-circle circle-2"></div>
            <div className="decoration-circle circle-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
