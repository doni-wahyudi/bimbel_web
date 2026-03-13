import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { Mail, Lock, User, Loader2, ArrowRight } from 'lucide-react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error, data } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        }
      }
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      // Create profile record if needed, but for now just head to verify or dashboard
      navigate('/login');
      alert('Registrasi berhasil! Silakan cek email Anda untuk verifikasi atau langsung login jika sudah otomatis.');
    }
  };

  return (
    <div className="auth-page animate-fade-in" style={{ 
      minHeight: '80vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: 'var(--space-4)'
    }}>
      <div className="glass auth-card" style={{
        width: '100%',
        maxWidth: '450px',
        padding: 'var(--space-8)',
        borderRadius: 'var(--radius-lg)',
        background: 'var(--surface)',
        boxShadow: 'var(--shadow-lg)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
          <h1 className="section-title" style={{ fontSize: '2rem', marginBottom: 'var(--space-2)' }}>Buka Akun</h1>
          <p style={{ color: 'var(--text-muted)' }}>Daftar sebagai Orang Tua di Siswa Teladan</p>
        </div>

        {error && (
          <div style={{ 
            padding: 'var(--space-4)', 
            background: '#FEE2E2', 
            color: '#B91C1C', 
            borderRadius: 'var(--radius-sm)',
            marginBottom: 'var(--space-4)',
            fontSize: '0.9rem'
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 600 }}>Nama Lengkap</label>
            <div style={{ position: 'relative' }}>
              <User size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
              <input 
                required 
                type="text" 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Nama Orang Tua" 
                style={{ 
                  width: '100%', 
                  padding: '12px 16px 12px 48px', 
                  borderRadius: '8px', 
                  border: '1px solid var(--border)', 
                  fontSize: '1rem', 
                  outline: 'none' 
                }} 
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 600 }}>Email</label>
            <div style={{ position: 'relative' }}>
              <Mail size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
              <input 
                required 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="anak@email.com" 
                style={{ 
                  width: '100%', 
                  padding: '12px 16px 12px 48px', 
                  borderRadius: '8px', 
                  border: '1px solid var(--border)', 
                  fontSize: '1rem', 
                  outline: 'none' 
                }} 
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 600 }}>Password</label>
            <div style={{ position: 'relative' }}>
              <Lock size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
              <input 
                required 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Minimal 6 karakter" 
                style={{ 
                  width: '100%', 
                  padding: '12px 16px 12px 48px', 
                  borderRadius: '8px', 
                  border: '1px solid var(--border)', 
                  fontSize: '1rem', 
                  outline: 'none' 
                }} 
              />
            </div>
          </div>

          <button 
            disabled={loading}
            type="submit" 
            className="btn btn-primary" 
            style={{ 
              marginTop: 'var(--space-2)', 
              display: 'flex', 
              gap: '8px', 
              justifyContent: 'center',
              width: '100%'
            }}
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : <>Daftar Sekarang <ArrowRight size={18} /></>}
          </button>
        </form>

        <div style={{ marginTop: 'var(--space-6)', textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          Sudah punya akun? <Link to="/login" style={{ color: 'var(--primary)', fontWeight: 600 }}>Masuk di sini</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
