import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Resume.css';

const Resume = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="resume" className="resume section">
      <div className="container">
        <h2 
          ref={titleRef}
          className={`section-title fade-in ${titleVisible ? 'visible' : ''}`}
        >
          Resume
        </h2>

        <div 
          ref={contentRef}
          className={`resume-content fade-in ${contentVisible ? 'visible' : ''}`}
        >
          <div className="resume-download">
            <div className="download-card">
              <div className="download-icon">📄</div>
              <div className="download-info">
                <h3 className="download-title">Download Resume</h3>
                <p className="download-description">
                  Get a PDF copy of my complete resume with detailed work history and qualifications.
                </p>
              </div>
              <a 
                href="/Radhesh_CV.pdf" 
                download 
                className="btn-download"
              >
                <span className="terminal-symbol">&gt;</span> Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
