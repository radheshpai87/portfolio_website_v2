# Terminal-Themed Portfolio Website

A modern, minimalist personal portfolio website inspired by Monkeytype's terminal aesthetic. Built with React and vanilla CSS, featuring smooth scroll animations, terminal-style typography, and a sophisticated dark theme.

![Portfolio Preview](https://img.shields.io/badge/Status-Production%20Ready-00d26a?style=for-the-badge)

## 🎨 Design Philosophy

This portfolio adopts a **terminal-first aesthetic** that combines:
- **Pure black backgrounds** (#000000) for maximum contrast
- **Vibrant green accents** (#00d26a) inspired by classic terminal interfaces
- **Monospace typography** (JetBrains Mono) for technical sophistication
- **Minimalist card-based layouts** for clean content presentation
- **Smooth scroll-triggered animations** for engaging user experience

## ✨ Features

### 🎯 Core Sections
- **Hero Section**: Dynamic introduction with animated terminal window
- **Projects**: Showcase portfolio with featured project badges and tech stacks
- **About**: Personal story with interactive code snippet and statistics
- **Skills**: Animated progress bars with categorized technical abilities
- **Contact**: Functional contact form with social media links
- **Resume**: Timeline-based experience display with downloadable PDF

### 🚀 Technical Highlights
- ✅ **Fully Responsive** - Mobile-first design approach
- ✅ **WCAG AA Compliant** - High contrast ratios for accessibility
- ✅ **Performance Optimized** - Lightweight with smooth 60fps animations
- ✅ **SEO Friendly** - Semantic HTML structure
- ✅ **Modern React Patterns** - Custom hooks and component composition
- ✅ **Vanilla CSS** - No dependencies, pure CSS power

## 🎨 Design System

### Color Palette
```css
--color-bg-primary: #000000      /* Pure black background */
--color-bg-secondary: #1e1e1e    /* Card backgrounds */
--color-bg-tertiary: #2d2d2d     /* Nested elements */
--color-accent-primary: #00d26a  /* Terminal green accent */
--color-text-primary: #ffffff    /* Primary text */
--color-text-secondary: #a0a0a0  /* Secondary text */
--color-text-muted: #666666      /* Muted text */
```

### Typography
- **Font Family**: JetBrains Mono (monospace)
- **Scale**: Modular scale from 0.75rem to 3rem
- **Line Height**: 1.6 for body, 1.2 for headings
- **Font Weights**: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Spacing System
```css
--spacing-xs: 0.5rem   /* 8px */
--spacing-sm: 1rem     /* 16px */
--spacing-md: 1.5rem   /* 24px */
--spacing-lg: 2rem     /* 32px */
--spacing-xl: 3rem     /* 48px */
--spacing-2xl: 4rem    /* 64px */
--spacing-3xl: 6rem    /* 96px */
```

### Animation Timings
- **Fast**: 150ms - Micro-interactions
- **Base**: 250ms - Standard transitions
- **Slow**: 400ms - Section reveals

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Styling**: Vanilla CSS with CSS Variables
- **Icons**: Emoji (for universal compatibility)
- **Fonts**: Google Fonts (JetBrains Mono)

## 📦 Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd personal_portfolio_v2

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
personal_portfolio_v2/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Fixed navigation bar
│   │   ├── Header.css
│   │   ├── Hero.jsx            # Landing section
│   │   ├── Hero.css
│   │   ├── Projects.jsx        # Project showcase
│   │   ├── Projects.css
│   │   ├── About.jsx           # Personal introduction
│   │   ├── About.css
│   │   ├── Skills.jsx          # Technical skills
│   │   ├── Skills.css
│   │   ├── Contact.jsx         # Contact form
│   │   ├── Contact.css
│   │   ├── Resume.jsx          # Experience timeline
│   │   ├── Resume.css
│   │   ├── Footer.jsx          # Site footer
│   │   └── Footer.css
│   ├── hooks/
│   │   └── useScrollAnimation.js  # Intersection Observer hook
│   ├── App.jsx                 # Main application component
│   ├── App.css                 # App-level styles
│   ├── index.css               # Global styles & design tokens
│   └── main.jsx                # Application entry point
├── public/
├── index.html
├── package.json
└── vite.config.js
```

## 🎯 Customization Guide

### 1. Personal Information
Update these files with your information:
- `src/components/Hero.jsx` - Name, title, description
- `src/components/About.jsx` - Biography, stats, skills
- `src/components/Projects.jsx` - Project details
- `src/components/Contact.jsx` - Contact methods
- `src/components/Resume.jsx` - Work experience, education

### 2. Color Scheme
Modify the CSS variables in `src/index.css`:
```css
:root {
  --color-accent-primary: #00d26a; /* Change to your brand color */
  --color-bg-primary: #000000;     /* Background color */
}
```

### 3. Typography
Change the font in `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font:wght@400;700&display=swap');

:root {
  --font-mono: 'Your Font', monospace;
}
```

## 🌟 Key Components

### useScrollAnimation Hook
Custom React hook for scroll-triggered animations:
```javascript
const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });
```

### Section Structure
Each section follows this pattern:
```jsx
<section id="section-name" className="section">
  <div className="container">
    <h2 className="section-title">Title</h2>
    {/* Content */}
  </div>
</section>
```

### Card Component Pattern
Consistent card design across sections:
- Border: 1px solid tertiary color
- Background: Secondary background
- Hover: Accent color border + glow effect
- Transition: Transform translateY(-4px to -8px)

## 🎨 Design Patterns

### Terminal Aesthetic Elements
1. **Prompt Symbols**: `> ` prefix for titles and interactive elements
2. **Blinking Cursors**: `_` with blink animation
3. **Code Comments**: `//` for section labels
4. **Monospace Typography**: Consistent throughout
5. **Glowing Effects**: Box shadows on hover states

### Accessibility Features
- High contrast ratios (WCAG AA compliant)
- Focus-visible outlines on all interactive elements
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly labels

### Animation Strategy
- Scroll-triggered fade-in animations
- Staggered delays for list items
- Smooth transitions on hover
- 60fps performance target
- Reduced motion support

## 📱 Responsive Breakpoints

```css
/* Tablet: 968px */
@media (max-width: 968px) {
  /* Two-column to single-column layouts */
}

/* Mobile: 768px */
@media (max-width: 768px) {
  /* Stacked navigation, reduced spacing */
}

/* Small Mobile: 480px */
@media (max-width: 480px) {
  /* Minimum spacing, full-width buttons */
}
```

## 🚀 Performance Optimization

- **CSS Variables**: Centralized design tokens
- **Vanilla CSS**: No CSS-in-JS overhead
- **Lazy Loading**: Intersection Observer for animations
- **Optimized Images**: Use modern formats (WebP)
- **Code Splitting**: React lazy() for heavy components
- **Minimal Dependencies**: Reduced bundle size

## 📝 SEO Considerations

- Semantic HTML5 elements
- Descriptive meta tags in `index.html`
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for images
- Descriptive link text
- Structured data (JSON-LD) - Add as needed

## 🔧 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

**Built with ❤️ and ☕ using React + Vite**

**⭐ If you like this portfolio template, please give it a star!**
