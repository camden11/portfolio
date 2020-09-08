import { getFile, getFiles } from "util/fs";

import React from "react";
import { WorkIcon } from "components";
import { classNames } from "util/style";
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
          {content.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className={styles.gap} />
        <div className={styles.metaColumn}>
          <div className={styles.workIcon}>
            <WorkIcon workId={content.id} size={70} />
          </div>
          <div className={styles.metaSection}>
            <div className={styles.metaItem}>
              <h3 className={classNames(["unstyled", styles.firstMetaHeader])}>
                {pageContent.timeHeader}
              </h3>
              <p className={styles.metaText}>{content.time}</p>
            </div>
            <div className={styles.metaItem}>
              <h3 className="unstyled">{pageContent.techHeader}</h3>
              {content.tech.map((item, index) => (
                <p key={index} className={styles.metaText}>
                  {item}
                </p>
              ))}
            </div>
            <div className={styles.metaItem}>
              <h3 className="unstyled">{pageContent.linksHeader}</h3>
              {content.links.map(({ title, url }, index) => (
                <a
                  href={url}
                  target="_blank"
                  className={styles.metaLink}
                  key={index}
                >
                  {title}
                </a>
              ))}
            </div>
          </div>
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
