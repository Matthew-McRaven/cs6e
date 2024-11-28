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
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight } from "lucide-react";

interface SidebarProps {
  navItems: { title: string; items: Array<{ title: string }> }[];
}

const DocsSidebar: FC<SidebarProps> = ({ navItems }) => {
  const { section, slug } = useParams();
  const [selectedSection, setSelectedSection] = useState<string>(() => {
    if (typeof section === "string") {
      return section;
    }

    return "";
  });

  return (
    <Sidebar collapsible="offcanvas">
      <SidebarContent>
        <SidebarGroup>
          <div style={{ height: "92px" }}>{/* placeholder */}</div>
        </SidebarGroup>
        {navItems.map((nav) => {
          return (
            <div key={nav.title} className="relative px-2 py-2">
              <SidebarGroup>
                <Collapsible.Root
                  open={selectedSection === nav.title}
                  onOpenChange={() => setSelectedSection((prev) => (prev === nav.title ? "" : nav.title))}
                >
                  <Collapsible.Trigger className={cn("w-full")}>
                    <SidebarGroupLabel
                      className={cn("w-full", "flex", "justify-between", "hover:text-purple-900", "hover:font-bold", {
                        "text-purple-900": nav.title === selectedSection,
                        "font-bold": nav.title === selectedSection,
                      })}
                    >
                      {nav.title} {selectedSection === nav.title ? <ChevronDown /> : <ChevronRight />}
                    </SidebarGroupLabel>
                  </Collapsible.Trigger>
                  <Collapsible.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                    <SidebarMenu>
                      {nav.items.map((page) => (
                        <SidebarMenuItem key={page.title}>
                          <SidebarMenuButton asChild>
                            <Link
                              className={cn("hover:text-purple-900", "hover:bg-violet-50", {
                                "text-purple-900": nav.title === selectedSection && page.title === slug,
                                "bg-violet-200": nav.title === selectedSection && page.title === slug,
                              })}
                              href={`../${nav.title}/${page.title}`}
                            >
                              {page.title}
                            </Link>
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
