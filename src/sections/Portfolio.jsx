import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, Eye, X } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { portfolioCategories, portfolioData } from '../data/portfolio';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [previewProject, setPreviewProject] = useState(null);

  const filteredProjects = activeCategory === 'ALL'
    ? portfolioData
    : portfolioData.filter((item) => item.category === activeCategory);

  const scrollToContact = (projectTitle) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="work" className="relative py-24 sm:py-32 bg-[#050505] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] rounded-full bg-[#D4AF37]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="OUR PORTFOLIO"
          title="SELECTED WORK"
          subtitle="A showcase of signature brand identities, cinematic media productions, and experiential concepts."
          className="mb-12"
        />

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-16">
          {portfolioCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 sm:px-5 py-2 text-xs font-semibold tracking-wider uppercase rounded-full transition-all duration-300 ${
                  isActive
                    ? 'text-[#050505] font-bold shadow-[0_0_20px_rgba(212,175,55,0.35)]'
                    : 'text-neutral-400 hover:text-white bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePortfolioFilter"
                    className="absolute inset-0 bg-gradient-to-r from-[#F5D77A] via-[#D4AF37] to-[#C9A227] rounded-full -z-0"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#141414] to-[#0A0A0A] border border-neutral-800/90 hover:border-[#D4AF37]/60 transition-all duration-400 hover:-translate-y-2 shadow-[0_15px_40px_rgba(0,0,0,0.8)]"
              >
                {/* Visual Thumbnail Image Area */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-[0.92] group-hover:brightness-100"
                  />

                  {/* Dark Gradient Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/30 to-black/50 pointer-events-none" />
                  
                  {/* Top Badge and Action Button */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#D4AF37]/40 text-[10px] font-mono tracking-widest uppercase text-[#F5D77A] shadow-md">
                      {project.badge}
                    </span>
                    <button
                      onClick={() => setPreviewProject(project)}
                      className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-neutral-300 hover:text-[#F5D77A] hover:border-[#D4AF37] transition-all"
                      aria-label={`Preview ${project.title}`}
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Bottom Category label over image */}
                  <div className="absolute bottom-3 left-4 z-10">
                    <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#F5D77A]/90 font-medium drop-shadow-md">
                      {project.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white group-hover:text-[#F5D77A] transition-colors">
                      {project.title}
                    </h3>
                    <div className="w-7 h-7 rounded-full bg-neutral-900 group-hover:bg-[#D4AF37] group-hover:text-[#050505] flex items-center justify-center transition-colors text-neutral-400">
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Deliverables Tags */}
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-neutral-800/80">
                    {project.deliverables.map((deliv, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-neutral-900/90 border border-neutral-800 text-[10px] font-medium text-neutral-300"
                      >
                        {deliv}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox / Fullscreen Image Preview Modal */}
      <AnimatePresence>
        {previewProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setPreviewProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full rounded-3xl bg-[#111111] border border-[#D4AF37]/40 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setPreviewProject(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 border border-neutral-700 text-white hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Large Image */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-black">
                <img
                  src={previewProject.image}
                  alt={previewProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Modal Info */}
              <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase">
                    {previewProject.categoryLabel}
                  </span>
                  <h3 className="font-display text-2xl font-bold uppercase text-white mt-1">
                    {previewProject.title}
                  </h3>
                  <p className="text-sm text-neutral-300 mt-1 max-w-xl font-light">
                    {previewProject.summary}
                  </p>
                </div>

                <button
                  onClick={() => {
                    setPreviewProject(null);
                    scrollToContact(previewProject.title);
                  }}
                  className="shrink-0 px-6 py-3 rounded-full bg-gradient-to-r from-[#F5D77A] via-[#D4AF37] to-[#C9A227] text-[#050505] font-bold text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                >
                  START THIS PROJECT
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
