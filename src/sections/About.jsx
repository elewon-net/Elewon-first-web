import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, Target, Zap } from 'lucide-react';
import logoImg from '../assets/logo.png';
import SectionHeading from '../components/SectionHeading';
import { siteConfig } from '../config/siteConfig';

const brandPillars = [
  {
    title: 'CREATIVE',
    icon: Sparkles,
    desc: 'Unconventional visual storytelling and imaginative design frameworks that captivate audiences.',
  },
  {
    title: 'STRATEGIC',
    icon: Target,
    desc: 'Data-informed market positioning and brand architectures engineered for sustainable growth.',
  },
  {
    title: 'RELIABLE',
    icon: ShieldCheck,
    desc: 'Uncompromising execution timelines, transparent collaboration, and enterprise consistency.',
  },
  {
    title: 'RESULT-DRIVEN',
    icon: Zap,
    desc: 'Tangible performance metrics, high conversion media assets, and enduring brand equity.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#050505] overflow-hidden">
      {/* Top Section Connection Line */}
      <div className="section-divider-gold absolute top-0 left-0 right-0" />

      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 rounded-full bg-[#C9A227]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="ABOUT ELEWON"
          title="Our vision that transforms your journey into success."
          subtitle="At ELEWON, we believe every brand carries a unique story — and our mission is to bring that story to life with clarity, creativity, and purpose."
          className="mb-16 sm:mb-20"
        />

        {/* Storytelling Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Visual Story Card & Brand Identity */}
          <motion.div
            initial={{ opacity: 0, x: -30, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl p-8 bg-gradient-to-br from-[#111111] via-[#090909] to-[#050505] border border-[#D4AF37]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden group">
              {/* Gold gradient top accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
              
              {/* Emblem Showcase with Gentle Float */}
              <div className="relative w-full aspect-square max-w-[280px] mx-auto flex items-center justify-center p-4">
                <div className="absolute inset-0 rounded-full bg-[#D4AF37]/10 blur-2xl pointer-events-none" />
                <motion.img
                  src={logoImg}
                  alt="ELEWON Crest"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Story Highlights */}
              <div className="mt-6 pt-6 border-t border-neutral-800/80 text-center space-y-2">
                <p className="font-display tracking-[0.2em] text-lg font-bold text-white uppercase">
                  {siteConfig.name}
                </p>
                <p className="text-xs font-semibold tracking-[0.25em] text-[#F5D77A] uppercase">
                  {siteConfig.tagline}
                </p>
                <p className="text-xs text-neutral-400 font-mono pt-1">
                  {siteConfig.categoryString}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Structured Narrative Content */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Story Paragraph 1 */}
            <motion.div
              initial={{ opacity: 0, y: 25, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 backdrop-blur-sm relative group hover:border-[#D4AF37]/40 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#F5D77A] mt-1 shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-bold font-display uppercase tracking-wider text-white group-hover:text-[#F5D77A] transition-colors">
                    Our Foundation & Expertise
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                    We are a dedicated team specializing in branding, media production, digital content creation, photography, videography, and event management. Our approach is simple: understand your vision, refine it with strategy, and deliver results that make an impact.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Story Paragraph 2 */}
            <motion.div
              initial={{ opacity: 0, y: 25, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 backdrop-blur-sm relative group hover:border-[#D4AF37]/40 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#F5D77A] mt-1 shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-bold font-display uppercase tracking-wider text-white group-hover:text-[#F5D77A] transition-colors">
                    Care, Quality & Detail
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                    Whether it’s building a brand identity, creating engaging social media content, producing promotional videos, or managing corporate events, we ensure every project is handled with care, professionalism, and attention to detail.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Story Paragraph 3 */}
            <motion.div
              initial={{ opacity: 0, y: 25, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-neutral-900/70 to-neutral-950/70 border border-[#D4AF37]/30 backdrop-blur-sm relative group hover:border-[#D4AF37]/50 transition-colors"
            >
              <p className="text-sm sm:text-base text-neutral-200 font-normal leading-relaxed italic">
                "We value trust, long-term relationships, and consistent quality. At ELEWON, your success is our priority — and we work every day to elevate your brand with solutions that are reliable, creative, and result-driven."
              </p>
            </motion.div>

          </div>
        </div>

        {/* 4 Brand Pillars / Keywords */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {brandPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-6 rounded-2xl bg-[#0B0B0B] border border-neutral-800 hover:border-[#D4AF37]/50 transition-all duration-300 hover:-translate-y-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-[#D4AF37] group-hover:text-[#F5D77A] group-hover:border-[#D4AF37]/40 group-hover:scale-105 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#D4AF37]/40 group-hover:text-[#D4AF37] transition-colors">
                    0{idx + 1}
                  </span>
                </div>
                <h4 className="font-display text-base font-bold tracking-wider text-white group-hover:text-[#F5D77A] transition-colors uppercase mb-2">
                  {pillar.title}
                </h4>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
