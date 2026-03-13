import { MapPin, Phone, Clock, Send } from 'lucide-react';
import CTASection from '../components/home/CTASection';

const Contact = () => {
  return (
    <div className="contact-page animate-fade-in">
      <section className="section bg-primary text-white text-center pb-24">
        <div className="container">
          <h1 className="section-title text-white">Hubungi Kami</h1>
          <p className="section-subtitle text-white/80" style={{ marginBottom: 0 }}>
            Kami siap membantu! Jangan ragu untuk bertanya atau berkunjung langsung.
          </p>
        </div>
      </section>

      <section className="section" style={{ marginTop: '-80px', paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1.5fr)', gap: 'var(--space-8)' }}>
            
            {/* Contact Info Card */}
            <div className="glass" style={{ padding: 'var(--space-8)', borderRadius: 'var(--radius-lg)', background: 'var(--surface)' }}>
              <h2 style={{ marginBottom: 'var(--space-6)', color: 'var(--primary-dark)' }}>Informasi Kontak</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--primary-light)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '4px', color: 'var(--text-main)' }}>Alamat Lokasi</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                      Jl. Pendidikan Generasi No. 123,<br/>
                      Kecamatan Sukamaju, Jakarta Selatan,<br/>
                      DKI Jakarta 12345
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--accent)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '4px', color: 'var(--text-main)' }}>WhatsApp / Telepon</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>+62 812 3456 7890</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--secondary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '4px', color: 'var(--text-main)' }}>Jam Operasional</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                      Senin - Jumat: 09:00 - 20:00 WIB<br/>
                      Sabtu: 09:00 - 17:00 WIB<br/>
                      Minggu: Tutup
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Registration Form via WhatsApp */}
            <div className="glass" style={{ padding: 'var(--space-8)', borderRadius: 'var(--radius-lg)', background: 'var(--surface)' }}>
              <h2 style={{ marginBottom: 'var(--space-2)', color: 'var(--primary-dark)' }}>Pendaftaran Online Cepat</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-6)', fontSize: '0.9rem' }}>
                Isi form berikut, dan kami akan mengarahkan Anda ke WhatsApp dengan format otomatis.
              </p>

              <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const text = `Halo Admin Siswa Teladan! Saya ingin mendaftar dengan data berikut:
Nama Siswa: ${formData.get('nama')}
Kelas/Asal Sekolah: ${formData.get('sekolah')}
Pilih Program: ${formData.get('program')}

Mohon informasi selanjutnya.`;
                
                window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(text)}`, '_blank');
              }} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 600 }}>Nama Lengkap Siswa</label>
                  <input required name="nama" type="text" placeholder="Masukkan nama siswa" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '1rem', outline: 'none' }} />
                </div>
                
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 600 }}>Kelas & Asal Sekolah</label>
                  <input required name="sekolah" type="text" placeholder="Contoh: Kelas 10 SMAN 1 Jakarta" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '1rem', outline: 'none' }} />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 600 }}>Pilih Program</label>
                  <select required name="program" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '1rem', outline: 'none', backgroundColor: 'white' }}>
                    <option value="">-- Pilih Program --</option>
                    <option value="Bimbel SD (Reguler)">Bimbel SD (Reguler)</option>
                    <option value="Bimbel SMP (Intensif)">Bimbel SMP (Intensif)</option>
                    <option value="Bimbel SMA (Persiapan UTBK)">Bimbel SMA (Persiapan UTBK)</option>
                    <option value="Konsultasi Dulu">Konsultasi Dulu</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-primary" style={{ marginTop: '8px', display: 'flex', gap: '8px', justifyContent: 'center' }}>
                  <Send size={18} /> Kirim via WhatsApp
                </button>
              </form>
            </div>
          </div>
          
          {/* Google Maps Placeholder */}
          <div style={{ marginTop: 'var(--space-8)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '400px', background: '#e5e7eb', position: 'relative' }}>
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d126920.2405629396!2d106.75783515082167!3d-6.2297465369796035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x100c5e82dd4b810!2sJakarta%20Selatan%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1700667086828!5m2!1sid!2sid" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen={true} 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade">
             </iframe>
          </div>
        </div>
      </section>
      
      <CTASection />
    </div>
  );
};

export default Contact;
