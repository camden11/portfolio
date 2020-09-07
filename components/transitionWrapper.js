import React, { useState, useEffect } from "react";

import { PageTitle } from "state";
import styles from "style/transitionWrapper.module.css";

const TransitionWrapper = ({ children: childrenProp }) => {
  const [bottomTransition, setBottomTransition] = useState(false);
  const [intervalRef, setIntervalRef] = useState(null);
  const [children, setChildren] = useState(childrenProp);
  const { isDone } = PageTitle.useContainer();

  useEffect(() => {
    if (!isDone) {
      const intervalRef = setInterval(() => setBottomTransition(false), 200);
      setIntervalRef(intervalRef);
    } else {
      clearInterval(intervalRef);
      setBottomTransition(true);
      setChildren(childrenProp);
    }
  }, [isDone]);

  return (
    <div
      style={{
        bottom: bottomTransition ? 0 : 20,
        opacity: isDone ? 1 : 0,
        transition: isDone ? "bottom 0.4s, opacity 0.4s" : "opacity 0.2s",
      }}
      className={styles.transitionWrapper}
    >
      {children}
    </div>
  );
};

export default TransitionWrapper;
