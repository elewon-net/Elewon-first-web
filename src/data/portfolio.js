/**
 * ELEWON Portfolio / Selected Work Data
 * Features bespoke AI-generated visual showcases for each service category.
 */

import imgBranding from '../assets/work/work_branding.png';
import imgSocial from '../assets/work/work_social.png';
import imgAiVideo from '../assets/work/work_ai_video.png';
import imgCorporate from '../assets/work/work_corporate.png';
import imgProduct from '../assets/work/work_product.png';
import imgEvents from '../assets/work/work_events.png';
import imgDesign from '../assets/work/work_design.png';
import imgCinematic from '../assets/work/work_cinematic.png';

export const portfolioCategories = [
  "ALL",
  "BRANDING",
  "SOCIAL MEDIA",
  "AI VIDEO",
  "DESIGN",
  "MARKETING",
  "EVENTS",
];

export const portfolioData = [
  {
    id: "proj-1",
    title: "Brand Identity",
    category: "BRANDING",
    categoryLabel: "Branding & Identity",
    image: imgBranding,
    summary: "Comprehensive visual architecture, signature logo system, typography hierarchy, and corporate design guidelines.",
    deliverables: ["Logo Design", "Brand Guidelines", "Visual Identity"],
    accentColor: "#D4AF37",
    badge: "Identity",
  },
  {
    id: "proj-2",
    title: "Social Media Campaign",
    category: "SOCIAL MEDIA",
    categoryLabel: "Social Media Content",
    image: imgSocial,
    summary: "Curated series of high-impact visual posts, dynamic motion reels, and brand narrative content designed for digital reach.",
    deliverables: ["Reels Production", "Post Design", "Content Strategy"],
    accentColor: "#F5D77A",
    badge: "Campaign",
  },
  {
    id: "proj-3",
    title: "AI Promotional Film",
    category: "AI VIDEO",
    categoryLabel: "AI Video Creation",
    image: imgAiVideo,
    summary: "Futuristic, AI-generated cinematic promotional film integrating generative video synthesis and sound design.",
    deliverables: ["AI Generation", "Cinematic Film", "Sound Design"],
    accentColor: "#C9A227",
    badge: "AI Media",
  },
  {
    id: "proj-4",
    title: "Corporate Branding",
    category: "BRANDING",
    categoryLabel: "Branding",
    image: imgCorporate,
    summary: "Executive brand suite encompassing corporate profiles, luxury stationery, and multi-format business collateral.",
    deliverables: ["Company Profile", "Stationery Suite", "Brand Assets"],
    accentColor: "#D4AF37",
    badge: "Corporate",
  },
  {
    id: "proj-5",
    title: "Product Campaign",
    category: "MARKETING",
    categoryLabel: "Brand Promotions",
    image: imgProduct,
    summary: "Integrated marketing activation featuring high-converting digital advertising, campaign posters, and targeted reach.",
    deliverables: ["Digital Ads", "Campaign Rollout", "Promotions"],
    accentColor: "#F5D77A",
    badge: "Activation",
  },
  {
    id: "proj-6",
    title: "Event Experience",
    category: "EVENTS",
    categoryLabel: "Events",
    image: imgEvents,
    summary: "Grand scale experiential stage architecture, physical event branding, environmental graphics, and production planning.",
    deliverables: ["Stage Architecture", "Event Branding", "Production"],
    accentColor: "#C9A227",
    badge: "Experiential",
  },
  {
    id: "proj-7",
    title: "Creative Designs",
    category: "DESIGN",
    categoryLabel: "Creative Designs",
    image: imgDesign,
    summary: "Editorial grade typography, bespoke commercial posters, digital flyers, and large-format promotional banners.",
    deliverables: ["Posters & Flyers", "Banner Design", "Vector Graphics"],
    accentColor: "#D4AF37",
    badge: "Design",
  },
  {
    id: "proj-8",
    title: "Cinematic Visuals",
    category: "MARKETING",
    categoryLabel: "Photography & Videography",
    image: imgCinematic,
    summary: "Editorial product photography and commercial video captures engineered to elevate perceived brand luxury.",
    deliverables: ["Product Photography", "Corporate Video", "Color Grading"],
    accentColor: "#F5D77A",
    badge: "Production",
  },
];
