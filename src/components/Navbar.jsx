import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const handleNav = (href) => {
    closeMenu();
    // Small delay so menu closes before scroll
    setTimeout(() => {
      if (href.startsWith('#')) {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <>
      <motion.nav
        className="navbar"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="navbar-container">
          <div className="navbar-logo">
            <img src="/logo.png" alt="Juniors Logo" style={{ height: '72px' }} />
          </div>

          {/* Desktop links */}
          <ul className="navbar-links">
            <li><a href="#why">Why Juniors</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
          </ul>

          <div className="navbar-right">
            <div className="navbar-cta">
              <button className="btn-primary" onClick={() => navigate('/early-access')}>
                Get Access
              </button>
            </div>

            {/* Hamburger — mobile only */}
            <button
              className={`navbar-hamburger ${menuOpen ? 'is-open' : ''}`}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="mobile-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
            />

            {/* Drawer */}
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            >
              <ul className="mobile-menu-links">
                <li><a href="#why"      onClick={() => handleNav('#why')}>Why Juniors</a></li>
                <li><a href="#features" onClick={() => handleNav('#features')}>Features</a></li>
                <li><a href="#pricing"  onClick={() => handleNav('#pricing')}>Pricing</a></li>
              </ul>
              <button
                className="btn-primary mobile-menu-cta"
                onClick={() => { closeMenu(); navigate('/early-access'); }}
              >
                Get Access
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
