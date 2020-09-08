import { BackgroundColor, PageTitle, TextColor } from "state";
import React, { useEffect, useState } from "react";

import styles from "style/colorControl.module.css";

const TRANSITION_TIME = 400;

const ColorControl = ({ children }) => {
  const [transition, setTransition] = useState(false);
  const [timeoutRef, setTimeoutRef] = useState(null);
  const { formattedColor: textColor } = TextColor.useContainer();
  const { formattedColor: backgroundColor } = BackgroundColor.useContainer();
  const { isDone } = PageTitle.useContainer();

  useEffect(() => {
    if (isDone) {
      clearTimeout(timeoutRef);
      setTransition(true);
      const nextTimeoutRef = setTimeout(() => {
        setTransition(false);
      }, TRANSITION_TIME);
      setTimeoutRef(nextTimeoutRef);
    }
  }, [isDone]);

  return (
    <div
      className={styles.colorControl}
      style={{
        color: textColor,
        backgroundColor,
        transition: transition
          ? `background-color ${TRANSITION_TIME / 1000}s, color ${
              TRANSITION_TIME / 1000
            }s`
          : "none",
      }}
    >
      <style jsx global>
        {`
          input[type="range"]::-webkit-slider-thumb {
            background-color: ${textColor};
          }

          input[type="range"]::-webkit-slider-runnable-track {
            box-shadow: inset 0 -2px 0 0 ${textColor};
          }

          input[type="range"]::-moz-range-thumb {
            background-color: ${textColor};
          }

          input[type="range"]::-moz-range-track {
            box-shadow: inset 0 -2px 0 0 ${textColor};
          }

          input[type="range"]::-ms-thumb {
            background-color: ${textColor};
          }

          input[type="range"]::-ms-track {
            box-shadow: inset 0 -2px 0 0 ${textColor};
          }

          div.with-color {
            color: ${backgroundColor};
            background-color: ${textColor};
          }

          div.with-color.with-hover:hover {
            background-color: ${backgroundColor};
            transition: background-color 0.4s;
          }

          button.with-color {
            color: ${backgroundColor};
            background-color: ${textColor};
            box-shadow: inset 0 0 0 2px ${textColor};
          }

          button.with-color:hover {
            color: ${textColor};
            background-color: ${backgroundColor};
          }
        `}
      </style>
      {children}
    </div>
  );
};

export default ColorControl;
