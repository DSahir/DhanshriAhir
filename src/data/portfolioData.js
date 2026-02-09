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
      'I am a <span class="bio-highlight-a">graduate</span> student in <span class="bio-highlight-a">Computer Science</span> at the <span class="bio-highlight-a">University of Massachusetts Amherst</span>, and hold a B.Tech in Computer Engineering from the <span class="bio-highlight-a">College of Engineering, Pune</span>.',
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
      institution: 'University of Massachusetts Amherst, United States',
      year: 'Expected - May 2027',
      location: 'MA, USA',
      gpa: 'N/A',
      logo: '/logos/umass.png', // Place logo at public/logos/umass.png
      coursework: [
        'COMPSCI 589 Machine Learning',
        'COMPSCI 532 Systems for Data Science',
        'COMPSCI 515 Algorithms, Game Theory, and Fairness',
      ],
      link: 'https://www.cics.umass.edu/',
    },
    {
      degree: 'College of Engineering, Pune',
      field: 'Bachelor of Technology in Computer Engineering',
      minor: 'Minor in Mathematics with Specialization in Financial Engineering',
      institution: 'College of Engineering, Pune',
      year: 'Graduated : 2022',
      location: 'Pune, India',
      gpa: '8.79/10',
      logo: '/logos/coep.png', // Place logo at public/logos/coep.png
      coursework: [
        'Data Structures and Algorithms',
        'Algorithms and Complexity',
        'Database Management Systems',
        'Computer Networks',
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
          role: 'Topic Mining From Interview Data',
          organization:
            'College of Engineering Pune, Capstone Project',
          period: '2022',
          location: '',
          logo: '/logos/coep.png', // Place logo at public/logos/nlp-research.png
          link: 'https://drive.google.com/drive/folders/1revTJZGgwTT0bFH1q6d9kHMiHBbK1YS2',
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
          link: 'https://www.coeptech.ac.in/student-corner/student-clubs/pune-startup-fest/',
          points: [
            'Organized the fest to facilitate ₹3.5 Cr funding for startups and 250+ student internships',
            'Managed budgeting, financial documentation, and permission-related processes to ensure smooth and compliant fest operations',
          ],
        },
        {
          role: 'Core Member',
          organization: 'Bhau Institute of Innovation, Entrepreneurship and Leadership',
          period: '2021 - 2022',
          location: 'Pune, India',
          logo: '/logos/bhau.png', // Place logo at public/logos/bhau.png
          link: 'https://bhau.org/bhau-e-cell/',
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
          location: 'India',
          logo: '/logos/gfg.png', // Place logo at public/logos/gfg.png
          link: 'https://www.geeksforgeeks.org/c/c-program-to-read-a-range-of-bytes-from-file-and-print-it-to-console/',
          points: [
            'Wrote and published technical articles on computer programming concepts, focusing on clear explanations, code examples, and best practices for learners at different levels.',
            'Achieved 40,000+ cumulative views from unique readers across published articles, demonstrating strong content reach and engagement in the developer community.',
          ],
        },
        {
          role: 'Affiliated Basic Level Rifle Shooter',
          organization: 'ABSA – Anjali Bhagwat Shooting Academy',
          period: '',
          location: 'Pune, India',
          logo: '/logos/absa.png', // Place logo at public/logos/absa.png
          link: 'https://www.anjalibhagwat.com/projects',
          points: [
            'Trained at ABSA – Anjali Bhagwat Shooting Academy, Pune, in 10m air rifle basics, safety, posture, and precision shooting techniques under structured coaching.',
            'Practiced under the mentorship framework established by 3-time Olympian and former world no. 1 rifle shooter Anjali Bhagwat, focusing on discipline, consistency, and competition-oriented training.',
          ],
        },
        {
          role: 'Volunteer Mentor',
          organization: 'Social Contribution',
          period: '',
          location: 'Akola, India',
          logo: '/logos/teach.png',
          link: 'https://drive.google.com/drive/folders/1revTJZGgwTT0bFH1q6d9kHMiHBbK1YS2',
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
    title: 'Price Tracer',
    body: 'A full-stack web application designed to track and compare product prices across multiple sources. Features a Node.js backend with API endpoints, a responsive frontend built with React, and includes comprehensive documentation. The application helps users monitor price changes and make informed purchasing decisions with real-time price tracking capabilities.',
    tech: ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS'],
    link: 'https://github.com/DSahir/PriceTracer',
    },
    {
    title: 'Chat Application',
    body: 'A real-time chat application with a client-server architecture. Features a responsive web interface built with HTML, CSS, and JavaScript on the client side, paired with a robust backend server for handling message delivery and user communication. The application enables seamless real-time messaging between multiple users with a clean, intuitive interface.',
    tech: ['JavaScript', 'HTML', 'CSS', 'Node.js'],
    link: 'https://github.com/DSahir/chat-application',
    },
    {
      title: 'Cook Diaries',
      body: 'A full-stack web application for sharing and discovering recipes. Built with a Node.js and Express backend with MongoDB database models, the application features user authentication, recipe management, and a responsive frontend with HTML, CSS, and JavaScript. The platform enables users to store, organize, and share their favorite cooking recipes with a clean and intuitive interface.',
      tech: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'HTML', 'CSS'],
      link: 'https://github.com/DSahir/CookDiaaries',
    },
    {
      title: 'Crypto Streaming Pipeline',
      body: 'Real-time cryptocurrency analytics pipeline for Systems for Data Science course. Ingests live trade data from Coinbase/Binance WebSockets, streams through Apache Kafka, processes into 1-second OHLC candles and volatility metrics with Parquet persistence, serves via FastAPI REST endpoints, and includes interactive Plotly dashboards plus ML trend prediction model.',
      tech: ['Python', 'FastAPI', 'Apache Kafka', 'Pandas', 'PyArrow', 'Plotly', 'Docker'],
      link: 'https://github.com/DSahir/CS532_Project',
    },
    {
      title: 'Hostel Management System',
      body: 'Full-stack Django web application for hostel administration with student registration, room allocation, mess management (veg/non-veg options with contractors and daily fees), warden oversight, college info integration, and automated population of demo data including 4 hostels (Vivan, Shiv, Jijau, Riva), 5 rooms per hostel, multiple messes, and chief warden authentication.',
      tech: ['Python', 'Django', 'MySQL', 'JavaScript', 'CSS', 'HTML'],
      link: 'https://github.com/DSahir/[hostel-repo-name]',
    },
    {
    title: 'Task App API',
    body: 'A JavaScript-based task management API built with Node.js and MongoDB Atlas backend. The application includes profile picture setup, database integration, and unit testing capabilities using Jest. Designed to manage task operations with persistent data storage and reliable API endpoints.',
    tech: ['JavaScript', 'Node.js', 'MongoDB', 'Jest'],
    link: 'https://github.com/DSahir/task-app-api',
    },
      {
    title: 'BlogMe',
    body: 'Full-stack blogging platform built with Node.js, Express, and EJS templating. Features user authentication (registration/login), blog CRUD operations, personal blog dashboard with statistics (max/min/avg ratings, trending blogs), global search by author, reviews/ratings system, and responsive design for reading, writing, and community interaction.',
    tech: ['Node.js', 'Express', 'EJS', 'JavaScript', 'CSS'],
    link: 'https://github.com/DSahir/BlogMe',
  },
  ],

  // ---------------------------------------------------------------------------
  // CERTIFICATES - Used in Certificates.jsx
  // ---------------------------------------------------------------------------
  certificates: [
    { name: 'Neural Networks and Deep Learning', link: 'https://drive.google.com/file/d/17fUm7MxuFlh5_oDq94ta5bA_tj65ETA3/view?usp=sharing', logo: '/logos/coursera.png' }, // <-- Replace with your certificates
    { name: 'Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization', link: 'https://drive.google.com/file/d/1Kku8bZv5Vc6FY5s8zKUOAOEOZaIpEJQO/view?usp=sharing', logo: '/logos/coursera.png' },
    { name: 'Structuring Machine Learning Projects', link: 'https://drive.google.com/file/d/13-i_KZS5cy-nsum-x1qILMw50OMxfyM9/view?usp=sharing', logo: '/logos/coursera.png' },
    { name: 'Cyber Security Foundation', link: 'https://drive.google.com/file/d/1vVTc1oEv9KZukPBfK33cg6ICQG0hLT8p/view?usp=sharing', logo: '/logos/certi-proof.png' },
    { name: 'SEO Fundamentals Exam', link: 'https://drive.google.com/file/d/11b47UcvZn3GVX_iPG30gLXorgSlPRYHc/view?usp=sharing', logo: '/logos/semrush.png' },
    ],

  // ---------------------------------------------------------------------------
  // NAVIGATION - Used in Header.jsx
  // ---------------------------------------------------------------------------
  navItems: ['About', 'Education', 'Experience', 'Projects', 'Certificates', 'Contact'],
};

export default portfolioData;
