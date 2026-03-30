import React from 'react';
import { motion } from 'framer-motion';
import './StatsBand.css';

const stats = [
  {
    value: "$0",
    label: "LLM markup.",
    desc: "Pay your LLM provider directly."
  },
  {
    value: "0 bytes",
    label: "of your data",
    desc: "stored on our servers."
  },
  {
    value: "100%",
    label: "transparency.",
    desc: "See every response, every escalation."
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const StatsBand = () => {
  return (
    <section className="stats-section section">
      <div className="container">
        <motion.div 
          className="stats-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              className="stat-item" 
              variants={item}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="stat-value">{stat.value}</div>
              <div className="stat-text">
                <span className="stat-label">{stat.label}</span> {stat.desc}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsBand;
