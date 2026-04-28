export const SITE_URL = "https://www.htetlinko.com";
export const SITE_NAME = "Htet Lin Ko Portfolio";
export const SEO_TITLE = "Htet Lin Ko – Senior Frontend Developer | Portfolio";
export const SEO_DESCRIPTION =
  "Htet Lin Ko is a Senior Frontend Developer specializing in React, Vue, Next.js, and scalable frontend systems.";
export const SEO_IMAGE = `${SITE_URL}/hero-portrait.webp`;

export const SOCIAL_LINKS = {
  github: "https://github.com/HtetLin27",
  linkedin: "https://www.linkedin.com/in/htet-lin-ko-411b02204/",
  facebook: "https://www.facebook.com/htetlinko",
};

export const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Htet Lin Ko",
  url: SITE_URL,
  image: SEO_IMAGE,
  jobTitle: "Senior Frontend Developer",
  email: "htetlinko.dev@gmail.com",
  sameAs: [SOCIAL_LINKS.linkedin, SOCIAL_LINKS.github, SOCIAL_LINKS.facebook],
  knowsAbout: [
    "React",
    "Vue",
    "Next.js",
    "Nuxt",
    "TypeScript",
    "JavaScript",
    "Frontend Architecture",
    "GraphQL",
    "REST APIs",
    "Scalable Frontend Systems",
  ],
};

export const homeSeo = {
  title: SEO_TITLE,
  description: SEO_DESCRIPTION,
  canonicalUrl: SITE_URL,
  url: SITE_URL,
  image: SEO_IMAGE,
};

export const identitySeo = {
  title: "Htet Lin Ko – Senior Frontend Developer Profile",
  description:
    "Official profile of Htet Lin Ko, Senior Frontend Developer with a career journey from network engineering to React, Vue, Next.js, and scalable frontend systems.",
  canonicalUrl: `${SITE_URL}/htet-lin-ko`,
  url: `${SITE_URL}/htet-lin-ko`,
  image: SEO_IMAGE,
};

export const seoByPath = {
  "/": homeSeo,
  "/htet-lin-ko": identitySeo,
};

export const getSeoForPath = (pathname = "/") => seoByPath[pathname] ?? homeSeo;

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export const serializeSchema = (schema = PERSON_SCHEMA) => JSON.stringify(schema).replace(/</g, "\\u003c");

export const buildSeoHead = (seo = homeSeo) => {
  const title = escapeHtml(seo.title);
  const description = escapeHtml(seo.description);
  const url = escapeHtml(seo.url);
  const canonicalUrl = escapeHtml(seo.canonicalUrl);
  const image = escapeHtml(seo.image);

  return [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    `<meta name="robots" content="index, follow" />`,
    `<link rel="canonical" href="${canonicalUrl}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:alt" content="Portrait of Htet Lin Ko" />`,
    `<meta property="og:site_name" content="${escapeHtml(SITE_NAME)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    `<meta name="twitter:image:alt" content="Portrait of Htet Lin Ko" />`,
    `<script id="person-schema" type="application/ld+json">${serializeSchema(PERSON_SCHEMA)}</script>`,
  ].join("\n    ");
};
