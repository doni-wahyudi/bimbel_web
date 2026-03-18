import CTASection from '../components/home/CTASection';
import './Gallery.css';

// Import our new AI-generated tech-themed images
import gallery1 from '../assets/gallery/15-1.webp';
import gallery2 from '../assets/gallery/15-2.webp';
import gallery3 from '../assets/gallery/16-1.webp';
import gallery4 from '../assets/gallery/16-2.webp';
import gallery5 from '../assets/gallery/17-1.webp';
import gallery6 from '../assets/gallery/17-2.webp';
import gallery7 from '../assets/gallery/18-1.webp';
import gallery8 from '../assets/gallery/18-2.webp';

const Gallery = () => {
  const images = [
    { src: gallery1, title: 'Fasilitas Premium Tech', category: 'Fasilitas' },
    { src: gallery2, title: 'Siswa Berprestasi', category: 'Kelulusan' },
    { src: gallery3, title: 'Suasana Kelas Interaktif', category: 'Fasilitas' },
    { src: gallery4, title: 'Belajar Kelompok Cerdas', category: 'Kegiatan Belajar' },
    { src: gallery5, title: 'Seminar Persiapan UTBK', category: 'Seminar' },
    { src: gallery6, title: 'Diskusi bersama Tutor', category: 'Kegiatan Belajar' },
    { src: gallery7, title: 'Keakraban Siswa', category: 'Kebersamaan' },
    { src: gallery8, title: 'Kelas Intensif', category: 'Fasilitas' },
  ];

  return (
    <div className="gallery-page animate-fade-in">
      {/* Header Section */}
      <section className="page-header-tech">
        <div className="container">
          <h1 className="tech-heading-lg text-gradient-cyan">Galeri Kegiatan</h1>
          <p className="page-subtitle-tech">
            Intip keseruan dan semangat belajar siswa-siswi Teladan dalam lingkungan belajar yang inspiratif.
          </p>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="gallery-grid-tech">
            {images.map((img, idx) => (
              <div key={idx} className="gallery-card-tech">
                <img 
                  src={img.src} 
                  alt={img.title}
                  className="gallery-img-tech"
                  loading="lazy"
                />
                <div className="gallery-overlay-tech">
                  <span className="gallery-category-tech">
                    {img.category}
                  </span>
                  <h3 className="gallery-title-tech">{img.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <CTASection />
    </div>
  );
};

export default Gallery;
