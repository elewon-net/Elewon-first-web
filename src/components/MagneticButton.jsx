import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Luxury Magnetic Button Wrapper
 * Adds subtle spring cursor magnetic attraction on desktop devices
 */
export default function MagneticButton({
  children,
  className = "",
  onClick,
  strength = 12,
  ...props
}) {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) / (width / 2);
    const y = (clientY - (top + height / 2)) / (height / 2);
    setPosition({ x: x * strength, y: y * strength });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      <button
        onClick={onClick}
        className={className}
        {...props}
      >
        {children}
      </button>
    </motion.div>
  );
}
