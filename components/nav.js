import React, { useState } from "react";

import { BackgroundColor, TextColor } from "state";
import { NavMenu, NavTitleLink } from "components";
import styles from "style/nav.module.css";
import { useTyper } from "hooks";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const backgroundColor = BackgroundColor.useContainer();
  const textColor = TextColor.useContainer();

  const titleSectionNames = useTyper();

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
          className={styles.navButton}
          style={{
            color: backgroundColor.color,
            backgroundColor: textColor.color,
          }}
          onClick={() => setOpen(!open)}
        >
          +
        </button>
      </div>
      <NavMenu open={open} />
    </div>
  );
};

export default Nav;
