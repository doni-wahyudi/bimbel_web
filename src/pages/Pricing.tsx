import { CheckCircle2, Star } from 'lucide-react';
import CTASection from '../components/home/CTASection';

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
      <section className="section bg-primary text-white text-center pb-24">
        <div className="container">
          <h1 className="section-title text-white">Biaya & Paket Belajar</h1>
          <p className="section-subtitle text-white/80" style={{ marginBottom: 0 }}>
            Pilih paket yang paling sesuai dengan kebutuhan belajar anak Anda.
          </p>
        </div>
      </section>

      <section className="section" style={{ marginTop: '-80px', paddingTop: 0 }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-8)',
            alignItems: 'center'
          }}>
            {packages.map((pkg, i) => (
              <div 
                key={i}
                className={`glass ${pkg.recommended ? 'recommended-pkg' : ''}`}
                style={{
                  position: 'relative',
                  padding: 'var(--space-8)',
                  borderRadius: 'var(--radius-lg)',
                  background: 'var(--surface)',
                  border: pkg.recommended ? '2px solid var(--secondary)' : '1px solid var(--border)',
                  boxShadow: pkg.recommended ? 'var(--shadow-xl)' : 'var(--shadow-md)',
                  transform: pkg.recommended ? 'scale(1.05)' : 'none',
                  zIndex: pkg.recommended ? 10 : 1
                }}
              >
                {pkg.recommended && (
                  <div style={{
                    position: 'absolute',
                    top: '-16px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--secondary)',
                    color: 'white',
                    padding: '4px 16px',
                    borderRadius: '20px',
                    fontSize: '0.875rem',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <Star size={14} fill="white" /> Most Popular
                  </div>
                )}
                
                <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', color: 'var(--text-main)', textAlign: 'center' }}>{pkg.name}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textAlign: 'center', marginBottom: 'var(--space-6)' }}>{pkg.subtitle}</p>
                
                <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)', paddingBottom: 'var(--space-6)', borderBottom: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary-dark)' }}>{pkg.price}</span>
                  <span style={{ color: 'var(--text-muted)' }}>{pkg.period}</span>
                </div>
                
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 var(--space-8) 0' }}>
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', color: 'var(--text-main)' }}>
                      <CheckCircle2 size={20} color={pkg.recommended ? 'var(--secondary)' : 'var(--primary-light)'} />
                      <span style={{ fontSize: '0.95rem' }}>{feat}</span>
                    </li>
                  ))}
                </ul>
                
                <div style={{ textAlign: 'center' }}>
                  <a 
                    href={`https://wa.me/6281234567890?text=Halo%20saya%20tertarik%20mendaftar%20${pkg.name}...`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn w-full ${pkg.recommended ? 'btn-secondary' : 'btn-outline'}`}
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    Pilih Paket
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ marginTop: 'var(--space-12)', textAlign: 'center', background: 'var(--primary-light)', color: 'white', padding: 'var(--space-6)', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ marginBottom: '8px' }}>🚀 Promo Spesial Bulan Ini!</h3>
            <p>Dapatkan diskon 30% biaya pendaftaran untuk 50 siswa pertama yang mendaftar bulan ini.</p>
          </div>
        </div>
      </section>

      <CTASection />

      {/* Internal CSS for scale reset on mobile */}
      <style>{`
        @media (max-width: 768px) {
          .recommended-pkg { transform: scale(1) !important; }
        }
      `}</style>
    </div>
  );
};

export default Pricing;
