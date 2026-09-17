import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin } from 'lucide-react';

export default function ServiceAreas() {
  const stateRegions: Record<string, string[]> = {
    "Telangana": ["Hyderabad", "Nizamabad", "Khammam", "Mehboobnagar", "Sangareddy", "Warangal", "Karimnagar", "Nalgonda", "Siddipet", "Suryapet"],
    "Andhra Pradesh": ["Visakhapatnam", "Guntur", "Nellore", "Vijayawada", "Tirupati", "Kurnool", "Kakinada", "Anantapur"],
    "Karnataka": ["Bengaluru"],
    "Maharashtra": ["Mumbai"],
    "Tamil Nadu": ["Chennai"]
  };

  const states = Object.keys(stateRegions);
  const [activeState, setActiveState] = useState(states[0]);
  const currentLocations = stateRegions[activeState] || [];

  return (
    <section className="bg-[#FDF9F7] py-[50px] lg:py-[80px] border-t border-[#F2E5DD]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-20">
        
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#FEEBD2] text-[#78550E] text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-[50px] mb-4 shadow-none">
              SERVICE AREAS
            </div>
            <h2 className="text-[30px] leading-[38px] md:text-[44px] md:leading-[58px] font-display font-bold text-[#3D1A22] mb-3">
              Now in your city
            </h2>
            <p className="text-[14px] leading-[23px] md:text-[16px] md:leading-[27px] text-[#5C4D50] max-w-2xl">
              Our pandits are stationed across major cities and regions for quick, same-day availability.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto pb-4 -mx-6 px-6 lg:mx-0 lg:px-0 lg:pb-0 hide-scrollbar gap-3 mb-10">
          {states.map((state, i) => (
            <button 
              key={i} 
              onClick={() => setActiveState(state)}
              className={`relative whitespace-nowrap px-5 py-2.5 rounded-[30px] text-[14px] font-semibold transition-colors ${
                activeState === state 
                  ? 'text-white' 
                  : 'bg-[#FEEBD2] border border-[#EBDDD5] text-[#3D1A22]'
              }`}
            >
              {activeState === state && (
                <motion.div 
                  layoutId="serviceStateTabLight"
                  className="absolute inset-0 bg-[#45131E] rounded-[30px]"
                  style={{ zIndex: 0 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{state} ({stateRegions[state].length})</span>
            </button>
          ))}
        </div>

        {/* Locations Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[20px]">
          <AnimatePresence mode="popLayout">
            {currentLocations.map((loc, i) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={loc + i} 
                className="bg-white rounded-[8px] md:rounded-[12px] p-[16px] border border-[#EBDDD5] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#FEEBD2] flex items-center justify-center text-[#78550E] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-[14px] md:text-[15px] font-semibold text-[#3D1A22]">{loc}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
