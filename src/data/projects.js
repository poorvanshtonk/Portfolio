export const projectCategories = [
  {
    key: 'security',
    title: 'Security Engineering',
    badge: 'SECURITY',
    description: 'Explore vulnerability analysis, tools, and systems.',
  },
  {
    key: 'startup',
    title: 'Startups',
    badge: 'STARTUP',
    description: 'Real-world product building.',
  },
  {
    key: 'ai',
    title: 'AI / ML',
    badge: 'AI',
    description: 'Machine learning systems.',
  },
  {
    key: 'oss',
    title: 'Open Source',
    badge: 'OSS',
    description: 'Community-driven contributions.',
  },
];

export const projectData = {
  security: [
    {
      id: 'phishing-url-detector',
      name: 'Phishing URL Detector',
      desc: 'Detect suspicious URLs with a focused phishing-risk workflow.',
      problem: 'Users and teams need a quick way to flag suspicious URLs before they become phishing incidents.',
      solution: 'A security-focused workflow that evaluates URL patterns and highlights phishing indicators with explainable checks.',
      stage: 'MVP in Progress',
      tech: ['Python', 'Machine Learning', 'OWASP'],
      github: 'https://github.com/poorvanshtonk/Phishing-URL-Detector',
      live: '#',
    },
    {
      id: 'agentic-ai-ratings',
      name: 'Agentic AI Ratings',
      desc: 'A trust and risk evaluation framework for agentic AI systems.',
      problem: 'Teams need a clearer way to compare agentic AI systems on trust, safety, and reliability.',
      solution: 'A structured rating framework that evaluates agent behavior, transparency, and operational safeguards.',
      stage: 'Ideation',
      tech: ['AI Safety', 'Evaluation Design', 'Trust Frameworks'],
      github: 'https://github.com/poorvanshtonk/Agentic-AI-Ratings',
      live: '#',
    },
  ],
  startup: [
    {
      id: 'collaborative-execution-platform',
      name: 'Collaborative Execution Platform',
      desc: 'A platform to connect builders, mentors, and startup execution.',
      problem: 'Strong ideas often stall because founders struggle to form teams and access execution support early.',
      solution: 'A unified execution platform that helps founders find collaborators, structure work, and connect with mentors or investors.',
      stage: 'MVP in Progress',
      tech: ['Product Strategy', 'React', 'Community Systems'],
      github: 'https://github.com/poorvanshtonk/Collabrio-',
      live: '#',
    },
  ],
  ai: [
    {
      id: 'llm-chatbot',
      name: 'LLM Chatbot',
      desc: 'A local AI assistant with a lightweight chat interface.',
      problem: 'Developers want personal AI assistance without recurring API costs or heavy cloud dependency.',
      solution: 'A local chatbot experience backed by an on-device or self-hosted LLM pipeline and a simple frontend.',
      stage: 'MVP in Progress',
      tech: ['React', 'Flask', 'Ollama'],
      github: 'https://github.com/poorvanshtonk/AI-Chatbot',
      live: '#',
    },
  ],
  oss: [
    {
      id: 'portfolio-template',
      name: 'Portfolio Template',
      desc: 'A reusable portfolio starter for developers and builders.',
      problem: 'Many personal sites take too long to build from scratch for each new portfolio.',
      solution: 'A reusable portfolio template with a clean layout, project sections, and customizable content blocks.',
      stage: 'Active',
      tech: ['React', 'Vite', 'CSS'],
      github: 'https://github.com/poorvanshtonk',
      live: '#',
    },
    {
      id: 'open-source',
      name: 'Open Source Contribution',
      desc: 'Public fixes, experiments, and feature work across community projects.',
      problem: 'Open source work is often fragmented and hard to present as a coherent body of contribution.',
      solution: 'A curated contribution profile that highlights meaningful fixes, improvements, and collaborative work.',
      stage: 'Ongoing',
      tech: ['Git', 'GitHub', 'JavaScript'],
      github: 'https://github.com/poorvanshtonk',
      live: '#',
    },
  ],
};

export const projectIndex = Object.values(projectData).flat().reduce((acc, project) => {
  acc[project.id] = project;
  return acc;
}, {});
