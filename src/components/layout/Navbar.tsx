import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, User, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang', path: '/tentang-kami' },
    { name: 'Program', path: '/program' },
    { name: 'Jadwal', path: '/jadwal' },
    { name: 'Biaya', path: '/biaya' },
    { name: 'Galeri', path: '/galeri' },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar-tech ${scrolled ? 'scrolled glass' : ''}`}>
      <div className="container nav-tech-content">
        
        {/* Logo Area */}
        <Link to="/" className="brand-tech" onClick={closeMenu}>
          <div className="brand-icon-wrapper">
            <Sparkles size={20} className="text-cyan" />
          </div>
          <span className="brand-text-tech">Siswa Teladan</span>
        </Link>

        {/* Desktop Menu Wrapper */}
        <div className="desktop-menu-wrapper hidden-mobile">
          {/* Center Links */}
          <div className="nav-links-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link-tech ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right CTA */}
          <div className="nav-right">
              {user ? (
                <div className="nav-user-actions">
                  <Link to="/dashboard" className="nav-link-tech active flex-center gap-2">
                    <User size={16} /> Dashboard
                  </Link>
                  <button onClick={() => signOut()} className="btn-icon-danger" title="Keluar">
                    <LogOut size={18} />
                  </button>
                </div>
              ) : (
                <Link to="/login" className="nav-link-tech">Login</Link>
              )}
              <a 
                href="https://wa.me/6281234567890?text=Halo%20Siswa%20Teladan..." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-pill-cyan-sm"
              >
                Daftar Kelas
              </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle-tech hidden-desktop"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="mobile-menu-overlay hidden-desktop animate-fade-in">
          <div className="mobile-nav-content">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`mobile-nav-link-tech ${location.pathname === link.path ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="mobile-nav-divider"></div>
            
            {user ? (
              <>
                <Link to="/dashboard" className="mobile-nav-link-tech" onClick={closeMenu}>Dashboard</Link>
                <button onClick={() => { signOut(); closeMenu(); }} className="btn-pill-glass w-full justify-center">Keluar</button>
              </>
            ) : (
              <Link to="/login" className="mobile-nav-link-tech" onClick={closeMenu}>Login Akun</Link>
            )}
            
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="btn-pill-cyan w-full justify-center mt-4" onClick={closeMenu}>
              Daftar Sekarang
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
