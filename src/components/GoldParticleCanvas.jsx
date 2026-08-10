import React, { useEffect, useRef } from 'react';

/**
 * High-performance, GPU-friendly Gold Particle Canvas
 * Generates tiny metallic gold particles that ascend smoothly through the atmosphere,
 * gently drifting with organic oscillation, fading in and out at controlled heights.
 */
export default function GoldParticleCanvas({
  className = "",
  particleCountDesktop = 45,
  particleCountMobile = 18,
  speedFactor = 1,
  interactive = true,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const isMobile = window.innerWidth < 768;
    const count = isMobile ? particleCountMobile : particleCountDesktop;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Draw a subtle static starry dust and stop
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < 15; i++) {
        ctx.fillStyle = 'rgba(212, 175, 55, 0.15)';
        ctx.beginPath();
        ctx.arc(Math.random() * width, Math.random() * height, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }
      return;
    }

    // Mouse tracking for subtle ambient parallax
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;

    const handleMouseMove = (e) => {
      if (!interactive || isMobile) return;
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle canvas resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle Palette
    const goldPalette = [
      { r: 245, g: 215, b: 122 }, // Soft Champagne
      { r: 212, g: 175, b: 55 },  // Luxury Gold
      { r: 201, g: 162, b: 39 },  // Metallic Gold
      { r: 255, g: 240, b: 180 }, // Highlight Gold
    ];

    // Initialize particles
    const particles = [];
    for (let i = 0; i < count; i++) {
      const isForeground = Math.random() > 0.65;
      const colorObj = goldPalette[Math.floor(Math.random() * goldPalette.length)];

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: isForeground ? Math.random() * 1.4 + 1.1 : Math.random() * 0.9 + 0.5,
        baseVy: (isForeground ? 0.35 : 0.22) * speedFactor * (Math.random() * 0.4 + 0.8),
        vx: 0,
        driftFreq: Math.random() * 0.015 + 0.005,
        driftAmp: Math.random() * 0.4 + 0.2,
        t: Math.random() * 1000,
        maxOpacity: isForeground ? Math.random() * 0.45 + 0.4 : Math.random() * 0.25 + 0.15,
        color: colorObj,
        isForeground,
      });
    }

    let lastTime = performance.now();
    let isVisible = true;

    // Pause when out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    // Render loop
    const render = (now) => {
      animationFrameId = requestAnimationFrame(render);
      if (!isVisible) return;

      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      // Smooth mouse follow
      mouseX += (targetMouseX - mouseX) * 0.04;
      const mouseInfluence = ((mouseX / width) - 0.5) * 0.3;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.t += dt * 60;

        // Move upward
        p.y -= p.baseVy * (dt * 60);

        // Horizontal sinusoidal organic drift
        p.x += Math.sin(p.t * p.driftFreq) * p.driftAmp + mouseInfluence * (p.isForeground ? 0.4 : 0.15);

        // Calculate smooth opacity based on vertical position
        // Fade in from bottom 15%, solid mid, fade out at top 25%
        const normalizedY = p.y / height;
        let opacity = p.maxOpacity;

        if (normalizedY > 0.85) {
          // Fading in from below
          opacity = p.maxOpacity * ((1 - normalizedY) / 0.15);
        } else if (normalizedY < 0.25) {
          // Fading out as it ascends near the top
          opacity = p.maxOpacity * (normalizedY / 0.25);
        }

        opacity = Math.max(0, Math.min(p.maxOpacity, opacity));

        // Reset particle when it floats past the top or outside horizontally
        if (p.y < -10 || opacity <= 0.005 && normalizedY < 0.1) {
          p.y = height + Math.random() * 20;
          p.x = Math.random() * width;
          p.t = Math.random() * 1000;
        }
        if (p.x < -20) p.x = width + 10;
        if (p.x > width + 20) p.x = -10;

        if (opacity > 0.01) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${opacity})`;
          ctx.fill();

          // Soft glow halo for foreground particles
          if (p.isForeground && opacity > 0.2) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius * 2.8, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${opacity * 0.25})`;
            ctx.fill();
          }
        }
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, [particleCountDesktop, particleCountMobile, speedFactor, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none z-[2] ${className}`}
    />
  );
}
