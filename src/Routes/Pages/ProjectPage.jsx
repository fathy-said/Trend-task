
import React, { useState } from 'react';
import { ChartsBox, ProjectHeader } from '../../Components';
const ProjectPage = () => {

  const [targetComponent, setTargetComponent] = useState({
    type: "عن المشروع",
  });
  return (
    <div className="bg-color_13 w-full relative">
      <ProjectHeader {...{ targetComponent, setTargetComponent }} />
      <div className=" !p-[32px] container ">
<ChartsBox/>
      </div>
    </div>
  );
}

export default ProjectPage;
