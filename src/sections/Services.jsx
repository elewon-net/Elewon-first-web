import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Share2,
  Cpu,
  Palette,
  TrendingUp,
  Megaphone,
  Camera,
  Flame,
  ArrowUpRight,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { servicesData } from '../data/services';

const iconMap = {
  Sparkles,
  Share2,
  Cpu,
  Palette,
  TrendingUp,
  Megaphone,
  Camera,
  Flame,
};

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  const scrollToContactWithService = (serviceTitle) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      window.dispatchEvent(new CustomEvent('select-service', { detail: serviceTitle }));
    }
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#090909] overflow-hidden">
      {/* Top Section Connection Line */}
      <div className="section-divider-gold absolute top-0 left-0 right-0" />

      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#D4AF37]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeading
          badge="OUR CORE CAPABILITIES"
          title="WHAT WE DO"
          subtitle="Creative solutions designed to elevate brands, connect audiences and create impact."
          className="mb-16 sm:mb-20"
        />

        {/* 8 Luxury Service Cards Grid with Staggered Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, idx) => {
            const IconComponent = iconMap[service.iconName] || Sparkles;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 35, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
                className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-[#0E0E0E] border border-neutral-800/90 hover:border-[#D4AF37]/60 transition-all duration-400 hover:-translate-y-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.7)] hover:shadow-[0_15px_45px_rgba(212,175,55,0.18)] overflow-hidden"
              >
                {/* Subtle gold top shimmer on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                
                {/* Background Ambient Radial Gradient */}
                <div className="absolute -inset-24 bg-gradient-to-br from-[#D4AF37]/0 via-[#D4AF37]/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Top Row: Service Number and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold tracking-widest text-[#D4AF37]/60 group-hover:text-[#F5D77A] transition-colors">
                      {service.id}
                    </span>
                    <div className="p-3 rounded-xl bg-neutral-900/90 border border-neutral-800 text-[#D4AF37] group-hover:text-[#050505] group-hover:bg-[#F5D77A] group-hover:border-[#F5D77A] group-hover:scale-110 transition-all duration-300 shadow-sm">
                      <IconComponent className="w-5 h-5 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Service Title */}
                  <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wide text-white group-hover:text-[#F5D77A] transition-colors mb-3 leading-snug">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Sub-services / Deliverables Bullet Tags */}
                  <div className="space-y-2 mb-8 pt-4 border-t border-neutral-800/80">
                    {service.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="flex items-center gap-2 text-xs text-neutral-300 font-medium"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#D4AF37] group-hover:scale-125 transition-transform duration-300" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action CTA link */}
                <button
                  onClick={() => scrollToContactWithService(service.title)}
                  className="w-full flex items-center justify-between pt-4 border-t border-neutral-800 text-xs font-mono font-semibold tracking-wider uppercase text-neutral-400 group-hover:text-[#F5D77A] group-hover:border-[#D4AF37]/30 transition-all duration-300"
                >
                  <span>INQUIRE SERVICE</span>
                  <div className="w-7 h-7 rounded-full bg-neutral-900 group-hover:bg-[#D4AF37] group-hover:text-[#050505] flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
