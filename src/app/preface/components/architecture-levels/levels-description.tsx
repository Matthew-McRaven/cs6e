"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Heading, Text } from "@/components/typography";
import { architectureLevelDescriptions } from "./data";

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
            router.replace(`#${currentSectionId}`, { scroll: false });

            // workaround for app router being finick-y with hash changes
            dispatchEvent(new CustomEvent("section-changed", { detail: { section: currentSectionId } }));
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
      {architectureLevelDescriptions.map((item) => (
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
