import { FaWhatsapp } from 'react-icons/fa';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  const phoneNumber = "6281234567890";
  const defaultMessage = "Halo admin Siswa Teladan, saya ingin bertanya tentang program bimbingan belajar untuk anak saya.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="floating-whatsapp"
      aria-label="Chat via WhatsApp"
    >
      <FaWhatsapp size={32} />
      <span className="tooltip">Konsultasi Gratis</span>
    </a>
  );
};

export default FloatingWhatsApp;
