import React from 'react';
import './Footer.css';

const Footer = () => {

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
                  <a href="/early-access" className="footer-ea-link">Get Access</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Follow us</h4>
              <ul>
                <li>
                  <a href="https://x.com/Juniors_ai" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.629L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    X (Twitter)
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/juniors-ai/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Legal</h4>
              <ul>
                <li><a href="/privacy">Privacy policy</a></li>
                <li><a href="/terms">Terms of use</a></li>
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
