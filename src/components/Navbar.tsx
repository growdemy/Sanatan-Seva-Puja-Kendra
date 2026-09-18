import { useState } from 'react';
import { MessageSquare, ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export type PageType = 
  | 'home' 
  | 'about-pandit-page' 
  | 'vedic-pujas-page'
  | 'anushthans-jaap-page'
  | 'marriage-family-page'
  | 'health-wellbeing-page'
  | 'wealth-career-page'
  | 'peace-protection-page'
  | 'home-vastu-page';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCatalogueOpen, setMobileCatalogueOpen] = useState(false);

  const pujaCategories = [
    { name: "Vedic Pujas", count: 10 },
    { name: "Anushthans & Jaap", count: 7 },
    { name: "Marriage & Family", count: 6 },
    { name: "Health & Well-being", count: 4 },
    { name: "Wealth, Career & Business", count: 4 },
    { name: "Peace, Protection & Dosha Shanti", count: 4 },
    { name: "Home & Vastu", count: 4 }
  ];

  const categoryPageMap: Record<string, PageType> = {
    "Vedic Pujas": "vedic-pujas-page",
    "Anushthans & Jaap": "anushthans-jaap-page",
    "Marriage & Family": "marriage-family-page",
    "Health & Well-being": "health-wellbeing-page",
    "Wealth, Career & Business": "wealth-career-page",
    "Peace, Protection & Dosha Shanti": "peace-protection-page",
    "Home & Vastu": "home-vastu-page"
  };

  const isCataloguePage = [
    'vedic-pujas-page',
    'anushthans-jaap-page',
    'marriage-family-page',
    'health-wellbeing-page',
    'wealth-career-page',
    'peace-protection-page',
    'home-vastu-page'
  ].includes(currentPage);

  const handleCategoryClick = (catName: string) => {
    const target = categoryPageMap[catName] || 'home';
    onNavigate(target);
    setShowDropdown(false);
    setMobileMenuOpen(false);
    setMobileCatalogueOpen(false);
  };

  return (
    <header className="w-full border-b border-[#5c1c2b] bg-[#46111D] sticky top-0 z-50 shadow-md">
      <div className="max-w-[1600px] mx-auto py-4 px-6 md:px-10 lg:px-20 flex items-center justify-between relative">
        {/* Logo Area */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}>
          <div className="w-10 h-10 bg-[#E8C37D] flex items-center justify-center rounded-sm">
            <span className="text-[#46111D] text-sm font-display italic font-bold">img</span>
          </div>
          <div>
            <h1 className="font-display font-semibold text-lg leading-tight text-[#e8c37d]">Sanatan Seva Puja Kendra</h1>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <button 
            onClick={() => onNavigate('home')}
            className={`text-sm font-semibold transition-colors py-1 ${currentPage === 'home' ? 'text-white border-b-2 border-[#E8C37D]' : 'text-white/70 hover:text-white'}`}
          >
            Home
          </button>
          <button 
            onClick={() => onNavigate('about-pandit-page')}
            className={`text-sm font-semibold transition-colors py-1 ${currentPage === 'about-pandit-page' ? 'text-white border-b-2 border-[#E8C37D]' : 'text-white/70 hover:text-white'}`}
          >
            About Pandit Ji
          </button>
          
          {/* Pujas & Anushthans dropdown on hover */}
          <div 
            className="relative py-2 flex items-center"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button 
              onClick={() => onNavigate('vedic-pujas-page')} 
              className={`text-sm font-semibold transition-colors inline-flex items-center gap-1 ${isCataloguePage ? 'text-white border-b-2 border-[#E8C37D]' : 'text-white/70 hover:text-white'}`}
            >
              Pujas & Anushthans <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} />
            </button>

            {showDropdown && (
              <div className="absolute top-full left-0 w-72 bg-[#3B121B] border border-[#5C1E2B] rounded-xl shadow-2xl py-3 px-2 z-50 mt-1 animate-fadeIn">
                <div className="px-3 py-2 border-b border-white/10 mb-2">
                  <span className="text-[11px] font-bold text-[#E8C37D] uppercase tracking-wider">Sacred Catalogue</span>
                </div>
                {pujaCategories.map((cat, i) => (
                  <button 
                    key={i}
                    onClick={() => handleCategoryClick(cat.name)}
                    className={`w-full text-left flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors ${categoryPageMap[cat.name] === currentPage ? 'bg-[#4E1823] text-[#E8C37D]' : 'text-white/90 hover:bg-[#4E1823] hover:text-[#E8C37D]'}`}
                  >
                    <span>{cat.name}</span>
                    <span className="text-xs bg-[#2E161B] text-[#E8C37D] border border-[#523326] px-2 py-0.5 rounded-full font-semibold">
                      {cat.count}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <button className="w-10 h-10 rounded-full bg-white/10 text-[#E8C37D] flex items-center justify-center hover:bg-white/20 transition-colors">
              <MessageSquare className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Call Button */}
          <div className="relative flex items-center justify-center md:hidden">
            <span className="absolute w-12 h-12 rounded-full bg-[#FF6B00]/30 animate-ping" style={{ animationDuration: '2s' }}></span>
            <span className="absolute w-16 h-16 rounded-full bg-[#FF6B00]/20 animate-pulse" style={{ animationDuration: '1.5s' }}></span>
            <a 
              href="tel:+918309054729"
              className="relative z-10 flex items-center justify-center bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] text-white w-10 h-10 rounded-full shadow-md"
              title="Call +91 83090 54729"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 122.88 122.27" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.84,50.25c4.13,7.45,8.89,14.6,15.07,21.12c6.2,6.56,13.91,12.53,23.89,17.63c0.74,0.36,1.44,0.36,2.07,0.11 c0.95-0.36,1.92-1.15,2.87-2.1c0.74-0.74,1.66-1.92,2.62-3.21c3.84-5.05,8.59-11.32,15.3-8.18c0.15,0.07,0.26,0.15,0.41,0.21 l22.38,12.87c0.07,0.04,0.15,0.11,0.21,0.15c2.95,2.03,4.17,5.16,4.2,8.71c0,3.61-1.33,7.67-3.28,11.1 c-2.58,4.53-6.38,7.53-10.76,9.51c-4.17,1.92-8.81,2.95-13.27,3.61c-7,1.03-13.56,0.37-20.27-1.69 c-6.56-2.03-13.17-5.38-20.39-9.84l-0.53-0.34c-3.31-2.07-6.89-4.28-10.4-6.89C31.12,93.32,18.03,79.31,9.5,63.89 C2.35,50.95-1.55,36.98,0.58,23.67c1.18-7.3,4.31-13.94,9.77-18.32c4.76-3.84,11.17-5.94,19.47-5.2c0.95,0.07,1.8,0.62,2.25,1.44 l14.35,24.26c2.1,2.72,2.36,5.42,1.21,8.12c-0.95,2.21-2.87,4.25-5.49,6.15c-0.77,0.66-1.69,1.33-2.66,2.03 c-3.21,2.33-6.86,5.02-5.61,8.18L33.84,50.25L33.84,50.25L33.84,50.25z"/>
              </svg>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#E8C37D] hover:text-white transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Call Button */}
          <a 
            href="tel:+918309054729"
            className="hidden md:flex items-center justify-center bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] hover:from-[#E66000] hover:to-[#E67E00] text-white px-4 py-2.5 rounded-lg gap-2 transition-all shadow-[0_4px_20px_rgba(255,107,0,0.3)] group"
            title="Call +91 83090 54729"
          >
            <svg className="w-4 h-4 fill-white" viewBox="0 0 122.88 122.27" xmlns="http://www.w3.org/2000/svg">
              <path d="M33.84,50.25c4.13,7.45,8.89,14.6,15.07,21.12c6.2,6.56,13.91,12.53,23.89,17.63c0.74,0.36,1.44,0.36,2.07,0.11 c0.95-0.36,1.92-1.15,2.87-2.1c0.74-0.74,1.66-1.92,2.62-3.21c3.84-5.05,8.59-11.32,15.3-8.18c0.15,0.07,0.26,0.15,0.41,0.21 l22.38,12.87c0.07,0.04,0.15,0.11,0.21,0.15c2.95,2.03,4.17,5.16,4.2,8.71c0,3.61-1.33,7.67-3.28,11.1 c-2.58,4.53-6.38,7.53-10.76,9.51c-4.17,1.92-8.81,2.95-13.27,3.61c-7,1.03-13.56,0.37-20.27-1.69 c-6.56-2.03-13.17-5.38-20.39-9.84l-0.53-0.34c-3.31-2.07-6.89-4.28-10.4-6.89C31.12,93.32,18.03,79.31,9.5,63.89 C2.35,50.95-1.55,36.98,0.58,23.67c1.18-7.3,4.31-13.94,9.77-18.32c4.76-3.84,11.17-5.94,19.47-5.2c0.95,0.07,1.8,0.62,2.25,1.44 l14.35,24.26c2.1,2.72,2.36,5.42,1.21,8.12c-0.95,2.21-2.87,4.25-5.49,6.15c-0.77,0.66-1.69,1.33-2.66,2.03 c-3.21,2.33-6.86,5.02-5.61,8.18L33.84,50.25L33.84,50.25L33.84,50.25z"/>
            </svg>
            <span className="text-sm font-semibold tracking-wide">+91 83090 54729</span>
          </a>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden absolute top-full left-0 w-full bg-[#3B121B] border-b border-[#5C1E2B] shadow-2xl py-4 px-6 z-50 overflow-hidden"
          >
            <nav className="flex flex-col gap-2">
              <button 
                onClick={() => {
                  onNavigate('home');
                  setMobileMenuOpen(false);
                }}
                className={`text-left text-base font-semibold py-2.5 px-3 rounded-lg transition-colors ${currentPage === 'home' ? 'bg-[#4E1823] text-[#E8C37D]' : 'text-white/85 hover:bg-[#4E1823]/50'}`}
              >
                Home
              </button>
              <button 
                onClick={() => {
                  onNavigate('about-pandit-page');
                  setMobileMenuOpen(false);
                }}
                className={`text-left text-base font-semibold py-2.5 px-3 rounded-lg transition-colors ${currentPage === 'about-pandit-page' ? 'bg-[#4E1823] text-[#E8C37D]' : 'text-white/85 hover:bg-[#4E1823]/50'}`}
              >
                About Pandit Ji
              </button>

              {/* Smooth Collapsible Sacred Catalogue dropdown in mobile */}
              <div>
                <button 
                  onClick={() => setMobileCatalogueOpen(!mobileCatalogueOpen)}
                  className="w-full flex items-center justify-between text-left text-base font-semibold py-2.5 px-3 rounded-lg text-white/85 hover:bg-[#4E1823]/50 transition-colors"
                >
                  <span>Sacred Catalogue</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileCatalogueOpen ? 'rotate-180 text-[#E8C37D]' : 'text-white/75'}`} />
                </button>

                <AnimatePresence>
                  {mobileCatalogueOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="pl-2 space-y-1 overflow-hidden pt-1"
                    >
                      {pujaCategories.map((cat, i) => (
                        <button 
                          key={i}
                          onClick={() => handleCategoryClick(cat.name)}
                          className={`w-full text-left flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${categoryPageMap[cat.name] === currentPage ? 'bg-[#4E1823] text-[#E8C37D]' : 'text-white/90 hover:bg-[#4E1823] hover:text-[#E8C37D]'}`}
                        >
                          <span>{cat.name}</span>
                          <span className="text-xs bg-[#2E161B] text-[#E8C37D] border border-[#523326] px-2 py-0.5 rounded-full font-semibold">
                            {cat.count}
                          </span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
