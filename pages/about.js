import { Contact, Head, Image } from "components";

import React from "react";
import { classNames } from "util/style";
import { getFile } from "util/fs";
import styles from "style/about.module.css";
import { useColor } from "hooks";

const TEXT_COLOR = { r: 40, g: 99, b: 134 };
const BACKGROUND_COLOR = { r: 246, g: 243, b: 239 };

const AboutPage = ({ content, contact }) => {
  useColor(TEXT_COLOR, BACKGROUND_COLOR);
  return (
    <div>
      <Head head={content.head} />
      <div className="headline-section">
        <h1>{content.headline}</h1>
      </div>
      <div className="grid">
        <div className={classNames(["column-7", styles.contentColumn])}>
          <h3 className={styles.aboutHeader}>{content.aboutHeader}</h3>
          {content.paragraphs.map((paragraph) => (
            <p>{paragraph}</p>
          ))}
        </div>
        <div className={classNames(["column-5", styles.imageColumn])}>
          <Image src={content.image} alt={content.imageAlt} />
        </div>
      </div>
      <Contact content={contact} />
    </div>
  );
};

export const getStaticProps = async () => {
  const content = await getFile("about");
  const contact = await getFile("contact");
  return { props: { content, contact } };
};

export default AboutPage;
