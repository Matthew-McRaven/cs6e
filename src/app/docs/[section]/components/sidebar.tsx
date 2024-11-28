"use client";

import type { FC } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@components/ui/sidebar";
import Link from "next/link";
import * as Collapsible from "@radix-ui/react-collapsible";
import { useState } from "react";
import { useParams } from "next/navigation";

interface SidebarProps {
  navItems: { title: string; items: Array<{ title: string }> }[];
}

const DocsSidebar: FC<SidebarProps> = ({ navItems }) => {
  const { section } = useParams();
  const [selectedSection, setSelectedSection] = useState<string>(() => {
    if (typeof section === "string") {
      return section;
    }

    return "";
  });

  return (
    <Sidebar collapsible="offcanvas">
      <SidebarContent>
        {navItems.map((nav) => {
          return (
            <div key={nav.title} className="relative px-2 py-2">
              <SidebarGroup>
                <Collapsible.Root
                  open={selectedSection === nav.title}
                  onOpenChange={() => setSelectedSection((prev) => (prev === nav.title ? "" : nav.title))}
                >
                  <Collapsible.Trigger>
                    <SidebarGroupLabel>{nav.title}</SidebarGroupLabel>
                  </Collapsible.Trigger>
                  <Collapsible.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                    <SidebarMenu>
                      {nav.items.map((page) => (
                        <SidebarMenuItem key={page.title}>
                          <SidebarMenuButton asChild>
                            <Link href={`../${nav.title}/${page.title}`}>{page.title}</Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </Collapsible.Content>
                </Collapsible.Root>
              </SidebarGroup>
            </div>
          );
        })}
      </SidebarContent>
    </Sidebar>
  );
};

export default DocsSidebar;
