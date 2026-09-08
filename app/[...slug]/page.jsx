import ClientApp from "../ClientApp";

const SITE = "https://www.jjdsindustries.com.au";

const pages = {
  "process-pipework-australia": ["Process Pipework Installation Australia", "Stainless steel process pipework, fabrication, supports and installation support for industrial sites across Australia."],
  "industrial-plant-installation": ["Industrial Plant Installation Contractors", "Mechanical installation, structural steel, process equipment and industrial plant installation packages across Australia."],
  "waste-processing-installation": ["Waste Processing Plant Installation", "Mechanical, pipework and structural installation support for waste processing and recycling facilities."],
  "water-treatment-installation": ["Water Treatment Plant Installation", "Pipework, pumps, skids, supports, access steel and mechanical installation for water treatment assets."],
  "site-welding-australia": ["Site Welding and Fabrication Australia", "Site welding, fabrication repairs, structural rectification and shutdown support across Australia."],
  "structural-steel-fabrication": ["Structural Steel Fabrication and Installation", "Structural steel frames, platforms, supports, access steel and industrial installation works."],
  "industrial-maintenance-australia": ["Industrial Maintenance and Shutdown Support", "Industrial maintenance, breakdown repairs, mechanical modifications and shutdown support."],
  "hseq-compliance": ["HSEQ and Contractor Compliance Support", "SWMS, permits, site documentation, contractor compliance, reporting and quality handover support."],
  "remote-site-works": ["Remote and Regional Industrial Site Works", "Mobile industrial crews for regional, remote and difficult-access mechanical, steel and civil works."],
  "epc-contractor-support": ["Site Delivery Support for EPC Contractors", "Installation crews, fabrication support, compliance documentation and practical site delivery for EPC contractors."],
  "civil-infrastructure": ["Civil Infrastructure and Bridge Support Works", "Bridge works, culvert relining, drainage upgrades, structural repairs and regional infrastructure support."],
  "mechanical-installation-contractor": ["Industrial Mechanical Installation Contractor", "Mechanical installation for process equipment, pumps, conveyors, skids, tanks and complete industrial packages."],
  "shutdown-contractors-australia": ["Shutdown and Outage Support Australia", "Planned shutdown teams for mechanical replacement, steelwork, pipework, welding and plant maintenance."],
  "stainless-steel-pipework": ["Stainless Steel Pipework Installation", "Stainless process pipework fabrication and installation for hygienic, corrosive and industrial applications."],
  "conveyor-installation": ["Industrial Conveyor Installation", "Mechanical and structural installation for conveyors, transfer systems, platforms and plant interfaces."],
  "pump-station-installation": ["Pump Station Mechanical Installation", "Installation of pumps, pipework, valves, supports, skids and access steel for water and industrial assets."],
  "brownfield-plant-upgrades": ["Brownfield Industrial Plant Upgrades", "Controlled modifications, tie-ins and equipment upgrades in operating industrial facilities."],
};

export async function generateMetadata({ params }) {
  const resolved = await params;
  const key = resolved.slug?.join("/") || "";
  const page = pages[key];
  if (!page) return { title: "JJDS Industries", robots: { index: false, follow: true } };

  const [title, description] = page;
  const url = `${SITE}/${key}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website", images: ["/jjds-logo.png"] },
    twitter: { card: "summary_large_image", title, description, images: ["/jjds-logo.png"] },
  };
}

export default function ServiceRoutePage() {
  return <ClientApp />;
}
