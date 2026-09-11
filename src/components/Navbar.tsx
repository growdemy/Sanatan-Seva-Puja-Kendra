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
            className="relative z-10 flex items-center justify-center bg-[#00A859] text-white w-10 h-10 rounded-full shadow-md"
            title="Call +91 83090 54729"
          >
            <Phone className="w-4 h-4 text-white" />
          </a>
        </div>

        {/* Desktop Call Button */}
        <a 
          href="tel:+918309054729"
          className="hidden md:flex items-center justify-center bg-[#00A859] hover:bg-[#00914c] text-white px-4 py-2.5 rounded-lg gap-2 transition-all shadow-md group"
          title="Call +91 83090 54729"
        >
          <Phone className="w-4 h-4 text-white" />
          <span className="text-sm font-semibold tracking-wide">+91 83090 54729</span>
        </a>
      </div>
      </div>
    </header>
  );
}
