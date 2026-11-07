import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 75 },
    { name: 'HTML / CSS / JS', level: 90 },
    { name: 'PHP', level: 70 },
    { name: 'Kotlin (Android)', level: 80 },
    { name: 'Video Editing', level: 85 }
  ];

  return (
    <section className="skills" id="skills">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-container glass-panel">
        {skills.map((skill, index) => (
          <div className="skill-bar-wrapper" key={index}>
            <div className="skill-info">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="skill-progress-bg">
              <div 
                className="skill-progress-fill" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
