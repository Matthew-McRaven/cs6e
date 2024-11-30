import ContentContainer from "@/components/content-container";
import { Heading, Text } from "@/components/typography";

import { Card, CardContent } from "@/components/ui/card";
import SiteHeader from "../components/site-header";
import { List, ListItem } from "@/components/list";
import ArchitectureLevels from "./components/architecture-levels";
import PrefaceHero from "./components/preface-hero";
import UseInCourse from "./components/use-in-course";
import UniqueFeatures, { UniqueFeaturesAccordions } from "./components/unique-features";

// Computer Systems answers the question: What is the place of assembly
// language programming and computer organization in the computer science
// curriculum? It is to provide a depth of understanding about the architecture
// of the ubiquitous von Neumann machine. This text retains its unique goal to
// provide a balanced overview of all the main areas of the field, including
// the integration of software and hardware and the integration of theory and
// practice.

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <PrefaceHero />
      <SiteHeader />
      <ArchitectureLevels />
      <UseInCourse />
      <UniqueFeatures />
      <UniqueFeaturesAccordions />
      <ContentContainer variant="secondary">
        <div className="lg:py-32">
          <Heading className="pb-8">Support Materials</Heading>
          <div className="container grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <Card>
              <CardContent className="flex flex-col p-4">
                <div className="h-80 w-full bg-gray-300 rounded-md"></div>
                <Text>Pep/9 Assembler and Simulator</Text>
                <List>
                  <ListItem>An integrated text editor</ListItem>
                  <ListItem>
                    Error messages that are inserted within the source code at the place where the error is detected
                  </ListItem>
                  <ListItem>Student-friendly machine language object code in hexadecimal format</ListItem>
                  <ListItem>The ability to code directly in machine language, bypassing the assembler</ListItem>
                  <ListItem>
                    The ability to redefine the mnemonics for the unimplemented opcodes that trigger synchronous traps
                  </ListItem>
                </List>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col p-4">
                <div className="h-80 w-full bg-gray-300 rounded-md"></div>
                <Text>Pep/9 CPU Simulator</Text>
                <List>
                  <ListItem>
                    Color-coded display paths that trace the data flow, depending on control signals to the multiplexers
                  </ListItem>
                  <ListItem>
                    A single-cycle mode of operation with graphical user interface inputs for each control signal and
                    instant visual display of the effects of the signal
                  </ListItem>
                  <ListItem>
                    A multi cycle mode of operation with an integrated text editor for the student to write Mc2
                    microcode sequences and execute them to implement ISA3 instructions
                  </ListItem>
                  <ListItem>
                    New to this edition, a set of unit tests for every example and every microcode problem built into
                    the application
                  </ListItem>
                  <ListItem>
                    Every example from the text built into the application, making it a useful tool for class
                    demonstrations
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </div>
          <div className="pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="flex flex-col p-4">
                <Text>Lecture Slides</Text>
                <Text>A complete set of about 50 to 125 lecture slides per chapter is available in PDF format.</Text>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col p-4">
                <Text>Exam Handouts </Text>
                <Text>
                  A set of exam handouts, including reference information such as the ASCII table, instruction set
                  tables, etc., are provided for reference during exams and study sessions.
                </Text>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col p-4">
                <Text>Digital Circuit Labs </Text>
                <Text>A set of six digital circuit labs provides hands-on experience with physical breadboards.</Text>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col p-4">
                <Text>Solutions Manual</Text>
                <Text>
                  Solutions to selected exercises are provided in an appendix. Solutions to all the exercises and
                  problems are available to instructors who adopt the book.
                </Text>
              </CardContent>
            </Card>
          </div>
        </div>
      </ContentContainer>
    </main>
  );
}
