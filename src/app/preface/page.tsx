import ContentContainer from "@/components/content-container";
import { ComputerSystemLevels, LevelDescriptions } from "./architecture-levels";
import { Heading, Text } from "@/components/typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SiteHeader from "../components/site-header";
import { List, ListItem } from "@/components/list";

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
              The fifth edition of Computer Systems offers a clear, detailed, step-by-step exposition of the central
              ideas in computer organization, assembly language, and computer architecture. The book is based in large
              part on a virtual computer, Pep/9, which is designed to teach the basic concepts of the classic von
              Neumann machine. The strength of this approach is that the central concepts of computer science are taught
              without getting entangled in the many irrelevant details that often accompany such courses. This approach
              also provides a foundation that encourages students to think about the underlying themes of computer
              science. Breadth is achieved by emphasizing computer science topics that are related to, but not usually
              included in, the treatment of hardware and its associated software.
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
      <SiteHeader />
      {/* <ContentContainer>
        <Heading variant="h2">Summary of Contents</Heading>
        <div className="container grid grid-cols-1 items-start gap-8 md:grid-cols-2">
          <div></div>
          <div>
            <Text>
              Computers operate at several levels of abstraction; programming at a high level of abstraction is only
              part of the story. This book presents a unified concept of computer systems based on the level structure.
              The book is divided into seven parts, corresponding to the seven levels of FIGURE P.1:
            </Text>
            <Text>
              The text generally presents the levels top-down, from the highest to the lowest. Level ISA3 is discussed
              before Level Asmb5, and Level LG1 is discussed before Level Mc2 for pedagogical reasons. In these two
              instances, it is more natural to revert temporarily to a bottom-up approach so that the building blocks of
              the lower level will be in hand for construction of the higher level.
            </Text>
          </div>
        </div>
      </ContentContainer> */}
      <ContentContainer>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-1 h-auto lg:h-screen static lg:sticky top-24">
            <ComputerSystemLevels />
          </div>
          <div className="col-span-2 overflow-y-scroll">
            <LevelDescriptions />
          </div>
        </div>
      </ContentContainer>
      <ContentContainer variant="secondary">
        <div className="container grid grid-cols-1 items-start gap-8 md:grid-cols-2 lg:py-32">
          <div>
            <div className="min-h-96 bg-slate-200 rounded-md"></div>
          </div>
          <div>
            <Heading variant="h2">Use in a Course</Heading>
            <Text>
              his book offers such broad coverage that instructors may wish to omit some of the material when designing
              a course. I use Chapters 1-7 in a computer systems course and Chapters 10-12 in a computer organization
              course.
            </Text>
            <Text>
              In the book, Chapters 1-5 must be covered sequentially. Chapters 6 (“Compiling to the Assembly Level”) and
              7 (“Language Translation Principles”) can be covered in either order. I often skip ahead to Chapter 7 to
              initiate a large software project, writing an assembler for a subset of Pep/9 assembly language, so
              students will have sufficient time to complete it during the semester. Chapter 11 (“Sequential Circuits”)
              is obviously dependent on Chapter 10 (“Combinational Circuits”), but neither depends on Chapter 9
              (“Storage Management”), which may be omitted. FIGURE P.2, a chapter dependency graph, summarizes the
              possible chapter omissions.
            </Text>
          </div>
        </div>
      </ContentContainer>
      <ContentContainer>
        <div className="container grid grid-cols-1 items-start gap-8 md:grid-cols-2 lg:py-32">
          <div>
            <Heading>Unique Features</Heading>
            <Text>
              Computer Systems has several unique features that differentiate it from other texts on computer systems,
              assembly language, and computer organization.
            </Text>
            <List>
              <ListItem>
                <span className="font-bold text-violet-950">Conceptual approach.</span> Many textbooks attempt to stay
                abreast of the field by including the latest technological developments, such as communication protocol
                specifications for the newest peripheral devices. They typically have how-this-device-works narrative
                explanations throughout. This text eschews such material in favor of selecting only those computing
                concepts that are fundamental, the mastery of which provides a basis for understanding both current and
                future technology. For instance, in mastering the concept of the space/time tradeoff, it is more
                important for students to experience the ideas with digital circuit design problems than to simply read
                about them in general. As another example, the concept of hardware parallelism is mastered best by
                learning how to combine cycles in a microcode implementation of an ISA instruction.
              </ListItem>
              <ListItem>
                <span className="font-bold text-violet-950">Problem-solving emphasis.</span> Students retain less when
                they only hear about or read about a subject. They retain more when they experience the subject.
                Computer Systems reflects this emphasis through the nearly 400 problem-solving exercises at the end of
                the chapters, many with multiple parts. Rather than ask the student to repeat verbiage from the text,
                the exercises require quantitative answers, or the analysis or design of a program or digital circuit at
                one of the levels of abstraction of the system.
              </ListItem>
              <ListItem>
                <span className="font-bold text-violet-950">Consistent machine model.</span> The Pep/9 machine, a small
                CISC computer, is the vehicle for describing all the levels of the system. Students clearly see the
                relation between the levels of abstraction because they either program or design digital circuits for
                that machine at all the levels. For example, when they design an ALU component at the LG1 level, they
                know where the ALU fits in the implementation of the ISA3 level. They learn the difference between an
                optimizing and nonoptimizing compiler by translating C programs to assembly language as a compiler
                would. Using the same machine model for these learning activities at the different levels is a huge
                productivity advantage because the model is consistent from top to bottom. However, Computer Systems
                also presents the MIPS machine to contrast RISC design principles with microprogrammed CISC designs.
              </ListItem>
              <ListItem>
                <span className="font-bold text-violet-950">Complete program examples.</span> Many computer organization
                and assembly language texts suffer from the code fragment syndrome. The memory model, addressing modes,
                and I/O features of Pep/9 enable students to write complete programs that can be easily executed and
                tested without resorting just to code fragments. Real machines, and especially RISC machines, have
                complex function-calling protocols involving issues like register allocation, register spillover, and
                memory alignment constraints. Pep/9 is one of the few pedagogic machines—perhaps the only one—that
                permits students to write complete programs with input and output using the following: global and local
                variables, global and local arrays, call by value and by reference, array parameters, switch statements
                with jump tables, recursion, linked structures with pointers, and the heap. Assignments to write
                complete programs further the goal of learning by doing, as opposed to learning by reading code
                fragments.
              </ListItem>
              <ListItem>
                <span className="font-bold text-violet-950">Integration of theory and practice.</span> Some readers
                observe that Chapter 7 on language translation principles is unusual in a computer systems book. This
                observation is a sad commentary on the gulf between theory and practice in computer science curricula
                and perhaps in the field of computer science itself. Because the text presents the C language at Level
                HOL6, assembly language at Level Asmb5, and machine language at Level ISA3, and has as one goal
                understanding the relationship between the levels, a better question is: How could a chapter on language
                translation principles not be included? Computer Systems incorporates theory whenever possible to
                bolster practice. For example, it presents Boolean algebra as an axiomatic system with exercises for
                proving theorems.
              </ListItem>
              <ListItem>
                <span className="font-bold text-violet-950">Breadth and depth.</span> The material in Chapters 1-6 is
                typical for books on computer systems or assembly language programming, and that in Chapters 8–12 for
                computer organization. Combining this breadth of material into one volume is unique and permits a
                consistent machine model to be used throughout the levels of abstraction of the complete system. Also
                unique is the depth of coverage at the digital circuit LG1 level, which takes the mystery out of the
                component parts of the CPU. For example, Computer Systems describes the implementations of the
                multiplexers, adders, ALUs, registers, memory subsystems, and bidirectional buses for the Pep/9 CPU.
                Students learn the implementation down to the logic gate level, with no conceptual holes in the grand
                narrative that would otherwise have to be taken on faith without complete understanding.
              </ListItem>
            </List>
          </div>
          <div className="sticky top-24">
            <div className="min-h-96 bg-slate-200 rounded-md"></div>
            <Text variant="blockquote">
              Computer Systems answers the question: What is the place of assembly language programming and computer
              organization in the computer science curriculum? It is to provide a depth of understanding about the
              architecture of the ubiquitous von Neumann machine. This text retains its unique goal to provide a
              balanced overview of all the main areas of the field, including the integration of software and hardware
              and the integration of theory and practice.
            </Text>
          </div>
        </div>
      </ContentContainer>
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
