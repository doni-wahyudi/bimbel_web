import CTASection from '../components/home/CTASection';

const Gallery = () => {
  // Using reliable placeholder images for demo
  const images = [
    { src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80', title: 'Suasana Kelas Inspiratif', category: 'Fasilitas' },
    { src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80', title: 'Belajar Kelompok Terpadu', category: 'Kegiatan Belajar' },
    { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80', title: 'Diskusi Interaktif bersama Tutor', category: 'Kegiatan Belajar' },
    { src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80', title: 'Seminar Persiapan UTBK', category: 'Seminar' },
    { src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80', title: 'Kelulusan Siswa Angkatan 2023', category: 'Kelulusan' },
    { src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80', title: 'Fasilitas Perpustakaan Bimbel', category: 'Fasilitas' },
  ];

  return (
    <div className="gallery-page animate-fade-in">
      <section className="section bg-primary text-white text-center">
        <div className="container">
          <h1 className="section-title text-white">Galeri Kegiatan</h1>
          <p className="section-subtitle text-white/80">
            Intip keseruan dan semangat belajar siswa-siswi Teladan.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 'var(--space-6)'
          }}>
            {images.map((img, idx) => (
              <div 
                key={idx} 
                className="gallery-item"
                style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  aspectRatio: '1',
                  boxShadow: 'var(--shadow-md)',
                  cursor: 'pointer'
                }}
              >
                <img 
                  src={img.src} 
                  alt={img.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  className="gallery-img"
                />
                <div 
                  className="gallery-overlay"
                  style={{
                    position: 'absolute',
                    bottom: 0, left: 0, right: 0,
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                    padding: 'var(--space-8) var(--space-4) var(--space-4)',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    opacity: 0,
                    transition: 'opacity 0.3s ease'
                  }}
                >
                  <span style={{ fontSize: '0.8rem', color: 'var(--secondary)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '4px' }}>
                    {img.category}
                  </span>
                  <h3 style={{ fontSize: '1.1rem', margin: 0 }}>{img.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <CTASection />

      {/* Internal CSS for hover effects */}
      <style>{`
        .gallery-item:hover .gallery-img { transform: scale(1.1); }
        .gallery-item:hover .gallery-overlay { opacity: 1 !important; }
      `}</style>
    </div>
  );
};

export default Gallery;
