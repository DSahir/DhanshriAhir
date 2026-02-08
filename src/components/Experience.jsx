import { useState } from 'react';
import portfolioData from '../data/portfolioData';
import './Section.css';

const { experience } = portfolioData;

function Experience() {
  const [openCategories, setOpenCategories] = useState({ 0: true });

  const toggleCategory = (index) => {
    setOpenCategories((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section id="experience" className="section">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-categories">
          {experience.map((category, catIndex) => (
            <div key={catIndex} className="exp-category">
              <button
                className={`exp-category-header ${openCategories[catIndex] ? 'open' : ''}`}
                onClick={() => toggleCategory(catIndex)}
              >
                <span className="exp-category-title">{category.title}</span>
                <span className="exp-category-count">{category.items.length}</span>
                <svg
                  className="exp-chevron"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div className={`exp-category-body ${openCategories[catIndex] ? 'open' : ''}`}>
                <div className="timeline">
                  {category.items.map((item, index) => (
                    <div key={index} className="timeline-item">
                      <div className="timeline-dot" />
                      <div className="timeline-content card">
                        <span className="timeline-year">{item.period}</span>
                        <h3>{item.role}</h3>
                        <p className="timeline-institution">{item.organization}</p>
                        <ul className="experience-list">
                          {item.points.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
