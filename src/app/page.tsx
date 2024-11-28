import { Card, CardContent } from "@components/ui/card";

import Link from "next/link";
import SiteHeader from "./components/site-header";
import ContentContainer from "@components/content-container";
import { Button } from "@components/ui/button";
import { Text } from "@components/typography";
import Hero from "./components/hero";
import About from "./components/about";
import EditionSummary from "./components/edition-summary";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main>
          <Hero />
          <ContentContainer>
            <Text variant="blockquote">
              Computer Systems is a mature text that uniquely satisfies this important new goal of the latest computer
              science curriculum guidelines
            </Text>
          </ContentContainer>
          <About />
          <EditionSummary />
          <ContentContainer>
            <div className="w-full flex flex-col items-center justify-center">
              <Card className="w-2/3">
                <CardContent className="flex flex-col gap-2 p-6">
                  <h3 className="text-xl font-bold">Join us on Discord!</h3>
                  <p className="text-muted-foreground">
                    Discuss textbook questions, contribute to our open source development, nerd out!
                  </p>
                </CardContent>
              </Card>
            </div>
          </ContentContainer>
        </main>
        <footer className="min-h-[200px]"></footer>
      </div>
    </>
  );
}
