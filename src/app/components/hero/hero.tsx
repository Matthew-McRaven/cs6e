import type { ComponentProps, FC } from "react";
import type { Edition } from "@services/book";

import Link from "next/link";

import ContentContainer from "@components/content-container";
import { Button } from "@components/ui/button";
import { Heading, Text } from "@/components/typography";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  edition: Edition;
}

const gradientMapping = (name: string): ComponentProps<typeof ContentContainer>["variant"] => {
  return (
    (
      {
        "Chinese Edition": "gray-gradient",
        "Fourth Edition": "blue-gradient",
      } as const
    )[name] || "gradient"
  );
};

const Hero: FC<HeroProps> = ({ edition }) => {
  return (
    <ContentContainer variant={gradientMapping(edition.editionName)}>
      <div className="container grid min-h-[800px] grid-cols-1 items-center gap-8 py-20 md:grid-cols-2 lg:py-32">
        <div className="flex flex-col items-start gap-4">
          <div>
            <Text className="text-amber-200 font-bold">{edition.editionName}</Text>
            <Heading className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
              {edition.title}
            </Heading>
          </div>
          <p className="max-w-[600px] text-zinc-200 md:text-xl">{edition.tagline}</p>
          <div className="flex gap-4 mt-4 flex-col md:flex-row">
            <Button variant="secondary" asChild>
              <Link href="/docs">
                View Additional Resources <ArrowRight />
              </Link>
            </Button>
            <Button asChild>
              <Link href="/docs">
                Download Software <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          {/* eslint-disable @next/next/no-img-element */}
          <img className="w-[400px] h-[492px]" src={edition.cover} alt="edition cover" />
        </div>
      </div>
    </ContentContainer>
  );
};

export default Hero;
