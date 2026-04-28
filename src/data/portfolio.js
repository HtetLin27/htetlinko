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
    headline: "Senior Frontend Developer",
    summary:
      "Htet Lin Ko builds scalable React, Next.js, Vue, and Nuxt interfaces for HR, recruitment, and internal business systems — with strong API integration across GraphQL and REST.",
    primaryCta: {
      label: "View Case Studies",
      href: "#projects",
    },
    secondaryCta: {
      label: "Contact Me",
      href: "#contact",
    },
    availability: "Open to frontend and full stack opportunities",
    stack: ["React", "Next.js", "TypeScript", "Vue", "Nuxt", "GraphQL"],
    ringText: "HTET LIN KO • FRONTEND ENGINEER • PRODUCT ENGINEERING • ",
    portrait: {
      src: "/hero-portrait.webp",
      alt: "Portrait of Htet Lin Ko",
    },
  },

  about: {
    eyebrow: "About",
    title: "Building product interfaces that scale with business needs.",
    support:
      "Frontend-focused full stack developer with 4+ years of experience shipping product UI for HR SaaS, recruitment platforms, and internal business systems.",
    storyTitle: "My Story",
    story:
      "I started in network engineering at Frontiir, where I built a strong systems and reliability mindset. I transitioned into frontend development at Better HR in 2022, building responsive product features and integrating REST APIs. Since late 2023, as Senior Frontend Developer, I've led UI architecture across hiring, appraisal, internal tools, and marketing — using React, Vue, Next.js, Nuxt, TypeScript, and GraphQL. I mentor developers, lead code reviews, and continue growing toward full stack development with Node.js.",
    infoRows: [
      { label: "Current role", value: "Senior Frontend Developer at Better HR" },
      { label: "Focus", value: "UI architecture, API integration, scalable product workflows" },
      { label: "Also growing in", value: "Full stack development with Node.js and Express" },
      { label: "Strengths", value: "Mentoring, code reviews, Figma-to-code delivery" },
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
    title: "A career built in three chapters.",
    copy: "From network infrastructure to senior product engineering — each chapter shaped how I build today.",
    items: [
      {
        id: 3,
        chapterNum: "03",
        chapterLabel: "Architecture & Leadership",
        role: "Senior Frontend Developer",
        company: "Better HR",
        location: "Yangon",
        img: "/betterhr.jpg",
        period: "Nov 2023 – Present",
        coreMessage: "Leading frontend architecture across complex HR and recruitment systems.",
        bullets: [
          "ATS, appraisal, customer management, and marketing site delivery.",
          "GraphQL and REST API-driven workflows at product scale.",
          "Node.js v12 to v18 runtime migration.",
          "Legacy Vue module migration to React.",
          "Mentoring developers and leading code reviews.",
        ],
        stack: ["React", "Vue", "Next.js", "Nuxt", "TypeScript", "GraphQL"],
      },
      {
        id: 2,
        chapterNum: "02",
        chapterLabel: "Product UI Builder",
        role: "Junior Frontend Developer",
        company: "Better HR",
        location: "Yangon",
        img: "/betterhr.jpg",
        period: "Sep 2022 – Nov 2023",
        coreMessage: "Moved from systems infrastructure into production frontend delivery.",
        bullets: [
          "Built BetterJobs platform UI — job listings, search, and filters.",
          "Integrated REST APIs for core product data flows.",
          "Delivered auth, company profiles, and application workflows.",
        ],
        stack: ["Vue", "JavaScript", "Tailwind CSS", "REST APIs"],
      },
      {
        id: 1,
        chapterNum: "01",
        chapterLabel: "Systems Foundation",
        role: "Network Engineer",
        company: "Frontiir",
        location: "Mandalay",
        img: "/frontiir.jpeg",
        period: "Jan 2019 – Feb 2022",
        coreMessage: "Built the reliability mindset behind my product engineering work.",
        bullets: [
          "Network operations and incident troubleshooting.",
          "Routing protocol configuration and maintenance.",
          "Systems-level problem solving and root cause analysis.",
        ],
        stack: ["Network Operations", "Routing Protocols", "System Reliability"],
      },
    ],
  },

  projects: {
    kicker: "Selected Work",
    heading: "Product work I've shipped",
    copy:
      "Real product features and internal systems focused on usability, maintainability, and API-driven workflows. Most are private commercial work.",
    labels: {
      privateProject: "Private",
      role: "Role:",
      techStackAria: "Tech stack",
      livePreview: "Live Preview",
      sourceCode: "Source Code",
      confidentialNote: "Work shown under company confidentiality — architecture and approach are shared without proprietary detail.",
      heroLabel: "Featured Case Study",
      supportingLabel: "Supporting Work",
      archiveLabel: "More Shipped Work",
    },
    items: [
      {
        id: "applicant-tracking-system",
        name: "Applicant Tracking System",
        category: "HR SaaS",
        hero: true,
        summary: "End-to-end hiring workflow — from company setup and job creation through a five-stage candidate pipeline to offer management.",
        problem:
          "HR teams needed a structured recruitment workspace that could handle company setup, job creation, candidate tracking, scheduling, and offers without fragmented manual steps.",
        built:
          "Built company setup, dynamic job creation forms, five-stage candidate pipeline, candidate profiles, scheduling views, and offer management.",
        decisions:
          "Used Nuxt, Vue, TypeScript, Tailwind CSS, GraphQL, and REST APIs to support role-based workflows and complex state transitions.",
        impact:
          "Delivered a unified recruitment system for real HR operations — replacing manual processes with a single, structured workspace.",
        role: "Senior Frontend Developer",
        tech: ["Vue", "Nuxt", "TypeScript", "GraphQL", "REST APIs", "Tailwind CSS"],
        privateProject: true,
        pipeline: [
          "Company Setup",
          "Job Creation",
          "Candidate Pipeline",
          "Interview",
          "Offer",
        ],
      },
      {
        id: "marketing-site",
        name: "Better HR Marketing Site",
        category: "Marketing / CMS",
        featured: true,
        summary:
          "Next.js App Router marketing site with Notion API as a headless CMS — SEO-optimised, statically generated, and incrementally revalidated.",
        problem:
          "The business needed a fast, SEO-ready marketing site where non-technical staff could publish content without a developer handoff.",
        built:
          "Built the full site with Next.js App Router, integrated Notion API as headless CMS for blog and pages, implemented ISR for on-demand revalidation.",
        impact:
          "Improved Lighthouse scores, reduced content publishing time, and delivered SEO-ready pages for real marketing use.",
        role: "Senior Frontend Developer",
        tech: ["Next.js", "Notion API", "TypeScript", "Tailwind CSS"],
        privateProject: true,
        flow: ["Notion Content", "Next.js Build", "ISR / SSG", "SEO Pages"],
      },
      {
        id: "api-debugger",
        name: "API Debugger",
        category: "Developer Tool",
        featured: true,
        summary:
          "Full-stack API testing tool — request builder, response viewer, Next.js API routes, and developer-focused UX.",
        problem:
          "Needed a lightweight, focused API testing tool to deepen full stack knowledge with Next.js server-side routes.",
        built:
          "Request builder with method, headers, and body; API route handlers for proxying; response viewer with status codes and timing.",
        impact:
          "Public project demonstrating end-to-end full stack capability — Next.js, TypeScript, client/server architecture.",
        role: "Full Stack Developer",
        tech: ["Next.js", "TypeScript", "Node.js"],
        privateProject: false,
        sourceUrl: "https://github.com/HtetLin27",
        debugPanel: {
          method: "POST",
          url: "/api/proxy",
          status: "200 OK",
          ms: "142ms",
        },
      },
      {
        id: "betterjobs-platform",
        name: "BetterJobs Platform",
        category: "Hiring Platform",
        summary: "Job discovery, applications, and employer workflows — Vue 3, GraphQL, and REST.",
        role: "Senior Frontend Developer",
        tech: ["Vue 3", "GraphQL", "Apollo Client", "Tailwind CSS"],
        privateProject: true,
      },
      {
        id: "performance-appraisal-system",
        name: "Performance Appraisal System",
        category: "B2B SaaS",
        summary: "Appraisal creation, multi-round scoring, reviewer feedback, and employee views.",
        role: "Senior Frontend Developer",
        tech: ["Vue", "TypeScript", "GraphQL", "Tailwind CSS"],
        privateProject: true,
      },
      {
        id: "customer-management-tools",
        name: "Customer Management Tools",
        category: "Internal System",
        summary: "Customer ops, reporting with charts, business settings. Led architecture and mentoring.",
        role: "Senior Frontend Developer",
        tech: ["React", "TypeScript", "Apollo Client", "Chart.js"],
        privateProject: true,
      },
      {
        id: "expense-form-website",
        name: "Expense Management System",
        category: "Internal Workflow",
        summary: "Role-based expense submission, review, and approval with a Laravel backend.",
        role: "Frontend Developer",
        tech: ["Vue", "Nuxt 3", "Tailwind CSS", "REST APIs"],
        privateProject: true,
      },
      {
        id: "moviepilot",
        name: "MoviePilot",
        category: "Full Stack App",
        summary: "MERN streaming platform — auth, dynamic content, Node.js/Express, MongoDB.",
        role: "Full Stack Developer",
        tech: ["MongoDB", "Express.js", "React", "Node.js"],
        privateProject: false,
      },
    ],
  },

  certificates: {
    pageSize: 5,
    header: {
      kicker: "Learning",
      heading: "Continuous Learning",
      copy:
        "Selected certifications in JavaScript, React, Node.js, and modern frontend development — building toward full stack depth.",
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
        id: 6,
        title: "React Basics",
        issuer: "Meta",
        date: "Sep 2024",
        imageUrl: reactBasics,
      },
      {
        id: 5,
        title: "HTML and CSS in Depth",
        issuer: "Meta",
        date: "Aug 2024",
        imageUrl: htmlCssDepth,
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
      {
        id: 7,
        title: "Tailwind CSS 3 Essential Training",
        issuer: "LinkedIn",
        date: "Oct 2024",
        imageUrl: tailwind,
      },
      {
        id: 11,
        title: "React.js Essential Training",
        issuer: "LinkedIn",
        date: "Oct 2024",
        imageUrl: reactEssential,
      },
      {
        id: 8,
        title: "React: Creating and Hosting a Full-Stack Site",
        issuer: "LinkedIn",
        date: "Oct 2024",
        imageUrl: reactHosting,
      },
      {
        id: 13,
        title: "Building Modern UIs with React Router v6",
        issuer: "LinkedIn",
        date: "Oct 2024",
        imageUrl: reactRouter,
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
        id: 12,
        title: "CSS Essential Training",
        issuer: "LinkedIn",
        date: "Oct 2024",
        imageUrl: cssEssential,
      },
    ],
  },

  contact: {
    header: {
      kicker: "Contact",
      heading: "Let's build something great.",
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
