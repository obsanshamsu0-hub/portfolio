import './Contact.css';
import { FaEnvelope, FaPhoneAlt, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container glass-panel">
        <div className="contact-info">
          <h3>Let's talk about your next project!</h3>
          <p>
            Feel free to reach out to me for web development, Android applications, 
            or any exciting opportunities. I'm always open to discussing new projects, 
            creative ideas, or opportunities to be part of your visions.
          </p>
          
          <div className="contact-methods">
            <div className="method">
              <FaEnvelope className="method-icon" />
              <div>
                <h4>Email</h4>
                <a href="mailto:estiphansoalemu43@gmail.com">estiphansoalemu43@gmail.com</a>
              </div>
            </div>
            
            <div className="method">
              <FaPhoneAlt className="method-icon" />
              <div>
                <h4>Phone</h4>
                <a href="tel:+251975299970">0975299970</a>
                <br />
                <a href="tel:+251710035884">0710035884</a>
              </div>
            </div>

            <div className="method">
              <FaFacebook className="method-icon" />
              <div>
                <h4>Facebook</h4>
                <a href="https://facebook.com/estiphanosabeba" target="_blank" rel="noreferrer">estiphanosabeba</a>
              </div>
            </div>
          </div>
        </div>
        
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn-primary form-submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
