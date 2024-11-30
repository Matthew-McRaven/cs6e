import { FC } from "react";

import ContentContainer from "@components/content-container";
import LevelsDiagram from "./levels-diagram";
import { LevelDescriptions } from "./levels-description";

const ArchitectureLevels: FC = () => {
  return (
    <ContentContainer>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="col-span-1 h-auto lg:h-screen static lg:sticky top-24">
          <LevelsDiagram />
        </div>
        <div className="col-span-2 overflow-y-scroll">
          <LevelDescriptions />
        </div>
      </div>
    </ContentContainer>
  );
};

export default ArchitectureLevels;
