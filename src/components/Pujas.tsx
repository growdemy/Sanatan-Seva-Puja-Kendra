import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Puja {
  title: string;
  category: string;
  description: string;
  img: string;
}

const initialPujas: Puja[] = [
  // Vedic Pujas
  { title: "Ganesh Puja", category: "Vedic Pujas", description: "Removes obstacles and brings success.", img: "https://i.ibb.co/Sw2z4dwr/Ganesh-Puja.webp" },
  { title: "Lakshmi Puja", category: "Vedic Pujas", description: "Invokes wealth and prosperity.", img: "https://i.ibb.co/ccHF5Dng/Lakshmi-Puja.webp" },
  { title: "Durga Puja", category: "Vedic Pujas", description: "Seeks strength and divine protection.", img: "https://i.ibb.co/67yhyJjR/Durga-Puja.webp" },
  { title: "Shiva Puja", category: "Vedic Pujas", description: "Brings peace and spiritual blessings.", img: "https://i.ibb.co/0ygfkZj7/Shiva-Puja.webp" },
  { title: "Vishnu Puja", category: "Vedic Pujas", description: "Promotes harmony, stability and prosperity.", img: "https://i.ibb.co/XfL3HBxM/Vishnu-Puja.webp" },
  { title: "Hanuman Puja", category: "Vedic Pujas", description: "Invokes courage, strength and protection.", img: "https://i.ibb.co/QF5QXtcj/Hanuman-Puja.webp" },
  { title: "Saraswati Puja", category: "Vedic Pujas", description: "Supports knowledge, learning and wisdom.", img: "https://i.ibb.co/rRRVz2z8/Saraswati-Puja.webp" },
  { title: "Navagraha Puja", category: "Vedic Pujas", description: "Balances planetary influences and energies.", img: "https://i.ibb.co/xSzfKZKR/Navagraha-Puja.webp" },
  { title: "Rudrabhishek", category: "Vedic Pujas", description: "Invokes Shiva’s blessings, peace and purification.", img: "https://i.ibb.co/B506r447/Rudrabhishek.webp" },
  { title: "Satyanarayan Puja", category: "Vedic Pujas", description: "Brings peace, prosperity and family harmony.", img: "https://i.ibb.co/Fb0PLxm9/Satyanarayan-Puja.webp" },

  // Anushthans & Jaap
  { title: "Maha Mrityunjaya Anushthan", category: "Anushthans & Jaap", description: "Seeks health, protection and longevity.", img: "https://i.ibb.co/HTK7C1fN/Maha-Mrityunjaya-Anushthan.webp" },
  { title: "Navagraha Shanti Anushthan", category: "Anushthans & Jaap", description: "Pacifies planetary influences and doshas.", img: "https://i.ibb.co/mVd3mV8w/Navagraha-Shanti-Anushthan.webp" },
  { title: "Graha Shanti Anushthan", category: "Anushthans & Jaap", description: "Promotes planetary harmony and peace.", img: "https://i.ibb.co/KjG9wyjB/Graha-Shanti-Anushthan.webp" },
  { title: "Durga Saptashati Path", category: "Anushthans & Jaap", description: "Invokes protection, strength and divine grace.", img: "https://i.ibb.co/JF5MKsVB/Durga-Saptashati-Path.webp" },
  { title: "Maha Mrityunjaya Jaap", category: "Anushthans & Jaap", description: "For protection, healing and longevity.", img: "https://i.ibb.co/S74z8JHS/Maha-Mrityunjaya-Jaap.webp" },
  { title: "Sundarkand Path", category: "Anushthans & Jaap", description: "Invokes courage, devotion and positive energy.", img: "https://i.ibb.co/99GtFDgj/Sundarkand-Path.webp" },
  { title: "Havan & Yagya", category: "Anushthans & Jaap", description: "Purifies surroundings and creates positive energy.", img: "https://i.ibb.co/QF43gdNW/Havan-Yagya.webp" },

  // Marriage & Family (Using the exact 6 user-provided images for this tab)
  { title: "Marriage Delay Puja", category: "Marriage & Family", description: "Helps remove obstacles to marriage.", img: "https://i.ibb.co/Lh6G33Vj/Marriage-Delay-Puja.webp" },
  { title: "Manglik Dosha Puja", category: "Marriage & Family", description: "Seeks relief from Manglik influences.", img: "https://i.ibb.co/whc7Sq6W/Manglik-Dosha-Puja.webp" },
  { title: "Mangal Dosha Shanti", category: "Marriage & Family", description: "Pacifies Mars-related planetary effects.", img: "https://i.ibb.co/bjzGRsXz/Mangal-Dosha-Shanti.webp" },
  { title: "Nadi Dosha Puja", category: "Marriage & Family", description: "Seeks harmony and marital compatibility.", img: "https://i.ibb.co/jStwbty/Nadi-Dosha-Puja.webp" },
  { title: "Vivah Anushthan", category: "Marriage & Family", description: "Invokes blessings for a happy marriage.", img: "https://i.ibb.co/SwRSKrf3/Vivah-Anushthan.webp" },
  { title: "Family Peace Puja", category: "Marriage & Family", description: "Promotes harmony and peaceful relationships.", img: "https://i.ibb.co/pr6yNt4J/Family-Peace-Puja.webp" },

  // Health & Well-being
  { title: "Mahamrityunjaya Health Puja", category: "Health & Well-being", description: "Prayers for speedy recovery and vitality.", img: "https://i.ibb.co/B506r447/Rudrabhishek.webp" },
  { title: "Ayur Havan", category: "Health & Well-being", description: "For long life and freedom from ailments.", img: "https://i.ibb.co/Fb0PLxm9/Satyanarayan-Puja.webp" },
  { title: "Dhanwantari Puja", category: "Health & Well-being", description: "Invokes the divine physician for healing.", img: "https://i.ibb.co/XfL3HBxM/Vishnu-Puja.webp" },
  { title: "Surya Arghya & Puja", category: "Health & Well-being", description: "Brings vitality, energy and inner strength.", img: "https://i.ibb.co/Sw2z4dwr/Ganesh-Puja.webp" },

  // Wealth, Career & Business
  { title: "Kuber Puja", category: "Wealth, Career & Business", description: "Attracts wealth and financial stability.", img: "https://i.ibb.co/ccHF5Dng/Lakshmi-Puja.webp" },
  { title: "Vyapar Vriddhi Puja", category: "Wealth, Career & Business", description: "Boosts business growth and success.", img: "https://i.ibb.co/ccHF5Dng/Lakshmi-Puja.webp" },
  { title: "Career Success Havan", category: "Wealth, Career & Business", description: "Removes hurdles in promotions and job search.", img: "https://i.ibb.co/Sw2z4dwr/Ganesh-Puja.webp" },
  { title: "Baglamukhi Puja", category: "Wealth, Career & Business", description: "Protects from enemies, debts and legal issues.", img: "https://i.ibb.co/67yhyJjR/Durga-Puja.webp" },

  // Peace, Protection & Dosha Shanti
  { title: "Kaal Sarp Dosha Shanti", category: "Peace, Protection & Dosha Shanti", description: "Mitigates ill-effects of Kaal Sarp yoga.", img: "https://i.ibb.co/0ygfkZj7/Shiva-Puja.webp" },
  { title: "Pitra Dosh Nivaran", category: "Peace, Protection & Dosha Shanti", description: "Seeks ancestors' blessings and clears obstacles.", img: "https://i.ibb.co/Fb0PLxm9/Satyanarayan-Puja.webp" },
  { title: "Shani Shanti Puja", category: "Peace, Protection & Dosha Shanti", description: "Pacifies Saturn's malefic effects (Sade Sati).", img: "https://i.ibb.co/0ygfkZj7/Shiva-Puja.webp" },
  { title: "Rahu Ketu Shanti", category: "Peace, Protection & Dosha Shanti", description: "Brings calm and clarity during planetary transits.", img: "https://i.ibb.co/xSzfKZKR/Navagraha-Puja.webp" },

  // Home & Vastu
  { title: "Griha Pravesh Puja", category: "Home & Vastu", description: "Blesses a new home with purity and positivity.", img: "https://i.ibb.co/Fb0PLxm9/Satyanarayan-Puja.webp" },
  { title: "Vastu Shanti Puja", category: "Home & Vastu", description: "Rectifies architectural and spatial defects.", img: "https://i.ibb.co/Sw2z4dwr/Ganesh-Puja.webp" },
  { title: "Bhoomi Pujan", category: "Home & Vastu", description: "Sanctifies land before construction begins.", img: "https://i.ibb.co/Sw2z4dwr/Ganesh-Puja.webp" },
  { title: "Griha Shanti Puja", category: "Home & Vastu", description: "Brings peace and positivity to the home.", img: "https://i.ibb.co/Fb0PLxm9/Satyanarayan-Puja.webp" }
];

export default function Pujas() {
  const tabs = [
    "Vedic Pujas",
    "Anushthans & Jaap",
    "Marriage & Family",
    "Health & Well-being",
    "Wealth, Career & Business",
    "Peace, Protection & Dosha Shanti",
    "Home & Vastu"
  ];
  
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const filteredPujas = initialPujas.filter(p => p.category === activeTab);

  return (
    <section className="bg-[#1C090D] py-[50px] lg:py-[80px] border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-20">
        
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block bg-[#3B201A] border border-[#523326] text-[#E8C37D] px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4">
              SACRED CATALOGUE
            </div>
            <h2 className="text-[30px] leading-[38px] md:text-[44px] md:leading-[58px] font-display font-bold text-[#F9F6F6] mb-3">
              Popular Pujas & Anushthans
            </h2>
            <p className="text-[14px] leading-[23px] md:text-[16px] md:leading-[27px] text-[#C2B5B7]">
              Filtered by occasion, each performed according to classical Shastra vidhi with your verified puja images.
            </p>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto pb-4 -mx-6 px-6 lg:mx-0 lg:px-0 lg:pb-0 hide-scrollbar gap-3 mb-10">
          {tabs.map((tab, i) => (
            <button 
              key={i} 
              onClick={() => setActiveTab(tab)}
              className={`relative whitespace-nowrap px-5 py-2 rounded-[30px] text-[14px] font-semibold transition-colors ${
                activeTab === tab 
                  ? 'text-[#5C4515]' 
                  : 'bg-[#2E161B] border border-[#482D33] text-[#F9F6F6] hover:bg-[#361B21]'
              }`}
            >
              {activeTab === tab && (
                <motion.div 
                  layoutId="pujaTab"
                  className="absolute inset-0 bg-[#FAD477] rounded-[30px]"
                  style={{ zIndex: 0 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{tab} ({initialPujas.filter(p => p.category === tab).length})</span>
            </button>
          ))}
        </div>

        {/* Grid / Mobile Carousel */}
        <motion.div layout className="flex md:grid items-stretch overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:grid-cols-2 lg:grid-cols-5 gap-[16px] md:gap-[20px] pb-6 pr-6 md:pr-0 hide-scrollbar">
          <AnimatePresence mode="popLayout">
            {filteredPujas.map((puja, index) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={puja.title + index} 
                className="bg-[#45131E] rounded-[12px] p-[10px] border border-[#5C1E2B] shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300 group flex flex-col h-full w-[68vw] sm:w-[45vw] md:w-auto snap-start flex-shrink-0"
              >
                <div className="relative aspect-video overflow-hidden rounded-[12px] mb-4 bg-black/25 flex-shrink-0">
                  <img 
                    src={puja.img} 
                    alt={puja.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#45131E]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="px-2 flex flex-col flex-grow justify-between text-center items-center">
                  <div>
                    <h3 className="text-[20px] font-display font-bold text-white mb-2 leading-snug">{puja.title}</h3>
                    <p className="text-[13px] leading-[18px] text-[#C4B2B4] mb-6">{puja.description}</p>
                  </div>
                  <div>
                    <button className="bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] hover:from-[#E66000] hover:to-[#E67E00] text-white font-bold py-[9px] px-[16px] rounded-[8px] inline-flex items-center justify-center gap-2 text-[13px] uppercase tracking-wider transition-all duration-300 shadow-[0_4px_14px_rgba(255,107,0,0.3)] hover:-translate-y-0.5">
                      📞 BOOK NOW
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
