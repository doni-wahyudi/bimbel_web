import HeroSection from '../components/home/HeroSection';
import AboutPreview from '../components/home/AboutPreview';
import ProgramsPreview from '../components/home/ProgramsPreview';
import Testimonials from '../components/home/Testimonials';
import CTASection from '../components/home/CTASection';

const Home = () => {
  return (
    <div className="home-page animate-fade-in">
      <HeroSection />
      <AboutPreview />
      <ProgramsPreview />
      <Testimonials />
      <CTASection />
    </div>
  );
};

export default Home;
