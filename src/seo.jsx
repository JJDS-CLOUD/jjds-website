import { useEffect } from "react";

const SITE = "https://www.jjdsindustries.com.au";

const COMPANY = {
  name: "JJDS Industries",
  legalName: "JJDS Industries Pty Ltd",
  url: SITE,
  logo: `${SITE}/jjds-logo.png`,
  email: "operations@jjdsindustries.com.au",
  telephone: "+61 427 626 101",
  abn: "39 700 250 157",
  acn: "700 250 157",
  areaServed: "Australia",
};

export default function SEO({
  title,
  description,
  path = "/",
  image = `${SITE}/jjds-logo.png`,
}) {
  useEffect(() => {
    const url = `${SITE}${path}`;

    document.title = title;

    function meta(name, content, property = false) {
      const selector = property
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;

      let tag = document.head.querySelector(selector);

      if (!tag) {
        tag = document.createElement("meta");

        if (property) tag.setAttribute("property", name);
        else tag.setAttribute("name", name);

        document.head.appendChild(tag);
      }

      tag.setAttribute("content", content);
    }

    meta("description", description);

    meta("og:title", title, true);
    meta("og:description", description, true);
    meta("og:type", "website", true);
    meta("og:url", url, true);
    meta("og:image", image, true);

    meta("twitter:card", "summary_large_image");
    meta("twitter:title", title);
    meta("twitter:description", description);
    meta("twitter:image", image);

    let canonical = document.querySelector("link[rel='canonical']");

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href = url;

    let schema = document.getElementById("jjds-schema");

    if (!schema) {
      schema = document.createElement("script");
      schema.type = "application/ld+json";
      schema.id = "jjds-schema";
      document.head.appendChild(schema);
    }

    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: COMPANY.name,
      legalName: COMPANY.legalName,
      url: COMPANY.url,
      logo: COMPANY.logo,
      email: COMPANY.email,
      telephone: COMPANY.telephone,
      identifier: [
        `ABN ${COMPANY.abn}`,
        `ACN ${COMPANY.acn}`
      ],
      areaServed: COMPANY.areaServed
    });
  }, [title, description, path, image]);

  return null;
}
