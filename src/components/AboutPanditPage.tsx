import { BookOpen, Star, Mic, Sparkles, Camera } from 'lucide-react';
import AboutPandit from './AboutPandit';

export default function AboutPanditPage() {
  const stats = [
    {
      num: "27+",
      title: "Years Vedic Tapasya"
    },
    {
      num: "1,000+",
      title: "Families Blessed"
    },
    {
      num: "20,000+",
      title: "Pujas Performed"
    },
    {
      num: "5+",
      title: "States Served"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDF9F7]">
      
      {/* Hero section is AboutPandit */}
      <AboutPandit />

      {/* Statistics Banner Section matching screenshot */}
      <section className="bg-[#3B121B] py-[60px] lg:py-[80px] border-y border-[#5C1E2B] text-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 text-center">
            {stats.map((stat, i) => (
              <div key={i} className={`flex flex-col items-center justify-center py-6 px-4 ${
                i === 0 ? 'border-r border-b border-[#5C1E2B] pb-8 pr-6 lg:border-b-0 lg:pr-12 lg:border-r' :
                i === 1 ? 'border-b border-[#5C1E2B] pb-8 pl-6 lg:border-b-0 lg:pl-12 lg:pr-12 lg:border-r' :
                i === 2 ? 'border-r border-[#5C1E2B] pt-8 pr-6 lg:pt-0 lg:pr-12 lg:border-r lg:border-b-0' :
                'pt-8 pl-6 lg:pt-0 lg:pl-12 lg:border-b-0'
              }`}>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#E8C37D] mb-3 tracking-tight">
                  {stat.num}
                </h3>
                <h4 className="text-[13px] md:text-[14px] text-[#C2B5B7] font-medium font-sans">
                  {stat.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional details section on About Pandit Ji page */}
      <section className="bg-[#1C090D] py-[50px] lg:py-[80px] text-white px-6 md:px-10 lg:px-20">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="inline-block bg-[#3B201A] border border-[#523326] text-[#E8C37D] px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4">
            SACRED LINEAGE & DIKSHA
          </div>
          <h2 className="text-[30px] leading-[38px] md:text-[44px] md:leading-[58px] font-display font-bold text-[#F9F6F6] mb-6">
            Strict Shastra Vidhi & Devotion
          </h2>
          <p className="text-[14px] leading-[23px] md:text-[16px] md:leading-[27px] text-[#C2B5B7] max-w-3xl mx-auto mb-12">
            Every ritual performed under the guidance of Pandit Shridhar Shastri Ji follows classical Agamic and Puranic prescriptions. From Ganapati Sthapana to Purna Ahuti, every step is executed with pristine sanctity.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-[#45131E] border border-[#5C1E2B] rounded-[16px] p-8 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-[#3B201A] border border-[#523326] flex items-center justify-center text-[#E8C37D] mb-5 shadow-sm">
                <Mic className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-semibold text-[#E8C37D] mb-3">Vedic Chant Mastery</h3>
              <p className="text-[14px] leading-[23px] text-[#C2B5B7]">Precise Swara उच्चारण to generate positive spiritual frequencies in your living space.</p>
            </div>
            <div className="bg-[#45131E] border border-[#5C1E2B] rounded-[16px] p-8 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-[#3B201A] border border-[#523326] flex items-center justify-center text-[#E8C37D] mb-5 shadow-sm">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-semibold text-[#E8C37D] mb-3">Personalized Sankalp</h3>
              <p className="text-[14px] leading-[23px] text-[#C2B5B7]">Every puja is initiated with your specific Gotra, Nakshatra, and family names.</p>
            </div>
            <div className="bg-[#45131E] border border-[#5C1E2B] rounded-[16px] p-8 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-[#3B201A] border border-[#523326] flex items-center justify-center text-[#E8C37D] mb-5 shadow-sm">
                <Camera className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-semibold text-[#E8C37D] mb-3">Verified Image Proofs</h3>
              <p className="text-[14px] leading-[23px] text-[#C2B5B7]">Receive authentic high-res photographs and videos of your puja rituals directly.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
