import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-cols">
        <div className="col">
          <h4>CareerAI</h4>
          <p>Intelligent hiring for the future.</p>
        </div>
        <div className="col">
          <h4>Company</h4>
          <p>About</p>
          <p>Blog</p>
        </div>
        <div className="col">
          <h4>Legal</h4>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
        <div className="col">
          <h4>Connect</h4>
          <p>Twitter</p>
          <p>LinkedIn</p>
        </div>
      </div>
      <p className="copyright">© 2025 CareerAI. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
