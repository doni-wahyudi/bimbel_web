import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ibu Sarah",
      role: "Orang Tua Siswa SD",
      content: "Sebelumnya nilai matematika anak saya selalu di bawah rata-rata (kisaran 60). Setelah ikut bimbel di Siswa Teladan selama 3 bulan, sekarang nilainya stabil di atas 85. Metode fun learningnya sangat efektif!",
      rating: 5
    },
    {
      id: 2,
      name: "Budi Santoso",
      role: "Siswa SMA Kelistrikan",
      content: "Persiapan UTBK di sini sangat intensif. Tutornya menguasai materi dengan sangat baik dan memberikan trik-trik cepat menjawab soal HOTS yang jarang diajarkan di sekolah.",
      rating: 5
    },
    {
      id: 3,
      name: "Bapak Rahmat",
      role: "Orang Tua Siswa SMP",
      content: "Sangat puas dengan progress report bulanan yang dikirimkan. Saya jadi tahu persis perkembangan belajar anak saya. Guru-gurunya juga responsif diajak konsultasi.",
      rating: 5
    }
  ];

  return (
    <section className="section bg-surface">
      <div className="container">
        <h2 className="section-title">Apa Kata Mereka?</h2>
        <p className="section-subtitle">
          Kisah sukses siswa dan testimoni orang tua yang telah membuktikan kualitas bimbingan belajar Siswa Teladan.
        </p>

        <div className="testimonials-grid">
          {testimonials.map((testi, index) => (
            <div 
              key={testi.id} 
              className="testimonial-card animate-fade-in glass"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="quote-icon">
                <Quote size={40} className="text-secondary opacity-20" />
              </div>
              
              <div className="stars">
                {[...Array(testi.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="var(--secondary)" color="var(--secondary)" />
                ))}
              </div>
              
              <p className="testimonial-text">"{testi.content}"</p>
              
              <div className="testimonial-author">
                <div className="author-avatar bg-primary-light text-white">
                  {testi.name.charAt(0)}
                </div>
                <div className="author-info">
                  <h4 className="author-name">{testi.name}</h4>
                  <span className="author-role">{testi.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
