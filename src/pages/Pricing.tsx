import { CheckCircle2, Star } from 'lucide-react';
import CTASection from '../components/home/CTASection';
import './Pricing.css';

const Pricing = () => {
  const packages = [
    {
      name: "Paket Reguler",
      subtitle: "Cocok untuk pendampingan harian",
      price: "Mulai Rp 350rb",
      period: "/Bulan",
      features: [
        "2x pertemuan per minggu",
        "Durasi 90 menit / sesi",
        "Maksimal 8 siswa per kelas",
        "Modul materi & bank soal",
        "Progress report bulanan"
      ],
      recommended: false,
    },
    {
      name: "Paket Intensif",
      subtitle: "Fokus peningkatan nilai cepat",
      price: "Mulai Rp 550rb",
      period: "/Bulan",
      features: [
        "3-4x pertemuan per minggu",
        "Durasi 90 menit / sesi",
        "Maksimal 8 siswa per kelas",
        "Modul Premium & Try Out bulanan",
        "Progress report dua mingguan",
        "Pendampingan PR via WhatsApp",
        "Konsultasi jurusan prioritas"
      ],
      recommended: true,
    },
    {
      name: "Paket Privat",
      subtitle: "Belajar 1-on-1 bersama tutor",
      price: "Mulai Rp 1.2Jt",
      period: "/Bulan",
      features: [
        "Jadwal & tempat fleksibel",
        "Durasi 90 menit / sesi",
        "1 siswa per kelas (1-on-1)",
        "Modul disesuaikan kebutuhan anak",
        "Laporan belajar per pertemuan",
        "Pendampingan PR prioritas",
      ],
      recommended: false,
    }
  ];

  return (
    <div className="pricing-page animate-fade-in">
      <section className="page-header-tech">
        <div className="container">
          <h1 className="tech-heading-lg text-gradient-cyan">Biaya & Paket Belajar</h1>
          <p className="page-subtitle-tech">
            Pilih paket yang paling sesuai dengan kebutuhan belajar anak Anda.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="pricing-grid-tech">
            {packages.map((pkg, i) => (
              <div 
                key={i}
                className={`pricing-card-tech ${pkg.recommended ? 'recommended' : ''}`}
              >
                {pkg.recommended && (
                  <div className="badge-popular">
                    <Star size={14} fill="#020617" color="#020617" /> Most Popular
                  </div>
                )}
                
                <h3 className="pricing-name">{pkg.name}</h3>
                <p className="pricing-subtitle">{pkg.subtitle}</p>
                
                <div className="pricing-amount-box">
                  <span className="pricing-amount">{pkg.price}</span>
                  <span className="pricing-period">{pkg.period}</span>
                </div>
                
                <ul className="pricing-features">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx}>
                      <div className="feature-icon-wrapper">
                        <CheckCircle2 size={20} />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                
                <div style={{ textAlign: 'center' }}>
                  <a 
                    href={`https://wa.me/6281234567890?text=Halo%20saya%20tertarik%20mendaftar%20${pkg.name}...`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn-pill-primary`}
                    style={{ width: '100%', padding: '1rem', background: pkg.recommended ? '' : 'rgba(255, 255, 255, 0.05)', color: pkg.recommended ? '' : '#fff', border: pkg.recommended ? '' : '1px solid rgba(255, 255, 255, 0.2)', boxShadow: pkg.recommended ? '' : 'none' }}
                  >
                    Pilih Paket
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="promo-banner-tech">
            <h3>🚀 Promo Spesial Bulan Ini!</h3>
            <p>Dapatkan diskon 30% biaya pendaftaran untuk 50 siswa pertama yang mendaftar bulan ini.</p>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Pricing;
