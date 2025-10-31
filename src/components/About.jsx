import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './About.css';

const About = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 
          ref={titleRef}
          className={`section-title fade-in ${titleVisible ? 'visible' : ''}`}
        >
          About
        </h2>
        
        <div 
          ref={contentRef}
          className={`about-content fade-in ${contentVisible ? 'visible' : ''}`}
        >
          <div className="about-text">
            <div className="terminal-line-group">
              <div className="code-comment">// Who I Am</div>
              <p className="about-paragraph">
                I'm Radhesh Pai, a designer, full-stack developer, and cybersecurity enthusiast who thrives 
                at the intersection of creativity and technology. I craft digital experiences that are not 
                only visually refined but also secure and performant, bridging the gap between aesthetic 
                design and robust engineering.
              </p>
            </div>

            <div className="terminal-line-group">
              <div className="code-comment">// What I Do</div>
              <p className="about-paragraph">
                I build modern web applications with React, Next.js, and TypeScript on the frontend, 
                powered by Node.js, MongoDB, and PostgreSQL on the backend. I style with Tailwind CSS 
                and explore machine learning with Python to create intelligent, dynamic systems that 
                solve real problems.
              </p>
            </div>

            <div className="terminal-line-group">
              <div className="code-comment">// My Approach</div>
              <p className="about-paragraph">
                I approach every project with a security-first mindset, combining creative problem-solving 
                with technical precision. Whether I'm reverse engineering systems or designing pixel-perfect 
                interfaces, I focus on building solutions that are maintainable, scalable, and thoughtfully 
                crafted from the ground up.
              </p>
            </div>
          </div>

          <div className="about-code-block">
            <div className="code-window">
              <div className="code-header">
                <div className="code-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="code-title">radhesh.js</div>
              </div>
              <div className="code-body">
                <pre><code dangerouslySetInnerHTML={{ __html: `<span class="keyword">const</span> <span class="variable">radhesh</span> <span class="operator">=</span> <span class="punctuation">{</span>
  <span class="property">name</span><span class="punctuation">:</span> <span class="string">"Radhesh Pai"</span><span class="punctuation">,</span>
  <span class="property">role</span><span class="punctuation">:</span> <span class="string">"Designer × Developer × Security Enthusiast"</span><span class="punctuation">,</span>
  <span class="property">location</span><span class="punctuation">:</span> <span class="string">"India"</span><span class="punctuation">,</span>
  
  <span class="property">skills</span><span class="punctuation">:</span> <span class="punctuation">{</span>
    <span class="property">frontend</span><span class="punctuation">:</span> <span class="punctuation">[</span>
      <span class="string">"React"</span><span class="punctuation">,</span> <span class="string">"Next.js"</span><span class="punctuation">,</span>
      <span class="string">"TypeScript"</span><span class="punctuation">,</span> <span class="string">"Tailwind CSS"</span>
    <span class="punctuation">],</span>
    <span class="property">backend</span><span class="punctuation">:</span> <span class="punctuation">[</span>
      <span class="string">"Node.js"</span><span class="punctuation">,</span> <span class="string">"Express"</span><span class="punctuation">,</span>
      <span class="string">"MongoDB"</span><span class="punctuation">,</span> <span class="string">"PostgreSQL"</span>
    <span class="punctuation">],</span>
    <span class="property">security</span><span class="punctuation">:</span> <span class="punctuation">[</span>
      <span class="string">"Cybersecurity"</span><span class="punctuation">,</span> <span class="string">"Reverse Engineering"</span><span class="punctuation">,</span>
      <span class="string">"Penetration Testing"</span><span class="punctuation">,</span> <span class="string">"Secure Coding"</span>
    <span class="punctuation">],</span>
    <span class="property">ml_ai</span><span class="punctuation">:</span> <span class="punctuation">[</span>
      <span class="string">"Python"</span><span class="punctuation">,</span> <span class="string">"Machine Learning"</span><span class="punctuation">,</span>
      <span class="string">"Data Analysis"</span><span class="punctuation">,</span> <span class="string">"AI Integration"</span>
    <span class="punctuation">],</span>
    <span class="property">design</span><span class="punctuation">:</span> <span class="punctuation">[</span>
      <span class="string">"Figma"</span><span class="punctuation">,</span> <span class="string">"UI/UX Design"</span><span class="punctuation">,</span>
      <span class="string">"Creative Direction"</span><span class="punctuation">,</span> <span class="string">"Prototyping"</span>
    <span class="punctuation">]</span>
  <span class="punctuation">},</span>
  
  <span class="property">currentFocus</span><span class="punctuation">:</span> <span class="punctuation">[</span>
    <span class="string">"AI-driven web systems"</span><span class="punctuation">,</span>
    <span class="string">"Security in web development"</span><span class="punctuation">,</span>
    <span class="string">"Creative UI design"</span><span class="punctuation">,</span>
    <span class="string">"Performance optimization"</span>
  <span class="punctuation">],</span>
  
  <span class="property">philosophy</span><span class="punctuation">:</span> <span class="string">"Code with purpose, design with intention"</span><span class="punctuation">,</span>
  
  <span class="property">openToWork</span><span class="punctuation">:</span> <span class="keyword">true</span><span class="punctuation">,</span>
  <span class="property">collaborate</span><span class="punctuation">:</span> <span class="punctuation">()</span> <span class="operator">=></span> <span class="punctuation">{</span>
    <span class="keyword">return</span> <span class="string">"Let's build something exceptional."</span><span class="punctuation">;</span>
  <span class="punctuation">}</span>
<span class="punctuation">};</span>

<span class="keyword">export</span> <span class="keyword">default</span> <span class="variable">radhesh</span><span class="punctuation">;</span>` }}></code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
