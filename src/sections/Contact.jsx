import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Instagram,
  Globe,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import SectionHeading from '../components/SectionHeading';
import { siteConfig } from '../config/siteConfig';
import { sendContactEnquiry } from '../services/emailService';
import GoldParticleCanvas from '../components/GoldParticleCanvas';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  // Listen to external service selection triggers (e.g. clicking a service card)
  useEffect(() => {
    const handleServiceSelect = (e) => {
      if (e.detail) {
        setFormData((prev) => ({ ...prev, service: e.detail }));
        if (errors.service) {
          setErrors((prev) => ({ ...prev, service: '' }));
        }
      }
    };

    window.addEventListener('select-service', handleServiceSelect);
    return () => window.removeEventListener('select-service', handleServiceSelect);
  }, [errors.service]);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Project details are required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      await sendContactEnquiry({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
      });

      // Micro-celebration confetti
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.75 },
          colors: ['#F5D77A', '#D4AF37', '#C9A227', '#FFFFFF'],
        });
      } catch (err) {
        // ignore confetti errors
      }

      setStatus('success');
    } catch (err) {
      console.error('Contact submission error:', err);
      setStatus('error');
      setErrorMessage(
        err.message || 'Something went wrong. Please try again.'
      );
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
    setErrors({});
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#090909] overflow-hidden">
      {/* Top Section Connection Line */}
      <div className="section-divider-gold absolute top-0 left-0 right-0" />

      {/* Subtle Rising Gold Particles */}
      <GoldParticleCanvas
        particleCountDesktop={24}
        particleCountMobile={10}
        speedFactor={0.8}
      />

      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-[#D4AF37]/5 blur-[160px] pointer-events-none z-[1]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="GET IN TOUCH"
          title="LET'S CREATE SOMETHING POWERFUL."
          subtitle="Tell us about your brand vision, upcoming campaign, or event requirements. We are ready to elevate your project."
          className="mb-16 sm:mb-20"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Direct Contact Info & Channels */}
          <motion.div
            initial={{ opacity: 0, x: -25, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="p-8 rounded-3xl bg-[#111111] border border-neutral-800 space-y-8 shadow-[0_15px_40px_rgba(0,0,0,0.7)]">
              <div>
                <span className="text-[10px] font-mono font-semibold tracking-[0.25em] uppercase text-[#D4AF37] block mb-2">
                  DIRECT CHANNELS
                </span>
                <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white">
                  Connect With ELEWON
                </h3>
              </div>

              {/* Email Contact Card */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-[#D4AF37]/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#050505] transition-colors shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">
                    DIRECT EMAIL
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-[#F5D77A] transition-colors truncate block">
                    {siteConfig.email}
                  </span>
                </div>
              </a>

              {/* Instagram Card */}
              <a
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-[#D4AF37]/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#050505] transition-colors shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">
                    INSTAGRAM
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-[#F5D77A] transition-colors truncate block">
                    {siteConfig.instagram.handle}
                  </span>
                </div>
              </a>

              {/* Official Website Card */}
              <a
                href={siteConfig.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-[#D4AF37]/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#050505] transition-colors shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">
                    OFFICIAL DOMAIN
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-[#F5D77A] transition-colors truncate block">
                    {siteConfig.displayUrl}
                  </span>
                </div>
              </a>

              {/* Direct Response Note */}
              <div className="pt-4 border-t border-neutral-800/80 flex items-center gap-3 text-xs text-neutral-400">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>All project enquiries receive a direct response within 24 hours.</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact & Project Request Form */}
          <motion.div
            initial={{ opacity: 0, x: 25, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-[#111111] border border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative">
              
              {/* Form Gold Accent Line */}
              <div className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success-state"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 text-center space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37] flex items-center justify-center text-[#F5D77A] mx-auto shadow-[0_0_25px_rgba(212,175,55,0.3)]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-display text-2xl font-bold uppercase tracking-wider text-white">
                        Enquiry Received
                      </h4>
                      <p className="text-base text-neutral-200 font-medium max-w-md mx-auto leading-relaxed">
                        Message sent successfully. We'll get back to you soon.
                      </p>
                      <p className="text-xs text-neutral-400 font-mono max-w-sm mx-auto">
                        Your project details have been securely delivered to <span className="text-[#D4AF37]">{siteConfig.email}</span>.
                      </p>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="px-6 py-3 rounded-full bg-neutral-900 border border-neutral-700 text-xs font-semibold tracking-wider uppercase text-neutral-300 hover:text-white hover:border-[#D4AF37] transition-all"
                      >
                        Send Another Enquiry
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form key="contact-form" onSubmit={handleSubmit} noValidate className="space-y-6">
                    
                    {/* Error Banner */}
                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-xl bg-red-950/40 border border-red-500/50 flex items-start gap-3 text-red-200 text-xs"
                      >
                        <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="font-semibold text-red-300">Something went wrong. Please try again.</p>
                          {errorMessage && errorMessage !== 'Something went wrong. Please try again.' && (
                            <p className="text-[11px] text-red-400/80 mt-1">{errorMessage}</p>
                          )}
                        </div>
                      </motion.div>
                    )}

                    {/* Row 1: Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Name Field */}
                      <div className="space-y-2">
                        <label className="text-xs font-mono font-semibold tracking-wider uppercase text-neutral-300 flex items-center justify-between">
                          <span>Full Name *</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          disabled={status === 'loading'}
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Alexander Vance"
                          className={`w-full px-4 py-3.5 rounded-xl bg-neutral-950/80 border text-sm text-white placeholder-neutral-500 focus:outline-none transition-all duration-200 disabled:opacity-50 ${
                            errors.name
                              ? 'border-red-500/80 focus:border-red-500'
                              : 'border-neutral-800 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30'
                          }`}
                        />
                        {errors.name && (
                          <p className="text-xs text-red-400 flex items-center gap-1.5 pt-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.name}</span>
                          </p>
                        )}
                      </div>

                      {/* Email Field */}
                      <div className="space-y-2">
                        <label className="text-xs font-mono font-semibold tracking-wider uppercase text-neutral-300 flex items-center justify-between">
                          <span>Email Address *</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          disabled={status === 'loading'}
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@company.com"
                          className={`w-full px-4 py-3.5 rounded-xl bg-neutral-950/80 border text-sm text-white placeholder-neutral-500 focus:outline-none transition-all duration-200 disabled:opacity-50 ${
                            errors.email
                              ? 'border-red-500/80 focus:border-red-500'
                              : 'border-neutral-800 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-xs text-red-400 flex items-center gap-1.5 pt-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>

                    </div>

                    {/* Row 2: Phone Number & Service Select */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Phone Number */}
                      <div className="space-y-2">
                        <label className="text-xs font-mono font-semibold tracking-wider uppercase text-neutral-300">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          disabled={status === 'loading'}
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+971 50 123 4567"
                          className={`w-full px-4 py-3.5 rounded-xl bg-neutral-950/80 border text-sm text-white placeholder-neutral-500 focus:outline-none transition-all duration-200 disabled:opacity-50 ${
                            errors.phone
                              ? 'border-red-500/80 focus:border-red-500'
                              : 'border-neutral-800 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30'
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-xs text-red-400 flex items-center gap-1.5 pt-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>

                      {/* Service Dropdown */}
                      <div className="space-y-2">
                        <label className="text-xs font-mono font-semibold tracking-wider uppercase text-neutral-300">
                          Service Required *
                        </label>
                        <select
                          name="service"
                          disabled={status === 'loading'}
                          value={formData.service}
                          onChange={handleChange}
                          className={`w-full px-4 py-3.5 rounded-xl bg-neutral-950/80 border text-sm text-white focus:outline-none transition-all duration-200 disabled:opacity-50 ${
                            errors.service
                              ? 'border-red-500/80 focus:border-red-500'
                              : 'border-neutral-800 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30'
                          } ${!formData.service ? 'text-neutral-500' : 'text-white'}`}
                        >
                          <option value="" disabled>Select a capability...</option>
                          {siteConfig.serviceOptions.map((opt) => (
                            <option key={opt} value={opt} className="bg-neutral-900 text-white">
                              {opt}
                            </option>
                          ))}
                        </select>
                        {errors.service && (
                          <p className="text-xs text-red-400 flex items-center gap-1.5 pt-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.service}</span>
                          </p>
                        )}
                      </div>

                    </div>

                    {/* Project Details / Message */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono font-semibold tracking-wider uppercase text-neutral-300">
                        Project Details / Message *
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        disabled={status === 'loading'}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your brand goals, project scope, desired deliverables and timeline..."
                        className={`w-full px-4 py-3.5 rounded-xl bg-neutral-950/80 border text-sm text-white placeholder-neutral-500 focus:outline-none transition-all duration-200 resize-none disabled:opacity-50 ${
                          errors.message
                            ? 'border-red-500/80 focus:border-red-500'
                            : 'border-neutral-800 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30'
                        }`}
                      />
                      {errors.message && (
                        <p className="text-xs text-red-400 flex items-center gap-1.5 pt-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full relative group py-4 px-8 rounded-xl font-bold text-xs sm:text-sm tracking-[0.25em] uppercase overflow-hidden bg-gradient-to-r from-[#F5D77A] via-[#D4AF37] to-[#C9A227] text-[#050505] shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_45px_rgba(212,175,55,0.6)] transition-all duration-300 flex items-center justify-center gap-3 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
                    >
                      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-4 h-4 text-[#050505] animate-spin" />
                          <span className="relative z-10 font-black">SENDING...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-[#050505]" />
                          <span className="relative z-10 font-black">SEND MESSAGE</span>
                        </>
                      )}
                    </button>

                    <p className="text-[11px] text-center text-neutral-400 font-mono">
                      Inquiries are delivered directly to <span className="text-[#D4AF37]">{siteConfig.email}</span>
                    </p>

                  </form>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
