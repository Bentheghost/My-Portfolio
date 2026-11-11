// Portfolio data source — synced with production CV
export const portfolioData = {
  meta: {
    title: "Chukwuebuka Benjamin Ugwu — Full-Stack & Applied AI Engineer | LLM Evaluation & RLHF Specialist",
    description: "Portfolio of Chukwuebuka Benjamin Ugwu. Full-Stack & Applied AI Engineer and LLM Evaluation Specialist with expertise in FastAPI, React, Next.js, RLHF, DPO, CoT verification, BKT, and low-latency architectures.",
    url: "https://benjamindev-uc.vercel.app",
    ogImage: "profile.jpg",
    twitterHandle: "@Topboy_benji",
    themeColor: "#090a0c"
  },

  personal: {
    name: "benjamin",
    fullName: "Chukwuebuka Benjamin Ugwu",
    handle: "@Bentheghost",
    roleTitle: "full-stack & applied ai // rlhf specialist",
    avatar: "profile.jpg",
    avatarAlt: "Portrait of Chukwuebuka Benjamin Ugwu, Full-Stack & Applied AI Engineer",
    statusText: "online",
    statusTooltip: "ready for global contractor / deel / eor onboarding (utc+1 / emea overlap)",
    uptimeBadge: "99.98% uptime...",
    bootTimestamp: "2026-10-05T11:14:27+01:00",
    timeZone: "Africa/Lagos",
    location: "kaduna, nigeria (utc+1 / emea overlap)"
  },

  about: {
    heading: "about",
    subheading: "full-stack systems, applied ai & structured evaluation",
    paragraphs: [
      "I am a <strong class=\"text-zinc-900 dark:text-white font-medium\">Full-Stack & Applied AI Engineer</strong> and <strong class=\"text-zinc-900 dark:text-white font-medium\">LLM Evaluation Specialist</strong> with a B.Tech in Computer Science and hands-on production experience architecting low-latency web applications, adaptive machine learning engines, and structured AI evaluation pipelines.",
      "My work bridges high-reliability web engineering with applied intelligence: shipping end-to-end applications using <strong class=\"text-emerald-600 dark:text-emerald-300 font-normal\">Python (FastAPI, Flask)</strong>, <strong class=\"text-emerald-600 dark:text-emerald-300 font-normal\">JavaScript/TypeScript (React, Next.js, Node.js)</strong>, <strong class=\"text-emerald-600 dark:text-emerald-300 font-normal\">PostgreSQL</strong>, and <strong class=\"text-emerald-600 dark:text-emerald-300 font-normal\">Redis</strong>, while leading evaluation workflows across <strong class=\"text-zinc-900 dark:text-white font-medium\">Reinforcement Learning from Human Feedback (RLHF)</strong>, <strong class=\"text-zinc-900 dark:text-white font-medium\">Direct Preference Optimization (DPO)</strong>, <strong class=\"text-zinc-900 dark:text-white font-medium\">Chain-of-Thought (CoT) reasoning verification</strong>, and <strong class=\"text-zinc-900 dark:text-white font-medium\">Bayesian Knowledge Tracing (BKT)</strong>."
    ],
    impactHighlights: [
      {
        title: "AI Adaptive Learning & Multilingual Platform",
        description: "Architected end-to-end BKT + RL learning backend in Python (FastAPI/Flask) across 4 languages (English, Hausa, Igbo, Yoruba) with Redis caching maintaining p95 latency under 120ms and boosting completions by 35%."
      },
      {
        title: "Technical LLM Evaluation & RLHF Pipelines",
        description: "Evaluated multi-turn coding agent trajectories, LLM outputs, and system design reasoning across Python, JS, and SQL using Cohen's Kappa calibration, side-by-side RLHF/DPO preference ranking, and deterministic test harnesses."
      },
      {
        title: "Commercial Agro-Supply Production Platform",
        description: "Shipped React.js/Next.js commercial platform for Bfarmcon with automated Web3Forms & WhatsApp routing, idempotency guards, and debouncing that eliminated mobile failure on 3G networks (0% duplicates/drops)."
      },
      {
        title: "Systems Throughput & Latency Benchmarking",
        description: "Built automated benchmarking suite in Python with iPerf3 and sockets across Windows 11 and WSL2, automating multi-run stress testing, packet-loss detection, and statistical anomaly reporting."
      }
    ],
    closingBio: "Outside of writing code and evaluating models, I produce and script technology documentaries on YouTube (<a href=\"https://www.youtube.com/@TechUntold-btg\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-emerald-600 dark:text-emerald-400 hover:underline font-medium\">@TechUntold-btg</a>) exploring the architecture, market dominance, and strategic collapse of computing giants like WinRAR, Skype, and Nokia. When I'm away from the terminal, I analyze European football tactics and player metrics, or unwind to Afrobeats and UK drill on Spotify."
  },

  cta: {
    statusBadge: "ready for global contractor / deel / eor onboarding",
    primaryButton: {
      label: "see my work / featured projects",
      href: "#projects"
    },
    resumeButton: {
      label: "download cv / resume (pdf)",
      href: "resume.pdf",
      downloadName: "Chukwuebuka_Benjamin_Ugwu_CV.pdf"
    }
  },

  experiences: [
    {
      company: "Independent Contract / Remote Evaluation Pipelines",
      period: "aug 2026 – present",
      role: "ai quality assurance & technical evaluation specialist",
      description: "Evaluated multi-turn AI coding agent trajectories, LLM outputs, and complex system design reasoning across Python, JavaScript, and SQL benchmarks using strict rubric scoring and Cohen's Kappa calibration standards. Conducted side-by-side RLHF/DPO preference ranking (identifying subtle logic bugs, edge-case regressions, security vulnerabilities, and instruction-following failures), and designed deterministic evaluation harnesses and end-to-end functional/negative QA test suites (verifying concurrency locks, prescription-only validation gates, and boundary conditions) across web and e-pharmacy workflows.",
      isCurrent: true
    },
    {
      company: "Bfarmcon (Commercial Agro-Supply Web Platform)",
      url: "https://github.com/Bentheghost/BFARMCON-landing-page",
      period: "aug 2026 – present",
      role: "forward-deployed full-stack developer",
      description: "Designed, built, and shipped a production commercial web platform using React.js, Next.js, and JavaScript for an agricultural commodity enterprise. Engineered automated lead-capture and order-routing pipelines integrating Web3Forms API and WhatsApp Business routing with idempotency guards and UI debouncing, reducing failed or duplicate mobile submissions on 3G networks to 0%. Configured automated CI/CD deployment pipelines on Vercel, custom domain DNS routing, XML sitemaps, and Google Search Console indexing.",
      isCurrent: true
    },
    {
      company: "AI Adaptive Learning & Multilingual Evaluation Platform",
      url: "https://github.com/Bentheghost/Adaptive-Learning-System",
      period: "dec 2025 – oct 2026",
      role: "lead full-stack & applied ai engineer",
      description: "Architected and deployed an end-to-end multilingual AI adaptive learning system (supporting English, Hausa, Igbo, and Yoruba) covering 100-level introductory Python programming, STEM, History, and Literature. Engineered the core inference backend in Python (FastAPI/Flask) combining Bayesian Knowledge Tracing (BKT) for real-time mastery probability estimation with a Reinforcement Learning (RL) policy engine to sequence optimal learning trajectories. Authored, calibrated, and audited 500+ structured domain rubrics, golden reference solutions, and step-by-step Chain-of-Thought (CoT) explanations across programming and humanities modules to eliminate content hallucinations. Designed a normalized PostgreSQL relational schema for longitudinal learner telemetry and integrated Redis for low-latency session caching, maintaining p95 API latency under 120ms and improving student completion rates by 35%.",
      isCurrent: false
    },
    {
      company: "Network Throughput & Latency Benchmarking Suite",
      period: "jul 2026 – sep 2026",
      role: "systems performance & benchmarking engineer",
      description: "Built an automated network throughput, memory, and latency benchmarking suite in Python leveraging iPerf3 and socket protocols across Windows 11 and WSL2 client-server environments. Automated multi-run stress testing, packet-loss detection, and statistical anomaly reporting, reconciling performance drift across constrained hardware profiles.",
      isCurrent: false
    },
    {
      company: "IRL IT Solutions",
      period: "2022 – 2023",
      role: "frontend web developer",
      description: "Engineered responsive web interfaces and modular UI components with modern JavaScript, HTML5, and CSS3, certified as Frontend Web Developer by IRL IT Solutions (Nov 2022).",
      isCurrent: false
    }
  ],

  projects: [
    {
      id: "01",
      badge: "Applied AI & EdTech",
      title: "Adaptive-Learning-System",
      description: "End-to-end multilingual AI adaptive learning system (supporting English, Hausa, Igbo, and Yoruba) combining Bayesian Knowledge Tracing (BKT) for real-time mastery probability estimation and Reinforcement Learning (RL) policy sequencing with 500+ CoT rubrics. Built with Python (FastAPI/Flask), React.js, normalized PostgreSQL, and Redis caching maintaining p95 latency under 120ms.",
      tags: ["Python (FastAPI/Flask)", "React.js", "PostgreSQL", "Redis", "BKT & RL", "CoT Rubrics"],
      repoUrl: "https://github.com/Bentheghost/Adaptive-Learning-System",
      ctaLabel: "inspect repo",
      isLiveRepo: true
    },
    {
      id: "02",
      badge: "Production Commercial",
      title: "Commercial Agro-Supply Web Platform (Bfarmcon)",
      description: "Production commercial web platform shipped for an agricultural commodity enterprise using React.js and Next.js. Engineered automated lead-capture via Web3Forms API and WhatsApp Business with idempotency guards and debouncing (0% mobile failure on 3G), hosted on Vercel with custom DNS and Google Search Console indexing.",
      tags: ["React.js", "Next.js", "JavaScript", "Web3Forms API", "Vercel", "Custom DNS"],
      repoUrl: "https://github.com/Bentheghost/BFARMCON-landing-page",
      ctaLabel: "inspect repo",
      isLiveRepo: true
    },
    {
      id: "03",
      badge: "AI QA & Evaluation",
      badgeRight: "Evaluation Harness",
      title: "Technical LLM Evaluation & RLHF Harness",
      description: "Deterministic evaluation harnesses and test suites for multi-turn AI coding agents, LLM outputs, and complex system design reasoning across Python, JS, and SQL benchmarks. Utilizes Cohen's Kappa calibration, side-by-side RLHF/DPO preference ranking, and boundary condition auditing.",
      tags: ["RLHF / DPO", "CoT Verification", "Pytest", "Evaluation Harnesses", "Cohen's Kappa"],
      ctaLabel: "eval framework",
      isLiveRepo: false
    },
    {
      id: "04",
      badge: "Systems Benchmarking",
      badgeRight: "CLI Suite",
      title: "Network Throughput & Latency Benchmarking Suite",
      description: "Automated network throughput, memory, and latency benchmarking suite in Python leveraging iPerf3 and socket protocols across Windows 11 and WSL2 client-server environments with multi-run stress testing, packet-loss detection, and statistical anomaly reporting.",
      tags: ["Python", "iPerf3", "Sockets", "Windows 11 / WSL2", "Stress Testing"],
      ctaLabel: "research & test tooling",
      isLiveRepo: false
    },
    {
      id: "05",
      badge: "Assessment Engine",
      title: "Quiz-Master",
      description: "Lightweight interactive quiz application featuring dynamic scoring algorithms, topic taxonomy, and real-time client state management.",
      tags: ["JavaScript", "React", "Node.js", "CSS3", "State Management"],
      repoUrl: "https://github.com/Bentheghost/Quiz-Master",
      ctaLabel: "inspect repo",
      isLiveRepo: true
    }
  ],

  roles: [
    {
      title: "full-stack & distributed systems",
      stack: "FastAPI, Flask, Node.js, React.js, Next.js, PostgreSQL, Redis, RESTful API Architecture, Pydantic, Microservices"
    },
    {
      title: "ai training, rlhf & llm evaluation",
      stack: "RLHF, Direct Preference Optimization (DPO), SFT Golden Responses, Rubric Calibration (Cohen's Kappa), CoT Verification, Factuality Auditing, Multi-Turn Agent Trajectory Grading"
    },
    {
      title: "adaptive ml & intelligent systems",
      stack: "Bayesian Knowledge Tracing (BKT), Reinforcement Learning (RL) Policy Sequencing, TensorFlow, Latency-Optimized Telemetry"
    },
    {
      title: "testing, qa & devops infrastructure",
      stack: "Pytest, Postman (Contract Testing), E2E & Negative Testing, Docker, WSL2, GitHub Actions (CI/CD), Vercel, iPerf3 Benchmarking"
    }
  ],

  techStack: [
    {
      category: "AI Training, RLHF & LLM Evaluation",
      items: [
        { name: "RLHF", highlight: true },
        { name: "Direct Preference Optimization (DPO)", highlight: true },
        { name: "SFT Golden Response Authoring", highlight: true },
        { name: "Chain-of-Thought (CoT) Verification", highlight: true },
        { name: "Rubric Calibration & Cohen's Kappa" },
        { name: "Hallucination & Factuality Auditing" },
        { name: "Multi-Turn Agent Trajectory Grading" },
        { name: "Red-Teaming" }
      ]
    },
    {
      category: "Core Languages",
      items: ["Python", "JavaScript (ES6+)", "TypeScript", "SQL", "HTML5", "CSS3", "Bash"]
    },
    {
      category: "Backend & Distributed Systems",
      items: [
        { name: "FastAPI", highlight: true },
        { name: "Flask" },
        { name: "Node.js" },
        { name: "RESTful API Architecture" },
        { name: "Pydantic Schema Validation" },
        { name: "Webhooks" },
        { name: "Microservices" },
        { name: "Stream Deduplication" }
      ]
    },
    {
      category: "Frontend & Full-Stack Web",
      items: [
        { name: "React.js", highlight: true },
        { name: "Next.js", highlight: true },
        { name: "Tailwind CSS" },
        { name: "State Management" },
        { name: "Responsive & Offline-First UI Design" },
        { name: "Web3Forms API" }
      ]
    },
    {
      category: "Databases, Caching & ML Engines",
      items: [
        { name: "PostgreSQL (Schema Design & Query Optimization)", highlight: true },
        { name: "Redis (Low-Latency Session Caching)", highlight: true },
        { name: "Bayesian Knowledge Tracing (BKT)", highlight: true },
        { name: "Reinforcement Learning (RL)", highlight: true },
        { name: "TensorFlow" }
      ]
    },
    {
      category: "Testing, QA & DevOps Infrastructure",
      items: [
        { name: "Pytest" },
        { name: "Postman (API Contract Testing)" },
        { name: "End-to-End Functional & Negative Testing" },
        { name: "Docker" },
        { name: "WSL2" },
        { name: "Git & GitHub Actions (CI/CD)" },
        { name: "Vercel & Custom DNS" },
        { name: "iPerf3 Network Benchmarking" }
      ]
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
      institution: "Federal University of Technology, Minna (FUTMinna), Nigeria",
      period: "sep 2021 – aug 2026",
      degree: "bachelor of technology (b.tech) in computer science",
      coursework: "Artificial Intelligence, Machine Learning, Data Structures & Algorithms, Database Management Systems, Computer System Performance & Benchmarking, Software Engineering.",
      thesis: "Development of an AI-Powered Adaptive Learning System for Personalized Education using Bayesian Knowledge Tracing and Reinforcement Learning."
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
      handle: "Chukwuebuka Benjamin Ugwu — Full-Stack & Applied AI",
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
    subtitle: "kaduna, nigeria (utc+1 / emea overlap) • ready for global contractor / deel / eor onboarding",
    tagline: "crafted with zero bloat • html5 + tailwind css"
  }
};
