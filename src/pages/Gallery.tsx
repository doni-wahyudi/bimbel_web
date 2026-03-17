import CTASection from '../components/home/CTASection';
import './Gallery.css';

// Import our new AI-generated tech-themed images
import gallery1 from '../assets/gallery_1.png';
import gallery2 from '../assets/gallery_2.png';
import gallery3 from '../assets/gallery_3.png';
import gallery4 from '../assets/gallery_4.png';
import gallery5 from '../assets/gallery_5.png';
import gallery6 from '../assets/gallery_6.png';

const Gallery = () => {
  const images = [
    { src: gallery1, title: 'Fasilitas Premium Tech', category: 'Fasilitas' },
    { src: gallery2, title: 'Siswa Berprestasi', category: 'Kelulusan' },
    { src: gallery3, title: 'Suasana Kelas Interaktif', category: 'Fasilitas' },
    { src: gallery4, title: 'Belajar Kelompok Cerdas', category: 'Kegiatan Belajar' },
    { src: gallery5, title: 'Seminar Persiapan UTBK', category: 'Seminar' },
    { src: gallery6, title: 'Diskusi bersama Tutor', category: 'Kegiatan Belajar' },
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
