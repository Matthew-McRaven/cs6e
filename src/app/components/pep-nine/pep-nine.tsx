"use client";

import type { FC, ReactNode } from "react";

import { useEffect, useRef, useState } from "react";

import ContentContainer from "@/components/content-container";
import { Heading, Text } from "@/components/typography";
import { FileText, AlertCircle, Bug, Code, Search, Book } from "lucide-react";

const highImpactFeatures = [
  {
    icon: <FileText className="text-violet-900" />,
    image: "/feat_editor.png",
    title: "Integrated Text Editor",
    description: "A built-in text editor for writing and managing your source code efficiently.",
  },
  {
    icon: <AlertCircle className="text-violet-900" />,
    image: "/feat_errors.png",
    title: "Inline Error Messages",
    description:
      "Error messages are directly inserted within the source code at the location of the error for immediate feedback.",
  },
  {
    icon: <Code className="text-violet-900" />,
    image: "/feat_hex_code.png",
    title: "Student-Friendly Machine Language",
    description: "Machine language object code is presented in an easy-to-read hexadecimal format, ideal for learners.",
  },
  {
    icon: <Bug className="text-violet-900" />,
    image: "/feat_debugger.png",
    title: "Integrated Debugger",
    description:
      "Offers breakpoints, single-step execution, CPU tracing, and memory tracing for in-depth debugging capabilities.",
  },

  {
    icon: <Search className="text-violet-900" />,
    image: "/feat_tracing.gif",
    title: "Flexible Application Tracing",
    description:
      "Allows tracing of the application, loader, or operating system individually or in any combination for granular analysis.",
  },
  {
    icon: <Book className="text-violet-900" />,
    image: "/feat_example.png",
    title: "Built-In Text Examples",
    description:
      "Every example from the textbook is integrated into the application, making it a powerful tool for class demonstrations and self-study.",
  },
];

const images = highImpactFeatures.map(({ image }) => image);

const carouselSpeed = 10_000;

const PepNine: FC = () => {
  const intervalId = useRef<NodeJS.Timeout | null>(null);

  const [currentImage, setCurrentImage] = useState(0);

  const setImage = (index: number) => {
    setCurrentImage(index);
  };

  const nextImage = () => {
    setCurrentImage((index) => (index + 1) % images.length);
  };

  const startInterval = () => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }

    intervalId.current = setInterval(nextImage, carouselSpeed);
  };

  useEffect(() => {
    startInterval();

    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, []);

  return (
    <ContentContainer variant="secondary">
      <div className="lg:py-8">
        <div className="text-center">
          <Text>Custom Language Thingy</Text>
          <Heading variant="h2">Introducing the Pep9 Virtual Machine</Heading>
          <Text>
            Pep9 is a simulator allowing users to interact with the Pep/9 virtual machine at the assembly, operating
            system, and ISA levels.
          </Text>
        </div>
        <div className="w-full flex items-center justify-center my-8">
          <img className="h-[640px]" src={images[currentImage]} alt="carousel" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highImpactFeatures.map((feature, index) => (
            <PepItem
              key={feature.title}
              selected={index === currentImage}
              onClick={() => {
                setImage(index);
                startInterval();
              }}
              {...feature}
            />
          ))}
        </div>
      </div>
    </ContentContainer>
  );
};

export default PepNine;

interface PepItemProps {
  onClick: () => void;
  title: string;
  description: string;
  icon: ReactNode;
  selected: boolean;
}

const PepItem: FC<PepItemProps> = ({ title, description, icon, onClick, selected }) => {
  return (
    <button
      onClick={onClick}
      className={`flex gap-4 transition-all duration-200 ease-in-out hover:bg-violet-100 ${
        selected ? "bg-violet-100 " : ""
      }`}
    >
      <div>{icon}</div>
      <Text className="!mt-0 text-gray-600">
        <span className="font-bold text-violet-950">{title}.</span> {description}
      </Text>
    </button>
  );
};
