import React, { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-[#C9A227] via-[#F5D77A] to-[#D4AF37] transition-all duration-75 ease-out shadow-[0_0_10px_rgba(212,175,55,0.6)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
