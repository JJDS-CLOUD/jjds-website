import { seoPages } from "../data/services";
const SITE = "https://www.jjdsindustries.com.au";

const routes = ["/", ...seoPages.map((page) => page.path), "/live-job-library"];

export default function sitemap() {
  return routes.map((route) => ({
    url: `${SITE}${route === "/" ? "" : route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.85,
  }));
}

