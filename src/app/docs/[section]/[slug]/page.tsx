import type { Options } from "react-markdown";

import MarkdownRenderer from "react-markdown";
import remarkGfm from "remark-gfm";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@components/ui/table";
import { Heading, Text } from "@components/typography";
import { List, ListItem } from "@components/list";

import { getFileContent, getFileFromSection, getFilesFor, getSections } from "@services/docs";

const components: Options["components"] = {
  table: (props) => <Table {...props} />,
  thead: (props) => <TableHeader {...props} />,
  tbody: (props) => <TableBody {...props} />,
  tr: (props) => <TableRow {...props} />,
  th: (props) => (
    <TableHead className="px-4 py-2 text-left text-gray-800 font-semibold border border-gray-300" {...props} />
  ),
  td: (props) => <TableCell className="px-4 py-2 border border-gray-300" {...props} />,
  h1: (props) => <Heading {...props} />,
  h2: (props) => <Heading variant="h2" {...props} />,
  h3: (props) => <Heading variant="h3" {...props} />,
  h4: (props) => <Heading variant="h4" {...props} />,
  p: (props) => <Text {...props} />,
  blockquote: (props) => <Text variant="blockquote" {...props} />,
  code: (props) => <Text variant="inline-code" {...props} />,
  ul: (props) => <List {...props} />,
  li: (props) => <ListItem {...props} />,
};

export default async function Page(props: { params: Promise<{ section: string; slug: string }> }) {
  const params = await props.params;

  const file = await getFileFromSection(params.section, params.slug);
  const page = await getFileContent(file);

  return (
    <MarkdownRenderer remarkPlugins={[remarkGfm]} components={components}>
      {page}
    </MarkdownRenderer>
  );
}

export async function generateStaticParams({ params }: { params: { section: string } }) {
  const sections = await getSections();

  const files = await getFilesFor(sections.find(({ name }) => name === params.section)!);

  return files.map(({ name }) => ({
    slug: name,
  }));
}
