import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-terminal">
            <span className="terminal-prompt">
              <span className="terminal-symbol">&gt;</span>
              <span className="terminal-text">© {currentYear} Radhesh Pai</span>
            </span>
          </div>
          <div className="footer-love">
            <span className="love-text">Made with</span>
            <span className="love-heart">♥</span>
            <span className="love-text">at my crib</span>
          </div>
          <div className="footer-credit">
            <span className="credit-text">Inspired by</span>
            <a 
              href="https://monkeytype.com/profile/languid18" 
              target="_blank" 
              rel="noopener noreferrer"
              className="credit-link"
            >
              monkeytype
            </a>
            <span className="credit-separator">×</span>
            <span className="credit-text">terminal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
