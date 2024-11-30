import type { FC } from "react";

import Link from "next/link";

import ContentContainer from "@components/content-container";
import { Button } from "@components/ui/button";
import { Card, CardContent } from "@components/ui/card";

const EditionSummary: FC = () => {
  return (
    <ContentContainer variant="secondary">
      <div className="container grid grid-cols-1 items-center gap-8 py-20 md:grid-cols-2 lg:py-32">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Fourth Edition</h2>
          <p className="max-w-[600px] md:text-xl">
            The fourth edition of Computer Systems offers a clear, detailed, step-by-step exposition of the central
            ideas in computer organization, assembly language, and computer architecture.
          </p>
          <div className="mt-4">
            <Button asChild>
              <Link href="/docs"> Learn More </Link>
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
      <div className="container grid grid-cols-1 items-center gap-8 py-20 md:grid-cols-2 lg:py-32">
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
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Chinese Edition</h2>
          <p className="max-w-[600px] md:text-xl">
            A translation of the fourth edition, offering a clear, detailed, step-by-step exposition of the central
            ideas in computer organization, assembly language, and computer architecture.
          </p>
          <div className="mt-4">
            <Button asChild>
              <Link href="/docs"> Learn More </Link>
            </Button>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};

export default EditionSummary;

export const EditionSummaryVariant: FC = () => {
  return (
    <>
      <ContentContainer variant="fourthEdition">
        <div className="container grid grid-cols-1 items-center gap-8 py-20 md:grid-cols-2 lg:py-32">
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Fourth Edition</h2>
            <p className="max-w-[600px] md:text-xl">
              The fourth edition of Computer Systems offers a clear, detailed, step-by-step exposition of the central
              ideas in computer organization, assembly language, and computer architecture.
            </p>
            <div className="mt-4">
              <Button asChild>
                <Link href="/docs"> Learn More </Link>
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
      <ContentContainer>
        <div className="container grid grid-cols-1 items-center gap-8 py-20 md:grid-cols-2 lg:py-32">
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
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Chinese Edition</h2>
            <p className="max-w-[600px] md:text-xl">
              A translation of the fourth edition, offering a clear, detailed, step-by-step exposition of the central
              ideas in computer organization, assembly language, and computer architecture.
            </p>
            <div className="mt-4">
              <Button asChild>
                <Link href="/docs"> Learn More </Link>
              </Button>
            </div>
          </div>
        </div>
      </ContentContainer>
    </>
  );
};
