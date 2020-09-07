import { BackgroundColor, PageTitle, TextColor } from "state";
import React, { useEffect, useState } from "react";

import styles from "style/colorControl.module.css";

const TRANSITION_TIME = 400;

const ColorControl = ({ children }) => {
  const [transition, setTransition] = useState(false);
  const [timeoutRef, setTimeoutRef] = useState(null);
  const textColor = TextColor.useContainer();
  const backgroundColor = BackgroundColor.useContainer();
  const { isDone } = PageTitle.useContainer();

  useEffect(() => {
    if (isDone) {
      clearTimeout(timeoutRef);
      setTransition(true);
      setTimeout(() => {
        setTransition(false);
      }, TRANSITION_TIME);
    }
  }, [isDone]);

  return (
    <div
      className={styles.colorControl}
      style={{
        color: textColor.color,
        backgroundColor: backgroundColor.color,
        transition: transition
          ? `background-color ${TRANSITION_TIME / 1000}s, color ${
              TRANSITION_TIME / 1000
            }s`
          : "none",
      }}
    >
      {children}
    </div>
  );
};

export default ColorControl;
