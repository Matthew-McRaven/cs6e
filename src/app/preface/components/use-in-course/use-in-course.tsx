import { FC } from "react";

import { Heading, Text } from "@components/typography";
import ContentContainer from "@components/content-container";
import ChapterDependencyGraph from "./chapter-dependency-graph";

const UseInCourse: FC = () => {
  return (
    <ContentContainer variant="secondary">
      <div className="container grid grid-cols-1 items-start gap-8 md:grid-cols-2">
        <div className="self-center">
          <Heading variant="h2">Use in a Course</Heading>
          <Text>
            his book offers such broad coverage that instructors may wish to omit some of the material when designing a
            course. I use Chapters 1-7 in a computer systems course and Chapters 10-12 in a computer organization
            course.
          </Text>
          <Text>
            In the book, Chapters 1-5 must be covered sequentially. Chapters 6 (“Compiling to the Assembly Level”) and 7
            (“Language Translation Principles”) can be covered in either order. I often skip ahead to Chapter 7 to
            initiate a large software project, writing an assembler for a subset of Pep/9 assembly language, so students
            will have sufficient time to complete it during the semester. Chapter 11 (“Sequential Circuits”) is
            obviously dependent on Chapter 10 (“Combinational Circuits”), but neither depends on Chapter 9 (“Storage
            Management”), which may be omitted. FIGURE P.2, a chapter dependency graph, summarizes the possible chapter
            omissions.
          </Text>
        </div>
        <ChapterDependencyGraph />
      </div>
    </ContentContainer>
  );
};

export default UseInCourse;
