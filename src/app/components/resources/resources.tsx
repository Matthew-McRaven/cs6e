import type { FC } from "react";

import ContentContainer from "@components/content-container";
import { Heading, Text } from "@components/typography";
import { List, ListItem } from "@components/list";
import { GraduationCap, Pencil, PlayIcon, Projector } from "lucide-react";

// Small Line: Resources Included
// Big Heading: Courses, Lectures, and More

// Small Line: Start Learning Today
// Big Heading: Free Lectures & Assignments Inside

// Small Line: Enhance Your Skills
// Big Heading: Included Courses & Resources

// Small Line: Dive Deeper
// Big Heading: Access Free Courses Now

// Small Line: Unlock Learning
// Big Heading: Free Courses & Materials Included

// export default Resources;
const Resources: FC = () => {
  return (
    <ContentContainer>
      <div className="lg:p-8">
        <div>
          <Text className="text-violet-700">Dive Deeper</Text>
          <Heading variant="h2">Included Courses & Resources (v2)</Heading>
        </div>
        <Text className="text-gray-600 mt-4">
          Enhance your learning with comprehensive courses packed with video lectures, slides, and textbook assignments.
        </Text>
        <div className="container mt-8 grid grid-cols-1 items-center gap-8 md:grid-cols-2 ">
          <div>
            <div className="flex gap-4 items-center">
              <div className="bg-violet-800 w-8 h-8 rounded-sm flex items-center justify-center">
                <GraduationCap className="text-white" />
              </div>
              <Text className="!mt-0 text-gray-600">
                <span className="font-bold text-gray-900">Two Complete Courses.</span> Computer Systems and Computer
                Organization
              </Text>
            </div>
            <div className="flex gap-4 items-center mt-8">
              <div className="bg-violet-800 w-8 h-8 rounded-sm flex items-center justify-center">
                <PlayIcon className="text-white" />
              </div>
              <Text className="!mt-0 text-gray-600">
                <span className="font-bold text-gray-900">Video Lectures.</span> Stream directly on YouTube or on Apple
                University
              </Text>
            </div>
            <div className="flex gap-4 items-center mt-8">
              <div className="bg-violet-800 w-8 h-8 rounded-sm flex items-center justify-center">
                <Projector className="text-white" />
              </div>
              <Text className="!mt-0 text-gray-600">
                <span className="font-bold text-gray-900">Lecture Slides.</span> Downloadable slides for every lecture
              </Text>
            </div>
            <div className="flex gap-4 items-center mt-8">
              <div className="bg-violet-800 w-8 h-8 rounded-sm flex items-center justify-center">
                <Pencil className="text-white" />
              </div>
              <Text className="!mt-0 text-gray-600">
                <span className="font-bold text-gray-900">Homework Assignments.</span> Practice problems from the
                textbook
              </Text>
            </div>
          </div>
          <div className="w-full h-full bg-violet-200 rounded-md"></div>
        </div>
      </div>
    </ContentContainer>
  );
};

export default Resources;
