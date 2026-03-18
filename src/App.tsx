import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Schedule from './pages/Schedule';
import Pricing from './pages/Pricing';
import Gallery from './pages/Gallery';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import Contact from './pages/Contact';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

import DiagnosticTest from './pages/DiagnosticTest';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="tentang-kami" element={<About />} />
          <Route path="program" element={<Programs />} />
          <Route path="jadwal" element={<Schedule />} />
          <Route path="biaya" element={<Pricing />} />
          <Route path="galeri" element={<Gallery />} />
          <Route path="artikel" element={<Articles />} />
          <Route path="artikel/:slug" element={<ArticleDetail />} />
          <Route path="kontak" element={<Contact />} />
          <Route path="tes-diagnostik" element={<DiagnosticTest />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route 
            path="dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
