import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './TermsOfUse.css';

const Section = ({ id, title, children }) => (
  <div className="tou-section" id={id}>
    <h2 className="tou-section-title">{title}</h2>
    {children}
  </div>
);

const TermsOfUse = () => {
  const onClose = () => { window.location.href = '/'; };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="tou-page"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
        {/* Sticky header */}
        <div className="tou-topbar">
          <div className="tou-topbar-inner">
            <div className="tou-topbar-brand">
              <img src="/logo.png" alt="Juniors" style={{ height: '40px' }} />
            </div>
            <button className="tou-close" onClick={onClose} aria-label="Close">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
              Back to site
            </button>
          </div>
        </div>

        <div className="tou-body">
          {/* Hero */}
          <div className="tou-hero">
            <span className="badge">Legal</span>
            <h1 className="tou-title">Terms of Use</h1>
            <p className="tou-meta">
              Juniors AI , a product of <strong>Herpenza Private Limited</strong><br />
              Last updated: <strong>July 25, 2025</strong>
            </p>
            <p className="tou-intro">
              These Terms of Use ("<strong>Terms</strong>") constitute a legally binding agreement between you ("<strong>Customer</strong>", "<strong>you</strong>", or "<strong>your</strong>") and Herpenza Private Limited, operating as Juniors AI ("<strong>Juniors</strong>", "<strong>we</strong>", "<strong>us</strong>", or "<strong>our</strong>"). By accessing or using the Juniors platform you agree to be bound by these Terms in full. If you do not agree, you must not use our services.
            </p>
          </div>

          {/* Contact callout */}
          <div className="tou-contact-card">
            <div className="tou-contact-row">
              <span className="tou-contact-label">Company</span>
              <span>Herpenza Private Limited</span>
            </div>
            <div className="tou-contact-row">
              <span className="tou-contact-label">Email</span>
              <a href="mailto:rahul@juniors.ai">rahul@juniors.ai</a>
            </div>
            <div className="tou-contact-row">
              <span className="tou-contact-label">Website</span>
              <a href="https://juniors.ai" target="_blank" rel="noopener noreferrer">juniors.ai</a>
            </div>
            <div className="tou-contact-row">
              <span className="tou-contact-label">Address</span>
              <span>19, Shankar Vihar Vistar, Charan Nadi 2, Murlipura, Jaipur – 302039, India</span>
            </div>
          </div>

          <Section id="tou-1" title="1. Acceptance of Terms">
            <p>By creating an account, accessing the platform, or otherwise using Juniors, you confirm that:</p>
            <ul>
              <li>You have read and understood these Terms;</li>
              <li>You have the legal authority to bind yourself or the organisation on whose behalf you are acting;</li>
              <li>You are at least 18 years of age.</li>
            </ul>
            <p>Use of the platform constitutes ongoing acceptance of these Terms and any amendments posted thereafter.</p>
          </Section>

          <Section id="tou-2" title="2. Description of Services">
            <p>Juniors is a <strong>bring-your-own-infrastructure (BYOI) AI customer support console</strong>. Our platform orchestrates AI resolution, agent tooling, and analytics entirely on top of infrastructure you own and control. The services include, but are not limited to:</p>
            <ul>
              <li><strong>AI-First Resolution:</strong> RAG-powered answers sourced from your knowledge base, with configurable primary and backup LLMs. Confidence-based escalation automatically routes unresolved queries to human agents.</li>
              <li><strong>Agent Console:</strong> Real-time customer chat, internal notes, saved replies with slash commands, conversation parking and resumption, and Slack-based blocked-department alerts for human support agents.</li>
              <li><strong>Role-Based Access Control (RBAC):</strong> Granular permission tiers,Agents, Supervisors, and Admins,ensuring data and queue visibility is scoped strictly to each role.</li>
              <li><strong>Analytics &amp; Reporting:</strong> Individual performance dashboards, team-level views, and organisation-wide reporting covering AI resolution rates, conversation trends, SLA compliance, and configurable time-period filters.</li>
              <li><strong>SLA Management:</strong> Configurable first-response, resolution, and escalation targets per priority level, with automated breach alerts to prevent SLA violations.</li>
              <li><strong>Custom Integrations:</strong> Secure connectivity to your existing backend systems and third-party tools via custom webhooks, REST API access, and deep internal API hooks.</li>
              <li><strong>Slack Integration:</strong> Real-time operational alerts for blocked departments, SLA breaches, and escalation events delivered directly to your configured Slack workspace.</li>
            </ul>
            <p>Juniors is a <em>platform layer only</em>. We do not provide or operate the underlying databases, storage systems, or LLM inference infrastructure used to deliver your support experience.</p>
          </Section>

          <Section id="tou-3" title="3. Bring-Your-Own-Infrastructure (BYOI) Model">
            <p>Juniors operates on a strict BYOI model. This means:</p>
            <ul>
              <li><strong>Your Infrastructure:</strong> You connect Juniors to infrastructure you own or license,including databases, object storage, and LLM API credentials. Juniors orchestrates these; it does not host them.</li>
              <li><strong>Zero Data Residency on Our Side:</strong> Customer conversation data, support tickets, agent activity, and knowledge base content reside entirely within the infrastructure you designate. Juniors stores no customer or end-user data on its own servers.</li>
              <li><strong>LLM Selection:</strong> You select, configure, and pay directly for the large language model (LLM) provider of your choice. Juniors applies no markup to LLM token costs. Your AI billing remains exclusively between you and your chosen provider.</li>
              <li><strong>Configuration Responsibility:</strong> You are solely responsible for the correct and secure configuration of the infrastructure you connect to Juniors, including access credentials, permissions, and data retention settings.</li>
            </ul>
            <p>Because we do not hold your data, we cannot recover, export, or restore data lost due to misconfiguration or deletion on your infrastructure side.</p>
          </Section>

          <Section id="tou-4" title="4. Account Registration and Security">
            <p>To access Juniors you must register an account. You agree to:</p>
            <ul>
              <li>Provide accurate, current, and complete registration information and keep it up to date;</li>
              <li>Maintain the confidentiality of your login credentials and not share them with unauthorised parties;</li>
              <li>Notify us immediately at <a href="mailto:rahul@juniors.ai">rahul@juniors.ai</a> upon discovery of any unauthorised access to your account;</li>
              <li>Accept responsibility for all activity that occurs under your account credentials.</li>
            </ul>
            <p>We reserve the right to suspend or terminate accounts where there is evidence of compromised credentials or policy violations.</p>
          </Section>

          <Section id="tou-5" title="5. Role-Based Access and Team Administration">
            <p>Juniors implements a three-tier RBAC model:</p>
            <ul>
              <li><strong>Agents</strong> may access only the tickets and conversations assigned to them.</li>
              <li><strong>Supervisors</strong> may access all tickets and activity within their assigned team.</li>
              <li><strong>Admins</strong> have organisation-wide visibility and configuration rights.</li>
            </ul>
            <p>Account Admins are responsible for:</p>
            <ul>
              <li>Provisioning and deprovisioning user roles promptly, especially upon employee termination;</li>
              <li>Ensuring that role assignments reflect the minimum access necessary for each user's function;</li>
              <li>Auditing access logs periodically to detect anomalies.</li>
            </ul>
            <p>Juniors is not liable for data exposure resulting from incorrect role assignments made by your administrators.</p>
          </Section>

          <Section id="tou-6" title="6. Knowledge Base and AI Content">
            <p>You may upload, index, or connect knowledge base content to power AI-first resolution. With respect to this content:</p>
            <ul>
              <li>You represent and warrant that you own or hold the necessary rights to all knowledge base content you provide;</li>
              <li>You grant Juniors a limited, non-exclusive, revocable licence to process that content solely for the purpose of providing RAG-powered responses within your account;</li>
              <li>You acknowledge that AI-generated responses derived from your knowledge base may be imperfect. You remain responsible for the accuracy, completeness, and appropriateness of AI outputs served to your end-customers;</li>
              <li>Juniors does not retain a copy of your knowledge base content after the processing session; the indexed vectors or embeddings remain within the infrastructure you designate.</li>
            </ul>
          </Section>

          <Section id="tou-7" title="7. LLM and AI Services">
            <p>Juniors is LLM-agnostic and enables you to configure your preferred provider. The following terms apply:</p>
            <ul>
              <li><strong>Your Provider, Your Agreement:</strong> Your use of any LLM (e.g., OpenAI, Anthropic, Google, or others) is governed exclusively by that provider's terms and usage policies. You are solely responsible for compliance with those policies.</li>
              <li><strong>API Credentials:</strong> You are responsible for keeping LLM API keys secure and for all costs, usage, and liabilities arising from the use of those keys within your Juniors configuration.</li>
              <li><strong>No Warranty on AI Output:</strong> Juniors makes no warranty regarding the accuracy, reliability, or fitness of any AI-generated response. AI resolution is provided as a productivity aid; it does not substitute for human judgment in sensitive or high-stakes interactions.</li>
              <li><strong>Escalation:</strong> You are responsible for configuring confidence thresholds and escalation routing appropriately for your use case. Juniors is not liable for harm arising from AI responses that were not escalated to a human agent.</li>
              <li><strong>Prohibited AI Use:</strong> You may not use Juniors' AI capabilities to generate deceptive, discriminatory, harassing, or otherwise unlawful content directed at your end-customers or any third party.</li>
            </ul>
          </Section>

          <Section id="tou-8" title="8. Third-Party Integrations and Webhooks">
            <p>Juniors supports integration with third-party services including CRM systems, Slack, backend APIs, and others via webhooks and API connectors. You acknowledge that:</p>
            <ul>
              <li>Juniors is not responsible for the availability, security, or data practices of any third-party service you connect;</li>
              <li>You are responsible for reviewing and complying with the terms of any third-party service you integrate;</li>
              <li>Webhook endpoints you configure must be secured; Juniors is not liable for data exposure caused by insecure or misconfigured webhooks on your infrastructure;</li>
              <li>Juniors may temporarily suspend integration endpoints during scheduled maintenance or to address security vulnerabilities.</li>
            </ul>
          </Section>

          <Section id="tou-9" title="9. SLA Configuration and Service Levels">
            <p>Juniors provides tooling to define and track SLAs within your support operation. You understand that:</p>
            <ul>
              <li>SLA targets you configure within the platform are internal operational targets for your support team and do not constitute a service level agreement between you and Juniors regarding platform uptime or performance;</li>
              <li>Juniors will make commercially reasonable efforts to ensure platform availability but does not guarantee uninterrupted service (see Section 11);</li>
              <li>SLA breach alerts and escalation notifications depend on the availability of connected infrastructure (Slack, webhooks, etc.) which are outside Juniors' control.</li>
            </ul>
          </Section>

          <Section id="tou-10" title="10. Pricing, Billing, and Payment">
            <p>Juniors charges a flat platform fee for access to the console, agent tooling, and infrastructure orchestration layer. The following terms govern billing:</p>
            <ul>
              <li><strong>Platform Fee:</strong> Your subscription fee covers the Juniors platform only. All LLM inference costs, cloud storage costs, and third-party API costs are billed directly by your respective providers and are not included in our fees.</li>
              <li><strong>No Token Markup:</strong> Juniors applies no markup to AI or LLM token consumption. You pay your LLM provider directly at their published rates.</li>
              <li><strong>Monthly Billing:</strong> Subscriptions are billed monthly. You may cancel at any time; cancellation takes effect at the end of the current billing period.</li>
              <li><strong>Payment:</strong> You must maintain valid payment information on file. Failure to pay may result in suspension of access after reasonable notice.</li>
              <li><strong>Price Changes:</strong> We will provide at least 30 days' notice of any price change. Continued use after the effective date constitutes acceptance of the new pricing.</li>
              <li><strong>Taxes:</strong> Prices exclude applicable taxes (including GST where applicable under Indian law). You are responsible for all applicable taxes on your subscription.</li>
              <li><strong>Refunds:</strong> Fees paid are non-refundable except where required by applicable law or where we have materially failed to deliver the service.</li>
            </ul>
          </Section>

          <Section id="tou-11" title="11. Service Availability and Maintenance">
            <p>We strive to maintain high availability of the Juniors platform. However:</p>
            <ul>
              <li>We do not guarantee 100% uptime and are not liable for downtime outside our reasonable control;</li>
              <li>We may schedule maintenance windows and will endeavour to provide advance notice where possible;</li>
              <li>Availability of the platform is dependent in part on your own infrastructure. Issues arising from your connected systems are outside the scope of our uptime commitments;</li>
              <li>We will communicate significant outages via our status page and/or email to the account's primary contact.</li>
            </ul>
          </Section>

          <Section id="tou-12" title="12. Data Ownership and Privacy">
            <p>Given the BYOI architecture:</p>
            <ul>
              <li><strong>You own your data.</strong> All customer data, conversation records, agent activity, and analytics data generated through your use of Juniors belongs to you and resides in your designated infrastructure.</li>
              <li><strong>We do not sell your data.</strong> Juniors does not sell, lease, or broker access to your data or your end-customers' data to any third party.</li>
              <li><strong>Platform metadata:</strong> We may collect anonymised, aggregated platform usage metadata (e.g., feature adoption rates, session counts) for product improvement purposes. This data does not include your customer conversations or personally identifiable information.</li>
              <li><strong>Privacy Policy:</strong> Our handling of any personal data we do process (e.g., account holder information) is governed by our <a href="#">Privacy Policy</a>, incorporated herein by reference.</li>
              <li><strong>Compliance:</strong> You are solely responsible for ensuring your use of Juniors complies with all applicable data protection laws, including the Digital Personal Data Protection Act, 2023 (India), GDPR (where applicable), and any other jurisdiction-specific regulations.</li>
              <li><strong>End-customer consents:</strong> You are responsible for obtaining all required consents from your end-customers for data processing activities conducted through the platform, including the use of AI in customer interactions.</li>
            </ul>
          </Section>

          <Section id="tou-13" title="13. User Responsibilities and Acceptable Use">
            <p>You agree to use Juniors only for lawful purposes and in accordance with these Terms. You must not:</p>
            <ul>
              <li>Use the platform to harass, threaten, or harm any individual;</li>
              <li>Upload or transmit malicious code, viruses, or any software designed to damage or interfere with any system;</li>
              <li>Attempt to gain unauthorised access to any part of the platform or to other customers' accounts;</li>
              <li>Reverse-engineer, decompile, or disassemble any part of the platform;</li>
              <li>Resell, sublicense, or white-label the platform without express written consent from Juniors;</li>
              <li>Use the platform in a manner that violates the terms of your connected LLM provider;</li>
              <li>Circumvent any rate limits, usage quotas, or technical safeguards implemented in the platform;</li>
              <li>Use the platform to process data in jurisdictions where you do not have legal authority to do so.</li>
            </ul>
          </Section>

          <Section id="tou-14" title="14. Intellectual Property">
            <p><strong>Juniors' IP:</strong> The platform, its software, design, algorithms, and all associated intellectual property are owned by Herpenza Private Limited and protected under applicable intellectual property laws. These Terms grant you a limited, non-exclusive, non-transferable licence to use the platform for your internal business purposes during the term of your subscription.</p>
            <p><strong>Your IP:</strong> You retain full ownership of all content, data, and materials you bring to the platform, including your knowledge base, conversation histories, and brand assets.</p>
            <p><strong>Feedback:</strong> If you provide feedback, suggestions, or ideas regarding the platform, you grant Juniors a perpetual, royalty-free licence to use such feedback for product improvement without any obligation to you.</p>
          </Section>

          <Section id="tou-15" title="15. Confidentiality">
            <p>Both parties may have access to confidential information of the other in the course of the relationship. Each party agrees to:</p>
            <ul>
              <li>Hold the other party's confidential information in strict confidence;</li>
              <li>Not disclose such information to third parties without prior written consent, except as required by law;</li>
              <li>Use confidential information only to the extent necessary to fulfil obligations under these Terms.</li>
            </ul>
            <p>This obligation survives termination of your account for a period of three (3) years.</p>
          </Section>

          <Section id="tou-16" title="16. Disclaimer of Warranties">
            <p>THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.</p>
            <p>Juniors does not warrant that:</p>
            <ul>
              <li>The platform will meet your specific requirements;</li>
              <li>AI-generated responses will be accurate, complete, or free from error;</li>
              <li>The platform will be available without interruption, error, or security breach;</li>
              <li>Any defects in the platform will be corrected within a specific timeframe.</li>
            </ul>
          </Section>

          <Section id="tou-17" title="17. Limitation of Liability">
            <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, JUNIORS AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AFFILIATES SHALL NOT BE LIABLE FOR:</p>
            <ul>
              <li>Any indirect, incidental, special, consequential, or punitive damages;</li>
              <li>Loss of profits, revenue, data, goodwill, or business opportunity;</li>
              <li>Harm arising from AI-generated content served to your end-customers;</li>
              <li>Data loss or corruption arising from misconfigured infrastructure on your side;</li>
              <li>Third-party service failures (LLM providers, cloud infrastructure, Slack, etc.).</li>
            </ul>
            <p>In no event shall our aggregate liability to you exceed the total platform fees paid by you to Juniors in the three (3) months immediately preceding the event giving rise to the claim.</p>
          </Section>

          <Section id="tou-18" title="18. Indemnification">
            <p>You agree to indemnify, defend, and hold harmless Juniors, Herpenza Private Limited, and their respective officers, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising from:</p>
            <ul>
              <li>Your use of the platform in violation of these Terms;</li>
              <li>Your violation of any applicable law or third-party right;</li>
              <li>AI responses generated using your knowledge base or configuration that cause harm to end-customers;</li>
              <li>Misconfiguration of your connected infrastructure;</li>
              <li>Breach of data protection obligations owed to your end-customers.</li>
            </ul>
          </Section>

          <Section id="tou-19" title="19. Termination">
            <p><strong>By you:</strong> You may terminate your account at any time by contacting <a href="mailto:rahul@juniors.ai">rahul@juniors.ai</a>. Termination is effective at the end of the current billing period. No pro-rated refunds are issued for the remaining period.</p>
            <p><strong>By Juniors:</strong> We may suspend or terminate your access immediately and without prior notice if:</p>
            <ul>
              <li>You materially breach these Terms and fail to cure the breach within 7 days of written notice;</li>
              <li>You use the platform in a manner that poses a security risk or legal liability to Juniors or any third party;</li>
              <li>You fail to pay undisputed fees after 14 days' notice;</li>
              <li>We are required to do so by law or a competent authority.</li>
            </ul>
            <p><strong>Effect of termination:</strong> Upon termination, your access to the platform will cease. As Juniors does not hold your data, no data export from our side is required or possible. You should ensure your infrastructure retains all records you wish to preserve before terminating.</p>
          </Section>

          <Section id="tou-20" title="20. Governing Law and Dispute Resolution">
            <p>These Terms shall be governed by and construed in accordance with the laws of India, specifically the laws of the State of Maharashtra, without regard to conflict of law principles.</p>
            <p>Any dispute arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the courts in Thane, Maharashtra, India.</p>
            <p>Before initiating formal proceedings, both parties agree to attempt to resolve any dispute through good-faith negotiation for a period of at least 30 days from the date of written notice of the dispute.</p>
          </Section>

          <Section id="tou-21" title="21. Changes to These Terms">
            <p>We may update these Terms from time to time to reflect changes in our services, legal requirements, or business practices. When we make material changes:</p>
            <ul>
              <li>We will update the "Last Updated" date at the top of this page;</li>
              <li>We will provide at least 14 days' notice via email to the primary account contact or via an in-platform notification before changes take effect;</li>
              <li>Your continued use of the platform after the effective date constitutes acceptance of the revised Terms.</li>
            </ul>
            <p>If you do not agree to the revised Terms, you must discontinue use of the platform before the effective date.</p>
          </Section>

          <Section id="tou-22" title="22. General">
            <ul>
              <li><strong>Entire Agreement:</strong> These Terms, together with the Privacy Policy and any applicable order forms, constitute the entire agreement between you and Juniors with respect to the platform.</li>
              <li><strong>Severability:</strong> If any provision of these Terms is found to be unenforceable, the remaining provisions continue in full force.</li>
              <li><strong>Waiver:</strong> Failure by Juniors to enforce any provision of these Terms does not constitute a waiver of our right to enforce it in the future.</li>
              <li><strong>Assignment:</strong> You may not assign your rights or obligations under these Terms without our prior written consent. Juniors may assign these Terms in connection with a merger, acquisition, or sale of assets.</li>
              <li><strong>Force Majeure:</strong> Neither party is liable for delays or failures in performance resulting from causes beyond their reasonable control, including but not limited to acts of God, government actions, internet outages, or third-party infrastructure failures.</li>
            </ul>
          </Section>

          <Section id="tou-23" title="23. Contact Us">
            <p>For questions, concerns, or notices regarding these Terms, please contact:</p>
            <div className="tou-contact-card tou-contact-card--light">
              <div className="tou-contact-row">
                <span className="tou-contact-label">Email</span>
                <a href="mailto:rahul@juniors.ai">rahul@juniors.ai</a>
              </div>
              <div className="tou-contact-row">
                <span className="tou-contact-label">Website</span>
                <a href="https://juniors.ai" target="_blank" rel="noopener noreferrer">juniors.ai</a>
              </div>
              <div className="tou-contact-row">
                <span className="tou-contact-label">Address</span>
                <span>Bunglow No. 25, Shreesh Co-Operative Housing Society, Hajuri Darga Road, Thane, Maharashtra 400604, India</span>
              </div>
            </div>
          </Section>

          <div className="tou-footer">
            <p>© 2026 Herpenza Private Limited. All rights reserved.</p>
            <button className="btn-primary tou-back-btn" onClick={onClose}>Back to site</button>
          </div>
        </div>
    </motion.div>
  );
};

export default TermsOfUse;
