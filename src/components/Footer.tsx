import { Calendar, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2A1115] py-[50px] lg:py-[80px] relative overflow-hidden text-center border-t border-brand-gold-base/20">
      <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
        
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-gold-base mb-6 border border-brand-gold-base/30 px-4 py-1.5 rounded-full bg-[#400A15]">
          <span className="text-sm">ॐ</span>
          SANATAN SEVA PUJA KENDRA
        </div>
        
        <h2 className="text-[30px] leading-[38px] md:text-[44px] md:leading-[58px] font-display text-surface-canvas mb-6 font-bold">
          Ready to Bless Your Home with Vedic Auspiciousness?
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button className="w-full sm:w-auto bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] hover:from-[#E66000] hover:to-[#E67E00] text-white px-8 py-4 rounded-[8px] md:rounded-[12px] font-semibold transition-all shadow-[0_4px_20px_rgba(255,107,0,0.3)] flex items-center justify-center gap-2">
            <Calendar className="w-5 h-5" /> Book Pandit Ji
          </button>
          <button className="w-full sm:w-auto bg-white hover:bg-surface-parchment text-[#3D1A22] px-8 py-4 rounded-[8px] md:rounded-[12px] font-semibold transition-all shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex items-center justify-center gap-2">
            <MessageSquare className="w-5 h-5 text-[#25D366]" /> Chat on WhatsApp
          </button>
        </div>

        <div className="pt-8 border-t border-white/10 mt-12 text-xs text-surface-canvas/50">
          © 2025 Sanatan Seva Puja Kendra. All sacred rights reserved.
        </div>
      </div>
    </footer>
  );
}
