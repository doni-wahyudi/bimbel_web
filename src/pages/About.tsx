import { Target, Heart, Award, Users } from 'lucide-react';
import CTASection from '../components/home/CTASection';

const About = () => {
  return (
    <div className="about-page animate-fade-in">
      <section className="section bg-primary text-white text-center pb-24">
        <div className="container">
          <h1 className="section-title text-white">Tentang Siswa Teladan</h1>
          <p className="section-subtitle text-white/80" style={{ marginBottom: 0 }}>
            Membangun generasi cerdas, berkarakter, dan siap menghadapi tantangan masa depan.
          </p>
        </div>
      </section>

      <section className="section" style={{ marginTop: '-80px', paddingTop: 0 }}>
        <div className="container">
          <div className="glass" style={{ borderRadius: '24px', padding: 'var(--space-8)', background: 'var(--surface)', boxShadow: 'var(--shadow-lg)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-8)' }}>
              <div>
                <h2 style={{ color: 'var(--primary)', marginBottom: 'var(--space-4)' }}>Visi Kami</h2>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
                  Menjadi lembaga bimbingan belajar terdepan di Indonesia yang tidak hanya berfokus pada prestasi akademik, 
                  tetapi juga pada pembentukan karakter jujur, disiplin, dan pantang menyerah.
                </p>
              </div>
              <div>
                <h2 style={{ color: 'var(--primary)', marginBottom: 'var(--space-4)' }}>Misi Kami</h2>
                <ul style={{ color: 'var(--text-muted)', lineHeight: 1.8, paddingLeft: '20px' }}>
                  <li>Menyediakan metode pembelajaran yang menyenangkan dan mudah dipahami.</li>
                  <li>Membatasi kuota kelas (maksimal 8 siswa) untuk pendekatan personal.</li>
                  <li>Mendampingi siswa secara konsisten hingga mencapai target akademik.</li>
                  <li>Bekerja sama dengan orang tua melalui laporan perkembangan rutin.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <h2 className="section-title">Nilai-Nilai Inti</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-6)', marginTop: 'var(--space-12)' }}>
            {[
              { icon: <Target size={32} color="var(--primary)" />, title: "Fokus Prestasi", desc: "Membantu siswa mencapai nilai maksimal di sekolah." },
              { icon: <Heart size={32} color="var(--accent)" />, title: "Pendekatan Personal", desc: "Memahami gaya belajar unik setiap anak." },
              { icon: <Award size={32} color="var(--secondary)" />, title: "Kualitas Pengajar", desc: "Guru yang diseleksi ketat dan berpengalaman." },
              { icon: <Users size={32} color="var(--primary-light)" />, title: "Kolaborasi", desc: "Sinergi aktif antara guru, siswa, dan orang tua." },
            ].map((item, i) => (
              <div key={i} className="glass" style={{ padding: 'var(--space-6)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
                <div style={{ display: 'inline-flex', padding: '16px', borderRadius: '50%', backgroundColor: 'var(--surface-hover)', marginBottom: 'var(--space-4)' }}>
                  {item.icon}
                </div>
                <h3 style={{ marginBottom: 'var(--space-2)' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default About;
