import { useEffect } from "react";
import { PERSON_SCHEMA, SEO_IMAGE_HEIGHT, SEO_IMAGE_TYPE, SEO_IMAGE_WIDTH, SITE_NAME, serializeSchema } from "../../seo/siteSeo";

const upsertMeta = (attribute, key, content) => {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const upsertCanonical = (href) => {
  let element = document.head.querySelector('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
};

const upsertImageSrc = (href) => {
  let element = document.head.querySelector('link[rel="image_src"]');

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "image_src");
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
};

const upsertPersonSchema = () => {
  let element = document.getElementById("person-schema");

  if (!element) {
    element = document.createElement("script");
    element.id = "person-schema";
    element.type = "application/ld+json";
    document.head.appendChild(element);
  }

  element.textContent = serializeSchema(PERSON_SCHEMA);
};

const Seo = ({ seo }) => {
  useEffect(() => {
    document.title = seo.title;

    upsertMeta("name", "title", seo.title);
    upsertMeta("name", "description", seo.description);
    upsertMeta("name", "robots", "index, follow");
    upsertCanonical(seo.canonicalUrl);
    upsertImageSrc(seo.image);

    upsertMeta("itemprop", "name", seo.title);
    upsertMeta("itemprop", "description", seo.description);
    upsertMeta("itemprop", "image", seo.image);

    upsertMeta("property", "og:title", seo.title);
    upsertMeta("property", "og:description", seo.description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:url", seo.url);
    upsertMeta("property", "og:image", seo.image);
    upsertMeta("property", "og:image:secure_url", seo.image);
    upsertMeta("property", "og:image:type", SEO_IMAGE_TYPE);
    upsertMeta("property", "og:image:width", SEO_IMAGE_WIDTH);
    upsertMeta("property", "og:image:height", SEO_IMAGE_HEIGHT);
    upsertMeta("property", "og:image:alt", "Portrait of Htet Lin Ko");
    upsertMeta("property", "og:locale", "en_US");
    upsertMeta("property", "og:site_name", SITE_NAME);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:url", seo.url);
    upsertMeta("name", "twitter:title", seo.title);
    upsertMeta("name", "twitter:description", seo.description);
    upsertMeta("name", "twitter:image", seo.image);
    upsertMeta("name", "twitter:image:alt", "Portrait of Htet Lin Ko");

    upsertPersonSchema();
  }, [seo]);

  return null;
};

export default Seo;
