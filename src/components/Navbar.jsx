import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import logoImg from '../assets/logo.png';
import { siteConfig } from '../config/siteConfig';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Our Work', href: '#work' },
  { name: 'Why ELEWON', href: '#why-us' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Detect active section
      const sections = ['hero', 'about', 'services', 'work', 'why-us', 'process', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const handleLinkClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#090909]/85 backdrop-blur-xl border-b border-[#D4AF37]/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3'
            : 'bg-transparent py-5 sm:py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="ELEWON Homepage"
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 overflow-hidden rounded-lg p-0.5 transition-transform duration-300 group-hover:scale-105">
              <img
                src={logoImg}
                alt="ELEWON Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(212,175,55,0.35)]"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display tracking-[0.25em] text-lg sm:text-xl font-extrabold text-white group-hover:text-[#F5D77A] transition-colors">
                ELEWON
              </span>
              <span className="text-[8px] tracking-[0.2em] uppercase text-[#D4AF37]/80 -mt-1 font-medium hidden sm:block">
                Elevating To Success
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-4 py-1.5 rounded-full bg-neutral-950/60 border border-neutral-800/80 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`relative px-3.5 py-1.5 text-xs tracking-wider uppercase font-medium rounded-full transition-all duration-300 ${
                    isActive
                      ? 'text-[#050505] font-semibold'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-gradient-to-r from-[#F5D77A] via-[#D4AF37] to-[#C9A227] rounded-full shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Desktop Let's Talk CTA */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 relative group overflow-hidden border border-[#D4AF37]/60 bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 text-[#F5D77A] hover:text-[#050505] hover:border-[#F5D77A] shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:shadow-[0_0_25px_rgba(212,175,55,0.45)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#F5D77A] via-[#D4AF37] to-[#C9A227] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />
              <span className="relative z-10 font-bold">LET'S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 rounded-xl bg-neutral-900/80 border border-neutral-800 text-neutral-200 hover:text-[#D4AF37] focus:outline-none transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#F5D77A]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 lg:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header spacer */}
            <div className="h-16 flex items-center justify-between border-b border-neutral-800/60 pb-4">
              <div className="flex items-center gap-3">
                <img src={logoImg} alt="ELEWON" className="w-9 h-9 object-contain" />
                <span className="font-display tracking-[0.25em] text-lg font-bold text-white">
                  ELEWON
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex flex-col gap-5 py-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                  className="flex items-center justify-between text-xl font-display font-semibold tracking-wider text-neutral-300 hover:text-[#F5D77A] group"
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-mono text-[#D4AF37]/50 group-hover:text-[#D4AF37] transition-colors">
                    0{idx + 1}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Bottom Actions & Contact Info */}
            <div className="border-t border-neutral-800/60 pt-6 space-y-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#contact');
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-[#F5D77A] via-[#D4AF37] to-[#C9A227] text-[#050505] font-bold text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(212,175,55,0.3)]"
              >
                <span>LET'S TALK</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="flex items-center justify-between text-xs text-neutral-400 pt-2">
                <span>{siteConfig.email}</span>
                <a
                  href={siteConfig.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4AF37] hover:underline"
                >
                  {siteConfig.instagram.handle}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
