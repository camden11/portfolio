import { getFile, getFiles } from "util/fs";

import Link from "next/link";
import React from "react";
import styles from "style/workPage.module.css";
import { useColor } from "hooks";

const WorkItemPage = ({ content, pageContent }) => {
  useColor(content.textColor, content.backgroundColor, [content.id]);

  return (
    <div>
      <div className="headline-section">
        <h1>{content.headline}</h1>
      </div>
      <div className="grid">
        <div className="column-7">
          <h3>{pageContent.contentHeader}</h3>
          {content.paragraphs.map((paragraph) => (
            <p>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async ({ params: { id } }) => {
  const pageContent = await getFile(`/work`);
  const content = await getFile(`/work/${id}`);
  return { props: { content, pageContent } };
};

export const getStaticPaths = async () => {
  const allWork = await getFiles("work");
  const paths = allWork.map((workItem) => ({ params: { id: workItem.id } }));
  return { paths, fallback: false };
};

export default WorkItemPage;
