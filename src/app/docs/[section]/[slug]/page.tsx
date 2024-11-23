import {
  getFileContent,
  getFileFromSection,
  getFilesFor,
  getFilesForSection,
  getSection,
  getSections,
} from "@services/docs";
import { Options } from "react-markdown";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const components: Options["components"] = {
  h1: ({ node, ...props }) => <h1 className="text-4xl font-bold text-blue-600" {...props} />,
  h2: ({ node, ...props }) => <h2 className="text-2xl font-semibold text-gray-700" {...props} />,
  p: ({ node, ...props }) => <p className="text-base text-gray-500" {...props} />,
  a: ({ node, ...props }) => <a className="text-blue-500 underline hover:text-blue-700" {...props} />,
  img: ({ node, ...props }) => <img className="rounded-md shadow-md" {...props} />,
};

export default async function Page(props: { params: Promise<{ section: string; slug: string }> }) {
  const params = await props.params;

  const file = await getFileFromSection(params.section, params.slug);
  const page = await getFileContent(file);

  return <ReactMarkdown children={page} remarkPlugins={[remarkGfm]} components={components} />;
}

export async function generateStaticParams({ params }: { params: { section: string } }) {
  const sections = await getSections();

  const files = await getFilesFor(sections.find(({ name }) => name === params.section)!);

  return files.map(({ name }) => ({
    slug: name,
  }));
}
