import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Layers, Rocket } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { processSteps } from '../data/whyElewon';

const iconMap = {
  Search,
  Compass,
  Layers,
  Rocket,
};

export default function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32 bg-[#090909] overflow-hidden">
      {/* Top Section Connection Line */}
      <div className="section-divider-gold absolute top-0 left-0 right-0" />

      {/* Background ambient gold gradient */}
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="PROVEN WORKFLOW"
          title="OUR PROCESS"
          subtitle="A disciplined, four-stage creative framework engineered to elevate concepts into enduring market success."
          className="mb-16 sm:mb-20"
        />

        {/* 4-Step Process Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          
          {/* Animated Connecting Line on Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-[1px] bg-neutral-800 -translate-y-12 z-0 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent w-full"
              initial={{ x: '-100%' }}
              whileInView={{ x: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          {processSteps.map((step, idx) => {
            const IconComponent = iconMap[step.icon] || Search;

            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 35, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.65, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="group relative z-10 flex flex-col justify-between p-8 rounded-2xl bg-[#111111] border border-neutral-800 hover:border-[#D4AF37]/60 transition-all duration-400 hover:-translate-y-2 shadow-[0_15px_35px_rgba(0,0,0,0.7)]"
              >
                <div>
                  {/* Top Step Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#050505] group-hover:border-[#D4AF37] group-hover:scale-105 transition-all duration-300 shadow-md">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xl font-bold tracking-widest text-[#D4AF37]/40 group-hover:text-[#F5D77A] transition-colors">
                      {step.step}
                    </span>
                  </div>

                  {/* Step Title & Subtitle */}
                  <div className="mb-4">
                    <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#D4AF37] block mb-1">
                      {step.subtitle}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wider text-white group-hover:text-[#F5D77A] transition-colors">
                      {step.title}
                    </h3>
                  </div>

                  {/* Core Highlight */}
                  <p className="text-sm font-medium text-neutral-200 mb-3 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Detail paragraph */}
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    {step.details}
                  </p>
                </div>

                {/* Bottom Step Indicator */}
                <div className="mt-8 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span>PHASE 0{idx + 1}</span>
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37]/40 group-hover:bg-[#D4AF37] group-hover:shadow-[0_0_8px_#D4AF37] transition-all" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
