import { Project, SkillCategory, Experience, Education, Certification, SpokenLanguage, Testimonial } from '../types';

export const PERSONAL_INFO = {
  name: 'Yasir Ali',
  title: 'Software Developer | Python, Django & React',
  subtitle: 'Python & Django REST Framework • React.js • Cloudflare Edge Architecture & Serverless',
  bio: 'I am Yasir Ali, a BS Information Technology graduate with a keen interest in software development and technology. I am eager to learn new skills, explore modern technologies, and develop user-friendly applications. Through my studies, I have gained knowledge of programming, databases, and computer systems. I am hardworking, motivated, and always willing to learn. My goal is to improve my technical skills, gain professional experience, and contribute positively to innovative projects and organizations.',
  location: 'Lahore, Pakistan',
  phone: '0309-9849804',
  email: 'yasir.media64@gmail.com',
  website: 'https://yasirali.uk',
  websiteDisplay: 'yasirali.uk',
  github: 'https://github.com/Itsyasir64',
  githubUsername: 'Itsyasir64',
  linkedin: 'https://www.linkedin.com/in/yasir-ali-064-/',
  availability: 'Open for Software Development Roles & Engineering Opportunities',
  yearsOfExperience: '2+',
  projectsCompleted: '10+',
  satisfactionRate: '100%',
  uptimeRecord: '99.9%',
};

export const PROJECTS: Project[] = [
  {
    id: 'immuneq-healthcare-fyp',
    title: 'ImmuneQ — Autoimmune Disease Management Platform',
    tagline: 'Final Year Project: Full-stack healthcare platform for autoimmune disease management',
    description: 'Full-stack healthcare platform for autoimmune disease management — built with React, JavaScript, Express.js, HTML, CSS, with health/medication/appointment logging and analytics dashboards with Recharts. Authored complete software documentation.',
    longDescription: 'ImmuneQ is a specialized medical management platform developed as a Final Year Project to empower patients and clinicians managing autoimmune conditions. The application features daily health and symptom logging, medication schedule tracking, clinical appointment management, and visual analytics dashboards built with Recharts to deliver actionable patient insights.',
    category: 'Full Stack',
    technologies: ['React.js', 'JavaScript', 'Express.js', 'Tailwind CSS', 'Recharts', 'REST APIs', 'PostgreSQL', 'HTML5', 'CSS'],
    githubUrl: 'https://github.com/Itsyasir64/ImmuneQ',
    liveUrl: 'https://immuneq-demo.vercel.app',
    featured: true,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    metrics: [
      { label: 'Platform Scope', value: 'Full-Stack FYP' },
      { label: 'Documentation', value: 'Complete Spec' },
      { label: 'Visualization', value: 'Recharts Dashboards' },
    ],
    architecture: [
      'Express.js and Node.js RESTful API handling patient records and appointments',
      'Interactive health and symptom telemetry visualized with Recharts in React',
      'Responsive healthcare layout built with HTML5, CSS, and Tailwind CSS',
      'Comprehensive system architecture, ER diagrams, and software requirements specifications'
    ],
    keyHighlights: [
      'Designed and engineered complete full-stack web architecture with React and Express.js.',
      'Constructed interactive analytics dashboards for symptom tracking and medication adherence.',
      'Authored complete end-to-end software documentation and functional specifications.'
    ]
  },
  {
    id: 'climosafe-climate-hub',
    title: 'Climosafe — Climate Change & Ecosystem Awareness Hub',
    tagline: 'Awareness-driven web project highlighting the role of trees in combating climate change',
    description: 'Awareness-driven web project highlighting the vital role of trees in combating climate change, preserving ecosystems, and promoting active ecological stewardship.',
    longDescription: 'Climosafe is an interactive awareness platform created to educate communities and students on the urgency of climate action. It features responsive educational layouts, interactive climate data visuals, and clear conservation guides that illustrate the environmental value of trees.',
    category: 'Full Stack',
    technologies: ['React.js', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS', 'REST APIs', 'Recharts'],
    githubUrl: 'https://github.com/Itsyasir64/Climosafe',
    liveUrl: 'https://climosafe.vercel.app',
    featured: true,
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
    metrics: [
      { label: 'Focus', value: 'Climate Action' },
      { label: 'Design', value: 'Responsive UI' },
      { label: 'Advocacy', value: 'Ecosystem Care' },
    ],
    architecture: [
      'Modern, mobile-first responsive design implemented with Tailwind CSS',
      'Dynamic data visualizers highlighting reforestation and carbon absorption metrics',
      'Semantic HTML5 structure optimized for fast rendering and web accessibility'
    ],
    keyHighlights: [
      'Built engaging educational web interface emphasizing environmental preservation.',
      'Designed clean visual components and intuitive navigation across climate topics.'
    ]
  },
  {
    id: 'petcare-management-system',
    title: 'Petcare — Pet Health Records & Daily Care System',
    tagline: 'User-friendly system for tracking pet health records and daily care routines',
    description: 'User-friendly system for tracking pet health records, vaccination schedules, veterinary appointments, and daily care routines.',
    longDescription: 'Petcare provides pet owners and clinics with a centralized, intuitive interface to manage pet profiles, vaccination histories, medication reminders, and daily feeding/exercise routines. Built with a Python/Django REST backend and a responsive React frontend.',
    category: 'Full Stack',
    technologies: ['Python', 'Django', 'Django REST Framework', 'React.js', 'PostgreSQL', 'MySQL', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Itsyasir64/Petcare',
    liveUrl: 'https://petcare-app.vercel.app',
    featured: true,
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1200&q=80',
    metrics: [
      { label: 'Backend Core', value: 'Django REST' },
      { label: 'Databases', value: 'PostgreSQL/MySQL' },
      { label: 'Care Flow', value: 'Health Tracking' },
    ],
    architecture: [
      'Django REST Framework backend with relational models for pets, vaccines, and visits',
      'React frontend interface with instant record filtering and care timeline schedules',
      'PostgreSQL / MySQL relational storage with data validation and structured endpoints'
    ],
    keyHighlights: [
      'Developed complete CRUD workflows for pet health logs, vaccines, and dietary routines.',
      'Implemented responsive UI with Tailwind CSS for seamless mobile and desktop usage.'
    ]
  },
  {
    id: 'personal-portfolio-platform',
    title: 'Personal Portfolio (yasirali.uk) — Sleek Engineering Showcase',
    tagline: 'Portfolio site with a dark editorial aesthetic, Cloudflare edge hosting, and filterable project grid',
    description: 'Portfolio site with a dark editorial aesthetic and filterable project grid, built with React, HTML, Tailwind CSS, and deployed on Cloudflare Pages.',
    longDescription: 'Developed to showcase full-stack projects, Cloudflare edge infrastructure mastery, Python/Django capabilities, and React applications. Integrated with an ATS-compliant resume viewer, interactive code playground, and live contact channels.',
    category: 'Cloud & APIs',
    technologies: ['React.js', 'JavaScript', 'Tailwind CSS', 'Cloudflare Pages', 'Cloudflare Workers', 'Git', 'GitHub'],
    githubUrl: 'https://github.com/Itsyasir64/portfolio',
    liveUrl: 'https://yasirali.uk',
    featured: true,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    metrics: [
      { label: 'Production URL', value: 'yasirali.uk' },
      { label: 'Hosting', value: 'Cloudflare Pages' },
      { label: 'Aesthetic', value: 'Dark Editorial' },
    ],
    architecture: [
      'Serverless hosting via Cloudflare Pages with worldwide CDN edge caching',
      'Configured custom DNS routing, SSL/TLS certificates, and caching rules',
      'Interactive project matrix with search, category filtering, and print-ready ATS resume spec'
    ],
    keyHighlights: [
      'Created polished dark editorial interface with responsive typography and layout.',
      'Deployed on custom domain yasirali.uk with Cloudflare edge acceleration.'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    iconName: 'Layout',
    skills: [
      { name: 'Python', level: 92, experience: 'Core Language', popular: true },
      { name: 'JavaScript', level: 90, experience: 'Core Language', popular: true },
      { name: 'C++', level: 82, experience: 'Foundations' },
      { name: 'HTML5', level: 96, experience: 'Markup & Semantics', popular: true },
      { name: 'CSS / CSS3', level: 94, experience: 'Modern Styling', popular: true },
    ]
  },
  {
    title: 'Frameworks & Libraries',
    iconName: 'Server',
    skills: [
      { name: 'Django', level: 90, experience: 'Backend Logic', popular: true },
      { name: 'Django REST Framework', level: 90, experience: 'APIs & Endpoints', popular: true },
      { name: 'React.js', level: 92, experience: 'Interactive UIs', popular: true },
      { name: 'Express.js', level: 86, experience: 'Node.js Backend' },
      { name: 'Tailwind CSS', level: 96, experience: 'Responsive Layouts', popular: true },
      { name: 'Recharts', level: 88, experience: 'Analytics Visuals' },
    ]
  },
  {
    title: 'Cloudflare & Edge Infrastructure',
    iconName: 'Cloud',
    skills: [
      { name: 'Cloudflare Workers & Pages (Serverless)', level: 92, experience: 'Edge Solutions', popular: true },
      { name: 'DNS, CDN & SSL/TLS Management', level: 94, experience: 'Speed & Reliability', popular: true },
      { name: 'WAF, DDoS Protection & Zero Trust', level: 90, experience: 'Security Policies', popular: true },
      { name: 'CI/CD & GitHub Actions Automation', level: 88, experience: 'Deployments' },
      { name: 'Traffic Routing & Content Caching', level: 92, experience: 'Performance' },
      { name: 'Cloudflare Analytics & Observability', level: 88, experience: 'Monitoring' },
    ]
  },
  {
    title: 'Databases & Tools',
    iconName: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 88, experience: 'Relational DB', popular: true },
      { name: 'MySQL', level: 88, experience: 'Relational DB', popular: true },
      { name: 'REST APIs', level: 94, experience: 'API Integration', popular: true },
      { name: 'Git & Version Control', level: 92, experience: 'Code Management', popular: true },
      { name: 'GitHub', level: 92, experience: 'Repositories & CI/CD' },
    ]
  },
  {
    title: 'Generative AI & Tooling',
    iconName: 'Cpu',
    skills: [
      { name: 'ChatGPT & Claude', level: 94, experience: 'AI-Assisted Coding', popular: true },
      { name: 'GitHub Copilot / Codex', level: 92, experience: 'Rapid Prototyping', popular: true },
      { name: 'Cursor IDE', level: 92, experience: 'AI Development', popular: true },
      { name: 'Google AI Studio', level: 90, experience: 'Prompt Engineering' },
      { name: 'Hugging Face', level: 84, experience: 'Working Knowledge' },
    ]
  },
  {
    title: 'AI, ML & Other Capabilities',
    iconName: 'Layers',
    skills: [
      { name: 'Fundamentals of AI & Machine Learning', level: 86, experience: 'Core Concepts' },
      { name: 'Data Analysis & Neural Networks', level: 84, experience: 'Data & Modeling' },
      { name: 'Problem Solving & Algorithms', level: 88, experience: 'Core Logic' },
      { name: 'Project & CMS Management', level: 88, experience: 'Organization' },
      { name: 'Meta Ads & Social Media Analytics', level: 90, experience: 'Campaigns & ROI' },
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-nexthon',
    role: 'Software Developer',
    company: 'Nexthon Technologies, Gujrat',
    location: 'Gujrat, Pakistan',
    period: 'Feb 2025 – Mar 2026',
    type: 'Full-time',
    description: 'Building and maintaining web features using Python and Django for backend logic and React.js for interactive, responsive interfaces.',
    achievements: [
      'Built and maintained website features using Python and Django for backend logic and React.js for interactive, responsive interfaces.',
      'Developed and styled responsive web layouts with HTML and Tailwind CSS, improving UI consistency across pages.',
      'Used AI-assisted development tools (ChatGPT, Claude, Copilot-style assistants) to speed up prototyping, debugging, and technical documentation.',
      'Collaborated with a development team through the full web development lifecycle, from feature planning to testing and deployment.',
      'Strengthened debugging and code-review practices through hands-on project work, improving feature reliability.'
    ],
    techStack: ['Python', 'Django', 'Django REST Framework', 'React.js', 'Tailwind CSS', 'HTML5/CSS', 'Git', 'Generative AI Tools']
  },
  {
    id: 'exp-nextgenlearners',
    role: 'Web Development Intern',
    company: 'Nextgenlearners',
    location: 'Lahore, Pakistan (Remote)',
    period: 'Jul 2026 – Aug 2026',
    type: 'Internship',
    description: 'Learned and applied core web development concepts, including front-end and back-end fundamentals under mentorship.',
    achievements: [
      'Learned and applied core web development concepts, including front-end and back-end fundamentals.',
      'Worked on hands-on tasks and mini-projects to build practical development skills under mentorship.'
    ],
    techStack: ['JavaScript', 'React.js', 'HTML5', 'CSS3', 'REST APIs', 'Git']
  },
  {
    id: 'exp-decodelabs',
    role: 'Artificial Intelligence Intern',
    company: 'Decodelabs',
    location: 'Lahore, Pakistan (Remote)',
    period: 'Jul 2026 – Aug 2026',
    type: 'Internship',
    description: 'Gained hands-on exposure to core artificial intelligence concepts and practical applications as part of a structured program.',
    achievements: [
      'Gained hands-on exposure to core artificial intelligence concepts and practical applications.',
      'Worked on AI-focused tasks and projects as part of a structured internship program.'
    ],
    techStack: ['Python', 'Machine Learning Concepts', 'Data Analysis', 'Neural Networks', 'AI Applications']
  },
  {
    id: 'exp-freelance-social',
    role: 'Social Media Manager',
    company: 'Freelance',
    location: 'Remote',
    period: 'Feb 2022 – Jun 2024',
    type: 'Contract',
    description: 'Managed social media accounts, planned Meta Ads campaigns, and analyzed campaign analytics for multiple clients.',
    achievements: [
      'Managed social media accounts for multiple clients across Facebook, Instagram, and other platforms.',
      'Planned and executed Meta Ads campaigns via Facebook Ads Manager, managing budgets and audience targeting.',
      'Tracked campaign performance using Meta analytics tools and prepared reports to guide content strategy.'
    ],
    techStack: ['Meta Ads Manager', 'Facebook / Instagram', 'Social Media Analytics', 'CMS Management', 'Content Strategy']
  }
];

export const EDUCATION: Education[] = [
  {
    degree: 'Bachelor of Science, Information Technology',
    institution: 'University of Gujrat, Pakistan',
    period: 'Sep 2020 – Jan 2025',
    location: 'Gujrat / Lahore, Pakistan',
    highlights: [
      'Completed coursework in Programming, Databases, Computer Systems, Software Engineering, and Web Development.',
      'Final Year Project: ImmuneQ — Full-stack healthcare platform for autoimmune disease management with complete software documentation.',
      'Developed strong foundation in Python, JavaScript, C++, PostgreSQL, MySQL, and modern web frameworks.'
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Machine Learning Foundations',
    issuer: 'Machine Learning Accreditation',
    verified: true
  },
  {
    title: 'Prompt Engineering for Generative AI',
    issuer: 'Generative AI Specialization',
    verified: true
  },
  {
    title: 'Google Cybersecurity Certificate',
    issuer: 'Google Career Certificates',
    verified: true
  },
  {
    title: 'Google AI Essentials',
    issuer: 'Google',
    verified: true
  }
];

export const SPOKEN_LANGUAGES: SpokenLanguage[] = [
  { name: 'English', proficiency: 'Fluent' },
  { name: 'Urdu', proficiency: 'Native' }
];

export const CLOUDFLARE_CAPABILITIES = [
  'Developed and deployed serverless applications using Cloudflare Workers and Cloudflare Pages for scalable and high-performance web solutions.',
  'Managed DNS, CDN, SSL/TLS certificates, caching, and traffic routing to enhance website reliability and speed.',
  'Implemented Web Application Firewall (WAF), DDoS protection, rate limiting, and Zero Trust security policies to secure web applications and infrastructure.',
  'Integrated Cloudflare services with APIs, databases, and third-party platforms to support business and application requirements.',
  'Automated application deployments and infrastructure updates using CI/CD pipelines, GitHub Actions, and Cloudflare APIs.',
  'Optimized application performance through edge computing, content caching, and traffic optimization strategies.',
  'Monitored website traffic, security events, and application performance using Cloudflare Analytics and observability tools.',
  'Ensured secure, scalable, and highly available production environments while troubleshooting deployment, networking, and performance issues.'
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Nexthon Engineering Team',
    role: 'Lead Developer',
    company: 'Nexthon Technologies',
    content: 'Yasir delivered excellent frontend and backend features using Python, Django, and React. He works diligently, picks up new tools with great enthusiasm, and always writes clean, maintainable code.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    relationship: 'Team Collaboration at Nexthon'
  },
  {
    name: 'University Academic Supervisor',
    role: 'Faculty Advisor',
    company: 'University of Gujrat',
    content: 'Yasir completed his BS IT degree and Final Year Project (ImmuneQ) with remarkable thoroughness. His documentation and full-stack software implementation demonstrated exemplary dedication.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    relationship: 'Academic & FYP Supervisor'
  },
  {
    name: 'Digital Marketing Client',
    role: 'Marketing Lead',
    company: 'Client Partner',
    content: 'Yasir handled our social media management and Meta advertising campaigns with high analytical precision, optimizing our ad budgets and tracking clear performance metrics.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    relationship: 'Freelance Client Partner'
  }
];
