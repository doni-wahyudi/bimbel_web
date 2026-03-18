import { Link } from 'react-router-dom';
import { BookOpen, MapPin, Phone, Mail } from 'lucide-react';
import { FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand-section">
          <Link to="/" className="footer-brand">
            <BookOpen size={32} />
            <span>Siswa Teladan</span>
          </Link>
          <p className="footer-description">
            Bimbingan belajar SD, SMP, SMA dengan metode efektif dan guru berpengalaman. Tempat Anak Berprestasi dan Berkarakter.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Instagram"><FaInstagram size={18} /></a>
            <a href="#" aria-label="Email"><FaEnvelope size={18} /></a>
            <a href="https://wa.me/6281234567890" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={18} /></a>
          </div>
        </div>

        <div className="footer-links-section">
          <h3 className="footer-title">Program Kami</h3>
          <ul className="footer-links">
            <li><Link to="/program#sd">Bimbel Sekolah Dasar (SD)</Link></li>
            <li><Link to="/program#smp">Bimbel SMP</Link></li>
            <li><Link to="/program#sma">Bimbel SMA & UTBK</Link></li>
            <li><Link to="/biaya">Panduan Biaya & Paket</Link></li>
          </ul>
        </div>

        <div className="footer-contact-section">
          <h3 className="footer-title">Hubungi Kami</h3>
          <ul className="footer-contact-info">
            <li>
              <MapPin size={20} className="contact-icon" />
              <span>Jl. Pendidikan No. 123, Jakarta Selatan, 12345</span>
            </li>
            <li>
              <Phone size={20} className="contact-icon" />
              <span>+62 812 3456 7890</span>
            </li>
            <li>
              <Mail size={20} className="contact-icon" />
              <span>info@siswateladan.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Bimbel Siswa Teladan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
