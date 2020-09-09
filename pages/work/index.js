import { Head, WorkItemList } from "components";
import { getFile, getFiles } from "util/fs";

import React from "react";
import { useColor } from "hooks";

const TEXT_COLOR = { r: 246, g: 243, b: 239 };
const BACKGROUND_COLOR = { r: 45, g: 87, b: 61 };

const WorkIndexPage = ({ content, work }) => {
  useColor(TEXT_COLOR, BACKGROUND_COLOR);
  return (
    <div>
      <Head head={content.head} />
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
