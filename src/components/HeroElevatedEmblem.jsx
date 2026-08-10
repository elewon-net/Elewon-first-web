import React, { useMemo } from 'react';
import { motion, useTransform } from 'framer-motion';
import hero3dEmblem from '../assets/hero_3d_emblem.png';

/**
 * HeroElevatedEmblem Component
 * 
 * Implements the 3D cinematic model hero visual:
 * - Floating 3D metallic-gold ELEWON wing emblem with upward arrow and star
 * - Tiered dark-metallic & gold illuminated pedestal platform
 * - Upward elevating golden energy light beam and glowing core
 * - 3D rotating gold orbit rings with satellite nodes
 * - Expanding energy wave rings from the platform base
 * - Rising sparkling gold energy dust / particles
 * - Periodic metallic light sweep highlight
 * - Multi-layer desktop mouse parallax
 */
export default function HeroElevatedEmblem({ smoothX, smoothY }) {
  // Parallax transformations for separate depth layers
  const emblemX = useTransform(smoothX, [-0.5, 0.5], [-14, 14]);
  const emblemY = useTransform(smoothY, [-0.5, 0.5], [-14, 14]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-6, 6]);

  const ringsX = useTransform(smoothX, [-0.5, 0.5], [-9, 9]);
  const ringsY = useTransform(smoothY, [-0.5, 0.5], [-9, 9]);

  const baseX = useTransform(smoothX, [-0.5, 0.5], [-4, 4]);
  const baseY = useTransform(smoothY, [-0.5, 0.5], [-4, 4]);

  const glowX = useTransform(smoothX, [-0.5, 0.5], [-16, 16]);
  const glowY = useTransform(smoothY, [-0.5, 0.5], [-16, 16]);

  // Rising golden energy particles
  const particles = useMemo(() => {
    return Array.from({ length: 28 }).map((_, i) => ({
      id: i,
      left: `${15 + (i * 17) % 70}%`,
      bottom: `${12 + (i * 9) % 55}%`,
      size: 1.5 + (i % 4) * 1.2,
      delay: (i * 0.3) % 5.5,
      duration: 3.8 + (i % 5) * 0.8,
      drift: ((i % 7) - 3) * 14,
      opacityMax: 0.5 + (i % 3) * 0.25,
    }));
  }, []);

  return (
    <div className="relative w-full max-w-[460px] sm:max-w-[520px] lg:max-w-[600px] aspect-square flex items-center justify-center select-none overflow-visible">
      
      {/* LAYER 1: Deep Ambient Radial Gold Glow */}
      <motion.div
        style={{ x: glowX, y: glowY }}
        className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#D4AF37]/15 via-[#F5D77A]/8 to-transparent blur-[110px] pointer-events-none"
      />
      <div className="absolute w-88 h-88 rounded-full bg-[#D4AF37]/10 blur-[80px] pointer-events-none" />

      {/* LAYER 2: Expanding Platform Energy Wave Rings */}
      <motion.div
        style={{ x: baseX, y: baseY }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 pointer-events-none z-[2] flex items-center justify-center w-full"
      >
        {/* Expanding Ring 1 */}
        <motion.div
          animate={{
            scale: [0.75, 1.4],
            opacity: [0.45, 0],
          }}
          transition={{
            duration: 4.2,
            repeat: Infinity,
            ease: 'easeOut',
          }}
          className="absolute w-72 sm:w-96 h-20 sm:h-26 rounded-[100%] border border-[#D4AF37]/45 pointer-events-none shadow-[0_0_15px_rgba(212,175,55,0.2)]"
        />

        {/* Expanding Ring 2 (Staggered) */}
        <motion.div
          animate={{
            scale: [0.75, 1.4],
            opacity: [0.45, 0],
          }}
          transition={{
            duration: 4.2,
            delay: 2.1,
            repeat: Infinity,
            ease: 'easeOut',
          }}
          className="absolute w-72 sm:w-96 h-20 sm:h-26 rounded-[100%] border border-[#F5D77A]/35 pointer-events-none shadow-[0_0_15px_rgba(245,215,122,0.2)]"
        />
      </motion.div>

      {/* LAYER 3: Rising Golden Energy Dust & Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[4]">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 0, scale: 0.5 }}
            animate={{
              opacity: [0, p.opacityMax, p.opacityMax * 0.85, 0],
              y: [0, -150 - (p.id % 6) * 16],
              x: [0, p.drift],
              scale: [0.5, 1.3, 0.9, 0.2],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              position: 'absolute',
              left: p.left,
              bottom: p.bottom,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
            className="rounded-full bg-gradient-to-tr from-[#FFFFFF] via-[#F5D77A] to-[#D4AF37] shadow-[0_0_8px_#F5D77A]"
          />
        ))}
      </div>

      {/* LAYER 4: 3D Rotating Gold Orbit Rings surrounding the Emblem */}
      <motion.div
        style={{ x: ringsX, y: ringsY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-[5]"
      >
        {/* Ring 1: Major Tilted Orbit (-18deg tilt, 25s loop) */}
        <motion.div
          animate={{ rotateZ: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[360px] sm:w-[450px] lg:w-[500px] h-[360px] sm:h-[450px] lg:h-[500px] rounded-full border border-[#D4AF37]/30 shadow-[0_0_15px_rgba(212,175,55,0.15)]"
          style={{
            transform: 'rotateX(68deg) rotateY(-18deg)',
          }}
        >
          {/* Glowing Satellite Node */}
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#F5D77A] shadow-[0_0_12px_#F5D77A] flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-white" />
          </div>
        </motion.div>

        {/* Ring 2: Counter-Rotating Orbit (+22deg tilt, 19s loop) */}
        <motion.div
          animate={{ rotateZ: -360 }}
          transition={{ duration: 19, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[300px] sm:w-[380px] lg:w-[420px] h-[300px] sm:h-[380px] lg:h-[420px] rounded-full border border-dashed border-[#F5D77A]/25"
          style={{
            transform: 'rotateX(62deg) rotateY(22deg)',
          }}
        >
          <div className="absolute top-1/2 -right-1 w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]" />
        </motion.div>

        {/* Ring 3: Equatorial Orbit (15s loop) */}
        <motion.div
          animate={{ rotateZ: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[240px] sm:w-[310px] lg:w-[350px] h-[240px] sm:h-[310px] lg:h-[350px] rounded-full border border-[#C9A227]/25"
          style={{
            transform: 'rotateX(75deg) rotateY(0deg)',
          }}
        >
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#F5D77A] shadow-[0_0_6px_#F5D77A]" />
        </motion.div>
      </motion.div>

      {/* LAYER 5: Soft Elevating Golden Light Column */}
      <motion.div
        style={{ x: baseX, y: baseY }}
        className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 pointer-events-none z-[3]"
      >
        <motion.div
          animate={{
            opacity: [0.35, 0.65, 0.35],
            scaleX: [0.95, 1.08, 0.95],
          }}
          transition={{
            duration: 4.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-44 sm:w-56 h-72 sm:h-96 bg-gradient-to-t from-[#D4AF37]/40 via-[#F5D77A]/18 to-transparent blur-xl"
          style={{
            clipPath: 'polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)',
          }}
        />
      </motion.div>

      {/* LAYER 6: Fixed & Grounded 3D Metallic Hero Model */}
      <motion.div
        style={{
          x: emblemX,
          y: emblemY,
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative z-[6] w-full h-full flex items-center justify-center"
      >
        {/* Fixed Stable Container (No floating/bobbing motion) */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Main 3D Rendered Hero Model */}
          <div
            className="relative w-full h-full flex items-center justify-center overflow-hidden"
            style={{
              maskImage: 'radial-gradient(circle at 50% 50%, black 64%, rgba(0,0,0,0.6) 78%, transparent 92%)',
              WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 64%, rgba(0,0,0,0.6) 78%, transparent 92%)',
            }}
          >
            <img
              src={hero3dEmblem}
              alt="ELEWON 3D Emblem on Pedestal"
              className="w-full h-full object-contain filter drop-shadow-[0_15px_35px_rgba(212,175,55,0.4)] drop-shadow-[0_0_25px_rgba(245,215,122,0.2)] transition-transform duration-700 hover:scale-[1.01]"
            />

            {/* Periodic Metallic Light Sweep across 3D Gold Model (Every 5s) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute -inset-full bg-gradient-to-r from-transparent via-[#FFFFFF]/20 via-[#F5D77A]/30 to-transparent skew-x-12 animate-periodic-sweep" />
            </div>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
