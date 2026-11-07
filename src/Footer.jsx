import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer glass-panel">
      <div className="footer-content">
        <div className="footer-logo">
          Estiphanos<span className="text-gradient">.Dev</span>
        </div>
        <p className="footer-text">
          &copy; {currentYear} Estiphanos Alemu. All rights reserved.
        </p>
        <p className="footer-subtext">
          Built with React & Modern CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
