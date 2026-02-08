import { useState, useEffect, useRef } from 'react';
import portfolioData from '../data/portfolioData';
import './Section.css';

const { personal } = portfolioData;

const phrases = ['a Frontend Designer', 'a Masters Student', 'looking for a Job'];

function TypingAnimation() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const current = phrases[phraseIndex];

    if (!isDeleting && displayText === current) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    } else {
      const speed = isDeleting ? 40 : 80;
      timeoutRef.current = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? current.substring(0, displayText.length - 1)
            : current.substring(0, displayText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [displayText, isDeleting, phraseIndex]);

  return (
    <div className="typing-wrapper">
      <span className="typing-static">I am </span>
      <span className="typing-dynamic">
        {displayText}
        <span className="typing-cursor">|</span>
      </span>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="section section-about">
      <div className="section-container">
        <h2 className="section-title title-about">About Me</h2>
        <div className="about-content">
          <div className="about-avatar">
            <img
              className="avatar-image"
              src={personal.avatarUrl}
              alt={personal.name}
            />
            <p className="avatar-email">{personal.email}</p>
            <p className="avatar-degree">MS in Computer Science</p>
            <p className="avatar-degree-secondary">BTech in Computer Engineering</p>
          </div>
          <div className="about-text">
            {personal.bio.map((paragraph, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
            <div className="about-actions">
              <div className="social-icons">
                <a href={`mailto:${personal.email}`} className="social-icon" title="Email" aria-label="Email">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 4L12 13 2 4" />
                  </svg>
                </a>
                <a href={personal.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn" aria-label="LinkedIn">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a href={personal.socialLinks.github} target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub" aria-label="GitHub">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
              </div>
              <a href={personal.resumeUrl} className="resume-btn" download>
                Resume
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <polyline points="19 12 12 19 5 12" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <TypingAnimation />
      </div>
    </section>
  );
}

export default About;
