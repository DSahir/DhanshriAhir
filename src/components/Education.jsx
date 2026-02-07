import './Section.css';

const educationData = [
  {
    degree: 'Bachelor of Technology',
    field: 'Computer Science & Engineering',
    institution: 'University Name',
    year: '2020 - 2024',
    description: 'Focused on software engineering, data structures, and algorithms.',
  },
  {
    degree: 'Higher Secondary (12th)',
    field: 'Science',
    institution: 'School Name',
    year: '2018 - 2020',
    description: 'Completed higher secondary education with a focus on science and mathematics.',
  },
];

function Education() {
  return (
    <section id="education" className="section section-alt">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          {educationData.map((item, index) => (
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
