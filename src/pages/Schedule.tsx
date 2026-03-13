import CTASection from '../components/home/CTASection';
import { Calendar } from 'lucide-react';

const Schedule = () => {
  return (
    <div className="schedule-page animate-fade-in">
      <section className="section bg-primary text-white text-center">
        <div className="container">
          <h1 className="section-title text-white">Jadwal Kelas Belajar</h1>
          <p className="section-subtitle text-white/80">
            Pilihan waktu belajar fleksibel untuk menunjang aktivitas sekolah siswa.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="glass" style={{ padding: 'var(--space-8)', borderRadius: 'var(--radius-lg)', maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
              <Calendar size={32} color="var(--secondary)" />
              <h2>Jadwal Reguler & Intensif</h2>
            </div>
            
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
                <thead>
                  <tr style={{ background: 'var(--primary-light)', color: 'white' }}>
                    <th style={{ padding: '16px', textAlign: 'left', borderTopLeftRadius: '8px' }}>Hari</th>
                    <th style={{ padding: '16px', textAlign: 'left' }}>Bimbel SD</th>
                    <th style={{ padding: '16px', textAlign: 'left' }}>Bimbel SMP</th>
                    <th style={{ padding: '16px', textAlign: 'left', borderTopRightRadius: '8px' }}>Bimbel SMA</th>
                  </tr>
                </thead>
                <tbody style={{ color: 'var(--text-main)' }}>
                  {[
                    { day: 'Senin & Rabu', sd: '15.00 - 16.30', smp: '16.30 - 18.00', sma: '18.30 - 20.00' },
                    { day: 'Selasa & Kamis', sd: '15.00 - 16.30', smp: '16.30 - 18.00', sma: '18.30 - 20.00' },
                    { day: 'Jumat', sd: 'Try Out / Evaluasi', smp: 'Try Out / Evaluasi', sma: 'Try Out / Evaluasi' },
                    { day: 'Sabtu (Intensif)', sd: '09.00 - 11.00', smp: '11.00 - 13.00', sma: '13.30 - 16.00' },
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid var(--border)', background: i % 2 === 0 ? 'var(--surface)' : 'var(--background)' }}>
                      <td style={{ padding: '16px', fontWeight: 600 }}>{row.day}</td>
                      <td style={{ padding: '16px' }}>{row.sd}</td>
                      <td style={{ padding: '16px' }}>{row.smp}</td>
                      <td style={{ padding: '16px' }}>{row.sma}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div style={{ marginTop: 'var(--space-6)', padding: 'var(--space-4)', background: 'var(--surface-hover)', borderRadius: 'var(--radius-md)', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <strong>Catatan:</strong> Jadwal dapat disesuaikan kembali berdasarkan kesepakatan dan ketersediaan kuota kelas maks 8 orang per sesi.
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Schedule;
