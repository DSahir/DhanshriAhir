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
    avatarUrl: import.meta.env.BASE_URL + 'profile-photo.jpg', // Place your photo at public/profile-photo.jpg
    bio: [
      'Hi there <span class="wave-emoji">\u{1F44B}</span>',
      'I am a <span class="bio-highlight-a">graduate</span> student in <span class="bio-highlight-a">Computer Science</span> at the <span class="bio-highlight-a">University of Massachusetts Amherst</span>, and hold a B.Tech in Computer Engineering from the <span class="bio-highlight-a">College of Engineering, Pune</span>.',
      'I previously worked at <span class="bio-highlight-b">Deutsche Bank</span> as an <span class="bio-highlight-b">Associate</span> for two years, and before that gained industry experience at <span class="bio-highlight-b">FinIQ Consulting</span> as a <span class="bio-highlight-b">Software Development Engineer</span> and <span class="bio-highlight-b">Intern</span>. My professional interests lie in <span class="bio-highlight-b">Machine Learning</span> and <span class="bio-highlight-b">Data Systems</span>, with a focus on building technologies that learn, adapt, and deliver meaningful insights.',
      'Outside of engineering, I enjoy exploring literature, painting, and traveling. I often find inspiration through books, blogs, and music.',
      'Please feel free to reach out if you would like to connect, collaborate, or discuss potential opportunities.',
    ],
    email: 'dahir@umass.edu',
    location: 'Massachusetts, USA',
    resumeUrl: import.meta.env.BASE_URL + 'resume.pdf', // Place your resume at public/resume.pdf
    socialLinks: {
      linkedin: 'https://linkedin.com/in/dhanshri-ahir',
      github: 'https://github.com/DSAhir',
      discord: 'https://discord.com/users/dsa07365',
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
      logo: import.meta.env.BASE_URL + 'logos/umass.png', // Place logo at public/logos/umass.png
      coursework: [
        'COMPSCI 589 Machine Learning',
        'COMPSCI 532 Systems for Data Science',
        'COMPSCI 515 Algorithms, Game Theory, and Fairness',
      ],
      link: 'https://www.cics.umass.edu/',
    },
    {
      degree: 'Bachelor of Technology in Computer Engineering',
      institution: 'College of Engineering, Pune',
      minor: 'Minor in Mathematics with Specialization in Financial Engineering',
      year: 'Graduated : 2022',
      location: 'Pune, India',
      gpa: '8.79/10',
      logo: import.meta.env.BASE_URL + 'logos/coep.png', // Place logo at public/logos/coep.png
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
      icon: '\u{1F4BC}',
      items: [
        {
          role: 'Associate',
          organization: 'Deutsche Bank',
          period: 'Jan 2024 - Jun 2024',
          location: 'Pune, India',
          logo: import.meta.env.BASE_URL + 'logos/deutsche-bank.png', // Place logo at public/logos/deutsche-bank.png
          link: 'https://www.db.com/index?language_id=1&kid=sl.redirect-en.shortcut',
          points: [
            'Boosted GPDP data pipeline performance by <strong>60%+</strong> and cut storage usage by <strong>~40%</strong> by engineering <strong>Spring Boot</strong> microservices and optimizing complex <strong>Oracle PL/SQL</strong> with parallel execution and efficient batching.',
            'Processed <strong>8GB+</strong> structured datasets and improved overall system efficiency by <strong>~30%</strong> by building <strong>Spark</strong> transformations, <strong>Hadoop</strong> workflows, and scalable ingestion tooling.',
            'Improved reliability across <strong>5+ microservices</strong> by implementing <strong>distributed tracing</strong>, structured logging, <strong>Camel-based orchestration</strong>, and <strong>Splunk</strong> monitoring, accelerating production issue detection and resolution.',
            '<strong>Star performer</strong> in internal data ingestion hackathon.',
          ],
        },
        {
          role: 'Software Development Engineer',
          organization: 'FinIQ Consulting',
          period: 'July 2022 - Dec 2022',
          location: 'Pune, India',
          logo: import.meta.env.BASE_URL + 'logos/finiq.png', // Place logo at public/logos/finiq.png
          link: 'https://finiq.com/HomePage/home.html',
          points: [
            'Improved trade message processing performance by <strong>80%</strong> by integrating <strong>Angular</strong>-based front-end systems with a threaded staging table and implementing <strong>FIX Protocol</strong> solutions in <strong>C++</strong> for <strong>FX Derivatives</strong> and <strong>Structured Products</strong> trading workflows.',
            'Enhanced reliability and scalability of trading platforms serving <strong>10+ global banking clients</strong> by building <strong>C#/PL-SQL</strong> modules handling XML via <strong>REST</strong> (<strong>~200 requests/min</strong>), streamlining dynamic <strong>FIX messaging</strong> and email-based pricing systems, and contributing to high-level order workflow system design.',
          ],
        },
        {
          role: 'Internship',
          organization: 'FinIQ Consulting',
          period: 'Jan 2022 - June 2022',
          location: 'Pune, India',
          logo: import.meta.env.BASE_URL + 'logos/finiq.png', // Place logo at public/logos/finiq.png
          link: 'https://finiq.com/HomePage/home.html',
          points: [
            'Increased user engagement by <strong>20%</strong> and reduced navigation time by <strong>30%</strong> by redesigning the company\'s web application using <strong>React Hooks</strong> and <strong>Material UI</strong> to build dynamic, user-centric interfaces.',
            'Enhanced platform usability by developing <strong>reusable dynamic templates</strong> (5 pages each) with advanced <strong>search autocomplete</strong>, related suggestions, and custom theming, delivering faster and more intuitive navigation.',
          ],
        },
      ],
    },
    {
      title: 'Research and Publication',
      icon: '\u{1F393}',
      items: [
        {
          role: 'Real-Time Classification of Leukocytes Using Deep Learning in Microscopic Imaging',
          organization:
            'International Journal of Research in Engineering, Science and Management — Volume 7, Issue 12, December 2024',
          period: '2024',
          location: '',
          logo: import.meta.env.BASE_URL + 'logos/ijresm.png', // Place logo at public/logos/ijresm.png
          link: 'https://www.ijresm.com/storage/articles/3/IJRESM_V7_I12_20.pdf',
          points: [
            'Achieved <strong>97%+ classification accuracy</strong> in leukocyte identification by designing and training a <strong>CNN-based deep learning</strong> model on microscopic blood smear images, reducing reliance on manual examination.',
            'Improved model generalization across varying imaging conditions by applying <strong>data augmentation</strong> and <strong>transfer learning</strong> techniques to overcome limited labeled biomedical datasets.',
            'Enhanced feature discrimination of leukocyte morphology by integrating <strong>attention mechanisms</strong> into the CNN architecture, increasing interpretability for diagnostic use.',
            'Streamlined preprocessing and classification workflow for <strong>real-time analysis</strong> by building an <strong>end-to-end pipeline</strong> from image normalization to automated prediction.',
            'Enabled scalable <strong>automated hematology screening</strong> by demonstrating model suitability for real-time microscopic image processing in clinical and point-of-care settings.',
            'Validated system performance through experimental evaluation on <strong>benchmark leukocyte datasets</strong>, establishing reliability for <strong>computer-aided diagnostic</strong> applications.',
          ],
        },
        {
          role: 'Topic Mining From Interview Data',
          organization:
            'College of Engineering Pune, Capstone Project',
          period: '2022',
          location: '',
          logo: import.meta.env.BASE_URL + 'logos/coep.png', // Place logo at public/logos/nlp-research.png
          link: 'https://drive.google.com/file/d/1wVzOjyNJzigoEWTNx6vTrvJ7c5zOzTyV/view?usp=sharing',
          points: [
            'Collaborated in <strong>3-member team</strong> to build an <strong>NLP-based</strong> interview analysis framework, reducing subjective evaluation bias by applying probabilistic <strong>topic modeling (LDA)</strong> and <strong>topic change point detection</strong> on real-world interview transcripts.',
            'Analyzed <strong>138 mock interviews</strong> (≈10.5 hours) from <strong>69 MIT students</strong>, enabling large-scale conversational insights by performing end-to-end NLP preprocessing including <strong>tokenization</strong>, <strong>lemmatization</strong>, stopword removal, and transcript normalization.',
            'Evaluated and compared <strong>5+ topic modeling</strong> and topic shift detection approaches, grounded in a survey of <strong>10+ research papers</strong>, using coherence scores, <strong>LDA</strong>, <strong>LSA</strong>, and <strong>CPD</strong> to justify model and parameter selection.',
            'Improved topic interpretability and temporal segmentation, measured via <strong>coherence trends</strong> and dominant-topic distributions, by tuning <strong>LDA/LSA hyperparameters</strong> and applying <strong>change point detection</strong> to topic probability time series.',
          ],
        },
      ],
    },
    {
      title: 'Student Organizations',
      icon: '\u{1F3DB}\uFE0F',
      items: [
        {
          role: 'Accounts and Documentation Head',
          organization: 'Pune Startup Fest \'21',
          period: '2021',
          location: 'Pune, India',
          logo: import.meta.env.BASE_URL + 'logos/pune-startup-fest.png', // Place logo at public/logos/pune-startup-fest.png
          link: 'https://www.coeptech.ac.in/student-corner/student-clubs/pune-startup-fest/',
          points: [
            'Coordinated a cross-functional team to execute a flagship festival, successfully facilitating <strong>₹3.5 Cr funding</strong> in startup funding and securing <strong>250+ student internships</strong>',
            'Managed <strong>budgeting</strong>, <strong>financial documentation</strong>, and permission-related processes to ensure smooth and compliant fest operations',
          ],
        },
        {
          role: 'Core Member',
          organization: 'Bhau Institute of Innovation, Entrepreneurship and Leadership',
          period: '2021 - 2022',
          location: 'Pune, India',
          logo: import.meta.env.BASE_URL + 'logos/bhau.png', // Place logo at public/logos/bhau.png
          link: 'https://bhau.org/bhau-e-cell/',
          points: [
            'Increased student participation in <strong>entrepreneurship events</strong> by promoting startup opportunities and coordinating public relations for <strong> E-Cell</strong>.',
            'Executed <strong>startup workshops</strong> and <strong>networking events</strong> by coordinating with founders, mentors, and managing on-ground operations.',
          ],
        },
      ],
    },
    {
      title: 'Activities and Achievements',
      icon: '\u{1F3C6}',
      items: [
        {
          role: 'Technical Writing Contributor',
          organization: 'GeeksforGeeks',
          period: '',
          location: 'India',
          logo: import.meta.env.BASE_URL + 'logos/gfg.png', // Place logo at public/logos/gfg.png
          link: 'https://www.geeksforgeeks.org/c/c-program-to-read-a-range-of-bytes-from-file-and-print-it-to-console/',
          points: [
            'Wrote and published <strong>technical articles</strong> on computer programming concepts, focusing on clear explanations, code examples, and best practices for learners at different levels.',
            'Achieved <strong>40,000+ cumulative views</strong> from unique readers across published articles, demonstrating strong content reach and engagement in the developer community.',
          ],
        },
        {
          role: 'Affiliated Basic Level Rifle Shooter',
          organization: 'ABSA – Anjali Bhagwat Shooting Academy',
          period: '',
          location: 'Pune, India',
          logo: import.meta.env.BASE_URL + 'logos/absa.png', // Place logo at public/logos/absa.png
          link: 'https://www.anjalibhagwat.com',
          points: [
            'Trained at <strong>ABSA – Anjali Bhagwat Shooting Academy</strong>, Pune, in <strong>10m rifle</strong> basics, safety, posture, and precision shooting techniques under structured coaching.',
            'Practiced under the mentorship framework established by <strong>3-time Olympian</strong> and former <strong>world no. 1</strong> rifle shooter <strong>Anjali Bhagwat</strong>, focusing on discipline, consistency, and competition-oriented training.',
          ],
        },
        {
          role: 'Volunteer Mentor',
          organization: 'Social Contribution',
          period: '',
          location: 'Akola, India',
          logo: import.meta.env.BASE_URL + 'logos/teach.png',
          link: 'https://drive.google.com/file/d/17-0ByQS2_RLvZvcFG8wpyFmff6TMLP8y/view?usp=sharing',
          points: [
            'Mentored and taught <strong>50+ students</strong> mathematics and basic computer skills at a <strong>tribal Ashram school</strong> during semester breaks, focusing on building foundational numeracy and digital literacy.',
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
    icon: '\u{1F4C8}',
    body: 'A <strong>full-stack web application</strong> designed to track and compare product prices across multiple sources. Features a <strong>Node.js</strong> backend with <strong>API endpoints</strong>, a responsive frontend built with <strong>React</strong>, and includes comprehensive documentation. The application helps users monitor price changes and make informed purchasing decisions with <strong>real-time price tracking</strong> capabilities.',
    tech: ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS'],
    link: 'https://github.com/DSahir/PriceTracer',
    },
     {
      title: 'Crypto Streaming',
      icon: '\u{1F4CA}',
      body: '<strong>Real-time cryptocurrency analytics pipeline</strong> for Systems for Data Science course. Ingests live trade data from <strong>Coinbase/Binance WebSockets</strong>, streams through <strong>Apache Kafka</strong>, processes into 1-second <strong>OHLC candles</strong> and volatility metrics with <strong>Parquet</strong> persistence, serves via <strong>FastAPI REST</strong> endpoints, and includes interactive <strong>Plotly dashboards</strong> plus <strong>ML trend prediction</strong> model.',
      tech: ['Python', 'FastAPI', 'Apache Kafka', 'Pandas', 'PyArrow', 'Plotly', 'Docker'],
      link: 'https://github.com/DSahir/CS532_Project',
    },
    {
    title: 'Chat Application',
    icon: '\u{1F4AC}',
    body: 'A <strong>real-time chat application</strong> with a <strong>client-server architecture</strong>. Features a responsive web interface built with <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong> on the client side, paired with a robust backend server for handling <strong>message delivery</strong> and user communication. The application enables seamless <strong>real-time messaging</strong> between multiple users with a clean, intuitive interface.',
    tech: ['JavaScript', 'HTML', 'CSS', 'Node.js'],
    link: 'https://github.com/DSahir/chat-application',
    },
    {
      title: 'Cook Diaries',
      icon: '\u{1F373}',
      body: 'A <strong>full-stack web application</strong> for sharing and discovering recipes. Built with a <strong>Node.js</strong> and <strong>Express</strong> backend with <strong>MongoDB</strong> database models, the application features <strong>user authentication</strong>, recipe management, and a responsive frontend with HTML, CSS, and JavaScript. The platform enables users to store, organize, and share their favorite cooking recipes with a clean and intuitive interface.',
      tech: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'HTML', 'CSS'],
      link: 'https://github.com/DSahir/CookDiaaries',
    },
    {
    title: 'Task App API',
    icon: '\u{2705}',
    body: 'A <strong>JavaScript-based task management API</strong> built with <strong>Node.js</strong> and <strong>MongoDB Atlas</strong> backend. The application includes profile picture setup, <strong>database integration</strong>, and <strong>unit testing</strong> capabilities using <strong>Jest</strong>. Designed to manage task operations with persistent data storage and reliable API endpoints.',
    tech: ['JavaScript', 'Node.js', 'MongoDB', 'Jest'],
    link: 'https://github.com/DSahir/task-app-api',
    },
      {
    title: 'BlogMe',
    icon: '\u{270D}\uFE0F',
    body: '<strong>Full-stack blogging platform</strong> built with <strong>Node.js</strong>, <strong>Express</strong>, and <strong>EJS templating</strong>. Features <strong>user authentication</strong> (registration/login), blog <strong>CRUD operations</strong>, personal blog dashboard with statistics (max/min/avg ratings, trending blogs), <strong>global search</strong> by author, <strong>reviews/ratings system</strong>, and responsive design for reading, writing, and community interaction.',
    tech: ['Node.js', 'Express', 'EJS', 'JavaScript', 'CSS'],
    link: 'https://github.com/DSahir/BlogMe',
  },
       
    // {
    //   title: 'Hostel Management System',
    //   body: 'Full-stack Django web application for hostel administration with student registration, room allocation, mess management (veg/non-veg options with contractors and daily fees), warden oversight, college info integration, and automated population of demo data including 4 hostels (Vivan, Shiv, Jijau, Riva), 5 rooms per hostel, multiple messes, and chief warden authentication.',
    //   tech: ['Python', 'Django', 'MySQL', 'JavaScript', 'CSS', 'HTML'],
    //   link: 'https://github.com/DSahir/Hostel-management',
    // },
  ],

  // ---------------------------------------------------------------------------
  // CERTIFICATES - Used in Certificates.jsx
  // ---------------------------------------------------------------------------
  certificates: [
    { name: 'Neural Networks and Deep Learning', link: 'https://drive.google.com/file/d/17fUm7MxuFlh5_oDq94ta5bA_tj65ETA3/view?usp=sharing', logo: import.meta.env.BASE_URL + 'logos/coursera.png' }, // <-- Replace with your certificates
    { name: 'Improving Deep Neural Networks', link: 'https://drive.google.com/file/d/1Kku8bZv5Vc6FY5s8zKUOAOEOZaIpEJQO/view?usp=sharing', logo: import.meta.env.BASE_URL + 'logos/coursera.png' },
    { name: 'Structuring Machine Learning Projects', link: 'https://drive.google.com/file/d/13-i_KZS5cy-nsum-x1qILMw50OMxfyM9/view?usp=sharing', logo: import.meta.env.BASE_URL + 'logos/coursera.png' },
    { name: 'Cyber Security Foundation', link: 'https://drive.google.com/file/d/1vVTc1oEv9KZukPBfK33cg6ICQG0hLT8p/view?usp=sharing', logo: import.meta.env.BASE_URL + 'logos/certi-proof.png' },
    { name: 'SEO Fundamentals Exam', link: 'https://drive.google.com/file/d/1LxF38TmQgO1cWwrfA7AUToqDj56mHBZS/view?usp=sharing', logo: import.meta.env.BASE_URL + 'logos/semrush.png' },
    ],

  // ---------------------------------------------------------------------------
  // NAVIGATION - Used in Header.jsx
  // ---------------------------------------------------------------------------
  navItems: ['About', 'Education', 'Experience', 'Projects', 'Certificates', 'Contact'],
};

export default portfolioData;
