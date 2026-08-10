# ELEWON — Elevating To Success

> **BRANDING • MEDIA • EVENTS**  
> Official Frontend Web Application for [ELEWON](https://elewon.net).

---

## ✨ Overview

ELEWON is a high-end luxury creative agency website engineered with modern web technologies, cinematic motion design, and a black-and-gold visual identity.

### 🌟 Key Features
- **Official Brand Identity**: Metallic gold emblem, custom typography, and dark luxury aesthetic.
- **Cinematic Motion & Particle System**: Lightweight GPU-accelerated gold particle atmosphere floating across the dark environment.
- **3D Hero Emblem**: Harmonic floating animation with mouse parallax and periodic metallic reflections.
- **Selected Work Portfolio**: Categorized showcases with AI-rendered project visuals and interactive lightbox.
- **Email Contact Form**: Direct client inquiry delivery to `helloelewon@outlook.com` via Web3Forms / Formspree with zero third-party redirects and inline validation.
- **WhatsApp Concierge Widget**: Persistent floating WhatsApp contact button (`+91 77362 42329`) for quick chat.
- **Performance & SEO**: Fully responsive, semantic HTML, Open Graph tags, fast build times, and Vercel-ready.

---

## 📧 Email Service Setup (Vercel & Local)

The contact form is configured to send all submissions to **`helloelewon@outlook.com`**.

### Option A: Web3Forms (Recommended - Free & Instant)
1. Go to [https://web3forms.com](https://web3forms.com) and enter `helloelewon@outlook.com` to receive a free Access Key.
2. Add the key to your `.env` (or Vercel Environment Variables):
```env
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```

### Option B: Formspree
1. Create a form at [https://formspree.io](https://formspree.io) pointing to `helloelewon@outlook.com`.
2. Add the Form ID to your environment variables:
```env
VITE_FORMSPREE_ID=your_form_id
```

---

## 🛠️ Tech Stack
- **Framework**: [React 19](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) + Custom Luxury CSS Utilities
- **Animations**: [Framer Motion](https://www.framer-motion.com/) + Canvas 2D Particles
- **Icons**: [Lucide React](https://lucide.dev/)
- **Micro-Interactions**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📄 License
© 2026 ELEWON. All Rights Reserved.
