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
    avatarUrl: '/profile-photo.jpg', // Place your photo at public/profile-photo.jpg
    bio: [
      'Hi there <span class="wave-emoji">\u{1F44B}</span>',
      'I am a graduate student in <span class="bio-highlight-a">Computer Science</span> at the <span class="bio-highlight-a">University of Massachusetts Amherst</span>, and hold a B.Tech in Computer Engineering from the <span class="bio-highlight-a">College of Engineering, Pune</span>.',
      'I previously worked at <span class="bio-highlight-b">Deutsche Bank</span> as an <span class="bio-highlight-b">Associate</span> for two years, and before that gained industry experience at <span class="bio-highlight-b">FinIQ Consulting</span> as a <span class="bio-highlight-b">Software Development Engineer</span> and <span class="bio-highlight-b">Intern</span>. My professional interests lie in <span class="bio-highlight-b">Machine Learning</span> and <span class="bio-highlight-b">Data Systems</span>, with a focus on building technologies that learn, adapt, and deliver meaningful insights.',
      'Outside of engineering, I enjoy exploring literature, painting, and traveling. I often find inspiration through books, blogs, and music.',
      'Please feel free to reach out if you would like to connect, collaborate, or discuss potential opportunities.',
    ],
    email: 'dahir@umass.edu',
    location: 'Massachusetts, USA',
    resumeUrl: '/resume.pdf', // Place your resume at public/resume.pdf
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
      degree: 'Masters in Computer Science',
      institution: 'University of Massachusetts Amherst',
      year: 'Expected - May 2027',
      location: 'MA, USA',
      gpa: 'N/A',
      logo: '/logos/umass.png', // Place logo at public/logos/umass.png
      coursework: [
        'Machine Learning',
        'Systems for Data Science',
        'Algorithms',
        'Game Theory and Fairness',
      ],
      link: 'https://www.umass.edu/',
    },
    {
      degree: 'College of Engineering, Pune',
      field: 'Bachelor of Technology in Computer Engineering',
      minor: 'Minors in Financial Engineering',
      institution: 'College of Engineering, Pune',
      year: 'Graduated : 2022',
      location: 'Pune, India',
      gpa: '8.79/10',
      logo: '/logos/coep.png', // Place logo at public/logos/coep.png
      coursework: [
        'Data Structures and Algorithms',
        'Algorithms and Complexity',
        'Computer Networks',
        'Database Management Systems',
        'Principles of Programming Languages',
        '… and many more',
      ],
      link: 'https://www.coeptech.ac.in/',
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
          role: 'Associate',
          organization: 'Deutsche Bank',
          period: 'Jan 2024 - Jun 2024',
          location: 'Pune, India',
          logo: '/logos/deutsche-bank.png', // Place logo at public/logos/deutsche-bank.png
          link: 'https://www.db.com/index?language_id=1&kid=sl.redirect-en.shortcut',
          points: [
            'Boosted GPDP data pipeline performance by 60%+ and cut storage usage by ~40% by engineering Spring Boot microservices and optimizing complex Oracle PL/SQL with parallel execution and efficient batching.',
            'Processed 8GB+ structured datasets and improved overall system efficiency by ~30% by building Spark transformations, Hadoop workflows, and scalable ingestion tooling.',
            'Improved reliability across 5+ microservices by implementing distributed tracing, structured logging, Camel-based orchestration, and Splunk monitoring, accelerating production issue detection and resolution.',
            'Star performer in internal data ingestion hackathon.',
          ],
        },
        {
          role: 'Software Development Engineer',
          organization: 'FinIQ Consulting',
          period: 'July 2022 - Dec 2022',
          location: 'Pune, India',
          logo: '/logos/finiq.png', // Place logo at public/logos/finiq.png
          link: '',
          points: [
            'Improved trade message processing performance by 80% by integrating Angular-based front-end systems with a threaded staging table and implementing FIX Protocol solutions in C++ for FX Derivatives and Structured Products trading workflows.',
            'Enhanced reliability and scalability of trading platforms serving 10+ global banking clients by building C#/PL-SQL modules handling XML via REST (~200 requests/min), streamlining dynamic FIX messaging and email-based pricing systems, and contributing to high-level order workflow system design.',
          ],
        },
        {
          role: 'Internship',
          organization: 'FinIQ Consulting',
          period: 'Jan 2022 - June 2022',
          location: 'Pune, India',
          logo: '/logos/finiq.png', // Place logo at public/logos/finiq.png
          link: '',
          points: [
            'Increased user engagement by 20% and reduced navigation time by 30% by redesigning the company\'s web application using React Hooks and Material UI to build dynamic, user-centric interfaces.',
            'Enhanced platform usability by developing reusable dynamic templates (5 pages each) with advanced search autocomplete, related suggestions, and custom theming, delivering faster and more intuitive navigation.',
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
          location: '',
          logo: '/logos/research-lab.png', // Place logo at public/logos/research-lab.png
          link: '',
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
          location: 'India',
          logo: '/logos/sih.png', // Place logo at public/logos/sih.png
          link: '',
          points: [
            'Led a team of 6 to develop an AI-powered crop disease detection system using computer vision.',
            'Achieved top 10 finish among 500+ competing teams nationally.',
          ],
        },
        {
          role: "Dean's List - Academic Excellence",
          organization: 'University of Technology',
          period: '2021 - 2024',
          location: '',
          logo: '',
          link: '',
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
          location: '',
          logo: '',
          link: '',
          points: [
            'Proposed a hybrid BERT-LSTM architecture for multi-label sentiment classification.',
            'Demonstrated 4.5% improvement over baseline models on the SemEval-2023 dataset.',
            'DOI: 10.xxxx/sample-doi-12345',
          ],
        },
        {
          role: 'A Survey on Real-Time Object Detection in Edge Computing',
          organization:
            'IEEE Conference on Embedded Systems, Proceedings 2024',
          period: '2024',
          location: '',
          logo: '',
          link: '',
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
          location: '',
          logo: '/logos/gdsc.png', // Place logo at public/logos/gdsc.png
          link: '',
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
          location: '',
          logo: '/logos/acm.png', // Place logo at public/logos/acm.png
          link: '',
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
