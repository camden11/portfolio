import Head from "next/head";
import Link from "next/link";

import { Contact } from "components";
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
      </div>
      <Contact content={contact} />
    </div>
  );
};

export const getStaticProps = async () => {
  const content = await getFile("home");
  const contact = await getFile("contact");
  const work = await getFiles("work");
  return { props: { content, contact, work } };
};

export default Home;
