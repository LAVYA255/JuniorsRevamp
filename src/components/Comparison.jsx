import React from 'react';
import { motion } from 'framer-motion';
import './Comparison.css';

const rows = [
  { feature: "LLM", juniors: "Your choice", legacy: "Locked" },
  { feature: "Data", juniors: "Your infra", legacy: "Vendor cloud" },
  { feature: "Pricing", juniors: "Transparent", legacy: "Sales-led" },
  { feature: "Setup", juniors: "15 minutes", legacy: "Weeks/months" },
  { feature: "AI markup", juniors: "$0", legacy: "3–5× bundled" },
  { feature: "Contracts", juniors: "Monthly", legacy: "Annual" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const Comparison = () => {
  return (
    <section className="section comparison-section">
      <div className="container">
        <motion.div 
          className="comparison-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge">Comparison</span>
          <h2 className="text-h2 comparison-title">The legacy model is broken.</h2>
        </motion.div>

        <motion.div 
          className="table-wrapper"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <table className="comparison-table">
            <thead>
              <tr>
                <th><span className="sr-only">Features</span></th>
                <th className="juniors-col">Juniors AI</th>
                <th className="legacy-col">Legacy Platforms</th>
              </tr>
            </thead>
            <motion.tbody
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
            >
              {rows.map((row, index) => (
                <motion.tr 
                  key={index} 
                  variants={item}
                  className="comparison-row"
                  whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
                >
                  <td className="feature-col">{row.feature}</td>
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
};

export default Comparison;
