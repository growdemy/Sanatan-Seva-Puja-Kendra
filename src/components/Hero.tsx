import { Calendar, MessageSquareText, Star, Sparkles, Lock, Zap, CheckSquare, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const flares = [
    { left: '15%', top: '25%', size: 4, delay: 0, duration: 6 },
    { left: '85%', top: '15%', size: 6, delay: 1.5, duration: 8 },
    { left: '50%', top: '40%', size: 3, delay: 2, duration: 5 },
    { left: '25%', top: '75%', size: 5, delay: 0.5, duration: 7 },
    { left: '75%', top: '80%', size: 4, delay: 3, duration: 6 },
    { left: '40%', top: '85%', size: 7, delay: 2.5, duration: 9 },
    { left: '10%', top: '60%', size: 5, delay: 1, duration: 6 },
    { left: '90%', top: '50%', size: 3, delay: 4, duration: 7 },
    { left: '60%', top: '20%', size: 5, delay: 2.5, duration: 8 },
  ];

  return (
    <section className="relative pt-12 lg:pt-20 pb-16 lg:pb-24 overflow-hidden flex items-center min-h-[90vh]">
      
      {/* Animated Light Gradient Background */}
      <motion.div 
        className="absolute inset-0 z-0 bg-[linear-gradient(45deg,#FDF6F4,#FFF8F6,#FDF6F4,#FFF8F6)]"
        style={{ backgroundSize: '400% 400%' }}
        animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      />

      {/* Moving Flares */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {flares.map((flare, i) => (
          <motion.div
            key={`flare-${i}`}
            className="absolute rounded-full bg-brand-gold-base"
            style={{
              width: flare.size,
              height: flare.size,
              left: flare.left,
              top: flare.top,
              boxShadow: '0 0 12px 3px rgba(232, 195, 125, 0.6)',
            }}
            animate={{
              y: [0, -60, 0],
              x: [0, (i % 2 === 0 ? 30 : -30), 0],
              opacity: [0, 0.9, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: flare.duration,
              repeat: Infinity,
              delay: flare.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* Animated Mandala Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.svg 
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="w-[120vw] h-[120vw] md:w-[70vw] md:h-[70vw] max-w-[1000px] max-h-[1000px] text-[#B3796E] opacity-[0.05] drop-shadow-[0_0_20px_rgba(179,121,110,0.03)]" 
          viewBox="0 0 800 800" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="400" cy="400" r="80" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="400" cy="400" r="180" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="400" cy="400" r="280" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="400" cy="400" r="380" stroke="currentColor" strokeWidth="1.5" strokeDasharray="12 12"/>
          
          {Array.from({ length: 8 }).map((_, i) => (
            <g key={i} transform={`rotate(${i * 45} 400 400)`}>
              <path d="M 400 280 C 430 230 430 130 400 80 C 370 130 370 230 400 280" fill="currentColor" />
              <line x1="400" y1="400" x2="400" y2="40" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 8" />
              <circle cx="400" cy="40" r="4" fill="currentColor" />
            </g>
          ))}
          {/* Center piece */}
          <g transform="translate(400, 400) scale(0.65) translate(-57.67, -61.44)" fill="currentColor">
            <path d="M1.16,65.32l5.81-1.67l0.25,1.64c1.04,6.68,2.66,12.72,4.86,18.11c2.19,5.35,4.96,10.08,8.32,14.17l0,0 c3.31,4.03,6.86,7.05,10.66,9.05c3.75,1.98,7.77,2.97,12.05,2.97c2.18,0,4.17-0.38,5.97-1.15c1.81-0.77,3.45-1.92,4.94-3.47 c1.49-1.56,2.61-3.29,3.35-5.19c0.74-1.9,1.11-3.99,1.11-6.27c0-4.29-0.87-8.38-2.61-12.27c-1.56-3.47-3.82-6.79-6.79-9.98 c-1.67,2.11-3.46,3.98-5.38,5.6c-2.34,1.98-4.86,3.57-7.57,4.8l-1.36,0.62l-6.51-15.33l1.58-0.46c5.6-1.63,9.76-3.76,12.51-6.38 c2.61-2.5,3.92-5.47,3.92-8.93c0-1.3-0.18-2.42-0.55-3.35c-0.34-0.87-0.86-1.6-1.54-2.19l0,0c-0.73-0.6-1.66-1.06-2.78-1.38 c-1.2-0.33-2.62-0.5-4.29-0.5c-2.51,0-5.08,0.38-7.71,1.14c-2.66,0.77-5.4,1.93-8.22,3.49l-1.44,0.8l-6.26-15.45l1.25-0.59 c2.5-1.19,5.06-2.09,7.67-2.69c2.61-0.6,5.26-0.9,7.94-0.9c3.59,0,6.86,0.6,9.81,1.78c2.97,1.2,5.59,2.99,7.86,5.37 c2.26,2.37,3.96,5.11,5.08,8.2c1.12,3.08,1.68,6.49,1.68,10.24c0,1.65-0.16,3.2-0.48,4.67C54.06,60.94,53.73,62,53.3,63l0.56,0.52 c3.12-2.84,6.18-5.02,9.19-6.52c3.42-1.71,6.76-2.56,10.05-2.56c0.32,0,0.72,0.03,1.21,0.08c1.28-5.79,3.47-10.21,6.55-13.26 c3.4-3.36,7.82-5.04,13.27-5.04c3.54,0,6.66,0.73,9.35,2.2c2.69,1.47,4.93,3.65,6.7,6.57l0,0c1.74,2.83,3.03,6.35,3.89,10.55 c0.85,4.15,1.27,8.95,1.27,14.41c0,5.56-0.53,10.56-1.59,14.99c-1.07,4.48-2.68,8.4-4.83,11.75c-2.19,3.4-4.77,5.96-7.75,7.68 c-3,1.73-6.37,2.6-10.12,2.6c-2.65,0-4.94-0.44-6.86-1.31c-1.99-0.9-3.57-2.25-4.76-4.04c-1.14-1.72-1.98-3.98-2.54-6.78 c-0.53-2.71-0.8-5.95-0.8-9.71v-5.59c0-3.21-0.4-5.57-1.2-7.08c-0.64-1.2-1.58-1.8-2.82-1.8c-1.36,0-2.92,0.37-4.67,1.1 c-1.51,0.63-3.13,1.52-4.87,2.66c2.87,4.03,5.05,8.01,6.56,11.92c1.68,4.36,2.52,8.64,2.52,12.83c0,3.51-0.58,6.69-1.73,9.55 c-1.16,2.88-2.91,5.41-5.24,7.61c-2.32,2.18-5.02,3.83-8.08,4.92c-3.03,1.09-6.4,1.63-10.1,1.63c-6,0-11.61-1.36-16.84-4.07 c-5.2-2.7-9.99-6.72-14.37-12.08l0,0c-4.36-5.31-7.81-11.3-10.33-17.96C2.41,82.12,0.8,74.81,0.1,66.85L0,65.65L1.16,65.32 L1.16,65.32z M81.13,57.02c1.01,0.83,1.81,1.96,2.38,3.39c0.72,1.8,1.09,4.08,1.09,6.83v13.49c0,4.22,0.63,7.33,1.9,9.34 c1.13,1.79,2.85,2.69,5.16,2.69c2.14,0,4.09-0.49,5.86-1.47c1.79-1,3.42-2.52,4.88-4.55l0.01-0.01c1.48-2.05,2.59-4.39,3.33-7.01 c0.75-2.65,1.13-5.58,1.13-8.8c0-3.13-0.34-5.95-1.03-8.46c-0.67-2.47-1.68-4.66-3.03-6.55c-1.31-1.85-2.8-3.23-4.47-4.14 c-1.64-0.89-3.49-1.34-5.54-1.34c-2.86,0-5.3,0.64-7.32,1.91C83.75,53.42,82.31,54.98,81.13,57.02L81.13,57.02z M38.08,15.85 l4.91-3.63l0.87,1.13c2.22,2.87,4.64,5.02,7.26,6.44c2.59,1.4,5.41,2.1,8.45,2.1c2.82,0,5.44-0.7,7.87-2.08 c2.49-1.42,4.79-3.57,6.92-6.44l0.92-1.24l12.76,10.64l-1.07,1.13c-3.49,3.67-7.01,6.44-10.56,8.29 c-3.62,1.89-7.28,2.83-10.97,2.83c-5.51,0-10.6-1.45-15.26-4.36c-4.6-2.87-8.76-7.15-12.47-12.84l-0.75-1.15L38.08,15.85 L38.08,15.85z M62.29,1.02l8.88,9.03l-9.95,9.75L51.15,9.46L61.3,0L62.29,1.02L62.29,1.02z"/>
          </g>
        </motion.svg>
      </div>

      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-[#FFEBEB]/70 via-[#FDF6F5]/30 to-transparent opacity-80 pointer-events-none transform translate-x-1/4 -translate-y-1/4 z-0"></div>
      
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-20 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 w-full">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 bg-[#FEEBD2] text-[#78550E] text-[12px] font-bold uppercase tracking-widest px-4 py-[6px] rounded-[50px] mb-8 shadow-none">
            <svg className="w-[12px] h-[12px]" viewBox="0 0 115.35 122.88" fill="currentColor">
              <path d="M1.16,65.32l5.81-1.67l0.25,1.64c1.04,6.68,2.66,12.72,4.86,18.11c2.19,5.35,4.96,10.08,8.32,14.17l0,0 c3.31,4.03,6.86,7.05,10.66,9.05c3.75,1.98,7.77,2.97,12.05,2.97c2.18,0,4.17-0.38,5.97-1.15c1.81-0.77,3.45-1.92,4.94-3.47 c1.49-1.56,2.61-3.29,3.35-5.19c0.74-1.9,1.11-3.99,1.11-6.27c0-4.29-0.87-8.38-2.61-12.27c-1.56-3.47-3.82-6.79-6.79-9.98 c-1.67,2.11-3.46,3.98-5.38,5.6c-2.34,1.98-4.86,3.57-7.57,4.8l-1.36,0.62l-6.51-15.33l1.58-0.46c5.6-1.63,9.76-3.76,12.51-6.38 c2.61-2.5,3.92-5.47,3.92-8.93c0-1.3-0.18-2.42-0.55-3.35c-0.34-0.87-0.86-1.6-1.54-2.19l0,0c-0.73-0.6-1.66-1.06-2.78-1.38 c-1.2-0.33-2.62-0.5-4.29-0.5c-2.51,0-5.08,0.38-7.71,1.14c-2.66,0.77-5.4,1.93-8.22,3.49l-1.44,0.8l-6.26-15.45l1.25-0.59 c2.5-1.19,5.06-2.09,7.67-2.69c2.61-0.6,5.26-0.9,7.94-0.9c3.59,0,6.86,0.6,9.81,1.78c2.97,1.2,5.59,2.99,7.86,5.37 c2.26,2.37,3.96,5.11,5.08,8.2c1.12,3.08,1.68,6.49,1.68,10.24c0,1.65-0.16,3.2-0.48,4.67C54.06,60.94,53.73,62,53.3,63l0.56,0.52 c3.12-2.84,6.18-5.02,9.19-6.52c3.42-1.71,6.76-2.56,10.05-2.56c0.32,0,0.72,0.03,1.21,0.08c1.28-5.79,3.47-10.21,6.55-13.26 c3.4-3.36,7.82-5.04,13.27-5.04c3.54,0,6.66,0.73,9.35,2.2c2.69,1.47,4.93,3.65,6.7,6.57l0,0c1.74,2.83,3.03,6.35,3.89,10.55 c0.85,4.15,1.27,8.95,1.27,14.41c0,5.56-0.53,10.56-1.59,14.99c-1.07,4.48-2.68,8.4-4.83,11.75c-2.19,3.4-4.77,5.96-7.75,7.68 c-3,1.73-6.37,2.6-10.12,2.6c-2.65,0-4.94-0.44-6.86-1.31c-1.99-0.9-3.57-2.25-4.76-4.04c-1.14-1.72-1.98-3.98-2.54-6.78 c-0.53-2.71-0.8-5.95-0.8-9.71v-5.59c0-3.21-0.4-5.57-1.2-7.08c-0.64-1.2-1.58-1.8-2.82-1.8c-1.36,0-2.92,0.37-4.67,1.1 c-1.51,0.63-3.13,1.52-4.87,2.66c2.87,4.03,5.05,8.01,6.56,11.92c1.68,4.36,2.52,8.64,2.52,12.83c0,3.51-0.58,6.69-1.73,9.55 c-1.16,2.88-2.91,5.41-5.24,7.61c-2.32,2.18-5.02,3.83-8.08,4.92c-3.03,1.09-6.4,1.63-10.1,1.63c-6,0-11.61-1.36-16.84-4.07 c-5.2-2.7-9.99-6.72-14.37-12.08l0,0c-4.36-5.31-7.81-11.3-10.33-17.96C2.41,82.12,0.8,74.81,0.1,66.85L0,65.65L1.16,65.32 L1.16,65.32z M81.13,57.02c1.01,0.83,1.81,1.96,2.38,3.39c0.72,1.8,1.09,4.08,1.09,6.83v13.49c0,4.22,0.63,7.33,1.9,9.34 c1.13,1.79,2.85,2.69,5.16,2.69c2.14,0,4.09-0.49,5.86-1.47c1.79-1,3.42-2.52,4.88-4.55l0.01-0.01c1.48-2.05,2.59-4.39,3.33-7.01 c0.75-2.65,1.13-5.58,1.13-8.8c0-3.13-0.34-5.95-1.03-8.46c-0.67-2.47-1.68-4.66-3.03-6.55c-1.31-1.85-2.8-3.23-4.47-4.14 c-1.64-0.89-3.49-1.34-5.54-1.34c-2.86,0-5.3,0.64-7.32,1.91C83.75,53.42,82.31,54.98,81.13,57.02L81.13,57.02z M38.08,15.85 l4.91-3.63l0.87,1.13c2.22,2.87,4.64,5.02,7.26,6.44c2.59,1.4,5.41,2.1,8.45,2.1c2.82,0,5.44-0.7,7.87-2.08 c2.49-1.42,4.79-3.57,6.92-6.44l0.92-1.24l12.76,10.64l-1.07,1.13c-3.49,3.67-7.01,6.44-10.56,8.29 c-3.62,1.89-7.28,2.83-10.97,2.83c-5.51,0-10.6-1.45-15.26-4.36c-4.6-2.87-8.76-7.15-12.47-12.84l-0.75-1.15L38.08,15.85 L38.08,15.85z M62.29,1.02l8.88,9.03l-9.95,9.75L51.15,9.46L61.3,0L62.29,1.02L62.29,1.02z"/>
            </svg>
            SANATAN SEVA PUJA KENDRA
          </div>
          
          <h1 className="text-[36px] leading-[40px] md:text-5xl lg:text-[56px] md:leading-[1.15] font-display text-brand-primary-deep font-bold mb-6">
            Sanctified Vedic Rites for Life's <span className="text-brand-gold-base italic">Auspicious Blessings</span>
          </h1>
          
          <p className="font-medium text-[14px] leading-[23px] md:text-[16px] md:leading-[27px] text-text-secondary mb-10 max-w-[540px]">
            Experience authentic Shastra-ordained Pujas, Havans, and Jyotish consultations conducted by <strong className="font-semibold text-text-primary">Pandit Shridhar Shastri Ji</strong> with uncompromised Sanskrit Vedic Swara and 100% Shuddh Samagri.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mb-8 font-medium text-[12px] leading-[22px] md:text-[13px] md:leading-[22px] text-[#3D1A22]">
            <div className="flex items-center gap-2">
              <span className="text-base">⭐</span>
              <span>4.8/5 Rating</span>
            </div>
            <div className="w-[1px] h-4 bg-[#E8C37D]/60 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-base">🙏</span>
              <span>1000+ Happy Families</span>
            </div>
            <div className="w-[1px] h-4 bg-[#E8C37D]/60 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-base">📅</span>
              <span>27+ Years Experience</span>
            </div>
            <div className="w-[1px] h-4 bg-[#E8C37D]/60 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-base">✅</span>
              <span>30+ Verified Pandits</span>
            </div>
            <div className="w-[1px] h-4 bg-[#E8C37D]/60 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-base">🎁</span>
              <span>Samagri Included</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#46111D] hover:bg-[#310A13] text-white px-8 py-[13px] rounded-[12px] flex items-center justify-center gap-3 font-medium transition-all duration-300 shadow-[0_16px_32px_-12px_rgba(70,17,29,0.5)] hover:shadow-[0_24px_40px_-12px_rgba(70,17,29,0.6)] hover:-translate-y-1 text-[16px]">
              <Calendar className="w-4 h-4 text-[#E8C37D]" />
              Book Pandit Ji
            </button>
            <button className="bg-white border-none shadow-[0_16px_32px_-12px_rgba(0,0,0,0.08)] hover:shadow-[0_24px_40px_-12px_rgba(0,0,0,0.12)] text-[#3B0918] hover:bg-surface-parchment px-8 py-4 rounded-[12px] flex items-center justify-center gap-3 font-medium transition-all duration-300 hover:-translate-y-1 text-[16px]">
              <MessageSquareText className="w-4 h-4 text-[#00A859]" />
              Chat on WhatsApp
            </button>
          </div>
        </motion.div>

        {/* Right Form Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-md mx-auto lg:ml-auto lg:mr-8"
        >
          <div className="bg-gradient-to-b from-[#4A1623] to-[#2E0B12] text-white rounded-[16px] p-[20px] md:p-[40px] shadow-[0_24px_60px_-15px_rgba(64,10,21,0.5)] relative z-10 border border-brand-gold-base/10">
            <div className="text-center mb-8">
              <span className="inline-block mb-3">
                <svg className="w-[28px] h-[30px] md:w-[40px] md:h-[42px]" viewBox="0 0 115.35 122.88" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#E5C378" />
                      <stop offset="50%" stopColor="#F2D696" />
                      <stop offset="100%" stopColor="#D1AC5D" />
                    </linearGradient>
                  </defs>
                  <path d="M1.16,65.32l5.81-1.67l0.25,1.64c1.04,6.68,2.66,12.72,4.86,18.11c2.19,5.35,4.96,10.08,8.32,14.17l0,0 c3.31,4.03,6.86,7.05,10.66,9.05c3.75,1.98,7.77,2.97,12.05,2.97c2.18,0,4.17-0.38,5.97-1.15c1.81-0.77,3.45-1.92,4.94-3.47 c1.49-1.56,2.61-3.29,3.35-5.19c0.74-1.9,1.11-3.99,1.11-6.27c0-4.29-0.87-8.38-2.61-12.27c-1.56-3.47-3.82-6.79-6.79-9.98 c-1.67,2.11-3.46,3.98-5.38,5.6c-2.34,1.98-4.86,3.57-7.57,4.8l-1.36,0.62l-6.51-15.33l1.58-0.46c5.6-1.63,9.76-3.76,12.51-6.38 c2.61-2.5,3.92-5.47,3.92-8.93c0-1.3-0.18-2.42-0.55-3.35c-0.34-0.87-0.86-1.6-1.54-2.19l0,0c-0.73-0.6-1.66-1.06-2.78-1.38 c-1.2-0.33-2.62-0.5-4.29-0.5c-2.51,0-5.08,0.38-7.71,1.14c-2.66,0.77-5.4,1.93-8.22,3.49l-1.44,0.8l-6.26-15.45l1.25-0.59 c2.5-1.19,5.06-2.09,7.67-2.69c2.61-0.6,5.26-0.9,7.94-0.9c3.59,0,6.86,0.6,9.81,1.78c2.97,1.2,5.59,2.99,7.86,5.37 c2.26,2.37,3.96,5.11,5.08,8.2c1.12,3.08,1.68,6.49,1.68,10.24c0,1.65-0.16,3.2-0.48,4.67C54.06,60.94,53.73,62,53.3,63l0.56,0.52 c3.12-2.84,6.18-5.02,9.19-6.52c3.42-1.71,6.76-2.56,10.05-2.56c0.32,0,0.72,0.03,1.21,0.08c1.28-5.79,3.47-10.21,6.55-13.26 c3.4-3.36,7.82-5.04,13.27-5.04c3.54,0,6.66,0.73,9.35,2.2c2.69,1.47,4.93,3.65,6.7,6.57l0,0c1.74,2.83,3.03,6.35,3.89,10.55 c0.85,4.15,1.27,8.95,1.27,14.41c0,5.56-0.53,10.56-1.59,14.99c-1.07,4.48-2.68,8.4-4.83,11.75c-2.19,3.4-4.77,5.96-7.75,7.68 c-3,1.73-6.37,2.6-10.12,2.6c-2.65,0-4.94-0.44-6.86-1.31c-1.99-0.9-3.57-2.25-4.76-4.04c-1.14-1.72-1.98-3.98-2.54-6.78 c-0.53-2.71-0.8-5.95-0.8-9.71v-5.59c0-3.21-0.4-5.57-1.2-7.08c-0.64-1.2-1.58-1.8-2.82-1.8c-1.36,0-2.92,0.37-4.67,1.1 c-1.51,0.63-3.13,1.52-4.87,2.66c2.87,4.03,5.05,8.01,6.56,11.92c1.68,4.36,2.52,8.64,2.52,12.83c0,3.51-0.58,6.69-1.73,9.55 c-1.16,2.88-2.91,5.41-5.24,7.61c-2.32,2.18-5.02,3.83-8.08,4.92c-3.03,1.09-6.4,1.63-10.1,1.63c-6,0-11.61-1.36-16.84-4.07 c-5.2-2.7-9.99-6.72-14.37-12.08l0,0c-4.36-5.31-7.81-11.3-10.33-17.96C2.41,82.12,0.8,74.81,0.1,66.85L0,65.65L1.16,65.32 L1.16,65.32z M81.13,57.02c1.01,0.83,1.81,1.96,2.38,3.39c0.72,1.8,1.09,4.08,1.09,6.83v13.49c0,4.22,0.63,7.33,1.9,9.34 c1.13,1.79,2.85,2.69,5.16,2.69c2.14,0,4.09-0.49,5.86-1.47c1.79-1,3.42-2.52,4.88-4.55l0.01-0.01c1.48-2.05,2.59-4.39,3.33-7.01 c0.75-2.65,1.13-5.58,1.13-8.8c0-3.13-0.34-5.95-1.03-8.46c-0.67-2.47-1.68-4.66-3.03-6.55c-1.31-1.85-2.8-3.23-4.47-4.14 c-1.64-0.89-3.49-1.34-5.54-1.34c-2.86,0-5.3,0.64-7.32,1.91C83.75,53.42,82.31,54.98,81.13,57.02L81.13,57.02z M38.08,15.85 l4.91-3.63l0.87,1.13c2.22,2.87,4.64,5.02,7.26,6.44c2.59,1.4,5.41,2.1,8.45,2.1c2.82,0,5.44-0.7,7.87-2.08 c2.49-1.42,4.79-3.57,6.92-6.44l0.92-1.24l12.76,10.64l-1.07,1.13c-3.49,3.67-7.01,6.44-10.56,8.29 c-3.62,1.89-7.28,2.83-10.97,2.83c-5.51,0-10.6-1.45-15.26-4.36c-4.6-2.87-8.76-7.15-12.47-12.84l-0.75-1.15L38.08,15.85 L38.08,15.85z M62.29,1.02l8.88,9.03l-9.95,9.75L51.15,9.46L61.3,0L62.29,1.02L62.29,1.02z" fill="url(#goldGradient)" />
                </svg>
              </span>
              <h2 className="text-[22px] md:text-[28px] font-display font-bold text-white mb-2 leading-tight">Get Free Puja Consultation</h2>
              <p className="text-[13px] text-surface-canvas/80">We'll call you back within 15 minutes</p>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-[10px] font-semibold uppercase tracking-widest text-[#E8C37D] mb-2">Your Name</label>
                <input type="text" placeholder="Enter your full name" className="w-full bg-[#632935]/40 border border-[#7A3E4C]/50 rounded-xl px-4 py-[12px] text-sm text-surface-canvas placeholder:text-surface-canvas/40 focus:outline-none focus:border-brand-gold-base transition-colors" />
              </div>
              <div>
                <label className="block text-[10px] font-semibold uppercase tracking-widest text-[#E8C37D] mb-2">Phone Number</label>
                <div className="flex">
                  <span className="bg-[#632935]/60 border border-r-0 border-[#7A3E4C]/50 rounded-l-xl px-4 py-[12px] text-sm text-surface-canvas/70 font-sans">+91</span>
                  <input type="tel" placeholder="98765 43210" className="w-full bg-[#632935]/40 border border-[#7A3E4C]/50 rounded-r-xl px-4 py-[12px] text-sm text-surface-canvas placeholder:text-surface-canvas/40 focus:outline-none focus:border-brand-gold-base transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-semibold uppercase tracking-widest text-[#E8C37D] mb-2">Type of Puja</label>
                <div className="relative">
                  <select defaultValue="" className="w-full bg-[#632935]/40 border border-[#7A3E4C]/50 rounded-xl px-4 py-[12px] pr-10 text-sm text-surface-canvas appearance-none focus:outline-none focus:border-brand-gold-base transition-colors">
                    <option value="" disabled className="bg-[#46111D] text-white">Select puja type</option>
                    <option value="griha-pravesh" className="bg-[#46111D] text-white">Griha Pravesh</option>
                    <option value="rudrabhishek" className="bg-[#46111D] text-white">Maha Rudrabhishek</option>
                    <option value="satyanarayan" className="bg-[#46111D] text-white">Satyanarayan Puja</option>
                    <option value="navgraha" className="bg-[#46111D] text-white">Navgraha Shanti</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#E8C37D] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-semibold uppercase tracking-widest text-[#E8C37D] mb-2">Select City</label>
                <div className="relative">
                  <select defaultValue="" className="w-full bg-[#632935]/40 border border-[#7A3E4C]/50 rounded-xl px-4 py-[12px] pr-10 text-sm text-surface-canvas appearance-none focus:outline-none focus:border-brand-gold-base transition-colors mb-2">
                    <option value="" disabled className="bg-[#46111D] text-white">Select your city</option>
                    <option value="hyderabad" className="bg-[#46111D] text-white">Hyderabad</option>
                    <option value="bengaluru" className="bg-[#46111D] text-white">Bengaluru</option>
                    <option value="delhi-ncr" className="bg-[#46111D] text-white">Delhi NCR</option>
                    <option value="mumbai" className="bg-[#46111D] text-white">Mumbai</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#E8C37D] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <button type="button" className="w-full bg-gradient-to-r from-[#E5C378] via-[#F2D696] to-[#E5C378] hover:from-[#D1AC5D] hover:via-[#E8C37D] hover:to-[#D1AC5D] text-[#3B0918] font-bold py-[12px] rounded-xl flex items-center justify-center gap-2 transition-all duration-300 mt-4 text-[15px] shadow-[0_4px_14px_rgba(229,195,120,0.3)] hover:shadow-[0_6px_20px_rgba(229,195,120,0.4)]">
                <span className="text-lg drop-shadow-sm">🙏</span> Get Free Consultation
              </button>
            </form>

            <div className="flex justify-center items-center gap-4 mt-8 pt-0 text-center">
              <div className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[#A89069]" />
                <span className="text-[11px] text-[#D8C7B1]">100% Private</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#A89069]">
                <Zap className="w-3.5 h-3.5" />
                <span className="text-[11px] text-[#D8C7B1]">Instant Callback</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckSquare className="w-3.5 h-3.5 text-[#00E03C]" />
                <span className="text-[11px] text-[#D8C7B1]">No Obligation</span>
              </div>
            </div>
          </div>
          
          {/* Decorative background element behind card */}
          <div className="absolute -inset-4 bg-brand-gold-base/5 rounded-2xl -z-10 blur-xl"></div>
        </motion.div>
      </div>
    </section>
  );
}
