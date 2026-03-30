import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './PrivacyPolicy.css';

const Section = ({ id, title, children }) => (
  <div className="pp-section" id={id}>
    <h2 className="pp-section-title">{title}</h2>
    {children}
  </div>
);

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  const onClose = () => navigate('/');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="pp-page"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
        {/* Sticky top bar */}
        <div className="pp-topbar">
          <div className="pp-topbar-inner">
            <div className="pp-topbar-brand">
              <img src="/logo.png" alt="Juniors" style={{ height: '40px' }} />
            </div>
            <button className="pp-close" onClick={onClose} aria-label="Close">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
              Back to site
            </button>
          </div>
        </div>

        <div className="pp-body">
          {/* Hero */}
          <div className="pp-hero">
            <span className="badge">Legal</span>
            <h1 className="pp-title">Privacy Policy</h1>
            <p className="pp-meta">
              Juniors AI &mdash; a product of <strong>Highfox Private Limited</strong><br />
              Last updated: <strong>July 25, 2025</strong>
            </p>
            <p className="pp-intro">
              This Privacy Policy explains how Highfox Private Limited, operating as Juniors AI ("<strong>Juniors</strong>", "<strong>we</strong>", "<strong>us</strong>", or "<strong>our</strong>"), handles information in connection with the Juniors platform. Given our <strong>bring-your-own-infrastructure (BYOI)</strong> architecture, the scope of data we collect and process is intentionally minimal — your customer data stays on your infrastructure, not ours. This policy applies to account holders, team members, and visitors to our website.
            </p>
          </div>

          {/* Contact card */}
          <div className="pp-contact-card">
            <div className="pp-contact-row">
              <span className="pp-contact-label">Company</span>
              <span>Highfox Private Limited</span>
            </div>
            <div className="pp-contact-row">
              <span className="pp-contact-label">Email</span>
              <a href="mailto:support@juniors.ai">support@juniors.ai</a>
            </div>
            <div className="pp-contact-row">
              <span className="pp-contact-label">Website</span>
              <a href="https://juniors.ai" target="_blank" rel="noopener noreferrer">juniors.ai</a>
            </div>
            <div className="pp-contact-row">
              <span className="pp-contact-label">Address</span>
              <span>Bunglow No. 25, Shreesh Co-Operative Housing Society, Hajuri Darga Road, Thane, Maharashtra 400604, India</span>
            </div>
          </div>

          <Section id="pp-1" title="1. The BYOI Principle and What It Means for Your Privacy">
            <p>Juniors is built on a zero-data-residency model. This is the single most important fact about how we handle data:</p>
            <ul>
              <li><strong>Customer conversation data</strong> — support tickets, chat histories, agent notes, and end-user messages — is stored exclusively in the infrastructure <em>you</em> provide and control. It never passes through or resides on Juniors' servers.</li>
              <li><strong>Your knowledge base</strong> — documents, FAQs, and other content you index for RAG-powered AI resolution — is processed in your designated infrastructure. Juniors does not retain copies of this content.</li>
              <li><strong>LLM inference</strong> — all AI requests are routed directly to your chosen LLM provider using credentials you supply. Juniors does not intercept, log, or store these requests or responses on our side.</li>
            </ul>
            <p>This architecture means the bulk of operational data in your support platform is governed by your own privacy obligations, not ours. This policy covers the narrower category of data Juniors does handle directly.</p>
          </Section>

          <Section id="pp-2" title="2. Information We Collect">
            <p><strong>2.1 Account and Registration Data</strong></p>
            <p>When you create a Juniors account or register for our services, we collect:</p>
            <ul>
              <li>Full name and work email address of account holders and invited team members</li>
              <li>Company name and website</li>
              <li>Job title or role (where provided)</li>
              <li>Billing information (processed via our payment provider; we do not store raw card details)</li>
              <li>Account preferences and configuration settings</li>
            </ul>

            <p><strong>2.2 Platform Usage and Metadata</strong></p>
            <p>As you use the Juniors console, we collect anonymised or aggregated platform metadata to understand how the product is used and to improve it:</p>
            <ul>
              <li>Feature interaction events (e.g., which modules are accessed, configuration changes made)</li>
              <li>Session duration and frequency</li>
              <li>Error logs and performance diagnostics</li>
              <li>Agent and admin action logs within the console (for audit trail purposes, stored on your infrastructure)</li>
            </ul>
            <p>This metadata does not include the content of customer conversations, ticket data, or knowledge base material.</p>

            <p><strong>2.3 Technical and Device Information</strong></p>
            <p>When you access the Juniors web console or our website, we automatically collect:</p>
            <ul>
              <li>IP address and general geographic region</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring URLs and page navigation within our site</li>
            </ul>

            <p><strong>2.4 Communications Data</strong></p>
            <p>If you contact us for support, submit an early access request, or otherwise communicate with us directly, we retain:</p>
            <ul>
              <li>The content of your messages and enquiries</li>
              <li>Your contact details as provided</li>
              <li>Records of our responses</li>
            </ul>

            <p><strong>2.5 Integration Credentials</strong></p>
            <p>When you configure third-party integrations (e.g., Slack, LLM providers, webhooks), you provide API keys and connection credentials. These are encrypted at rest and used solely to facilitate the integrations you configure. We do not use your credentials for any other purpose.</p>
          </Section>

          <Section id="pp-3" title="3. How We Use Your Information">
            <p>We use the information we collect for the following purposes:</p>
            <ul>
              <li><strong>Service delivery:</strong> Provisioning and maintaining your Juniors account, processing subscription payments, and enabling the features you configure.</li>
              <li><strong>Platform improvement:</strong> Analysing anonymised usage metadata to identify friction points, improve UX, and prioritise new features.</li>
              <li><strong>Customer support:</strong> Responding to your support requests, bug reports, and account queries.</li>
              <li><strong>Security and fraud prevention:</strong> Detecting and preventing unauthorised access, abuse, and security incidents.</li>
              <li><strong>Legal compliance:</strong> Meeting our obligations under applicable Indian laws, including the Digital Personal Data Protection Act, 2023 (DPDPA), and other applicable regulations.</li>
              <li><strong>Communications:</strong> Sending transactional emails (e.g., payment confirmations, account alerts) and, with your consent, product updates or early access announcements. You may opt out of non-transactional communications at any time.</li>
            </ul>
            <p>We do not use your data to train AI models, build advertising profiles, or sell insights to third parties.</p>
          </Section>

          <Section id="pp-4" title="4. Legal Basis for Processing">
            <p>Where applicable (including under GDPR for users in the European Economic Area), we process personal data on the following legal bases:</p>
            <ul>
              <li><strong>Contract performance:</strong> Processing necessary to provide the Juniors platform under your subscription agreement.</li>
              <li><strong>Legitimate interests:</strong> Security monitoring, product analytics, and fraud prevention — where these interests are not overridden by your rights.</li>
              <li><strong>Legal obligation:</strong> Compliance with applicable laws and regulatory requirements.</li>
              <li><strong>Consent:</strong> Marketing communications and optional data uses, where we have obtained your explicit consent. You may withdraw consent at any time.</li>
            </ul>
          </Section>

          <Section id="pp-5" title="5. Information Sharing and Disclosure">
            <p>We do not sell, rent, or broker your personal information. We share data only in the following limited circumstances:</p>

            <p><strong>5.1 Service Providers</strong></p>
            <p>We engage trusted third-party vendors to operate the Juniors platform, including cloud infrastructure providers, payment processors, email delivery services, and analytics tools. These providers process data on our behalf under contractual obligations that require them to protect it and use it only for the purposes we specify.</p>

            <p><strong>5.2 Your LLM and Integration Providers</strong></p>
            <p>When you configure third-party integrations (LLMs, Slack, webhooks, CRM systems), data flows to those services as directed by your configuration. Juniors does not control these providers. You are responsible for reviewing their privacy policies and ensuring your use of those integrations complies with your own obligations to your end-customers.</p>

            <p><strong>5.3 Legal Requirements</strong></p>
            <p>We may disclose information when required by law, court order, or regulatory authority, or when we believe in good faith that disclosure is necessary to protect the rights, property, or safety of Juniors, our customers, or the public.</p>

            <p><strong>5.4 Business Transfers</strong></p>
            <p>In the event of a merger, acquisition, restructuring, or sale of all or substantially all of our assets, your account information may be transferred to the successor entity. We will notify you of any such transfer and the resulting privacy implications with reasonable advance notice.</p>

            <p><strong>5.5 With Your Consent</strong></p>
            <p>We may share information in other circumstances with your explicit prior consent.</p>
          </Section>

          <Section id="pp-6" title="6. Data We Do Not Collect">
            <p>Given the BYOI architecture, the following data categories are explicitly <strong>not</strong> collected or stored by Juniors:</p>
            <ul>
              <li>The content of customer support conversations or chat transcripts</li>
              <li>Support ticket data, customer profiles, or CRM records from your system</li>
              <li>Knowledge base documents or training material you index for AI resolution</li>
              <li>LLM prompts, completions, or AI-generated responses within your support console</li>
              <li>End-user (your customers') personal information of any kind</li>
              <li>Agent activity logs beyond what is stored on your own infrastructure</li>
            </ul>
            <p>You are the data controller for all of the above. Juniors acts as a processor only for the limited account and usage data described in Section 2.</p>
          </Section>

          <Section id="pp-7" title="7. Cookies and Tracking Technologies">
            <p>We use cookies and similar technologies on our website and within the Juniors console for the following purposes:</p>
            <ul>
              <li><strong>Essential cookies:</strong> Required for the platform to function — session management, authentication tokens, and security features. These cannot be disabled without breaking core functionality.</li>
              <li><strong>Analytics cookies:</strong> Anonymised tracking of page views, feature usage, and navigation flows to improve the product. We use privacy-respecting analytics tools that do not build individual advertising profiles.</li>
              <li><strong>Preference cookies:</strong> Storing your UI preferences (e.g., theme, language, dashboard layout) across sessions.</li>
            </ul>
            <p>You can manage cookie preferences through your browser settings. Disabling non-essential cookies will not affect your ability to use the platform.</p>
          </Section>

          <Section id="pp-8" title="8. Data Retention">
            <p>We retain personal data only for as long as necessary for the purposes outlined in this policy:</p>
            <ul>
              <li><strong>Account data:</strong> Retained for the duration of your subscription and for up to 2 years after account closure, unless a shorter period is requested or required by law.</li>
              <li><strong>Billing records:</strong> Retained for 7 years in compliance with Indian tax and financial record-keeping requirements.</li>
              <li><strong>Support communications:</strong> Retained for up to 3 years from the date of the last interaction.</li>
              <li><strong>Usage metadata:</strong> Anonymised aggregated metrics may be retained indefinitely as they cannot be linked to individuals.</li>
              <li><strong>Integration credentials:</strong> Deleted promptly upon disconnection of the relevant integration or account closure.</li>
            </ul>
          </Section>

          <Section id="pp-9" title="9. Data Security">
            <p>We implement industry-standard technical and organisational measures to protect the data we hold:</p>
            <ul>
              <li>Encryption in transit (TLS 1.2+) for all data exchanged with the Juniors platform</li>
              <li>Encryption at rest for stored account data and integration credentials</li>
              <li>Role-based access controls within our own engineering and operations teams</li>
              <li>Regular security assessments and vulnerability monitoring</li>
              <li>Incident response procedures for detecting and addressing data breaches</li>
            </ul>
            <p>In the event of a data breach affecting your account information, we will notify you as required under applicable law, and in any case within 72 hours of becoming aware of the breach where feasible.</p>
            <p>No method of transmission over the internet is completely secure. While we take reasonable precautions, we cannot guarantee absolute security.</p>
          </Section>

          <Section id="pp-10" title="10. Your Rights">
            <p>Depending on your location, you may have the following rights with respect to your personal data:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information.</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data, subject to legal retention obligations.</li>
              <li><strong>Portability:</strong> Request your data in a structured, machine-readable format.</li>
              <li><strong>Restriction:</strong> Request that we limit how we process your data in certain circumstances.</li>
              <li><strong>Objection:</strong> Object to processing based on legitimate interests.</li>
              <li><strong>Withdraw consent:</strong> Withdraw consent for any processing based on consent (e.g., marketing emails) at any time, without affecting the lawfulness of prior processing.</li>
            </ul>
            <p>To exercise any of these rights, contact us at <a href="mailto:support@juniors.ai">support@juniors.ai</a>. We will respond within 30 days. We may need to verify your identity before processing your request.</p>
            <p>If you are located in the EU/EEA and are not satisfied with our response, you have the right to lodge a complaint with your local supervisory authority.</p>
          </Section>

          <Section id="pp-11" title="11. Your Obligations as a Customer (Data Controller)">
            <p>Because Juniors' BYOI model means your customers' data resides on your infrastructure, <strong>you are the data controller</strong> for all end-user personal data processed through the platform. This means you are responsible for:</p>
            <ul>
              <li>Providing your end-customers with a privacy notice that discloses the use of AI in support interactions;</li>
              <li>Obtaining any consents required by applicable law for AI-assisted communication, data processing, and any recording or logging of interactions on your infrastructure;</li>
              <li>Complying with data subject rights requests from your end-customers in relation to data stored on your infrastructure;</li>
              <li>Ensuring your infrastructure configuration meets applicable security and data protection standards;</li>
              <li>Entering into appropriate data processing agreements with any third-party LLM or integration providers you connect to Juniors.</li>
            </ul>
          </Section>

          <Section id="pp-12" title="12. International Data Transfers">
            <p>Highfox Private Limited is based in India. If you access Juniors from outside India, your account and usage data may be transferred to and processed in India.</p>
            <p>Where we engage service providers located in other jurisdictions, we ensure appropriate safeguards are in place, such as standard contractual clauses or equivalent mechanisms, to protect your data in accordance with applicable law.</p>
            <p>Because your operational support data (conversations, tickets, knowledge base) resides on your own infrastructure, international transfer rules for that data are governed by your own configuration and compliance obligations.</p>
          </Section>

          <Section id="pp-13" title="13. Children's Privacy">
            <p>The Juniors platform is designed for business use and is not intended for individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe a minor has provided us with personal information, please contact us at <a href="mailto:support@juniors.ai">support@juniors.ai</a> and we will delete it promptly.</p>
          </Section>

          <Section id="pp-14" title="14. Third-Party Links">
            <p>Our website and platform may contain links to third-party websites or services. This Privacy Policy does not apply to those sites. We encourage you to review the privacy policies of any third-party services you access through links on our platform.</p>
          </Section>

          <Section id="pp-15" title="15. Changes to This Privacy Policy">
            <p>We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or product features. When we make material changes:</p>
            <ul>
              <li>We will update the "Last Updated" date at the top of this page;</li>
              <li>We will notify you via email to your account's primary contact address and/or an in-platform notification at least 14 days before changes take effect;</li>
              <li>For significant changes that affect how we use your data in a materially different way, we will seek fresh consent where required.</li>
            </ul>
            <p>Your continued use of the platform after the effective date of any changes constitutes acceptance of the updated policy.</p>
          </Section>

          <Section id="pp-16" title="16. Contact Us">
            <p>For any questions, concerns, or requests related to this Privacy Policy or your personal data, please reach out to us:</p>
            <div className="pp-contact-card pp-contact-card--light">
              <div className="pp-contact-row">
                <span className="pp-contact-label">Email</span>
                <a href="mailto:support@juniors.ai">support@juniors.ai</a>
              </div>
              <div className="pp-contact-row">
                <span className="pp-contact-label">Website</span>
                <a href="https://juniors.ai" target="_blank" rel="noopener noreferrer">juniors.ai</a>
              </div>
              <div className="pp-contact-row">
                <span className="pp-contact-label">Address</span>
                <span>Bunglow No. 25, Shreesh Co-Operative Housing Society, Hajuri Darga Road, Thane, Maharashtra 400604, India</span>
              </div>
            </div>
            <p style={{ marginTop: '1rem' }}>We aim to respond to all privacy-related enquiries within <strong>30 days</strong>.</p>
          </Section>

          <div className="pp-footer">
            <p>© 2025 Highfox Private Limited. All rights reserved.</p>
            <button className="btn-primary pp-back-btn" onClick={onClose}>Back to site</button>
          </div>
        </div>
    </motion.div>
  );
};

export default PrivacyPolicy;
