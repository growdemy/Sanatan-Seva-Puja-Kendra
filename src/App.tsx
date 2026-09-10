import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pujas from './components/Pujas';
import AboutPandit from './components/AboutPandit';
import ServiceAreas from './components/ServiceAreas';
import Steps from './components/Steps';
import Testimonials from './components/Testimonials';
import CombinedSections from './components/CombinedSections';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-surface-canvas font-sans selection:bg-brand-primary-base selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pujas />
        <AboutPandit />
        <ServiceAreas />
        <Steps />
        <Testimonials />
        <CombinedSections />
      </main>
      <Footer />
    </div>
  );
}
