/**
 * Single source of truth for every piece of copy on the site.
 * Everything here comes from Prajwal's own résumé data — nothing is inferred.
 */

export const site = {
  name: "Prajwal Chikkur",
  firstName: "Prajwal",
  role: "Software Engineer",
  roleLong: "Software Engineer | Backend Engineer | Generative AI Engineer",
  location: "Bangalore, Karnataka, India",
  hometown: "Gangavathi",
  email: "chikkurprajwal077@gmail.com",
  phone: "+91-7204764005",
  phoneHref: "+917204764005",
  linkedin: {
    label: "linkedin.com/in/prajwal-chikkur",
    url: "https://www.linkedin.com/in/prajwal-chikkur",
  },
  resume: "/Prajwal-Chikkur-Resume.pdf",
  /**
   * No GitHub / other social handles were supplied, so none are rendered.
   * Add a URL here and the icon appears everywhere automatically.
   */
  github: null as string | null,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  tagline:
    "I build the parts you don't see: APIs, queues, pipelines — and the AI that runs on top of them.",
  intro:
    "Software Engineer with 1 year of professional experience building backend systems, Generative AI applications, and automation platforms using Python, FastAPI, PostgreSQL, Redis, Celery, and AWS.",
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

export const marqueeItems = [
  "Python",
  "FastAPI",
  "PostgreSQL",
  "Redis",
  "Celery",
  "AWS",
  "Docker",
  "Terraform",
  "Generative AI",
  "RAG",
  "AWS Bedrock",
  "Playwright",
  "OpenTelemetry",
  "Asynchronous Processing",
] as const;

export const about = {
  heading: "Building systems that actually work.",
  paragraphs: [
    "Software Engineer with 1 year of professional experience building backend systems, AI-powered applications, and automation platforms.",
    "I work primarily with Python, FastAPI, PostgreSQL, Redis, Celery, AWS, and Generative AI technologies. My experience includes designing scalable workflows, asynchronous processing systems, REST APIs, production AI applications, observability systems, and performance optimizations.",
    "I enjoy turning complex requirements into reliable, scalable software.",
  ],
  stats: [
    { value: "1+", label: "Years of professional experience" },
    { value: "15×", label: "Faster automated test creation", context: "vs. manual QA" },
    { value: "80%", label: "Memory consumption reduction", context: "in the Orchard pipeline" },
    { value: "9.07/10", label: "BCA CGPA" },
  ],
} as const;

export const skillGroups = [
  {
    id: "programming",
    title: "Programming",
    items: ["Python", "C++", "C", "Java", "JavaScript", "C#"],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    items: [
      "Python",
      "FastAPI",
      "REST APIs",
      "PostgreSQL",
      "SQLite",
      "Redis",
      "Celery",
      "Asynchronous Processing",
    ],
  },
  {
    id: "infra",
    title: "Systems & Infrastructure",
    items: [
      "Docker",
      "AWS",
      "Terraform",
      "CI/CD",
      "Git",
      "GitHub",
      "Scalable Systems",
      "Concurrent Processing",
      "Distributed Workflows",
    ],
  },
  {
    id: "genai",
    title: "Generative AI",
    items: [
      "Generative AI",
      "LLMs",
      "RAG",
      "AWS Bedrock",
      "Claude",
      "Gemini",
      "OpenAI APIs",
      "Prompt Engineering",
      "Model Routing",
      "LLM Observability",
    ],
  },
  {
    id: "testing",
    title: "Testing & Development",
    items: ["Playwright", "Browser Automation", "API Testing", "Automated Testing"],
  },
  {
    id: "frontend",
    title: "Frontend",
    items: ["React", "Next.js", "React Native"],
  },
] as const;

export const experience = {
  company: "SeedlingLabs",
  role: "Software Engineer I",
  location: "Bangalore, Karnataka",
  duration: "December 2025 – Present",
  projects: [
    {
      index: "01",
      name: "Orchard",
      subtitle: "AI-Powered Testing Automation",
      tags: [
        "Python",
        "PostgreSQL",
        "Playwright",
        "BrowserUse",
        "Celery",
        "Redis",
        "GenAI",
      ],
      description:
        "Re-architected an AI-driven UI and API testing platform using Python, PostgreSQL, browser automation, and asynchronous processing, accelerating automated test creation by 15×.",
      metrics: [
        { value: "15×", label: "Faster test creation" },
        { value: "80%", label: "Lower memory consumption" },
      ],
      contributions: [
        "Developed backend workflows that translate natural-language requirements into executable browser and API testing actions.",
        "Designed scalable execution infrastructure using Redis for session and state management and Celery for asynchronous task processing.",
        "Enabled concurrent execution of long-running testing workloads.",
        "Reduced memory consumption by 80% through tab-level browser reuse and optimized resource management.",
        "Implemented self-healing tests, intelligent assertions, automated reporting, and failure-handling workflows.",
        "Integrated execution tracing and observability using Laminar to monitor production workflows, identify failures, and improve system performance.",
      ],
    },
    {
      index: "02",
      name: "Sprout",
      subtitle: "AI-Powered School Operating Platform",
      tags: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Redis",
        "Celery",
        "AWS Bedrock",
        "Terraform",
        "GenAI",
      ],
      description:
        "Built production backend services for an AI-powered school platform supporting automated generation of lesson plans, worksheets, question papers, and educational content.",
      metrics: [],
      contributions: [
        "Built production backend services using Python and FastAPI.",
        "Designed asynchronous processing pipelines using Celery and Redis for large-scale handwritten answer evaluation.",
        "Engineered a multi-provider model routing layer across AWS Bedrock.",
        "Worked with Claude, Gemini, and Sarvam.",
        "Selected models based on workload requirements.",
        "Tracked token usage, latency, and cost.",
        "Implemented model and workload optimization strategies.",
        "Designed deterministic diagram-generation workflows using RDKit, Graphviz, and CairoSVG.",
        "Implemented AI and application observability using OpenTelemetry, Laminar, and Prometheus/Grafana.",
      ],
    },
  ],
} as const;

/** The "Request → Model Router → … → Observability" card inside Sprout. */
export const aiPipeline = [
  {
    id: "request",
    title: "Request",
    detail: "Lesson plans, worksheets, question papers and answer-sheet evaluation jobs enter through FastAPI.",
  },
  {
    id: "router",
    title: "Model Router",
    detail: "A multi-provider routing layer selects a model per workload, tracking token usage, latency and cost.",
  },
  {
    id: "models",
    title: "Claude / Gemini / Sarvam",
    detail: "Models served across AWS Bedrock, chosen against the requirements of each workload.",
  },
  {
    id: "processing",
    title: "Processing",
    detail: "Celery and Redis pipelines handle large-scale asynchronous generation and evaluation.",
  },
  {
    id: "observability",
    title: "Observability",
    detail: "OpenTelemetry, Laminar and Prometheus/Grafana keep latency, cost and failures visible in production.",
  },
] as const;

export const projects = [
  {
    index: "01",
    name: "ExamGPT",
    subtitle: "RAG-Based AI Exam Assistant",
    tags: ["Python", "FastAPI", "PostgreSQL", "RAG", "Gemini"],
    description:
      "Built a document-based question-answering system that processes uploaded academic PDFs and generates contextual answers using Retrieval-Augmented Generation.",
    features: [
      "PDF document ingestion",
      "Text processing",
      "Semantic retrieval",
      "Contextual prompting",
      "FastAPI backend",
      "PostgreSQL",
    ],
    link: "https://github.com/Prajwal-chikkur07/ExamGPT",
  },
  {
    index: "02",
    name: "Intelligent Voice Assistant",
    subtitle: "Multi-Platform Conversational AI",
    tags: ["Python", "FastAPI", "LLMs", "REST APIs"],
    description:
      "Developed a multi-platform AI assistant with voice interaction, REST API integrations, conversational workflows, and tool-based task execution.",
    features: [
      "Voice interaction",
      "LLM integration",
      "REST API integrations",
      "Conversational workflows",
      "Tool-based task execution",
      "Modular backend architecture",
    ],
    link: "https://github.com/Prajwal-chikkur07/Ai-voice-assistant",
  },
  {
    index: "03",
    name: "RAG & MCP Based Employee Management System",
    subtitle: "Contextual Enterprise Queries",
    tags: ["Python", "RAG", "MCP", "PostgreSQL"],
    description:
      "Developed an employee management application combining relational data with retrieval-augmented AI capabilities for contextual enterprise queries.",
    features: [
      "Relational data management",
      "RAG",
      "MCP",
      "Enterprise document retrieval",
      "Contextual AI responses",
      "Structured data retrieval",
    ],
    link: "https://github.com/Prajwal-chikkur07/Employe_management_system",
  },
  {
    index: "04",
    name: "AI Teacher Assistant",
    subtitle: "RAG-Based Lesson & Worksheet Generator",
    tags: ["Flutter", "FastAPI", "RAG", "ChromaDB", "PostgreSQL"],
    description:
      "Built a production-ready AI teaching assistant with a Flutter frontend and FastAPI backend, generating lesson plans, worksheets, and concept explanations from uploaded course material using retrieval-augmented generation.",
    features: [
      "RAG-based lesson planner",
      "Worksheet generator",
      "Concept simplifier",
      "Engagement suggestions",
      "ChromaDB vector search",
      "Flutter app with Riverpod",
    ],
    link: "https://github.com/Prajwal-chikkur07/ai-schools",
  },
  {
    index: "05",
    name: "Blood Bank & Donor Management System",
    subtitle: "Donor, Inventory & Broadcast Platform",
    tags: ["PHP", "MySQL", "REST APIs"],
    description:
      "Developed a PHP/MySQL web application for managing blood donor records, tracking blood inventory by group, and broadcasting email and SMS/WhatsApp notifications to donors.",
    features: [
      "Donor registration & CRUD",
      "Blood inventory by group",
      "Email broadcasts (PHPMailer + Brevo)",
      "SMS/WhatsApp broadcasts",
      "Admin dashboard",
      "Donor status workflow",
    ],
    link: "https://github.com/Prajwal-chikkur07/blood-bank",
  },
  {
    index: "06",
    name: "AI Result Analyzer",
    subtitle: "PDF-Based Academic Result Analysis Agent",
    tags: ["Python", "FastAPI", "LLMs", "PDF Processing"],
    description:
      "Built an AI agent that extracts data from uploaded academic result and ledger PDFs, stores it in a database, and generates analysis and natural-language answers to questions about the results.",
    features: [
      "PDF data extraction",
      "Automated result analysis",
      "Natural-language querying",
      "FastAPI backend",
      "Persistent result history",
      "Deployed on Railway/Vercel",
    ],
    link: "https://github.com/Prajwal-chikkur07/Result-analyzer",
  },
  {
    index: "07",
    name: "Expense Tracker",
    subtitle: "Full-Stack Personal Finance Tracker",
    tags: ["Python", "FastAPI", "React", "TypeScript"],
    description:
      "Built a full-stack expense tracking application with a FastAPI backend and a React + Vite frontend, supporting filtering, sorting, and category-based spending summaries.",
    features: [
      "Add, filter & sort expenses",
      "Category & date-range filters",
      "Spending summaries & breakdowns",
      "Paginated API responses",
      "Pytest test coverage",
      "FastAPI Swagger docs",
    ],
    link: "https://github.com/Prajwal-chikkur07/Expense-Tracker",
  },
  {
    index: "08",
    name: "Distributed CI/CD Pipeline Orchestrator",
    subtitle: "AI-Powered Pipeline Generation & Execution",
    tags: ["Python", "FastAPI", "LLMs", "Docker", "DAG"],
    description:
      "Built an AI-powered system that analyzes a Git repository, generates CI/CD pipeline specifications as DAGs, and executes them with specialized agents, using an LLM for fallback pipeline generation and intelligent failure recovery.",
    features: [
      "Repo analysis & tech detection",
      "DAG-based pipeline templates",
      "LLM fallback pipeline generation",
      "Concurrent stage execution (NetworkX)",
      "Build/Test/Security/Deploy/Verify agents",
      "AI-driven failure recovery",
    ],
    link: "https://github.com/Prajwal-chikkur07/Distributed-CI-CD-Pipeline-Orchestrator",
  },
] as const;

export const philosophy = [
  {
    index: "01",
    title: "Build for scale",
    body: "Design systems that can handle growing workloads without unnecessary complexity.",
  },
  {
    index: "02",
    title: "Automate the repetitive",
    body: "Use AI, asynchronous processing, and automation to eliminate manual work.",
  },
  {
    index: "03",
    title: "Measure everything",
    body: "Observability, latency, resource usage, and cost should be visible in production.",
  },
  {
    index: "04",
    title: "Reliability first",
    body: "Good software isn't only intelligent. It needs to be predictable, testable, and maintainable.",
  },
] as const;

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  institution: "Sri Vidyaniketan Degree College, Gangavathi",
  duration: "2023 – 2026",
  cgpa: "9.07 / 10",
} as const;

export const certifications = [
  { title: "Generative AI", issuer: "Udemy" },
  { title: "Prompt Engineering", issuer: "Udemy" },
  { title: "Cybersecurity Analyst Job Simulation", issuer: "Forage (TATA)" },
] as const;

export const contact = {
  heading: "Have an interesting problem to solve?",
  body: "Whether it's a backend system, AI-powered application, automation workflow, or something experimental, let's build it.",
} as const;
