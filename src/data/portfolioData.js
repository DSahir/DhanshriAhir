// =============================================================================
// PORTFOLIO DATA - Edit this file to replace placeholder text with your real data
// =============================================================================
// All portfolio content is centralized here. Update the values below with your
// actual information, and every component will reflect the changes automatically.
// =============================================================================

const portfolioData = {
  // ---------------------------------------------------------------------------
  // PERSONAL INFO - Used in Header, About, Contact, and Footer
  // ---------------------------------------------------------------------------
  personal: {
    name: 'Dhanshri Ahir',
    title: 'Developer',
    avatarUrl:
      'https://api.dicebear.com/7.x/avataaars/svg?seed=Dhanshri&backgroundColor=e94560',
    // Replace the avatar URL above with a link to your actual photo, e.g.:
    // avatarUrl: '/profile-photo.jpg',
    bio: [
      "Hello! I'm <strong>Dhanshri Ahir</strong>, a passionate developer who loves building web applications and solving problems through code.",
      'I enjoy working with modern technologies and am always eager to learn new skills. My goal is to create impactful software that makes a difference.',
    ],
    email: 'dsahir511@gmail.com',
    location: 'Massachusetts, USA',
    resumeUrl: '#', // Replace with your actual resume file URL
    socialLinks: {
      linkedin: 'https://linkedin.com/in/dhanshri-ahir',
      github: 'https://github.com/DSAhir',
    },
  },

  // ---------------------------------------------------------------------------
  // EDUCATION - Used in Education.jsx
  // ---------------------------------------------------------------------------
  education: [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science & Engineering',
      institution: 'College Of Engineering, Pune', // <-- Replace with your actual university
      year: '2018 - 2022',
      description:
        'Focused on software engineering, data structures, and algorithms.',
      link: 'https://www.coeptech.ac.in/', // <-- Replace with your university URL
    },
    {
      degree: 'Higher Secondary (12th)',
      field: 'Science',
      institution: 'School Name', // <-- Replace with your actual school
      year: '2018 - 2020',
      description:
        'Completed higher secondary education with a focus on science and mathematics.',
      link: 'https://example.edu', // <-- Replace with your school URL
    },
  ],

  // ---------------------------------------------------------------------------
  // EXPERIENCE - Used in Experience.jsx (each category is collapsible)
  // ---------------------------------------------------------------------------
  experience: [
    {
      title: 'Work Experience',
      items: [
        {
          role: 'Software Developer Intern',
          organization: 'TechCorp Solutions Pvt. Ltd.', // <-- Replace
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
          organization: 'WebStudio Digital Agency', // <-- Replace
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
          organization: 'Machine Learning Lab, University of Technology', // <-- Replace
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
          role: "Dean's List - Academic Excellence",
          organization: 'University of Technology', // <-- Replace
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
          organization:
            'International Journal of Computational Linguistics, Vol. 12, Issue 3',
          period: '2024',
          points: [
            'Proposed a hybrid BERT-LSTM architecture for multi-label sentiment classification.',
            'Demonstrated 4.5% improvement over baseline models on the SemEval-2023 dataset.',
            'DOI: 10.xxxx/sample-doi-12345', // <-- Replace with real DOI
          ],
        },
        {
          role: 'A Survey on Real-Time Object Detection in Edge Computing',
          organization:
            'IEEE Conference on Embedded Systems, Proceedings 2024',
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
            "Led the club's participation in Google Solution Challenge 2024.",
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
  ],

  // ---------------------------------------------------------------------------
  // PROJECTS - Used in Projects.jsx
  // ---------------------------------------------------------------------------
  projects: [
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
  ],

  // ---------------------------------------------------------------------------
  // NAVIGATION - Used in Header.jsx
  // ---------------------------------------------------------------------------
  navItems: ['About', 'Education', 'Experience', 'Projects', 'Contact'],
};

export default portfolioData;
