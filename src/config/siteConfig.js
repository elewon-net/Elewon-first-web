/**
 * Centralized ELEWON Brand & Site Configuration
 * All contact details, brand metadata, and WhatsApp routing are configured here.
 */

export const siteConfig = {
  name: "ELEWON",
  tagline: "ELEVATING TO SUCCESS",
  categories: ["BRANDING", "MEDIA", "EVENTS"],
  categoryString: "BRANDING • MEDIA • EVENTS",
  heroSubtitle: "BRANDING • MEDIA • EVENTS",
  websiteUrl: "https://elewon.net",
  displayUrl: "elewon.net",
  // Email Configuration (Destination)
  email: "helloelewon@outlook.com",
  instagram: {
    handle: "@elewon_official",
    url: "https://www.instagram.com/elewon_official?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==",
  },
  
  // WhatsApp Configuration (Used for Direct Floating Concierge Only)
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
 * Formats the complete inquiry email body according to ELEWON specifications
 */
export function formatEnquiryEmail({ name, email, phone, service, message }) {
  return `Hello ELEWON,

You have received a new project enquiry.

Name:
${name}

Email:
${email}

Phone:
${phone}

Service:
${service}

Project Details:
${message}

--------------------------------

Sent from:
ELEWON Website
elewon.net`;
}

/**
 * Helper for direct WhatsApp floating button / link
 */
export function getDirectWhatsAppUrl(customText = "Hello ELEWON, I would like to inquire about your creative services.") {
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(customText)}`;
}
