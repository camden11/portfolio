import React, { useState } from "react";

import { BackgroundColor, TextColor } from "state";
import { Slider } from "components";
import styles from "style/nav.module.css";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const backgroundColor = BackgroundColor.useContainer();
  const textColor = TextColor.useContainer();

  return (
    <div className={styles.nav}>
      <div className={styles.navBar}>
        <h2 className={styles.navText}>Camden Phalen</h2>
        <button
          className={styles.navButton}
          style={{
            color: backgroundColor.getColor(),
            backgroundColor: textColor.getColor(),
          }}
          onClick={() => setOpen(!open)}
        >
          +
        </button>
      </div>
      <div
        className={styles.navMenu}
        style={{
          maxHeight: open ? 200 : 0,
          borderBottom: open ? "2px solid" : "none",
        }}
      >
        Menu here
        <Slider
          onChange={(value) =>
            textColor.setColor({ r: value, g: value, b: value })
          }
        />
        <Slider
          onChange={(value) =>
            backgroundColor.setColor({ r: value, g: value, b: value })
          }
        />
      </div>
    </div>
  );
};

export default Nav;
