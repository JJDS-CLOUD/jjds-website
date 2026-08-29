import "../src/index.css";

const SITE = "https://www.jjdsindustries.com.au";

export const metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Industrial Construction, Mechanical Installation & Structural Steel | JJDS Industries",
    template: "%s | JJDS Industries",
  },
  description:
    "JJDS Industries delivers industrial construction, mechanical installation, structural steel, process pipework, shutdowns and plant installation across Australia.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: SITE,
    siteName: "JJDS Industries",
    title: "Industrial Construction, Mechanical Installation & Structural Steel | JJDS Industries",
    description:
      "Industrial plant installation, mechanical construction, structural steel, process pipework, shutdowns and maintenance across Australia.",
    images: [{ url: "/jjds-logo.png", alt: "JJDS Industries" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "JJDS Industries | Industrial Construction Australia",
    description:
      "Mechanical installation, structural steel, process pipework and industrial plant delivery across Australia.",
    images: ["/jjds-logo.png"],
  },
  robots: { index: true, follow: true },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE}/#organization`,
  name: "JJDS Industries",
  legalName: "JJDS Industries Pty Ltd",
  url: SITE,
  logo: `${SITE}/jjds-logo.png`,
  email: "operations@jjdsindustries.com.au",
  telephone: "+61 427 626 101",
  identifier: [
    { "@type": "PropertyValue", name: "ABN", value: "39 700 250 157" },
    { "@type": "PropertyValue", name: "ACN", value: "700 250 157" },
  ],
  areaServed: { "@type": "Country", name: "Australia" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
