import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, User, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

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
          
          <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center' }}>
            {user ? (
              <>
                <Link to="/dashboard" className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <User size={18} /> Dashboard
                </Link>
                <button onClick={() => signOut()} className="btn btn-outline" style={{ padding: '8px', minWidth: 'auto', border: 'none' }} title="Keluar">
                  <LogOut size={18} color="#B91C1C" />
                </button>
              </>
            ) : (
              <Link to="/login" className="nav-link">Login</Link>
            )}
            <a href="https://wa.me/6281234567890?text=Halo%20Siswa%20Teladan,%20saya%20ingin%20mendaftar%20untuk%20anak%20saya..." target="_blank" rel="noopener noreferrer" className="btn btn-primary nav-cta">
              Daftar
            </a>
          </div>
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
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', marginTop: 'var(--space-4)' }}>
              {user ? (
                <>
                  <Link to="/dashboard" className="mobile-nav-link" onClick={closeMenu}>Dashboard</Link>
                  <button onClick={() => { signOut(); closeMenu(); }} className="btn btn-outline w-full" style={{ justifyContent: 'center' }}>Keluar</button>
                </>
              ) : (
                <Link to="/login" className="mobile-nav-link" onClick={closeMenu}>Login</Link>
              )}
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full" onClick={closeMenu}>
                Daftar Sekarang
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
