import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Hero.css';

const Hero = () => {
    const [heroRef, heroVisible] = useScrollAnimation({ threshold: 0.3 });

    return (
        <section
            id="hero"
            className="hero section"
            ref={heroRef}
        >
            <div className="container">
                <div className={`hero-content fade-in ${heroVisible ? 'visible' : ''}`}>
                    <div className="hero-greeting">
                        <span className="terminal-symbol">&gt;</span> Hello, I'm
                    </div>
                    <h1 className="hero-name">
                        Radhesh Pai
                        <span className="cursor-blink">_</span>
                    </h1>
                    <h2 className="hero-title">
                        Full-Stack Web Developer
                    </h2>
                    <p className="hero-description">
                        I design and build digital experiences that blend creativity with precision.
                        With a passion for cybersecurity and clean UI, I bring ideas to life using React, Node.js, and modern web tools.
                    </p>
                    <div className="hero-cta">
                        <a href="#projects" className="btn-primary">
                            View My Work
                        </a>
                        <a href="#contact" className="btn-secondary">
                            Get In Touch
                        </a>
                    </div>
                </div>

                <div className={`hero-terminal fade-in ${heroVisible ? 'visible' : ''}`}>
                    <div className="terminal-window">
                        <div className="terminal-header">
                            <div className="terminal-buttons">
                                <span className="btn-close"></span>
                                <span className="btn-minimize"></span>
                                <span className="btn-maximize"></span>
                            </div>
                            <div className="terminal-title">terminal — radsh</div>
                        </div>
                        <div className="terminal-body">
                            <div className="terminal-line">
                                <span className="prompt">radz😈@root</span>
                                <span className="path">~</span>
                                <span className="command">$ cat skills.txt</span>
                            </div>
                            <div className="terminal-output">
                                <div>→ React, Next.js & Node.js</div>
                                <div>→ Tailwind CSS</div>
                                <div>→ MongoDB & PostgreSQL</div>
                                <div>→ Python, Machine Learning & AI</div>
                                <div>→ Docker & Linux</div>
                                <div>→ UI/UX Design </div>
                            </div>
                            <div className="terminal-line">
                                <span className="prompt">radz😈@root</span>
                                <span className="path">~</span>
                                <span className="command">$ █</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
