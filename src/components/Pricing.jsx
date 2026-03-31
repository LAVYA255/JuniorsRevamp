import React from 'react';
import { motion } from 'framer-motion';
import { fadeLeft, fadeRight } from '../utils/motion';
import './Pricing.css';

const Pricing = () => (
  <section id="pricing" className="section section-dark pricing-section">
    <div className="container">
      <div className="pricing-content">
        <motion.div className="pricing-header" {...fadeLeft()}>
          <span className="badge">Pricing</span>
          <h2 className="text-h2 pricing-title">
            Transparent by design. <br className="hidden-mobile" /> No hidden fees. <br />No token markup.
          </h2>
        </motion.div>

        <motion.div className="pricing-details" {...fadeRight(0.1)}>
          <motion.div
            className="pricing-card"
            whileHover={{ y: -10, boxShadow: '0 20px 60px rgba(0,0,0,0.06)' }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="pricing-statement">A flat platform fee. Your AI costs stay between you and your provider.</h3>
            <p className="pricing-description text-body-lg">
              Other platforms mark up every token your AI processes. We do not touch your LLM billing. You get a simple platform fee that covers the console, agent tools, and infrastructure orchestration.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Pricing;
