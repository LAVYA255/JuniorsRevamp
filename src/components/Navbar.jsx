import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
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

        <ul className="navbar-links">
          <li><a href="#why">Why Juniors</a></li>
          <li><a href="#how">How it works</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
        </ul>

        <div className="navbar-cta">
          <button className="btn-primary" onClick={() => navigate('/early-access')}>
            Get Access
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
