import { ChevronDown, Calendar, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function CombinedSections() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stats = [
    { num: "15K+", label: "Happy Families" },
    { num: "20K+", label: "Pujas Completed" },
    { num: "30+", label: "Experienced Pandits" },
    { num: "20+", label: "Years of Experience" }
  ];

  const faqs = [
    {
      q: "Does Pandit Shridhar Shastri Ji provide complete Puja Samagri?",
      a: "Yes, all samagri used in the puja is 100% pure, organic, and traditionally prescribed. You do not need to arrange anything unless specifically requested for personal items."
    },
    {
      q: "How is the auspicious Shubh Muhurat determined?",
      a: "Pandit Ji calculates the exact planetary alignments based on your family's Gotra, birth charts (if applicable), and current Panchang to find the most auspicious window for your ceremony."
    },
    {
      q: "Can ceremonies be conducted for devotees residing outside India?",
      a: "Yes. We offer Global E-Puja services where the complete vidhi is broadcast live from Kashi, and the sankalpa is taken in your name and Gotra. Consecrated prasad is then shipped internationally."
    },
    {
      q: "How far in advance should we schedule our ceremony?",
      a: "We recommend booking at least 1-2 weeks in advance to secure the most auspicious muhurat and allow adequate time for genuine samagri preparation, especially during major festival seasons."
    }
  ];

  return (
    <>
      {/* Stats Strip */}
      <section className="bg-[#2A1115] py-[50px] lg:py-[80px] border-y border-brand-gold-base/20 relative overflow-hidden">
        {/* Faint mandala background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #C59A4E 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-20 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center divide-x-0 lg:divide-x divide-brand-gold-base/10">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center">
                <p className="text-4xl md:text-5xl font-display font-semibold text-brand-gold-light mb-2">{stat.num}</p>
                <p className="text-sm font-semibold uppercase tracking-widest text-surface-canvas/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-surface-canvas py-[50px] lg:py-[80px]">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#FEEBD2] text-[#78550E] text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-[50px] mb-4">
              FREQUENTLY ANSWERED
            </div>
            <h2 className="text-[30px] leading-[38px] md:text-[44px] md:leading-[58px] font-display text-text-primary mb-4 font-bold">
              Vedic Inquiries & Booking Clarifications
            </h2>
            <p className="text-[14px] leading-[23px] md:text-[16px] md:leading-[27px] text-text-secondary">
              Everything you need to know about Samagri arrangements, Shubh Muhurat, and home visits.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="bg-white border border-brand-gold-base/20 rounded-lg overflow-hidden cursor-pointer hover:border-brand-gold-base/50 transition-colors shadow-sm"
              >
                <div className="p-5 flex items-center justify-between">
                  <h3 className="font-semibold text-text-primary text-sm pr-8 font-sans">{faq.q}</h3>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-brand-gold-deep shrink-0" />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-5 pt-0 text-[14px] leading-[23px] md:text-[16px] md:leading-[27px] text-text-secondary border-t border-brand-gold-base/10 mt-2 font-sans">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          
        </div>
      </section>
    </>
  );
}
