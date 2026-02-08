import portfolioData from '../data/portfolioData';
import './Section.css';

const { education } = portfolioData;

function Education() {
  return (
    <section id="education" className="section section-alt">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          {education.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content card">
                <span className="timeline-year">{item.year}</span>
                <h3>{item.degree}</h3>
                <h4>{item.field}</h4>
                <p className="timeline-institution">{item.institution}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
