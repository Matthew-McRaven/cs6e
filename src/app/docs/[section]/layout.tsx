import type { ReactNode } from "react";
import { getFilesFor, getSections } from "@services/docs";
import { SidebarProvider, SidebarTrigger } from "@components/ui/sidebar";

import Side from "./components/sidebar";

export default async function Page({ children }: { params: Promise<{ section: string }>; children: ReactNode }) {
  const allSections = await getSections();

  const sectionData = await Promise.all(
    allSections.map(async (section) => {
      const files = await getFilesFor(section);

      return {
        name: section.name,
        pages: files.map(({ name }) => name),
      };
    })
  );

  return (
    <SidebarProvider>
      <div className="flex">
        <Side sectionData={sectionData} />
        <article className="mx-8">
          <SidebarTrigger />
          {children}
        </article>
      </div>
    </SidebarProvider>
  );
}

export async function generateStaticParams() {
  const sections = await getSections();

  return sections.map(({ name }) => ({
    section: name,
  }));
}
