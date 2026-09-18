import { motion } from 'motion/react';
import ServiceAreas from './ServiceAreas';

interface VedicPujasPageProps {
  onBack: () => void;
}

export default function VedicPujasPage({ onBack: _onBack }: VedicPujasPageProps) {
  const vedicPujas = [
    { title: "Ganesh Puja", description: "Removes obstacles and brings success.", img: "https://i.ibb.co/Sw2z4dwr/Ganesh-Puja.webp" },
    { title: "Lakshmi Puja", description: "Invokes wealth and prosperity.", img: "https://i.ibb.co/ccHF5Dng/Lakshmi-Puja.webp" },
    { title: "Durga Puja", description: "Seeks strength and divine protection.", img: "https://i.ibb.co/67yhyJjR/Durga-Puja.webp" },
    { title: "Shiva Puja", description: "Brings peace and spiritual blessings.", img: "https://i.ibb.co/0ygfkZj7/Shiva-Puja.webp" },
    { title: "Vishnu Puja", description: "Promotes harmony, stability and prosperity.", img: "https://i.ibb.co/XfL3HBxM/Vishnu-Puja.webp" },
    { title: "Hanuman Puja", description: "Invokes courage, strength and protection.", img: "https://i.ibb.co/QF5QXtcj/Hanuman-Puja.webp" },
    { title: "Saraswati Puja", description: "Supports knowledge, learning and wisdom.", img: "https://i.ibb.co/rRRVz2z8/Saraswati-Puja.webp" },
    { title: "Navagraha Puja", description: "Balances planetary influences and energies.", img: "https://i.ibb.co/xSzfKZKR/Navagraha-Puja.webp" },
    { title: "Rudrabhishek", description: "Invokes Shiva’s blessings, peace and purification.", img: "https://i.ibb.co/B506r447/Rudrabhishek.webp" },
    { title: "Satyanarayan Puja", description: "Brings peace, prosperity and family harmony.", img: "https://i.ibb.co/Fb0PLxm9/Satyanarayan-Puja.webp" }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-[#1C090D] py-12 px-6 md:px-10 lg:px-20 text-[#F9F6F6]">
        <div className="max-w-[1600px] mx-auto">
        
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-[24px] bg-[#FFF8F6] border border-[#E8C37D]/30 p-8 md:p-16 mb-16 text-center shadow-xl">
          {/* Subtle Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FDF6F4] via-[#FFF8F6] to-[#FFF8F6] pointer-events-none"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 max-w-3xl mx-auto flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 bg-[#feebd2] border border-[#E8C37D]/50 text-[#78550e] px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6">
              <span className="text-sm">ॐ</span> SACRED CATALOGUE
            </div>
            
            <h1 className="text-[36px] leading-[44px] md:text-[56px] md:leading-[68px] font-display font-bold text-[#3D1A22] mb-6">
              Vedic Pujas & <span className="text-[#c59a4e] italic">Rituals</span>
            </h1>
            
            <p className="text-[14px] leading-[23px] md:text-[16px] md:leading-[27px] text-[#5C3B43]">
              Explore our comprehensive catalogue of authentic Vedic pujas. Every ritual is performed by expert Sanskrit acharyas with strict adherence to ancient scriptures, precise mantra intonation, and unadulterated samagri.
            </p>
          </motion.div>
        </div>

        {/* Pujas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16 pt-6">
          {vedicPujas.map((puja, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              key={index}
              className="bg-[#45131E] rounded-[16px] p-4 border border-[#5C1E2B] shadow-xl hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between text-center"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-full relative aspect-video overflow-hidden rounded-[12px] mb-4 bg-black/25">
                  <img 
                    src={puja.img} 
                    alt={puja.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#45131E]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <h3 className="text-[20px] font-display font-bold text-[#F9F6F6] mb-2 group-hover:text-[#E8C37D] transition-colors">
                  {puja.title}
                </h3>
                <p className="text-[13px] leading-[20px] text-[#C2B5B7] mb-6">
                  {puja.description}
                </p>
              </div>

              <div className="w-full pt-1">
                <button className="w-full bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] hover:from-[#E66000] hover:to-[#E67E00] text-white py-2.5 px-4 rounded-lg font-bold text-xs transition-all shadow-[0_4px_15px_rgba(255,107,0,0.3)] flex items-center justify-center">
                  📞 BOOK NOW
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>

    {/* Now in your city (Service Areas) Section */}
    <ServiceAreas />
  </div>
);
}
