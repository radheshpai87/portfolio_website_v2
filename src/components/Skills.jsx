import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Skills.css';

const skillsData = {
  frontend: [
    { name: 'React', level: 65 },
    { name: 'Next.js', level: 15 },
    { name: 'TypeScript', level: 55 },
    { name: 'JavaScript (ES6+)', level: 75 },
    { name: 'Tailwind CSS', level: 68 },
    { name: 'UI/UX Design', level: 75 }
  ],

  backend: [
    { name: 'Node.js', level: 65 },
    { name: 'Express', level: 60 },
    { name: 'MongoDB', level: 70 },
    { name: 'PostgreSQL', level: 35 },
    { name: 'RESTful APIs', level: 70 },
    { name: 'Python (Flask/FastAPI)', level: 55 }
  ],

  tools: [
    { name: 'Git & GitHub', level: 70 },
    { name: 'Docker', level: 50 },
    { name: 'Linux / Zsh', level: 70 },
    { name: 'Figma', level: 72 },
    { name: 'VS Code', level: 80 },
    { name: 'Postman', level: 65 }
    ],
    };


const SkillBar = ({ skill, index }) => {
  const [barRef, barVisible] = useScrollAnimation({ threshold: 0.3 });

  return (
    <div 
      ref={barRef}
      className={`skill-item fade-in ${barVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="skill-info">
        <span className="skill-name">
          <span className="terminal-symbol">&gt;</span> {skill.name}
        </span>
        <span className="skill-level">{skill.level}%</span>
      </div>
      <div className="skill-bar-container">
        <div 
          className={`skill-bar-fill ${barVisible ? 'animate' : ''}`}
          style={{ 
            '--skill-level': `${skill.level}%`,
            animationDelay: `${index * 50}ms`
          }}
        ></div>
      </div>
    </div>
  );
};

const SkillCategory = ({ title, skills, icon }) => {
  const [categoryRef, categoryVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <div 
      ref={categoryRef}
      className={`skill-category fade-in ${categoryVisible ? 'visible' : ''}`}
    >
      <div className="category-header">
        <span className="category-icon">{icon}</span>
        <h3 className="category-title">{title}</h3>
      </div>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <SkillBar key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 
          ref={titleRef}
          className={`section-title fade-in ${titleVisible ? 'visible' : ''}`}
        >
          Skills
        </h2>

        <div className="skills-grid">
          <SkillCategory 
            title="Frontend Development" 
            skills={skillsData.frontend}
            icon="⚛️"
          />
          <SkillCategory 
            title="Backend Development" 
            skills={skillsData.backend}
            icon="⚙️"
          />
          <SkillCategory 
            title="Tools & Technologies" 
            skills={skillsData.tools}
            icon="🛠️"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
