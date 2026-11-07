import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Kebele Resident Data Management',
      description: 'A comprehensive system built for a local Kebele to digitize resident registration, services, demographics tracking, and certificate requests.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      link: '#'
    },
    {
      title: 'School Website Platform',
      description: 'A modern, responsive website developed for a local school to showcase their programs, manage announcements, and connect with students.',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      link: '#'
    },
    {
      title: 'AI Image Analyzer (Android)',
      description: 'An experimental Android application integrating basic machine learning models for on-device image analysis.',
      tech: ['Kotlin', 'Android Studio', 'TensorFlow Lite'],
      link: '#'
    }
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card glass-panel" key={index}>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.tech.map((tech, i) => (
                  <span className="tag" key={i}>{tech}</span>
                ))}
              </div>
            </div>
            <a href={project.link} className="project-link">View Project →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
