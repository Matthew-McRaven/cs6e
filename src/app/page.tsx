import type { ReactNode, FC } from "react";

import SiteHeader from "./components/site-header";
import ContentContainer from "@components/content-container";
import { Heading, Text } from "@components/typography";
import Hero from "./components/hero";
import About from "./components/about";
import EditionSummary from "./components/edition-summary";
import Resources from "./components/resources";
import JoinUs from "./components/join-us";
import { EditionSummaryVariant } from "./components/edition-summary/edition-summary";
import { Award, BookOpen, GraduationCap, Users } from "lucide-react";

export default async function Home() {
  const sixthEdition = await sixth.getSixthEdition();
  const authors = [
    {
      name: "J. Stanley Warford",
      image: "/stan.jpg",
      bio: "Dr. Stan Warford is a distinguished expert in computer science with decades of experience in teaching and research. His clear and practical approach to topics like computer architecture and programming has made him a favorite among students and colleagues alike.",
      achievements: [
        { icon: <Award className="w-5 h-5 text-violet-600" />, text: "Achievement 1" },
        { icon: <BookOpen className="w-5 h-5 text-violet-600" />, text: "Achievement 2" },
        { icon: <Users className="w-5 h-5 text-violet-600" />, text: "Achievement 3" },
      ],
    },
    {
      name: "Matthew McRaven",
      image: "/matthew.jpg",
      bio: "Matthew McRaven is a computer systems architect with a deep focus on GPU design and high-performance computing. With an undergraduate degree from Pepperdine University and a master’s from Georgetown, his innovative work in system architecture highlights his commitment to advancing modern computing.",
      achievements: [
        { icon: <GraduationCap className="w-5 h-5 text-violet-600" />, text: "Achievement 1" },
        { icon: <Award className="w-5 h-5 text-violet-600" />, text: "Achievement 2" },
        { icon: <BookOpen className="w-5 h-5 text-violet-600" />, text: "Achievement 3" },
      ],
    },
  ];

  return (
    <>
      <div className="flex min-h-screen flex-col">
        <main>
          <Hero edition={sixthEdition} />
          <SiteHeader />
          <Example />
          {/* <MarketingSection /> */}
          <Resources />
          <PepNine />
          <AuthorSection authors={authors} />
          {/* <EditionSummary />
          <EditionSummaryVariant /> */}
          <JoinUs />
        </main>
        <footer className="min-h-[100px] bg-neutral-800"></footer>
      </div>
    </>
  );
}

import { FileText, AlertCircle, Bug, Code, Search, Book } from "lucide-react";
import { sixth } from "@/services/book";
import AuthorSection from "./components/about";

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
      <div className="lg:py-8">
        <div className="text-center">
          <Text>Custom Language Thingy</Text>
          <Heading variant="h2">Introducing the Pep9 Virtual Machine</Heading>
          <Text>
            Pep9 is a simulator allowing users to interact with the Pep/9 virtual machine at the assembly, operating
            system, and ISA levels.
          </Text>
        </div>
        <div className="w-full min-h-96 bg-slate-200 my-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highImpactFeatures.map((feature) => (
            <PepItem key={feature.title} {...feature} />
          ))}
        </div>
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

import { Cpu, Brain, Cog } from "lucide-react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard: FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="flex items-center mb-4">
      <div className="mr-4 text-blue-600">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

export function MarketingSection() {
  const features: FeatureCardProps[] = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Consistent Machine Model",
      description:
        "The Pep/10 machine, a small CISC computer, is used for describing all levels of the system. Students clearly see the relation between the levels of abstraction because they either program or design digital circuits for that machine at all the levels.",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Problem-Solving Emphasis",
      description:
        "Students retain info best by doing, and there's sure a lot of problems in the book. Our hands-on approach ensures that concepts are not just learned, but mastered through practice.",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Mature Companion Software",
      description:
        "Software honed over many editions to make students suffer less. Our tools are designed to enhance learning and streamline the problem-solving process.",
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Complete Program Examples",
      description:
        "We take you on a tour of the whole sausage factory so that there's no magic left. From basic concepts to complex systems, every step is explained and demonstrated.",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Comprehensive Coverage",
      description:
        "CS6E provides a thorough exploration of computer systems, from low-level hardware to high-level software concepts, ensuring a well-rounded understanding of the field.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose CS6E?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="#get-book"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            aria-label="Get your copy of CS6E now"
          >
            Get Your Copy Now
          </a>
        </div>
      </div>
    </section>
  );
}

// import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: "Push to deploy",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: "",
  },
  {
    name: "SSL certificates",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: "",
  },
  {
    name: "Simple queues",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: "",
  },
  {
    name: "Advanced security",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: "",
  },
];

export function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">Deploy faster</h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            Everything you need to deploy your app
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    {/* <feature.icon aria-hidden="true" className="size-6 text-white" /> */}
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
