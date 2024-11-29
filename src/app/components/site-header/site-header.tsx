import type { FC } from "react";

import { Menu } from "lucide-react";
import Link from "next/link";

import { Button } from "@components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@components/ui/navigation-menu";

const navigationItems = [
  {
    title: "Preface",
    href: "/preface",
    subMenu: [
      { title: "Preface", href: "#" },
      { title: "Table of Contents", href: "./table-of-contents" },
    ],
  },
  {
    title: "Editions",
    href: "/editions",
    subMenu: [
      { title: "Fith Edition", href: "#" },
      { title: "Fourth Edition", href: "#" },
      { title: "Chinese Edition", href: "#" },
    ],
  },
  {
    title: "Software Downloads",
    href: "/software-downloads",
    subMenu: [
      { title: "Fifth Edition - Pep/9", href: "#" },
      { title: "Fourth Edition - Pep/8", href: "#" },
    ],
  },
  {
    title: "Resources",
    href: "/resources",
    subMenu: [
      { title: "Documentation", href: "./docs/tester/about-pep-10" },
      { title: "Fifth Edition Video Lectures", href: "#" },
      { title: "Fifth Edition Resources", href: "#" },
      { title: "Fifth Edition Video Tutorials", href: "#" },
      { title: "Fourth Edition Video Lectures", href: "#" },
      { title: "Fourth Edition Video Tutorials", href: "#" },
      { title: "Fourth Edition Resources", href: "#" },
    ],
  },
];

const SiteHeader: FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-center items-center px-8">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-bold">Computer Systems</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                        {item?.subMenu?.map((subMenuItem) => (
                          <li key={subMenuItem.href} className="row-span-3">
                            <NavigationMenuLink asChild>
                              <Link
                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                href={subMenuItem.href}
                              >
                                <div className="mb-2 mt-4 text-lg font-medium">{subMenuItem.title}</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4">
                  {navigationItems.map((item) => (
                    <Link key={item.title} href={item.href} className="text-lg font-medium hover:underline">
                      {item.title}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
