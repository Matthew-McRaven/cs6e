import { getSections } from "@services/docs";
import { ReactNode } from "react";

export default async function Page({
  params,
  children,
}: {
  params: Promise<{ section: string }>;
  children: ReactNode;
}) {
  const section = (await params).section;
  return (
    <div>
      Section: {section}
      {children}
    </div>
  );
}

export async function generateStaticParams() {
  const sections = await getSections();

  return sections.map(({ name }) => ({
    section: name,
  }));
}
