/**
 * Centralized ELEWON Brand & Site Configuration
 * All contact details, brand metadata, and WhatsApp routing are configured here.
 */

export const siteConfig = {
  name: "ELEWON",
  tagline: "ELEVATING TO SUCCESS",
  categories: ["BRANDING", "MEDIA", "EVENTS"],
  categoryString: "BRANDING • MEDIA • EVENTS",
  heroSubtitle: "BRANDING • MEDIA • DIGITAL CONTENT • EVENTS",
  websiteUrl: "https://elewon.net",
  displayUrl: "elewon.net",
  email: "helloelewon@outlook.com",
  instagram: {
    handle: "@elewon_uae",
    url: "https://www.instagram.com/elewon_uae",
  },
  
  // WhatsApp Configuration (Single Source of Truth)
  // Format: International format without '+' sign, spaces, or hyphens
  whatsapp: {
    number: "917736242329",
    displayNumber: "+91 77362 42329",
  },

  // SEO & Meta Defaults
  seo: {
    title: "ELEWON | Branding, Media & Events",
    description: "ELEWON creates impactful brands through branding, digital content, media production, photography, videography, marketing and events.",
    keywords: "ELEWON, Branding, Media Production, Events, AI Video Creation, Photography, Videography, Digital Marketing, Creative Agency",
    author: "ELEWON",
  },

  // Service Options for Forms
  serviceOptions: [
    "Branding",
    "Social Media Content",
    "AI Video Creation",
    "Creative Designs",
    "Digital Marketing",
    "Brand Promotions",
    "Photography & Videography",
    "Events",
    "Other",
  ],
};

/**
 * Helper to generate the WhatsApp conversation URL from contact form data
 */
export function generateWhatsAppContactUrl({ name, email, phone, service, projectDetails }) {
  const message = `Hello ELEWON,

I would like to discuss a project with you.

Name: ${name}

Email: ${email}

Phone: ${phone}

Service: ${service}

Project Details:
${projectDetails}

Thank you.`;

  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

/**
 * Helper for direct WhatsApp floating button / link
 */
export function getDirectWhatsAppUrl(customText = "Hello ELEWON, I would like to inquire about your creative services.") {
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(customText)}`;
}
