// All site content lives here — edit this file and every section updates.

export const profile = {
  name: 'Amir Khan J',
  role: 'MERN Stack Developer',
  experience: '3.7',
  location: 'Chennai, India',
  phone: '8608651201',
  email: 'itsroiak@gmail.com',
  linkedin: 'https://linkedin.com/in/amir-khan-j',
  linkedinLabel: 'linkedin.com/in/amir-khan-j',
  resume: 'https://drive.google.com/file/d/1S3JTjxcJoIg7vNBFV8TWt0K2zhpz48pp/view?usp=sharing',
  roles: ['MERN Stack Developer', 'REST API Builder', 'React.js Engineer', 'Node.js Developer', 'MongoDB Schema Designer'],
  intro:
    'MERN Stack Developer with 3.7 years of experience building scalable, high-performance web applications across fintech, banking, and e-commerce. I build responsive UIs with React.js, Next.js and TypeScript, and robust backends with Node.js, Express.js and MongoDB — from database design and REST APIs to secure JWT authentication.',
  stats: [
    { value: 3.7, decimals: 1, label: 'Years Experience' },
    { value: 10, suffix: '+', label: 'Projects Built' },
    { value: 4, label: 'Layers · M E R N' },
  ],
}

export const about = {
  config: {
    name: 'Amir Khan J',
    role: 'MERN Stack Developer',
    location: 'Chennai, India',
    expertise: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Next.js', 'TypeScript'],
    focus: 'Scalable MERN Stack Web Applications',
  },
  story: [
    "I'm a MERN Stack Developer based in Chennai with 3.7 years of experience building scalable, high-performance web applications across fintech, banking, and e-commerce domains.",
    'From crafting responsive UIs with React.js and Next.js to designing MongoDB schemas and building secure RESTful APIs with Node.js and Express.js, I handle applications end-to-end with a strong focus on clean architecture, security and performance.',
  ],
  highlights: [
    { icon: '⚡', title: 'MERN Execution', text: 'Building end-to-end features across MongoDB, Express.js, React.js and Node.js.' },
    { icon: '🏦', title: 'Enterprise Portals', text: 'Developing secure, high-performance interfaces for banking, fintech, and e-commerce platforms.' },
    { icon: '🔗', title: 'APIs & Databases', text: 'Designing MongoDB schemas, REST APIs, JWT authentication and Express middleware.' },
  ],
}

// Skills grouped by the layer of the stack they live in
export const layers = [
  {
    id: 'client',
    letter: 'R',
    label: 'Client',
    tech: 'React.js',
    icon: 'react',
    color: '#61dafb',
    groups: [
      { title: 'Frontend', items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Responsive Design'] },
      { title: 'State Management', items: ['Redux Toolkit', 'Context API'] },
      { title: 'UI Libraries', items: ['Material UI', 'Tailwind CSS', 'Bootstrap'] },
    ],
  },
  {
    id: 'server',
    letter: 'E · N',
    label: 'Server',
    tech: 'Express + Node.js',
    icon: 'nodejs',
    color: '#8cc84b',
    groups: [
      { title: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'Middleware', 'MVC Architecture'] },
    ],
  },
  {
    id: 'db',
    letter: 'M',
    label: 'Database',
    tech: 'MongoDB',
    icon: 'mongodb',
    color: '#00ed64',
    groups: [{ title: 'Database', items: ['MongoDB', 'Mongoose', 'Schema Design', 'Indexing', 'Validation'] }],
  },
  {
    id: 'tools',
    letter: '⌘',
    label: 'Tooling',
    tech: 'Git · Postman',
    icon: 'git',
    color: '#f05032',
    groups: [{ title: 'Tools & Workflow', items: ['Postman', 'Git', 'GitHub', 'Bitbucket', 'VS Code'] }],
  },
]

export const marquee = [
  [
    ['mongodb', 'MongoDB'],
    ['express', 'Express.js', true],
    ['react', 'React.js'],
    ['nodejs', 'Node.js'],
    ['nextjs', 'Next.js', true],
    ['typescript', 'TypeScript'],
    ['javascript', 'JavaScript'],
    ['redux', 'Redux Toolkit'],
    ['mongoose', 'Mongoose'],
  ],
  [
    ['html5', 'HTML5'],
    ['css3', 'CSS3'],
    ['materialui', 'Material UI'],
    ['tailwindcss', 'Tailwind CSS'],
    ['bootstrap', 'Bootstrap'],
    ['postman', 'Postman'],
    ['git', 'Git'],
    ['github', 'GitHub', true],
    ['bitbucket', 'Bitbucket'],
    ['vscode', 'VS Code'],
  ],
]

export const projects = [
  { slug: 'raqamyah', title: 'Raqamyah', url: 'https://raqamyah.com/en', type: 'Fintech', desc: 'Saudi-based P2P lending platform — full-stack MERN modules, REST APIs and investor dashboard.', stack: ['MongoDB', 'Express', 'React', 'Node', 'Next.js'] },
  { slug: 'citi', title: 'Citi', url: 'https://www.citibank.ae/credit-cards/travel/citi-ultima-credit-card', type: 'Banking', desc: 'Banking UI for high-end travel credit card.', stack: ['React.js', 'Accessibility'] },
  { slug: 'ujjivan-bank', title: 'Ujjivan Bank', url: 'https://www.ujjivansfb.bank.in/', type: 'Banking', desc: 'Responsive banking interface.', stack: ['React.js', 'React Router'] },
  { slug: 'hold-the-magic', title: 'Hold the Magic', url: 'https://holdthemagic.com/', type: 'E-commerce', desc: 'Shopify-based e-commerce platform.', stack: ['React.js', 'Shopify Liquid'] },
  { slug: 'elite-shield', title: 'Elite Shield', url: 'https://www.eliteshield.com/', type: 'E-commerce', desc: 'E-commerce application for premium gear.', stack: ['React.js', 'Shopify'] },
  { slug: 'chocolat-moderne', title: 'Chocolat Moderne', url: 'https://chocolatmoderne.com/', type: 'E-commerce', desc: 'Premium chocolate e-commerce site.', stack: ['Shopify', 'SEO'] },
]

// **text** renders bold
export const experience = [
  {
    id: '6501a3c2e4b0',
    company: 'Compunet Connections',
    role: 'Software Engineer (MERN Stack)',
    period: 'Jan 2025 – Jun 2026',
    location: 'Chennai',
    points: [
      'Developed full-stack modules for Raqamyah, a Saudi-based P2P lending platform, using **MongoDB**, **Express.js**, **React.js** and **Node.js**, along with **Next.js** and **TypeScript**.',
      'Built **RESTful APIs** with **Node.js** and **Express.js** for loan, investment and KYC verification modules, following **MVC architecture**.',
      'Designed **MongoDB** collections and **Mongoose** schemas for users, loans and investments, with validation and indexing for faster queries.',
      'Implemented **JWT-based authentication** and **Express middleware** for request validation, role-based access and centralized error handling.',
      'Developed the public website and investor/borrower dashboard with **React.js**, **Redux Toolkit** and **Material UI**, integrating backend APIs for real-time data.',
      'Implemented **server-side rendering (SSR)** and dynamic routing with **Next.js** to improve page load speed and **SEO**.',
      'Improved performance using lazy loading, code splitting and memoization (**React.memo**, **useMemo**, **useCallback**).',
    ],
  },
  {
    id: '64f2b8d1a9c3',
    company: 'Xerago',
    role: 'Associate Developer',
    period: 'Jan 2024 – Jan 2025',
    location: 'Chennai',
    points: [
      'Developed responsive banking UIs for Citi and Ujjivan Bank using **React.js**, with cross-browser compatibility and accessibility considerations.',
      "Built Single Page Applications using **React Router** and contributed reusable **React components** for Ujjivan Bank's core platform.",
      'Managed frontend development for EDM campaigns, image handling pipelines, and vanity URL systems; also contributed to a custom **LMS platform** for internal employee training.',
      'Optimized frontend **API consumption patterns** to support efficient application performance and real-time data updates.',
    ],
  },
  {
    id: '63c9e07f5d21',
    company: 'Innoppl',
    role: 'Junior Software Engineer',
    period: 'Aug 2022 – Sep 2023',
    location: 'Chennai',
    points: [
      'Developed Shopify e-commerce solutions for Hold the Magic and Elite Shield using **React.js** and **Shopify Liquid**.',
      'Built reusable and user-friendly UI components with form validation and responsive layouts.',
      'Improved **page speed** through image optimization and **lazy loading** strategies.',
      'Implemented mobile-responsive and **SEO-friendly interfaces** across e-commerce applications.',
    ],
  },
]

export const education = [
  { title: "Bachelor's Degree in Computer Application (BCA)", place: 'Asan Memorial College of Arts & Science', period: '2017 – 2020 | Chennai', icon: '🎓' },
  { title: 'Frontend Development Certification', place: 'FITA Academy', period: 'Mar 2022 – Jul 2022', icon: '📜' },
]
