// Portfolio data source
export const portfolioData = {
  meta: {
    title: "Chukwuebuka Benjamin Ugwu — Full-Stack Engineer & AI Systems Builder",
    description: "Portfolio of Chukwuebuka Benjamin Ugwu. Full-Stack Engineer and AI Systems Builder specializing in low-bandwidth optimization, offline-first architectures, BKT, and Reinforcement Learning.",
    url: "https://benjamindev-uc.vercel.app",
    ogImage: "profile.jpg",
    twitterHandle: "@Topboy_benji",
    themeColor: "#090a0c"
  },

  personal: {
    name: "benjamin",
    fullName: "Chukwuebuka Benjamin Ugwu",
    handle: "@Bentheghost",
    avatar: "profile.jpg",
    avatarAlt: "Portrait of Chukwuebuka Benjamin Ugwu, Full-Stack Engineer and AI Systems Builder",
    statusText: "online",
    statusTooltip: "available for remote work",
    uptimeBadge: "99.98% uptime...",
    bootTimestamp: "2026-10-05T11:14:27+01:00",
    timeZone: "Africa/Lagos",
    location: "remote & hybrid // wat"
  },

  about: {
    heading: "about",
    subheading: "systems, intelligence & real-world constraints",
    paragraphs: [
      "I specialize in building production-ready full-stack web applications and AI-powered systems engineered for real-world constraints—specifically <strong class=\"text-zinc-900 dark:text-white font-medium\">low-bandwidth optimization</strong>, <strong class=\"text-zinc-900 dark:text-white font-medium\">offline-first architectures</strong>, and <strong class=\"text-zinc-900 dark:text-white font-medium\">localized multilingual scaffolding</strong>.",
      "Working primarily with <strong class=\"text-emerald-600 dark:text-emerald-300 font-normal\">Python</strong>, <strong class=\"text-emerald-600 dark:text-emerald-300 font-normal\">React</strong>, <strong class=\"text-emerald-600 dark:text-emerald-300 font-normal\">PostgreSQL</strong>, and <strong class=\"text-emerald-600 dark:text-emerald-300 font-normal\">Redis</strong>, I bridge the gap between responsive frontend interfaces and intelligent backend pipelines—integrating machine learning models like <strong class=\"text-zinc-900 dark:text-white font-medium\">Bayesian Knowledge Tracing (BKT)</strong> and <strong class=\"text-zinc-900 dark:text-white font-medium\">Reinforcement Learning (RL)</strong> to deliver personalized, adaptive user experiences."
    ],
    impactHighlights: [
      {
        title: "Multilingual Adaptive Pipeline",
        description: "Architected dual-engine BKT + RL learning pipeline supporting 4 languages (English, Yoruba, Igbo, and Hausa) across multiple curricula."
      },
      {
        title: "Low-Bandwidth Production Launches",
        description: "Deployed commercial web apps on Vercel with automated inquiry/order routing achieving sub-second load times under weak connectivity."
      },
      {
        title: "Systems & Throughput Benchmarking",
        description: "Automated network throughput stress-testing across Windows client-server environments with iPerf3 and Python scripts to eliminate bottlenecks."
      }
    ],
    closingBio: "Outside of writing code, I produce and script technology documentaries on YouTube (<a href=\"https://www.youtube.com/@TechUntold-btg\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-emerald-600 dark:text-emerald-400 hover:underline font-medium\">@TechUntold-btg</a>) exploring the rise and fall of iconic hardware and software giants like WinRAR, Skype, and Nokia. When I'm not digging through tech history, I'm an avid European football analyst—tracking player metrics and match trends—or unwinding to Afrobeats and UK drill with Burna Boy and Dave on Spotify."
  },

  cta: {
    statusBadge: "explore verified proof of work",
    primaryButton: {
      label: "see my work / featured projects",
      href: "#projects"
    },
    resumeButton: {
      label: "download resume (pdf)",
      href: "resume.pdf",
      downloadName: "Chukwuebuka_Benjamin_Ugwu_Resume.pdf"
    }
  },

  experiences: [
    {
      company: "BFARMCON Limited",
      url: "https://github.com/Bentheghost/BFARMCON-landing-page",
      period: "aug 2026 – present",
      role: "forward deployed full-stack developer",
      description: "Designed, built, and deployed a responsive commercial web platform on Vercel with automated inquiry dispatch, custom domain DNS routing, XML sitemaps, and Google Search Console indexing.",
      isCurrent: true
    },
    {
      company: "Adaptive Learning Thesis / FUTMINNA",
      url: "https://github.com/Bentheghost/Adaptive-Learning-System",
      period: "2025 – 2026",
      role: "lead ai & software researcher",
      description: "Researched and engineered an adaptive learning pipeline combining Bayesian Knowledge Tracing (BKT) and Reinforcement Learning. Developed personalized mastery tracking that dynamically adjusts question difficulty across 4 languages (English, Yoruba, Igbo, Hausa) for STEM & humanities students.",
      isCurrent: true
    },
    {
      company: "Commercial Client Web Deployments",
      period: "2023 – present",
      role: "freelance full-stack developer",
      description: "Delivered custom full-stack solutions using React, Node.js, and Python. Modeled robust relational database schemas in PostgreSQL, implemented low-latency caching with Redis, and configured automated CI/CD deployment pipelines on Vercel.",
      isCurrent: false
    },
    {
      company: "Systems & Network Benchmarking",
      period: "2023 – 2024",
      role: "network & qa benchmarking specialist",
      description: "Automated comprehensive network stress-testing across Windows client-server environments using iPerf3 and Python data scripts to pinpoint packet drops, latency bottlenecks, and bandwidth throughput ceilings.",
      isCurrent: false
    },
    {
      company: "IRL IT Solutions",
      period: "2022 – 2023",
      role: "frontend web developer",
      description: "Developed responsive web interfaces, engineered reusable UI component libraries with modern JavaScript and CSS, and collaborated on cross-functional client deliverables.",
      isCurrent: false
    }
  ],

  projects: [
    {
      id: "01",
      badge: "AI & EdTech",
      title: "Adaptive-Learning-System",
      description: "Dual-engine personalized education platform utilizing Bayesian Knowledge Tracing (BKT) and Reinforcement Learning (RL) to dynamically calibrate question difficulty and track concept mastery across 4 local languages.",
      tags: ["Python", "React.js", "PostgreSQL", "Redis", "BKT & RL"],
      repoUrl: "https://github.com/Bentheghost/Adaptive-Learning-System",
      ctaLabel: "inspect repo",
      isLiveRepo: true
    },
    {
      id: "02",
      badge: "Production Commercial",
      title: "Commercial Agro-Supply Web Platform",
      description: "Designed, built, and deployed a responsive, production-ready commercial web platform on Vercel, configuring custom domain DNS routing, XML sitemaps, and Google Search Console indexing.",
      tags: ["React.js", "Next.js", "JavaScript", "Web3Forms API", "Vercel", "Custom DNS"],
      repoUrl: "https://github.com/Bentheghost/BFARMCON-landing-page",
      ctaLabel: "inspect repo",
      isLiveRepo: true
    },
    {
      id: "03",
      badge: "Assessment Engine",
      title: "Quiz-Master",
      description: "Lightweight interactive quiz application featuring dynamic scoring algorithms, topic taxonomy, and real-time client state management.",
      tags: ["JavaScript", "React", "Node.js", "CSS3"],
      repoUrl: "https://github.com/Bentheghost/Quiz-Master",
      ctaLabel: "inspect repo",
      isLiveRepo: true
    },
    {
      id: "04",
      badge: "Systems Benchmarking",
      badgeRight: "CLI Suite",
      title: "Network Throughput & Latency Suite",
      description: "Automated client-server network stress-testing suite in Python and iPerf3 executing bandwidth saturation tests and packet-loss diagnostic logging.",
      tags: ["Python", "iPerf3", "Sockets", "Windows Server"],
      ctaLabel: "research / test tooling",
      isLiveRepo: false
    }
  ],

  roles: [
    {
      title: "full-stack engineering",
      stack: "React / Next.js, Node.js, Python, PostgreSQL, Redis, RESTful & GraphQL APIs"
    },
    {
      title: "ai / ml & agent engineering",
      stack: "LLM integrations, RAG pipelines, fine-tuning, agentic workflows, BKT & RL"
    },
    {
      title: "backend & cloud systems",
      stack: "Microservices, database architecture, low-latency caching, Docker, cloud deployment"
    },
    {
      title: "forward deployed / solutions",
      stack: "Technical integrations, client-facing engineering, developer advocacy & tooling"
    }
  ],

  techStack: [
    {
      category: "Core Languages",
      items: ["Python", "JavaScript (ES6+)", "SQL", "HTML5", "CSS3"]
    },
    {
      category: "AI, Machine Learning & Agent Stack",
      items: [
        { name: "Bayesian Knowledge Tracing (BKT)", highlight: true },
        { name: "Reinforcement Learning (RL)", highlight: true },
        { name: "OpenAI API" },
        { name: "Hugging Face" },
        { name: "LangChain" },
        { name: "Ollama" },
        { name: "ChromaDB" },
        { name: "TensorFlow" }
      ]
    },
    {
      category: "Web & Application Frameworks",
      items: ["React.js", "Next.js", "FastAPI", "Node.js", "Tailwind CSS"]
    },
    {
      category: "Databases, Cloud & DevOps",
      items: ["PostgreSQL", "Redis", "Supabase", "Vercel", "Docker", "Git & GitHub", "iPerf3"]
    }
  ],

  media: {
    channelName: "TechUntold",
    handle: "@TechUntold-btg",
    url: "https://www.youtube.com/@TechUntold-btg",
    description: "I script and produce deep-dive video documentaries on YouTube analyzing the architecture, market dominance, and strategic downfall of iconic computing and software giants including <span class=\"text-emerald-600 dark:text-emerald-400 font-semibold\">WinRAR</span>, <span class=\"text-emerald-600 dark:text-emerald-400 font-semibold\">Skype</span>, and <span class=\"text-emerald-600 dark:text-emerald-400 font-semibold\">Nokia</span>."
  },

  education: {
    university: {
      institution: "Federal University of Technology, Minna (FUTMINNA)",
      period: "sep 2021 – aug 2026",
      degree: "bachelor of technology (b.tech) in computer science",
      coursework: "Data Structures & Algorithms, Artificial Intelligence, Machine Learning, Database Management Systems, Computer System Performance & Benchmarking, Software Engineering.",
      thesis: "Development of an Adaptive Learning System for Personalized Education using Bayesian Knowledge Tracing."
    },
    certifications: [
      {
        date: "Nov 2022",
        title: "Certified Frontend Web Developer",
        issuer: "IRL IT Solutions, Kaduna"
      },
      {
        date: "Aug 2017",
        title: "Computer Program (Distinction)",
        issuer: "Deklag, Kaduna"
      },
      {
        date: "Aug 2023",
        title: "Financial Literacy & Loans",
        issuer: "GIZ & Central Bank of Nigeria"
      }
    ]
  },

  socials: [
    {
      type: "linkedin",
      name: "LinkedIn",
      handle: "Chukwuebuka Ugwu",
      url: "https://www.linkedin.com/in/chukwuebuka-ugwu-6285a9448",
      action: "connect →"
    },
    {
      type: "github",
      name: "GitHub",
      handle: "@Bentheghost",
      url: "https://github.com/Bentheghost",
      action: "→"
    },
    {
      type: "youtube",
      name: "YouTube",
      handle: "@TechUntold-btg",
      url: "https://www.youtube.com/@TechUntold-btg",
      action: "→"
    },
    {
      type: "twitter",
      name: "X (Twitter)",
      handle: "@Topboy_benji",
      url: "https://x.com/Topboy_benji",
      action: "→"
    },
    {
      type: "whatsapp",
      name: "WhatsApp",
      handle: "+234 817 126 3915",
      url: "https://wa.me/2348171263915",
      action: "chat →"
    },
    {
      type: "phone",
      name: "Direct Call",
      handle: "+234 817 126 3915",
      url: "tel:+2348171263915",
      action: "call →"
    },
    {
      type: "resume",
      name: "Curriculum Vitae / Resume",
      handle: "Chukwuebuka Benjamin Ugwu — Full-Stack & AI Systems",
      pdfUrl: "resume.pdf",
      driveUrl: "https://drive.google.com/file/d/19mJYNuwIb_NIzmPozoH6OJe08TJ_tout/view?usp=drive_link"
    },
    {
      type: "email",
      name: "Direct Email",
      handle: "ebukaugwu41@gmail.com",
      url: "mailto:ebukaugwu41@gmail.com",
      action: "send message →"
    }
  ],

  footer: {
    signature: "chukwuebuka benjamin ugwu",
    subtitle: "remote & hybrid // wat",
    tagline: "crafted with zero bloat • html5 + tailwind css"
  }
};
