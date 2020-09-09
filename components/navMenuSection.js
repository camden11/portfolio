import React, { useMemo } from "react";

import Link from "next/link";
import styles from "style/navMenuSection.module.css";

const SUBSECTIONS_PER_COLUMN = 4;

const NavMenuSection = ({
  section: { name, path, subSections },
  smallStyle,
  largeStyle,
}) => {
  const columnSize =
    subSections.length > SUBSECTIONS_PER_COLUMN ? largeStyle : smallStyle;

  const subSectionComponents = useMemo(() => {
    return subSections.map((subSection, index) => (
      <li className={styles.subSectionItem} key={index}>
        <Link href={subSection.path}>
          <a>{subSection.name}</a>
        </Link>
      </li>
    ));
  }, [subSections.length]);

  return (
    <div className={columnSize}>
      <Link href={path}>
        <a className={styles.sectionName}>{name}</a>
      </Link>
      {subSections && subSections.length > 0 && (
        <ul className={styles.subSections}>{subSectionComponents}</ul>
      )}
    </div>
  );
};

export default NavMenuSection;
