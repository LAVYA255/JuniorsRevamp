import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer-section section-dark">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/logo%20light.png" alt="Juniors Logo" style={{ height: '96px' }} />
            </div>
            <p className="footer-tagline">
              Simple automations that<br />give you your time back.
            </p>
          </div>

          <div className="footer-links-grid">
            <div className="footer-column">
              <h4 className="footer-heading">Navigate</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#features">Features</a></li>
                <li>
                  <button className="footer-ea-link" onClick={() => navigate('/early-access')}>
                    Get Early Access
                  </button>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Follow us</h4>
              <ul>
                <li><a href="https://x.com/Juniors_ai" target="_blank" rel="noopener noreferrer">X (Twitter)</a></li>
                <li><a href="https://www.linkedin.com/company/juniors-ai/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Legal</h4>
              <ul>
                <li><Link to="/privacy">Privacy policy</Link></li>
                <li><Link to="/terms">Terms of use</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            © 2026 Juniors. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
