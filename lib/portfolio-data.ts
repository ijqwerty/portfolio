export const profile = {
  name: "Issaih Jeremiah Mendiola",
  nickname: "IJ",
  title: "Software Developer",
  location: "Surigao City",
  email: "issaih.mendiola@gmail.com",
  summary:
    "Software Developer with experience in frontend, backend, and e-commerce systems. Skilled in Next.js, React.js, Tailwind CSS, and Python (Django REST Framework), with hands-on experience in API integration, testing, and deployment support. Strong collaborator with a focus on responsive design, system stability, and continuous improvement.",
  /** Concise landing copy adapted from resume.md for the Hero Section */
  heroIntro:
    "I build responsive interfaces and reliable APIs across frontend, backend, and e-commerce systems — with a focus on stability, collaboration, and continuous improvement.",
  /** Public path for the existing resume in public/resume */
  resumeHref: "/resume/Mendiola, Issaih Jeremiah - CV.pdf",
}

export type StackTech = {
  name: string
  label: string
  /** simple-icons export key, or null for a non-brand fallback icon */
  icon: string | null
}

/** Key technologies shown around the hero avatar — subset from resume.md */
export const heroTechs: StackTech[] = [
  { name: "HTML", label: "HTML", icon: "siHtml5" },
  { name: "CSS", label: "CSS", icon: "siCss" },
  { name: "JavaScript", label: "JavaScript", icon: "siJavascript" },
  { name: "React", label: "React", icon: "siReact" },
  { name: "PostgreSQL", label: "PostgreSQL", icon: "siPostgresql" },
]

/** Technologies from resume.md — arranged into a tapered grid for Stack Mastery */
export const stackRows: StackTech[][] = [
  [
    { name: "HTML", label: "HTML", icon: "siHtml5" },
    { name: "CSS", label: "CSS", icon: "siCss" },
    { name: "JavaScript", label: "JavaScript", icon: "siJavascript" },
    { name: "TypeScript", label: "TypeScript", icon: "siTypescript" },
    { name: "Next.js", label: "Next.js", icon: "siNextdotjs" },
    { name: "React", label: "React", icon: "siReact" },
  ],
  [
    { name: "Tailwind CSS", label: "Tailwind", icon: "siTailwindcss" },
    { name: "Node.js", label: "Node.js", icon: "siNodedotjs" },
    { name: "Python", label: "Python", icon: "siPython" },
    { name: "Django REST Framework", label: "Django REST", icon: "siDjango" },
    { name: "Restful API", label: "REST API", icon: null },
  ],
  [
    { name: "PostgreSQL", label: "PostgreSQL", icon: "siPostgresql" },
    { name: "GraphQL", label: "GraphQL", icon: "siGraphql" },
    { name: "Supabase", label: "Supabase", icon: "siSupabase" },
    { name: "Shopify", label: "Shopify", icon: "siShopify" },
  ],
  [
    { name: "Appwrite", label: "Appwrite", icon: "siAppwrite" },
    { name: "Sanity", label: "Sanity", icon: "siSanity" },
    { name: "Github", label: "GitHub", icon: "siGithub" },
  ],
]

export const skills = stackRows.flat().map((tech) => tech.name)

export type Experience = {
  role: string
  company: string
  /** Employment classification when stated in resume.md */
  employmentType?: string
  period: string
  description: string
}

/** Professional experience from resume.md — most recent first */
export const experience: Experience[] = [
  {
    role: "Software Developer",
    company: "City Government of Surigao",
    period: "March 2024 - Present",
    description:
      "Perform frontend development and system maintenance with Next.js, React.js, and Tailwind CSS, building reusable responsive interfaces and collaborating with UI/UX. Develop and maintain RESTful APIs with Python (Django REST Framework) and JWT authentication, analyze APIs and database schemas for correct integration, and support branch management, deployments, testing, and code reviews across Development, Staging, and Production.",
  },
  {
    role: "Shopify Developer",
    company: "Madvert Media",
    period: "April 2023 - Feb 2024",
    description:
      "Conducted product research and edited product photos for e-commerce listings, designed landing pages aligned with featured products, and leveraged AI-assisted workflows to craft product descriptions, reviews, and FAQs.",
  },
  {
    role: "Clerical Aide",
    company: "Caraga Regional Hospital",
    period: "Jan 2023 - April 2023",
    description:
      "Encoded and released patient results accurately and on schedule, assisted with reception duties including inquiries, appointments, and clerical tasks, and maintained confidentiality and accuracy standards for patient information.",
  },
  {
    role: "Shopify Developer",
    company: "Luxury Crate LLC",
    period: "April 2021 - November 2021",
    description:
      "Developed and maintained a user-friendly Shopify store, optimized store performance and functionality, and designed landing pages based on the products listed.",
  },
  {
    role: "Shopify Developer",
    company: "SwipeUp LLC",
    period: "October 2020 - April 2021",
    description:
      "Created landing pages using Shopify Page Builder, designed product-appropriate landing pages, and built split-test pages for different pricing.",
  },
]

export type Project = {
  name: string
  tagline: string
  stack: string[]
  problem: string
  solution: string
  features: string[]
  link: string
  github: string
  /** Public path to the featured screenshot under /public/projects */
  image: string
}

export const projects: Project[] = [
  {
    name: "YC Directory",
    tagline: "Founder-focused pitch platform",
    stack: ["Next.js", "Sanity", "NextAuth", "Typescript"],
    problem:
      "Early-stage founders lack a simple, credible place to share ideas and get discovered.",
    solution:
      "A searchable public directory with markdown pitches, founder profiles, and CMS-driven editorial curation — backed by GitHub authentication.",
    features: [
      "GitHub sign-in with auto-provisioned Sanity author profiles",
      "Markdown pitch submission with validation and slug generation",
      "Full-text search across title, category, and author",
      "Embedded Sanity Studio with live content updates",
    ],
    link: "https://directory-teal-iota.vercel.app/",
    github: "https://github.com/ijqwerty/directory",
    image: "/projects/directory/01-home.png",
  },
  {
    name: "StoreIt",
    tagline: "Full-stack cloud storage",
    stack: ["Next.js", "Appwrite", "Rest API", "Typescript"],
    problem:
      "People need a straightforward way to store, organize, and share files without managing infrastructure.",
    solution:
      "Passwordless file management with auto-categorization, a storage dashboard, and email-based sharing — powered by Appwrite.",
    features: [
      "Email + OTP authentication",
      "Drag-and-drop upload with auto-categorization",
      "Storage dashboard with per-category usage",
      "Global search and email-based file sharing",
    ],
    link: "https://drive-bfk1.vercel.app/",
    github: "https://github.com/ijqwerty/drive",
    image: "/projects/drive/03-dashboard.png",
  },
  {
    name: "Luxury Create",
    tagline: "Headless jewelry e-commerce",
    stack: ["Next.js", "Shopify Storefront API", "GraphQL"],
    problem:
      "Brands need a premium custom storefront without rebuilding commerce infrastructure.",
    solution:
      "A Next.js frontend backed by Shopify's Storefront API — custom UI with hosted checkout for payments and fulfillment.",
    features: [
      "Collection browsing, search, and sort",
      "Variant picker with optimistic cart updates",
      "Shopify Checkout redirect",
      "Webhook-based cache invalidation and SEO optimization",
    ],
    link: "https://luxurycrate-ncdigital.vercel.app/",
    github: "https://github.com/ijqwerty/next-shopify",
    image: "/projects/headless-ui/01-home.png",
  },
  {
    name: "Ghost-AI",
    tagline: "AI-powered collaborative system architecture",
    stack: [
      "Next.js",
      "TypeScript",
      "React Flow",
      "Liveblocks",
      "Clerk",
      "PostgreSQL",
      "Prisma",
      "Trigger.dev",
      "Google Gemini",
      "Tailwind CSS",
      "Vercel Blob"
    ],
    problem:
      "Designing software architecture requires translating ideas into clear diagrams and technical specifications, often across disconnected tools with limited real-time collaboration.",
    solution:
      "A real-time collaborative architecture workspace where users describe systems in plain English, an AI agent generates and edits diagrams directly on a shared canvas, and teams collaborate live before generating downloadable Markdown technical specifications.",
    features: [
      "Project management with email-based collaborator invitations",
      "Real-time canvas with six node shapes, customizable styling, labeled connections, live cursors, and shared undo/redo",
      "AI Architect powered by Google Gemini for adding, updating, moving, and deleting nodes and edges",
      "Durable background AI jobs with live status updates and shared canvas synchronization",
      "Semantic architecture modeling with node roles, notes, and command, query, or event connections",
      "AI-generated Markdown technical specs with canvas-grounded claims, suggested improvements, and flagged architecture gaps",
      "In-app specification preview and downloadable Markdown export",
      "Three starter architecture templates: Microservices, CI/CD Pipeline, and Event-Driven System",
      "Shared room chat, automatic canvas saving to Vercel Blob, and save-status indicators"
    ],
    link: "https://ghost-ai-ivory-five.vercel.app",
    github: "https://github.com/ijqwerty/ghost-ai-new",
    image: "/projects/ghost-ai/01-ai-architecture-hero.png",
  },
  {
    name: "TradeX",
    tagline: "Crypto Market Journal",
    "stack": [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "CoinGecko API",
      "TradingView Lightweight Charts"
    ],
    "problem": "Cryptocurrency market data is often presented through complex trading terminals that can feel overwhelming for users who simply want to track market movements, explore coin performance, and monitor their favorite cryptocurrencies in one place.",
    "solution": "A cryptocurrency market dashboard designed like a printed financial journal rather than a traditional trading terminal. Users can explore live market prices, interactive candlestick charts, trending cryptocurrencies, market statistics, recent trades, exchange listings, and currency conversions, while maintaining a personal watchlist without needing an account.",
    "features": [
      "Market overview featuring total market capitalization, 24-hour trading volume, BTC and ETH dominance, and a featured Bitcoin chart",
      "Trending cryptocurrencies, biggest gainers and losers among the top 250 coins, and top 10 market categories",
      "All Coins table with pagination, sorting by market capitalization or trading volume, and URL-persisted filters and page state",
      "Mobile-optimized coin listings with a separate list layout and indicators showing rising, falling, and unchanged coin prices",
      "Detailed cryptocurrency pages with live prices and real-time connection status indicators",
      "Interactive candlestick charts with seven time ranges from 1D to Max and Open, High, Low, and Close values displayed on candle hover",
      "Detailed market statistics, recent on-chain trades, and top 10 exchange listings ranked by trading volume",
      "Currency converter supporting all currencies quoted by the CoinGecko API",
      "Search pop-up accessible through Ctrl/⌘ + K, featuring trending coins and debounced search results",
      "Personal watchlist supporting up to 50 starred cryptocurrencies, saved locally without requiring an account",
      "Automatic watchlist synchronization across open browser tabs",
      "Server-fetched cryptocurrency market data with WebSocket streaming for live prices, trades, and chart candles",
      "Comprehensive loading, error, and empty states with accessibility support, including screen-reader labels, status announcements, and keyboard focus management"
    ],
    link: "https://trade-x-sandy.vercel.app/",
    github: "https://github.com/ijqwerty/tradeX",
    image: "/projects/tradeX/02-market-overview.png",
  },
  {
    "name": "Flowboard",
    "tagline": "AI-Powered Collaborative Kanban Board",
    "stack": [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL (Neon)",
      "Socket.IO",
      "Google Gemini"
    ],
    "problem": "Managing projects across teams often involves disconnected task management tools, manual backlog creation, and limited visibility into ongoing work. Teams need a centralized workspace where they can organize tasks, collaborate in real time, and turn project goals into actionable priorities.",
    "solution": "A real-time collaborative Kanban workspace where teams create boards, invite members, and manage tasks through drag-and-drop workflows with priorities, assignees, and due dates. Live synchronization keeps everyone updated, while an integrated AI assistant powered by Google Gemini generates task backlogs from project goals, breaks tasks into subtasks, and creates insightful sprint summaries.",
    "features": [
      "Collaborative Kanban boards with customizable columns and drag-and-drop task management",
      "Task management with priorities, assignees, due dates, and detailed descriptions",
      "Real-time board synchronization using Socket.IO to keep task updates consistent across users",
      "Live collaboration indicators with viewing presence avatars and per-board activity feeds",
      "AI-powered task generation that transforms project goals into prioritized task backlogs",
      "AI task breakdown that automatically generates actionable subtasks from existing tasks",
      "AI sprint summaries highlighting completed work, ongoing tasks, potential risks, and recommendations",
      "Board sharing with owner, admin, and member roles, including a dedicated member management modal",
      "Workspace dashboard with KPI cards, tasks-per-board analytics, and owned-versus-shared board visualization",
      "Cross-board task management through My Tasks, a due-date calendar, and a team directory",
      "Task search and filtering by priority and assignee for easier task discovery",
      "Keyboard-accessible command menu with ⌘K shortcut for quick navigation and actions",
      "Email and password authentication with JWT-based session management"
    ],
    link: "https://kanban-board-psi-woad-11.vercel.app/",
    github: "https://github.com/ijqwerty/kanban-board",
    image: "/projects/kanban-board/01-kanban-board-live-collaboration.png",
  },
]

export const education = {
  degree: "Bachelor of Science in Computer Engineering",
  school: "Surigao del Norte State University",
  date: "September 2021",
}

export type Training = {
  title: string
  provider: string
  date: string
}

export const trainings: Training[] = [
  {
    title: "Python Programming Essentials",
    provider: "DICT Surigao Del Norte",
    date: "March 2026",
  },
  {
    title: "ISO 9001:2015 QMS Awareness Training",
    provider: "ASC Management Consultancy",
    date: "February 2026",
  },
  {
    title: "PLC Based Electro-Pneumatic Control for Building Automation",
    provider: "DICT Surigao Del Norte",
    date: "August 2025",
  },
  {
    title: "Cybersecurity Competency Framework",
    provider: "ICT Literacy and Competency Development Bureau",
    date: "April 2024",
  },
  {
    title: "DigitalJobsPH Technical Training",
    provider: "ICT Literacy and Competency Development Bureau",
    date: "October 2022",
  },
]

export const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  // { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
]
