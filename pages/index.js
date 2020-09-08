import { Contact, WorkItemList } from "components";
import { getFile, getFiles } from "util/fs";

import Link from "next/link";
import styles from "style/Home.module.css";
import { useColor } from "hooks";

const TEXT_COLOR = { r: 0, g: 0, b: 0 };
const BACKGROUND_COLOR = { r: 255, g: 255, b: 255 };

const HomePage = ({ content, contact, work }) => {
  useColor(TEXT_COLOR, BACKGROUND_COLOR);
  return (
    <div>
      <div className="headline-section">
        <h1>{content.headline}</h1>
        <div className="align-right">
          <Link href="/about">
            <a>{content.aboutMoreButton}</a>
          </Link>
        </div>
      </div>
      <div className={styles.workSection}>
        <h3>{content.workHeader}</h3>
        <WorkItemList work={work} />
        <div className="align-right">
          <Link href="/work">
            <a>{content.workMoreButton}</a>
          </Link>
        </div>
      </div>
      <Contact content={contact} />
    </div>
  );
};

export const getStaticProps = async () => {
  const content = await getFile("home");
  const contact = await getFile("contact");
  const work = await getFiles("work");
  const sortedWork = work.sort((a, b) => a.priority - b.priority).slice(0, 4);
  return { props: { content, contact, work: sortedWork } };
};

export default HomePage;
