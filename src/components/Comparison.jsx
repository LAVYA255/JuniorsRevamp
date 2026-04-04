import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem } from '../utils/motion';
import './Comparison.css';

const rows = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    feature: "LLM",       juniors: "Your choice",   legacy: "Locked",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>
      </svg>
    ),
    feature: "Data",      juniors: "Your infra",    legacy: "Vendor cloud",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    feature: "Pricing",   juniors: "Transparent",   legacy: "Sales-led",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    feature: "Setup",     juniors: "15 minutes",    legacy: "Weeks/months",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/>
      </svg>
    ),
    feature: "AI markup",  juniors: "$0",             legacy: "3–5× bundled",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    feature: "Contracts",  juniors: "Monthly",        legacy: "Annual",
  },
];

const Comparison = () => (
  <section id="comparison" className="section comparison-section">
    <div className="container">
      <motion.div className="comparison-header text-center" {...fadeUp()}>
        <span className="badge">Comparison</span>
        <h2 className="text-h2 comparison-title">The legacy model is broken.</h2>
      </motion.div>

      <motion.div className="table-wrapper" {...fadeUp(0.1)}>
        <table className="comparison-table">
          <thead>
            <tr>
              <th><span className="sr-only">Features</span></th>
              <th className="juniors-col">
                <img src="/logo.png" alt="Juniors AI" className="comparison-logo" />
              </th>
              <th className="legacy-col">Legacy Platforms</th>
            </tr>
          </thead>
          <motion.tbody
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}
          >
            {rows.map((row, index) => (
              <motion.tr
                key={index}
                variants={staggerItem}
                className="comparison-row"
                whileHover={{ backgroundColor: 'rgba(0,0,0,0.02)' }}
              >
                <td className="feature-col">
                  <span className="feature-label">
                    <span className="feature-icon">{row.icon}</span>
                    {row.feature}
                  </span>
                </td>
                <td className="juniors-col">{row.juniors}</td>
                <td className="legacy-col">{row.legacy}</td>
              </motion.tr>
            ))}
          </motion.tbody>
        </table>
      </motion.div>
    </div>
  </section>
);

export default Comparison;
