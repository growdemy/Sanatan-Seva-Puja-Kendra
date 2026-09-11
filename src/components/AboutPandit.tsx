import { Calendar, Leaf, Languages, ArrowRight, BadgeCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutPandit() {
  return (
    <section className="bg-[#FDF9F7] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-20 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Image Column */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="bg-[#F7EBE8] rounded-[40px] p-4 lg:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            <div className="relative rounded-[28px] overflow-hidden bg-[#3D1A22]">
              <img 
                src="https://images.unsplash.com/photo-1542037920-56277b5a1762?w=800&h=1000&fit=crop" 
                alt="Pandit Shridhar Shastri Ji" 
                className="w-full aspect-[4/5] object-cover object-top opacity-90"
              />
              
              {/* Stat Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/70 backdrop-blur-md rounded-full p-2 pl-6 pr-3 flex items-center justify-between border border-white/40 shadow-sm">
                  <div>
                    <p className="text-[24px] font-display font-bold text-[#45131E] leading-tight">27<span className="text-[#45131E]">+</span> Years</p>
                    <p className="text-[13px] text-[#5C4D50] font-medium leading-none mt-1">Sacred Tapasya & Vedic Vidya</p>
                  </div>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#D4B07B] text-[#5C4515]">
                     <BadgeCheck className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Base platform line */}
            <div className="mt-4 px-2 flex justify-between items-center text-[12px] text-[#5C4D50] font-medium">
              <span>Sampurnanand Sanskrit University</span>
              <span className="text-[#996B22]">Shastri & Acharya Title</span>
            </div>
          </div>
        </motion.div>

        {/* Right Content Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="lg:col-span-7 lg:pl-10"
        >
          <div className="inline-flex items-center gap-2 bg-[#FEEBD2] text-[#78550E] text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-[50px] mb-6 shadow-none">
            ABOUT PANDIT SHRIDHAR SHASTRI JI
          </div>
          
          <h2 className="text-[36px] md:text-[44px] lg:text-[52px] leading-[1.1] font-display text-[#3D1A22] font-bold mb-8">
            A Quarter Century of Vedic Scholarship & <span className="text-[#8B7330] italic font-bold">Pure Devotion</span>
          </h2>
          
          <div className="space-y-6 text-[#5C4D50] text-[14px] leading-[23px] md:text-[16px] md:leading-[27px] mb-12">
            <p>
              At <strong className="text-[#3D1A22] font-semibold">Sanatan Seva Puja Kendra</strong>, Pandit Shridhar Shastri Ji brings over 27 years of deep meditative tapasya and Shastra mastery. Born into an ancestral lineage of Kashi priests, he ensures every Sanskrit mantra is enunciated with pristine cadence (Vedic Swara), infusing each ritual with palpable spiritual vibrations.
            </p>
            <p>
              Having blessed over <strong className="text-[#3D1A22] font-semibold">1000+ devotee families</strong> across India and international spiritual hubs, Pandit Ji patiently elucidates the inner psychological and cosmic significance of every ritual, making the traditional ceremony spiritually enriching for both elders and modern youth.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 mb-10">
            <div className="border border-[#EBDDD5] rounded-[24px] p-6 bg-white/40 hover:bg-white transition-colors duration-300">
              <Calendar className="w-6 h-6 text-[#7C5A29] mb-4" />
              <h3 className="font-semibold font-display text-[#3D1A22] text-[16px] mb-2">Exact Muhurat</h3>
              <p className="text-[14px] leading-[23px] md:text-[16px] md:leading-[27px] text-[#5C4D50]">Panchang calculations aligned to family Gotra.</p>
            </div>
            <div className="border border-[#EBDDD5] rounded-[24px] p-6 bg-white/40 hover:bg-white transition-colors duration-300">
              <Leaf className="w-6 h-6 text-[#7C5A29] mb-4" />
              <h3 className="font-semibold font-display text-[#3D1A22] text-[16px] mb-2">100% Shuddh Samagri</h3>
              <p className="text-[14px] leading-[23px] md:text-[16px] md:leading-[27px] text-[#5C4D50]">Organic wood, desi ghee, and pure herb ahutis.</p>
            </div>
            <div className="border border-[#EBDDD5] rounded-[24px] p-6 bg-white/40 hover:bg-white transition-colors duration-300">
              <Languages className="w-6 h-6 text-[#7C5A29] mb-4" />
              <h3 className="font-semibold font-display text-[#3D1A22] text-[16px] mb-2">Meaning Explained</h3>
              <p className="text-[14px] leading-[23px] md:text-[16px] md:leading-[27px] text-[#5C4D50]">Sacred slokas translated clearly to all participants.</p>
            </div>
          </div>

          <a href="#" className="inline-flex items-center gap-2 font-bold text-[#3D1A22] text-[17px] hover:text-[#5C4D50] transition-colors group mt-4">
            Schedule a Personal Consultation with Pandit Ji 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
