import React from "react";

import { BackgroundColor, TextColor } from "state";
import { Slider } from "components";
import styles from "style/navMenu.module.css";

const NavMenu = ({ open }) => {
  const backgroundColor = BackgroundColor.useContainer();
  const textColor = TextColor.useContainer();
  return (
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
  );
};

export default NavMenu;
