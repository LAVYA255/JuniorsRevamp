import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Coins, Bot } from 'lucide-react';
import './WhyJuniors.css';

const reasons = [
  {
    icon: Coins,
    title: "Bring your own everything",
    subtitle: "(Cost + Control)",
    body: "You already have the infrastructure. Why pay someone else to own your data? Traditional tools lock you into their stack. Database, storage, and overpriced AI. We don't. Just plug in your infra. We run the AI, routing, and agent layer. We store nothing.",
    tag: "Pay platform price, not infra markups"
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    subtitle: "without the conversation",
    body: "Other platforms ask you to trust their security. We remove the question entirely. Your support data lives in infrastructure. When auditors ask where the data lives, the answer is simple: your servers. Compliance becomes a non-conversation.",
    tag: "Zero data residency on our side"
  },
  {
    icon: Bot,
    title: "AI-First",
    subtitle: "Humans When It Matters",
    body: "Your RAG-powered knowledge base feeds the AI. The AI resolves what it can and escalates what it cannot. Configurable LLMs, visible routing logic, and analytics that show exactly where AI stops and humans start.",
    tag: "Choose your LLM. Fully transparent."
  }
];

const WhyJuniors = () => {
  return (
    <section id="why" className="section why-section">
      <div className="container">
        <motion.div 
          className="why-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.4 }}
        >
          <span className="badge">Why Juniors</span>
          <h2 className="text-h2 why-title">Built for teams who refuse to compromise.</h2>
        </motion.div>

        <div className="why-cards">
          {reasons.map((reason, index) => {
            const isMiddle = index === 1;
            return (
              <motion.div 
                key={index}
                className={`why-card ${isMiddle ? 'card-raised' : ''}`}
                initial={{ opacity: 0, y: 50 + (index * 20) }}
                whileInView={{ opacity: 1, y: isMiddle ? -20 : 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                whileHover={{ y: isMiddle ? -25 : -5 }}
              >
                <div className="card-top">
                  <div className="card-number">0{index + 1}</div>
                  <reason.icon className="card-icon" size={24} />
                </div>
                <h3 className="card-title">
                  {reason.title}
                  <span className="card-subtitle">{reason.subtitle}</span>
                </h3>
                <p className="card-body text-body-lg">{reason.body}</p>
                <div className="card-tag">{reason.tag}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyJuniors;
