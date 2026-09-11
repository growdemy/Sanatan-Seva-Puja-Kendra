import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Pujas() {
  const [activeTab, setActiveTab] = useState("All Pujas");
  const tabs = ["All Pujas", "Griha & Vastu", "Shiva & Shakti", "Graha Shanti", "Family Sanskar"];
  
  const pujas = [
    {
      title: "Griha Pravesh & Vastu Havan",
      category: "Griha & Vastu",
      description: "Sanctifying your new residence with Vastu Purush Sthapana, Navgraha Havan, and consecrated Kalash entry for lasting prosperity.",
      img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&h=400&fit=crop"
    },
    {
      title: "Maha Rudrabhishek",
      category: "Shiva & Shakti",
      description: "Chanting Sri Rudram and Chamakam with continuous sacred Panchamrit snan over Shiva Lingam for health and spiritual upliftment.",
      img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&h=400&fit=crop"
    },
    {
      title: "Sri Satyanarayan Puja & Katha",
      category: "All Pujas",
      description: "Recitation of the 5 divine chapters of Lord Satyanarayan, sacred Tulsi archana, Havan, and ceremonial panchamrit distribution.",
      img: "https://images.unsplash.com/photo-1618635817865-c3f910fc3382?w=600&h=400&fit=crop"
    },
    {
      title: "Navgraha Shanti & Havan",
      category: "Graha Shanti",
      description: "Harmonizing planetary imbalances through specific woods, colors, and planetary mantras consecrated by Pandit Shridhar Shastri Ji.",
      img: "https://images.unsplash.com/photo-1544435607-bb22dbd668fc?w=600&h=400&fit=crop"
    },
    {
      title: "Kaal Sarp & Rahu-Ketu Shanti",
      category: "Graha Shanti",
      description: "Clearing obstructive karmic knots when all planets lie between Rahu and Ketu, alleviating stagnation in career and matrimony.",
      img: "https://images.unsplash.com/photo-1606775618774-84d41da36750?w=600&h=400&fit=crop"
    },
    {
      title: "Namkaran & Mundan Sanskar",
      category: "Family Sanskar",
      description: "Sacred naming and first tonsure rites to remove birth impurities, invoking longevity and divine intellect for the infant.",
      img: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&h=400&fit=crop"
    }
  ];

  const filteredPujas = activeTab === "All Pujas" ? pujas : pujas.filter(p => p.category === activeTab);

  return (
    <section className="bg-[#1C090D] py-[50px] border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-20">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <div className="inline-block bg-[#3B201A] border border-[#523326] text-[#E8C37D] px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4">
              SACRED CATALOGUE
            </div>
            <h2 className="text-[32px] md:text-[40px] lg:text-[44px] font-display font-bold text-[#F9F6F6] mb-3">
              Popular Pujas & Anushthans
            </h2>
            <p className="text-[14px] leading-[23px] md:text-[16px] md:leading-[27px] text-[#C2B5B7] max-w-2xl">
              Filtered by occasion, each performed according to classical Shastra vidhi.
            </p>
          </div>
          
          {/* Tabs */}
          <div className="flex overflow-x-auto pb-2 -mx-6 px-6 lg:mx-0 lg:px-0 lg:pb-0 hide-scrollbar gap-3">
            {tabs.map((tab, i) => (
              <button 
                key={i} 
                onClick={() => setActiveTab(tab)}
                className={`relative whitespace-nowrap px-6 py-2.5 rounded-[30px] text-[15px] font-semibold transition-colors ${
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
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPujas.map((puja) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={puja.title} 
                className="bg-[#45131E] rounded-[32px] p-5 border border-[#5C1E2B] shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300 group flex flex-col h-full"
              >
                <div className="relative h-[220px] overflow-hidden rounded-[20px] mb-5">
                  <img 
                    src={puja.img} 
                    alt={puja.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#45131E]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="px-2 flex flex-col flex-grow">
                  <h3 className="text-[22px] font-display font-medium text-white mb-3 leading-snug">{puja.title}</h3>
                  <p className="text-[14px] leading-[23px] md:text-[16px] md:leading-[27px] text-[#C4B2B4] mb-8 flex-grow">{puja.description}</p>
                  <button className="w-full bg-[#F4D091] hover:bg-[#EAE4E4] hover:bg-gradient-to-r hover:from-[#F0C988] hover:to-[#F4D091] text-[#340F16] font-bold py-3.5 rounded-full flex items-center justify-center gap-2 text-[13px] uppercase tracking-wider transition-all duration-300 shadow-[0_4px_14px_rgba(244,208,145,0.2)] hover:shadow-[0_6px_20px_rgba(244,208,145,0.3)] hover:-translate-y-0.5">
                    BOOK NOW <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
