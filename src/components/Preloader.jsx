import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo.png';
import { siteConfig } from '../config/siteConfig';

export default function Preloader({ onComplete }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Stage 1: Logo & glow fade in
    const t1 = setTimeout(() => setStage(1), 300);
    // Stage 2: Gold line reveal
    const t2 = setTimeout(() => setStage(2), 900);
    // Stage 3: Tagline & Category reveal
    const t3 = setTimeout(() => setStage(3), 1400);
    // Stage 4: Finish and unmount smoothly
    const t4 = setTimeout(() => {
      if (onComplete) onComplete();
    }, 2200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] text-white px-6 select-none"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.04,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
      }}
    >
      {/* Ambient background gold glow */}
      <div className="absolute w-96 h-96 rounded-full bg-[#D4AF37]/10 blur-[100px] pointer-events-none" />

      <div className="relative flex flex-col items-center max-w-sm w-full text-center">
        {/* Logo Emblem Reveal */}
        <motion.div
          className="relative w-28 h-28 sm:w-32 sm:h-32 mb-6"
          initial={{ opacity: 0, scale: 0.85, y: 15 }}
          animate={{
            opacity: stage >= 1 ? 1 : 0,
            scale: stage >= 1 ? 1 : 0.85,
            y: stage >= 1 ? 0 : 15,
          }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={logoImg}
            alt="ELEWON Luxury Logo"
            className="w-full h-full object-contain filter drop-shadow-[0_0_25px_rgba(212,175,55,0.45)]"
          />
        </motion.div>

        {/* Animated Gold Divider Line */}
        <div className="relative w-48 h-[1px] bg-neutral-800 my-3 overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent w-full"
            initial={{ x: '-100%' }}
            animate={{ x: stage >= 2 ? '100%' : '-100%' }}
            transition={{ duration: 1.2, ease: 'easeInOut', repeat: stage >= 2 ? Infinity : 0 }}
          />
        </div>

        {/* Tagline Reveal */}
        <motion.div
          className="overflow-hidden mt-2"
          initial={{ opacity: 0, y: 8 }}
          animate={{
            opacity: stage >= 3 ? 1 : 0,
            y: stage >= 3 ? 0 : 8,
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-[#F5D77A]/90">
            ★ {siteConfig.tagline} ★
          </p>
          <p className="text-[9px] tracking-[0.25em] text-neutral-400 uppercase mt-1">
            {siteConfig.categoryString}
          </p>
        </motion.div>
      </div>

      {/* Subtle loader bar at bottom */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-neutral-900 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[#C9A227] via-[#F5D77A] to-[#D4AF37]"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2.1, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  );
}
