import { getFileContent, getFilesFor, getSections } from "@services/docs";

export default async function Page(props: { params: Promise<{ section: string; slug: string }> }) {
  const params = await props.params;

  const sections = await getSections();
  const section = sections.find(({ name }) => name === params.section)!;

  const files = await getFilesFor(section);

  console.log({ params, sections, section, files, page: files.find((file) => file.name === params.slug)! });

  const page = await getFileContent(files.find((file) => file.name === params.slug)!);

  return <div>slug {JSON.stringify(page)}</div>;
}

export async function generateStaticParams({ params }: { params: { section: string } }) {
  const sections = await getSections();

  const files = await getFilesFor(sections.find(({ name }) => name === params.section)!);

  return files.map(({ name }) => ({
    slug: name,
  }));
}
