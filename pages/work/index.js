import { getFile, getFiles } from "util/fs";

import React from "react";
import { WorkItemList } from "components";
import { useColor } from "hooks";

const TEXT_COLOR = { r: 0, g: 0, b: 0 };
const BACKGROUND_COLOR = { r: 255, g: 255, b: 255 };

const WorkIndexPage = ({ content, work }) => {
  useColor(TEXT_COLOR, BACKGROUND_COLOR);
  return (
    <div>
      <div className="headline-section">
        <h1>{content.headline}</h1>
      </div>
      <div>
        <h3>{content.workHeader}</h3>
        <WorkItemList work={work} />
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const content = await getFile("work");
  const work = await getFiles("work");
  const sortedWork = work.sort((a, b) => a.priority - b.priority);
  return { props: { content, work: sortedWork } };
};

export default WorkIndexPage;
