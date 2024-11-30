import { FC } from "react";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import ContentContainer from "@components/content-container";
import { Card, CardContent } from "@components/ui/card";
import { Heading, Text } from "@components/typography";
import { Button } from "@components/ui/button";

const PrefaceHero: FC = () => {
  return (
    <ContentContainer variant="gradient">
      <div className="container grid min-h-[800px] grid-cols-1 items-center gap-8 py-20 md:grid-cols-2 lg:py-32">
        <div className="flex justify-center">
          <Card className="w-[300px] transform transition-transform">
            <CardContent className="p-0">
              <div
                style={{ width: "300px", height: "400px", background: "#ccc" }}
                className="rounded-lg object-cover"
              />
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col items-start gap-4">
          <div>
            <Text className="text-amber-200 font-bold">Fifth Edition</Text>
            <Heading className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
              Preface
            </Heading>
          </div>
          <p className="max-w-[600px] text-zinc-200 md:text-xl">
            The fifth edition of Computer Systems offers a clear, detailed, step-by-step exposition of the central ideas
            in computer organization, assembly language, and computer architecture. The book is based in large part on a
            virtual computer, Pep/9, which is designed to teach the basic concepts of the classic von Neumann machine.
            The strength of this approach is that the central concepts of computer science are taught without getting
            entangled in the many irrelevant details that often accompany such courses. This approach also provides a
            foundation that encourages students to think about the underlying themes of computer science. Breadth is
            achieved by emphasizing computer science topics that are related to, but not usually included in, the
            treatment of hardware and its associated software.
          </p>
          <div className="flex gap-4 mt-4">
            <Button variant="secondary" asChild>
              <Link href="/table-of-contents">
                View Table of Contents <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};

export default PrefaceHero;
