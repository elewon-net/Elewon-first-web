import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const isInteractive =
        target.closest('button') ||
        target.closest('a') ||
        target.closest('input') ||
        target.closest('select') ||
        target.closest('textarea') ||
        target.classList.contains('cursor-pointer');

      setIsPointer(!!isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Central gold dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#F5D77A] pointer-events-none z-[99] shadow-[0_0_8px_rgba(245,215,122,0.8)]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 450, mass: 0.1 }}
      />

      {/* Outer subtle gold halo */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-[#D4AF37]/40 pointer-events-none z-[98]"
        animate={{
          x: mousePosition.x - (isPointer ? 24 : 16),
          y: mousePosition.y - (isPointer ? 24 : 16),
          width: isPointer ? 48 : 32,
          height: isPointer ? 48 : 32,
          borderColor: isPointer ? 'rgba(245, 215, 122, 0.7)' : 'rgba(212, 175, 55, 0.3)',
          backgroundColor: isPointer ? 'rgba(212, 175, 55, 0.08)' : 'transparent',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.2 }}
      />
    </>
  );
}
