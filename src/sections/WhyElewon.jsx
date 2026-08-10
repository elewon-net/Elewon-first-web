import React from 'react';
import { motion } from 'framer-motion';
import {
  Lightbulb,
  Target,
  Crown,
  CheckCircle2,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { whyElewonPoints } from '../data/whyElewon';

const iconMap = {
  Lightbulb,
  Target,
  Crown,
  CheckCircle2,
  ShieldCheck,
  HeartHandshake,
};

const marqueeWords = [
  "CREATIVE",
  "STRATEGIC",
  "PREMIUM",
  "RELIABLE",
  "VISIONARY",
  "CINEMATIC",
  "RESULT-DRIVEN",
];

export default function WhyElewon() {
  return (
    <section id="why-us" className="relative py-24 sm:py-32 bg-[#050505] overflow-hidden">
      {/* Top Section Connection Line */}
      <div className="section-divider-gold absolute top-0 left-0 right-0" />

      {/* Dynamic Kinetic Marquee Banner */}
      <div className="w-full overflow-hidden py-4 border-y border-neutral-800/80 bg-[#090909]/60 mb-20">
        <div className="flex items-center gap-12 whitespace-nowrap animate-shimmer">
          {[...marqueeWords, ...marqueeWords, ...marqueeWords].map((word, idx) => (
            <div key={idx} className="flex items-center gap-12">
              <span className="font-display text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-widest text-neutral-800 hover:text-[#F5D77A]/30 transition-colors">
                {word}
              </span>
              <span className="text-[#D4AF37] text-xl sm:text-2xl">★</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="THE ELEWON DIFFERENCE"
          title="WHY ELEWON"
          subtitle="We combine bespoke creative artistry with strategic execution to build brands that lead markets."
          className="mb-16 sm:mb-20"
        />

        {/* 6 Key Pillars Grid with Staggered Fade Up */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyElewonPoints.map((point, idx) => {
            const IconComponent = iconMap[point.icon] || Sparkles;

            return (
              <motion.div
                key={point.id}
                initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.09, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-8 rounded-2xl bg-gradient-to-b from-[#111111] to-[#090909] border border-neutral-800 hover:border-[#D4AF37]/50 transition-all duration-400 hover:-translate-y-2 shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.15)]"
              >
                {/* Gold corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#D4AF37]/15 to-transparent rounded-tr-2xl pointer-events-none" />

                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-[#D4AF37] group-hover:text-[#050505] group-hover:bg-[#F5D77A] group-hover:border-[#F5D77A] group-hover:scale-105 transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold tracking-widest text-[#D4AF37]/50 group-hover:text-[#D4AF37] transition-colors">
                    {point.id}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="text-[10px] font-mono font-semibold tracking-[0.25em] uppercase text-[#D4AF37]/80">
                    {point.keyword}
                  </span>
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white group-hover:text-[#F5D77A] transition-colors mt-1">
                    {point.title}
                  </h3>
                </div>

                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
