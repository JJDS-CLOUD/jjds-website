import { notFound, permanentRedirect } from "next/navigation";
import ClientApp from "../ClientApp";
import { seoPages } from "../../data/services";

function resolvePage(slug) {
  const path = `/${slug.join("/")}`;
  const page = seoPages.find((item) => item.path === path || item.aliases?.includes(path));
  if (!page) notFound();
  return { page, path };
}

export function generateStaticParams() {
  return seoPages.flatMap((page) =>
    [page.path, ...(page.aliases || [])].map((path) => ({ slug: path.slice(1).split("/") }))
  );
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { page } = resolvePage(slug);
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: page.path },
    openGraph: {
      title: page.title, description: page.description, url: page.path,
      type: "website", images: ["/jjds-logo.png"],
    },
    twitter: {
      card: "summary_large_image", title: page.title,
      description: page.description, images: ["/jjds-logo.png"],
    },
  };
}

export default async function ServiceRoutePage({ params }) {
  const { slug } = await params;
  const { page, path } = resolvePage(slug);
  if (path !== page.path) permanentRedirect(page.path);
  return <ClientApp path={page.path} />;
}
