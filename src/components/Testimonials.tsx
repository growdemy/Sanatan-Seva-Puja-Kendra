import { Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Testimonials() {
  const reviews = [
    {
      text: "We booked Pandit Shridhar Shastri Ji for our villa's Griha Pravesh in DLF Gurugram. The purity with which he chanted Vastu slokas and explained the importance of each offering gave our family incredible peace.",
      name: "Rajesh & Sunita Mehra",
      loc: "Gurugram",
      puja: "Griha Pravesh Puja",
      initials: "RM"
    },
    {
      text: "Pandit Shridhar Shastri Ji's Kundli reading was extraordinarily accurate. Rather than creating fear regarding Manglik dosha, he gave simple, authentic Vedic jaap that resolved obstacles quickly.",
      name: "Col. Arvind Sharma (Retd.)",
      loc: "Noida",
      puja: "Dosha Shanti Puja",
      initials: "AS"
    },
    {
      text: "Residing in London, we organized our son's Janeu Sanskar through Sanatan Seva Puja Kendra. Pandit Shridhar Ji guided the entire vidhi via Live broadcast and sent blessed prasad right on time.",
      name: "Dr. Priyadarshan Iyer",
      loc: "London, UK",
      puja: "Janeu Sanskar",
      initials: "PI"
    },
    {
      text: "The Satyanarayan Katha performed at our home was deeply divine and peaceful. Every mantra was chanted with precise Vedic pronunciation.",
      name: "Ananya & Rohit Verma",
      loc: "Hyderabad",
      puja: "Satyanarayan Puja",
      initials: "AV"
    },
    {
      text: "Finding an authentic Sanskrit pandit for our Bhoomi Pujan in Mumbai was effortless. Highly professional and deeply knowledgeable.",
      name: "Vikram Singhania",
      loc: "Mumbai",
      puja: "Bhoomi Pujan",
      initials: "VS"
    }
  ];

  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section className="bg-surface-canvas py-[50px] lg:py-[80px] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-20 mb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-[#FEEBD2] text-[#78550E] text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-[50px] mb-4">
          VERIFIED YAJMAN REVIEWS
        </div>
        <h2 className="text-[30px] leading-[38px] md:text-[44px] md:leading-[58px] font-display text-text-primary mb-4 font-bold">
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
              className="w-[360px] md:w-[420px] bg-white p-8 rounded-[16px] border border-[#EBDDD5] shadow-sm flex flex-col justify-between shrink-0"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#45131E] text-white font-bold text-sm flex items-center justify-center shrink-0">
                    {rev.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#3D1A22] text-base font-sans">{rev.name}</h4>
                    <p className="text-sm text-[#78550E] flex items-center gap-1 mt-0.5 font-sans">
                      <span>📍</span> {rev.loc}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-[15px] leading-[24px] text-[#3D1A22] mb-8 font-sans">
                  {rev.text}
                </p>
              </div>
              
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B00] font-sans">
                  {rev.puja}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
