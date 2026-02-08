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
      title: 'Research and Publication',
      items: [
        {
          role: 'Real-Time Classification of Leukocytes Using Deep Learning in Microscopic Imaging',
          organization:
            'International Journal of Research in Engineering, Science and Management — Volume 7, Issue 12, December 2024',
          period: '2024',
          location: '',
          logo: '/logos/ijresm.png', // Place logo at public/logos/ijresm.png
          link: 'https://www.ijresm.com/storage/articles/3/IJRESM_V7_I12_20.pdf',
          points: [
            'Achieved 97%+ classification accuracy in leukocyte identification by designing and training a CNN-based deep learning model on microscopic blood smear images, reducing reliance on manual examination.',
            'Improved model generalization across varying imaging conditions by applying data augmentation and transfer learning techniques to overcome limited labeled biomedical datasets.',
            'Enhanced feature discrimination of leukocyte morphology by integrating attention mechanisms into the CNN architecture, increasing interpretability for diagnostic use.',
            'Streamlined preprocessing and classification workflow for real-time analysis by building an end-to-end pipeline from image normalization to automated prediction.',
            'Enabled scalable automated hematology screening by demonstrating model suitability for real-time microscopic image processing in clinical and point-of-care settings.',
            'Validated system performance through experimental evaluation on benchmark leukocyte datasets, establishing reliability for computer-aided diagnostic applications.',
          ],
        },
        {
          role: 'NLP-based Interview Analysis Framework',
          organization:
            'Topic Modeling & Change Point Detection on Conversational Transcripts',
          period: '2024',
          location: '',
          logo: '/logos/nlp-research.png', // Place logo at public/logos/nlp-research.png
          link: '',
          points: [
            'Led a 3-member team to build an NLP-based interview analysis framework, reducing subjective evaluation bias by applying probabilistic topic modeling (LDA) and topic change point detection on real-world interview transcripts.',
            'Analyzed 138 mock interviews (≈10.5 hours) from 69 MIT students, enabling large-scale conversational insights by performing end-to-end NLP preprocessing including tokenization, lemmatization, stopword removal, and transcript normalization.',
            'Evaluated and compared 5+ topic modeling and topic shift detection approaches, grounded in a survey of 10+ research papers, using coherence scores, LDA, LSA, and CPD to justify model and parameter selection.',
            'Improved topic interpretability and temporal segmentation, measured via coherence trends and dominant-topic distributions, by tuning LDA/LSA hyperparameters and applying change point detection to topic probability time series.',
          ],
        },
      ],
    },
    {
      title: 'Student Organizations',
      items: [
        {
          role: 'Accounts and Documentation Head',
          organization: 'Pune Startup Fest \'21',
          period: '2021',
          location: 'Pune, India',
          logo: '/logos/pune-startup-fest.png', // Place logo at public/logos/pune-startup-fest.png
          link: '',
          points: [
            'Organized the fest to facilitate ₹3.5 Cr funding for startups and 250+ student internships; managed budgeting, financial documentation, and permissions.',
          ],
        },
        {
          role: 'Core Member',
          organization: 'Bhau Institute of Innovation, Entrepreneurship and Leadership',
          period: '',
          location: 'Pune, India',
          logo: '/logos/biel.png', // Place logo at public/logos/biel.png
          link: '',
          points: [
            'Increased student participation in entrepreneurship events by promoting startup opportunities and coordinating outreach for Vowels E-Cell.',
            'Executed startup workshops and networking events by coordinating with founders, mentors, and managing on-ground operations.',
          ],
        },
      ],
    },
    {
      title: 'Activities and Achievements',
      items: [
        {
          role: 'Technical Writing Contributor',
          organization: 'GeeksforGeeks',
          period: '',
          location: '',
          logo: '/logos/gfg.png', // Place logo at public/logos/gfg.png
          link: '',
          points: [
            'Wrote and published technical articles on computer programming concepts, focusing on clear explanations, code examples, and best practices for learners at different levels.',
            'Achieved 40,000+ cumulative views from unique readers across published articles, demonstrating strong content reach and engagement in the developer community.',
          ],
        },
        {
          role: 'Affiliated Basic Level Rifle Shooter',
          organization: 'ABSA – Anjali Bhagwat Shooting Academy, Pune',
          period: '',
          location: 'Pune, India',
          logo: '/logos/absa.png', // Place logo at public/logos/absa.png
          link: '',
          points: [
            'Trained at ABSA – Anjali Bhagwat Shooting Academy, Pune, in 10m air rifle basics, safety, posture, and precision shooting techniques under structured coaching.',
            'Practiced under the mentorship framework established by 3-time Olympian and former world no. 1 rifle shooter Anjali Bhagwat, focusing on discipline, consistency, and competition-oriented training.',
          ],
        },
        {
          role: 'Volunteer Mentor',
          organization: 'Social Contribution',
          period: '',
          location: '',
          logo: '',
          link: '',
          points: [
            'Mentored and taught 50+ students mathematics and basic computer skills at a tribal Ashram school during semester breaks, focusing on building foundational numeracy and digital literacy.',
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
  // CERTIFICATES - Used in Certificates.jsx
  // ---------------------------------------------------------------------------
  certificates: [
    { name: 'Certificate Name 1', link: '' }, // <-- Replace with your certificates
    { name: 'Certificate Name 2', link: '' },
  ],

  // ---------------------------------------------------------------------------
  // NAVIGATION - Used in Header.jsx
  // ---------------------------------------------------------------------------
  navItems: ['About', 'Education', 'Experience', 'Projects', 'Certificates', 'Contact'],
};

export default portfolioData;
