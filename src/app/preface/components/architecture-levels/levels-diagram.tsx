"use client";

import React, { FC, useState } from "react";
import { cn } from "@/lib/utils";
import { useCustomEventListener } from "./use-custom-event-listener";
import { levels } from "./data";

type Level = (typeof levels)[number];

const LevelsDiagram: FC = () => {
  const [activeLevel, setActiveLevel] = useState<Level | undefined>(levels[0]);

  // workaround for app router being finick-y with hash changes
  useCustomEventListener<{ section: string }>("section-changed", ({ detail }) => {
    setActiveLevel(levels.find((level) => level.id === detail.section));
  });

  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-8 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-8">Computer System Abstraction Levels</h2>
      <div className="space-y-4">
        {levels.map((level, index) => {
          const showLineToNext = index < levels.length - 1;

          return (
            <div key={level.name} className="relative">
              <div
                className={cn(
                  "w-full text-left p-4 transition-colors rounded-md font-medium",
                  activeLevel?.id === level.id ? "bg-violet-700" : "bg-transparent border-2 ",
                  activeLevel?.id === level.id ? "text-white" : "text-inherit"
                )}
              >
                {level.number}. {level.name}
              </div>
              {showLineToNext && <div className="absolute left-1/2 -bottom-4 w-0.5 h-4 bg-gray-300" />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LevelsDiagram;
