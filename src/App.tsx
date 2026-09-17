import { useState } from 'react';
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
import AboutPanditPage from './components/AboutPanditPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about-pandit-page'>('home');

  return (
    <div className="min-h-screen bg-surface-canvas font-sans selection:bg-brand-primary-base selection:text-white">
      <Navbar currentPage={currentPage} onNavigate={(page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }} />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero />
            <Features />
            <Pujas />
            <ServiceAreas />
            <Steps />
            <Testimonials />
            <CombinedSections />
          </>
        ) : (
          <AboutPanditPage onBack={() => {
            setCurrentPage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} />
        )}
      </main>
      <Footer />
    </div>
  );
}
