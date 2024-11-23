import type { Options } from "react-markdown";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@components/ui/table";
import { Heading, Text } from "@components/typography";
import { List, ListItem } from "@components/list";

import { getFileContent, getFileFromSection, getFilesFor, getSections } from "@services/docs";

const components: Options["components"] = {
  table: ({ node, ...props }) => <Table {...props} />,
  thead: ({ node, ...props }) => <TableHeader {...props} />,
  tbody: ({ node, ...props }) => <TableBody {...props} />,
  tr: ({ node, ...props }) => <TableRow {...props} />,
  th: ({ node, ...props }) => (
    <TableHead className="px-4 py-2 text-left text-gray-800 font-semibold border border-gray-300" {...props} />
  ),
  td: ({ node, ...props }) => <TableCell className="px-4 py-2 border border-gray-300" {...props} />,
  h1: ({ node, ...props }) => <Heading {...props} />,
  h2: ({ node, ...props }) => <Heading variant="h2" {...props} />,
  h3: ({ node, ...props }) => <Heading variant="h3" {...props} />,
  h4: ({ node, ...props }) => <Heading variant="h4" {...props} />,
  p: ({ node, ...props }) => <Text {...props} />,
  blockquote: ({ node, ...props }) => <Text variant="blockquote" {...props} />,
  code: ({ node, ...props }) => <Text variant="inline-code" {...props} />,
  ul: ({ node, ...props }) => <List {...props} />,
  li: ({ node, ...props }) => <ListItem {...props} />,
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
