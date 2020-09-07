import React from "react";
import Link from "next/link";

import { useColor } from "hooks";
import { getFile, getFiles } from "util/fs";

const WorkItemPage = ({ content }) => {
  useColor(content.textColor, content.backgroundColor, [content.id]);

  return (
    <div>
      <div className="headline-section">
        <h1>{content.headline}</h1>
        <Link href="/work/alignable">
          <a>please</a>
        </Link>
      </div>
    </div>
  );
};

export const getStaticProps = async ({ params: { id } }) => {
  const content = await getFile(`/work/${id}`);
  return { props: { content } };
};

export const getStaticPaths = async () => {
  const allWork = await getFiles("work");
  const paths = allWork.map((workItem) => ({ params: { id: workItem.id } }));
  return { paths, fallback: false };
};

export default WorkItemPage;
