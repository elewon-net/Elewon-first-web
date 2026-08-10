import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import logoImg from '../assets/logo.png';
import GoldParticleCanvas from '../components/GoldParticleCanvas';
import MagneticButton from '../components/MagneticButton';

export default function CinematicCTA() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-28 sm:py-36 bg-[#050505] overflow-hidden">
      {/* Top Section Connection Line */}
      <div className="section-divider-gold absolute top-0 left-0 right-0" />

      {/* Subtle Rising Gold Particles */}
      <GoldParticleCanvas
        particleCountDesktop={28}
        particleCountMobile={12}
        speedFactor={0.85}
      />

      {/* Dynamic Ambient Gold Backlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#D4AF37]/10 blur-[160px] pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-grid-pattern opacity-35 pointer-events-none z-[1]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Subtle Floating Logo Mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-8 p-1 rounded-2xl bg-neutral-900/60 border border-[#D4AF37]/30 shadow-[0_0_30px_rgba(212,175,55,0.25)] flex items-center justify-center backdrop-blur-md group hover:border-[#D4AF37] transition-colors"
        >
          <motion.img
            src={logoImg}
            alt="ELEWON Mark"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]"
          />
        </motion.div>

        {/* Cinematic Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[1.1] mb-6"
        >
          <span>READY TO ELEVATE</span>
          <br />
          <span className="text-gold-shimmer">YOUR BRAND?</span>
        </motion.h2>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-xl text-neutral-300 font-light max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Let's turn your vision into something people remember.
        </motion.p>

        {/* CTA Button with Magnetic Desktop Interaction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <MagneticButton strength={10}>
            <button
              onClick={scrollToContact}
              className="relative group px-10 py-5 rounded-full text-xs sm:text-sm font-bold tracking-[0.25em] uppercase overflow-hidden bg-gradient-to-r from-[#F5D77A] via-[#D4AF37] to-[#C9A227] text-[#050505] shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:shadow-[0_0_60px_rgba(212,175,55,0.75)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-3"
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Sparkles className="w-4 h-4 text-[#050505]" />
              <span className="relative z-10 font-black">START A CONVERSATION</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </MagneticButton>
        </motion.div>

      </div>
    </section>
  );
}
