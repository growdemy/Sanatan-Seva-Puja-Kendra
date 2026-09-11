import { useState } from 'react';
import { Award, Flame, UserCog, MapPinHouse, BadgeCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const features = [
    {
      icon: <Award className="w-7 h-7 text-[#46111D]" />,
      bg: "bg-[#FEEBD2]",
      title: "27+ Years Tapasya",
      description: "Gurukul-trained Acharya of Sampurnanand Sanskrit Vishwavidyalaya."
    },
    {
      icon: <Flame className="w-7 h-7 text-[#78550E]" />,
      bg: "bg-[#FEEBD2]",
      title: "Sacred Vedic Havans",
      description: "Pure cow ghee, herbs, dried mango woods, and authentic swaras."
    },
    {
      icon: <UserCog className="w-7 h-7 text-[#46111D]" />,
      bg: "bg-[#FEEBD2]",
      title: "1000+ Blessed Families",
      description: "Personalized Gotra Sankalpa, Nakshatra analysis, and Vedic advice."
    },
    {
      icon: <MapPinHouse className="w-7 h-7 text-[#78550E]" />,
      bg: "bg-[#FEEBD2]",
      title: "Doorstep & Global E-Puja",
      description: "Full temple setup at your residence or direct live broadcast from Kashi."
    }
  ];

  return (
    <section className="bg-gradient-to-b from-[#FDF6F4] to-[#FFF8F6] py-[50px] border-t border-brand-gold-base/10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-20 text-center">
        
        <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#78550E] mb-6 bg-[#FEEBD2] px-4 py-2 rounded-[50px] shadow-none">
          <BadgeCheck className="w-4 h-4" />
          WHY CHOOSE US
        </div>
        
        <h2 className="text-[30px] md:text-[44px] font-display text-brand-primary-deep mb-[10px] font-bold">
          Why Families Choose Sanatan Seva Puja Kendra
        </h2>
        
        <p className="text-[14px] leading-[23px] md:text-[16px] md:leading-[27px] text-text-secondary max-w-3xl mx-auto mb-[40px]">
          Authentic Vedic rituals performed with genuine devotion, pure samagri, and complete peace of mind for your home and family.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                key={index} 
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative cursor-pointer group rounded-[12px] h-full flex flex-col overflow-hidden"
              >
                {/* Top linear gradient animation line on hover */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[12px] z-20 pointer-events-none"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    background: 'linear-gradient(90deg, #FFAA38 0%, #45131E 100%)',
                  }}
                />

                <div className={`relative z-10 bg-white p-8 rounded-[12px] text-left transition-all duration-300 flex flex-col justify-between flex-1 border border-transparent ${isHovered ? 'shadow-[0_20px_50px_-10px_rgba(217,107,38,0.25)]' : 'shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)]'}`}>
                  <div>
                    <div className={`w-[60px] h-[60px] shrink-0 rounded-[12px] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 mb-6 ${feature.bg}`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-display font-bold text-brand-primary-deep mb-2.5">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-[14px] leading-[23px] md:text-[16px] md:leading-[27px] text-text-secondary">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
