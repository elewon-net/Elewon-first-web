import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  className = "",
}) {
  return (
    <div className={`space-y-4 ${centered ? 'text-center mx-auto' : 'text-left'} max-w-3xl ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-900/80 border border-[#D4AF37]/30 text-[11px] font-semibold tracking-[0.25em] uppercase text-[#F5D77A] shadow-[0_0_15px_rgba(212,175,55,0.1)]`}
        >
          <span className="text-[#D4AF37]">★</span>
          <span>{badge}</span>
        </motion.div>
      )}

      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase leading-[1.15]"
        >
          {title}
        </motion.h2>
      )}

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base lg:text-lg text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
