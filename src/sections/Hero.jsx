import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, ChevronDown, Sparkles } from 'lucide-react';
import logoImg from '../assets/logo.png';
import { siteConfig } from '../config/siteConfig';
import GoldParticleCanvas from '../components/GoldParticleCanvas';
import MagneticButton from '../components/MagneticButton';

export default function Hero() {
  // Desktop mouse parallax coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100, mass: 0.2 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Controlled 3D rotation and subtle parallax shifts (5-10px)
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-6, 6]);
  const modelX = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const modelY = useTransform(smoothY, [-0.5, 0.5], [-8, 8]);
  const glowShiftX = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);
  const glowShiftY = useTransform(smoothY, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e) => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Cinematic text reveal transition variants
  const lineVariants = {
    hidden: { opacity: 0, y: 35, filter: 'blur(8px)' },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.9,
        delay: 0.1 + custom * 0.15,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-[#050505]"
    >
      {/* 1. Continuous Rising Gold Particle Atmosphere */}
      <GoldParticleCanvas
        particleCountDesktop={48}
        particleCountMobile={20}
        speedFactor={1}
      />

      {/* 2. Diagonal Cinematic Gold Light Streaks */}
      <div className="gold-light-streak-1" />
      <div className="gold-light-streak-2" />

      {/* 3. Ambient Gold Spotlights & Radial Gradients */}
      <motion.div
        style={{ x: glowShiftX, y: glowShiftY }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[800px] h-[550px] sm:h-[800px] rounded-full bg-[#D4AF37]/10 blur-[140px] pointer-events-none z-[1]"
      />
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-[#C9A227]/5 blur-[100px] pointer-events-none z-[1]" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-[#F5D77A]/5 blur-[120px] pointer-events-none z-[1]" />

      {/* Subtle Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-12rem)]">
        
        {/* Left Column: Headline, Category & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 sm:space-y-8">
          
          {/* Supporting Brand Category Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-[#D4AF37]/35 shadow-[0_0_20px_rgba(212,175,55,0.12)] backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#F5D77A]" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#F5D77A]">
              {siteConfig.heroSubtitle}
            </span>
          </motion.div>

          {/* Main Cinematic Headline with blur reduction reveal */}
          <div className="space-y-1">
            <motion.div
              custom={0}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
            >
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black uppercase tracking-tight text-white leading-[1.05]">
                WE ELEVATE
              </h1>
            </motion.div>

            <motion.div
              custom={1}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="font-display text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black uppercase tracking-tight text-gold-shimmer leading-[1.05]">
                BRANDS THAT
              </div>
            </motion.div>

            <motion.div
              custom={2}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="font-display text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black uppercase tracking-tight text-white leading-[1.05]">
                MATTER.
              </div>
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-xl text-neutral-300 font-light max-w-xl leading-relaxed"
          >
            Creative solutions that transform ideas into powerful brands, engaging content and memorable experiences.
          </motion.p>

          {/* CTA Buttons with Magnetic Attraction on Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2"
          >
            {/* Primary CTA */}
            <MagneticButton strength={8}>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto relative group px-8 py-4 rounded-full text-xs sm:text-sm font-bold tracking-[0.2em] uppercase overflow-hidden bg-gradient-to-r from-[#F5D77A] via-[#D4AF37] to-[#C9A227] text-[#050505] shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_45px_rgba(212,175,55,0.7)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2.5"
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 font-bold">START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </MagneticButton>

            {/* Secondary CTA */}
            <MagneticButton strength={8}>
              <button
                onClick={() => scrollToSection('services')}
                className="w-full sm:w-auto px-8 py-4 rounded-full text-xs sm:text-sm font-bold tracking-[0.2em] uppercase bg-neutral-950/70 border border-neutral-800 text-neutral-200 hover:text-[#F5D77A] hover:border-[#D4AF37]/50 hover:bg-neutral-900/80 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2 group"
              >
                <span>EXPLORE OUR SERVICES</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5 text-[#D4AF37]" />
              </button>
            </MagneticButton>
          </motion.div>

          {/* Micro Brand Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.75 }}
            className="flex items-center gap-6 pt-4 text-xs font-mono text-neutral-400"
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span>BRAND STRATEGY</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span>MEDIA PRODUCTION</span>
            </div>
            <div className="flex items-center gap-2 hidden sm:flex">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span>SIGNATURE EVENTS</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: 3D Floating ELEWON Emblem Visual */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          <motion.div
            style={{
              rotateX,
              rotateY,
              x: modelX,
              y: modelY,
              transformStyle: 'preserve-3d',
            }}
            initial={{ opacity: 0, scale: 0.88, filter: 'blur(8px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[340px] sm:max-w-[420px] aspect-square flex items-center justify-center"
          >
            {/* Ambient Back Glow rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#D4AF37]/25 to-transparent blur-3xl pointer-events-none" />
            <div className="absolute -inset-4 rounded-full border border-[#D4AF37]/20 animate-spin-slow pointer-events-none" />
            <div className="absolute -inset-10 rounded-full border border-neutral-800/60 pointer-events-none" />

            {/* Glowing Logo Card Frame with Smooth Harmonic Float */}
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotateZ: [0, 0.8, -0.8, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-full h-full rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#141414]/90 via-[#0B0B0B]/90 to-[#050505]/95 border border-[#D4AF37]/35 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(212,175,55,0.18)] backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden group"
            >
              
              {/* Occasional Metallic Light Sweep */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                <div className="absolute -inset-full bg-gradient-to-r from-transparent via-[#F5D77A]/20 to-transparent skew-x-12 animate-periodic-sweep" />
              </div>

              {/* Official Logo Display */}
              <div className="relative w-full h-full flex items-center justify-center p-2">
                <img
                  src={logoImg}
                  alt="ELEWON Official Emblem"
                  className="w-full h-full object-contain filter drop-shadow-[0_10px_30px_rgba(212,175,55,0.45)] transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="absolute bottom-4 flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-[#D4AF37]/20 text-[10px] tracking-[0.2em] uppercase text-[#F5D77A]/80 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                <span>ELEVATING TO SUCCESS</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Down Prompt */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="relative z-10 mt-8 sm:mt-12 flex flex-col items-center gap-2 cursor-pointer group"
        onClick={() => scrollToSection('about')}
      >
        <span className="text-[10px] sm:text-xs font-mono tracking-[0.3em] uppercase text-neutral-400 group-hover:text-[#F5D77A] transition-colors">
          SCROLL TO EXPLORE
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-neutral-700 group-hover:border-[#D4AF37] flex items-start justify-center p-1 transition-colors"
        >
          <div className="w-1 h-2 rounded-full bg-[#D4AF37]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
