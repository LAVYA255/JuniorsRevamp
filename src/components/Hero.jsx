import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css';

const lines = Array.from({ length: 45 }).map((_, i) => {
  const angle = Math.random() * 360;
  const delay = Math.random() * 4;
  const duration = Math.random() * 2 + 2;
  const distance = Math.random() * 300 + 500; // Distance max
  return { id: i, angle, delay, duration, distance };
});

const Hero = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="hero-section">
      <div className="particles-container">
        {lines.map((line) => (
          <div
            key={line.id}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: `rotate(${line.angle}deg)`
            }}
          >
            <motion.div
              className="particle-line"
              initial={{ x: line.distance, opacity: 0 }}
              animate={{ 
                x: [line.distance, 100],
                opacity: [0, 0.4, 0]
              }}
              transition={{
                duration: line.duration,
                repeat: Infinity,
                delay: line.delay,
                ease: "linear"
              }}
            />
          </div>
        ))}
      </div>

      <motion.div 
        className="hero-content container text-center"
        style={{ y, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        >
          <span className="badge">Built for teams who own their stack</span>
        </motion.div>
        
        <motion.h1 
          className="text-hero hero-title"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          Customer support that runs on your <br className="hidden-mobile" /> infrastructure, <span className="text-secondary">not ours.</span>
        </motion.h1>
        
        <motion.p 
          className="text-body-lg hero-subtitle"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          The first AI support console where you bring your own infrastructure. No data stored on our servers. No LLM markup. Full control. You own everything. AI resolution, routing, customer conversation and analytics.
        </motion.p>
        
        <motion.div 
          className="hero-ctas"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button className="btn-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => navigate('/early-access')}>
            Get early access
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </motion.button>
          
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
