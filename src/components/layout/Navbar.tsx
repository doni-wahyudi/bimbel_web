import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang Kami', path: '/tentang-kami' },
    { name: 'Program', path: '/program' },
    { name: 'Jadwal', path: '/jadwal' },
    { name: 'Biaya', path: '/biaya' },
    { name: 'Galeri', path: '/galeri' },
    { name: 'Kontak', path: '/kontak' },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar glass">
      <div className="container nav-content">
        <Link to="/" className="brand" onClick={closeMenu}>
          <BookOpen className="brand-icon" size={28} />
          <span className="brand-text">Siswa Teladan</span>
        </Link>

        {/* Desktop Nav */}
        <div className="nav-links hidden-mobile">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <a href="https://wa.me/6281234567890?text=Halo%20Siswa%20Teladan,%20saya%20ingin%20mendaftar%20untuk%20anak%20saya..." target="_blank" rel="noopener noreferrer" className="btn btn-primary nav-cta">
            Daftar
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle hidden-desktop"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu glass hidden-desktop animate-fade-in">
          <div className="mobile-nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full mt-4" onClick={closeMenu}>
              Daftar Sekarang
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
