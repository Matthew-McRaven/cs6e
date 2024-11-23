import type { FC } from "react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel } from "@components/ui/sidebar";
import Link from "next/link";

interface SidebarProps {
  sectionData: { name: string; pages: string[] }[];
}

const DocsSidebar: FC<SidebarProps> = ({ sectionData }) => {
  return (
    <Sidebar collapsible="offcanvas">
      <SidebarContent>
        {sectionData.map((section) => {
          return (
            <SidebarGroup key={section.name}>
              <SidebarGroupLabel>{section.name}</SidebarGroupLabel>
              {section.pages.map((page) => (
                <SidebarGroupContent key={page}>
                  <Link href={`../${section.name}/${page}`}>{page}</Link>
                </SidebarGroupContent>
              ))}
            </SidebarGroup>
          );
        })}
      </SidebarContent>
    </Sidebar>
  );
};

export default DocsSidebar;
