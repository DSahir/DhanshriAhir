import { useState } from 'react';
import './Section.css';

const experienceCategories = [
  {
    title: 'Work Experience',
    items: [
      {
        role: 'Software Developer Intern',
        organization: 'TechCorp Solutions Pvt. Ltd.',
        period: 'Jan 2024 - Jun 2024',
        points: [
          'Developed and maintained RESTful APIs using Node.js and Express for an internal dashboard serving 500+ users.',
          'Built reusable React components that reduced frontend development time by 30%.',
          'Collaborated with a cross-functional team of 8 engineers using Agile/Scrum methodology.',
          'Wrote unit and integration tests achieving 85% code coverage with Jest and React Testing Library.',
        ],
      },
      {
        role: 'Frontend Developer Intern',
        organization: 'WebStudio Digital Agency',
        period: 'Jun 2023 - Dec 2023',
        points: [
          'Designed and implemented responsive landing pages for 5+ client projects using React and Tailwind CSS.',
          'Optimized page load performance by 40% through lazy loading and image compression.',
          'Integrated third-party APIs including Stripe payments and Google Maps.',
        ],
      },
    ],
  },
  {
    title: 'Research Experience',
    items: [
      {
        role: 'Undergraduate Research Assistant',
        organization: 'Machine Learning Lab, University of Technology',
        period: 'Aug 2023 - May 2024',
        points: [
          'Conducted research on natural language processing techniques for sentiment analysis of social media data.',
          'Implemented transformer-based models using PyTorch, achieving 92% classification accuracy on benchmark datasets.',
          'Co-authored a research paper submitted to the International Conference on Machine Learning Applications.',
        ],
      },
    ],
  },
  {
    title: 'Achievements',
    items: [
      {
        role: 'Smart India Hackathon 2023 - Finalist',
        organization: 'Ministry of Education, Government of India',
        period: 'Dec 2023',
        points: [
          'Led a team of 6 to develop an AI-powered crop disease detection system using computer vision.',
          'Achieved top 10 finish among 500+ competing teams nationally.',
        ],
      },
      {
        role: 'Dean\'s List - Academic Excellence',
        organization: 'University of Technology',
        period: '2021 - 2024',
        points: [
          'Maintained a CGPA of 9.2/10 across all semesters.',
          'Awarded merit scholarship for outstanding academic performance.',
        ],
      },
    ],
  },
  {
    title: 'Publications',
    items: [
      {
        role: 'Sentiment Analysis of Social Media Using Transformer Models',
        organization: 'International Journal of Computational Linguistics, Vol. 12, Issue 3',
        period: '2024',
        points: [
          'Proposed a hybrid BERT-LSTM architecture for multi-label sentiment classification.',
          'Demonstrated 4.5% improvement over baseline models on the SemEval-2023 dataset.',
          'DOI: 10.xxxx/sample-doi-12345',
        ],
      },
      {
        role: 'A Survey on Real-Time Object Detection in Edge Computing',
        organization: 'IEEE Conference on Embedded Systems, Proceedings 2024',
        period: '2024',
        points: [
          'Reviewed 50+ papers on lightweight CNN architectures for resource-constrained devices.',
          'Provided a comparative analysis of YOLOv8, EfficientDet, and MobileNet-SSD on Raspberry Pi.',
        ],
      },
    ],
  },
  {
    title: 'Student Organizations',
    items: [
      {
        role: 'Technical Lead',
        organization: 'Google Developer Student Club (GDSC)',
        period: '2023 - 2024',
        points: [
          'Organized 10+ technical workshops on web development, cloud computing, and machine learning.',
          'Mentored 30+ junior developers through hands-on coding sessions and project guidance.',
          'Led the club\'s participation in Google Solution Challenge 2024.',
        ],
      },
      {
        role: 'Core Committee Member',
        organization: 'ACM Student Chapter',
        period: '2022 - 2024',
        points: [
          'Organized competitive programming contests with 200+ participants each semester.',
          'Conducted weekly algorithm study groups to prepare members for ICPC regionals.',
        ],
      },
    ],
  },
];

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
          {experienceCategories.map((category, catIndex) => (
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
