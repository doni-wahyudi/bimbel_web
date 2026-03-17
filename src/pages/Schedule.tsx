import CTASection from '../components/home/CTASection';
import { Calendar } from 'lucide-react';
import './Schedule.css';

const Schedule = () => {
  return (
    <div className="schedule-page animate-fade-in">
      <section className="page-header-tech">
        <div className="container">
          <h1 className="tech-heading-lg text-gradient-cyan">Jadwal Kelas Belajar</h1>
          <p className="page-subtitle-tech">
            Pilihan waktu belajar fleksibel untuk menunjang aktivitas sekolah siswa.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="table-glass-container">
            <div className="table-title-tech">
              <Calendar size={32} className="text-cyan" />
              <h2 style={{ fontSize: '1.8rem' }}>Jadwal Reguler & Intensif</h2>
            </div>
            
            <div className="tech-table-wrapper">
              <table className="tech-table">
                <thead>
                  <tr>
                    <th>Hari</th>
                    <th>Bimbel SD</th>
                    <th>Bimbel SMP</th>
                    <th>Bimbel SMA</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { day: 'Senin & Rabu', sd: '15.00 - 16.30', smp: '16.30 - 18.00', sma: '18.30 - 20.00' },
                    { day: 'Selasa & Kamis', sd: '15.00 - 16.30', smp: '16.30 - 18.00', sma: '18.30 - 20.00' },
                    { day: 'Jumat', sd: 'Try Out / Evaluasi', smp: 'Try Out / Evaluasi', sma: 'Try Out / Evaluasi' },
                    { day: 'Sabtu (Intensif)', sd: '09.00 - 11.00', smp: '11.00 - 13.00', sma: '13.30 - 16.00' },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="day-cell-tech">{row.day}</td>
                      <td>{row.sd}</td>
                      <td>{row.smp}</td>
                      <td>{row.sma}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="schedule-note-tech">
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
