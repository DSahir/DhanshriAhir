import './Section.css';

const experienceData = [
  {
    role: 'Software Developer Intern',
    company: 'Company Name',
    period: 'Jan 2024 - Jun 2024',
    points: [
      'Developed and maintained web applications using React and Node.js.',
      'Collaborated with cross-functional teams to deliver features on time.',
      'Wrote unit tests and participated in code reviews.',
    ],
  },
  {
    role: 'Freelance Web Developer',
    company: 'Self-Employed',
    period: '2023 - Present',
    points: [
      'Built responsive websites for small businesses and individuals.',
      'Managed full project lifecycle from requirements to deployment.',
      'Implemented SEO best practices and performance optimizations.',
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experienceData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content card">
                <span className="timeline-year">{item.period}</span>
                <h3>{item.role}</h3>
                <p className="timeline-institution">{item.company}</p>
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
    </section>
  );
}

export default Experience;
