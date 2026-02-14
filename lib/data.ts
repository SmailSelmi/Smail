
export const personalData = {
  name: "Smail Selmi",
  role: "UI/UX Designer & Developer",
  bio: "Specializing in high-performance digital experiences. I focus on building scalable, user-centered interfaces, turning complex design challenges into polished, functional web applications.",
  email: "smailselmi101@gmail.com",
  about: "With over 3 years of experience, I specialize in crafting end-to-end digital experiences. My journey begins with visual storytelling—designing impactful logos and social media campaigns—and culminates in building scalable, 'weightless' web applications using Antigravity and Gravity UI. I don't just build interfaces; I design systems. Whether it's a high-conversion product design in Adobe Creative Suite or a functional React application in VS Code, my focus is always on turning complex challenges into polished, user-centered realities.",
  socials: {
    instagram: "https://www.instagram.com/0xsmail/",
    linkedin: "https://www.linkedin.com/in/uixsmail/",
    behance: "https://www.behance.net/0xSmail",
  },
};

export const education = [
  {
    title: "UI UX & Product Design",
    institution: "Etudz Academy",
    year: "2023 - Present",
    link: "https://etudz.academy/",
  },
  {
    title: "High School",
    institution: "El Tarf Center",
    year: "2012 - 2016",
  },
];

export const experience = [
  {
    role: "Employee",
    company: "The Directorate Generate for National Security (DGSN)",
    link: "https://www.algeriepolice.dz/",
    details: [
      { position: "Security Professional", period: "Sep 2022 - Present" },
      { position: "Call Center Manager", period: "Aug 2019 - Sep 2022" },
      { position: "Secretary", period: "Sep 2018 - Aug 2019" },
    ],
  },
  {
    role: "Sales",
    company: "Cosmetic & Furniture Store",
    details: [
      { position: "Sales Manager", period: "Feb 2014 - Sep 2017" },
      { position: "Furniture Assembler & Installer", period: "Jun 2012 - Sep 2013" },
    ],
  },
];

export const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "A comprehensive dashboard for managing products, orders, and analytics. Built with Next.js and Tailwind CSS.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "#",
    github: "#",
    image: "/1766174915141.jpg", // Placeholder for poster
    video: "https://res.cloudinary.com/dyi0jxi3g/video/upload/v1771061704/ecommerce-dashboard_lt3pqy.mp4",
    challenge: "Traditional e-commerce dashboards often suffer from data fragmentation and slow load times, making real-time inventory management difficult for scaling businesses.",
    solution: "I engineered a centralized React-based dashboard with a highly optimized data synchronization layer, providing sub-second latency for complex inventory updates and multi-channel order tracking.",
    outcomes: [
      "Reduced inventory sync latency from 5s to 0.4s",
      "Integrated 5+ external sales APIs into a unified view",
      "Implemented zero-config dark mode and accessibility (WCAG 2.1)"
    ]
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website with smooth animations and dark mode support.",
    tags: ["Next.js", "React", "JavaScript", "VS Code"],
    link: "#",
    github: "#",
    // image: Removed as no poster exists
    video: "https://res.cloudinary.com/dyi0jxi3g/video/upload/v1771061700/landingpage_irhu4s.mp4",
    challenge: "Modern high-end portfolios need to balance heavy visual components with perfect performance and mobile responsiveness, which is often compromised for aesthetic flair.",
    solution: "Designed and developed a 'weightless' UI using Next.js and Framer Motion, ensuring all high-fidelity animations run at 60fps while maintaining a perfect Lighthouse performance score.",
    outcomes: [
      "Achieved 100/100 Lighthouse Performance score",
      "Seamless layout-neutral animations across all viewports",
      "Universal design language with custom Gravity UI tokens"
    ]
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates and drag-and-drop functionality.",
    tags: ["HTML", "CSS", "TypeScript", "AI"],
    link: "#",
    github: "#",
    // image: Removed as no poster exists
    video: "https://res.cloudinary.com/dyi0jxi3g/video/upload/v1771061704/Task-Management-App_lp2sc8.mp4",
    challenge: "Collaboration apps frequently struggle with state synchronization and complex drag-and-drop interactions, leading to a jagged user experience and lost productivity.",
    solution: "Leveraged advanced state management and gesture libraries to build a robust task board that handles real-time updates and fluid drag-and-drop transitions with buttery smoothness.",
    outcomes: [
      "Implemented zero-latency real-time state updates",
      "Custom drag-and-drop engine for multi-list interaction",
      "Intuitive keyboard shortcuts for power-users"
    ]
  },
];

export const skills = {
  uiUx: ["Wireframing and Prototyping", "Usability Testing", "Responsive Design", "Typography & Color Theory", "Data Analysis"],
  webDev: ["HTML", "CSS", "JavaScript", "Bootstrap", "WordPress", "Next.js", "React", "Tailwind CSS"],
  marketing: ["SEO", "Google Analytics", "Content Marketing", "E-commerce"],
  tools: ["Adobe Creative Suite", "Figma", "Canva", "VS Code", "AI", "Antigravity", "GitHub", "Notion", "WordPress"],
  languages: ["Arabic (Native)", "English (Fluent)", "French (Elementary)"],
};

export const brands = [
  { name: "Figma", icon: "figma" },
  { name: "Adobe", icon: "adobe" },
  { name: "Next.js", icon: "nextjs" },
  { name: "React", icon: "react" },
  { name: "Tailwind", icon: "tailwind" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Node.js", icon: "nodejs" },
  { name: "GitHub", icon: "github" },
  { name: "VS Code", icon: "vscode" },
];

export const faqItems = [
  {
    question: "What is your typical project timeline?",
    answer: "Most projects take between 2 to 6 weeks, depending on complexity. I prioritize quality over speed, but my 'weightless' development process ensures a fast, efficient path to deployment."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Absolutely. I provide 3 months of technical support after every launch to ensure stability and handle any minor adjustments as your user base grows."
  },
  {
    question: "What tools do you use for design and development?",
    answer: "I use Figma for high-fidelity prototyping, Adobe Creative Suite for visual assets, and Next.js/Tailwind for building high-performance web applications."
  },
  {
    question: "Are you available for full-time roles or just contracts?",
    answer: "I'm currently focused on high-impact contract projects, but I'm always open to discussing long-term roles if the vision and challenge are right."
  }
];
