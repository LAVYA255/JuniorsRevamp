import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './EarlyAccessPage.css';

const EarlyAccessPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
    if (apiError) setApiError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setLoading(true);
    setApiError('');

    try {
      const res = await fetch('/api/support-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: 'Early Access Request',
          message: 'Early access request submitted via juniorsai.com',
          platform: 'JUNIORS',
        }),
      });

      if (!res.ok) throw new Error('Something went wrong. Please try again.');
      setSubmitted(true);
    } catch (err) {
      setApiError(err.message || 'Failed to submit. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ea-page-root">
      {/* Top bar */}
      <div className="ea-topbar">
        <div className="ea-topbar-inner">
          <img src="/logo.png" alt="Juniors" style={{ height: '40px' }} />
          <button className="ea-topbar-back" onClick={() => navigate('/')}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
            Back to site
          </button>
        </div>
      </div>

      <div className="ea-page-body">
        <motion.div
          className="ea-page"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                className="ea-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <div className="ea-success-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <h2 className="ea-success-title">You're on the list!</h2>
                <p className="ea-success-text">
                  Thanks, <strong>{form.name.split(' ')[0]}</strong>. We've received your request and will be in touch at <strong>{form.email}</strong> soon.
                </p>
                <button className="btn-primary ea-back-btn" onClick={() => navigate('/')}>
                  Back to site
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="ea-header">
                  <span className="badge">Limited Access</span>
                  <h1 className="ea-title">Get Access</h1>
                  <p className="ea-subtitle">
                    Tell us a bit about yourself. We'll reach out to get you set up.
                  </p>
                </div>

                <form className="ea-form" onSubmit={handleSubmit} noValidate>
                  <div className={`ea-field${errors.name ? ' ea-field--error' : ''}`}>
                    <label htmlFor="ea-name">Full name <span>*</span></label>
                    <input
                      id="ea-name"
                      name="name"
                      type="text"
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={handleChange}
                      autoComplete="name"
                    />
                    {errors.name && <span className="ea-error">{errors.name}</span>}
                  </div>

                  <div className={`ea-field${errors.email ? ' ea-field--error' : ''}`}>
                    <label htmlFor="ea-email">Work email <span>*</span></label>
                    <input
                      id="ea-email"
                      name="email"
                      type="email"
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={handleChange}
                      autoComplete="email"
                    />
                    {errors.email && <span className="ea-error">{errors.email}</span>}
                  </div>

                  {apiError && (
                    <div className="ea-api-error">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                      </svg>
                      {apiError}
                    </div>
                  )}

                  <button type="submit" className="btn-primary ea-submit" disabled={loading}>
                    {loading ? (
                      <>
                        <span className="ea-spinner" />
                        Submitting…
                      </>
                    ) : (
                      <>
                        Submit request
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default EarlyAccessPage;
