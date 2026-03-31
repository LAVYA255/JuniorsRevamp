import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MessagesSquare, Users, LineChart, Clock, Workflow } from 'lucide-react';
import { fadeUp } from '../utils/motion';
import './Features.css';

const features = [
  { icon: Sparkles,      title: "AI-first resolution",   body: "RAG-powered answers from your knowledge base. Confidence-based escalation to humans. Configurable primary + backup LLMs." },
  { icon: MessagesSquare,title: "Agent console",          body: "Real-time chat, internal notes, saved replies with slash commands, park and resume, blocked-department alerts via Slack." },
  { icon: Users,         title: "Role-based access",      body: "Agents see their tickets. Supervisors see their team. Admins see everything. Nothing leaks across roles." },
  { icon: LineChart,     title: "Analytics that matter",  body: "My Performance, Team Performance, Organization, with AI resolution rates, conversation trends, SLA tracking, and time-period filtering." },
  { icon: Clock,         title: "Configurable SLAs",      body: "Set first-response, resolution, and escalation targets per priority level. Breaches trigger automatic alerts so nothing slips." },
  { icon: Workflow,      title: "Custom Integrations",    body: "Connects securely with your existing backend API and third-party tools via custom webhooks and deep internal API access." },
];

const Features = () => (
  <section id="features" className="section section-dark features-section">
    <div className="container">
      <motion.div className="features-header text-center" {...fadeUp()}>
        <span className="badge">Built for support ops</span>
        <h2 className="text-h2 features-title">Everything a support team needs.</h2>
      </motion.div>

      <div className="features-grid">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            className="feature-card"
            {...fadeUp(i * 0.07)}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <div className="feature-icon-wrapper">
              <feature.icon className="feature-icon" size={24} />
            </div>
            <h3 className="feature-title text-h3">{feature.title}</h3>
            <p className="feature-body text-body-lg">{feature.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
