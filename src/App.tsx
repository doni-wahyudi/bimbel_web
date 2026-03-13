import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Schedule from './pages/Schedule';
import Pricing from './pages/Pricing';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="tentang-kami" element={<About />} />
        <Route path="program" element={<Programs />} />
        <Route path="jadwal" element={<Schedule />} />
        <Route path="biaya" element={<Pricing />} />
        <Route path="galeri" element={<Gallery />} />
        <Route path="kontak" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
