import type { ReactNode } from "react";

import SiteHeader from "./components/site-header";
import ContentContainer from "@components/content-container";
import { Heading, Text } from "@components/typography";
import Hero from "./components/hero";
import About from "./components/about";
import EditionSummary from "./components/edition-summary";
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
          <PepNine />
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

import { FileText, AlertCircle, Bug, Code, Search, Book } from "lucide-react";

const highImpactFeatures = [
  {
    icon: <FileText className="text-violet-900" />,
    title: "Integrated Text Editor",
    description: "A built-in text editor for writing and managing your source code efficiently.",
  },
  {
    icon: <AlertCircle className="text-violet-900" />,
    title: "Inline Error Messages",
    description:
      "Error messages are directly inserted within the source code at the location of the error for immediate feedback.",
  },
  {
    icon: <Code className="text-violet-900" />,
    title: "Student-Friendly Machine Language",
    description: "Machine language object code is presented in an easy-to-read hexadecimal format, ideal for learners.",
  },
  {
    icon: <Bug className="text-violet-900" />,
    title: "Integrated Debugger",
    description:
      "Offers breakpoints, single-step execution, CPU tracing, and memory tracing for in-depth debugging capabilities.",
  },

  {
    icon: <Search className="text-violet-900" />,
    title: "Flexible Application Tracing",
    description:
      "Allows tracing of the application, loader, or operating system individually or in any combination for granular analysis.",
  },
  {
    icon: <Book className="text-violet-900" />,
    title: "Built-In Text Examples",
    description:
      "Every example from the textbook is integrated into the application, making it a powerful tool for class demonstrations and self-study.",
  },
];

const PepNine = () => {
  return (
    <ContentContainer variant="secondary">
      <Text>Custom Language Thingy</Text>
      <Heading variant="h2">Introducting Pep9</Heading>
      <Text>
        Pep9 is a simulator allowing users to interact with the Pep/9 virtual machine at the assembly, operating system,
        and ISA levels.
      </Text>
      <div className="w-full min-h-96 bg-slate-200 my-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {highImpactFeatures.map((feature) => (
          <PepItem key={feature.title} {...feature} />
        ))}
      </div>
    </ContentContainer>
  );
};

const PepItem = ({ title, description, icon }: { title: string; description: string; icon: ReactNode }) => {
  return (
    <div className="flex gap-4">
      <div>{icon}</div>
      <Text className="!mt-0 text-gray-600">
        <span className="font-bold text-violet-950">{title}.</span> {description}
      </Text>
    </div>
  );
};
