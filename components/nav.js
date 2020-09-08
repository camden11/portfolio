import { NavMenu, NavTitleLink } from "components";
import React, { useEffect, useState } from "react";
import { usePageTitle, useTyper } from "hooks";

import { PageTitle } from "state";
import { classNames } from "util/style";
import styles from "style/nav.module.css";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const { isDone } = PageTitle.useContainer();

  usePageTitle();
  const titleSectionNames = useTyper();

  useEffect(() => {
    if (!isDone) {
      setOpen(false);
    }
  }, [isDone]);

  return (
    <div className={styles.nav}>
      <div className={styles.navBar}>
        <div className={styles.navTextContainer}>
          <h2>
            {titleSectionNames.map((_, index) => (
              <span key={index}>
                <NavTitleLink
                  currentSectionNames={titleSectionNames.slice(0, index + 1)}
                />
                {index !== titleSectionNames.length - 1 && " / "}
              </span>
            ))}
          </h2>
        </div>
        <button
          className={classNames([styles.navButton, "with-color"])}
          onClick={() => setOpen(!open)}
        >
          <div
            className={classNames([
              styles.navButtonIcon,
              open ? styles.navButtonIconOpen : styles.navButtonIconClosed,
            ])}
          >
            +
          </div>
        </button>
      </div>
      <NavMenu open={open} />
    </div>
  );
};

export default Nav;
