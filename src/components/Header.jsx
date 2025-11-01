import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="nav-brand">
            <span className="terminal-prompt">&gt;</span> <a href='#hero'>radz.is-a.dev</a>
          </div>
          
          <button 
            className="nav-toggle" 
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span className={`hamburger ${menuOpen ? 'active' : ''}`}></span>
          </button>

          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            <li>
              <a href="#resume" className="nav-cta" onClick={closeMenu}>
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
