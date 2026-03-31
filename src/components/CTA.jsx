import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeUp } from '../utils/motion';
import './CTA.css';

const lines = Array.from({ length: 30 }).map((_, i) => ({
  id: i,
  angle: Math.random() * 360,
  delay: Math.random() * 4,
  duration: Math.random() * 2 + 2,
  distance: Math.random() * 200 + 300,
}));

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="section cta-section">
      <div className="container">
        <motion.div
          className="cta-content text-center"
          {...fadeUp()}
          whileHover={{ scale: 1.02 }}
        >
          <div className="cta-inner">
            <div className="cta-particles">
              {lines.map((line) => (
                <div key={line.id} style={{ position: 'absolute', top: '50%', left: '50%', transform: `rotate(${line.angle}deg)` }}>
                  <motion.div
                    className="cta-particle-line"
                    initial={{ x: line.distance, opacity: 0 }}
                    animate={{ x: [line.distance, 50], opacity: [0, 0.6, 0] }}
                    transition={{ duration: line.duration, repeat: Infinity, delay: line.delay, ease: 'linear' }}
                  />
                </div>
              ))}
            </div>

            <h2 className="text-hero cta-title">Your customers.<br /> Your data. Your AI.</h2>
            <h3 className="cta-subtitle text-h2">Finally, your platform too.</h3>

            <p className="cta-text text-body-lg">
              Get access to the support console built for teams who refuse to hand over their data, their margins, or their flexibility.
            </p>

            <motion.button
              className="btn-primary cta-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/early-access')}
            >
              Get Access
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
