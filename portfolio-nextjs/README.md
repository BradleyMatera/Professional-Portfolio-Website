# Bradley Matera | Web Developer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?logo=next.js&logoColor=white&style=for-the-badge)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript&logoColor=white&style=for-the-badge)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?logo=tailwind-css&logoColor=white&style=for-the-badge)](https://tailwindcss.com/)
[![NextUI](https://img.shields.io/badge/NextUI-2.6-000000?logo=nextui&logoColor=white&style=for-the-badge)](https://nextui.org/)
[![Bun](https://img.shields.io/badge/Bun-1.3-000000?logo=bun&logoColor=white&style=for-the-badge)](https://bun.sh/)

> A premium, modern portfolio website showcasing web development projects, skills, and professional experience.

---

## 🚀 Overview

This portfolio website is a complete rebuild of the original React site using cutting-edge technologies to deliver a premium, performant, and visually stunning experience. Built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, and **NextUI**, it features bold modern layouts, smooth animations, dark/light theming, and full responsiveness.

**Live Site:** [https://bradleymatera.github.io/Professional-Portfolio-Website/](https://bradleymatera.github.io/Professional-Portfolio-Website/)

---

## ✨ Features

### Visual Excellence
- 🎨 **Bold Modern Design**: Hero sections with layered gradients, rich typography, and purposeful motion
- 🌓 **Dark/Light Theming**: Seamless theme switching with NextUI and next-themes
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- ✨ **Smooth Animations**: Framer Motion animations for engaging user interactions
- 🎯 **Accessibility First**: WCAG-compliant with proper ARIA labels and keyboard navigation

### Pages & Sections
- 🏠 **Home**: Engaging hero section with profile, introduction, and featured skills
- 💼 **Projects**: Comprehensive project showcase with GitHub repos, live demos, and CodePen work
- 🛠️ **Skills & Experience**: Technical skills and professional experience timeline
- 📬 **Contact**: Interactive contact form with EmailJS integration and social links
- 🔗 **Navigation**: Smooth navigation with mobile-friendly drawer menu

### Technical Highlights
- ⚡ **Next.js 16 App Router**: Latest routing paradigm for optimal performance
- 🔒 **TypeScript**: Full type safety throughout the application
- 🎨 **NextUI Design System**: Consistent, beautiful UI components
- 🌊 **Tailwind CSS**: Utility-first styling with custom color palette
- 🔥 **Bun Runtime**: Lightning-fast package management and development
- 📦 **Static Export**: Optimized static site generation for GitHub Pages

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript 5.9 |
| **Styling** | Tailwind CSS 4.1, NextUI 2.6 |
| **Animations** | Framer Motion 12.23 |
| **Icons** | React Icons 5.5 |
| **Theme** | next-themes 0.4 |
| **Runtime** | Bun 1.3 |
| **Deployment** | GitHub Pages |

---

## 📦 Installation & Setup

### Prerequisites
- [Bun](https://bun.sh/) installed on your system
- Node.js 18+ (for compatibility)
- Git

### Clone & Install

```bash
# Clone the repository
git clone https://github.com/BradleyMatera/Professional-Portfolio-Website.git
cd Professional-Portfolio-Website/portfolio-nextjs

# Install dependencies with Bun
bun install
```

---

## 🚀 Available Scripts

```bash
# Development server (http://localhost:3000)
bun run dev

# Production build
bun run build

# GitHub Pages build (creates docs/ folder with .nojekyll)
bun run build:pages

# Start production server
bun run start

# Run linter
bun run lint
```

---

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--primary: #fb8b24      /* Orange - Primary accent */
--secondary: #64ffda    /* Cyan - Secondary accent */

/* Backgrounds */
--dark-bg: #0a192f      /* Navy blue - Main background */
--darker-bg: #1c1c1c    /* Dark grey - Card backgrounds */

/* Text */
--foreground: #ededed   /* Light text (dark mode) */
--foreground: #171717   /* Dark text (light mode) */
```

### Typography
- **Primary Font**: Inter (sans-serif)
- **Mono Font**: Roboto Mono (code blocks)

### Component Theme
- NextUI components with custom dark/light theme support
- Consistent border radius and spacing
- Smooth transitions and hover effects
- Glass-morphism effects with backdrop blur

---

## 📂 Project Structure

```
portfolio-nextjs/
├── app/
│   ├── layout.tsx              # Root layout with providers
│   ├── page.tsx                # Home page
│   ├── providers.tsx           # NextUI & Theme providers
│   ├── globals.css             # Global styles & Tailwind config
│   ├── projects/
│   │   └── page.tsx            # Projects page
│   ├── skills-experience/
│   │   └── page.tsx            # Skills & Experience page
│   └── contact/
│       └── page.tsx            # Contact page
├── components/
│   ├── Navigation.tsx          # Header navigation
│   └── Footer.tsx              # Footer component
├── public/
│   └── imgs/                   # Images and assets
├── next.config.ts              # Next.js configuration
├── package.json                # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
└── README.md                   # This file
```

---

## 🌐 Deployment

### GitHub Actions Workflow (Automated)

The site deploys automatically via GitHub Actions whenever you push to the `main` branch.

1. **Configure GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: **Deploy from a workflow** (GitHub Actions)
   - Save the settings

2. **Push your code:**
   ```bash
   git add .
   git commit -m "Deploy Next.js portfolio"
   git push origin main
   ```

3. **Automatic deployment:**
   - GitHub Actions will automatically build and deploy
   - Check the "Actions" tab to monitor deployment progress
   - Deployment typically completes in 2-3 minutes

4. **Access your site:**
   - URL: `https://bradleymatera.github.io/Professional-Portfolio-Website/`

### Manual Build (Optional)

If you want to build locally for testing:

```bash
# Development build
bun run dev

# Production build (creates docs/ folder)
bun run build

# Production build with .nojekyll file
bun run build:pages
```

### Environment Variables
No environment variables are required for the static build. EmailJS credentials are embedded in the contact form component.

### Workflow Details

The `.github/workflows/deploy.yml` file handles:
- ✅ Automatic builds on push to main
- ✅ Bun installation and dependency setup
- ✅ Next.js static site generation
- ✅ GitHub Pages deployment with proper permissions
- ✅ Manual workflow dispatch option

---

## 🎯 Performance Optimizations

- ✅ Static site generation for instant page loads
- ✅ Image optimization with Next.js Image component
- ✅ Code splitting and lazy loading
- ✅ Minimal JavaScript bundle size
- ✅ CSS purging with Tailwind
- ✅ Font optimization with next/font
- ✅ Smooth scroll behavior
- ✅ Optimized animations with Framer Motion

---

## 🧩 Component Architecture

### Reusable Components
- **Navigation**: Responsive navbar with mobile drawer menu and theme toggle
- **Footer**: Social links and contact information
- **Card Components**: NextUI cards for consistent styling
- **Motion Wrappers**: Framer Motion animations for scroll-triggered effects

### Page Structure
Each page follows a consistent structure:
1. Navigation component
2. Main content with sections
3. Footer component

---

## 📧 Contact Form Integration

The contact form uses **EmailJS** for serverless email handling:

1. Form fields: Name, Email, Message
2. Client-side validation
3. Success/error feedback
4. Email sent to: bradmatera@gmail.com

---

## 🎓 Learning Resources

### Official Documentation
- [Next.js 16 Docs](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [NextUI Documentation](https://nextui.org/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Bun Documentation](https://bun.sh/docs)

---

## 📬 Contact

**Bradley Matera**
- 📧 Email: bradmatera@gmail.com
- 💼 LinkedIn: [Brad Matera](https://www.linkedin.com/in/championingempatheticwebsolutionsthroughcode/)
- 🐙 GitHub: [@BradleyMatera](https://github.com/BradleyMatera)
- 🎥 YouTube: [@bradmatera](https://www.youtube.com/@bradmatera)
- 🖊️ CodePen: [student-account-bradley-matera](https://codepen.io/student-account-bradley-matera)

---

## 📄 License

© 2025 Bradley Matera. All rights reserved.

---

## 🙏 Acknowledgments

- Army veteran and Full Sail University student
- Preparing for AWS Cloud Associate internship (Summer 2025)
- Current GPA: 3.85
- Passionate about web development and creating accessible applications

---

**Built with ❤️ using Bun, Next.js, TypeScript, Tailwind CSS, and NextUI**
