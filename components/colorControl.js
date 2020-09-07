import { BackgroundColor, TextColor } from "state";

import React from "react";
import styles from "style/colorControl.module.css";

const ColorControl = ({ children }) => {
  const textColor = TextColor.useContainer();
  const backgroundColor = BackgroundColor.useContainer();
  return (
    <div
      className={styles.colorControl}
      style={{ color: textColor.color, backgroundColor: backgroundColor.color }}
    >
      {children}
    </div>
  );
};

export default ColorControl;
