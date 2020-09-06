import Head from "next/head";
import Link from "next/link";

import { Contact, WorkItemList } from "components";
import { getFile, getFiles } from "util/fs";
import styles from "styles/Home.module.css";

const Home = ({ content, contact, work }) => {
  return (
    <div>
      <div>
        <h1>{content.headline}</h1>
        <div className="align-right">
          <Link href="/about">
            <a>{content.aboutMoreButton}</a>
          </Link>
        </div>
      </div>
      <div>
        <h3>{content.workHeader}</h3>
        <WorkItemList work={work} />
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

export default Home;
