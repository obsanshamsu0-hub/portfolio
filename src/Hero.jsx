import './Hero.css';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h4 className="greeting">Hello, I'm</h4>
        <h1 className="name">Estiphanos Alemu</h1>
        <h2 className="title">
          <span className="text-gradient">
            <Typewriter
              words={['Full Stack Developer', 'Android Engineer', 'AI Enthusiast', 'Video Editor']}
              loop={0}
              cursor
              cursorStyle='|'
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>
        <p className="bio">
          Computer Science student at Jimma University with a passion for building beautiful, 
          responsive websites and intelligent Android applications. Enthusiastic about AI and creating digital solutions.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="#contact" className="btn-secondary">Contact Me</a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="glow-circle"></div>
        <div className="glass-panel profile-card">
          <div className="profile-img-placeholder">
            <span>EA</span>
          </div>
          <div className="profile-info">
            <h3>Estiphanos A.</h3>
            <p>Web & Mobile Dev</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
