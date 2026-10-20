/*
 * All of the site's content lives in this file. Components only read from it,
 * so to change text, links, images or order, edit this file and nothing else.
 *
 * Inline formatting you can use inside text:
 *   ==words==   lavender highlight block (used in headings)
 *   **words**   bold
 *
 * Colors for cards / stickers: 'lilac' | 'lime' | 'sky' | 'pink' | 'mint' | 'butter'
 * Files referenced here (photo, PDFs, screenshots) live in /public.
 */

export const site = {
  name: 'Yuva Kiran Palla',
  shortName: 'yuva',
  title: 'Yuva Kiran Palla | MERN Full-Stack Developer',
  description:
    'Portfolio of Yuva Kiran Palla, a Computer Science Engineering student at SVCE Tirupati building full-stack web applications with the MERN stack.',
  // Your live address (used by link previews, robots.txt and the sitemap).
  url: 'https://yuvakiranpalla.vercel.app',
  email: 'yuvak2484@gmail.com',
  resume: '/resume.pdf',
  resumeFileName: 'Yuva-Kiran-Palla-Resume.pdf',
  location: 'Tirupati, India',
  jobTitle: 'MERN Full-Stack Developer',
  school: 'Sri Venkateswara College of Engineering, Tirupati',
}

// Profiles. `icon` picks the brand icon (see src/lib/icons.js).
export const socials = {
  github: { label: 'GitHub', href: 'https://github.com/yuvakiran845', icon: 'github' },
  linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yuvakiran123', icon: 'linkedin' },
  leetcode: { label: 'LeetCode', href: 'https://leetcode.com/u/yuvakiran15', icon: 'leetcode' },
  gfg: { label: 'GeeksforGeeks', href: 'https://www.geeksforgeeks.org/profile/yuvakxcjh', icon: 'gfg' },
}

// Navbar links. `id` must match a section id below.
export const nav = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export const hero = {
  badge: 'Available for work',
  // Two lines, shown in uppercase. The second line gets the lavender block.
  headline: ['From ideas into', 'blazing web apps'],
  stats: [
    'B.Tech CSE at SVCE Tirupati, graduating 2027, CGPA 9.09/10',
    '200+ DSA problems solved on LeetCode & GeeksforGeeks · 1st Prize, Spark Tech Event',
  ],
  intro:
    'Hi, I’m **Yuva Kiran Palla**. I build full-stack web applications with MongoDB, Express.js, React.js and Node.js, and I’m looking for software engineering internships and full-stack developer roles.',
  primaryCta: { label: 'View my work', href: '#projects' },
  secondaryCta: { label: 'Get in touch', href: '#contact' },
  socials: ['github', 'linkedin', 'leetcode', 'gfg'],
  terminal: {
    filename: 'yuva.sh',
    session: [
      { command: 'whoami', output: ['yuva kiran palla'] },
      { command: 'cat about.txt', output: ['CSE student, SVCE Tirupati, 2027', 'MERN full-stack developer'] },
      { command: 'ls projects/', output: ['myjobtracker  shortify  bookstore'] },
    ],
  },
}

// Scrolling band under the hero (shown in uppercase)
export const marquee = [
  'React.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'TypeScript',
  'REST APIs',
  'JWT Auth',
  'Tailwind CSS',
  'Python',
  'Git',
]

export const about = {
  label: 'about',
  title: 'I like building things people ==actually use==.',
  paragraphs: [
    'I’m a Computer Science Engineering student at Sri Venkateswara College of Engineering, Tirupati, focused on full-stack development with the MERN stack. I enjoy turning ideas into complete, deployed products, from database design and secure REST APIs to clean, responsive React interfaces.',
    'Through my projects and internships I’ve built job trackers, URL shorteners with analytics, and an online bookstore, while sharpening my problem-solving with 200+ DSA problems. I’m now looking for software engineering internships and full-stack developer roles.',
  ],
  chips: ['MERN Stack', 'REST APIs', 'JWT Auth', 'DSA'],
  photo: { src: '/profile.jpg', alt: 'Yuva Kiran Palla', width: 768, height: 1024 },
  // Stickers around the photo: top-right, left, bottom-right
  stickers: [
    { label: 'React', color: 'sky' },
    { label: 'Node.js', color: 'mint' },
    { label: 'MongoDB', color: 'pink' },
  ],
  educationLabel: 'education',
  education: [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      school: 'Sri Venkateswara College of Engineering, Tirupati',
      period: '2023 – 2027',
      badge: 'CGPA 9.09/10',
    },
    {
      degree: 'Intermediate (MPC)',
      school: 'Sai Parameswara Junior College',
      period: '2021 – 2023',
      badge: '91%',
    },
    { degree: 'SSC', school: 'ZPHS Veparala', period: '2021', badge: '91.2%' },
  ],
}

export const projects = {
  label: 'selected work',
  title: 'Things I’ve ==built==.',
  intro:
    'Three full-stack MERN projects, from a job application tracker to a URL shortener with analytics and an online bookstore.',
  items: [
    {
      id: 'myjobtracker',
      title: 'MyJobTracker',
      category: 'MERN Full Stack',
      accent: 'lilac',
      sticker: 'React',
      description:
        'A full-stack job application tracker with an analytics dashboard and a drag-and-drop Kanban board across 7 hiring statuses.',
      highlights: [
        '20 RESTful Express.js endpoints with Zod validation for auth, job CRUD, CSV export, calendar events and saved views',
        'Search, filtering, sorting and pagination on compound indexes: 10-item page from a 10,000-record dataset in 94 ms median (20 ms filtered)',
        'Secured with JWT in HttpOnly cookies, bcrypt and CSRF protection',
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Tailwind CSS'],
      live: 'https://my-job-trackr.onrender.com',
      github: 'https://github.com/yuvakiran845/Job_Application_Tracker',
      image: '/projects/myjobtracker.webp',
      imageAlt: 'MyJobTracker dashboard with application, interview and offer counts',
    },
    {
      id: 'shortify',
      title: 'Shortify',
      category: 'MERN + Analytics',
      accent: 'pink',
      sticker: 'Node.js',
      description:
        'A URL shortener and QR code generator with click analytics and rate-limited, secure redirects.',
      highlights: [
        'Cryptographically secure 7-character short codes and custom aliases, HTTP 302 redirects in 7 ms median',
        'Mongoose aggregation pipeline for click analytics that excludes bots and repeat clicks',
        'JWT auth, bcrypt and per-IP rate limiting, plus PNG QR code export',
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Tailwind CSS'],
      live: 'https://getshortify.vercel.app',
      github: 'https://github.com/yuvakiran845/Shortify',
      image: '/projects/shortify.webp',
      imageAlt: 'Shortify home page with a long URL turned into a short link and QR code',
    },
    {
      id: 'bookstore',
      title: 'BookStore',
      category: 'MERN · Internship',
      accent: 'sky',
      sticker: 'MongoDB',
      description:
        'A full-stack online bookstore built during my SmartBridge MERN internship, with a Node.js and Express.js REST API backend and a React frontend.',
      highlights: [
        'Express.js REST API on MongoDB for auth, books, cart, wishlist, addresses, coupons, orders and reviews',
        'Book catalogue with search, filters (category, author, language, price, rating), sorting and pagination',
        'User accounts with password reset, checkout with coupon codes, and an admin dashboard to manage books and view orders',
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
      live: 'https://book-store-lz4p.onrender.com',
      github: 'https://github.com/yuvakiran845/book_store',
      image: '/projects/bookstore.webp',
      imageAlt: 'BookStore home page with a featured book and catalogue buttons',
    },
  ],
}

export const experience = {
  label: 'experience',
  title: 'Where I’ve ==grown==.',
  intro: 'Two internships covering full-stack MERN development and competitive programming.',
  items: [
    {
      company: 'SmartBridge',
      period: 'Jun 2026 – Aug 2026',
      certificate: '/certificates/smartbridge.pdf',
      role: 'Full Stack Developer Intern – MERN Stack',
      meta: 'SmartBridge Educational Services Pvt. Ltd., Virtual Internship',
      summary:
        'Completed a 120-hour virtual internship in full-stack MERN development, in collaboration with the Andhra Pradesh State Council of Higher Education.',
      bullets: [
        'Built BookStore, a full-stack MERN online bookstore deployed on Render',
        'Built backend REST APIs with Node.js and Express.js and a React.js frontend',
        'Gained hands-on experience with MongoDB, Express.js, React.js and Node.js',
      ],
      cta: { label: 'See the BookStore project', href: '#bookstore' },
      chips: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs'],
    },
    {
      company: 'byteXL',
      period: 'May 2026 – Jul 2026',
      certificate: '/certificates/bytexl.pdf',
      role: 'Competitive Programming Intern',
      meta: 'byteXL, at SVCE Tirupati',
      summary: 'Completed an internship in Competitive Programming and Advanced Algorithmic Techniques.',
      bullets: [
        'Practiced advanced algorithmic techniques and competitive programming problem solving',
        'Strengthened data structures and algorithms fundamentals',
      ],
      chips: ['DSA', 'Algorithms', 'Problem Solving'],
    },
  ],
}

// `span` = how many of the 4 desktop columns a card takes (1, 2 or 4).
// `icon` keys are mapped in src/lib/icons.js.
export const skills = {
  label: 'skills',
  title: 'What I ==work== with.',
  intro: 'Centered on the MERN stack and full-stack web development, with strong CS fundamentals.',
  groups: [
    {
      title: 'Frontend',
      icon: 'frontend',
      color: 'lilac',
      span: 2,
      items: ['HTML', 'CSS', 'React.js', 'Tailwind CSS', 'Responsive Design'],
    },
    {
      title: 'Backend',
      icon: 'backend',
      color: 'lime',
      span: 2,
      items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'bcrypt'],
    },
    { title: 'Database', icon: 'database', color: 'sky', span: 1, items: ['MongoDB (Mongoose)', 'SQL'] },
    { title: 'Languages', icon: 'languages', color: 'pink', span: 1, items: ['JavaScript', 'TypeScript', 'Python'] },
    {
      title: 'Core Concepts',
      icon: 'concepts',
      color: 'mint',
      span: 2,
      items: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'],
    },
    {
      title: 'Tools & Deployment',
      icon: 'tools',
      color: 'lilac',
      span: 4,
      items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Render', 'Vercel'],
    },
  ],
}

export const services = {
  label: 'what I do',
  title: 'What I can build for you.',
  items: [
    {
      title: 'Full-Stack Web Apps',
      text: 'Complete MERN applications, from database to deployed UI.',
      icon: 'fullstack',
      color: 'lime',
    },
    {
      title: 'REST APIs & Auth',
      text: 'Secure Express.js APIs with JWT, bcrypt and validation.',
      icon: 'api',
      color: 'lilac',
    },
    {
      title: 'Dashboards & Analytics',
      text: 'Data views powered by MongoDB aggregation pipelines.',
      icon: 'analytics',
      color: 'sky',
    },
    {
      title: 'Responsive UIs',
      text: 'Clean React and Tailwind interfaces that work on every screen.',
      icon: 'responsive',
      color: 'pink',
    },
    {
      title: 'Deployment',
      text: 'Shipping apps live on Render and Vercel.',
      icon: 'deploy',
      color: 'mint',
    },
  ],
}

// `unit` is used for the count under each group name ("1 CREDENTIAL", "2 ACHIEVEMENTS").
export const certifications = {
  label: 'certifications',
  title: 'Always ==learning==.',
  intro: 'Internship certificates and achievements from SmartBridge, byteXL and SVCE.',
  groups: [
    {
      issuer: 'SmartBridge × APSCHE',
      unit: 'credential',
      items: [
        {
          title: 'Full Stack Developer – MERN Stack',
          note: 'Certificate ID: VIP-FSD-2026-1495',
          date: 'Aug 2026',
          link: { label: 'View certificate', href: '/certificates/smartbridge.pdf' },
        },
      ],
    },
    {
      issuer: 'byteXL',
      unit: 'credential',
      items: [
        {
          title: 'Competitive Programming & Advanced Algorithmic Techniques',
          date: 'Jul 2026',
          link: { label: 'View certificate', href: '/certificates/bytexl.pdf' },
        },
      ],
    },
    {
      issuer: 'Achievements',
      unit: 'achievement',
      items: [
        {
          title: '1st Prize, App Development Project, Spark Tech Event, SVCE',
          note: 'Lost and Found campus app, among 5 teams',
        },
        {
          title: '200+ DSA problems solved on LeetCode and GeeksforGeeks',
          link: { label: 'View profile', href: 'https://leetcode.com/u/yuvakiran15', external: true },
        },
      ],
    },
  ],
}

export const faq = {
  label: 'faqs',
  title: 'Questions, answered.',
  items: [
    {
      q: 'What do you mainly work with?',
      a: 'The MERN stack: MongoDB, Express.js, React.js and Node.js, with Tailwind CSS for styling and JWT for authentication. I also use TypeScript and Python.',
    },
    {
      q: 'Have you worked in a team before?',
      a: 'Yes. I won 1st Prize in the App Development category at SVCE’s Spark Tech Event with my team for a Lost and Found campus app.',
    },
    {
      q: 'How do you approach building a project?',
      a: 'I start with the data model and API design, secure the backend with validation and authentication, then build a clean, responsive frontend and deploy it.',
    },
    {
      q: 'Do you practice DSA?',
      a: 'Yes, I’ve solved 200+ problems on LeetCode and GeeksforGeeks and completed a competitive programming internship with byteXL.',
      links: ['leetcode', 'gfg'],
    },
    {
      q: 'Where can I see more of your work?',
      a: 'On my GitHub (github.com/yuvakiran845), and every project above has a live link.',
      links: ['github'],
    },
    {
      q: 'Are you open to opportunities?',
      a: 'Yes, I’m looking for software engineering internships and full-stack developer roles.',
    },
  ],
}

export const contact = {
  label: 'contact',
  title: 'Let’s build something ==together.==',
  text: 'I’m looking for software engineering internships and full-stack developer roles. If you have an opportunity or a question, I’d be glad to hear from you.',
  socials: ['linkedin', 'github', 'leetcode', 'gfg'],
  form: {
    label: 'or send a message',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'you@company.com',
    messagePlaceholder: 'Hi Yuva, I’d like to talk about...',
    note: 'Your message comes straight to my inbox.',
    submit: 'Send message',
    sending: 'Sending…',
    success: 'Thanks! Your message was sent.',
    error: 'Sorry, the message didn’t go through. Please email me directly at',
    subject: 'Hello from your portfolio',
    // Messages are delivered to site.email by FormSubmit (formsubmit.co), no account needed.
    // The very first message triggers an "Activate Form" email: click it once, then every
    // message arrives in your inbox. A new domain (e.g. after deploying) asks to activate again.
    endpoint: 'https://formsubmit.co/ajax/',
  },
}

export const footer = {
  builtWith: 'Built with React, Vite & Tailwind CSS',
  socials: ['linkedin', 'github', 'leetcode', 'gfg'],
}
