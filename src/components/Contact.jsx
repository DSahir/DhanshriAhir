import { useState } from 'react';
import portfolioData from '../data/portfolioData';
import './Section.css';

const { personal } = portfolioData;

// -----------------------------------------------------------------------
// To make the contact form deliver emails:
// 1. Go to https://formspree.io and sign up (free tier: 50 submissions/month)
// 2. Create a new form and copy your form ID (e.g. "xpzvqkdl")
// 3. Replace the FORMSPREE_ID below with your form ID
// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
// Option A: Set your Formspree ID for async form delivery
// Option B: Leave empty to use mailto fallback (opens user's email client)
// -----------------------------------------------------------------------
const FORMSPREE_ID = ''; // <-- Replace with your Formspree form ID (e.g. "xpzvqkdl")

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // If no Formspree ID is set, fall back to mailto
    if (!FORMSPREE_ID) {
      const subject = encodeURIComponent(`Message from ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      );
      window.open(`mailto:${personal.email}?subject=${subject}&body=${body}`, '_self');
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      return;
    }

    setStatus('sending');

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          _replyto: form.email,
          message: form.message,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section section-contact">
      <div className="section-container">
        <h2 className="section-title title-contact">
          <span className="section-emojis">
            <span className="section-emoji-float" style={{ animationDelay: '0s' }}>📬</span>
            <span className="section-emoji-float" style={{ animationDelay: '0.4s' }}>✉️</span>
          </span>
          Contact
          <span className="section-emojis">
            <span className="section-emoji-float" style={{ animationDelay: '0.8s' }}>🤝</span>
            <span className="section-emoji-float" style={{ animationDelay: '1.2s' }}>💬</span>
          </span>
        </h2>
        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>Feel free to reach out for collaborations, opportunities, or just a chat.</p>
            <div className="contact-details">
              <div className="contact-detail-item">
                <span className="contact-icon">&#9993;</span>
                <span>{personal.email}</span>
              </div>
              <div className="contact-detail-item">
                <span className="contact-icon">&#128205;</span>
                <span>{personal.location}</span>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            {status === 'success' && (
              <p className="success-message">Thank you! Your message has been sent.</p>
            )}
            {status === 'error' && (
              <p className="error-message">Something went wrong. Please try again or email directly.</p>
            )}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="submit-btn" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
