import { Gallery, Head, WorkIcon } from "components";
import { getFile, getFiles } from "util/fs";

import React from "react";
import { classNames } from "util/style";
import styles from "style/workPage.module.css";
import { useColor } from "hooks";

const WorkItemPage = ({ content, pageContent }) => {
  useColor(content.textColor, content.backgroundColor, [content.id]);
  const hasImages = content.images && content.images.length > 0;

  return (
    <div>
      <Head head={content.head} />
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
        <div className={classNames(["column-3", styles.gap])} />
        <div
          className={classNames([
            "column-2",
            "right-column",
            styles.metaColumn,
          ])}
        >
          <div className={styles.workIcon}>
            <WorkIcon workId={content.id} size={70} />
          </div>
          <div className="meta-section">
            <div className="meta-item">
              <h3 className={classNames(["unstyled", styles.firstMetaHeader])}>
                {pageContent.timeHeader}
              </h3>
              <p className="meta-text">{content.time}</p>
            </div>
            <div className="meta-item">
              <h3 className="unstyled">{pageContent.techHeader}</h3>
              {content.tech.map((item, index) => (
                <p key={index} className="meta-text">
                  {item}
                </p>
              ))}
            </div>
            <div className="meta-item">
              <h3 className="unstyled">{pageContent.linksHeader}</h3>
              {content.links.map(({ title, url }, index) => (
                <a href={url} target="_blank" className="meta-link" key={index}>
                  {title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      {hasImages && (
        <div>
          <h3>{pageContent.imagesHeader}</h3>
          <Gallery images={content.images} />
        </div>
      )}
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
