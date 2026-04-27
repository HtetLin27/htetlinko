import legacyJs from "../assets/images/certificates/legacy-js.png";
import introFrontend from "../assets/images/certificates/Introduction-to-frontend.jpeg";
import versionControl from "../assets/images/certificates/meta-version-control.jpeg";
import programmingJs from "../assets/images/certificates/meta-programing-js.jpeg";
import htmlCssDepth from "../assets/images/certificates/meta-html-css-depth.jpeg";
import reactBasics from "../assets/images/certificates/meta-react.jpeg";
import tailwind from "../assets/images/certificates/tailwindcss.jpeg";
import reactHosting from "../assets/images/certificates/react-create-hosting.jpeg";
import reactCssModule from "../assets/images/certificates/react-css-module.jpeg";
import reactInterface from "../assets/images/certificates/react-building-interface.jpeg";
import reactEssential from "../assets/images/certificates/react-essential.jpeg";
import cssEssential from "../assets/images/certificates/css-essential.jpeg";
import reactRouter from "../assets/images/certificates/react-router.jpeg";
import nodeEssential from "../assets/images/certificates/nodejs-essential.jpeg";
import expressEssential from "../assets/images/certificates/express-essential.jpeg";

export const portfolioData = {
  navigation: {
    toggleLabel: "Toggle navigation",
    items: [
      { id: "hero", label: "Home", icon: "home" },
      { id: "about", label: "About", icon: "user" },
      { id: "experience", label: "Experience", icon: "timeline" },
      { id: "projects", label: "Projects", icon: "code" },
      { id: "certificates", label: "Learning", icon: "badge" },
      { id: "contact", label: "Contact", icon: "mail" },
    ],
  },

  sections: ["hero", "about", "experience", "projects", "certificates", "contact"],

  hero: {
    badge: "Senior Frontend Developer · Open to Full Stack Roles",
    name: "Htet Lin Ko",
    headline: "Frontend engineer shipping clean, scalable product UI.",
    summary:
      "I build modern web apps with React, Next.js, TypeScript, Vue, and Nuxt, with strong API integration and growing full stack capability.",
    primaryCta: {
      label: "View Projects",
      href: "#projects",
    },
    secondaryCta: {
      label: "Contact Me",
      href: "#contact",
    },
    availability: "Open to frontend and full stack opportunities",
    stack: ["React", "Next.js", "TypeScript", "Vue", "Nuxt", "Node.js"],
    ringText: "HTET LIN KO • FRONTEND ENGINEER • PRODUCT ENGINEERING • ",
    portrait: {
      src: "/hero-portrait.webp",
      alt: "Portrait of Htet Lin Ko",
    },
  },

  about: {
    eyebrow: "About",
    title: "Building product UI with strong engineering fundamentals.",
    support:
      "I turn product requirements into clean, maintainable interfaces and work closely with backend, design, and product teams.",
    storyTitle: "My Story",
    story:
      "I started in network engineering, then moved into frontend product development. Today, I build production features at Better HR across hiring, appraisal, internal tools, and business systems. My work covers UI architecture, API integration, Figma-to-code delivery, code reviews, and mentoring, while I continue growing toward full stack development with Node.js and Express.",
    infoRows: [
      { label: "Current role", value: "Senior Frontend Developer at Better HR" },
      { label: "Focus", value: "Scalable UI, API integration, and UX quality" },
      { label: "Also growing in", value: "Full stack development with Node.js" },
      { label: "Strengths", value: "Collaboration, mentoring, and product delivery" },
    ],
    stats: [
      { value: "4+", label: "Years Experience" },
      { value: "8+", label: "Projects Shipped" },
      { value: "2", label: "Companies" },
    ],
    skillGroups: [
      { label: "Frontend", skills: ["React", "Next.js", "Vue", "Nuxt", "TypeScript", "JavaScript", "Tailwind CSS"] },
      { label: "State & Data", skills: ["TanStack Query", "Zustand", "Apollo Client", "GraphQL", "REST APIs", "Axios"] },
      { label: "Backend", skills: ["Node.js", "Express.js"] },
      { label: "Tools", skills: ["Git", "Chart.js", "Figma", "Vercel"] },
    ],
    skillsTitle: "Core Skills",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Vue",
      "Nuxt",
      "Tailwind CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "GraphQL",
      "REST APIs",
      "Apollo Client",
      "TanStack Query",
      "Zustand",
      "Axios",
      "Chart.js",
      "Git",
    ],
  },

  experience: {
    eyebrow: "Experience",
    title: "From systems thinking to product engineering.",
    copy:
      "My path combines reliability, UI engineering, API-driven product work, and growing technical leadership.",
    directionLabel: {
      down: "Scrolling Down",
      up: "Scrolling Up",
    },
    items: [
      {
        id: 3,
        year: "2023",
        role: "Senior Frontend Developer",
        company: "Better HR",
        location: "Yangon, Myanmar",
        img: "/betterhr.jpg",
        period: "Nov 2023 - Present",
        description:
          "Lead frontend delivery across multiple product areas, build complex business workflows, improve code quality, and mentor developers.",
        skills: [
          "React",
          "Vue",
          "Next.js",
          "Nuxt",
          "TypeScript",
          "GraphQL",
          "REST APIs",
          "Tailwind CSS",
          "Code Review",
          "Mentoring",
        ],
      },
      {
        id: 2,
        year: "2022",
        role: "Junior Frontend Developer",
        company: "Better HR",
        location: "Yangon, Myanmar",
        img: "/betterhr.jpg",
        period: "Sep 2022 - Nov 2023",
        description:
          "Built responsive product features, integrated APIs, supported code quality, and strengthened core frontend engineering skills.",
        skills: [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Vue",
          "Tailwind CSS",
          "REST APIs",
          "Git",
        ],
      },
      {
        id: 1,
        year: "2019",
        role: "Network Engineer",
        company: "Frontiir",
        location: "Mandalay, Myanmar",
        img: "/frontiir.jpeg",
        period: "Jan 2019 - Feb 2022",
        description:
          "Worked on network reliability, routing, and troubleshooting, building the systems mindset I still use in product engineering.",
        skills: [
          "Network Operations",
          "Routing Protocols",
          "Troubleshooting",
          "System Reliability",
        ],
      },
    ],
  },

  projects: {
    kicker: "Selected Work",
    heading: "Product work I’ve shipped",
    copy:
      "Real product features and internal systems focused on usability, maintainability, and API-driven workflows.",
    labels: {
      keyFeatures: "Key Highlights",
      privateProject: "Private Project",
      role: "Role",
      projectPrefix: "Project",
      techStackAria: "Tech stack",
      livePreview: "Live Preview",
      sourceCode: "Source Code",
      railTitle: "Case Studies",
      confidentialNote: "Most work shown here is private product work under company confidentiality.",
      scrollingDown: "Scrolling Down",
      scrollingUp: "Scrolling Up",
    },
    items: [
      {
        id: "betterjobs-platform",
        name: "BetterJobs Platform",
        category: "Hiring Platform",
        summary:
          "A job platform for discovery, applications, and employer workflows.",
        role: "Senior Frontend Developer",
        features: [
          "Built responsive UI with Vue 3 and Tailwind CSS.",
          "Implemented job listings, search, filters, and application flows.",
          "Developed login, registration, and company profile features.",
          "Integrated GraphQL and REST APIs for core product data.",
          "Improved accessibility and key user journeys.",
        ],
        tech: ["Vue 3", "Tailwind CSS", "GraphQL", "Apollo Client", "REST APIs"],
        privateProject: true,
      },
      {
        id: "applicant-tracking-system",
        name: "Applicant Tracking System",
        category: "HR SaaS",
        summary:
          "A structured hiring workflow from company setup to candidate offers.",
        role: "Senior Frontend Developer",
        features: [
          "Built company setup and management workflows.",
          "Developed dynamic job creation forms.",
          "Implemented a five-stage hiring pipeline.",
          "Created candidate profile, scheduling, and offer flows.",
          "Synced company and candidate data through GraphQL and REST APIs.",
        ],
        tech: ["Vue", "Nuxt", "TypeScript", "GraphQL", "REST APIs", "Tailwind CSS"],
        privateProject: true,
      },
      {
        id: "performance-appraisal-system",
        name: "Performance Appraisal System",
        category: "B2B SaaS",
        summary:
          "A performance review module for structured employee evaluation.",
        role: "Senior Frontend Developer",
        features: [
          "Built full appraisal creation workflows.",
          "Implemented question and action management across review rounds.",
          "Developed reviewer scoring and feedback interfaces.",
          "Created employee views for published appraisals.",
          "Handled complex status-based UI flows.",
        ],
        tech: ["Vue", "TypeScript", "GraphQL", "Tailwind CSS"],
        privateProject: true,
      },
      {
        id: "customer-management-tools",
        name: "Customer Management Tools",
        category: "Internal Business System",
        summary:
          "An internal platform covering customer operations, reporting, and business settings.",
        role: "Senior Frontend Developer",
        features: [
          "Helped shape project architecture and frontend setup.",
          "Built customer and core data modules.",
          "Developed reporting interfaces with charts.",
          "Implemented settings such as currency management.",
          "Mentored junior developers and supported code quality.",
        ],
        tech: ["React", "TypeScript", "Apollo Client", "Axios", "Chart.js"],
        privateProject: true,
      },
      {
        id: "marketing-site",
        name: "Better HR Marketing Site",
        category: "Marketing / CMS",
        summary:
          "A public-facing marketing site powered by Next.js and the Notion API as a headless CMS.",
        role: "Senior Frontend Developer",
        features: [
          "Built the full marketing site with Next.js (App Router).",
          "Integrated Notion API as a headless CMS for content management.",
          "Implemented static generation with on-demand revalidation.",
          "Delivered responsive, SEO-optimised pages.",
        ],
        tech: ["Next.js", "Notion API", "TypeScript", "Tailwind CSS"],
        privateProject: true,
      },
      {
        id: "api-debugger",
        name: "API Debugger (Mini Postman)",
        category: "Developer Tool",
        summary:
          "A full-stack API testing tool built with Next.js and TypeScript — a developer-focused alternative to Postman.",
        role: "Full Stack Developer",
        features: [
          "Implemented request builder and response viewer.",
          "Built API route handlers and structured client-server interaction.",
          "Designed developer-focused debugging UI.",
        ],
        tech: ["Next.js", "TypeScript", "Node.js"],
        privateProject: false,
      },
      {
        id: "moviepilot",
        name: "MoviePilot – MERN Streaming Platform",
        category: "Full Stack App",
        summary:
          "A full-stack MERN streaming platform with authentication, API integration, and dynamic content rendering.",
        role: "Full Stack Developer",
        features: [
          "Built a full-stack streaming platform with authentication and dynamic content rendering.",
          "Developed backend APIs with Node.js and Express for data flow and business logic.",
          "Designed responsive UI with React for content browsing and user interaction.",
          "Integrated MongoDB for data storage and structured API-driven architecture.",
          "Deployed live application and managed environment configuration for production.",
        ],
        tech: ["MongoDB", "Express.js", "React", "Node.js"],
        privateProject: false,
      },
      {
        id: "expense-form-website",
        name: "Expense Management System",
        category: "Internal Workflow Tool",
        summary:
          "A role-based expense workflow for submission, review, and approval.",
        role: "Frontend Developer",
        features: [
          "Built expense submission and tracking flows.",
          "Developed approval experiences for multiple roles.",
          "Implemented role-based access behavior.",
          "Created responsive UI with Vue, Nuxt 3, and Tailwind CSS.",
          "Worked closely with the Laravel backend team.",
        ],
        tech: ["Vue", "Nuxt 3", "Tailwind CSS", "REST APIs", "Laravel"],
        privateProject: true,
      },
    ],
  },

  certificates: {
    pageSize: 5,
    header: {
      kicker: "Learning",
      heading: "Continuous Learning",
      copy:
        "Recent learning in JavaScript, React, Node.js, Express, UI engineering, and modern frontend development.",
    },
    labels: {
      all: "All",
      previous: "Previous",
      next: "Next",
      navigatorTitle: "Certificate Navigator",
      previewNote: "Select a certificate from the list to preview it.",
      emptyState: "No certificates found for this filter.",
      showing: "Showing",
    },
    items: [
      {
        id: 1,
        title: "Legacy JavaScript Algorithms and Data Structures",
        issuer: "freeCodeCamp",
        date: "Mar 2025",
        imageUrl: legacyJs,
      },
      {
        id: 2,
        title: "Introduction to Front-End Development",
        issuer: "Meta",
        date: "Jun 2024",
        imageUrl: introFrontend,
      },
      {
        id: 3,
        title: "Version Control",
        issuer: "Meta",
        date: "Jul 2024",
        imageUrl: versionControl,
      },
      {
        id: 4,
        title: "Programming with JavaScript",
        issuer: "Meta",
        date: "Jul 2024",
        imageUrl: programmingJs,
      },
      {
        id: 5,
        title: "HTML and CSS in Depth",
        issuer: "Meta",
        date: "Aug 2024",
        imageUrl: htmlCssDepth,
      },
      {
        id: 6,
        title: "React Basics",
        issuer: "Meta",
        date: "Sep 2024",
        imageUrl: reactBasics,
      },
      {
        id: 7,
        title: "Tailwind CSS 3 Essential Training",
        issuer: "LinkedIn",
        date: "Oct 2024",
        imageUrl: tailwind,
      },
      {
        id: 8,
        title: "React: Creating and Hosting a Full-Stack Site",
        issuer: "LinkedIn",
        date: "Oct 2024",
        imageUrl: reactHosting,
      },
      {
        id: 9,
        title: "React: Building Styles with CSS Modules",
        issuer: "LinkedIn",
        date: "Oct 2024",
        imageUrl: reactCssModule,
      },
      {
        id: 10,
        title: "React.js: Building an Interface",
        issuer: "LinkedIn",
        date: "Oct 2024",
        imageUrl: reactInterface,
      },
      {
        id: 11,
        title: "React.js Essential Training",
        issuer: "LinkedIn",
        date: "Oct 2024",
        imageUrl: reactEssential,
      },
      {
        id: 12,
        title: "CSS Essential Training",
        issuer: "LinkedIn",
        date: "Oct 2024",
        imageUrl: cssEssential,
      },
      {
        id: 13,
        title: "Building Modern UIs with React Router v6",
        issuer: "LinkedIn",
        date: "Oct 2024",
        imageUrl: reactRouter,
      },
      {
        id: 14,
        title: "Node.js Essential Training",
        issuer: "LinkedIn",
        date: "Nov 2024",
        imageUrl: nodeEssential,
      },
      {
        id: 15,
        title: "Express Essentials: Build Powerful Web Apps with Node.js",
        issuer: "LinkedIn",
        date: "Nov 2024",
        imageUrl: expressEssential,
      },
    ],
  },

  contact: {
    header: {
      kicker: "Contact",
      heading: "Let’s build something great.",
      copy: "Open to frontend and full stack opportunities — remote or Yangon.",
    },
    cta: {
      emailLabel: "Send an Email",
      linkedinLabel: "Connect on LinkedIn",
      availability: "Available for new opportunities",
    },
    infoTitle: "Get in touch",
    details: [
      { label: "Location", value: "Yangon, Myanmar" },
      { label: "Email", value: "htetlinko.dev@gmail.com" },
      { label: "Phone", value: "+95 9254351761" },
      { label: "Education", value: "Technological University" },
      { label: "Languages", value: "Myanmar, English" },
    ],
    socials: [
      { name: "github", label: "GitHub", url: "https://github.com/HtetLin27" },
      { name: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/htet-lin-ko-411b02204/" },
    ],
    form: {
      title: "Send a message",
      recipient: "htetlinko.dev@gmail.com",
      labels: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
      },
      placeholders: {
        name: "Your name",
        email: "you@example.com",
        subject: "Frontend / Full Stack opportunity",
        message: "Tell me about your role or project",
      },
      submit: "Send Message",
      subjectSuffix: "from",
      replyPrefix: "Reply to:",
    },
  },
};
