const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 18l2-2-2-2" /><path d="M8 18l-2-2 2-2" />
        <path d="M3 4h18a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1z" />
        <line x1="12" y1="10" x2="12" y2="16" />
      </svg>
    ),
    title: 'Web Development',
    desc: 'Pixel-perfect, high-performance web applications built with modern frameworks and best practices.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <line x1="12" y1="18" x2="12" y2="18.01" />
      </svg>
    ),
    title: 'Mobile App Development',
    desc: 'Cross-platform native experiences for iOS & Android, from concept to App Store launch.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: 'DevOps',
    desc: 'CI/CD pipelines, cloud infrastructure, containerization & monitoring for seamless delivery.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 014 4c0 1.5-.8 2.8-2 3.5v1h-4v-1c-1.2-.7-2-2-2-3.5a4 4 0 014-4z" />
        <path d="M10 10.5v2.5h4v-2.5" />
        <rect x="9" y="13" width="6" height="3" rx="1" />
        <path d="M10 16v2" /><path d="M14 16v2" />
        <path d="M8 20h8" />
      </svg>
    ),
    title: 'AI & LangChain Automation',
    desc: 'Intelligent agents, RAG pipelines, and LLM-powered automation for your business workflows.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        <circle cx="9" cy="10" r="1" fill="currentColor" />
        <circle cx="12" cy="10" r="1" fill="currentColor" />
        <circle cx="15" cy="10" r="1" fill="currentColor" />
      </svg>
    ),
    title: 'Custom Chatbots',
    desc: 'Conversational AI solutions tailored to your platform — web, mobile, or messaging apps.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    title: 'Cloud Solutions',
    desc: 'Scalable cloud architecture on AWS, GCP & Azure — from migration to fully managed infrastructure.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: 'UI/UX Design',
    desc: 'Research-driven interfaces designed for conversion, accessibility, and delightful user journeys.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16v16H4z" />
        <path d="M9 9h6v6H9z" />
        <path d="M9 2v2" /><path d="M15 2v2" />
        <path d="M9 20v2" /><path d="M15 20v2" />
        <path d="M2 9h2" /><path d="M2 15h2" />
        <path d="M20 9h2" /><path d="M20 15h2" />
      </svg>
    ),
    title: 'API Development',
    desc: 'RESTful & GraphQL APIs built for scale — robust, documented, and production-ready from day one.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
    ),
    title: 'E-Commerce Solutions',
    desc: 'End-to-end online storefronts with payment gateways, inventory management, and analytics.',
  },
];

export default services;
