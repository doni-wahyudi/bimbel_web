import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabase';
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  LogOut, 
  FileText, 
  MessageSquare,
  TrendingUp,
  Star,
  Download,
  Send,
  Loader2,
  Trophy,
  Calendar
} from 'lucide-react';
import './Dashboard.css';

// Mock Data
const MOCK_GRADES = [
  { id: 1, subject: 'Matematika', score: 88, date: '12 Maret 2026', type: 'Tryout UTBK' },
  { id: 2, subject: 'Bahasa Indonesia', score: 92, date: '10 Maret 2026', type: 'Latihan Harian' },
  { id: 3, subject: 'Bahasa Inggris', score: 85, date: '05 Maret 2026', type: 'Post-Test' },
];

const MOCK_ATTENDANCE = [
  { id: 1, date: '13 Maret 2026', status: 'Hadir', time: '16:00' },
  { id: 2, date: '11 Maret 2026', status: 'Hadir', time: '16:02' },
  { id: 3, date: '09 Maret 2026', status: 'Izin', time: '-' },
];

const MOCK_NOTES = [
  { id: 1, date: '12 Maret 2026', teacher: 'Bpk. Ahmad', note: 'Anak sangat aktif dalam diskusi Matematika hari ini. Pemahaman logikanya meningkat pesat.' },
  { id: 2, date: '05 Maret 2026', teacher: 'Ibu Siska', note: 'Perlu latihan lebih banyak di bagian Vocabulary Bahasa Inggris.' },
];

const MOCK_RANKING = [
  { rank: 1, name: 'Budi Santoso', score: 985, level: 'SMA' },
  { rank: 2, name: 'Siti Aminah', score: 972, level: 'SMA' },
  { rank: 3, name: 'Andi Wijaya', score: 955, level: 'SMA' },
  { rank: 4, name: 'Rina Putri', score: 940, level: 'SMP' },
  { rank: 5, name: 'Dewi Lestari', score: 928, level: 'SD' },
];

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Trial Booking State
  const [bookingLoading, setBookingLoading] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [formData, setFormData] = useState({
    studentName: '',
    grade: 'SD',
    trialDate: '',
    trialTime: '16:00'
  });

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBookingLoading(true);
    
    // Attempt saving to Supabase (assuming 'bookings' table exists)
    const { error } = await supabase.from('bookings').insert([{
      ...formData,
      parent_email: user?.email,
      status: 'pending'
    }]);

    if (error) {
      console.error('Booking error:', error);
      // Fallback for demo if table doesn't exist yet
      setTimeout(() => {
        setBookingLoading(false);
        setBookingSuccess(true);
      }, 1000);
    } else {
      setBookingLoading(false);
      setBookingSuccess(true);
    }
  };

  const renderOverview = () => (
    <div className="animate-fade-in">
      <div className="dashboard-grid">
        <div className="stat-card">
          <div className="stat-icon" style={{ background: 'var(--primary-light)' }}>
            <BookOpen size={24} />
          </div>
          <div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Program</p>
            <h3 style={{ fontSize: '1.2rem' }}>SMA - Intensif</h3>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ background: 'var(--accent)' }}>
            <TrendingUp size={24} />
          </div>
          <div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Rata-rata Nilai</p>
            <h3 style={{ fontSize: '1.2rem' }}>88.3</h3>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ background: 'var(--secondary)' }}>
            <Trophy size={24} />
          </div>
          <div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Peringkat</p>
            <h3 style={{ fontSize: '1.2rem' }}>#12 dari 150</h3>
          </div>
        </div>
      </div>

      <div className="data-card">
        <h3 style={{ marginBottom: 'var(--space-4)' }}>Aktivitas Terakhir</h3>
        <table className="data-table">
          <thead>
            <tr>
              <th>Kegiatan</th>
              <th>Waktu</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sesi Bimbel Matematika</td>
              <td>Hari ini, 16:00</td>
              <td><span className="badge badge-success">Selesai</span></td>
            </tr>
            <tr>
              <td>Post-Test Bahasa Inggris</td>
              <td>Kemarin</td>
              <td><span className="badge badge-info">Dinilai</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderGrades = () => (
    <div className="animate-fade-in">
      <h2 style={{ marginBottom: 'var(--space-6)' }}>Laporan Nilai Siswa</h2>
      <div className="data-card">
        <table className="data-table">
          <thead>
            <tr>
              <th>Mata Pelajaran</th>
              <th>Tipe Tes</th>
              <th>Tanggal</th>
              <th>Nilai</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_GRADES.map(grade => (
              <tr key={grade.id}>
                <td><strong>{grade.subject}</strong></td>
                <td>{grade.type}</td>
                <td>{grade.date}</td>
                <td style={{ fontWeight: 700, color: 'var(--primary)' }}>{grade.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderAttendance = () => (
    <div className="animate-fade-in">
      <h2 style={{ marginBottom: 'var(--space-6)' }}>Log Kehadiran</h2>
      <div className="data-card">
        <table className="data-table">
          <thead>
            <tr>
              <th>Tanggal</th>
              <th>Waktu Datang</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_ATTENDANCE.map(item => (
              <tr key={item.id}>
                <td>{item.date}</td>
                <td>{item.time}</td>
                <td>
                  <span className={`badge ${item.status === 'Hadir' ? 'badge-success' : 'badge-warning'}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderNotes = () => (
    <div className="animate-fade-in">
      <h2 style={{ marginBottom: 'var(--space-6)' }}>Catatan Guru</h2>
      {MOCK_NOTES.map(note => (
        <div key={note.id} className="data-card" style={{ marginBottom: 'var(--space-4)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-2)' }}>
            <strong>{note.teacher}</strong>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{note.date}</span>
          </div>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>"{note.note}"</p>
        </div>
      ))}
    </div>
  );

  const renderRanking = () => (
    <div className="animate-fade-in">
      <h2 style={{ marginBottom: 'var(--space-6)' }}>Peringkat Siswa Teladan</h2>
      <div className="data-card">
        <table className="data-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Nama Siswa</th>
              <th>Level</th>
              <th>Total Skor</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_RANKING.map(student => (
              <tr key={student.rank} style={student.rank <= 3 ? { background: 'var(--surface)' } : {}}>
                <td>
                  {student.rank === 1 && <Star size={16} color="gold" fill="gold" />}
                  {student.rank === 2 && <Star size={16} color="silver" fill="silver" />}
                  {student.rank === 3 && <Star size={16} color="#CD7F32" fill="#CD7F32" />}
                  {student.rank > 3 && student.rank}
                </td>
                <td><strong>{student.name}</strong></td>
                <td>{student.level}</td>
                <td style={{ fontWeight: 600 }}>{student.score} pts</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderBooking = () => (
    <div className="animate-fade-in">
      <h2 style={{ marginBottom: 'var(--space-6)' }}>Booking Kelas Percobaan</h2>
      <div className="data-card" style={{ maxWidth: '600px' }}>
        {bookingSuccess ? (
          <div style={{ textAlign: 'center', padding: 'var(--space-8)' }}>
            <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'var(--secondary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <Download size={32} />
            </div>
            <h3>Pendaftaran Berhasil!</h3>
            <p style={{ color: 'var(--text-muted)' }}>Admin akan menghubungi Anda via WhatsApp dalam waktu 1x24 jam untuk konfirmasi jadwal.</p>
            <button onClick={() => setBookingSuccess(false)} className="btn btn-outline" style={{ marginTop: '24px' }}>Daftar Lagi</button>
          </div>
        ) : (
          <form onSubmit={handleBookingSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 600 }}>Nama Siswa</label>
              <input 
                required
                type="text" 
                className="form-input"
                value={formData.studentName}
                onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                placeholder="Masukkan nama lengkap anak"
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border)' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 600 }}>Jenjang</label>
              <select 
                className="form-input"
                value={formData.grade}
                onChange={(e) => setFormData({...formData, grade: e.target.value})}
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border)' }}
              >
                <option value="SD">SD</option>
                <option value="SMP">SMP</option>
                <option value="SMA">SMA</option>
              </select>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 600 }}>Pilih Tanggal</label>
                <input 
                  required
                  type="date"
                  value={formData.trialDate}
                  onChange={(e) => setFormData({...formData, trialDate: e.target.value})}
                  style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border)' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 600 }}>Pilih Jam</label>
                <select 
                  className="form-input"
                  value={formData.trialTime}
                  onChange={(e) => setFormData({...formData, trialTime: e.target.value})}
                  style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border)' }}
                >
                  <option value="16:00">16:00 WIB</option>
                  <option value="17:00">17:00 WIB</option>
                  <option value="19:00">19:00 WIB</option>
                </select>
              </div>
            </div>
            <button type="submit" disabled={bookingLoading} className="btn btn-primary" style={{ marginTop: '16px', display: 'flex', gap: '8px', justifyContent: 'center' }}>
              {bookingLoading ? <Loader2 size={20} className="animate-spin" /> : <><Send size={18} /> Kirim Permintaan Trial</>}
            </button>
          </form>
        )}
      </div>
    </div>
  );

  const renderReports = () => (
    <div className="animate-fade-in">
      <h2 style={{ marginBottom: 'var(--space-6)' }}>Laporan Perkembangan (E-Report)</h2>
      <div className="dashboard-grid">
        <div className="data-card" style={{ textAlign: 'center', padding: 'var(--space-8)' }}>
          <FileText size={48} style={{ color: 'var(--primary)', marginBottom: '16px', opacity: 0.5 }} />
          <h3>Laporan Bulanan - Maret 2026</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>Ringkasan nilai, kehadiran, dan catatan perkembangan bulanan.</p>
          <button className="btn btn-outline" style={{ display: 'flex', gap: '8px', margin: '0 auto' }}>
            <Download size={18} /> Download PDF
          </button>
        </div>
        <div className="data-card" style={{ textAlign: 'center', padding: 'var(--space-8)' }}>
          <FileText size={48} style={{ color: 'var(--primary)', marginBottom: '16px', opacity: 0.5 }} />
          <h3>Laporan Bulanan - Februari 2026</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>Dokumen laporan perkembangan bulan Februari.</p>
          <button className="btn btn-outline" style={{ display: 'flex', gap: '8px', margin: '0 auto' }}>
            <Download size={18} /> Download PDF
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="dashboard-container">
      <aside className="dashboard-sidebar">
        <div className="sidebar-nav">
          <button 
            className={`sidebar-item ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <LayoutDashboard size={20} /> Overview
          </button>
          <button 
            className={`sidebar-item ${activeTab === 'grades' ? 'active' : ''}`}
            onClick={() => setActiveTab('grades')}
          >
            <FileText size={20} /> Nilai Anak
          </button>
          <button 
            className={`sidebar-item ${activeTab === 'attendance' ? 'active' : ''}`}
            onClick={() => setActiveTab('attendance')}
          >
            <Users size={20} /> Kehadiran
          </button>
          <button 
            className={`sidebar-item ${activeTab === 'ranking' ? 'active' : ''}`}
            onClick={() => setActiveTab('ranking')}
          >
            <Trophy size={20} /> Peringkat
          </button>
          <button 
            className={`sidebar-item ${activeTab === 'booking' ? 'active' : ''}`}
            onClick={() => setActiveTab('booking')}
          >
            <Calendar size={20} /> Booking Trial
          </button>
          <button 
            className={`sidebar-item ${activeTab === 'notes' ? 'active' : ''}`}
            onClick={() => setActiveTab('notes')}
          >
            <MessageSquare size={20} /> Catatan Guru
          </button>
          <button 
            className={`sidebar-item ${activeTab === 'reports' ? 'active' : ''}`}
            onClick={() => setActiveTab('reports')}
          >
            <Download size={20} /> E-Report
          </button>
        </div>
        <div className="sidebar-footer">
          <button onClick={() => signOut()} className="sidebar-item" style={{ color: '#B91C1C' }}>
            <LogOut size={20} /> Keluar
          </button>
        </div>
      </aside>

      <main className="dashboard-content">
        <header className="dashboard-header">
          <h1>Halo, Orang Tua Siswa</h1>
          <p style={{ color: 'var(--text-muted)' }}>{user?.email} • Pemantauan Siswa Aktif</p>
        </header>

        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'grades' && renderGrades()}
        {activeTab === 'attendance' && renderAttendance()}
        {activeTab === 'notes' && renderNotes()}
        {activeTab === 'ranking' && renderRanking()}
        {activeTab === 'booking' && renderBooking()}
        {activeTab === 'reports' && renderReports()}
      </main>
    </div>
  );
};

export default Dashboard;
