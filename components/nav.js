import Link from "next/link";
import React, { useState } from "react";

import { BackgroundColor, TextColor } from "state";
import { NavMenu, PageTitle } from "components";
import styles from "style/nav.module.css";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const backgroundColor = BackgroundColor.useContainer();
  const textColor = TextColor.useContainer();

  return (
    <div className={styles.nav}>
      <div className={styles.navBar}>
        <div className={styles.navTextContainer}>
          <Link href="/">
            <a className="unstyled">
              <PageTitle />
            </a>
          </Link>
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
