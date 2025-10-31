import { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Projects.css';

const Projects = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.1 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'NLP Engine for Employee Data',
      description: 'A powerful natural language processing application that enables users to query database information using plain English. Integrates cutting-edge AI technology with robust database connectivity.',
      tech: ['React', 'TypeScript', 'Node.js', 'Express', 'Gemini AI', 'MySQL', 'PostgreSQL', 'Tailwind CSS'],
      image: '/project-img/nlp.png',
      github: 'https://github.com/radheshpai87/NLP-Engine-for-employee-data',
      live: null
    },
    {
      id: 2,
      title: 'YSCAM',
      description: 'Modern web interface for YSCAM — a scam verification platform that helps users check the authenticity of job and loan offers. Integrates with the ML API to deliver real-time scam analysis and user feedback.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Formspree'],
      image: '/project-img/yscam.png',
      github: 'https://github.com/radheshpai87/YSCAM-Fontend',
      live: 'https://yscam.vercel.app/'  
    },
    {
      id: 3,
      title: 'YSCAM-API',
      description: 'RESTful API for detecting fraudulent job and loan messages using machine learning. Powers the YSCAM platform by analyzing text and document inputs for scam indicators using trained ML models.',
      tech: ['Python', 'Flask', 'Scikit-learn', 'Logistic Regression', 'TF-IDF', 'NLTK', 'PyMuPDF', 'NumPy', 'Pandas'],
      image: '/project-img/yscam.png',
      github: 'https://github.com/radheshpai87/YSCAM',  
      live: 'https://yscam-api.onrender.com/health'
    },
    {
      id: 4,
      title: 'Simon Says Game',
      description: 'Simon Says Game - A classic memory game built with HTML, CSS, and JavaScript. Test your memory by following the sequence of flashing colors. Fun and challenging for all ages!',
      tech: ['HTML', 'CSS', 'Javascript'],
      image: '/project-img/simon.png',
      github: 'https://github.com/radheshpai87/simon-says-game', 
      live: 'https://simon-says-game-radz.vercel.app/'
    },
    {
      id: 5,
      title: 'Dog Image & Cat Fact Generator',
      description: 'A simple web application that fetches random cat facts and dog images from external APIs. It is built using HTML, CSS, and JavaScript with the Axios library for making HTTP requests.',
      tech: ['HTML', 'CSS', 'Javascript', 'Axios'],
      image: '/project-img/dog-cat.png',
      github: 'https://github.com/radheshpai87/dog-cat-api-project', 
      live: 'https://dog-cat-radz.vercel.app/'
    },
    {
      id: 6,
      title: 'Portfolio (OLD)',
      description: 'A modern, responsive portfolio website built with HTML, CSS, and JavaScript to showcase my work, skills, and contact information.',
      tech: ['HTML', 'CSS', 'Javascript'],
      image: '/project-img/portfolio-old.png',
      github: 'https://github.com/radheshpai87/radheshpai87.github.io',
      live: 'https://radheshpai87.github.io/'
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Touch swipe handlers for mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    // Reset
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 
          ref={titleRef}
          className={`section-title fade-in ${titleVisible ? 'visible' : ''}`}
        >
          Projects
        </h2>
        
        <div 
          ref={contentRef}
          className={`projects-carousel fade-in ${contentVisible ? 'visible' : ''}`}
        >
          <div 
            className="carousel-container"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="carousel-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="carousel-slide">
                  <div className="project-preview">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="project-image"
                    />
                    <div className="preview-overlay">
                      <div className="overlay-content">
                        {project.github ? (
                          <a href={project.github} className="preview-link" target="_blank" rel="noopener noreferrer">
                            <span className="link-icon">→</span> GitHub
                          </a>
                        ) : (
                          <button className="preview-link disabled" disabled>
                            <span className="link-icon">✕</span> GitHub
                          </button>
                        )}
                        {project.live ? (
                          <a href={project.live} className="preview-link" target="_blank" rel="noopener noreferrer">
                            <span className="link-icon">→</span> Live Demo
                          </a>
                        ) : (
                          <button className="preview-link disabled" disabled>
                            <span className="link-icon">✕</span> Live Demo
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="project-info">
                    <div className="project-header">
                      <span className="project-number">0{project.id}</span>
                      <h3 className="project-title">{project.title}</h3>
                    </div>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tech">
                      {project.tech.map((tech, index) => (
                        <span key={index} className="tech-tag">
                          <span className="tech-bullet">•</span> {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button 
              className="carousel-arrow carousel-arrow-left" 
              onClick={prevSlide}
              aria-label="Previous project"
            >
              <span>‹</span>
            </button>
            <button 
              className="carousel-arrow carousel-arrow-right" 
              onClick={nextSlide}
              aria-label="Next project"
            >
              <span>›</span>
            </button>

            {/* Dots Indicator */}
            <div className="carousel-dots">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
