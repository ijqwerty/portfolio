export const profile = {
  name: "Issaih Jeremiah Mendiola",
  nickname: "IJ",
  title: "Software Developer",
  location: "Surigao City, Philippines",
  email: "issaih.mendiola@gmail.com",
  github: "https://github.com/ijqwerty",
  linkedin: "https://www.linkedin.com/in/issaihmendiola",
  summary:
    "Software Developer with experience in frontend, backend, and e-commerce systems. Skilled in Next.js, React.js, Tailwind CSS, and Python (Django REST Framework), with hands-on experience in API integration, testing, and deployment support. Strong collaborator with a focus on responsive design, system stability, and continuous improvement.",
  specialization:
    "Full-stack developer — Next.js, React, and Django REST Framework.",
  /** Hero positioning statement; claims verified against the experience and projects data */
  positioning:
    "Since 2024, I've built and maintained systems for the City Government of Surigao, from React interfaces to Django REST APIs, including deployment support. I also build real-time, AI-assisted applications like Ghost AI and Flowboard.",
  /** Public path for the existing resume in public/resume */
  resumeHref: "/resume/Mendiola, Issaih Jeremiah - CV.pdf",
}

export type StackTech = {
  name: string
  /** simple-icons export key, or null for a non-brand fallback icon */
  icon: string | null
}

export type StackGroup = {
  title: string
  items: StackTech[]
}

/** Technologies from resume.md, grouped for the Stack section */
export const stackGroups: StackGroup[] = [
  {
    title: "Frontend",
    items: [
      { name: "TypeScript", icon: "siTypescript" },
      { name: "React", icon: "siReact" },
      { name: "Next.js", icon: "siNextdotjs" },
      { name: "Tailwind CSS", icon: "siTailwindcss" },
      { name: "JavaScript", icon: "siJavascript" },
      { name: "HTML", icon: "siHtml5" },
      { name: "CSS", icon: "siCss" },
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      { name: "Python", icon: "siPython" },
      { name: "Django REST Framework", icon: "siDjango" },
      { name: "Node.js", icon: "siNodedotjs" },
      { name: "Express.js", icon: "siExpress" },
      { name: "REST APIs", icon: null },
      { name: "GraphQL", icon: "siGraphql" },
    ],
  },
  {
    title: "Data & Platforms",
    items: [
      { name: "PostgreSQL", icon: "siPostgresql" },
      { name: "Supabase", icon: "siSupabase" },
      { name: "Appwrite", icon: "siAppwrite" },
      { name: "Sanity", icon: "siSanity" },
      { name: "Shopify", icon: "siShopify" },
    ],
  },
  {
    title: "Tooling",
    items: [{ name: "Git / GitHub", icon: "siGithub" }],
  },
]

export type Experience = {
  role: string
  company: string
  /** Employment classification when stated in resume.md */
  employmentType?: string
  /** Abbreviated range, e.g. "Mar 2024 – Present" */
  period: string
  /** Visual weight on the timeline */
  tier: "primary" | "standard" | "minor"
  /** Primary tier: condensed bullets from resume.md */
  highlights?: string[]
  /** Standard tier: one-line summary */
  summary?: string
}

/** Professional experience from resume.md — most recent first */
export const experience: Experience[] = [
  {
    role: "Software Developer",
    company: "City Government of Surigao",
    period: "Mar 2024 – Present",
    tier: "primary",
    highlights: [
      "Builds reusable, responsive interfaces with Next.js, React, and Tailwind CSS alongside UI/UX.",
      "Develops and maintains Django REST Framework APIs with JWT authentication, checking API and database schemas for correct integration.",
      "Supports branch management, deployments, testing, and code reviews across development, staging, and production.",
    ],
  },
  {
    role: "Shopify Developer",
    company: "Madvert Media",
    period: "Apr 2023 – Feb 2024",
    tier: "standard",
    summary:
      "Product research, landing pages for featured products, and AI-assisted product copy.",
  },
  {
    role: "Clerical Aide",
    company: "Caraga Regional Hospital",
    period: "Jan 2023 – Apr 2023",
    tier: "minor",
  },
  {
    role: "Shopify Developer",
    company: "Luxury Crate LLC",
    period: "Apr 2021 – Nov 2021",
    tier: "standard",
    summary:
      "Built and maintained a Shopify store, improving performance and designing product landing pages.",
  },
  {
    role: "Shopify Developer",
    company: "SwipeUp LLC",
    period: "Oct 2020 – Apr 2021",
    tier: "standard",
    summary:
      "Built product landing pages and pricing split-test pages with Shopify Page Builder.",
  },
]

export type FeaturedScreenshot = {
  src: string
  alt: string
  /** Intrinsic pixel dimensions of the source image */
  width: number
  height: number
  /** CSS object-position when the frame crops the source image */
  objectPosition?: string
}

export type ProjectFeatured = {
  /** Anchor segment for `#work-{slug}` and future `/projects/{slug}` routes */
  slug: string
  context: string
  tagline: string
  problem: string
  solution: string
  role: string
  /** Exactly four curated capability highlights */
  highlights: [string, string, string, string]
  /** Five primary technologies drawn from `stack` */
  primaryStack: [string, string, string, string, string]
  layout: "standard" | "phone"
  screenshots: {
    primary: FeaturedScreenshot
    secondary: FeaturedScreenshot[]
    /** Shown only in the lightbox gallery, between `primary` and `secondary` */
    galleryOnly?: FeaturedScreenshot[]
  }
}

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
  /** Secondary projects only: thumbnail alt text */
  imageAlt?: string
  /** Secondary projects only: three technologies shown on the compact card */
  cardStack?: [string, string, string]
  /** Present on featured projects only; homepage presentation overrides */
  featured?: ProjectFeatured
}

export const projects: Project[] = [
  {
    name: "Ghost AI",
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
      "Vercel Blob",
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
      "Shared room chat, automatic canvas saving to Vercel Blob, and save-status indicators",
    ],
    link: "https://ghost-ai-ivory-five.vercel.app",
    github: "https://github.com/ijqwerty/ghost-ai-new",
    image: "/projects/ghost-ai/01-ai-architecture-hero.png",
    featured: {
      slug: "ghost-ai",
      context: "AI + real-time collaboration",
      tagline:
        "Describe a system in plain English and design it with an AI agent on a shared, real-time canvas.",
      problem:
        "Turning a system idea into clear diagrams and a technical spec usually means juggling disconnected tools with little real-time collaboration.",
      solution:
        "A shared canvas where an AI agent builds and edits the architecture diagram, the team refines it live, and the result exports as a Markdown spec.",
      role: "Solo developer across the Next.js app, real-time collaboration, database, and AI integration.",
      highlights: [
        "The AI Architect (Google Gemini) adds, updates, moves, and deletes nodes and edges on the canvas.",
        "Live cursors and shared undo/redo on a real-time canvas.",
        "Durable background AI jobs with live status synced to the shared canvas.",
        "Canvas-grounded Markdown specs that flag architecture gaps, with in-app preview and download.",
      ],
      primaryStack: [
        "Next.js",
        "TypeScript",
        "React Flow",
        "Liveblocks",
        "Google Gemini",
      ],
      layout: "standard",
      screenshots: {
        primary: {
          src: "/projects/ghost-ai/01-ai-architecture-hero.png",
          alt: "Ghost AI canvas showing an AI-generated e-commerce backend architecture, with the AI Architect panel open.",
          width: 1440,
          height: 900,
        },
        secondary: [
          {
            src: "/projects/ghost-ai/03-spec-preview.png",
            alt: "Ghost AI specification preview showing a generated Markdown technical document beside the architecture canvas.",
            width: 1440,
            height: 900,
          },
          {
            src: "/projects/ghost-ai/04-node-inspector.png",
            alt: "Ghost AI node inspector with Catalog DB selected, showing a role of store and notes describing product items and categories.",
            width: 1500,
            height: 938,
          },
        ],
      },
    },
  },
  {
    name: "Flowboard",
    tagline: "AI-Powered Collaborative Kanban Board",
    stack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL (Neon)",
      "Socket.IO",
      "Google Gemini",
    ],
    problem:
      "Managing projects across teams often involves disconnected task management tools, manual backlog creation, and limited visibility into ongoing work. Teams need a centralized workspace where they can organize tasks, collaborate in real time, and turn project goals into actionable priorities.",
    solution:
      "A real-time collaborative Kanban workspace where teams create boards, invite members, and manage tasks through drag-and-drop workflows with priorities, assignees, and due dates. Live synchronization keeps everyone updated, while an integrated AI assistant powered by Google Gemini generates task backlogs from project goals, breaks tasks into subtasks, and creates insightful sprint summaries.",
    features: [
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
      "Email and password authentication with JWT-based session management",
    ],
    link: "https://kanban-board-psi-woad-11.vercel.app/",
    github: "https://github.com/ijqwerty/kanban-board",
    image: "/projects/kanban-board/01-kanban-board-live-collaboration.png",
    featured: {
      slug: "flowboard",
      context: "Real-time collaboration + AI",
      tagline:
        "A real-time collaborative Kanban workspace with an AI planning assistant.",
      problem:
        "Team projects get split across disconnected tools, with manual backlog creation and little visibility into ongoing work.",
      solution:
        "Boards with drag-and-drop tasks, priorities, assignees, and due dates, synced live. A Gemini assistant turns goals into backlogs, subtasks, and sprint summaries.",
      role: "Solo developer across the React frontend, Node/Express API, PostgreSQL database, Socket.IO layer, and Gemini integration.",
      highlights: [
        "Socket.IO board sync with viewing-presence avatars and activity feeds.",
        "Gemini-generated backlogs, subtask breakdowns, and sprint summaries.",
        "Board sharing with owner, admin, and member roles.",
        "Workspace dashboard, due-date calendar, and ⌘K command menu.",
      ],
      primaryStack: [
        "React",
        "Node.js",
        "Express",
        "Socket.IO",
        "PostgreSQL (Neon)",
      ],
      layout: "standard",
      screenshots: {
        primary: {
          src: "/projects/kanban-board/01-kanban-board-live-collaboration.png",
          alt: "Flowboard Kanban board with columns of prioritized tasks and live viewing-presence avatars.",
          width: 3072,
          height: 1920,
        },
        secondary: [
          {
            src: "/projects/kanban-board/02-workspace-dashboard.png",
            alt: "Flowboard workspace dashboard showing KPI cards and owned-versus-shared board analytics.",
            width: 2880,
            height: 1800,
          },
          {
            src: "/projects/kanban-board/03-calendar-due-dates.png",
            alt: "Flowboard calendar view highlighting task due dates across boards.",
            width: 2880,
            height: 1800,
          },
        ],
      },
    },
  },
  {
    name: "TradeX",
    tagline: "Crypto Market Journal",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "CoinGecko API",
      "TradingView Lightweight Charts",
    ],
    problem:
      "Cryptocurrency market data is often presented through complex trading terminals that can feel overwhelming for users who simply want to track market movements, explore coin performance, and monitor their favorite cryptocurrencies in one place.",
    solution:
      "A cryptocurrency market dashboard designed like a printed financial journal rather than a traditional trading terminal. Users can explore live market prices, interactive candlestick charts, trending cryptocurrencies, market statistics, recent trades, exchange listings, and currency conversions, while maintaining a personal watchlist without needing an account.",
    features: [
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
      "Comprehensive loading, error, and empty states with accessibility support, including screen-reader labels, status announcements, and keyboard focus management",
    ],
    link: "https://trade-x-sandy.vercel.app/",
    github: "https://github.com/ijqwerty/tradeX",
    image: "/projects/tradeX/02-market-overview.png",
    featured: {
      slug: "tradex",
      context: "Market data + interactive charts",
      tagline:
        "A cryptocurrency market dashboard designed like a printed financial journal.",
      problem:
        "Crypto data usually lives in dense trading terminals that overwhelm people who just want to follow the market and a few coins.",
      solution:
        "Market prices, candlestick charts, market statistics, and a personal watchlist that needs no account.",
      role: "Solo developer across the Next.js app, CoinGecko data layer, charts, and responsive UI.",
      highlights: [
        "Mobile-optimized coin listings with a dedicated list layout and rising, falling, or unchanged price indicators.",
        "Candlestick charts with seven time ranges and OHLC values on hover.",
        "All Coins table with sorting, pagination, and filters saved in the URL.",
        "⌘K search and an account-free watchlist that syncs across tabs.",
      ],
      primaryStack: [
        "Next.js",
        "TypeScript",
        "CoinGecko API",
        "TradingView Lightweight Charts",
        "Tailwind CSS",
      ],
      layout: "phone",
      screenshots: {
        primary: {
          src: "/projects/tradeX/02-market-overview.png",
          alt: "TradeX market overview with market statistics, a Bitcoin candlestick chart, and trending coin cards.",
          width: 2880,
          height: 1800,
        },
        secondary: [
          {
            src: "/projects/tradeX/06-mobile-coin-detail.png",
            alt: "TradeX mobile coin-detail screen for Ethereum showing price, 24-hour change, and a candlestick chart.",
            width: 1170,
            height: 3615,
            objectPosition: "center 12%",
          },
        ],
        galleryOnly: [
          {
            src: "/projects/tradeX/01-coin-detail-chart.png",
            alt: "TradeX Bitcoin detail page with live price, 24-hour change, and a one-day candlestick price history chart showing a selected candle's open, high, low, and close values.",
            width: 2880,
            height: 1800,
          },
        ],
      },
    },
  },
  {
    name: "YC Directory",
    tagline: "Founder-focused pitch platform",
    stack: ["Next.js", "Sanity", "NextAuth", "TypeScript"],
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
    imageAlt:
      "YC Directory home page with a startup search bar above a grid of startup pitch cards.",
    cardStack: ["Next.js", "Sanity", "TypeScript"],
  },
  {
    name: "StoreIt",
    tagline: "Full-stack cloud storage",
    stack: ["Next.js", "Appwrite", "REST API", "TypeScript"],
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
    imageAlt:
      "StoreIt dashboard showing storage used, per-category usage, and recently uploaded files.",
    cardStack: ["Next.js", "Appwrite", "TypeScript"],
  },
  {
    name: "Luxury Crate",
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
    imageAlt:
      "Luxury Crate storefront home page with a jewelry trends headline, collection links, and a seasonal campaign banner.",
    cardStack: ["Next.js", "Shopify Storefront API", "GraphQL"],
  },
]

export const education = {
  degree: "Bachelor of Science in Computer Engineering",
  school: "Surigao del Norte State University",
  date: "2021",
}

export type Training = {
  title: string
  provider: string
  date: string
  /** Shown in the Education block under Experience */
  featured?: boolean
}

export const trainings: Training[] = [
  {
    title: "Python Programming Essentials",
    provider: "DICT Surigao Del Norte",
    date: "Mar 2026",
    featured: true,
  },
  {
    title: "ISO 9001:2015 QMS Awareness Training",
    provider: "ASC Management Consultancy",
    date: "Feb 2026",
  },
  {
    title: "PLC Based Electro-Pneumatic Control for Building Automation",
    provider: "DICT Surigao Del Norte",
    date: "Aug 2025",
  },
  {
    title: "Cybersecurity Competency Framework",
    provider: "ICT Literacy and Competency Development Bureau",
    date: "Apr 2024",
    featured: true,
  },
  {
    title: "DigitalJobsPH Technical Training",
    provider: "ICT Literacy and Competency Development Bureau",
    date: "Oct 2022",
  },
]

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
]
