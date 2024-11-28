import type { ReactNode } from "react";
import { getFilesFor, getSections } from "@services/docs";
import { SidebarProvider, SidebarTrigger } from "@components/ui/sidebar";

import Side from "./components/sidebar";

export default async function Page({ children }: { params: Promise<{ section: string }>; children: ReactNode }) {
  const allSections = await getSections();

  const navItems = await Promise.all(
    allSections.map(async (section) => {
      const files = await getFilesFor(section);

      return {
        title: section.name,
        items: files.map(({ name }) => ({ title: name })),
      };
    })
  );

  return (
    <SidebarProvider>
      <div className="flex">
        <Side navItems={navItems} />
        <article className="mx-8">{children}</article>
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
