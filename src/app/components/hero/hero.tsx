import type { FC } from "react";

import Link from "next/link";

import ContentContainer from "@components/content-container";
import { Button } from "@components/ui/button";
import { Card, CardContent } from "@components/ui/card";

const Hero: FC = () => {
  return (
    <ContentContainer variant="gradient">
      <div className="container grid min-h-[800px] grid-cols-1 items-center gap-8 py-20 md:grid-cols-2 lg:py-32">
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
            Computer Systems
            <p className="text-amber-200">Fifth Edition</p>
          </h1>
          <p className="max-w-[600px] text-zinc-200 md:text-xl">
            The ACM/IEEE curriculum guidelines (CS2013) recommends computer systems as a new body of knowledge with the
            goal of a unified systems perspective.
          </p>
          <div className="mt-4">
            <Button asChild>
              <Link href="/docs"> View Docs </Link>
            </Button>
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
  );
};

export default Hero;
