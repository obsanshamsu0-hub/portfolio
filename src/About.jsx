import './About.css';
import { FaLaptopCode, FaMobileAlt, FaVideo, FaBrain } from 'react-icons/fa';

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-content glass-panel">
        <div className="about-text">
          <h3>My Journey</h3>
          <p>
            I am currently studying Computer Science at <strong>Jimma University</strong>. 
            My passion lies in crafting robust digital experiences, ranging from beautiful websites 
            to intuitive Android applications. 
          </p>
          <p>
            I hold a certificate from <strong>Ethio Coder</strong> (Skills Up program) and am deeply 
            interested in Artificial Intelligence. Whether it's developing a system for a local Kebele 
            or exploring the latest tech, I strive for excellence in every project.
          </p>
        </div>
        
        <div className="about-cards">
          <div className="card">
            <FaLaptopCode className="card-icon" />
            <h4>Web Dev</h4>
            <p>React, Node.js, PHP</p>
          </div>
          <div className="card">
            <FaMobileAlt className="card-icon" />
            <h4>Android</h4>
            <p>Kotlin, Java</p>
          </div>
          <div className="card">
            <FaBrain className="card-icon" />
            <h4>AI Enthusiast</h4>
            <p>Exploring ML & AI</p>
          </div>
          <div className="card">
            <FaVideo className="card-icon" />
            <h4>Video Editing</h4>
            <p>Creative Media</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
