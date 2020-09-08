import { Image } from "components";
import React from "react";
import { classNames } from "util/style";
import { getFile } from "util/fs";
import styles from "style/about.module.css";
import { useColor } from "hooks";

const TEXT_COLOR = { r: 40, g: 99, b: 134 };
const BACKGROUND_COLOR = { r: 246, g: 243, b: 239 };

const AboutPage = ({ content }) => {
  useColor(TEXT_COLOR, BACKGROUND_COLOR);
  return (
    <div>
      <div className="headline-section">
        <h1>{content.headline}</h1>
      </div>
      <div className="grid">
        <div className="column-7">
          <h3>{content.aboutHeader}</h3>
          {content.paragraphs.map((paragraph) => (
            <p>{paragraph}</p>
          ))}
        </div>
        <div className={classNames(["column-5", styles.imageColumn])}>
          <Image src="/img/camden.jpg" />
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const content = await getFile("about");
  return { props: { content } };
};

export default AboutPage;
