import Hero from "@/app/components/hero";
import SiteHeader from "@/app/components/site-header";
import { getEdition, getPastEditions } from "@services/book";

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const edition = await getEdition(params.slug);

  return (
    <>
      <Hero edition={edition} />
      <SiteHeader />
      <div style={{ height: "400px" }} />
    </>
  );
}

export async function generateStaticParams() {
  const editions = await getPastEditions();

  return editions.map(({ slug }) => ({
    slug,
  }));
}
