import './Section.css';

const projectsData = [
  {
    title: 'Portfolio Website',
    body: 'A modern, responsive personal portfolio built with React and Vite. Features smooth scroll navigation, dark/light theme toggle, collapsible experience sections, and a clean card-based layout to showcase projects and skills.',
    tech: ['React', 'Vite', 'CSS3', 'JavaScript'],
    link: 'https://github.com/DhanshriAhir/portfolio',
  },
  {
    title: 'Task Manager App',
    body: 'A full-stack task management application with user authentication, real-time updates via WebSockets, and drag-and-drop Kanban boards. Users can create projects, assign tasks, set deadlines, and track progress with visual analytics.',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'JWT'],
    link: 'https://github.com/DhanshriAhir/task-manager',
  },
  {
    title: 'Weather Dashboard',
    body: 'An interactive weather dashboard that displays current conditions, 7-day forecasts, and historical trends using the OpenWeatherMap API. Includes geolocation support, city search with autocomplete, and dynamic weather-themed backgrounds.',
    tech: ['JavaScript', 'REST API', 'Chart.js', 'CSS3'],
    link: 'https://github.com/DhanshriAhir/weather-dashboard',
  },
  {
    title: 'AI Crop Disease Detector',
    body: 'A computer vision application that identifies crop diseases from leaf images using a fine-tuned ResNet-50 model. Built during Smart India Hackathon 2023, it supports 15 disease classes across 5 crop types with 94% accuracy.',
    tech: ['Python', 'PyTorch', 'Flask', 'OpenCV', 'React'],
    link: 'https://github.com/DhanshriAhir/crop-disease-detector',
  },
  {
    title: 'E-Commerce Platform',
    body: 'A fully functional e-commerce platform with product catalog, shopping cart, Stripe payment integration, order tracking, and an admin dashboard for inventory management. Features server-side rendering for optimal SEO performance.',
    tech: ['Next.js', 'PostgreSQL', 'Prisma', 'Stripe', 'Tailwind CSS'],
    link: 'https://github.com/DhanshriAhir/ecommerce-platform',
  },
  {
    title: 'Real-Time Chat Application',
    body: 'A real-time messaging application supporting private and group chats, file sharing, message search, and read receipts. Built with a microservices architecture using Docker containers for easy deployment and scaling.',
    tech: ['React', 'Node.js', 'Socket.io', 'Redis', 'Docker'],
    link: 'https://github.com/DhanshriAhir/realtime-chat',
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
              <div className="project-card-header">
                <h3>{project.title}</h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-icon"
                  title="View project"
                  aria-label={`Open ${project.title}`}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
              <p className="project-body">{project.body}</p>
              <div className="tech-tags">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
