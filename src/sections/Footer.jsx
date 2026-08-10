import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Instagram, Mail, Globe, Sparkles } from 'lucide-react';
import logoImg from '../assets/logo.png';
import { siteConfig } from '../config/siteConfig';

const footerLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Our Work', href: '#work' },
  { name: 'Why ELEWON', href: '#why-us' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050505] border-t border-neutral-800/80 pt-20 pb-12 overflow-hidden">
      {/* Top subtle gold line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-neutral-800/80 items-start">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl p-1 bg-neutral-900/90 border border-[#D4AF37]/30 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                <img
                  src={logoImg}
                  alt="ELEWON Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]"
                />
              </div>
              <div>
                <h3 className="font-display text-2xl font-black tracking-[0.25em] text-white">
                  ELEWON
                </h3>
                <p className="text-[10px] font-semibold tracking-[0.25em] text-[#F5D77A] uppercase">
                  ★ {siteConfig.tagline} ★
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-sm leading-relaxed">
              Architecting luxury brand identities, next-generation media production, and memorable experiential events.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase">
              <span>{siteConfig.categoryString}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#F5D77A]">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs text-neutral-400 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-neutral-700 group-hover:bg-[#D4AF37] transition-colors" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#F5D77A]">
              Direct Inquiries
            </h4>
            <div className="space-y-3 text-xs text-neutral-300">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-[#D4AF37]/40 transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="group-hover:text-white transition-colors truncate">
                  {siteConfig.email}
                </span>
              </a>

              <a
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-[#D4AF37]/40 transition-colors group"
              >
                <Instagram className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="group-hover:text-white transition-colors truncate">
                  {siteConfig.instagram.handle}
                </span>
              </a>

              <a
                href={siteConfig.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-[#D4AF37]/40 transition-colors group"
              >
                <Globe className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="group-hover:text-white transition-colors truncate">
                  {siteConfig.displayUrl}
                </span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
          <p>© 2026 ELEWON. All Rights Reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-neutral-400 hover:text-[#F5D77A] transition-colors group"
          >
            <span>BACK TO TOP</span>
            <div className="w-6 h-6 rounded-full bg-neutral-900 border border-neutral-800 group-hover:border-[#D4AF37] flex items-center justify-center transition-colors">
              <ArrowUpRight className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
