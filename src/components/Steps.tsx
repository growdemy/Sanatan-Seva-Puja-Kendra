import { Search, PhoneCall, CalendarCheck, Home } from 'lucide-react';
import { motion } from 'motion/react';

export default function Steps() {
  const steps = [
    {
      num: "01",
      icon: <Search className="w-5 h-5" />,
      title: "Select Your Puja",
      desc: "Tell us which puja you need, your preferred date, and your location.",
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
    <section className="bg-[#1C090D] py-[50px] lg:py-[80px] relative overflow-hidden border-y border-white/5">
      
      {/* Background Mandala/Texture hint */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #C59A4E 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-20 relative z-10">
        
        {/* Header Area matching Service Areas & Puja format */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <div className="inline-block bg-[#3B201A] border border-[#523326] text-[#E8C37D] px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4">
              SIMPLE 4-STEP PROCESS
            </div>
            <h2 className="text-[30px] leading-[38px] md:text-[44px] md:leading-[58px] font-display font-bold text-[#F9F6F6] mb-3">
              How to Book Pandit Ji in 4 Simple Steps
            </h2>
            <p className="text-[14px] leading-[23px] md:text-[16px] md:leading-[27px] text-[#C2B5B7] max-w-2xl">
              From selecting your sacred puja to welcoming Pandit Ji with complete samagri at your doorstep, experience an effortless spiritual journey.
            </p>
          </div>
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
              whileHover={{ y: -4 }}
              className="relative z-10 bg-[#45131E] rounded-[12px] p-6 border border-[#5C1E2B] shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#3B201A] border border-brand-gold-base text-[#E8C37D] flex items-center justify-center shadow-[0_0_15px_rgba(197,154,78,0.2)] group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <span className="text-4xl font-display text-white/10 font-bold tracking-tighter">{step.num}</span>
                </div>
                <h3 className="text-xl font-display font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-[14px] leading-[23px] md:text-[16px] md:leading-[27px] text-[#C2B5B7] mb-6">{step.desc}</p>
              </div>
              <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-wider font-semibold text-[#E8C37D] border border-[#523326] px-3 py-1.5 rounded bg-[#3B201A]/50 self-start">
                <span className="w-1 h-1 rounded-full bg-[#E8C37D]"></span>
                {step.tag}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 border border-[#5C1E2B] bg-[#3B121B] rounded-[12px] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-950/60 border border-green-500/30 flex items-center justify-center shrink-0">
              <PhoneCall className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <p className="text-white font-semibold text-base md:text-lg">Need Assistance with Booking or Muhurat Calculation?</p>
              <p className="text-[14px] leading-[23px] md:text-[15px] text-[#C2B5B7] mt-1">Our Vedic coordinators are available daily 8:00 AM - 8:00 PM IST.</p>
            </div>
          </div>
          <button className="whitespace-nowrap bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] hover:from-[#E66000] hover:to-[#E67E00] text-white font-bold px-7 py-3.5 rounded-[12px] transition-all duration-300 text-sm uppercase tracking-wider shadow-[0_4px_20px_rgba(255,107,0,0.3)] flex items-center gap-2">
            <svg className="w-4 h-4 fill-white" viewBox="0 0 122.88 122.27" xmlns="http://www.w3.org/2000/svg">
              <path d="M33.84,50.25c4.13,7.45,8.89,14.6,15.07,21.12c6.2,6.56,13.91,12.53,23.89,17.63c0.74,0.36,1.44,0.36,2.07,0.11 c0.95-0.36,1.92-1.15,2.87-2.1c0.74-0.74,1.66-1.92,2.62-3.21c3.84-5.05,8.59-11.32,15.3-8.18c0.15,0.07,0.26,0.15,0.41,0.21 l22.38,12.87c0.07,0.04,0.15,0.11,0.21,0.15c2.95,2.03,4.17,5.16,4.2,8.71c0,3.61-1.33,7.67-3.28,11.1 c-2.58,4.53-6.38,7.53-10.76,9.51c-4.17,1.92-8.81,2.95-13.27,3.61c-7,1.03-13.56,0.37-20.27-1.69 c-6.56-2.03-13.17-5.38-20.39-9.84l-0.53-0.34c-3.31-2.07-6.89-4.28-10.4-6.89C31.12,93.32,18.03,79.31,9.5,63.89 C2.35,50.95-1.55,36.98,0.58,23.67c1.18-7.3,4.31-13.94,9.77-18.32c4.76-3.84,11.17-5.94,19.47-5.2c0.95,0.07,1.8,0.62,2.25,1.44 l14.35,24.26c2.1,2.72,2.36,5.42,1.21,8.12c-0.95,2.21-2.87,4.25-5.49,6.15c-0.77,0.66-1.69,1.33-2.66,2.03 c-3.21,2.33-6.86,5.02-5.61,8.18L33.84,50.25L33.84,50.25L33.84,50.25z"/>
            </svg> Book Pandit Now
          </button>
        </div>

      </div>
    </section>
  );
}
