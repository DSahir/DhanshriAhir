import './Section.css';

const projectsData = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with React and Vite to showcase skills and projects.',
    tech: ['React', 'CSS', 'Vite'],
    link: '#',
  },
  {
    title: 'Task Manager App',
    description: 'A full-stack task management application with user authentication and real-time updates.',
    tech: ['React', 'Node.js', 'MongoDB'],
    link: '#',
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather dashboard that displays current and forecasted weather using a public API.',
    tech: ['JavaScript', 'REST API', 'CSS'],
    link: '#',
  },
];

function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="card project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">
                View Project &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
