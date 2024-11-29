import { Card, CardContent } from "@components/ui/card";

import SiteHeader from "./components/site-header";
import ContentContainer from "@components/content-container";
import { Text } from "@components/typography";
import Hero from "./components/hero";
import About from "./components/about";
import EditionSummary from "./components/edition-summary";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Resources from "./components/resources";
import { ResourcesVariant } from "./components/resources/resources";
import JoinUs from "./components/join-us";
import { EditionSummaryVariant } from "./components/edition-summary/edition-summary";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <main>
          <Hero />
          <SiteHeader />
          <ContentContainer>
            <Text variant="blockquote">
              Computer Systems is a mature text that uniquely satisfies this important new goal of the latest computer
              science curriculum guidelines
            </Text>
          </ContentContainer>
          <ResourcesVariant />
          <Resources />
          <About />
          <EditionSummary />
          <EditionSummaryVariant />
          <JoinUs />
        </main>
        <footer className="min-h-[100px] bg-neutral-800"></footer>
      </div>
    </>
  );
}
