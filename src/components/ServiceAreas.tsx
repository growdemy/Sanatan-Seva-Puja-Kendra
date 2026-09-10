import { useState } from 'react';
import { MapPin } from 'lucide-react';

export default function ServiceAreas() {
  const locations = [
    "Gachibowli", "Banjara Hills", "Madhapur", "Jubilee Hills", "Kondapur",
    "Kukatpally", "Hitech City", "Secunderabad", "Begumpet", "Miyapur",
    "Uppal", "Dilsukhnagar", "Ameerpet"
  ];
  
  const cities = ["Hyderabad", "Delhi NCR", "Bengaluru", "Mumbai & Pune", "Varanasi / Kashi"];
  const [activeCity, setActiveCity] = useState(cities[0]);

  return (
    <section className="bg-[#FCF6F4] py-20 lg:py-28 border-t border-[#F2E5DD]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20">
        
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-[#FEEBD2] text-[#78550E] text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-[50px] mb-6 shadow-none">
              SERVING EVERYWHERE
            </div>
            <h2 className="text-[40px] md:text-[54px] leading-tight font-display text-[#3D1A22] mb-3 font-bold">
              Now in your city
            </h2>
            <p className="text-[17px] text-[#5C4D50] leading-relaxed">
              Our pandits are stationed across the city for quick, same-day availability.
            </p>
          </div>
          
          {/* City Pills */}
          <div className="w-full lg:w-auto min-w-0 flex-1 lg:flex-none">
            <div className="flex overflow-x-auto pb-2 -mx-6 px-6 lg:mx-0 lg:px-0 lg:pb-0 hide-scrollbar gap-3 lg:justify-end">
              {cities.map((city, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveCity(city)}
                  className={`whitespace-nowrap px-5 py-2.5 rounded-full text-[14px] font-semibold border shrink-0 transition-colors ${
                    city === activeCity 
                      ? 'bg-[#5C1E2B] text-white border-[#5C1E2B]' 
                      : 'bg-white text-[#3D1A22] border-[#E8E1DE] hover:bg-gray-50'
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-[#E8E1DE] mb-12"></div>

        {/* Locations Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {locations.map((loc, i) => (
            <div key={i} className="flex items-center gap-3 bg-white border border-[#E8E1DE] px-5 py-4 rounded-[16px]">
              <span className="text-[18px]">📍</span>
              <span className="text-[15px] font-semibold text-[#1A1A1A]">{loc}</span>
            </div>
          ))}
        </div>
        
        {/* Full Width Bottom Banner */}
        <div className="w-full bg-[#FCF8F5] border border-[#F2D7B9] rounded-[20px] py-4 flex items-center justify-center gap-2 mt-4">
          <span className="text-[18px]">🗺️</span>
          <span className="text-[16px] font-bold text-[#1A1A1A]">Any Areas Of {activeCity}</span>
        </div>

      </div>
    </section>
  );
}
