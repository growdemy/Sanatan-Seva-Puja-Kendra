import { Search, PhoneCall, CalendarCheck, Home } from 'lucide-react';
import { motion } from 'motion/react';

export default function Steps() {
  const steps = [
    {
      num: "01",
      icon: <Search className="w-5 h-5" />,
      title: "Select Your Puja",
      desc: "Tell us which puja you need, your preferred date, and your location in Hyderabad.",
      tag: "Transparent Vidhi List"
    },
    {
      num: "02",
      icon: <PhoneCall className="w-5 h-5" />,
      title: "Talk to an Expert",
      desc: "Our puja coordinator calls you within 15 minutes to understand your requirements in detail.",
      tag: "Call within 15 mins"
    },
    {
      num: "03",
      icon: <CalendarCheck className="w-5 h-5" />,
      title: "Confirm the Date",
      desc: "Choose a muhurat, confirm your pandit, and receive a booking confirmation instantly.",
      tag: "Instant Confirmation"
    },
    {
      num: "04",
      icon: <Home className="w-5 h-5" />,
      title: "Pandit Arrives",
      desc: "Your pandit arrives on time with all samagri. You simply relax and receive divine blessings.",
      tag: "100% Shuddh Samagri"
    }
  ];

  return (
    <section className="bg-[#2A1115] py-20 lg:py-28 relative overflow-hidden border-y border-brand-gold-base/20">
      
      {/* Background Mandala/Texture hint */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #C59A4E 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-20 relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-gold-base mb-4 border border-brand-gold-base/30 px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 rotate-45 bg-brand-gold-base"></span>
            SIMPLE 4-STEP PROCESS
            <span className="w-2 h-2 rotate-45 bg-brand-gold-base"></span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-surface-canvas mb-4">
            How to Book Pandit Ji in 4 Simple Steps
          </h2>
          <p className="text-[14px] leading-[23px] md:text-[16px] md:leading-[27px] text-surface-canvas/70 max-w-2xl mx-auto">
            From selecting your sacred puja to welcoming Pandit Ji with complete samagri at your doorstep, experience an effortless spiritual journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px border-t border-dashed border-brand-gold-base/30 overflow-hidden">
             <motion.div 
               initial={{ x: "-100%" }}
               whileInView={{ x: "0%" }}
               viewport={{ once: true }}
               transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
               className="w-full h-full border-t border-brand-gold-base"
             />
          </div>

          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-full bg-[#400A15] border border-brand-gold-base text-brand-gold-light flex items-center justify-center shadow-[0_0_15px_rgba(197,154,78,0.2)]">
                  {step.icon}
                </div>
                <span className="text-4xl font-display text-white/5 font-bold tracking-tighter">{step.num}</span>
              </div>
              <h3 className="text-xl font-display font-semibold text-surface-canvas mb-3">{step.title}</h3>
              <p className="text-[14px] leading-[23px] md:text-[16px] md:leading-[27px] text-surface-canvas/60 mb-6 lg:min-h-[80px]">{step.desc}</p>
              <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-wider font-semibold text-brand-gold-base/80 border border-brand-gold-base/20 px-3 py-1.5 rounded bg-[#400A15]/50">
                <span className="w-1 h-1 rounded-full bg-brand-gold-base"></span>
                {step.tag}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 border border-brand-gold-base/20 bg-[#400A15]/50 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-900/40 border border-green-500/30 flex items-center justify-center shrink-0">
              <PhoneCall className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <p className="text-surface-canvas font-semibold">Need Assistance with Booking or Muhurat Calculation?</p>
              <p className="text-[14px] leading-[23px] md:text-[16px] md:leading-[27px] text-surface-canvas/60 mt-1">Our Vedic coordinators are available daily 8:00 AM - 8:00 PM IST.</p>
            </div>
          </div>
          <button className="whitespace-nowrap bg-brand-gold-light hover:bg-brand-gold-base text-[#2A1115] font-semibold px-6 py-3 rounded transition-colors text-sm uppercase tracking-wider">
            START YOUR BOOKING
          </button>
        </div>

      </div>
    </section>
  );
}
