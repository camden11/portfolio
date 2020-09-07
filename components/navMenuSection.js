import Link from "next/link";
import React from "react";
import styles from "style/navMenuSection.module.css";

const SUBSECTIONS_PER_COLUMN = 4;

const NavMenuSection = ({
  section: { name, path, subSections },
  smallStyle,
  largeStyle,
}) => {
  const columnSize =
    subSections.length > SUBSECTIONS_PER_COLUMN ? largeStyle : smallStyle;
  return (
    <div className={columnSize}>
      <Link href={path}>
        <a className={styles.sectionName}>{name}</a>
      </Link>
      {subSections && subSections.length > 0 && (
        <ul className={styles.subSections}>
          {subSections.map((subSection) => (
            <li className={styles.subSectionItem}>
              <Link href={subSection.path}>
                <a>{subSection.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavMenuSection;
