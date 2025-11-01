import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import { Analytics } from "@vercel/analytics/next"
import './App.css';

function App() {
  useEffect(() => {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;

    const updateCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Update dot immediately
      if (cursorDot) {
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
      }
    };

    // Smooth outline follow with lerp (linear interpolation)
    const animateOutline = () => {
      const speed = 0.15; // Lower = smoother but slower
      
      outlineX += (mouseX - outlineX) * speed;
      outlineY += (mouseY - outlineY) * speed;
      
      if (cursorOutline) {
        cursorOutline.style.left = `${outlineX}px`;
        cursorOutline.style.top = `${outlineY}px`;
      }
      
      requestAnimationFrame(animateOutline);
    };

    const handleMouseOver = (e) => {
      // Add hover class when hovering over interactive elements
      if (
        e.target.tagName === 'A' || 
        e.target.tagName === 'BUTTON' ||
        e.target.closest('a') ||
        e.target.closest('button')
      ) {
        document.body.classList.add('cursor-hover');
      }
    };

    const handleMouseOut = () => {
      document.body.classList.remove('cursor-hover');
    };

    window.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    
    // Start animation loop
    animateOutline();

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div className="app">
      {/* Custom Cursor Elements */}
      <div className="cursor-dot" />
      <div className="cursor-outline" />
      <Analytics />
      <Header />
      <main className="main-content">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}

export default App;
