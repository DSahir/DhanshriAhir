import { useState } from 'react';
import portfolioData from '../data/portfolioData';
import './Section.css';

const { personal } = portfolioData;

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
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
            {submitted && (
              <p className="success-message">Thank you! Your message has been sent.</p>
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
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
