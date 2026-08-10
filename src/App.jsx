import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Components
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import WhyElewon from './sections/WhyElewon';
import Process from './sections/Process';
import Portfolio from './sections/Portfolio';
import CinematicCTA from './sections/CinematicCTA';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Fallback to guarantee preloader dismisses in worst case
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-[#D4AF37] selection:text-[#050505]">
      
      {/* Cinematic Preloader */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Main Experience once ready */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative z-10"
        >
          {/* Top Gold Scroll Progress Indicator */}
          <ScrollProgress />

          {/* Desktop Luxury Magnetic Halo Cursor */}
          <CustomCursor />

          {/* Fixed Sticky Header Navigation */}
          <Navbar />

          {/* Main Website Sections */}
          <main>
            <Hero />
            <About />
            <Services />
            <WhyElewon />
            <Process />
            <Portfolio />
            <CinematicCTA />
            <Contact />
          </main>

          {/* Dark Luxury Footer */}
          <Footer />
        </motion.div>
      )}

    </div>
  );
}
