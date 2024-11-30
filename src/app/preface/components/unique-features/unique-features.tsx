import { FC } from "react";

import ContentContainer from "@components/content-container";
import { List, ListItem } from "@components/list";
import { Heading, Text } from "@components/typography";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@components/ui/accordion";

const UniqueFeatures: FC = () => {
  return (
    <ContentContainer>
      <div className="container grid grid-cols-1 items-start gap-8 md:grid-cols-2 lg:py-32">
        <div>
          <Heading>Unique Features (v1)</Heading>
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
              future technology. For instance, in mastering the concept of the space/time tradeoff, it is more important
              for students to experience the ideas with digital circuit design problems than to simply read about them
              in general. As another example, the concept of hardware parallelism is mastered best by learning how to
              combine cycles in a microcode implementation of an ISA instruction.
            </ListItem>
            <ListItem>
              <span className="font-bold text-violet-950">Problem-solving emphasis.</span> Students retain less when
              they only hear about or read about a subject. They retain more when they experience the subject. Computer
              Systems reflects this emphasis through the nearly 400 problem-solving exercises at the end of the
              chapters, many with multiple parts. Rather than ask the student to repeat verbiage from the text, the
              exercises require quantitative answers, or the analysis or design of a program or digital circuit at one
              of the levels of abstraction of the system.
            </ListItem>
            <ListItem>
              <span className="font-bold text-violet-950">Consistent machine model.</span> The Pep/9 machine, a small
              CISC computer, is the vehicle for describing all the levels of the system. Students clearly see the
              relation between the levels of abstraction because they either program or design digital circuits for that
              machine at all the levels. For example, when they design an ALU component at the LG1 level, they know
              where the ALU fits in the implementation of the ISA3 level. They learn the difference between an
              optimizing and nonoptimizing compiler by translating C programs to assembly language as a compiler would.
              Using the same machine model for these learning activities at the different levels is a huge productivity
              advantage because the model is consistent from top to bottom. However, Computer Systems also presents the
              MIPS machine to contrast RISC design principles with microprogrammed CISC designs.
            </ListItem>
            <ListItem>
              <span className="font-bold text-violet-950">Complete program examples.</span> Many computer organization
              and assembly language texts suffer from the code fragment syndrome. The memory model, addressing modes,
              and I/O features of Pep/9 enable students to write complete programs that can be easily executed and
              tested without resorting just to code fragments. Real machines, and especially RISC machines, have complex
              function-calling protocols involving issues like register allocation, register spillover, and memory
              alignment constraints. Pep/9 is one of the few pedagogic machines—perhaps the only one—that permits
              students to write complete programs with input and output using the following: global and local variables,
              global and local arrays, call by value and by reference, array parameters, switch statements with jump
              tables, recursion, linked structures with pointers, and the heap. Assignments to write complete programs
              further the goal of learning by doing, as opposed to learning by reading code fragments.
            </ListItem>
            <ListItem>
              <span className="font-bold text-violet-950">Integration of theory and practice.</span> Some readers
              observe that Chapter 7 on language translation principles is unusual in a computer systems book. This
              observation is a sad commentary on the gulf between theory and practice in computer science curricula and
              perhaps in the field of computer science itself. Because the text presents the C language at Level HOL6,
              assembly language at Level Asmb5, and machine language at Level ISA3, and has as one goal understanding
              the relationship between the levels, a better question is: How could a chapter on language translation
              principles not be included? Computer Systems incorporates theory whenever possible to bolster practice.
              For example, it presents Boolean algebra as an axiomatic system with exercises for proving theorems.
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
            architecture of the ubiquitous von Neumann machine. This text retains its unique goal to provide a balanced
            overview of all the main areas of the field, including the integration of software and hardware and the
            integration of theory and practice.
          </Text>
        </div>
      </div>
    </ContentContainer>
  );
};

export default UniqueFeatures;

const data = [
  {
    title: "Conceptual approach",
    content:
      "Many textbooks attempt to stay abreast of the field by including the latest technological developments, such as communication protocol specifications for the newest peripheral devices. They typically havehow-this-device-works narrative explanations throughout. This text eschews such material in favor ofselecting only those computing concepts that are fundamental, the mastery of which provides a basis forunderstanding both current and future technology. For instance, in mastering the concept of thespace/time tradeoff, it is more important for students to experience the ideas with digital circuitdesign problems than to simply read about them in general. As another example, the concept of hardwareparallelism is mastered best by learning how to combine cycles in a microcode implementation of an ISAinstruction.",
  },
  {
    title: "Problem-solving emphasis",
    content:
      "Students retain less when they only hear about or read about a subject. They retain more when they experience the subject. Computer Systems reflects this emphasis through the nearly 400 problem-solving exercises at the end of the chapters, many with multiple parts. Rather than ask the student to repeat verbiage from the text, the exercises require quantitative answers, or the analysis or design of a program or digital circuit at one of the levels of abstraction of the system.",
  },
  {
    title: "Consistent machine model",
    content:
      "The Pep/9 machine, a small CISC computer, is the vehicle for describing all the levels of the system. Students clearly see the relation between the levels of abstraction because they either program or design digital circuits for that machine at all the levels. For example, when they design an ALU component at the LG1 level, they know where the ALU fits in the implementation of the ISA3 level. They learn the difference between an optimizing and nonoptimizing compiler by translating C programs to assembly language as a compiler would. Using the same machine model for these learning activities at the different levels is a huge productivity advantage because the model is consistent from top to bottom. However, Computer Systems also presents the MIPS machine to contrast RISC design principles with microprogrammed CISC designs.",
  },
  {
    title: "Complete program examples",
    content:
      "Many computer organization and assembly language texts suffer from the code fragment syndrome. The memory model, addressing modes, and I/O features of Pep/9 enable students to write complete programs that can be easily executed and tested without resorting just to code fragments. Real machines, and especially RISC machines, have complex function-calling protocols involving issues like register allocation, register spillover, and memory alignment constraints. Pep/9 is one of the few pedagogic machines—perhaps the only one—that permits students to write complete programs with input and output using the following: global and local variables, global and local arrays, call by value and by reference, array parameters, switch statements with jump tables, recursion, linked structures with pointers, and the heap. Assignments to write complete programs further the goal of learning by doing, as opposed to learning by reading code fragments.",
  },
  {
    title: "Integration of theory and practice",
    content:
      "Some readers observe that Chapter 7 on language translation principles is unusual in a computer systems book. This observation is a sad commentary on the gulf between theory and practice in computer science curricula and perhaps in the field of computer science itself. Because the text presents the C language at Level HOL6, assembly language at Level Asmb5, and machine language at Level ISA3, and has as one goal understanding the relationship between the levels, a better question is: How could a chapter on language translation principles not be included? Computer Systems incorporates theory whenever possible to bolster practice. For example, it presents Boolean algebra as an axiomatic system with exercises for proving theorems.",
  },
  {
    title: "Breadth and depth",
    content:
      "The material in Chapters 1-6 is typical for books on computer systems or assembly language programming, and that in Chapters 8–12 for computer organization. Combining this breadth of material into one volume is unique and permits a consistent machine model to be used throughout the levels of abstraction of the complete system. Also unique is the depth of coverage at the digital circuit LG1 level, which takes the mystery out of the component parts of the CPU. For example, Computer Systems describes the implementations of the multiplexers, adders, ALUs, registers, memory subsystems, and bidirectional buses for the Pep/9 CPU. Students learn the implementation down to the logic gate level, with no conceptual holes in the grand narrative that would otherwise have to be taken on faith without complete understanding.",
  },
];

export const UniqueFeaturesAccordions: FC = () => {
  return (
    <ContentContainer>
      <div className="container grid grid-cols-1 items-start gap-8 md:grid-cols-2 lg:py-32">
        <div>
          <Heading>Unique Features (v2)</Heading>
          <Text>
            Computer Systems has several unique features that differentiate it from other texts on computer systems,
            assembly language, and computer organization.
          </Text>
          <Accordion type="single" collapsible>
            {data.map(({ title, content }) => (
              <AccordionItem key={title} value={title}>
                <AccordionTrigger>{title}</AccordionTrigger>
                <AccordionContent>{content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="self-center">
          <div className="min-h-96 bg-slate-200 rounded-md"></div>
          <Text variant="blockquote">
            Computer Systems answers the question: What is the place of assembly language programming and computer
            organization in the computer science curriculum? It is to provide a depth of understanding about the
            architecture of the ubiquitous von Neumann machine. This text retains its unique goal to provide a balanced
            overview of all the main areas of the field, including the integration of software and hardware and the
            integration of theory and practice.
          </Text>
        </div>
      </div>
    </ContentContainer>
  );
};
