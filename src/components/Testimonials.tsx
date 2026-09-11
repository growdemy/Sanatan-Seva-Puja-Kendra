import { Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Testimonials() {
  const reviews = [
    {
      text: "We booked Pandit Shridhar Shastri Ji for our villa's Griha Pravesh in DLF Gurugram. The purity with which he chanted Vastu slokas and explained the importance of each offering gave our family incredible peace.",
      name: "Rajesh & Sunita Mehra",
      loc: "Gurugram • Griha Pravesh"
    },
    {
      text: "Pandit Shridhar Shastri Ji's Kundli reading was extraordinarily accurate. Rather than creating fear regarding Manglik dosha, he gave simple, authentic Vedic jaap that resolved obstacles quickly.",
      name: "Col. Arvind Sharma (Retd.)",
      loc: "Noida • Kundli & Dosha Shanti"
    },
    {
      text: "Residing in London, we organized our son's Janeu Sanskar through Sanatan Seva Puja Kendra. Pandit Shridhar Ji guided the entire vidhi via Live broadcast and sent blessed prasad right on time.",
      name: "Dr. Priyadarshan Iyer",
      loc: "London, UK • Janeu Sanskar"
    },
    {
      text: "The Satyanarayan Katha performed at our home was deeply divine and peaceful. Every mantra was chanted with precise Vedic pronunciation.",
      name: "Ananya & Rohit Verma",
      loc: "Hyderabad • Satyanarayan Puja"
    },
    {
      text: "Finding an authentic Sanskrit pandit for our Bhoomi Pujan in Mumbai was effortless. Highly professional and deeply knowledgeable.",
      name: "Vikram Singhania",
      loc: "Mumbai • Bhoomi Pujan"
    }
  ];

  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section className="bg-surface-canvas py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-20 mb-16 text-center">
        <div className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-brand-gold-deep mb-4">
          <span className="w-6 h-px bg-brand-gold-base/50"></span>
          VERIFIED YAJMAN REVIEWS
          <span className="w-6 h-px bg-brand-gold-base/50"></span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-text-primary mb-4 font-bold">
          1000+ Families Blessed
        </h2>
        <p className="text-[14px] leading-[23px] md:text-[16px] md:leading-[27px] text-text-secondary max-w-2xl mx-auto">
          Read reflections from patrons who entrusted their sacred family milestones to Sanatan Seva Puja Kendra.
        </p>
      </div>

      {/* Full width marquee container with fade masks */}
      <div className="relative w-full overflow-hidden">
        {/* Left fade gradient */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-surface-canvas to-transparent z-20 pointer-events-none" />
        {/* Right fade gradient */}
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-surface-canvas to-transparent z-20 pointer-events-none" />

        <motion.div
          className="flex gap-8 w-max px-4"
          animate={{ x: ['0%', '-33.333%'] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {duplicatedReviews.map((rev, i) => (
            <div 
              key={i} 
              className="w-[360px] md:w-[420px] bg-white p-8 rounded-[24px] border border-brand-gold-base/20 shadow-sm flex flex-col justify-between shrink-0"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-brand-gold-base text-brand-gold-base" />
                  ))}
                </div>
                <p className="text-[14px] leading-[23px] md:text-[16px] md:leading-[27px] text-text-secondary mb-8 italic">
                  "{rev.text}"
                </p>
              </div>
              
              <div className="flex items-center justify-between pt-6 border-t border-brand-gold-base/10">
                <div>
                  <h4 className="font-semibold text-text-primary text-sm">{rev.name}</h4>
                  <p className="text-xs text-text-secondary mt-0.5">{rev.loc}</p>
                </div>
                <div className="bg-emerald-50 text-emerald-700 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border border-emerald-200">
                  Verified
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
