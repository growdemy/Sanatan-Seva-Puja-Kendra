import { useState } from 'react';
import Navbar, { PageType } from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pujas from './components/Pujas';
import ServiceAreas from './components/ServiceAreas';
import Steps from './components/Steps';
import Testimonials from './components/Testimonials';
import CombinedSections from './components/CombinedSections';
import Footer from './components/Footer';
import AboutPanditPage from './components/AboutPanditPage';
import VedicPujasPage from './components/VedicPujasPage';
import AnushthansJaapPage from './components/AnushthansJaapPage';
import MarriageFamilyPage from './components/MarriageFamilyPage';
import HealthWellbeingPage from './components/HealthWellbeingPage';
import WealthCareerPage from './components/WealthCareerPage';
import PeaceProtectionPage from './components/PeaceProtectionPage';
import HomeVastuPage from './components/HomeVastuPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const handleBackToHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-surface-canvas font-sans selection:bg-brand-primary-base selection:text-white">
      <Navbar currentPage={currentPage} onNavigate={(page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }} />
      <main>
        {currentPage === 'home' && (
          <>
            <Hero />
            <Features />
            <Pujas />
            <ServiceAreas />
            <Steps />
            <Testimonials />
            <CombinedSections />
          </>
        )}
        {currentPage === 'about-pandit-page' && (
          <AboutPanditPage />
        )}
        {currentPage === 'vedic-pujas-page' && (
          <VedicPujasPage onBack={handleBackToHome} />
        )}
        {currentPage === 'anushthans-jaap-page' && (
          <AnushthansJaapPage onBack={handleBackToHome} />
        )}
        {currentPage === 'marriage-family-page' && (
          <MarriageFamilyPage onBack={handleBackToHome} />
        )}
        {currentPage === 'health-wellbeing-page' && (
          <HealthWellbeingPage onBack={handleBackToHome} />
        )}
        {currentPage === 'wealth-career-page' && (
          <WealthCareerPage onBack={handleBackToHome} />
        )}
        {currentPage === 'peace-protection-page' && (
          <PeaceProtectionPage onBack={handleBackToHome} />
        )}
        {currentPage === 'home-vastu-page' && (
          <HomeVastuPage onBack={handleBackToHome} />
        )}
      </main>
      <Footer />
    </div>
  );
}
