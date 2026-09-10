import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a080a] text-surface-canvas pt-16 pb-8 border-t border-brand-gold-base/20">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-surface-canvas flex items-center justify-center rounded-sm">
                <span className="text-brand-primary-base text-sm font-display italic">img</span>
              </div>
              <div>
                <h2 className="font-display font-semibold text-lg leading-tight text-surface-canvas">Sanatan Seva Puja Kendra</h2>
                <p className="text-[10px] text-brand-gold-base uppercase tracking-widest mt-0.5">VEDIC TAPASYA & SHASTRA VIDYA</p>
              </div>
            </div>
            <p className="text-sm text-surface-canvas/70 leading-relaxed mb-6 font-sans">
              Under the guidance of Pandit Shridhar Shastri Ji, preserving eternal Sanatana Dharma with authentic Sanskrit intonation, unadulterated samagri, and deep spiritual integrity.
            </p>
            <div className="flex gap-3">
              <span className="text-xs border border-brand-gold-base/30 text-surface-canvas/80 px-3 py-1.5 rounded-sm">27+ Years Vedic Tapasya</span>
              <span className="text-xs border border-brand-gold-base/30 text-surface-canvas/80 px-3 py-1.5 rounded-sm">1000+ Blessed Families</span>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-brand-gold-base mb-6">Vedic Pujas</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-surface-canvas/70 hover:text-brand-gold-light transition-colors">Griha Pravesh Havan</a></li>
              <li><a href="#" className="text-sm text-surface-canvas/70 hover:text-brand-gold-light transition-colors">Maha Rudrabhishek</a></li>
              <li><a href="#" className="text-sm text-surface-canvas/70 hover:text-brand-gold-light transition-colors">Satyanarayan Katha</a></li>
              <li><a href="#" className="text-sm text-surface-canvas/70 hover:text-brand-gold-light transition-colors">Chandi & Durga Yagya</a></li>
              <li><a href="#" className="text-sm text-surface-canvas/70 hover:text-brand-gold-light transition-colors">Navgraha Shanti</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-brand-gold-base mb-6">Astrology & Dosha</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-surface-canvas/70 hover:text-brand-gold-light transition-colors">Kundli Birth Chart Reading</a></li>
              <li><a href="#" className="text-sm text-surface-canvas/70 hover:text-brand-gold-light transition-colors">Kaal Sarp Nivaran</a></li>
              <li><a href="#" className="text-sm text-surface-canvas/70 hover:text-brand-gold-light transition-colors">Mangal Dosha Shanti</a></li>
              <li><a href="#" className="text-sm text-surface-canvas/70 hover:text-brand-gold-light transition-colors">Pitra Dosha Anushthan</a></li>
              <li><a href="#" className="text-sm text-surface-canvas/70 hover:text-brand-gold-light transition-colors">Kundli Match & Milan</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-brand-gold-base mb-6">Sanctum Office</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-gold-base shrink-0 mt-0.5" />
                <span className="text-sm text-surface-canvas/70 leading-relaxed">Shri Kashi Vishwanath Marg, Varanasi & Doorstep Visits Nationwide</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-gold-base shrink-0 mt-0.5" />
                <span className="text-sm text-surface-canvas/70 leading-relaxed">+91 98234 56789 / +91 94150 12345</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-gold-base shrink-0 mt-0.5" />
                <span className="text-sm text-surface-canvas/70 leading-relaxed">contact@sanatansevapujakendra.org</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-surface-canvas/50">© 2025 Sanatan Seva Puja Kendra. All sacred rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-surface-canvas/50">
            <a href="#" className="hover:text-surface-canvas transition-colors">Vedic Standards</a>
            <span>•</span>
            <a href="#" className="hover:text-surface-canvas transition-colors">Samagri Guarantee</a>
            <span>•</span>
            <a href="#" className="hover:text-surface-canvas transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
