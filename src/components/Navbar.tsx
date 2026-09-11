import { MessageSquare, Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full border-b border-[#5c1c2b] bg-[#46111D] sticky top-0 z-50 shadow-md overflow-hidden">
      <div className="max-w-[1600px] mx-auto py-4 px-6 md:px-10 lg:px-20 flex items-center justify-between">
        {/* Logo Area */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#E8C37D] flex items-center justify-center rounded-sm">
          <span className="text-[#46111D] text-sm font-display italic font-bold">img</span>
        </div>
        <div>
          <h1 className="font-display font-semibold text-lg leading-tight text-[#e8c37d]">Sanatan Seva Puja Kendra</h1>
        </div>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex items-center gap-8">
        <a href="#" className="text-sm font-semibold text-white border-b-2 border-[#E8C37D] pb-1">Home</a>
        <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">About Pandit Ji</a>
        <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Vedic Pujas</a>
        <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Kundli & Jyotish</a>
        <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Dosha Nivaran</a>
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">FAQs</a>
          <button className="w-10 h-10 rounded-full bg-white/10 text-[#E8C37D] flex items-center justify-center hover:bg-white/20 transition-colors">
            <MessageSquare className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Call Button with Concentric Ripple / Zoom-out Flicker */}
        <div className="relative flex items-center justify-center md:hidden">
          <span className="absolute w-12 h-12 rounded-full bg-[#00A859]/30 animate-ping" style={{ animationDuration: '2s' }}></span>
          <span className="absolute w-16 h-16 rounded-full bg-[#00A859]/20 animate-pulse" style={{ animationDuration: '1.5s' }}></span>
          <a 
            href="tel:+918309054729"
            className="relative z-10 flex items-center justify-center bg-[#00A859] border border-[#02b862] text-white w-10 h-10 rounded-full shadow-md"
            title="Call +91 83090 54729"
          >
            <svg className="w-4 h-4 fill-white" viewBox="0 0 122.88 122.27" xmlns="http://www.w3.org/2000/svg">
              <path d="M33.84,50.25c4.13,7.45,8.89,14.6,15.07,21.12c6.2,6.56,13.91,12.53,23.89,17.63c0.74,0.36,1.44,0.36,2.07,0.11 c0.95-0.36,1.92-1.15,2.87-2.1c0.74-0.74,1.66-1.92,2.62-3.21c3.84-5.05,8.59-11.32,15.3-8.18c0.15,0.07,0.26,0.15,0.41,0.21 l22.38,12.87c0.07,0.04,0.15,0.11,0.21,0.15c2.95,2.03,4.17,5.16,4.2,8.71c0,3.61-1.33,7.67-3.28,11.1 c-2.58,4.53-6.38,7.53-10.76,9.51c-4.17,1.92-8.81,2.95-13.27,3.61c-7,1.03-13.56,0.37-20.27-1.69 c-6.56-2.03-13.17-5.38-20.39-9.84l-0.53-0.34c-3.31-2.07-6.89-4.28-10.4-6.89C31.12,93.32,18.03,79.31,9.5,63.89 C2.35,50.95-1.55,36.98,0.58,23.67c1.18-7.3,4.31-13.94,9.77-18.32c4.76-3.84,11.17-5.94,19.47-5.2c0.95,0.07,1.8,0.62,2.25,1.44 l14.35,24.26c2.1,2.72,2.36,5.42,1.21,8.12c-0.95,2.21-2.87,4.25-5.49,6.15c-0.77,0.66-1.69,1.33-2.66,2.03 c-3.21,2.33-6.86,5.02-5.61,8.18L33.84,50.25L33.84,50.25L33.84,50.25z"/>
            </svg>
          </a>
        </div>

        {/* Desktop Call Button */}
        <a 
          href="tel:+918309054729"
          className="hidden md:flex items-center justify-center bg-[#00A859] hover:bg-[#00914c] border border-[#02b862] text-white px-4 py-2.5 rounded-lg gap-2 transition-all shadow-md group"
          title="Call +91 83090 54729"
        >
          <svg className="w-4 h-4 fill-white" viewBox="0 0 122.88 122.27" xmlns="http://www.w3.org/2000/svg">
            <path d="M33.84,50.25c4.13,7.45,8.89,14.6,15.07,21.12c6.2,6.56,13.91,12.53,23.89,17.63c0.74,0.36,1.44,0.36,2.07,0.11 c0.95-0.36,1.92-1.15,2.87-2.1c0.74-0.74,1.66-1.92,2.62-3.21c3.84-5.05,8.59-11.32,15.3-8.18c0.15,0.07,0.26,0.15,0.41,0.21 l22.38,12.87c0.07,0.04,0.15,0.11,0.21,0.15c2.95,2.03,4.17,5.16,4.2,8.71c0,3.61-1.33,7.67-3.28,11.1 c-2.58,4.53-6.38,7.53-10.76,9.51c-4.17,1.92-8.81,2.95-13.27,3.61c-7,1.03-13.56,0.37-20.27-1.69 c-6.56-2.03-13.17-5.38-20.39-9.84l-0.53-0.34c-3.31-2.07-6.89-4.28-10.4-6.89C31.12,93.32,18.03,79.31,9.5,63.89 C2.35,50.95-1.55,36.98,0.58,23.67c1.18-7.3,4.31-13.94,9.77-18.32c4.76-3.84,11.17-5.94,19.47-5.2c0.95,0.07,1.8,0.62,2.25,1.44 l14.35,24.26c2.1,2.72,2.36,5.42,1.21,8.12c-0.95,2.21-2.87,4.25-5.49,6.15c-0.77,0.66-1.69,1.33-2.66,2.03 c-3.21,2.33-6.86,5.02-5.61,8.18L33.84,50.25L33.84,50.25L33.84,50.25z"/>
          </svg>
          <span className="text-sm font-semibold tracking-wide">+91 83090 54729</span>
        </a>
      </div>
      </div>
    </header>
  );
}
