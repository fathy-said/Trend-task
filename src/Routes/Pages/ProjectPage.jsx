
import React, { useState } from 'react';
import { ChartsBox, ExpenseBox, NotFound, ProjectHeader } from '../../Components';
const ProjectPage = () => {

  const [targetComponent, setTargetComponent] = useState({
    type: "aboutProject",
  });

  return (
    <div className="bg-color_13 w-full h-full relative">
      <ProjectHeader {...{ targetComponent, setTargetComponent }} />
      <div className=" !p-[32px] container  h-full">
        {targetComponent?.type == "expense" ? (
          <ExpenseBox />
        ) : targetComponent?.type == "aboutProject" ? (
          <ChartsBox />
        ) : (
          <NotFound />
        )}


      </div>
    </div>
  );
}

export default ProjectPage;
