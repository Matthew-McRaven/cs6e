import { cn } from "@/lib/utils";
import { Card, CardContent } from "@components/ui/card";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@components/ui/navigation-menu";
import Link from "next/link";
import { ReactNode } from "react";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main>
          <ContentContainer variant="gradient">
            <div className="container grid min-h-[800px] grid-cols-1 items-center gap-8 py-20 md:grid-cols-2 lg:py-32">
              <div className="flex flex-col items-start gap-4">
                <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                  Computer Systems
                  <p className="text-amber-200">Fifth Edition</p>
                </h1>
                <p className="max-w-[600px] text-zinc-200 md:text-xl">
                  The ACM/IEEE curriculum guidelines (CS2013) recommends computer systems as a new body of knowledge
                  with the goal of a unified systems perspective.
                </p>
                <div className="mt-4">
                  <Link href="/docs"> View Docs </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <Card className="w-[300px] rotate-3 transform transition-transform hover:rotate-0">
                  <CardContent className="p-0">
                    <div
                      style={{ width: "300px", height: "400px", background: "#ccc" }}
                      className="rounded-lg object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </ContentContainer>
          <ContentContainer>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col gap-2 p-6">
                  <h3 className="text-xl font-bold">Unified Systems Perspective</h3>
                  <p className="text-muted-foreground">
                    A comprehensive approach to understanding computer systems from hardware to software.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col gap-2 p-6">
                  <h3 className="text-xl font-bold">Interactive Learning</h3>
                  <p className="text-muted-foreground">
                    Access to simulation tools, video lectures, and hands-on tutorials.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col gap-2 p-6">
                  <h3 className="text-xl font-bold">Industry Standard</h3>
                  <p className="text-muted-foreground">
                    Aligned with the latest ACM/IEEE curriculum guidelines for computer science education.
                  </p>
                </CardContent>
              </Card>
            </div>
          </ContentContainer>
        </main>
      </div>
    </>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full flex items-center justify-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-8 flex items-center space-x-2">
          <span className="text-xl font-bold">Computer Systems</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Editions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">Fifth Edition</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          The newest edition for students and professionals
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/"
                      >
                        <div className="text-sm font-medium leading-none">Software Downloads</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Access simulation tools and example code
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/"
                      >
                        <div className="text-sm font-medium leading-none">Video Lectures</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Watch comprehensive video lectures
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/"
                      >
                        <div className="text-sm font-medium leading-none">Video Tutorials</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Step-by-step tutorials and demonstrations
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/"
                      >
                        <div className="text-sm font-medium leading-none">Additional Resources</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Supplementary materials and references
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}

const ContentContainer = ({
  children,
  variant = "primary",
}: {
  children: ReactNode;
  variant?: "primary" | "secondary" | "gradient";
}) => {
  const variantMapping = {
    primary: "",
    secondary: "",
    gradient: "bg-gradient-to-br from-purple-900 via-purple-800 to-amber-700 opacity-90",
  };

  return (
    <div className={cn("w-full flex flex-col justify-center items-center p-8", variantMapping[variant])}>
      <div className="container ">{children}</div>
    </div>
  );
};
