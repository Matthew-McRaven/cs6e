"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Heading, Text } from "@/components/typography";

const levels = [
  { name: "Application level", number: 7 },
  { name: "High-order language level", number: 6 },
  { name: "Assembly level", number: 5 },
  { name: "Operating system level", number: 4 },
  { name: "Instruction set architecture level", number: 3 },
  { name: "Microcode level", number: 2 },
  { name: "Logic gate level", number: 1 },
];

export function ComputerSystemLevels() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeLevel, setActiveLevel] = useState<string | null>("Application level");

  useCustomEventListener("custom-hash-change", ({ detail }) => {
    const level = levels.find((l) => l.name.toLowerCase().replace(/\s+/g, "-") === detail.hash.replace("#", ""));
    if (level) {
      setActiveLevel(level.name);
    } else {
      setActiveLevel(null);
    }
  });

  const handleClick = (levelName: string) => {
    const hash = levelName.toLowerCase().replace(/\s+/g, "-");
    router.push(`${pathname}#${hash}`, { scroll: true });
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-8 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-8">Computer System Abstraction Levels</h2>
      <div className="space-y-4">
        {levels.map((level, index) => (
          <div key={level.name} className="relative">
            <button
              onClick={() => handleClick(level.name)}
              className={cn(
                "w-full text-left p-4 transition-colors rounded-md",
                activeLevel === level.name ? "bg-violet-700" : "bg-transparent border-2 ",
                activeLevel === level.name ? "text-white" : "text-inherit"
              )}
            >
              <span className="font-medium">
                {level.number}. {level.name}
              </span>
            </button>
            {index < levels.length - 1 && <div className="absolute left-1/2 -bottom-4 w-0.5 h-4 bg-gray-300" />}
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    title: "Level App7",
    id: "application-level",
    description: [
      "Level App7 is a single chapter on application programs. It presents the idea of levels of abstraction and binary information and establishes the framework for the remainder of the book. A few concepts of relational databases are presented as an example of a typical computer application.",
    ],
  },
  {
    title: "Level HOL6",
    id: "high-order-language-level",
    description: [
      "Level HOL6 consists of one chapter, which reviews the C programming language. The chapter assumes that the student has experience in some imperative language, such as Java or Python—not necessarily C. The instructor can readily translate the C examples to other common Level HOL6 languages if necessary.",
      "This chapter emphasizes the C memory model, including global versus local variables, functions with parameters, and dynamically allocated variables. The topic of recursion is treated because it depends on the mechanism of memory allocation on the run-time stack. A fairly detailed explanation is given on the details of the memory allocation process for function calls, as this mechanism is revisited at a lower level of abstraction later in the book.",
    ],
  },
  {
    title: "Level Asmb5",
    id: "assembly-level",
    description: [
      "Level Asmb5 is the assembly level. The text presents the concept of the assembler as a translator between two levels—assembly and machine. It introduces Level Asmb5 symbols and the symbol table.",
      "The unified approach really comes into play here. Chapters 5 and 6 present the compiler as a translator from a high-order language to assembly language. Previously, students learned a specific Level HOL6 language, C, and a specific von Neumann machine, Pep/9. These chapters continue the theme of relationships between the levels by showing the correspondence between (a) assignment statements at Level HOL6 and load/store instructions at Level Asmb5, (b) loops and if statements at Level HOL6 and branching instructions at Level Asmb5, (c) arrays at Level HOL6 and indexed addressing at Level Asmb5, (d) procedure calls at Level HOL6 and the run-time stack at Level Asmb5, (e) function and procedure parameters at Level HOL6 and stack-relative addressing at Level Asmb5, (f) switch statements at Level HOL6 and jump tables at Level Asmb5, and (g) pointers at Level HOL6 and addresses at Level Asmb5.",
      "The beauty of the unified approach is that the text can implement the examples from the C chapter at this lower level. For example, the run-time stack illustrated in the recursive examples of Chapter 2 corresponds directly to the hardware stack in Pep/9 main memory. Students gain an understanding of the compilation process by translating manually between the two levels.",
      "This approach provides a natural setting for the discussion of central issues in computer science. For example, the book presents structured programming at Level HOL6 versus the possibility of unstructured programming at Level Asmb5. It discusses the goto controversy and the structured programming/efficiency tradeoff, giving concrete examples from languages at the two levels.",
      "Chapter 7, “Language Translation Principles,” introduces students to computer science theory. Now that students know intuitively how to translate from a high-level language to assembly language, we pose the fundamental question underlying all of computing: What can be automated? The theory naturally fits in here because students now know what a compiler (an automated translator) must do. They learn about parsing and finite-state machines—deterministic and nondeterministic—in the context of recognizing C and Pep/9 assembly language tokens. This chapter includes an automatic translator between two small languages, which illustrates lexical analysis, parsing, and code generation. The lexical analyzer is an implementation of a finite-state machine. What could be a more natural setting for the theory?",
    ],
  },
  {
    title: "Level OS4",
    id: "operating-system-level",
    description: [
      "Level OS4 consists of two chapters on operating systems. Chapter 8 is a description of process management. Two sections, one on loaders and another on trap handlers, illustrate the concepts with the Pep/9 operating system. Seven instructions have unimplemented opcodes that generate software traps. The operating system stores the process control block of the user’s running process on the system stack, and the interrupt service routine interprets the instruction. The classic state transition diagram for running and waiting processes in an operating system is thus reinforced with a specific implementation of a suspended process. The chapter concludes with a description of concurrent processes and deadlocks. Chapter 9 describes storage management, both main memory and disk memory.",
    ],
  },
  {
    title: "Level ISA3",
    id: "instruction-set-architecture-level",
    description: [
      "Level ISA3 is the instruction set architecture level. Its two chapters describe Pep/9, a virtual computer designed to illustrate computer concepts. Pep/9 is a small complex instruction set computer (CISC); a von Neumann machine. The central processing unit (CPU) contains an accumulator, an index register, a program counter, a stack pointer, and an instruction register. It has eight addressing modes: immediate, direct, indirect, stack-relative, stack-relative deferred, indexed, stack-indexed, and stack-deferred indexed. The Pep/9 operating system, in simulated read-only memory (ROM), can load and execute programs in hexadecimal format from students’ text files. Students run short programs on the Pep/9 simulator and learn that executing a store instruction to ROM does not change the memory value.",
      "Students learn the fundamentals of information representation and computer organization at the bit level. Because a central theme of this book is the relationship of the levels to one another, the Pep/9 chapters show the relationship between the ASCII representation (Level ISA3) and C variables of type char (Level HOL6). They also show the relationship between two’s complement representation (Level ISA3) and C variables of type int (Level HOL6).",
    ],
  },
  {
    title: "Level Mc2",
    id: "microcode-level",
    description: [
      "Chapter 12 describes the microprogrammed control section of the Pep/9 CPU. It gives the control sequences for a few sample instructions and addressing modes and provides a large set of exercises for the others. It also presents concepts of load/store architectures, contrasting the MIPS reduced instruction set computer (RISC) machine with the Pep/9 CISC machine. It concludes with performance issues by describing cache memories, pipelining, dynamic branch prediction, and superscalar machines.",
    ],
  },
  {
    title: "Level LG1",
    id: "logic-gate-level",
    description: [
      "Level LG1 uses two chapters to present combinational and sequential circuits. Chapter 10 emphasizes the importance of the mathematical foundation of computer science by starting with the axioms of Boolean algebra. It shows the relationship between Boolean algebra and logic gates and then describes some common logic devices, including a complete logic design of the Pep/9 arithmetic logic unit (ALU). Chapter 11 illustrates the fundamental concept of a finite-state machine through the state transition diagrams of sequential circuits. It concludes with a description of common computer subsystems such as bidirectional buses, memory chips, and two-port memory banks.",
    ],
  },
];

export const LevelDescriptions = () => {
  const router = useRouter();

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const viewportHeight = window.innerHeight;

    const options = {
      root: null,
      rootMargin: `-${viewportHeight / 2}px 0px -${viewportHeight / 2}px 0px`,
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentSectionId = entry.target.id;
          if (window.location.hash !== `#${currentSectionId}`) {
            // Use setTimeout to ensure the hash updates before dispatching
            router.replace(`#${currentSectionId}`, { scroll: false });
            dispatchEvent(new CustomEvent("custom-hash-change", { detail: { hash: `#${currentSectionId}` } }));
          }
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [router]);

  return (
    <div>
      <Heading className="pb-6" variant="h2">
        Summary of Contents
      </Heading>
      <div>
        <Text>
          Computers operate at several levels of abstraction; programming at a high level of abstraction is only part of
          the story. This book presents a unified concept of computer systems based on the level structure. The book is
          divided into seven parts.
        </Text>
        <Text>
          The text generally presents the levels top-down, from the highest to the lowest. Level ISA3 is discussed
          before Level Asmb5, and Level LG1 is discussed before Level Mc2 for pedagogical reasons. In these two
          instances, it is more natural to revert temporarily to a bottom-up approach so that the building blocks of the
          lower level will be in hand for construction of the higher level.
        </Text>
      </div>
      {data.map((item) => (
        <section key={item.id} id={item.id} className="py-8">
          <Heading variant="h3">{item.title}</Heading>
          {item.description.map((paragraph, i) => (
            <Text key={i}>{paragraph}</Text>
          ))}
        </section>
      ))}
    </div>
  );
};

/* eslint-disable  @typescript-eslint/no-explicit-any */
type CustomEventHandler<T = any> = (event: CustomEvent<T>) => void;

interface UseCustomEventListenerOptions {
  target?: EventTarget;
  options?: boolean | AddEventListenerOptions;
}

/* eslint-disable  @typescript-eslint/no-explicit-any */
function useCustomEventListener<T = any>(
  eventType: string,
  handler: CustomEventHandler<T>,
  options: UseCustomEventListenerOptions = {}
) {
  const savedHandler = useRef<CustomEventHandler<T>>();
  const { options: listenerOptions = false } = options;

  const isBrowser = typeof window !== "undefined";
  const target = options.target || (isBrowser ? window : null);

  useEffect(() => {
    if (!(target && target.addEventListener)) {
      return;
    }

    savedHandler.current = handler;

    const eventListener = (event: Event) => {
      if (savedHandler.current && event instanceof CustomEvent) {
        savedHandler.current(event as CustomEvent<T>);
      }
    };

    target.addEventListener(eventType, eventListener, listenerOptions);

    return () => {
      target.removeEventListener(eventType, eventListener, listenerOptions);
    };
    /* eslint-disable  react-hooks/exhaustive-deps */
  }, [eventType, target, listenerOptions]);
}
