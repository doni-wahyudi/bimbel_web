import { Target, Heart, Award, Users } from 'lucide-react';
import CTASection from '../components/home/CTASection';
import './About.css';

const About = () => {
  return (
    <div className="about-page animate-fade-in">
      {/* Header Section */}
      <section className="about-header-section">
        <div className="container">
          <h1 className="tech-heading-lg text-gradient-cyan text-center">Tentang Siswa Teladan</h1>
          <p className="about-subtitle text-center">
            Membangun generasi cerdas, berkarakter, dan siap menghadapi tantangan masa depan.
          </p>
        </div>
      </section>

      {/* Visi Misi Section */}
      <section className="section pt-0">
        <div className="container">
          <div className="glass-panel-tech visi-misi-grid">
            <div className="visi-box">
              <h2 className="tech-heading text-cyan mb-4" style={{fontSize: '2rem'}}>Visi Kami</h2>
              <p className="text-muted">
                Menjadi lembaga bimbingan belajar terdepan di Indonesia yang tidak hanya berfokus pada prestasi akademik, 
                tetapi juga pada pembentukan karakter jujur, disiplin, dan pantang menyerah.
              </p>
            </div>
            <div className="misi-box">
              <h2 className="tech-heading text-cyan mb-4" style={{fontSize: '2rem'}}>Misi Kami</h2>
              <ul className="custom-bullet-list">
                <li>Menyediakan metode pembelajaran yang menyenangkan dan mudah dipahami.</li>
                <li>Membatasi kuota kelas (maksimal 8 siswa) untuk pendekatan personal.</li>
                <li>Mendampingi siswa secara konsisten hingga mencapai target akademik.</li>
                <li>Bekerja sama dengan orang tua melalui laporan perkembangan rutin.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nilai-Nilai Inti Section */}
      <section className="bg-surface-alt">
        <div className="container">
          <h2 className="tech-heading text-center mb-12">Nilai-Nilai <span className="text-gradient-cyan">Inti</span></h2>
          <div className="values-grid">
            {[
              { icon: <Target size={32} className="text-cyan" />, title: "Fokus Prestasi", desc: "Membantu siswa mencapai nilai maksimal di sekolah." },
              { icon: <Heart size={32} className="text-cyan" />, title: "Pendekatan Personal", desc: "Memahami gaya belajar unik setiap anak." },
              { icon: <Award size={32} className="text-cyan" />, title: "Kualitas Pengajar", desc: "Guru yang diseleksi ketat dan berpengalaman." },
              { icon: <Users size={32} className="text-cyan" />, title: "Kolaborasi", desc: "Sinergi aktif antara guru, siswa, dan orang tua." },
            ].map((item, i) => (
              <div key={i} className="value-card-tech value-card">
                <div className="icon-wrapper">
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
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
