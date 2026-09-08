const SITE = "https://www.jjdsindustries.com.au";

const routes = [
  "/",
  "/process-pipework-australia",
  "/industrial-plant-installation",
  "/waste-processing-installation",
  "/water-treatment-installation",
  "/site-welding-australia",
  "/structural-steel-fabrication",
  "/industrial-maintenance-australia",
  "/hseq-compliance",
  "/remote-site-works",
  "/epc-contractor-support",
  "/civil-infrastructure",
  "/mechanical-installation-contractor",
  "/shutdown-contractors-australia",
  "/stainless-steel-pipework",
  "/conveyor-installation",
  "/pump-station-installation",
  "/brownfield-plant-upgrades",
];

export default function sitemap() {
  return routes.map((route) => ({
    url: `${SITE}${route === "/" ? "" : route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.85,
  }));
}
